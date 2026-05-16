import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import AboutDigitalAgency from '../09-digital-agency/AboutDigitalAgency';
import BannerDigitalAgency from '../09-digital-agency/BannerDigitalAgency';
import BlogDigitalAgency from '../09-digital-agency/BlogDigitalAgency';
import CounterDigitalAgency from '../09-digital-agency/CounterDigitalAgency';
import DigitalAgencyAnimations from '../09-digital-agency/DigitalAgencyAnimations';
import FooterDigitalAgency from '../09-digital-agency/FooterDigitalAgency';
import HeaderOne from "../01-index-consulting/HeaderOne";
import LatestServiceDigitalAgency from '../09-digital-agency/LatestServiceDigitalAgency';
import PortfolioDigitalAgency from '../09-digital-agency/PortfolioDigitalAgency';
import ServicesDigitalAgency from '../09-digital-agency/ServicesDigitalAgency';
import TestimonialDigitalAgency from '../09-digital-agency/TestimonialDigitalAgency';
import WorkingProcessDigitalAgency from '../09-digital-agency/WorkingProcessDigitalAgency';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <DigitalAgencyAnimations />
      <main className="page-wrapper">
        <HeaderOne />
        <BannerDigitalAgency />
        <LatestServiceDigitalAgency />
        <AboutDigitalAgency />
        <WorkingProcessDigitalAgency />
        <ServicesDigitalAgency />
        <PortfolioDigitalAgency />
        <CounterDigitalAgency />
        <TestimonialDigitalAgency />
        <BlogDigitalAgency />
        <FooterDigitalAgency />
      </main>
    </>
  )
}
