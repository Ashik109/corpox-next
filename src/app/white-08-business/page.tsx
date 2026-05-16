import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import AboutBusiness from '../08-business/AboutBusiness';
import AboutBusinessFluid from '../08-business/AboutBusinessFluid';
import BannerBusiness from '../08-business/BannerBusiness';
import BlogBusiness from '../08-business/BlogBusiness';
import BrandBusiness from '../08-business/BrandBusiness';
import BusinessAnimations from '../08-business/BusinessAnimations';
import CounterBusiness from '../08-business/CounterBusiness';
import CtaBusiness from '../08-business/CtaBusiness';
import CtaModernBusiness from '../08-business/CtaModernBusiness';
import FooterBusiness from '../08-business/FooterBusiness';
import HeaderOne from "../01-index-consulting/HeaderOne";
import PortfolioBusiness from '../08-business/PortfolioBusiness';
import ServicesBusiness from '../08-business/ServicesBusiness';
import TeamBusiness from '../08-business/TeamBusiness';
import WorkingProcessBusiness from '../08-business/WorkingProcessBusiness';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <BusinessAnimations />
      <main className="page-wrapper">
        <HeaderOne />
        <BannerBusiness />
        <TeamBusiness />
        <AboutBusiness />
        <BrandBusiness />
        <PortfolioBusiness />
        <AboutBusinessFluid />
        <ServicesBusiness />
        <CounterBusiness />
        <WorkingProcessBusiness />
        <CtaBusiness />
        <BlogBusiness />
        <CtaModernBusiness />
        <FooterBusiness />
      </main>
    </>
  )
}
