import React from 'react'
import TopbarThree from './TopbarThree'
import HeaderThree from './HeaderThree'
import BannerThree from './BannerThree'
import BrandOne from './BrandOne'
import AboutThree from './AboutThree'
import ServicesFour from './ServicesFour'
import CaseStudyTwo from './CaseStudyTwo'
import GetInTouch from './GetInTouch'
import MissionOne from './MissionOne'
import CounterTwo from './CounterTwo'
import TeamTwo from './TeamTwo'
import ContactOne from '../01-index-consulting/ContactOne'
import CtaOne from '../01-index-consulting/CtaOne'
import BlogTwo from './BlogTwo'
import FooterThree from './FooterThree'

function page() {
    return (
        <>
            <main className="page-wrapper">
                <TopbarThree />
                <HeaderThree />
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
                <BlogTwo />
                <FooterThree />
            </main>
        </>
    )
}

export default page
