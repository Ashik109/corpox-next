import BodyClassConstruction from '../26-construction/BodyClassConstruction'
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerConstruction from '../26-construction/BannerConstruction'
import ConstructionTabs from '../26-construction/ConstructionTabs'
import ServicesConstruction from '../26-construction/ServicesConstruction'
import PortfolioConstruction from '../26-construction/PortfolioConstruction'
import GetInTouchConstruction from '../26-construction/GetInTouchConstruction'
import AboutFluidConstruction from '../26-construction/AboutFluidConstruction'
import PricingConstruction from '../26-construction/PricingConstruction'
import CounterConstruction from '../26-construction/CounterConstruction'
import ContactConstruction from '../26-construction/ContactConstruction'
import VideoConstruction from '../26-construction/VideoConstruction'
import BlogConstruction from '../26-construction/BlogConstruction'
import BrandConstruction from '../26-construction/BrandConstruction'

function BodyContent() {
  return (
    <>
      <BodyClassConstruction />
      <RealEstateAnimations />
      <div id="hero">
        <BannerConstruction />
      </div>
      <ConstructionTabs />
      <div id="service">
        <ServicesConstruction />
      </div>
      <div id="project">
        <PortfolioConstruction />
      </div>
      <div id="contactus">
        <GetInTouchConstruction />
      </div>
      <div id="about">
        <AboutFluidConstruction />
      </div>
      <PricingConstruction />
      <CounterConstruction />
      <ContactConstruction />
      <VideoConstruction />
      <div id="blog">
        <BlogConstruction />
      </div>
      <BrandConstruction />
    </>
  )
}

export default BodyContent
