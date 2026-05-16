import { redirect } from 'next/navigation'
import { getServiceSlugs } from '../../data/services'

export default function Page() {
  const slugs = getServiceSlugs()
  redirect(slugs[0] ? `/service-details-center-white/${slugs[0]}` : '/service')
}
