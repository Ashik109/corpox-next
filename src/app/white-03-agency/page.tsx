import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import TopbarThree from '../03-agency/TopbarThree'
import HeaderThree from '../03-agency/HeaderThree'
import BannerThree from '../03-agency/BannerThree'
import BrandOne from '../03-agency/BrandOne'
import AboutThree from '../03-agency/AboutThree'
import ServicesFour from '../03-agency/ServicesFour'
import CaseStudyTwo from '../03-agency/CaseStudyTwo'
import GetInTouch from '../03-agency/GetInTouch'
import MissionOne from '../03-agency/MissionOne'
import CounterTwo from '../03-agency/CounterTwo'
import TeamTwo from '../03-agency/TeamTwo'
import ContactOne from '../01-index-consulting/ContactOne'
import CtaOne from '../01-index-consulting/CtaOne'
import BlogTwo from '../03-agency/BlogTwo'
import FooterThree from '../03-agency/FooterThree'

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      
      <main className="page-wrapper">

                <TopbarThree />
                <HeaderThree className={WHITE_HEADER_OVER_HERO} />
                <BannerThree />
                <BrandOne />
                <AboutThree />
                <ServicesFour />
                <CaseStudyTwo />
                <GetInTouch className='area-2 tmp-section-gapTop'/>
                <MissionOne className='tmp-section-gapTop'/>
                <CounterTwo />
                <TeamTwo />
                <ContactOne />
                <CtaOne />
                <BlogTwo className='tmp-section-gapTop'/>
                <FooterThree />
            
      </main>
    </>
  )
}
