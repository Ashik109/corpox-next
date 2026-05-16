import { redirect } from 'next/navigation'
import { getTeamSlugs } from '../../data/teamMembers'

export default function Page() {
  const slugs = getTeamSlugs()
  redirect(slugs[0] ? `/team/${slugs[0]}` : '/team')
}
