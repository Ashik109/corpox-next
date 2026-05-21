import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerITSolution from '../18-it-solution/BannerITSolution'
import AboutITSolution from '../18-it-solution/AboutITSolution'
import ServicesITSolution from '../18-it-solution/ServicesITSolution'
import CounterITSolution from '../18-it-solution/CounterITSolution'
import PortfolioITSolution from '../18-it-solution/PortfolioITSolution'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import TimelineITSolution from '../18-it-solution/TimelineITSolution'
import VideoOne from '../01-index-consulting/VideoOne'
import PricingITSolution from '../18-it-solution/PricingITSolution'
import TeamITSolution from '../18-it-solution/TeamITSolution'
import CtaRealEstate from '../16-real-estate-consulting/CtaRealEstate'
import AppointmentITSolution from '../18-it-solution/AppointmentITSolution'
import BrandITSolution from '../18-it-solution/BrandITSolution'
import BlogITSolution from '../18-it-solution/BlogITSolution'
import CtaModernBusiness from '../08-business/CtaModernBusiness'

function BodyContent() {
  return (
    <>
      <RealEstateAnimations />
      <div id="hero">
        <BannerITSolution />
      </div>
      <div id="about">
        <AboutITSolution />
      </div>
      <div id="service">
        <ServicesITSolution />
      </div>
      <CounterITSolution />
      <div id="project">
        <PortfolioITSolution />
      </div>
      <TestimonialOne />
      <TimelineITSolution />
      <VideoOne />
      <PricingITSolution />
      <div id="team">
        <TeamITSolution />
      </div>
      <CtaRealEstate />
      <div id="contactus">
        <AppointmentITSolution />
      </div>
      <BrandITSolution />
      <div id="blog">
        <BlogITSolution />
      </div>
      <CtaModernBusiness />
    </>
  )
}

export default BodyContent
