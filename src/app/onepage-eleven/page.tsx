import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import HeaderHRWebsite from '../11-hr-website/HeaderHRWebsite'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Eleven || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout header={<HeaderHRWebsite />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
