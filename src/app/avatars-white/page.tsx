import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import BodyContent from './BodyContent'
import HeaderAvatars from '../avatars/HeaderAvatars'

export const metadata: Metadata = {
  title: 'Avatars || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout header={<HeaderAvatars />} lightMode>
      <BodyContent />
    </InnerPageLayout>
  )
}
