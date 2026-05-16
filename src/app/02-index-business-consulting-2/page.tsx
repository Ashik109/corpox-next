import React from 'react'
import TopbarTwo from './TopbarTwo'
import HeaderTwo from './HeaderTwo'
import BannerTwo from './BannerTwo'
import AboutTwo from './AboutTwo'
import ServiceTwo from './ServiceTwo'
import CaseStudyOne from './CaseStudyOne'
import ServicesThree from './ServicesThree'
import CtaOne from '../01-index-consulting/CtaOne'
import VideoTwo from './VideoTwo'
import FaqOne from './FaqOne'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import PricingOne from '../01-index-consulting/PricingOne'
import ContactOne from '../01-index-consulting/ContactOne'
import BlogOne from '../01-index-consulting/BlogOne'
import FooterTwo from './FooterTwo'

function page() {
  return (
    <>
      <main className="page-wrapper">
        {/* Start Header Top Area  */}
        <TopbarTwo />
        {/* End Header Top Area  */}
        <HeaderTwo />
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

export default page