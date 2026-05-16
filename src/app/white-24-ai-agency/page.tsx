import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutAiAgency from '../24-ai-agency/AboutAiAgency';
import BannerAiAgency from '../24-ai-agency/BannerAiAgency';
import BlogAiAgency from '../24-ai-agency/BlogAiAgency';
import BrandAiAgency from '../24-ai-agency/BrandAiAgency';
import CounterAiAgency from '../24-ai-agency/CounterAiAgency';
import FaqAiAgency from '../24-ai-agency/FaqAiAgency';
import FooterAiAgency from '../24-ai-agency/FooterAiAgency';
import HeaderAiAgency from '../24-ai-agency/HeaderAiAgency';
import PortfolioAiAgency from '../24-ai-agency/PortfolioAiAgency';
import ServicesAiAgency from '../24-ai-agency/ServicesAiAgency';
import WorkProcessAiAgency from '../24-ai-agency/WorkProcessAiAgency';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderAiAgency />
        <BannerAiAgency />
        <BrandAiAgency />
        <ServicesAiAgency />
        <AboutAiAgency />
        <WorkProcessAiAgency />
        <CounterAiAgency />
        <PortfolioAiAgency />
        <FaqAiAgency />
        <BlogAiAgency />
        <FooterAiAgency />
      </main>
    </>
  )
}
