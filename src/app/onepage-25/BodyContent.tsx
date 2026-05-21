import BodyClassArchitecture from '../25-architecture/BodyClassArchitecture'
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerArchitecture from '../25-architecture/BannerArchitecture'
import AboutArchitecture from '../25-architecture/AboutArchitecture'
import PortfolioArchitecture from '../25-architecture/PortfolioArchitecture'
import ServicesArchitecture from '../25-architecture/ServicesArchitecture'
import BlogArchitecture from '../25-architecture/BlogArchitecture'

function BodyContent() {
  return (
    <>
      <BodyClassArchitecture />
      <RealEstateAnimations />
      <div id="hero">
        <BannerArchitecture />
      </div>
      <div id="about">
        <AboutArchitecture />
      </div>
      <div id="project">
        <PortfolioArchitecture />
      </div>
      <div id="service">
        <ServicesArchitecture />
      </div>
      <div id="blog">
        <BlogArchitecture />
      </div>
    </>
  )
}

export default BodyContent
