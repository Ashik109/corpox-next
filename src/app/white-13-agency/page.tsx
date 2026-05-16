import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import AboutAgencyThirteen from '../13-agency/AboutAgencyThirteen';
import AgencyThirteenAnimations from '../13-agency/AgencyThirteenAnimations';
import AppointmentAgencyThirteen from '../13-agency/AppointmentAgencyThirteen';
import BannerAgencyThirteen from '../13-agency/BannerAgencyThirteen';
import BlogAgencyThirteen from '../13-agency/BlogAgencyThirteen';
import BrandAgencyThirteen from '../13-agency/BrandAgencyThirteen';
import CounterAgencyThirteen from '../13-agency/CounterAgencyThirteen';
import CtaAgencyThirteen from '../13-agency/CtaAgencyThirteen';
import FooterAgencyThirteen from '../13-agency/FooterAgencyThirteen';
import HeaderThree from "../03-agency/HeaderThree";
import MissionAgencyThirteen from '../13-agency/MissionAgencyThirteen';
import PortfolioAgencyThirteen from '../13-agency/PortfolioAgencyThirteen';
import ServicesAgencyThirteen from '../13-agency/ServicesAgencyThirteen';
import TeamAgencyThirteen from '../13-agency/TeamAgencyThirteen';
import TestimonialAgencyThirteen from '../13-agency/TestimonialAgencyThirteen';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <AgencyThirteenAnimations />
      <main className="page-wrapper">
        <HeaderThree />
        <BannerAgencyThirteen />
        <AboutAgencyThirteen />
        <ServicesAgencyThirteen />
        <BrandAgencyThirteen />
        <MissionAgencyThirteen />
        <PortfolioAgencyThirteen />
        <CounterAgencyThirteen />
        <TeamAgencyThirteen />
        <CtaAgencyThirteen />
        <AppointmentAgencyThirteen />
        <TestimonialAgencyThirteen />
        <BlogAgencyThirteen />
        <FooterAgencyThirteen />
      </main>
    </>
  )
}
