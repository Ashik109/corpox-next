#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP = path.join(__dirname, '../src/app')

const SERVICE_ROUTES = [
  { folder: 'service-details', layout: 'default', light: false },
  { folder: 'service-details-two', layout: 'two', light: false },
  { folder: 'service-details-three', layout: 'three', light: false },
  { folder: 'service-details-four', layout: 'four', light: false },
  { folder: 'service-details-center', layout: 'center', light: false },
  { folder: 'service-details-white', layout: 'default', light: true },
  { folder: 'service-details-two-white', layout: 'two', light: true },
  { folder: 'service-details-three-white', layout: 'three', light: true },
  { folder: 'service-details-four-white', layout: 'four', light: true },
  { folder: 'service-details-center-white', layout: 'center', light: true },
]

const PORTFOLIO_ROUTES = [
  { folder: 'portfolio-details', layout: 'default', light: false },
  { folder: 'portfolio-details-two', layout: 'two', light: false },
  { folder: 'portfolio-details-three', layout: 'three', light: false },
  { folder: 'portfolio-details-four', layout: 'four', light: false },
  { folder: 'portfolio-details-five', layout: 'five', light: false },
  { folder: 'portfolio-details-white', layout: 'default', light: true },
  { folder: 'portfolio-details-two-white', layout: 'two', light: true },
  { folder: 'portfolio-details-three-white', layout: 'three', light: true },
  { folder: 'portfolio-details-four-white', layout: 'four', light: true },
  { folder: 'portfolio-details-five-white', layout: 'five', light: true },
]

function servicePageTemplate(folder, layout, light) {
  const depth = '../../../'
  return `import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '${depth}components/inner-pages/InnerPageLayout'
import ServiceDetailContent from '${depth}components/inner-pages/ServiceDetailContent'
import { getServiceBySlug, getServiceSlugs } from '${depth}data/services'

const DETAIL_ROUTE = '/${folder}'
const LAYOUT = '${layout}' as const

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getServiceBySlug(slug)
  if (!item) return { title: 'Not Found' }
  return { title: \`\${item.title} || Corpox\` }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return (
    <InnerPageLayout${light ? ' lightMode' : ''}>
      <ServiceDetailContent service={service} detailRoute={DETAIL_ROUTE} layout={LAYOUT} />
    </InnerPageLayout>
  )
}
`
}

function portfolioPageTemplate(folder, layout, light) {
  const depth = '../../../'
  return `import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '${depth}components/inner-pages/InnerPageLayout'
import PortfolioDetailContent from '${depth}components/inner-pages/PortfolioDetailContent'
import { getPortfolioBySlug, getPortfolioSlugs } from '${depth}data/portfolioProjects'

const DETAIL_ROUTE = '/${folder}'
const LAYOUT = '${layout}' as const

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getPortfolioBySlug(slug)
  if (!item) return { title: 'Not Found' }
  return { title: \`\${item.title} || Corpox\` }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)
  if (!project) notFound()
  return (
    <InnerPageLayout${light ? ' lightMode' : ''}>
      <PortfolioDetailContent project={project} detailRoute={DETAIL_ROUTE} layout={LAYOUT} />
    </InnerPageLayout>
  )
}
`
}

function indexTemplate(folder, dataImport, redirectBase) {
  return `import { redirect } from 'next/navigation'
import { ${dataImport} } from '../../data/${dataImport === 'getBlogSlugs' ? 'blogPosts' : dataImport === 'getServiceSlugs' ? 'services' : 'portfolioProjects'}'

export default function Page() {
  const slugs = ${dataImport}()
  redirect(slugs[0] ? \`/${folder}/\${slugs[0]}\` : '${redirectBase}')
}
`
}

for (const { folder, layout, light } of SERVICE_ROUTES) {
  const slugDir = path.join(APP, folder, '[slug]')
  fs.mkdirSync(slugDir, { recursive: true })
  fs.writeFileSync(path.join(slugDir, 'page.tsx'), servicePageTemplate(folder, layout, light))
  const indexPath = path.join(APP, folder, 'page.tsx')
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(
      indexPath,
      `import { redirect } from 'next/navigation'
import { getServiceSlugs } from '../../data/services'

export default function Page() {
  const slugs = getServiceSlugs()
  redirect(slugs[0] ? \`/${folder}/\${slugs[0]}\` : '/service')
}
`
    )
  }
  console.log('service:', folder, layout)
}

for (const { folder, layout, light } of PORTFOLIO_ROUTES) {
  const slugDir = path.join(APP, folder, '[slug]')
  fs.mkdirSync(slugDir, { recursive: true })
  fs.writeFileSync(path.join(slugDir, 'page.tsx'), portfolioPageTemplate(folder, layout, light))
  const indexPath = path.join(APP, folder, 'page.tsx')
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(
      indexPath,
      `import { redirect } from 'next/navigation'
import { getPortfolioSlugs } from '../../data/portfolioProjects'

export default function Page() {
  const slugs = getPortfolioSlugs()
  redirect(slugs[0] ? \`/${folder}/\${slugs[0]}\` : '/portfolio-grid')
}
`
    )
  }
  console.log('portfolio:', folder, layout)
}

console.log('Done')
