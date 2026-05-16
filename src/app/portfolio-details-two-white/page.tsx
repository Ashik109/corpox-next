import { redirect } from 'next/navigation'
import { getPortfolioSlugs } from '../../data/portfolioProjects'

export default function Page() {
  const slugs = getPortfolioSlugs()
  redirect(slugs[0] ? `/portfolio-details-two-white/${slugs[0]}` : '/portfolio-grid')
}
