#!/usr/bin/env node
/**
 * Fix remaining .html links and detail URLs without slugs.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../src')

function readSlugs(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  return [...text.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
}

const blogSlugs = readSlugs(path.join(SRC, 'data/blogPosts.ts'))
const serviceSlugs = readSlugs(path.join(SRC, 'data/services.ts'))
const portfolioSlugs = readSlugs(path.join(SRC, 'data/portfolioProjects.ts'))
const teamSlugs = readSlugs(path.join(SRC, 'data/teamMembers.ts'))

const DETAIL_HTML = [
  ['blog-deails', blogSlugs, 'blog'],
  ['blog-details', blogSlugs, 'blog'],
  ['service-details', serviceSlugs, 'service'],
  ['portfolio-details', portfolioSlugs, 'portfolio'],
  ['team-details', teamSlugs, 'team'],
].sort((a, b) => b[0].length - a[0].length)

const INDEX_ALIASES = {
  'index.html': '/',
  'index-company.html': '/05-corporate',
  'index-marketing-agency.html': '/10-marketing-agency',
  'index-startup.html': '/06-startup',
  'index-corporate.html': '/05-corporate',
  'index-seo-agency.html': '/04-services-agency',
  'index-web-agency.html': '/09-digital-agency',
}

const LIST_ROUTES = new Set(['/blog', '/service', '/portfolio', '/team'])

function cycleReplace(content, pattern, slugs, prefix) {
  if (!slugs.length) return content
  let i = 0
  const re = new RegExp(pattern, 'g')
  return content.replace(re, () => {
    const slug = slugs[i % slugs.length]
    i += 1
    return `href="/${prefix}/${slug}"`
  })
}

function fixDetailBareLinks(content) {
  let result = content
  const pairs = [
    ['/blog', blogSlugs],
    ['/service', serviceSlugs],
    ['/portfolio', portfolioSlugs],
    ['/team', teamSlugs],
  ]
  for (const [prefix, slugs] of pairs) {
    if (!slugs.length) continue
    let i = 0
    const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Only exact list route — not already /blog/foo
    const re = new RegExp(`href="${esc}"`, 'g')
    result = result.replace(re, () => {
      const slug = slugs[i % slugs.length]
      i += 1
      return `href="${prefix}/${slug}"`
    })
  }
  return result
}

function htmlToRoute(htmlFile) {
  if (INDEX_ALIASES[htmlFile]) return INDEX_ALIASES[htmlFile]
  if (htmlFile === 'index.html') return '/'
  return '/' + htmlFile.replace(/\.html$/i, '')
}

function fixHtmlLinks(content) {
  let result = content

  // Detail *.html with cycling slugs (href="blog-details.html" etc.)
  for (const [prefix, slugs, route] of DETAIL_HTML) {
    if (!slugs.length) continue
    let i = 0
    const re = new RegExp(`href=["']${prefix}(?:-[^"']*)?\\.html["']`, 'gi')
    result = result.replace(re, () => {
      const slug = slugs[i % slugs.length]
      i += 1
      return `href="/${route}/${slug}"`
    })
  }

  // Remaining *.html links
  result = result.replace(/href=["']([^"']+)\.html["']/gi, (match, file) => {
    const route = htmlToRoute(file + '.html')
    return `href="${route}"`
  })

  return result
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) {
      if (name === 'node_modules' || name === '.next') continue
      walk(p, files)
    } else if (/\.(tsx|ts|jsx|js)$/.test(name)) {
      files.push(p)
    }
  }
  return files
}

let updated = 0
let htmlRemaining = 0

for (const file of walk(SRC)) {
  if (file.includes(`${path.sep}[slug]${path.sep}`)) continue
  const orig = fs.readFileSync(file, 'utf8')
  let next = fixHtmlLinks(orig)
  next = fixDetailBareLinks(next)
  if (next !== orig) {
    fs.writeFileSync(file, next)
    updated++
  }
}

for (const file of walk(SRC)) {
  const text = fs.readFileSync(file, 'utf8')
  const m = text.match(/href=["'][^"']*\.html["']/gi)
  if (m) htmlRemaining += m.length
}

console.log(`Updated ${updated} files`)
console.log(`Remaining .html hrefs: ${htmlRemaining}`)
