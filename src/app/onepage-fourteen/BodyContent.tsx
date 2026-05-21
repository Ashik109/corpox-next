import FinancialAnimations from '../14-financial-consulting/FinancialAnimations'
import BannerFinancial from '../14-financial-consulting/BannerFinancial'
import AboutTabsFinancial from '../14-financial-consulting/AboutTabsFinancial'
import ServicesFinancial from '../14-financial-consulting/ServicesFinancial'
import BusinessServicesFinancial from '../14-financial-consulting/BusinessServicesFinancial'
import CounterFinancial from '../14-financial-consulting/CounterFinancial'
import VideoFinancial from '../14-financial-consulting/VideoFinancial'
import TeamFinancial from '../14-financial-consulting/TeamFinancial'
import BlogFinancial from '../14-financial-consulting/BlogFinancial'
import AppointmentFinancial from '../14-financial-consulting/AppointmentFinancial'
import BrandFinancial from '../14-financial-consulting/BrandFinancial'
import TestimonialFinancial from '../14-financial-consulting/TestimonialFinancial'

function BodyContent() {
  return (
    <>
      <FinancialAnimations />
      <div id="hero">
        <BannerFinancial />
      </div>
      <div id="about">
        <AboutTabsFinancial />
      </div>
      <div id="service">
        <ServicesFinancial />
      </div>
      <BusinessServicesFinancial />
      <CounterFinancial />
      <VideoFinancial />
      <div id="team">
        <TeamFinancial />
      </div>
      <div id="blog">
        <BlogFinancial />
      </div>
      <div id="contactus">
        <AppointmentFinancial />
      </div>
      <BrandFinancial />
      <TestimonialFinancial />
    </>
  )
}

export default BodyContent
