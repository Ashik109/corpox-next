'use client'

import { useTitleSplitAnimation } from '../components/useTitleSplitAnimation'

const steps = [
  { title: 'Knowledge', description: 'Present all available features in Essentials.' },
  { title: 'Working', description: 'All Feature available features in Essentials.' },
  { title: 'Solution', description: 'Popular Feature available features in Essentials.' },
  { title: 'Process', description: 'Latest Feature available features in Essentials.' },
]

function AboutTimeline() {
  useTitleSplitAnimation()

  return (
    <div className="tmp-timeline-area tmp-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle">
                  <span className="number">+3</span>
                  <span className="subtitle-text">Working Process</span>
                </span>
                <div className="line-separator line-right" />
              </div>
              <h2 className="title w-700 tmp-title-split">Our Working Process</h2>
              <p className="b1">We make your spending stress-free for you to have the perfect control.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 mt--10">
            <div className="timeline-style-two bg-color-blackest">
              <div className="row row--0">
                {steps.map((step) => (
                  <div key={step.title} className="col-lg-3 col-md-3 tmp-timeline-single no-gradient">
                    <div className="tmp-timeline">
                      <h6 className="title" data-aos="slide-up" data-aos-duration="700" data-aos-delay="200">
                        {step.title}
                      </h6>
                      <div className="progress-line"><div className="line-inner" /></div>
                      <div className="progress-dot">
                        <div className="dot-level"><div className="dot-inner" /></div>
                      </div>
                      <p className="description" data-aos="slide-up" data-aos-duration="700" data-aos-delay="300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTimeline
