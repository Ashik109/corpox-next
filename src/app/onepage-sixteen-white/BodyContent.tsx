import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerRealEstate from '../16-real-estate-consulting/BannerRealEstate'
import ServicesRealEstate from '../16-real-estate-consulting/ServicesRealEstate'
import AboutRealEstate from '../16-real-estate-consulting/AboutRealEstate'
import CounterRealEstate from '../16-real-estate-consulting/CounterRealEstate'
import MissionVisionRealEstate from '../16-real-estate-consulting/MissionVisionRealEstate'
import FeaturedPropertiesRealEstate from '../16-real-estate-consulting/FeaturedPropertiesRealEstate'
import GalleryRealEstate from '../16-real-estate-consulting/GalleryRealEstate'
import VideoRealEstate from '../16-real-estate-consulting/VideoRealEstate'
import ContactRealEstate from '../16-real-estate-consulting/ContactRealEstate'
import CtaRealEstate from '../16-real-estate-consulting/CtaRealEstate'
import BlogRealEstate from '../16-real-estate-consulting/BlogRealEstate'

function BodyContent() {
  return (
    <>
      <RealEstateAnimations />
      <div id="hero">
        <BannerRealEstate />
      </div>
      <div id="service">
        <ServicesRealEstate />
      </div>
      <div id="about">
        <AboutRealEstate />
      </div>
      <CounterRealEstate />
      <MissionVisionRealEstate />
      <div id="project">
        <FeaturedPropertiesRealEstate />
      </div>
      <GalleryRealEstate />
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
