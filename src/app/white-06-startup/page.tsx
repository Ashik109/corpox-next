import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import HeaderSix from '../06-startup/HeaderSix'
import BannerSix from '../06-startup/BannerSix'
import ServicesFive from '../04-services-agency/ServicesFive'
import WorkingProcessSix from '../06-startup/WorkingProcessSix'
import AboutSeven from '../06-startup/AboutSeven'
import ServicesNine from '../06-startup/ServicesNine'
import ProgressOne from '../06-startup/ProgressOne'
import WhyChooseUsBoost from '../06-startup/WhyChooseUsBoost'
import PricingStartup from '../06-startup/PricingStartup'
import BlogStartup from '../06-startup/BlogStartup'
import CtaThree from '../05-corporate/CtaThree'
import FooterStartup from '../06-startup/FooterStartup'

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      
      <main className="page-wrapper">

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
