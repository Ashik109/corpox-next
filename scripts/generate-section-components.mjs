#!/usr/bin/env node
/**
 * For every app route folder that still uses dangerouslySetInnerHTML or Section* imports,
 * this script:
 *   1. Reads the matching corpox-html/<basename>.html
 *   2. Extracts the content between </header> and <!-- Start Footer Area
 *   3. Splits on top-level Start/End comment pairs into logical sections
 *   4. Parses each section with node-html-parser (fixing broken HTML)
 *   5. Re-serializes as valid JSX
 *   6. Writes individual SectionN.tsx component files
 *   7. Rewrites BodyContent.tsx to compose those components
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'node-html-parser'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const HTML_DIR = path.join(ROOT, '..', 'corpox-html')
const APP_DIR = path.join(ROOT, 'src', 'app')

// ─── Attributes that need JSX renaming ───────────────────────────────────────
const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  'stroke-width': 'strokeWidth',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'xlink:href': 'xlinkHref',
  'xmlns:xlink': 'xmlnsXlink',
  'xml:space': 'xmlSpace',
  crossorigin: 'crossOrigin',
  allowfullscreen: 'allowFullScreen',
  fetchpriority: 'fetchPriority',
  autoplay: 'autoPlay',
  playsinline: 'playsInline',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formmethod: 'formMethod',
  formtarget: 'formTarget',
  hreflang: 'hrefLang',
  srclang: 'srcLang',
  srcset: 'srcSet',
  srcdoc: 'srcDoc',
  'http-equiv': 'httpEquiv',
  inputmode: 'inputMode',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  novalidate: 'noValidate',
  enctype: 'encType',
  usemap: 'useMap',
  contenteditable: 'contentEditable',
  accesskey: 'accessKey',
  spellcheck: 'spellCheck',
  'data-bs-toggle': 'data-bs-toggle',
}

const VOID_TAGS = new Set(['img', 'br', 'hr', 'input', 'link', 'meta', 'area', 'base', 'col', 'embed', 'param', 'source', 'track', 'wbr'])

// SVG elements that need camelCase in JSX
const SVG_TAG_MAP = {
  textpath: 'textPath',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  fecomposite: 'feComposite',
  feconvolvematrix: 'feConvolveMatrix',
  fediffuselighting: 'feDiffuseLighting',
  fedisplacementmap: 'feDisplacementMap',
  fedropshadow: 'feDropShadow',
  feflood: 'feFlood',
  fefunca: 'feFuncA',
  fefuncb: 'feFuncB',
  fefuncg: 'feFuncG',
  fefuncr: 'feFuncR',
  fegaussianblur: 'feGaussianBlur',
  feimage: 'feImage',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  femorphology: 'feMorphology',
  feoffset: 'feOffset',
  fepointlight: 'fePointLight',
  fespecularlighting: 'feSpecularLighting',
  fespotlight: 'feSpotLight',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  foreignobject: 'foreignObject',
}

// Numeric attributes that need {value} instead of "value"
const NUMERIC_ATTRS = new Set([
  'tabIndex', 'rowSpan', 'colSpan', 'span', 'size', 'maxLength', 'minLength',
  'start', 'rows', 'cols', 'width', 'height',
  'aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'aria-level', 'aria-setsize', 'aria-posinset',
])

function nodeToJsx(node, indent = 0) {
  const pad = '  '.repeat(indent)

  // Text node
  if (node.nodeType === 3) {
    const text = node.rawText
    if (!text.trim()) return text.includes('\n') ? '\n' : text
    return text
  }

  // Comment node - skip
  if (node.nodeType === 8) return ''

  // Element node
  const rawTag = node.rawTagName?.toLowerCase()
  const tag = SVG_TAG_MAP[rawTag] || rawTag
  if (!tag) {
    // Document fragment - recurse children
    return node.childNodes.map((c) => nodeToJsx(c, indent)).join('')
  }

  // Build attributes
  const attrs = node.attributes || {}

  // HTML boolean attributes that should stay as bare booleans in JSX
  const HTML_BOOLEANS = new Set([
    'disabled', 'checked', 'selected', 'readonly', 'multiple', 'required',
    'autofocus', 'novalidate', 'open', 'hidden', 'defer', 'async', 'controls',
    'autoplay', 'loop', 'muted', 'playsinline', 'default', 'reversed', 'allowfullscreen', 'allowFullScreen',
    'formnovalidate', 'scoped', 'seamless', 'ismap',
  ])

  const attrStr = Object.entries(attrs)
    .map(([key, val]) => {
      // textarea does not support type in React
      if (rawTag === 'textarea' && key.toLowerCase() === 'type') return null
      const jsxKey = ATTR_MAP[key.toLowerCase()] || key
      // Boolean attributes (no value or value equals attribute name)
      if (val === '' || val === key) {
        if (HTML_BOOLEANS.has(key.toLowerCase())) return jsxKey
        // Non-boolean attrs with no value should be empty string
        return `${jsxKey}=""`
      }
      // Numeric
      if (NUMERIC_ATTRS.has(jsxKey) && /^-?\d+(\.\d+)?$/.test(val)) return `${jsxKey}={${val}}`
      // Convert inline style strings to JSX style objects
      if (key === 'style') {
        const pairs = val.split(';').filter(Boolean).map((decl) => {
          const colonIdx = decl.indexOf(':')
          if (colonIdx === -1) return null
          const prop = decl.slice(0, colonIdx).trim()
          const styleVal = decl.slice(colonIdx + 1).trim()
          if (!prop || !styleVal) return null
          // Skip CSS custom properties (--x, --y) - they're runtime values set by JS
          if (prop.startsWith('--')) return null
          // Skip deprecated SVG/CSS properties that TypeScript doesn't recognize
          if (['enable-background', 'enable_background'].includes(prop.toLowerCase())) return null
          const camelProp = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
          return `${camelProp}: '${styleVal}'`
        }).filter(Boolean)
        if (pairs.length === 0) return null
        return `style={{ ${pairs.join(', ')} }}`
      }
      // Fix asset paths
      let v = val
      if ((key === 'src' || key === 'href') && v.startsWith('assets/')) v = '/' + v
      // External links stay as-is, .html -> app path
      if (key === 'href' && !v.startsWith('http') && !v.startsWith('//') && !v.startsWith('#') && !v.startsWith('mailto:') && !v.startsWith('tel:') && !v.startsWith('/') && v.endsWith('.html')) {
        v = '/' + v.slice(0, -5)
      } else if (key === 'href' && v.endsWith('.html') && v.startsWith('/')) {
        v = v.slice(0, -5)
      }
      return `${jsxKey}="${v}"`
    })
    .filter(Boolean)
    .join(' ')

  const attrPart = attrStr ? ' ' + attrStr : ''

  // Void / self-closing
  if (VOID_TAGS.has(rawTag)) {
    return `<${tag}${attrPart} />`
  }

  // Children
  const children = (node.childNodes || []).map((c) => nodeToJsx(c, indent + 1)).join('')

  if (!children.trim()) {
    return `<${tag}${attrPart}></${tag}>`
  }

  return `<${tag}${attrPart}>${children}</${tag}>`
}

/** Convert legacy scroll-animation attributes (SAL/WOW) to AOS equivalents */
function legacyScrollAnimToAos(jsx) {
  return jsx
    .replace(/data-sal-delay/g, 'data-aos-delay')
    .replace(/data-sal-duration/g, 'data-aos-duration')
    .replace(/data-sal-easing/g, 'data-aos-easing')
    .replace(/data-sal=/g, 'data-aos=')
    .replace(/data-wow-delay/g, 'data-aos-delay')
    .replace(/data-wow-duration/g, 'data-aos-duration')
    .replace(/data-wow-offset/g, 'data-aos-offset')
    .replace(/ className="sal-animate"/g, '')
    .replace(/className="sal-animate" /g, '')
    .replace(/ sal-animate/g, '')
    .replace(/\bwow fadeInLeft\b/g, '')
    .replace(/\bwow fadeInUp\b/g, '')
    .replace(/\bwow move-right\b/g, '')
    .replace(/\bwow move-out\b/g, '')
    .replace(/\bwow tmp-title-split\b/g, 'tmp-title-split')
    .replace(/\btmp-title-split wow\b/g, 'tmp-title-split')
    .replace(/\s{2,}/g, ' ')
}

