import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutArchitecture from '../25-architecture/AboutArchitecture';
import BannerArchitecture from '../25-architecture/BannerArchitecture';
import BlogArchitecture from '../25-architecture/BlogArchitecture';
import FooterArchitecture from '../25-architecture/FooterArchitecture';
import HeaderArchitecture from '../25-architecture/HeaderArchitecture';
import PortfolioArchitecture from '../25-architecture/PortfolioArchitecture';
import ServicesArchitecture from '../25-architecture/ServicesArchitecture';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode demo-architecture" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderArchitecture />
        <BannerArchitecture />
        <AboutArchitecture />
        <PortfolioArchitecture />
        <ServicesArchitecture />
        <BlogArchitecture />
        <FooterArchitecture />
      </main>
    </>
  )
}
