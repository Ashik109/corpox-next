import BodyClassAiAgency from '../24-ai-agency/BodyClassAiAgency'
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerAiAgency from '../24-ai-agency/BannerAiAgency'
import BrandAiAgency from '../24-ai-agency/BrandAiAgency'
import ServicesAiAgency from '../24-ai-agency/ServicesAiAgency'
import AboutAiAgency from '../24-ai-agency/AboutAiAgency'
import WorkProcessAiAgency from '../24-ai-agency/WorkProcessAiAgency'
import CounterAiAgency from '../24-ai-agency/CounterAiAgency'
import PortfolioAiAgency from '../24-ai-agency/PortfolioAiAgency'
import FaqAiAgency from '../24-ai-agency/FaqAiAgency'
import BlogAiAgency from '../24-ai-agency/BlogAiAgency'

function BodyContent() {
  return (
    <>
      <BodyClassAiAgency />
      <RealEstateAnimations />
      <div id="hero">
        <BannerAiAgency />
      </div>
      <BrandAiAgency />
      <div id="service">
        <ServicesAiAgency />
      </div>
      <div id="about">
        <AboutAiAgency />
      </div>
      <WorkProcessAiAgency />
      <CounterAiAgency />
      <div id="project">
        <PortfolioAiAgency />
      </div>
      <FaqAiAgency />
      <div id="blog">
        <BlogAiAgency />
      </div>
    </>
  )
}

export default BodyContent
