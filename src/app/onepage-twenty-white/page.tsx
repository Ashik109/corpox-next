import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage Twenty || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout lightMode bodyClass="gym-demo" header={<OnepageDemoHeader demo="twenty" lightMode={true} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
