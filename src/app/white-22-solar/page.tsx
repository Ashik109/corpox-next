import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_ON_LIGHT } from '../components/HeaderModeClasses'
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutSolar from '../22-solar/AboutSolar';
import BannerSolar from '../22-solar/BannerSolar';
import BlogSolar from '../22-solar/BlogSolar';
import BrandSolar from '../22-solar/BrandSolar';
import ContactSolar from '../22-solar/ContactSolar';
import FooterSolar from '../22-solar/FooterSolar';
import GetInTouchSolar from '../22-solar/GetInTouchSolar';
import HeaderSolar from '../22-solar/HeaderSolar';
import PricingSolar from '../22-solar/PricingSolar';
import ServicesSolar from '../22-solar/ServicesSolar';
import ServiceTabsSolar from '../22-solar/ServiceTabsSolar';
import VideoSolar from '../22-solar/VideoSolar';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode demo-solar" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderSolar className={WHITE_HEADER_ON_LIGHT} />
        <BannerSolar />
        <ServiceTabsSolar />
        <GetInTouchSolar />
        <ServicesSolar />
        <AboutSolar />
        <PricingSolar />
        <ContactSolar />
        <VideoSolar />
        <BlogSolar />
        <BrandSolar />
        <FooterSolar />
      </main>
    </>
  )
}
