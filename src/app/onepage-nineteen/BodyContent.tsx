import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerPersonalAdvisory from '../19-personal-advisory/BannerPersonalAdvisory'
import ServicesPersonalAdvisory from '../19-personal-advisory/ServicesPersonalAdvisory'
import BusinessServicesPersonalAdvisory from '../19-personal-advisory/BusinessServicesPersonalAdvisory'
import CounterITSolution from '../18-it-solution/CounterITSolution'
import PortfolioPersonalAdvisory from '../19-personal-advisory/PortfolioPersonalAdvisory'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import GetInTouchPersonalAdvisory from '../19-personal-advisory/GetInTouchPersonalAdvisory'
import PricingPersonalAdvisory from '../19-personal-advisory/PricingPersonalAdvisory'
import BlogPersonalAdvisory from '../19-personal-advisory/BlogPersonalAdvisory'
import CtaModernBusiness from '../08-business/CtaModernBusiness'

function BodyContent() {
  return (
    <>
      <RealEstateAnimations />
      <div id="hero">
        <BannerPersonalAdvisory />
      </div>
      <div id="service">
        <ServicesPersonalAdvisory />
      </div>
      <BusinessServicesPersonalAdvisory />
      <CounterITSolution />
      <div id="project">
        <PortfolioPersonalAdvisory />
      </div>
      <TestimonialOne />
      <div id="contactus">
        <GetInTouchPersonalAdvisory />
      </div>
      <PricingPersonalAdvisory />
      <div id="blog">
        <BlogPersonalAdvisory />
      </div>
      <CtaModernBusiness />
    </>
  )
}

export default BodyContent
