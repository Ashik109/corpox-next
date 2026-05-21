import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage 25 || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout lightMode bodyClass="demo-architecture" header={<OnepageDemoHeader demo="25" lightMode={true} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
