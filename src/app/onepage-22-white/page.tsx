import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage 22 || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout lightMode bodyClass="demo-solar" header={<OnepageDemoHeader demo="22" lightMode={true} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
