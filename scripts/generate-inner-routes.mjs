#!/usr/bin/env node
/**
 * Generates inner page routes from corpox-html (files after 26-construction.html in sort order).
 * Run: node scripts/generate-inner-routes.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const HTML_DIR = path.join(ROOT, '..', 'corpox-html')
const APP_DIR = path.join(ROOT, 'src', 'app')

const allHtml = fs.readdirSync(HTML_DIR).filter((f) => f.endsWith('.html')).sort()
const startIdx = allHtml.findIndex((f) => f === '26-construction.html')
const targetFiles = allHtml.slice(startIdx + 1).map((f) => f.replace(/\.html$/, ''))

const BLOG_DETAIL = new Set([
  'blog-details', 'blog-details-white', 'blog-details-sidebar', 'blog-details-sidebar-white',
  'blog-details-standard', 'blog-details-standard-white', 'blog-deails-sidebar-left',
  'blog-deails-sidebar-left-white', 'blog-deails-sidebar-white', 'blog-deails-video',
  'blog-deails-video-white', 'blog-deails-video-popup', 'blog-deails-video-popup-white',
  'blog-deails-video-two', 'blog-deails-video-two-white',
])

const SERVICE_DETAIL = new Set([
  'service-details', 'service-details-white', 'service-details-two', 'service-details-two-white',
  'service-details-three', 'service-details-three-white', 'service-details-four',
  'service-details-four-white', 'service-details-center', 'service-details-center-white',
])

const PORTFOLIO_DETAIL = new Set([
  'portfolio-details', 'portfolio-details-white', 'portfolio-details-two',
  'portfolio-details-two-white', 'portfolio-details-three', 'portfolio-details-three-white',
  'portfolio-details-four', 'portfolio-details-four-white', 'portfolio-details-five',
  'portfolio-details-five-white',
])

const WHITE_DEMO_MAP = {
  'white-08-business': '08-business',
  'white-09-digital-agency': '09-digital-agency',
  'white-10-marketing-agency': '10-marketing-agency',
  'white-11-hr-website': '11-hr-website',
  'white-12-index-business-consulting-3': '12-index-business-consulting-3',
  'white-13-agency': '13-agency',
  'white-14-financial-consulting': '14-financial-consulting',
  'white-15-business-coach': '15-business-coach',
  'white-16-real-estate-consulting': '16-real-estate-consulting',
  'white-17-real-estate-consulting': '17-real-estate-consulting',
  'white-18-it-solution': '18-it-solution',
  'white-19-personal-advisory': '19-personal-advisory',
  'white-20-gym-fitness': '20-gym-fitness',
  'white-20-medical': '21-medical',
  'white-21-medical': '21-medical',
  'white-22-solar': '22-solar',
  'white-23-event': '23-event',
  'white-24-ai-agency': '24-ai-agency',
  'white-25-architecture': '25-architecture',
  'white-26-construction': '26-construction',
}

function blogLayout(name) {
  if (name.includes('sidebar-left')) return 'sidebar-left'
  if (name.includes('sidebar')) return 'sidebar'
  if (name.includes('standard')) return 'standard'
  if (name.includes('video-popup')) return 'video-popup'
  if (name.includes('video')) return 'video'
  return 'default'
}

function serviceLayout(name) {
  if (name.includes('center')) return 'center'
  if (name.includes('two')) return 'two'
  if (name.includes('three')) return 'three'
  if (name.includes('four')) return 'four'
  return 'default'
}

function titleFromBasename(basename) {
  return basename
    .replace(/-white$/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function normalizeHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/href="assets\//g, 'href="/assets/')
    .replace(/href="([^"#][^"]*?)\.html"/g, (_, p) => {
      if (p.startsWith('http') || p.startsWith('#') || p.startsWith('mailto:')) return `href="${p}"`
      return `href="/${p}"`
    })
    .trim()
}

function extractMainHtml(basename) {
  const raw = fs.readFileSync(path.join(HTML_DIR, `${basename}.html`), 'utf8')
  const headerEnd = raw.indexOf('</header>')
  const footerStart = raw.indexOf('<!-- Start Footer Area')
  if (headerEnd === -1 || footerStart === -1) throw new Error(`Cannot extract body for ${basename}`)
  return normalizeHtml(raw.slice(headerEnd + '</header>'.length, footerStart))
}

function rewriteImport(line, colored) {
  if (!line.startsWith('import ')) return null
  if (/BodyClass/i.test(line)) return null
  if (/from ['"]react['"]/.test(line)) return null
  return line.replace(/from ['"]\.\/([^'"]+)['"]/, `from '../${colored}/$1'`)
}

function writeSlugPage(routeName, type) {
  const dir = path.join(APP_DIR, routeName, '[slug]')
  fs.mkdirSync(dir, { recursive: true })
  const light = routeName.endsWith('-white')

  let imports, getter, slugsFn, itemVar, component, layoutProp = ''
  if (type === 'blog') {
    imports = `import BlogDetailContent from '../../../components/inner-pages/BlogDetailContent'
import { getBlogPost, getBlogSlugs } from '../../../data/blogPosts'`
    getter = 'getBlogPost'
    slugsFn = 'getBlogSlugs'
    itemVar = 'post'
    component = 'BlogDetailContent'
    layoutProp = ` layout="${blogLayout(routeName)}"`
  } else if (type === 'service') {
    imports = `import ServiceDetailContent from '../../../components/inner-pages/ServiceDetailContent'
import { getServiceBySlug, getServiceSlugs } from '../../../data/services'`
    getter = 'getServiceBySlug'
    slugsFn = 'getServiceSlugs'
    itemVar = 'service'
    component = 'ServiceDetailContent'
    layoutProp = ` layout="${serviceLayout(routeName)}"`
  } else {
    imports = `import PortfolioDetailContent from '../../../components/inner-pages/PortfolioDetailContent'
import { getPortfolioBySlug, getPortfolioSlugs } from '../../../data/portfolioProjects'`
    getter = 'getPortfolioBySlug'
    slugsFn = 'getPortfolioSlugs'
    itemVar = 'project'
    component = 'PortfolioDetailContent'
  }

  fs.writeFileSync(
    path.join(dir, 'page.tsx'),
    `import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '../../../components/inner-pages/InnerPageLayout'
${imports}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ${slugsFn}().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = ${getter}(slug)
  if (!item) return { title: 'Not Found' }
  return { title: item.title + ' || Corpox' }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const ${itemVar} = ${getter}(slug)
  if (!${itemVar}) notFound()
  return (
    <InnerPageLayout${light ? ' lightMode' : ''}>
      <${component} ${itemVar}={${itemVar}} detailRoute="/${routeName}"${layoutProp} />
    </InnerPageLayout>
  )
}
`,
  )
}

function writeStaticPage(basename) {
  const dir = path.join(APP_DIR, basename)
  fs.mkdirSync(dir, { recursive: true })
  const light = basename.endsWith('-white')
  const html = extractMainHtml(basename)
  const escaped = JSON.stringify(html)

  fs.writeFileSync(
    path.join(dir, 'BodyContent.tsx'),
    `'use client'

export default function BodyContent() {
  return <motionless dangerouslySetInnerHTML={{ __html: ${escaped} }} />
}
`.replace('<motionless ', '<div '),
  )

  fs.writeFileSync(
    path.join(dir, 'page.tsx'),
    `import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: '${titleFromBasename(basename).replace(/'/g, "\\'")} || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout${light ? ' lightMode' : ''}>
      <BodyContent />
    </InnerPageLayout>
  )
}
`,
  )
}

function writeWhiteDemo(basename) {
  const colored = WHITE_DEMO_MAP[basename]
  if (!colored) return
  const src = fs.readFileSync(path.join(APP_DIR, colored, 'page.tsx'), 'utf8')
  const imports = [...new Set(src.split('\n').map((l) => rewriteImport(l.trim(), colored)).filter(Boolean))]
  const animLine = (src.match(/^\s*<[A-Z][A-Za-z]*Animations[^/]*\/>\s*$/m) || [''])[0]
  const mainInner = src.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1]?.trim()
  if (!mainInner) {
    writeStaticPage(basename)
    return
  }

  fs.mkdirSync(path.join(APP_DIR, basename), { recursive: true })
  fs.writeFileSync(
    path.join(APP_DIR, basename, 'page.tsx'),
    `import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
${imports.join('\n')}

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
${animLine ? `      ${animLine.trim()}` : ''}
      <main className="page-wrapper">
${mainInner.split('\n').map((l) => '        ' + l.trim()).join('\n')}
      </main>
    </>
  )
}
`,
  )
}

console.log(`Processing ${targetFiles.length} routes...`)
const stats = { slug: 0, static: 0, white: 0 }

for (const name of targetFiles) {
  if (BLOG_DETAIL.has(name)) {
    writeSlugPage(name, 'blog')
    stats.slug++
  } else if (SERVICE_DETAIL.has(name)) {
    writeSlugPage(name, 'service')
    stats.slug++
  } else if (PORTFOLIO_DETAIL.has(name)) {
    writeSlugPage(name, 'portfolio')
    stats.slug++
  } else if (WHITE_DEMO_MAP[name]) {
    writeWhiteDemo(name)
    stats.white++
  } else {
    try {
      writeStaticPage(name)
      stats.static++
    } catch (e) {
      console.warn('skip', name, e.message)
    }
  }
}

console.log('Done', stats)
