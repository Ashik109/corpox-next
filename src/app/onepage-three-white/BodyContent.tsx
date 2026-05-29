import BannerThree from '../03-agency/BannerThree'
import BrandOne from '../03-agency/BrandOne'
import AboutThree from '../03-agency/AboutThree'
import ServicesFour from '../03-agency/ServicesFour'
import CaseStudyTwo from '../03-agency/CaseStudyTwo'
import GetInTouch from '../03-agency/GetInTouch'
import MissionOne from '../03-agency/MissionOne'
import CounterTwo from '../03-agency/CounterTwo'
import TeamTwo from '../03-agency/TeamTwo'
import ContactOne from '../01-index-consulting/ContactOne'
import CtaOne from '../01-index-consulting/CtaOne'
import BlogTwo from '../03-agency/BlogTwo'

function BodyContent() {
  return (
    <>
      <div id="hero">
        <BannerThree />
      </div>
      <BrandOne />
      <div id="about">
        <AboutThree />
      </div>
      <div id="service">
        <ServicesFour />
      </div>
      <div id="project">
        <CaseStudyTwo />
      </div>
      <div id="contactus" className='tmp-section-gap'>
        <GetInTouch />
      </div>
      <MissionOne />
      <CounterTwo />
      <div id="team">
        <TeamTwo />
      </div>
      <ContactOne />
      <CtaOne />
      <div id="blog" className='tmp-section-gapBottom'>
        <BlogTwo />
      </div>
    </>
  )
}

export default BodyContent
