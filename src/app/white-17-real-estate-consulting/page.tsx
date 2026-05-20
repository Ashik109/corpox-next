import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import BlogRealEstate from "../16-real-estate-consulting/BlogRealEstate";
import CtaRealEstate from "../16-real-estate-consulting/CtaRealEstate";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import VideoRealEstate from "../16-real-estate-consulting/VideoRealEstate";
import AboutRealEstateTwo from '../17-real-estate-consulting/AboutRealEstateTwo';
import BannerRealEstateTwo from '../17-real-estate-consulting/BannerRealEstateTwo';
import CounterRealEstateTwo from '../17-real-estate-consulting/CounterRealEstateTwo';
import FeaturedPropertiesRealEstateTwo from '../17-real-estate-consulting/FeaturedPropertiesRealEstateTwo';
import FooterRealEstateTwo from '../17-real-estate-consulting/FooterRealEstateTwo';
import GalleryRealEstateTwo from '../17-real-estate-consulting/GalleryRealEstateTwo';
import HeaderRealEstateTwoWhite from './HeaderRealEstateTwoWhite';
import MissionVisionRealEstateTwo from '../17-real-estate-consulting/MissionVisionRealEstateTwo';
import ServiceTabsRealEstateTwo from '../17-real-estate-consulting/ServiceTabsRealEstateTwo';
import ContactRealEstate from "../16-real-estate-consulting/ContactRealEstate";

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderRealEstateTwoWhite />
        <BannerRealEstateTwo />
        <AboutRealEstateTwo />
        <ServiceTabsRealEstateTwo />
        <FeaturedPropertiesRealEstateTwo />
        <CounterRealEstateTwo />
        <MissionVisionRealEstateTwo />
        <GalleryRealEstateTwo />
        <VideoRealEstate />
        <ContactRealEstate />
        <CtaRealEstate />
        <BlogRealEstate />
        <FooterRealEstateTwo />
      </main>
    </>
  )
}