function htmlToJsx(html) {
  // Strip HTML comments
  const stripped = html.replace(/<!--[\s\S]*?-->/g, '')
  try {
    const root = parse(stripped, { lowerCaseTagName: true })
    return legacyScrollAnimToAos(nodeToJsx(root))
  } catch {
    // Fallback: basic regex approach
    return legacyScrollAnimToAos(stripped
      .replace(/\bclass=/g, 'className=')
      .replace(/\bfor=/g, 'htmlFor=')
      .replace(/\btabindex=/g, 'tabIndex=')
      .replace(/\btabIndex="(\d+)"/g, 'tabIndex={$1}')
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/href="([^"#][^"]*?)\.html"/g, (_, p) => `href="/${p}"`)
      .replace(/<(img|br|hr|input|link|meta|area|base|col|embed|param|source|track|wbr)([^>]*?)(?<!\/)>/gi,
        (_, t, a) => `<${t}${a} />`))
  }
}

// ─── Extract page body (strip mobile menu + footer) ─────────────────────────
function stripMobileMenu(html) {
  const popupIdx = html.indexOf('popup-mobile-menu')
  if (popupIdx === -1) return html

  const divStart = html.lastIndexOf('<div', popupIdx)
  if (divStart === -1) return html

  let depth = 0
  const tagRe = /<\/?div\b[^>]*>/gi
  tagRe.lastIndex = divStart
  let m
  while ((m = tagRe.exec(html)) !== null) {
    if (m[0].startsWith('</')) depth--
    else depth++
    if (depth === 0) {
      const afterPopup = html.slice(m.index + m[0].length).replace(/^\s+/, '')
      return `${html.slice(0, divStart).trimEnd()}\n${afterPopup}`
    }
  }
  return html
}

