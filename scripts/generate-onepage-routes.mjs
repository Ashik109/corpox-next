#!/usr/bin/env node
/**
 * Scaffold missing onepage routes (1–26) from corpox-html and generate Section components.
 * Run: node scripts/generate-onepage-routes.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { processRoute } from './generate-section-components.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const APP = path.join(ROOT, 'src', 'app')
const HTML_DIR = path.join(ROOT, '..', 'corpox-html')

const ONEPAGE_BASES = [
  'onepage-one', 'onepage-two', 'onepage-three', 'onepage-four', 'onepage-five',
  'onepage-six', 'onepage-seven', 'onepage-eight', 'onepage-nine', 'onepage-ten',
  'onepage-eleven', 'onepage-twelve', 'onepage-thirteen', 'onepage-fourteen',
  'onepage-fifteen', 'onepage-sixteen', 'onepage-seventeen', 'onepage-eighteen',
  'onepage-nineteen', 'onepage-twenty', 'onepage-21', 'onepage-22', 'onepage-23',
  'onepage-24', 'onepage-25', 'onepage-26',
]

function allOnepageNames() {
  const names = []
  for (const base of ONEPAGE_BASES) {
    names.push(base)
    names.push(`${base}-white`)
  }
  return names
}

function titleFromBasename(basename) {
  const base = basename.replace(/-white$/, '')
  if (/^onepage-\d+$/.test(base)) return `Onepage ${base.replace('onepage-', '')}`
  const word = base.replace('onepage-', '').replace(/-/g, ' ')
  return 'Onepage ' + word.replace(/\b\w/g, (c) => c.toUpperCase())
}

function pageTemplate(basename, light) {
  return `import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: '${titleFromBasename(basename)} || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout${light ? ' lightMode' : ''}>
      <BodyContent />
    </InnerPageLayout>
  )
}
`
}

function scaffoldPage(basename) {
  const dir = path.join(APP, basename)
  const htmlFile = path.join(HTML_DIR, `${basename}.html`)
  if (!fs.existsSync(htmlFile)) {
    console.warn('skip (no html):', basename)
    return false
  }
  fs.mkdirSync(dir, { recursive: true })
  const light = basename.endsWith('-white')
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageTemplate(basename, light))
  return true
}

const toScaffold = allOnepageNames().filter((name) => !fs.existsSync(path.join(APP, name, 'page.tsx')))

console.log(`Scaffolding ${toScaffold.length} onepage routes...`)
for (const basename of toScaffold) {
  if (scaffoldPage(basename)) console.log('  page:', basename)
}

console.log('Generating section components from HTML...')
const stats = { ok: 0, fail: 0 }
for (const basename of toScaffold) {
  const result = processRoute(basename)
  if (result?.startsWith('ok')) {
    stats.ok++
    console.log('  sections:', basename, result)
  } else {
    stats.fail++
    console.warn('  failed:', basename, result)
  }
}

console.log(`Done — ${stats.ok} generated, ${stats.fail} failed`)
