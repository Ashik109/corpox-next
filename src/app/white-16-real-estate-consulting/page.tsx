import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import { WHITE_HEADER_OVER_HERO } from '../components/HeaderModeClasses'
import AboutRealEstate from '../16-real-estate-consulting/AboutRealEstate';
import BannerRealEstate from '../16-real-estate-consulting/BannerRealEstate';
import BlogRealEstate from '../16-real-estate-consulting/BlogRealEstate';
import ContactRealEstate from '../16-real-estate-consulting/ContactRealEstate';
import CounterRealEstate from '../16-real-estate-consulting/CounterRealEstate';
import CtaRealEstate from '../16-real-estate-consulting/CtaRealEstate';
import FeaturedPropertiesRealEstate from '../16-real-estate-consulting/FeaturedPropertiesRealEstate';
import FooterRealEstate from '../16-real-estate-consulting/FooterRealEstate';
import GalleryRealEstate from '../16-real-estate-consulting/GalleryRealEstate';
import HeaderThree from "../03-agency/HeaderThree";
import MissionVisionRealEstate from '../16-real-estate-consulting/MissionVisionRealEstate';
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations';
import ServicesRealEstate from '../16-real-estate-consulting/ServicesRealEstate';
import VideoRealEstate from '../16-real-estate-consulting/VideoRealEstate';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderThree className={WHITE_HEADER_OVER_HERO} />
        <BannerRealEstate />
        <ServicesRealEstate />
        <AboutRealEstate />
        <CounterRealEstate />
        <MissionVisionRealEstate />
        <FeaturedPropertiesRealEstate />
        <GalleryRealEstate />
        <VideoRealEstate />
        <ContactRealEstate />
        <CtaRealEstate />
        <BlogRealEstate />
        <FooterRealEstate />
      </main>
    </>
  )
}
