import BodyClassMedical from '../21-medical/BodyClassMedical'
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerMedical from '../21-medical/BannerMedical'
import TimeTableMedical from '../21-medical/TimeTableMedical'
import AboutMedical from '../21-medical/AboutMedical'
import ServicesMedical from '../21-medical/ServicesMedical'
import CounterMedical from '../21-medical/CounterMedical'
import PortfolioMedical from '../21-medical/PortfolioMedical'
import TestimonialMedical from '../21-medical/TestimonialMedical'
import BlogMedical from '../21-medical/BlogMedical'
import BrandMedical from '../21-medical/BrandMedical'
import CtaModernBusiness from '../08-business/CtaModernBusiness'

function BodyContent() {
  return (
    <>
      <BodyClassMedical />
      <RealEstateAnimations />
      <div id="hero">
        <BannerMedical />
      </div>
      <TimeTableMedical />
      <div id="about">
        <AboutMedical />
      </div>
      <div id="service">
        <ServicesMedical />
      </div>
      <CounterMedical />
      <div id="project">
        <PortfolioMedical />
      </div>
      <TestimonialMedical />
      <div id="blog">
        <BlogMedical />
      </div>
      <BrandMedical />
      <CtaModernBusiness />
    </>
  )
}

export default BodyContent