function extractBodyContent(raw) {
  const headerEnd = raw.indexOf('</header>')
  if (headerEnd === -1) return null

  let body = raw.slice(headerEnd + '</header>'.length)
  body = stripMobileMenu(body)

  const footerIdx = body.search(/<!--\s*Start Footer Area\s*-->/i)
  if (footerIdx !== -1) {
    body = body.slice(0, footerIdx)
  } else {
    const footerTag = body.search(/<footer\s+class="[^"]*tmp-footer/i)
    if (footerTag !== -1) body = body.slice(0, footerTag)
  }

  return body.trim() || null
}

function normalizeSectionName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, ' ')
}

function isSkippedMarker(name) {
  return /^(mobile-menu-bar|header|footer|copy right|end header|multipage|header btn|single lookbook|testimonial map|single portfolio|single testimonial|single slider|single progress|end single|end slider|i class feather|load more button|gsap|main js|vendor\/)/i.test(name) ||
    /^end /i.test(name)
}

/** Collect Start/End markers: `<!-- Start Foo -->` and `<!-- Foo Area Start -->` */
function collectSectionMarkers(html) {
  const starts = []
  const ends = []
  const seen = new Set()

  const add = (list, type, name, index, endIndex) => {
    if (isSkippedMarker(name)) return
    const key = `${type}:${index}`
    if (seen.has(key)) return
    seen.add(key)
    list.push({ name: name.trim(), index, endIndex })
  }

  const patterns = [
    { list: starts, type: 'start', re: /<!--\s*Start\s+([^-]+?)\s*-->/gi },
    { list: ends, type: 'end', re: /<!--\s*End\s+([^-]+?)\s*-->/gi },
    { list: starts, type: 'start', re: /<!--\s*(.+?)\s+Area\s+Start\s*-->/gi },
    { list: ends, type: 'end', re: /<!--\s*(.+?)\s+Area\s+End\s*-->/gi },
    { list: starts, type: 'start', re: /<!--\s*(.+?)\s+area\s+start\s*-->/gi },
    { list: ends, type: 'end', re: /<!--\s*(.+?)\s+area\s+end\s*-->/gi },
  ]

  for (const { list, type, re } of patterns) {
    re.lastIndex = 0
    let m
    while ((m = re.exec(html)) !== null) {
      add(list, type, m[1], m.index, m.index + m[0].length)
    }
  }

  return { starts, ends }
}

// ─── Split HTML body into top-level named sections ──────────────────────────
function splitSections(html) {
  const { starts, ends } = collectSectionMarkers(html)

  if (starts.length === 0) return splitByCommentBlocks(html)

  const events = [
    ...starts.map((s) => ({ type: 'start', name: s.name, contentStart: s.endIndex, index: s.index })),
    ...ends.map((e) => ({ type: 'end', name: e.name, index: e.index, endIndex: e.endIndex })),
  ].sort((a, b) => a.index - b.index)

  const sections = []
  const stack = []

  for (const ev of events) {
    if (ev.type === 'start') {
      stack.push({ name: ev.name, contentStart: ev.contentStart })
    } else {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (normalizeSectionName(stack[i].name) === normalizeSectionName(ev.name)) {
          const entry = stack[i]
          stack.splice(i, 1)
          if (i === 0) {
            const body = html.slice(entry.contentStart, ev.index).trim()
            if (body.length > 30) sections.push({ name: entry.name, html: body })
          }
          break
        }
      }
    }
  }

  // Emit unclosed top-level section(s) when End comment is missing
  if (stack.length > 0) {
    const entry = stack[0]
    const body = html.slice(entry.contentStart).trim()
    if (body.length > 30) sections.push({ name: entry.name, html: body })
  }

  if (sections.length > 0) {
    // Avoid over-fragmented fallback (e.g. each portfolio card as its own section)
    if (sections.length >= 3) return sections
    const fallback = splitByCommentBlocks(html)
    if (fallback.length > sections.length) return fallback
    return sections
  }
  return splitByCommentBlocks(html)
}

