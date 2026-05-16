import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import AboutMarketingAgency from '../10-marketing-agency/AboutMarketingAgency';
import BannerMarketingAgency from '../10-marketing-agency/BannerMarketingAgency';
import BlogMarketingAgency from '../10-marketing-agency/BlogMarketingAgency';
import BrandMarketingAgency from '../10-marketing-agency/BrandMarketingAgency';
import FooterMarketingAgency from '../10-marketing-agency/FooterMarketingAgency';
import HeaderOne from "../01-index-consulting/HeaderOne";
import MarketingAgencyAnimations from '../10-marketing-agency/MarketingAgencyAnimations';
import PricingMarketingAgency from '../10-marketing-agency/PricingMarketingAgency';
import SplitMarketingAgency from '../10-marketing-agency/SplitMarketingAgency';
import TestimonialMarketingAgency from '../10-marketing-agency/TestimonialMarketingAgency';
import TimelineMarketingAgency from '../10-marketing-agency/TimelineMarketingAgency';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <MarketingAgencyAnimations />
      <main className="page-wrapper">
        <HeaderOne />
        <BannerMarketingAgency />
        <hr />
        <AboutMarketingAgency />
        <TimelineMarketingAgency />
        <SplitMarketingAgency />
        <TestimonialMarketingAgency />
        <PricingMarketingAgency />
        <BlogMarketingAgency />
        <BrandMarketingAgency />
        <FooterMarketingAgency />
      </main>
    </>
  )
}
