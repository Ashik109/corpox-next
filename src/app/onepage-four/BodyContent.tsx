import BannerFour from '../04-services-agency/BannerFour'
import ServicesFive from '../04-services-agency/ServicesFive'
import MissionOne from '../03-agency/MissionOne'
import ServicesSix from '../04-services-agency/ServicesSix'
import WhyChooseUsOne from '../04-services-agency/WhyChooseUsOne'
import PricingTwo from '../04-services-agency/PricingTwo'
import GetInTouch from '../03-agency/GetInTouch'
import ContactTwo from '../04-services-agency/ContactTwo'
import CtaOne from '../01-index-consulting/CtaOne'
import BlogTwo from '../03-agency/BlogTwo'

function BodyContent() {
  return (
    <>
      <div id="hero">
        <BannerFour />
      </div>
      <div id="service">
        <ServicesFive />
      </div>
      <div className='tmp-section-gap'>
        <MissionOne />
      </div>
      <ServicesSix />
      <WhyChooseUsOne />
      <PricingTwo />
      <div id="contactus">
        <GetInTouch />
      </div>
      <div  className='tmp-section-gapTop'>
        <ContactTwo />
      </div>
      <CtaOne />
      <div id="blog" className='tmp-section-gapBottom'>
        <BlogTwo />
      </div>
    </>
  )
}

export default BodyContent
