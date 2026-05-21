import BodyClassSolar from '../22-solar/BodyClassSolar'
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerSolar from '../22-solar/BannerSolar'
import ServiceTabsSolar from '../22-solar/ServiceTabsSolar'
import GetInTouchSolar from '../22-solar/GetInTouchSolar'
import ServicesSolar from '../22-solar/ServicesSolar'
import AboutSolar from '../22-solar/AboutSolar'
import PricingSolar from '../22-solar/PricingSolar'
import ContactSolar from '../22-solar/ContactSolar'
import VideoSolar from '../22-solar/VideoSolar'
import BlogSolar from '../22-solar/BlogSolar'
import BrandSolar from '../22-solar/BrandSolar'

function BodyContent() {
  return (
    <>
      <BodyClassSolar />
      <RealEstateAnimations />
      <div id="hero">
        <BannerSolar />
      </div>
      <div id="service">
        <ServiceTabsSolar />
      </div>
      <div id="contactus">
        <GetInTouchSolar />
      </div>
      <ServicesSolar />
      <div id="about">
        <AboutSolar />
      </div>
      <PricingSolar />
      <ContactSolar />
      <VideoSolar />
      <div id="blog">
        <BlogSolar />
      </div>
      <BrandSolar />
    </>
  )
}

export default BodyContent
