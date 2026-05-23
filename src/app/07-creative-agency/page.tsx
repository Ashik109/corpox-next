import React from 'react'
import HeaderOne from '../01-index-consulting/HeaderOne'
import BannerCreativeAgency from './BannerCreativeAgency'
import AboutCreativeAgency from './AboutCreativeAgency'
import CreativeAgencyTabs from './CreativeAgencyTabs'
import BrandCreativeAgency from './BrandCreativeAgency'
import PortfolioCreativeAgency from './PortfolioCreativeAgency'
import ServicesCreativeAgency from './ServicesCreativeAgency'
import CtaPurchaseCreativeAgency from './CtaPurchaseCreativeAgency'
import AppointmentCreativeAgency from './AppointmentCreativeAgency'
import BlogCreativeAgency from './BlogCreativeAgency'
import CtaThree from '../05-corporate/CtaThree'
import FooterCreativeAgency from './FooterCreativeAgency'
import CreativeAgencyAnimations from './CreativeAgencyAnimations'
import BodyClass from '../white-01-index-consulting/BodyClass'

function page() {
    return (
        <>
            <CreativeAgencyAnimations />
            <BodyClass className='dark-home'/>
            <main className='page-wrapper'>
                <HeaderOne />
                <BannerCreativeAgency />
                <AboutCreativeAgency />
                <CreativeAgencyTabs />
                <BrandCreativeAgency />
                <PortfolioCreativeAgency />
                <ServicesCreativeAgency />
                <CtaPurchaseCreativeAgency />
                <AppointmentCreativeAgency />
                <BlogCreativeAgency />
                <CtaThree />
                <FooterCreativeAgency />
            </main>
        </>
    )
}

export default page
