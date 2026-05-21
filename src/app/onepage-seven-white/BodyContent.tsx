import CreativeAgencyAnimations from '../07-creative-agency/CreativeAgencyAnimations'
import BannerCreativeAgency from '../07-creative-agency/BannerCreativeAgency'
import AboutCreativeAgency from '../07-creative-agency/AboutCreativeAgency'
import CreativeAgencyTabs from '../07-creative-agency/CreativeAgencyTabs'
import BrandCreativeAgency from '../07-creative-agency/BrandCreativeAgency'
import PortfolioCreativeAgency from '../07-creative-agency/PortfolioCreativeAgency'
import ServicesCreativeAgency from '../07-creative-agency/ServicesCreativeAgency'
import CtaPurchaseCreativeAgency from '../07-creative-agency/CtaPurchaseCreativeAgency'
import AppointmentCreativeAgency from '../07-creative-agency/AppointmentCreativeAgency'
import BlogCreativeAgency from '../07-creative-agency/BlogCreativeAgency'
import CtaThree from '../05-corporate/CtaThree'

function BodyContent() {
  return (
    <>
      <CreativeAgencyAnimations />
      <div id="hero">
        <BannerCreativeAgency />
      </div>
      <div id="about">
        <AboutCreativeAgency />
      </div>
      <CreativeAgencyTabs />
      <BrandCreativeAgency />
      <div id="project">
        <PortfolioCreativeAgency />
      </div>
      <div id="service">
        <ServicesCreativeAgency />
      </div>
      <CtaPurchaseCreativeAgency />
      <div id="contactus">
        <AppointmentCreativeAgency />
      </div>
      <div id="blog">
        <BlogCreativeAgency />
      </div>
      <CtaThree />
    </>
  )
}

export default BodyContent
