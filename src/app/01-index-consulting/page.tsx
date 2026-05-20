import React from 'react'
import TopbarOne from './TopbarOne'
import HeaderOne from './HeaderOne'
import BannerOne from './BannerOne'
import ServiceOne from './ServiceOne'
import AboutOne from './AboutOne'
import CounterOne from './CounterOne'
import PortfolioOne from './PortfolioOne'
import TestimonialOne from './TestimonialOne'
import TimelineOne from './TimelineOne'
import VideoOne from './VideoOne'
import TeamOne from './TeamOne'
import CtaOne from './CtaOne'
import PricingOne from './PricingOne'
import ContactOne from './ContactOne'
import BlogOne from './BlogOne'
import CtaTwo from './CtaTwo'
import FooterOne from './FooterOne'

function Page() {
  return (
    <>
      <main className='page-wrapper'>
        <TopbarOne />
        <HeaderOne ctaClassName="tmp-btn round" />
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

export default Page
