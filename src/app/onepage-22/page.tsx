import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import BodyContent from './BodyContent'

export const metadata: Metadata = {
  title: 'Onepage 22 || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout>
      <BodyContent />
    </InnerPageLayout>
  )
}
