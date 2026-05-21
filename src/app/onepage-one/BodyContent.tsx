import BannerOne from '../01-index-consulting/BannerOne'
import ServiceOne from '../01-index-consulting/ServiceOne'
import AboutOne from '../01-index-consulting/AboutOne'
import CounterOne from '../01-index-consulting/CounterOne'
import PortfolioOne from '../01-index-consulting/PortfolioOne'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import TimelineOne from '../01-index-consulting/TimelineOne'
import VideoOne from '../01-index-consulting/VideoOne'
import TeamOne from '../01-index-consulting/TeamOne'
import CtaOne from '../01-index-consulting/CtaOne'
import PricingOne from '../01-index-consulting/PricingOne'
import ContactOne from '../01-index-consulting/ContactOne'
import BlogOne from '../01-index-consulting/BlogOne'
import CtaTwo from '../01-index-consulting/CtaTwo'

function BodyContent() {
  return (
    <>
      <div id="hero">
        <BannerOne />
      </div>
      <div id="service">
        <ServiceOne />
      </div>
      <div id="about">
        <AboutOne />
      </div>
      <CounterOne />
      <div id="project">
        <PortfolioOne />
      </div>
      <TestimonialOne />
      <TimelineOne />
      <VideoOne />
      <div id="team">
        <TeamOne />
      </div>
      <CtaOne />
      <PricingOne />
      <div id="contactus">
        <ContactOne />
      </div>
      <div id="blog">
        <BlogOne />
      </div>
      <CtaTwo />
    </>
  )
}

export default BodyContent
