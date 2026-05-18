import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import AboutTabsFinancial from '../14-financial-consulting/AboutTabsFinancial';
import AppointmentFinancial from '../14-financial-consulting/AppointmentFinancial';
import BannerFinancial from '../14-financial-consulting/BannerFinancial';
import BlogFinancial from '../14-financial-consulting/BlogFinancial';
import BrandFinancial from '../14-financial-consulting/BrandFinancial';
import BusinessServicesFinancial from '../14-financial-consulting/BusinessServicesFinancial';
import CounterFinancial from '../14-financial-consulting/CounterFinancial';
import FinancialAnimations from '../14-financial-consulting/FinancialAnimations';
import FooterFinancial from '../14-financial-consulting/FooterFinancial';
import HeaderThree from "../03-agency/HeaderThree";
import ServicesFinancial from '../14-financial-consulting/ServicesFinancial';
import TeamFinancial from '../14-financial-consulting/TeamFinancial';
import TestimonialFinancial from '../14-financial-consulting/TestimonialFinancial';
import VideoFinancial from '../14-financial-consulting/VideoFinancial';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <FinancialAnimations />
      <main className="page-wrapper">
        <HeaderThree className={WHITE_HEADER_OVER_HERO} />
        <BannerFinancial />
        <AboutTabsFinancial />
        <ServicesFinancial />
        <BusinessServicesFinancial />
        <CounterFinancial />
        <VideoFinancial />
        <TeamFinancial />
        <BlogFinancial />
        <AppointmentFinancial />
        <BrandFinancial />
        <TestimonialFinancial />
        <FooterFinancial />
      </main>
    </>
  )
}
