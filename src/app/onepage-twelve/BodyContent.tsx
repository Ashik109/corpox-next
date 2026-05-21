import BusinessThreeAnimations from '../12-index-business-consulting-3/BusinessThreeAnimations'
import BannerBusinessThree from '../12-index-business-consulting-3/BannerBusinessThree'
import MarqueeBusinessThree from '../12-index-business-consulting-3/MarqueeBusinessThree'
import AboutBusinessThree from '../12-index-business-consulting-3/AboutBusinessThree'
import ServiceTabsBusinessThree from '../12-index-business-consulting-3/ServiceTabsBusinessThree'
import CtaBusinessThree from '../12-index-business-consulting-3/CtaBusinessThree'
import AccordionBusinessThree from '../12-index-business-consulting-3/AccordionBusinessThree'
import TestimonialBusinessThree from '../12-index-business-consulting-3/TestimonialBusinessThree'
import AppointmentBusinessThree from '../12-index-business-consulting-3/AppointmentBusinessThree'
import BlogBusinessThree from '../12-index-business-consulting-3/BlogBusinessThree'

function BodyContent() {
  return (
    <>
      <BusinessThreeAnimations />
      <div id="hero">
        <BannerBusinessThree />
      </div>
      <MarqueeBusinessThree />
      <div id="about">
        <AboutBusinessThree />
      </div>
      <div id="service">
        <ServiceTabsBusinessThree />
      </div>
      <CtaBusinessThree />
      <AccordionBusinessThree />
      <TestimonialBusinessThree />
      <div id="contactus">
        <AppointmentBusinessThree />
      </div>
      <div id="blog">
        <BlogBusinessThree />
      </div>
    </>
  )
}

export default BodyContent