/** Fallback: split on section marker comments (with or without Start/End pairs) */
function splitByCommentBlocks(html) {
  const markers = []
  const seen = new Set()
  const patterns = [
    /<!--\s*Start\s+(.+?)\s*-->/gi,
    /<!--\s*(.+?)\s+Area\s+Start\s*-->/gi,
    /<!--\s*(.+?)\s+area\s+start\s*-->/gi,
    /<!--\s*(?!Mobile-Menu-Bar|Header|Footer)(.+?)\s*-->/gi,
  ]

  for (const re of patterns) {
    re.lastIndex = 0
    let m
    while ((m = re.exec(html)) !== null) {
      const name = m[1].trim()
      if (isSkippedMarker(name)) continue
      if (seen.has(m.index)) continue
      seen.add(m.index)
      markers.push({ name, endIndex: m.index + m[0].length, index: m.index })
    }
  }

  markers.sort((a, b) => a.index - b.index)

  if (markers.length === 0) return [{ name: 'Content', html: html.trim() }]

  const sections = []
  for (let i = 0; i < markers.length; i++) {
    const start = markers[i].endIndex
    const end = markers[i + 1]?.index ?? html.length
    const chunk = html.slice(start, end).trim()
    if (chunk.length > 50) sections.push({ name: markers[i].name, html: chunk })
  }

  return sections.length > 0 ? sections : [{ name: 'Content', html: html.trim() }]
}

function sectionNameToComponent(name, index, used) {
  const clean = name
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('')
  let base = `Section${clean || index + 1}`
  let final = base
  let n = 2
  while (used.has(final)) final = `${base}${n++}`
  used.add(final)
  return final
}

function writeSectionComponent(dir, compName, jsxBody) {
  if (/^\s*<script[\s>]/i.test(jsxBody.trim())) return false
  const indented = jsxBody
    .split('\n')
    .map((line) => (line.length ? `      ${line}` : ''))
    .join('\n')
  const content = `function ${compName}() {
  return (
    <>
${indented}
    </>
  )
}

export default ${compName}
`
  fs.writeFileSync(path.join(dir, `${compName}.tsx`), content)
  return true
}

function writeBodyContent(dir, components) {
  const imports = components.map((c) => `import ${c} from './${c}'`).join('\n')
  const jsx = components.map((c) => `      <${c} />`).join('\n')
  const content = `${imports}

function BodyContent() {
  return (
    <>
${jsx}
    </>
  )
}

export default BodyContent
`
  fs.writeFileSync(path.join(dir, 'BodyContent.tsx'), content)
}

export function processRoute(basename) {
  const htmlFile = path.join(HTML_DIR, `${basename}.html`)
  if (!fs.existsSync(htmlFile)) return 'no-html'

  const raw = fs.readFileSync(htmlFile, 'utf8')
  const bodyHtml = extractBodyContent(raw)
  if (!bodyHtml) return 'no-markers'

  const dir = path.join(APP_DIR, basename)

  // Remove old Section*.tsx files
  for (const f of fs.readdirSync(dir)) {
    if (/^Section/.test(f) && f.endsWith('.tsx')) {
      fs.unlinkSync(path.join(dir, f))
    }
  }

  const sections = splitSections(bodyHtml)
  const usedNames = new Set()
  const components = []

  sections.forEach((section, index) => {
    const compName = sectionNameToComponent(section.name, index, usedNames)
    const jsx = htmlToJsx(section.html)
    if (writeSectionComponent(dir, compName, jsx)) components.push(compName)
  })

  writeBodyContent(dir, components)
  return `ok:${components.length}`
}

// ─── Main ────────────────────────────────────────────────────────────────────
const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))

if (!isMain) {
  // imported as module
} else {
runMain()
}

function runMain() {
const routeFolders = fs.readdirSync(APP_DIR).filter((name) => {
  const bodyCt = path.join(APP_DIR, name, 'BodyContent.tsx')
  if (!fs.existsSync(bodyCt)) return false
  const content = fs.readFileSync(bodyCt, 'utf8')
  if (content.includes('dangerouslySetInnerHTML')) return true
  if (/import Section/.test(content)) return true
  return fs.readdirSync(path.join(APP_DIR, name)).some((f) => f.startsWith('Section') && f.endsWith('.tsx'))
}).sort()

const SKIP = new Set(['about', 'components'])
const SLUG_ROUTE = /\[slug\]/

const targets = routeFolders.filter(
  (n) => !SKIP.has(n) && !SLUG_ROUTE.test(n) && !n.includes('.')
)

console.log(`Processing ${targets.length} routes...`)
const stats = { ok: 0, skipped: 0, errors: [] }

for (const name of targets) {
  const result = processRoute(name)
  if (result.startsWith('ok')) {
    stats.ok++
  } else {
    stats.skipped++
    if (result !== 'no-html' && result !== 'empty') stats.errors.push(`${name}: ${result}`)
  }
}

console.log(`Done — converted: ${stats.ok}, skipped: ${stats.skipped}`)
if (stats.errors.length) console.log('Errors:', stats.errors)
}
