import BannerSix from '../06-startup/BannerSix'
import ServicesFive from '../04-services-agency/ServicesFive'
import WorkingProcessSix from '../06-startup/WorkingProcessSix'
import AboutSeven from '../06-startup/AboutSeven'
import ServicesNine from '../06-startup/ServicesNine'
import ProgressOne from '../06-startup/ProgressOne'
import WhyChooseUsBoost from '../06-startup/WhyChooseUsBoost'
import PricingStartup from '../06-startup/PricingStartup'
import BlogStartup from '../06-startup/BlogStartup'
import CtaThree from '../05-corporate/CtaThree'

function BodyContent() {
  return (
    <>
      <div id="hero">
        <BannerSix />
      </div>
      <div id="service">
        <ServicesFive />
      </div>
      <WorkingProcessSix />
      <div id="about">
        <AboutSeven />
      </div>
      <ServicesNine />
      <ProgressOne />
      <WhyChooseUsBoost />
      <PricingStartup />
      <div id="blog">
        <BlogStartup />
      </div>
      <CtaThree />
    </>
  )
}

export default BodyContent
