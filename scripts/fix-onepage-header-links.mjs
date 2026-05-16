#!/usr/bin/env node
/** Fix relative onepage hrefs: href="onepage-*" -> href="/onepage-*" */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../src')

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else if (ent.name.endsWith('.tsx') || ent.name.endsWith('.ts')) files.push(p)
  }
  return files
}

let total = 0
for (const file of walk(SRC)) {
  const before = fs.readFileSync(file, 'utf8')
  const after = before.replace(/href="onepage-/g, 'href="/onepage-')
  if (after !== before) {
    fs.writeFileSync(file, after)
    const n = (before.match(/href="onepage-/g) || []).length
    total += n
    console.log(path.relative(SRC, file), n)
  }
}
console.log(`Fixed ${total} relative onepage links`)
