import MarketingAgencyAnimations from '../10-marketing-agency/MarketingAgencyAnimations'
import BannerMarketingAgency from '../10-marketing-agency/BannerMarketingAgency'
import AboutMarketingAgency from '../10-marketing-agency/AboutMarketingAgency'
import TimelineMarketingAgency from '../10-marketing-agency/TimelineMarketingAgency'
import SplitMarketingAgency from '../10-marketing-agency/SplitMarketingAgency'
import TestimonialMarketingAgency from '../10-marketing-agency/TestimonialMarketingAgency'
import PricingMarketingAgency from '../10-marketing-agency/PricingMarketingAgency'
import BlogMarketingAgency from '../10-marketing-agency/BlogMarketingAgency'
import BrandMarketingAgency from '../10-marketing-agency/BrandMarketingAgency'

function BodyContent() {
  return (
    <>
      <MarketingAgencyAnimations />
      <div id="hero">
        <BannerMarketingAgency />
      </div>
      <div id="about">
        <AboutMarketingAgency />
      </div>
      <TimelineMarketingAgency />
      <SplitMarketingAgency />
      <TestimonialMarketingAgency />
      <PricingMarketingAgency />
      <div id="blog">
        <BlogMarketingAgency />
      </div>
      <BrandMarketingAgency />
    </>
  )
}

export default BodyContent
