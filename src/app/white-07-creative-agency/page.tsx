import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import HeaderTwo from '../02-index-business-consulting-2/HeaderTwo'
import BannerCreativeAgency from '../07-creative-agency/BannerCreativeAgency'
import AboutCreativeAgency from '../07-creative-agency/AboutCreativeAgency'
import CreativeAgencyTabs from '../07-creative-agency/CreativeAgencyTabs'
import BrandCreativeAgency from '../07-creative-agency/BrandCreativeAgency'
import PortfolioCreativeAgency from '../07-creative-agency/PortfolioCreativeAgency'
import ServicesCreativeAgency from '../07-creative-agency/ServicesCreativeAgency'
import CtaPurchaseCreativeAgency from '../07-creative-agency/CtaPurchaseCreativeAgency'
import AppointmentCreativeAgency from '../07-creative-agency/AppointmentCreativeAgency'
import BlogCreativeAgency from '../07-creative-agency/BlogCreativeAgency'
import CtaThree from '../05-corporate/CtaThree'
import FooterCreativeAgency from '../07-creative-agency/FooterCreativeAgency'
import CreativeAgencyAnimations from '../07-creative-agency/CreativeAgencyAnimations'

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      
            <CreativeAgencyAnimations />
      <main className="page-wrapper">

                <HeaderTwo ctaHref="/contact-white" ctaTarget={null} mobileButtonClassName="hamberger-button" />
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
