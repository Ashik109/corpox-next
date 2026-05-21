import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Fourteen || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout header={<OnepageDemoHeader demo="fourteen" lightMode={false} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
