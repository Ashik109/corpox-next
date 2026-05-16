import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '../../../components/inner-pages/InnerPageLayout'
import PortfolioDetailContent from '../../../components/inner-pages/PortfolioDetailContent'
import { getPortfolioBySlug, getPortfolioSlugs } from '../../../data/portfolioProjects'

const DETAIL_ROUTE = '/portfolio-details'
const LAYOUT = 'default' as const

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getPortfolioBySlug(slug)
  if (!item) return { title: 'Not Found' }
  return { title: `${item.title} || Corpox` }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)
  if (!project) notFound()
  return (
    <InnerPageLayout>
      <PortfolioDetailContent project={project} detailRoute={DETAIL_ROUTE} layout={LAYOUT} />
    </InnerPageLayout>
  )
}
