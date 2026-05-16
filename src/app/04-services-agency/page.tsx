import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import TopbarFour from './TopbarFour'
import HeaderFour from './HeaderFour'
import BannerFour from './BannerFour'
import ServicesFive from './ServicesFive'
import MissionOne from '../03-agency/MissionOne'
import ServicesSix from './ServicesSix'
import WhyChooseUsOne from './WhyChooseUsOne'
import PricingTwo from './PricingTwo'
import GetInTouch from '../03-agency/GetInTouch'
import ContactTwo from './ContactTwo'
import CtaOne from '../01-index-consulting/CtaOne'
import BlogTwo from '../03-agency/BlogTwo'
import FooterOne from '../01-index-consulting/FooterOne'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="overflow-x-visible" />
            <main className='page-wrapper'>
                <TopbarFour />
                <HeaderFour />
                <BannerFour />
                <ServicesFive className='tmp-section-gapBottom'/>
                <MissionOne className='tmp-section-gapBottom'/>
                <ServicesSix />
                <WhyChooseUsOne />
                <PricingTwo />
                <GetInTouch className='area-2 tmp-section-gapBottom'/>
                <ContactTwo />
                <CtaOne />
                <BlogTwo className='tmp-section-gap'/>
                <FooterOne className='mt--80'/>
            </main>
        </>
    )
}

export default page