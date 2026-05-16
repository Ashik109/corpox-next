import { redirect } from 'next/navigation'
import { getPortfolioSlugs } from '../../data/portfolioProjects'

export default function Page() {
  const slugs = getPortfolioSlugs()
  redirect(slugs[0] ? `/portfolio-details-four/${slugs[0]}` : '/portfolio-grid')
}
