import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Seventeen || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout bodyClass="real-estate-demo" header={<OnepageDemoHeader demo="seventeen" lightMode={false} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
