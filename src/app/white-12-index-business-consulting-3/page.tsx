import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import AboutBusinessThree from '../12-index-business-consulting-3/AboutBusinessThree';
import AccordionBusinessThree from '../12-index-business-consulting-3/AccordionBusinessThree';
import AppointmentBusinessThree from '../12-index-business-consulting-3/AppointmentBusinessThree';
import BannerBusinessThree from '../12-index-business-consulting-3/BannerBusinessThree';
import BlogBusinessThree from '../12-index-business-consulting-3/BlogBusinessThree';
import BusinessThreeAnimations from '../12-index-business-consulting-3/BusinessThreeAnimations';
import CtaBusinessThree from '../12-index-business-consulting-3/CtaBusinessThree';
import FooterBusinessThree from '../12-index-business-consulting-3/FooterBusinessThree';
import HeaderOne from "../01-index-consulting/HeaderOne";
import MarqueeBusinessThree from '../12-index-business-consulting-3/MarqueeBusinessThree';
import ServiceTabsBusinessThree from '../12-index-business-consulting-3/ServiceTabsBusinessThree';
import TestimonialBusinessThree from '../12-index-business-consulting-3/TestimonialBusinessThree';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <BusinessThreeAnimations />
      <main className="page-wrapper">
        <HeaderOne className={WHITE_HEADER_OVER_HERO} />
        <BannerBusinessThree />
        <MarqueeBusinessThree />
        <AboutBusinessThree />
        <ServiceTabsBusinessThree />
        <CtaBusinessThree />
        <AccordionBusinessThree />
        <TestimonialBusinessThree />
        <AppointmentBusinessThree />
        <BlogBusinessThree />
        <FooterBusinessThree />
      </main>
    </>
  )
}
