#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP = path.join(__dirname, '../src/app')

const ROUTES = [
  { folder: 'blog-details-right-sidebar', layout: 'sidebar-right', light: false },
  { folder: 'blog-details-left-sidebar', layout: 'sidebar-left', light: false },
  { folder: 'blog-details-video', layout: 'video', light: false },
  { folder: 'blog-details-video-two', layout: 'video-two', light: false },
  { folder: 'blog-details-video-popup', layout: 'video-popup', light: false },
  { folder: 'blog-details-right-sidebar-white', layout: 'sidebar-right', light: true },
  { folder: 'blog-details-left-sidebar-white', layout: 'sidebar-left', light: true },
  { folder: 'blog-details-video-white', layout: 'video', light: true },
  { folder: 'blog-details-video-two-white', layout: 'video-two', light: true },
  { folder: 'blog-details-video-popup-white', layout: 'video-popup', light: true },
]

function pageTemplate(folder, layout, light) {
  const depth = '../../../'
  return `import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '${depth}components/inner-pages/InnerPageLayout'
import BlogDetailContent from '${depth}components/inner-pages/BlogDetailContent'
import { getBlogPost, getBlogSlugs } from '${depth}data/blogPosts'

const DETAIL_ROUTE = '/${folder}'
const LAYOUT = '${layout}' as const

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getBlogPost(slug)
  if (!item) return { title: 'Not Found' }
  return { title: \`\${item.title} || Corpox\` }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  return (
    <InnerPageLayout${light ? ' lightMode' : ''}>
      <BlogDetailContent post={post} detailRoute={DETAIL_ROUTE} layout={LAYOUT} />
    </InnerPageLayout>
  )
}
`
}

function indexTemplate(folder) {
  return `import { redirect } from 'next/navigation'
import { getBlogSlugs } from '../../data/blogPosts'

export default function Page() {
  const slugs = getBlogSlugs()
  redirect(slugs[0] ? \`/${folder}/\${slugs[0]}\` : '/blog-grid')
}
`
}

for (const { folder, layout, light } of ROUTES) {
  const dir = path.join(APP, folder)
  const slugDir = path.join(dir, '[slug]')
  fs.mkdirSync(slugDir, { recursive: true })
  fs.writeFileSync(path.join(slugDir, 'page.tsx'), pageTemplate(folder, layout, light))
  if (!fs.existsSync(path.join(dir, 'page.tsx'))) {
    fs.writeFileSync(path.join(dir, 'page.tsx'), indexTemplate(folder))
  }
}

// Fix legacy typo routes
const LEGACY_FIXES = [
  ['blog-deails-video-two', 'video-two'],
  ['blog-deails-video-two-white', 'video-two'],
  ['blog-deails-video', 'video'],
  ['blog-deails-video-white', 'video'],
  ['blog-deails-video-popup', 'video-popup'],
  ['blog-deails-video-popup-white', 'video-popup'],
  ['blog-deails-sidebar-left', 'sidebar-left'],
  ['blog-deails-sidebar-left-white', 'sidebar-left'],
  ['blog-deails-sidebar-white', 'sidebar-left'],
  ['blog-details-sidebar', 'sidebar-right'],
  ['blog-details-sidebar-white', 'sidebar-right'],
]

for (const [folder, layout] of LEGACY_FIXES) {
  const pagePath = path.join(APP, folder, '[slug]', 'page.tsx')
  if (!fs.existsSync(pagePath)) continue
  let text = fs.readFileSync(pagePath, 'utf8')
  text = text.replace(/layout="[^"]+"/, `layout="${layout}"`)
  text = text.replace(/detailRoute="[^"]+"/, `detailRoute="/${folder}"`)
  fs.writeFileSync(pagePath, text)
}

console.log(`Created/updated ${ROUTES.length} blog detail route folders`)
