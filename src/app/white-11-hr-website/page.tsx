import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import AboutHRWebsite from '../11-hr-website/AboutHRWebsite';
import BannerHRWebsite from '../11-hr-website/BannerHRWebsite';
import BlogHRWebsite from '../11-hr-website/BlogHRWebsite';
import BrandHRWebsite from '../11-hr-website/BrandHRWebsite';
import CounterHRWebsite from '../11-hr-website/CounterHRWebsite';
import FooterHRWebsite from '../11-hr-website/FooterHRWebsite';
import HeaderOne from "../01-index-consulting/HeaderOne";
import HRWebsiteAnimations from '../11-hr-website/HRWebsiteAnimations';
import PortfolioHRWebsite from '../11-hr-website/PortfolioHRWebsite';
import ServicesHRWebsite from '../11-hr-website/ServicesHRWebsite';
import SkillHRWebsite from '../11-hr-website/SkillHRWebsite';
import TestimonialMapHRWebsite from '../11-hr-website/TestimonialMapHRWebsite';
import VideoHRWebsite from '../11-hr-website/VideoHRWebsite';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <HRWebsiteAnimations />
      <main className="page-wrapper">
        <HeaderOne className={WHITE_HEADER_OVER_HERO} />
        <BannerHRWebsite />
        <ServicesHRWebsite />
        <AboutHRWebsite />
        <PortfolioHRWebsite />
        <CounterHRWebsite />
        <SkillHRWebsite />
        <TestimonialMapHRWebsite />
        <VideoHRWebsite />
        <BrandHRWebsite />
        <BlogHRWebsite />
        <FooterHRWebsite />
      </main>
    </>
  )
}
