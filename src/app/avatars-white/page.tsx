import type { Metadata } from 'next'
import InnerPageLayout from '../../components/inner-pages/InnerPageLayout'
import { WHITE_HEADER_ON_LIGHT } from '../components/HeaderModeClasses'
import BodyContent from './BodyContent'
import HeaderAvatars from '../avatars/HeaderAvatars'

export const metadata: Metadata = {
  title: 'Avatars || Corpox',
}

export default function Page() {
  return (
    <InnerPageLayout header={<HeaderAvatars className={WHITE_HEADER_ON_LIGHT} />} lightMode>
      <BodyContent />
    </InnerPageLayout>
  )
}
