#!/usr/bin/env node
/** Migrate /blog-details/:slug -> /blog/:slug (and service, portfolio, team) */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../src')

const PREFIX_MAP = [
  'blog-details-standard-white',
  'blog-details-sidebar-left-white',
  'blog-details-sidebar-white',
  'blog-details-standard',
  'blog-details-sidebar-left',
  'blog-details-sidebar',
  'blog-deails-sidebar-left-white',
  'blog-deails-sidebar-left',
  'blog-deails-sidebar-white',
  'blog-deails-video-popup-white',
  'blog-deails-video-popup',
  'blog-deails-video-two-white',
  'blog-deails-video-two',
  'blog-deails-video-white',
  'blog-deails-video',
  'blog-details-white',
  'blog-details',
  'service-details-center-white',
  'service-details-four-white',
  'service-details-three-white',
  'service-details-two-white',
  'service-details-white',
  'service-details-center',
  'service-details-four',
  'service-details-three',
  'service-details-two',
  'service-details',
  'portfolio-details-five-white',
  'portfolio-details-four-white',
  'portfolio-details-three-white',
  'portfolio-details-two-white',
  'portfolio-details-white',
  'portfolio-details-five',
  'portfolio-details-four',
  'portfolio-details-three',
  'portfolio-details-two',
  'portfolio-details',
  'team-details-white',
  'team-details',
].sort((a, b) => b.length - a.length)

const TARGET = {
  blog: 'blog',
  service: 'service',
  portfolio: 'portfolio',
  team: 'team',
}

function targetForPrefix(prefix) {
  if (prefix.startsWith('blog')) return TARGET.blog
  if (prefix.startsWith('service')) return TARGET.service
  if (prefix.startsWith('portfolio')) return TARGET.portfolio
  if (prefix.startsWith('team')) return TARGET.team
  return null
}

function migrateContent(content) {
  let result = content
  for (const prefix of PREFIX_MAP) {
    const target = targetForPrefix(prefix)
    if (!target) continue
    const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // /blog-details/slug -> /blog/slug
    result = result.replace(new RegExp(`/${esc}/`, 'g'), `/${target}/`)
    // detailRoute="/blog-details" -> detailRoute="/blog"
    result = result.replace(new RegExp(`detailRoute="/${esc}"`, 'g'), `detailRoute="/${target}"`)
    // href="/blog-details" (list/index links) -> /blog-grid for blog, keep list routes for others
    if (prefix.startsWith('blog')) {
      result = result.replace(new RegExp(`href="/${esc}"`, 'g'), 'href="/blog-grid"')
    } else {
      result = result.replace(new RegExp(`href="/${esc}"`, 'g'), `href="/${target}"`)
    }
  }
  return result
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) {
      if (name === 'node_modules') continue
      walk(p, files)
    } else if (/\.(tsx|ts|jsx|js)$/.test(name)) {
      files.push(p)
    }
  }
  return files
}

let n = 0
for (const file of walk(SRC)) {
  if (file.includes(`${path.sep}blog-details${path.sep}[slug]`)) continue
  if (file.includes(`${path.sep}blog${path.sep}[slug]`)) continue
  const orig = fs.readFileSync(file, 'utf8')
  const next = migrateContent(orig)
  if (next !== orig) {
    fs.writeFileSync(file, next)
    n++
  }
}
console.log(`Migrated links in ${n} files`)
