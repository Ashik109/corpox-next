import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutFluidConstruction from '../26-construction/AboutFluidConstruction';
import BannerConstruction from '../26-construction/BannerConstruction';
import BlogConstruction from '../26-construction/BlogConstruction';
import BrandConstruction from '../26-construction/BrandConstruction';
import ContactConstruction from '../26-construction/ContactConstruction';
import ConstructionTabs from '../26-construction/ConstructionTabs';
import CounterConstruction from '../26-construction/CounterConstruction';
import FooterConstruction from '../26-construction/FooterConstruction';
import GetInTouchConstruction from '../26-construction/GetInTouchConstruction';
import HeaderConstruction from '../26-construction/HeaderConstruction';
import PortfolioConstruction from '../26-construction/PortfolioConstruction';
import PricingConstruction from '../26-construction/PricingConstruction';
import ServicesConstruction from '../26-construction/ServicesConstruction';
import VideoConstruction from '../26-construction/VideoConstruction';
import TopbarConstruction from '../26-construction/TopbarConstruction';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <TopbarConstruction />
        <HeaderConstruction />
        <BannerConstruction />
        <ConstructionTabs />
        <ServicesConstruction />
        <PortfolioConstruction />
        <GetInTouchConstruction />
        <AboutFluidConstruction />
        <PricingConstruction />
        <CounterConstruction />
        <ContactConstruction />
        <VideoConstruction />
        <BlogConstruction />
        <BrandConstruction />
        <FooterConstruction />
      </main>
    </>
  )
}
