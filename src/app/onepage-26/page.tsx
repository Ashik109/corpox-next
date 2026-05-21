import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage 26 || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout header={<OnepageDemoHeader demo="26" lightMode={false} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
