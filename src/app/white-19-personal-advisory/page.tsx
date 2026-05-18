import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import CtaModernBusiness from "../08-business/CtaModernBusiness";
import HeaderThree from "../03-agency/HeaderThree";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import FooterRealEstate from "../16-real-estate-consulting/FooterRealEstate";
import CounterITSolution from "../18-it-solution/CounterITSolution";
import BannerPersonalAdvisory from '../19-personal-advisory/BannerPersonalAdvisory';
import BlogPersonalAdvisory from '../19-personal-advisory/BlogPersonalAdvisory';
import BusinessServicesPersonalAdvisory from '../19-personal-advisory/BusinessServicesPersonalAdvisory';
import GetInTouchPersonalAdvisory from '../19-personal-advisory/GetInTouchPersonalAdvisory';
import PortfolioPersonalAdvisory from '../19-personal-advisory/PortfolioPersonalAdvisory';
import PricingPersonalAdvisory from '../19-personal-advisory/PricingPersonalAdvisory';
import ServicesPersonalAdvisory from '../19-personal-advisory/ServicesPersonalAdvisory';
import TopbarPersonalAdvisory from '../19-personal-advisory/TopbarPersonalAdvisory';
import TestimonialOne from "../01-index-consulting/TestimonialOne";

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <TopbarPersonalAdvisory />
        <HeaderThree className={WHITE_HEADER_OVER_HERO} />
        <BannerPersonalAdvisory />
        <ServicesPersonalAdvisory />
        <BusinessServicesPersonalAdvisory />
        <CounterITSolution />
        <PortfolioPersonalAdvisory />
        <TestimonialOne />
        <GetInTouchPersonalAdvisory />
        <PricingPersonalAdvisory />
        <BlogPersonalAdvisory />
        <CtaModernBusiness />
        <FooterRealEstate />
      </main>
    </>
  )
}
