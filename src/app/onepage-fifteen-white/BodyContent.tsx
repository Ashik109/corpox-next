import BusinessCoachAnimations from '../15-business-coach/BusinessCoachAnimations'
import BannerBusinessCoach from '../15-business-coach/BannerBusinessCoach'
import AboutBusinessCoach from '../15-business-coach/AboutBusinessCoach'
import ServicesBusinessCoach from '../15-business-coach/ServicesBusinessCoach'
import BusinessServicesCoach from '../15-business-coach/BusinessServicesCoach'
import TimelineBusinessCoach from '../15-business-coach/TimelineBusinessCoach'
import PortfolioBusinessCoach from '../15-business-coach/PortfolioBusinessCoach'
import TestimonialBusinessCoach from '../15-business-coach/TestimonialBusinessCoach'
import PricingBusinessCoach from '../15-business-coach/PricingBusinessCoach'
import TeamBusinessCoach from '../15-business-coach/TeamBusinessCoach'
import BrandBusinessCoach from '../15-business-coach/BrandBusinessCoach'
import ContactBusinessCoach from '../15-business-coach/ContactBusinessCoach'
import CtaBusinessCoach from '../15-business-coach/CtaBusinessCoach'
import BlogBusinessCoach from '../15-business-coach/BlogBusinessCoach'

function BodyContent() {
  return (
    <>
      <BusinessCoachAnimations />
      <div id="hero">
        <BannerBusinessCoach />
      </div>
      <div id="about">
        <AboutBusinessCoach />
      </div>
      <div id="service">
        <ServicesBusinessCoach />
      </div>
      <BusinessServicesCoach />
      <TimelineBusinessCoach />
      <div id="project">
        <PortfolioBusinessCoach />
      </div>
      <TestimonialBusinessCoach />
      <PricingBusinessCoach />
      <div id="team">
        <TeamBusinessCoach />
      </div>
      <BrandBusinessCoach />
      <div id="contactus">
        <ContactBusinessCoach />
      </div>
      <CtaBusinessCoach />
      <div id="blog" className='tmp-section-gapBottom'>
        <BlogBusinessCoach />
      </div>
    </>
  )
}

export default BodyContent
