import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import OnepageDemoHeader from '../components/OnepageDemoHeader'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage One || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout bodyClass="home-one-dark" header={<OnepageDemoHeader demo="one" lightMode={false} />}>
      <BodyContent />
    </InnerPageLayout>
  )
}
