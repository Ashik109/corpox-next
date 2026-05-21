import BannerTwo from '../02-index-business-consulting-2/BannerTwo'
import AboutTwo from '../02-index-business-consulting-2/AboutTwo'
import ServiceTwo from '../02-index-business-consulting-2/ServiceTwo'
import CaseStudyOne from '../02-index-business-consulting-2/CaseStudyOne'
import ServicesThree from '../02-index-business-consulting-2/ServicesThree'
import CtaOne from '../01-index-consulting/CtaOne'
import VideoTwo from '../02-index-business-consulting-2/VideoTwo'
import FaqOne from '../02-index-business-consulting-2/FaqOne'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import PricingOne from '../01-index-consulting/PricingOne'
import ContactOne from '../01-index-consulting/ContactOne'
import BlogOne from '../01-index-consulting/BlogOne'

function BodyContent() {
  return (
    <>
      <div id="hero">
        <BannerTwo />
      </div>
      <div id="about">
        <AboutTwo />
      </div>
      <div id="service">
        <ServiceTwo />
      </div>
      <div id="project">
        <CaseStudyOne />
      </div>
      <ServicesThree />
      <CtaOne />
      <VideoTwo />
      <FaqOne />
      <TestimonialOne />
      <PricingOne />
      <div id="contactus">
        <ContactOne />
      </div>
      <div id="blog">
        <BlogOne />
      </div>
    </>
  )
}

export default BodyContent
