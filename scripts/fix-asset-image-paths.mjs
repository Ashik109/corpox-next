#!/usr/bin/env node
/**
 * Normalize relative asset image paths to absolute public paths.
 * assets/images/... -> /assets/images/...
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.html', '.css', '.json'])

function fixContent(content) {
  // Only prefix when not already absolute from site root
  return content.replace(/(?<!\/)(?<![\w-])assets\/images/g, '/assets/images')
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next') continue
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) walk(p, files)
    else if (EXT.has(path.extname(name))) files.push(p)
  }
  return files
}

let filesChanged = 0

for (const file of walk(ROOT)) {
  const orig = fs.readFileSync(file, 'utf8')
  if (!orig.includes('assets/images')) continue
  const next = fixContent(orig)
  if (next !== orig) {
    fs.writeFileSync(file, next)
    filesChanged++
  }
}

let remaining = 0
for (const file of walk(ROOT)) {
  const text = fs.readFileSync(file, 'utf8')
  const matches = [...text.matchAll(/(?<!\/)(?<![\w-])assets\/images/g)]
  remaining += matches.length
}

console.log(`Updated ${filesChanged} files`)
console.log(`Remaining relative assets/images refs: ${remaining}`)
