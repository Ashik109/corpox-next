import React from 'react'
import HeaderSix from './HeaderSix'
import BannerSix from './BannerSix'
import ServicesFive from '../04-services-agency/ServicesFive'
import WorkingProcessSix from './WorkingProcessSix'
import AboutSeven from './AboutSeven'
import ServicesNine from './ServicesNine'
import ProgressOne from './ProgressOne'
import WhyChooseUsBoost from './WhyChooseUsBoost'
import PricingStartup from './PricingStartup'
import BlogStartup from './BlogStartup'
import CtaThree from '../05-corporate/CtaThree'
import FooterStartup from './FooterStartup'

function page() {
    return (
        <>
            <main className='page-wrapper'>
                <HeaderSix />
                <BannerSix />
                <ServicesFive className='tmp-section-gap mt_dec--30'/>
                <WorkingProcessSix />
                <AboutSeven />
                <ServicesNine />
                <ProgressOne />
                <WhyChooseUsBoost />
                <PricingStartup />
                <BlogStartup />
                <CtaThree />
                <FooterStartup />
            </main>
        </>
    )
}

export default page