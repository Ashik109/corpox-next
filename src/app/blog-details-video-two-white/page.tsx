import { redirect } from 'next/navigation'
import { getBlogSlugs } from '../../data/blogPosts'

export default function Page() {
  const slugs = getBlogSlugs()
  redirect(slugs[0] ? `/blog-details-video-two-white/${slugs[0]}` : '/blog-grid-white')
}
