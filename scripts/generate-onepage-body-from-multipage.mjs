#!/usr/bin/env node
/**
 * Build onepage BodyContent.tsx from matching multipage home page.tsx
 * (excludes header/footer/topbar — InnerPageLayout provides those)
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP = path.join(__dirname, '../src/app')

const MAP = {
  'one': '01-index-consulting',
  'two': '02-index-business-consulting-2',
  'three': '03-agency',
  'four': '04-services-agency',
  'five': '05-corporate',
  'six': '06-startup',
  'seven': '07-creative-agency',
  'eight': '08-business',
  'nine': '09-digital-agency',
  'ten': '10-marketing-agency',
  'eleven': '11-hr-website',
  'twelve': '12-index-business-consulting-3',
  'thirteen': '13-agency',
  'fourteen': '14-financial-consulting',
  'fifteen': '15-business-coach',
  'sixteen': '16-real-estate-consulting',
  'seventeen': '17-real-estate-consulting',
  'eighteen': '18-it-solution',
  'nineteen': '19-personal-advisory',
  'twenty': '20-gym-fitness',
  '21': '21-medical',
  '22': '22-solar',
  '23': '23-event',
  '24': '24-ai-agency',
  '25': '25-architecture',
  '26': '26-construction',
}

const SKIP_COMPONENTS = /^Header|^Footer|^Topbar|^MultipageHeader|^MultipageInnerFooter|^BodyClass$/i

function parseMultipagePage(multipageDir) {
  const pagePath = path.join(APP, multipageDir, 'page.tsx')
  if (!fs.existsSync(pagePath)) return null
  const content = fs.readFileSync(pagePath, 'utf8')

  const importMap = new Map()
  for (const m of content.matchAll(/^import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/gm)) {
    importMap.set(m[1], m[2])
  }

  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/)
  if (!mainMatch) return null

  const beforeMain = content.slice(0, mainMatch.index)
  const inMain = mainMatch[1]

  const ordered = []
  const seen = new Set()

  const add = (name) => {
    if (!importMap.has(name) || SKIP_COMPONENTS.test(name) || seen.has(name)) return
    seen.add(name)
    ordered.push(name)
  }

  for (const m of beforeMain.matchAll(/<([A-Z]\w+)/g)) add(m[1])
  for (const m of inMain.matchAll(/<([A-Z]\w+)(?:\s|\/|>)/g)) add(m[1])

  return ordered.map((name) => ({ name, from: importMap.get(name) }))
}

function resolveImport(fromPath, onepageDir, multipageDir) {
  if (fromPath.startsWith('.')) {
    const abs = path.normalize(path.join(APP, multipageDir, fromPath))
    let rel = path.relative(path.join(APP, onepageDir), abs).replace(/\\/g, '/')
    if (!rel.startsWith('.')) rel = './' + rel
    return rel.replace(/\.tsx?$/, '')
  }
  return fromPath
}

function generateBody(onepageName, multipageDir, components) {
  const imports = components
    .map(({ name, from }) => {
      const rel = resolveImport(from, onepageName, multipageDir)
      return `import ${name} from '${rel}'`
    })
    .join('\n')

  const jsx = components
    .map(({ name }) => `      <${name} />`)
    .join('\n')

  return `${imports}

function BodyContent() {
  return (
    <>
${jsx}
    </>
  )
}

export default BodyContent
`
}

function cleanSectionFiles(onepageDir) {
  if (!fs.existsSync(onepageDir)) return
  for (const f of fs.readdirSync(onepageDir)) {
    if (/^Section/.test(f) && f.endsWith('.tsx')) {
      fs.unlinkSync(path.join(onepageDir, f))
    }
  }
}

for (const [slug, multipage] of Object.entries(MAP)) {
  const components = parseMultipagePage(multipage)
  if (!components?.length) {
    console.warn('skip', slug, '- no components')
    continue
  }

  const body = generateBody(`onepage-${slug}`, multipage, components)

  for (const suffix of ['', '-white']) {
    const onepageName = `onepage-${slug}${suffix}`
    const dir = path.join(APP, onepageName)
    if (!fs.existsSync(path.join(dir, 'page.tsx'))) continue
    cleanSectionFiles(dir)
    fs.writeFileSync(path.join(dir, 'BodyContent.tsx'), body)
    console.log(onepageName, '<-', multipage, `(${components.length} sections)`)
  }
}

console.log('Done')
