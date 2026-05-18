import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import TopbarOne from '../01-index-consulting/TopbarOne'
import HeaderOne from '../01-index-consulting/HeaderOne'
import BannerOne from '../01-index-consulting/BannerOne'
import ServiceOne from '../01-index-consulting/ServiceOne'
import AboutOne from '../01-index-consulting/AboutOne'
import CounterOne from '../01-index-consulting/CounterOne'
import PortfolioOne from '../01-index-consulting/PortfolioOne'
import TestimonialOne from '../01-index-consulting/TestimonialOne'
import TimelineOne from '../01-index-consulting/TimelineOne'
import VideoOne from '../01-index-consulting/VideoOne'
import TeamOne from '../01-index-consulting/TeamOne'
import CtaOne from '../01-index-consulting/CtaOne'
import PricingOne from '../01-index-consulting/PricingOne'
import ContactOne from '../01-index-consulting/ContactOne'
import BlogOne from '../01-index-consulting/BlogOne'
import CtaTwo from '../01-index-consulting/CtaTwo'
import FooterOne from '../01-index-consulting/FooterOne'

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      
      <main className="page-wrapper">

        <TopbarOne />
        <HeaderOne className={WHITE_HEADER_OVER_HERO} />
        <BannerOne />
        <ServiceOne />
        <AboutOne />
        <CounterOne />
        <PortfolioOne />
        <TestimonialOne />
        <TimelineOne />
        <VideoOne />
        <TeamOne />
        <CtaOne />
        <PricingOne />
        <ContactOne />
        <BlogOne />
        <CtaTwo />
        <FooterOne />
      
      </main>
    </>
  )
}
