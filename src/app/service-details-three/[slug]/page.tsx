import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '../../../components/inner-pages/InnerPageLayout'
import ServiceDetailContent from '../../../components/inner-pages/ServiceDetailContent'
import { getServiceBySlug, getServiceSlugs } from '../../../data/services'

const DETAIL_ROUTE = '/service-details-three'
const LAYOUT = 'three' as const

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getServiceBySlug(slug)
  if (!item) return { title: 'Not Found' }
  return { title: `${item.title} || Corpox` }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return (
    <InnerPageLayout>
      <ServiceDetailContent service={service} detailRoute={DETAIL_ROUTE} layout={LAYOUT} />
    </InnerPageLayout>
  )
}
