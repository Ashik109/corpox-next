import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerRealEstateTwo from '../17-real-estate-consulting/BannerRealEstateTwo'
import AboutRealEstateTwo from '../17-real-estate-consulting/AboutRealEstateTwo'
import ServiceTabsRealEstateTwo from '../17-real-estate-consulting/ServiceTabsRealEstateTwo'
import FeaturedPropertiesRealEstateTwo from '../17-real-estate-consulting/FeaturedPropertiesRealEstateTwo'
import CounterRealEstateTwo from '../17-real-estate-consulting/CounterRealEstateTwo'
import MissionVisionRealEstateTwo from '../17-real-estate-consulting/MissionVisionRealEstateTwo'
import GalleryRealEstateTwo from '../17-real-estate-consulting/GalleryRealEstateTwo'
import VideoRealEstate from '../16-real-estate-consulting/VideoRealEstate'
import ContactRealEstate from '../16-real-estate-consulting/ContactRealEstate'
import CtaRealEstate from '../16-real-estate-consulting/CtaRealEstate'
import BlogRealEstate from '../16-real-estate-consulting/BlogRealEstate'

function BodyContent() {
  return (
    <>
      <RealEstateAnimations />
      <div id="hero">
        <BannerRealEstateTwo />
      </div>
      <div id="about">
        <AboutRealEstateTwo />
      </div>
      <div id="service">
        <ServiceTabsRealEstateTwo />
      </div>
      <div id="project">
        <FeaturedPropertiesRealEstateTwo />
      </div>
      <CounterRealEstateTwo />
      <MissionVisionRealEstateTwo />
      <GalleryRealEstateTwo />
      <VideoRealEstate />
      <div id="contactus">
        <ContactRealEstate />
      </div>
      <CtaRealEstate />
      <div id="blog">
        <BlogRealEstate />
      </div>
    </>
  )
}

export default BodyContent
