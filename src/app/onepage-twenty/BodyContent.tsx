import BodyClassGymFitness from '../20-gym-fitness/BodyClassGymFitness'
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerGymFitness from '../20-gym-fitness/BannerGymFitness'
import ServicesGymFitness from '../20-gym-fitness/ServicesGymFitness'
import AboutGymFitness from '../20-gym-fitness/AboutGymFitness'
import TeamGymFitness from '../20-gym-fitness/TeamGymFitness'
import TimeTableGymFitness from '../20-gym-fitness/TimeTableGymFitness'
import PricingGymFitness from '../20-gym-fitness/PricingGymFitness'
import AppointmentGymFitness from '../20-gym-fitness/AppointmentGymFitness'
import BlogGymFitness from '../20-gym-fitness/BlogGymFitness'
import BrandGymFitness from '../20-gym-fitness/BrandGymFitness'

function BodyContent() {
  return (
    <>
      <BodyClassGymFitness />
      <RealEstateAnimations />
      <div id="hero">
        <BannerGymFitness />
      </div>
      <div id="service">
        <ServicesGymFitness />
      </div>
      <div id="about">
        <AboutGymFitness />
      </div>
      <div id="team">
        <TeamGymFitness />
      </div>
      <TimeTableGymFitness />
      <PricingGymFitness />
      <div id="contactus">
        <AppointmentGymFitness />
      </div>
      <div id="blog">
        <BlogGymFitness />
      </div>
      <BrandGymFitness />
    </>
  )
}

export default BodyContent
