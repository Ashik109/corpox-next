import BannerOne from '../01-index-consulting/BannerOne'
import BannerSix from '../06-startup/BannerSix'
import SectionBreadcarumbArea from './SectionBreadcarumbArea'
import SectionSeperatorArea from './SectionSeperatorArea'

function BodyContent() {
  return (
    <>
      <SectionBreadcarumbArea />
      <BannerOne className="mb--120" />
      <SectionSeperatorArea />
      <BannerSix />
    </>
  )
}

export default BodyContent
