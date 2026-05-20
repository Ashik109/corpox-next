import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import CtaModernBusiness from "../08-business/CtaModernBusiness";
import CtaRealEstate from "../16-real-estate-consulting/CtaRealEstate";
import FooterRealEstate from "../16-real-estate-consulting/FooterRealEstate";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import HeaderTwo from "../02-index-business-consulting-2/HeaderTwo";
import AboutITSolution from '../18-it-solution/AboutITSolution';
import AppointmentITSolution from '../18-it-solution/AppointmentITSolution';
import BannerITSolution from '../18-it-solution/BannerITSolution';
import BlogITSolution from '../18-it-solution/BlogITSolution';
import BrandITSolution from '../18-it-solution/BrandITSolution';
import CounterITSolution from '../18-it-solution/CounterITSolution';
import PortfolioITSolution from '../18-it-solution/PortfolioITSolution';
import PricingITSolution from '../18-it-solution/PricingITSolution';
import ServicesITSolution from '../18-it-solution/ServicesITSolution';
import TeamITSolution from '../18-it-solution/TeamITSolution';
import TimelineITSolution from '../18-it-solution/TimelineITSolution';
import TestimonialOne from "../01-index-consulting/TestimonialOne";
import VideoOne from "../01-index-consulting/VideoOne";

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderTwo
          ctaHref="/contact-white"
          ctaTarget={null}
          homeActive
          mobileButtonClassName="hamberger-button"
          showTopNews
        />
        <BannerITSolution />
        <AboutITSolution />
        <ServicesITSolution />
        <CounterITSolution />
        <PortfolioITSolution />
        <TestimonialOne />
        <TimelineITSolution />
        <VideoOne />
        <PricingITSolution />
        <TeamITSolution />
        <CtaRealEstate />
        <AppointmentITSolution />
        <BrandITSolution />
        <BlogITSolution />
        <CtaModernBusiness />
        <FooterRealEstate />
      </main>
    </>
  )
}
