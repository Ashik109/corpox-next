import AboutBanner from './AboutBanner'
import AboutIntro from './AboutIntro'
import AboutCounter from './AboutCounter'
import AboutGetInTouch from './AboutGetInTouch'
import AboutTimeline from './AboutTimeline'
import AboutVideo from './AboutVideo'
import AboutTeam from './AboutTeam'
import TestimonialMapHRWebsite from '../11-hr-website/TestimonialMapHRWebsite'
import AboutBrand from './AboutBrand'
import AboutGallery from './AboutGallery'

function BodyContent() {
  return (
    <>
      <AboutBanner />
      <AboutIntro />
      <AboutCounter />
      <AboutGetInTouch />
      <AboutTimeline />
      <AboutVideo />
      <AboutTeam />
      <TestimonialMapHRWebsite sectionClassName="tmp-section-gapBottom" />
      <AboutBrand />
      <AboutGallery />
    </>
  )
}

export default BodyContent
