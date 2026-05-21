import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Six || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout header={<OnepageDemoHeader demo="six" lightMode={false} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
