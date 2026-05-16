import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import InnerPageLayout from '../../../components/inner-pages/InnerPageLayout'
import TeamDetailContent from '../../../components/inner-pages/TeamDetailContent'
import { getTeamMember, getTeamSlugs } from '../../../data/teamMembers'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getTeamSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMember(slug)
  if (!member) return { title: 'Not Found' }
  return { title: `${member.name} || Corpox` }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const member = getTeamMember(slug)
  if (!member) notFound()
  return (
    <InnerPageLayout>
      <TeamDetailContent member={member} detailRoute="/team" />
    </InnerPageLayout>
  )
}
