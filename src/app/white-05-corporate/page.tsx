import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import TopbarTwo from '../02-index-business-consulting-2/TopbarTwo'
import HeaderFive from '../05-corporate/HeaderFive'
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
import FooterFour from '../05-corporate/FooterFour'

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      
      <main className="page-wrapper">

                {/* Start Header Top Area  */}
                <TopbarTwo />
                {/* End Header Top Area  */}
                <HeaderFive />
                <BannerFive />
                <BrandTwo />
                <ServicesSeven />
                <GetInTouch className='tmp-section-gapTop'/>
                <ServicesEight />
                <PortfolioOne />
                <AboutFour />
                <TeamThree />
                <TestimonialOne />
                <CounterThree />
                <AboutFive />
                <AboutSix />
                <ContactThree />
                <BlogThree />
                <CtaThree />
                <FooterFour />
            
      </main>
    </>
  )
}
