import AgencyThirteenAnimations from '../13-agency/AgencyThirteenAnimations'
import BannerAgencyThirteen from '../13-agency/BannerAgencyThirteen'
import AboutAgencyThirteen from '../13-agency/AboutAgencyThirteen'
import ServicesAgencyThirteen from '../13-agency/ServicesAgencyThirteen'
import BrandAgencyThirteen from '../13-agency/BrandAgencyThirteen'
import MissionAgencyThirteen from '../13-agency/MissionAgencyThirteen'
import PortfolioAgencyThirteen from '../13-agency/PortfolioAgencyThirteen'
import CounterAgencyThirteen from '../13-agency/CounterAgencyThirteen'
import TeamAgencyThirteen from '../13-agency/TeamAgencyThirteen'
import CtaAgencyThirteen from '../13-agency/CtaAgencyThirteen'
import AppointmentAgencyThirteen from '../13-agency/AppointmentAgencyThirteen'
import TestimonialAgencyThirteen from '../13-agency/TestimonialAgencyThirteen'
import BlogAgencyThirteen from '../13-agency/BlogAgencyThirteen'

function BodyContent() {
  return (
    <>
      <AgencyThirteenAnimations />
      <div id="hero">
        <BannerAgencyThirteen />
      </div>
      <div id="about">
        <AboutAgencyThirteen />
      </div>
      <div id="service">
        <ServicesAgencyThirteen />
      </div>
      <BrandAgencyThirteen />
      <MissionAgencyThirteen />
      <div id="project">
        <PortfolioAgencyThirteen />
      </div>
      <CounterAgencyThirteen />
      <div id="team">
        <TeamAgencyThirteen />
      </div>
      <CtaAgencyThirteen />
      <div id="contactus">
        <AppointmentAgencyThirteen />
      </div>
      <TestimonialAgencyThirteen />
      <div id="blog" className='tmp-section-gapBottom'>
        <BlogAgencyThirteen />
      </div>
    </>
  )
}

export default BodyContent
