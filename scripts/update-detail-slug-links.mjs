#!/usr/bin/env node
/**
 * Replace static detail page links with slug-based URLs.
 * Cycles through available slugs for each detail route prefix.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../src')

function readSlugs(filePath, exportName) {
  const text = fs.readFileSync(filePath, 'utf8')
  const match = text.match(new RegExp(`export const ${exportName}[\\s\\S]*?slug:\\s*'([^']+)'`, 'g'))
  if (!match) return []
  return [...text.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
}

const blogSlugs = readSlugs(path.join(__dirname, '../src/data/blogPosts.ts'), 'blogPosts')
const serviceSlugs = readSlugs(path.join(__dirname, '../src/data/services.ts'), 'services')
const portfolioSlugs = readSlugs(path.join(__dirname, '../src/data/portfolioProjects.ts'), 'portfolioProjects')
const teamSlugs = readSlugs(path.join(__dirname, '../src/data/teamMembers.ts'), 'teamMembers')

const ROUTE_SLUGS = [
  { prefix: '/blog', slugs: blogSlugs },
  { prefix: '/service', slugs: serviceSlugs },
  { prefix: '/portfolio', slugs: portfolioSlugs },
  { prefix: '/team', slugs: teamSlugs },
]

function applyCyclingLinks(content) {
  let result = content
  for (const { prefix, slugs } of ROUTE_SLUGS) {
    if (!slugs.length) continue
    let i = 0
    const exact = new RegExp(`href="${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g')
    result = result.replace(exact, () => {
      const slug = slugs[i % slugs.length]
      i += 1
      return `href="${prefix}/${slug}"`
    })
  }
  return result
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) {
      if (name === 'node_modules' || name.startsWith('.')) continue
      walk(p, files)
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      files.push(p)
    }
  }
  return files
}

let updated = 0
for (const file of walk(SRC)) {
  if (file.includes('[slug]')) continue
  const original = fs.readFileSync(file, 'utf8')
  const next = applyCyclingLinks(original)
  if (next !== original) {
    fs.writeFileSync(file, next)
    updated++
  }
}
console.log(`Updated ${updated} files with slug detail links`)
