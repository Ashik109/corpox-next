import BodyClassEvent from '../23-event/BodyClassEvent'
import RealEstateAnimations from '../16-real-estate-consulting/RealEstateAnimations'
import BannerEvent from '../23-event/BannerEvent'
import AboutEvent from '../23-event/AboutEvent'
import ServicesEvent from '../23-event/ServicesEvent'
import ScheduleEvent from '../23-event/ScheduleEvent'
import TeamEvent from '../23-event/TeamEvent'
import HighlightsEvent from '../23-event/HighlightsEvent'
import PricingEvent from '../23-event/PricingEvent'
import BlogEvent from '../23-event/BlogEvent'

function BodyContent() {
  return (
    <>
      <BodyClassEvent />
      <RealEstateAnimations />
      <div id="hero">
        <BannerEvent />
      </div>
      <div id="about">
        <AboutEvent />
      </div>
      <div id="service">
        <ServicesEvent />
      </div>
      <ScheduleEvent />
      <div id="team">
        <TeamEvent />
      </div>
      <HighlightsEvent />
      <PricingEvent />
      <div id="blog">
        <BlogEvent />
      </div>
    </>
  )
}

export default BodyContent
