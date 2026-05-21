import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage 24 || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout lightMode bodyClass="demo-ai-agency" header={<OnepageDemoHeader demo="24" lightMode={true} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
