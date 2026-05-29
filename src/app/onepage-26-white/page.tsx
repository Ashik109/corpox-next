import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import FooterConstruction from '../26-construction/FooterConstruction'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage 26 || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout
      lightMode
      bodyClass="demo-construction"
      header={<OnepageDemoHeader demo="26" lightMode={true} />}
      footer={<FooterConstruction />}
    >
      <BodyContent />
    </InnerPageLayout>
  )
}
