import DigitalAgencyAnimations from '../09-digital-agency/DigitalAgencyAnimations'
import BannerDigitalAgency from '../09-digital-agency/BannerDigitalAgency'
import LatestServiceDigitalAgency from '../09-digital-agency/LatestServiceDigitalAgency'
import AboutDigitalAgency from '../09-digital-agency/AboutDigitalAgency'
import WorkingProcessDigitalAgency from '../09-digital-agency/WorkingProcessDigitalAgency'
import ServicesDigitalAgency from '../09-digital-agency/ServicesDigitalAgency'
import PortfolioDigitalAgency from '../09-digital-agency/PortfolioDigitalAgency'
import CounterDigitalAgency from '../09-digital-agency/CounterDigitalAgency'
import TestimonialDigitalAgency from '../09-digital-agency/TestimonialDigitalAgency'
import BlogDigitalAgency from '../09-digital-agency/BlogDigitalAgency'

function BodyContent() {
  return (
    <>
      <DigitalAgencyAnimations />
      <div id="hero">
        <BannerDigitalAgency />
      </div>
      <div id="service">
        <LatestServiceDigitalAgency />
      </div>
      <div id="about">
        <AboutDigitalAgency />
      </div>
      <WorkingProcessDigitalAgency />
      <ServicesDigitalAgency />
      <div id="project">
        <PortfolioDigitalAgency />
      </div>
      <CounterDigitalAgency />
      <TestimonialDigitalAgency />
      <div id="blog">
        <BlogDigitalAgency />
      </div>
    </>
  )
}

export default BodyContent
