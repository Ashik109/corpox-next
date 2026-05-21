import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Eleven || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout lightMode header={<OnepageDemoHeader demo="eleven" lightMode={true} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
