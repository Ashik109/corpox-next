import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '../../../components/inner-pages/InnerPageLayout'
import BlogDetailContent from '../../../components/inner-pages/BlogDetailContent'
import { getBlogPost, getBlogSlugs } from '../../../data/blogPosts'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getBlogPost(slug)
  if (!item) return { title: 'Not Found' }
  return { title: item.title + ' || Corpox' }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()
  return (
    <InnerPageLayout>
      <BlogDetailContent post={post} detailRoute="/blog-details-sidebar" layout="sidebar-right" />
    </InnerPageLayout>
  )
}
