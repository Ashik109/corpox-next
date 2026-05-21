import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Fifteen || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout header={<OnepageDemoHeader demo="fifteen" lightMode={false} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
