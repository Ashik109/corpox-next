import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutEvent from '../23-event/AboutEvent';
import BannerEvent from '../23-event/BannerEvent';
import BlogEvent from '../23-event/BlogEvent';
import FooterEvent from '../23-event/FooterEvent';
import HeaderEvent from '../23-event/HeaderEvent';
import HighlightsEvent from '../23-event/HighlightsEvent';
import PricingEvent from '../23-event/PricingEvent';
import ScheduleEvent from '../23-event/ScheduleEvent';
import ServicesEvent from '../23-event/ServicesEvent';
import TeamEvent from '../23-event/TeamEvent';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode demo-event" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderEvent />
        <BannerEvent />
        <AboutEvent />
        <ServicesEvent />
        <ScheduleEvent />
        <TeamEvent />
        <HighlightsEvent />
        <PricingEvent />
        <BlogEvent />
        <FooterEvent />
      </main>
    </>
  )
}
