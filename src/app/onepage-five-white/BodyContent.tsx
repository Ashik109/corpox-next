import BannerFive from '../05-corporate/BannerFive'
import BrandTwo from '../05-corporate/BrandTwo'
import ServicesSeven from '../05-corporate/ServicesSeven'
import GetInTouch from '../03-agency/GetInTouch'
import ServicesEight from '../05-corporate/ServicesEight'
import PortfolioOne from '../05-corporate/PortfolioOne'
import AboutFour from '../05-corporate/AboutFour'
import TeamThree from '../05-corporate/TeamThree'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import CounterThree from '../05-corporate/CounterThree'
import AboutFive from '../05-corporate/AboutFive'
import AboutSix from '../05-corporate/AboutSix'
import ContactThree from '../05-corporate/ContactThree'
import BlogThree from '../05-corporate/BlogThree'
import CtaThree from '../05-corporate/CtaThree'

function BodyContent() {
  return (
    <>
      <div id="hero">
        <BannerFive />
      </div>
      <BrandTwo />
      <div id="service">
        <ServicesSeven />
      </div>
      <div id="contactus">
        <GetInTouch />
      </div>
      <ServicesEight />
      <div id="project">
        <PortfolioOne />
      </div>
      <div id="about">
        <AboutFour />
      </div>
      <div id="team">
        <TeamThree />
      </div>
      <TestimonialOne />
      <CounterThree />
      <AboutFive />
      <AboutSix />
      <ContactThree />
      <div id="blog">
        <BlogThree />
      </div>
      <CtaThree />
    </>
  )
}

export default BodyContent
