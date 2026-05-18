import React from 'react'
import BodyClass from '../white-01-index-consulting/BodyClass'
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutGymFitness from '../20-gym-fitness/AboutGymFitness';
import AppointmentGymFitness from '../20-gym-fitness/AppointmentGymFitness';
import BannerGymFitness from '../20-gym-fitness/BannerGymFitness';
import BlogGymFitness from '../20-gym-fitness/BlogGymFitness';
import BrandGymFitness from '../20-gym-fitness/BrandGymFitness';
import FooterGymFitness from '../20-gym-fitness/FooterGymFitness';
import HeaderGymFitness from '../20-gym-fitness/HeaderGymFitness';
import PricingGymFitness from '../20-gym-fitness/PricingGymFitness';
import ServicesGymFitness from '../20-gym-fitness/ServicesGymFitness';
import TeamGymFitness from '../20-gym-fitness/TeamGymFitness';
import TimeTableGymFitness from '../20-gym-fitness/TimeTableGymFitness';

export default function Page() {
  return (
    <>
      <BodyClass className="active-light-mode gym-demo" />
      <RealEstateAnimations />
      <main className="page-wrapper">
        <HeaderGymFitness />
        <BannerGymFitness />
        <ServicesGymFitness />
        <AboutGymFitness />
        <TeamGymFitness />
        <TimeTableGymFitness />
        <PricingGymFitness />
        <AppointmentGymFitness />
        <BlogGymFitness />
        <BrandGymFitness />
        <FooterGymFitness />
      </main>
    </>
  )
}
