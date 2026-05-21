import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Sixteen || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout bodyClass="real-estate-demo" header={<OnepageDemoHeader demo="sixteen" lightMode={false} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
