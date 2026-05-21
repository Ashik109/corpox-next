import BusinessAnimations from '../08-business/BusinessAnimations'
import BannerBusiness from '../08-business/BannerBusiness'
import TeamBusiness from '../08-business/TeamBusiness'
import AboutBusiness from '../08-business/AboutBusiness'
import BrandBusiness from '../08-business/BrandBusiness'
import PortfolioBusiness from '../08-business/PortfolioBusiness'
import AboutBusinessFluid from '../08-business/AboutBusinessFluid'
import ServicesBusiness from '../08-business/ServicesBusiness'
import CounterBusiness from '../08-business/CounterBusiness'
import WorkingProcessBusiness from '../08-business/WorkingProcessBusiness'
import CtaBusiness from '../08-business/CtaBusiness'
import BlogBusiness from '../08-business/BlogBusiness'
import CtaModernBusiness from '../08-business/CtaModernBusiness'

function BodyContent() {
  return (
    <>
      <BusinessAnimations />
      <div id="hero">
        <BannerBusiness />
      </div>
      <div id="team">
        <TeamBusiness />
      </div>
      <div id="about">
        <AboutBusiness />
      </div>
      <BrandBusiness />
      <div id="project">
        <PortfolioBusiness />
      </div>
      <AboutBusinessFluid />
      <div id="service">
        <ServicesBusiness />
      </div>
      <CounterBusiness />
      <WorkingProcessBusiness />
      <CtaBusiness />
      <div id="blog">
        <BlogBusiness />
      </div>
      <CtaModernBusiness />
    </>
  )
}

export default BodyContent
