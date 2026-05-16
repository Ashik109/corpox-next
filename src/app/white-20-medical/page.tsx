import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import HeaderOne from "../01-index-consulting/HeaderOne";
import TopbarOne from "../01-index-consulting/TopbarOne";
import CtaModernBusiness from "../08-business/CtaModernBusiness";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutMedical from '../21-medical/AboutMedical';
import BannerMedical from '../21-medical/BannerMedical';
import BlogMedical from '../21-medical/BlogMedical';
import BrandMedical from '../21-medical/BrandMedical';
import CounterMedical from '../21-medical/CounterMedical';
import FooterMedical from '../21-medical/FooterMedical';
import PortfolioMedical from '../21-medical/PortfolioMedical';
import ServicesMedical from '../21-medical/ServicesMedical';
import TestimonialMedical from '../21-medical/TestimonialMedical';
import TimeTableMedical from '../21-medical/TimeTableMedical';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <TopbarOne />
        <HeaderOne />
        <BannerMedical />
        <TimeTableMedical />
        <AboutMedical />
        <ServicesMedical />
        <CounterMedical />
        <PortfolioMedical />
        <TestimonialMedical />
        <BlogMedical />
        <BrandMedical />
        <CtaModernBusiness />
        <FooterMedical />
      </main>
    </>
  )
}
