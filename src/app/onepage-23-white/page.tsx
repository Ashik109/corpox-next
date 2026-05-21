import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage 23 || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout lightMode bodyClass="demo-event" header={<OnepageDemoHeader demo="23" lightMode={true} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
