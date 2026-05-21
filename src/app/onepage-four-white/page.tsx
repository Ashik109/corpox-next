import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Four || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout lightMode bodyClass="overflow-x-visible" header={<OnepageDemoHeader demo="four" lightMode={true} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
