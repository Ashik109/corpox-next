import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import AboutBusinessCoach from '../15-business-coach/AboutBusinessCoach';
import BannerBusinessCoach from '../15-business-coach/BannerBusinessCoach';
import BlogBusinessCoach from '../15-business-coach/BlogBusinessCoach';
import BrandBusinessCoach from '../15-business-coach/BrandBusinessCoach';
import BusinessCoachAnimations from '../15-business-coach/BusinessCoachAnimations';
import BusinessServicesCoach from '../15-business-coach/BusinessServicesCoach';
import ContactBusinessCoach from '../15-business-coach/ContactBusinessCoach';
import CtaBusinessCoach from '../15-business-coach/CtaBusinessCoach';
import FooterBusinessCoach from '../15-business-coach/FooterBusinessCoach';
import HeaderThree from "../03-agency/HeaderThree";
import PortfolioBusinessCoach from '../15-business-coach/PortfolioBusinessCoach';
import PricingBusinessCoach from '../15-business-coach/PricingBusinessCoach';
import ServicesBusinessCoach from '../15-business-coach/ServicesBusinessCoach';
import TeamBusinessCoach from '../15-business-coach/TeamBusinessCoach';
import TestimonialBusinessCoach from '../15-business-coach/TestimonialBusinessCoach';
import TimelineBusinessCoach from '../15-business-coach/TimelineBusinessCoach';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <BusinessCoachAnimations />
      <main className="page-wrapper">
        <HeaderThree className={WHITE_HEADER_OVER_HERO} />
        <BannerBusinessCoach />
        <AboutBusinessCoach />
        <ServicesBusinessCoach />
        <BusinessServicesCoach />
        <TimelineBusinessCoach />
        <PortfolioBusinessCoach />
        <TestimonialBusinessCoach />
        <PricingBusinessCoach />
        <TeamBusinessCoach />
        <BrandBusinessCoach />
        <ContactBusinessCoach />
        <CtaBusinessCoach />
        <BlogBusinessCoach />
        <FooterBusinessCoach />
      </main>
    </>
  )
}
