import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_ON_LIGHT } from '../components/HeaderModeClasses'
import TopbarTwo from '../02-index-business-consulting-2/TopbarTwo'
import HeaderTwo from '../02-index-business-consulting-2/HeaderTwo'
import BannerTwo from '../02-index-business-consulting-2/BannerTwo'
import AboutTwo from '../02-index-business-consulting-2/AboutTwo'
import ServiceTwo from '../02-index-business-consulting-2/ServiceTwo'
import CaseStudyOne from '../02-index-business-consulting-2/CaseStudyOne'
import ServicesThree from '../02-index-business-consulting-2/ServicesThree'
import CtaOne from '../01-index-consulting/CtaOne'
import VideoTwo from '../02-index-business-consulting-2/VideoTwo'
import FaqOne from '../02-index-business-consulting-2/FaqOne'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import PricingOne from '../01-index-consulting/PricingOne'
import ContactOne from '../01-index-consulting/ContactOne'
import BlogOne from '../01-index-consulting/BlogOne'
import FooterTwo from '../02-index-business-consulting-2/FooterTwo'

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      
      <main className="page-wrapper">

        {/* Start Header Top Area  */}
        <TopbarTwo />
        {/* End Header Top Area  */}
        <HeaderTwo className={WHITE_HEADER_ON_LIGHT} />
        <BannerTwo />
        <AboutTwo />
        <ServiceTwo />
        <CaseStudyOne />
        <ServicesThree />
        <CtaOne />
        <VideoTwo />
        <FaqOne />
        <TestimonialOne />
        <PricingOne />
        <ContactOne />
        <BlogOne />
        <FooterTwo />
      
      </main>
    </>
  )
}
