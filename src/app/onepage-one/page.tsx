import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import BodyContent from './BodyContent'
import BodyClass from '../white-01-index-consulting/BodyClass'

export const metadata: Metadata = {
  title: 'Onepage One || Corpox',
}

export default function Page() {
  return (
    <>
      <BodyClass className="home-one-dark" />
      <InnerPageLayout>
        <BodyContent />
      </InnerPageLayout>
    </>
  )
}
