import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_ON_LIGHT } from '../components/HeaderModeClasses'
import TopbarFour from '../04-services-agency/TopbarFour'
import HeaderFour from '../04-services-agency/HeaderFour'
import BannerFour from '../04-services-agency/BannerFour'
import ServicesFive from '../04-services-agency/ServicesFive'
import MissionOne from '../03-agency/MissionOne'
import ServicesSix from '../04-services-agency/ServicesSix'
import WhyChooseUsOne from '../04-services-agency/WhyChooseUsOne'
import PricingTwo from '../04-services-agency/PricingTwo'
import GetInTouch from '../03-agency/GetInTouch'
import ContactTwo from '../04-services-agency/ContactTwo'
import CtaOne from '../01-index-consulting/CtaOne'
import BlogTwo from '../03-agency/BlogTwo'
import FooterOne from '../01-index-consulting/FooterOne'

export default function Page() {
  return (
    <>
      <BodyClass className="overflow-x-visible active-light-mode" />
      
      <main className="page-wrapper">

                <TopbarFour />
                <HeaderFour className={WHITE_HEADER_ON_LIGHT} />
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
