import React from 'react'
import TopbarTwo from '../02-index-business-consulting-2/TopbarTwo'
import HeaderFive from './HeaderFive'
import BannerFive from './BannerFive'
import BrandTwo from './BrandTwo'
import ServicesSeven from './ServicesSeven'
import GetInTouch from '../03-agency/GetInTouch'
import ServicesEight from './ServicesEight'
import PortfolioOne from './PortfolioOne'
import AboutFour from './AboutFour'
import TeamThree from './TeamThree'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import CounterThree from './CounterThree'
import AboutFive from './AboutFive'
import AboutSix from './AboutSix'
import ContactThree from './ContactThree'
import BlogThree from './BlogThree'
import CtaThree from './CtaThree'
import FooterFour from './FooterFour'

function page() {
    return (
        <>
            <main className='page-wrapper'>
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

export default page