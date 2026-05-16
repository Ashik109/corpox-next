'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useTitleSplitAnimation } from '../components/useTitleSplitAnimation'

interface OdometerElement extends HTMLElement {
  od?: { update: (value: number) => void }
}

const features = [
  { icon: 'feather-home', label: 'Smart Home Design' },
  { icon: 'feather-sun', label: 'Beautiful Scene Around' },
  { icon: 'feather-zap', label: 'Exceptional Lifestyle' },
  { icon: 'feather-shield', label: 'Complete 24/7 Security' },
]

function AboutIntro() {
  useTitleSplitAnimation()
  const odometerRefs = useRef<OdometerElement[]>([])

  useEffect(() => {
    let observer: IntersectionObserver
    import('odometer').then((module) => {
      const Odometer = module.default
      odometerRefs.current.forEach((el) => {
        el.od = new Odometer({ el, value: 0, format: 'd', duration: 2000 })
      })
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as OdometerElement
            if (entry.isIntersecting && !el.classList.contains('odometer-triggered')) {
              el.od?.update(Number(el.dataset.count))
              el.classList.add('odometer-triggered')
            }
          })
        },
        { threshold: 0.5 },
      )
      odometerRefs.current.forEach((el) => observer.observe(el))
    })
    return () => observer?.disconnect()
  }, [])

  return (
    <div className="about-area about-style-4 tmp-section-gapTop">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail-about-8">
              <div className="large-image invers-anime">
                <img src="/assets/images/about/about-10.jpg" alt="" loading="lazy" />
              </div>
              <div className="small-iamge-area images-left-right-float">
                <img src="/assets/images/about/about-12.png" alt="" loading="lazy" />
                <div className="video-icon">
                  <a className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                    <span><i className="feather-play" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 pl--60 pl_md--10 pl_sm--10 mt_md--30 mt_sm--30">
            <div className="about-wrapper-8">
              <div className="tmp-section-title-border text-start">
                <div className="pres-line-separator-wrapper text-start mb--10">
                  <span className="subtitle">
                    <span className="number">03</span>
                    <span className="subtitle-text">About Us</span>
                  </span>
                  <div className="line-separator line-right" />
                </div>
                <h2 className="title w-700 tmp-title-split">
                  Lets Know <span className="theme-gradient">About</span> Our <br /> Company
                </h2>
              </div>
              <p className="discription">
                Over{' '}
                <span
                  className="odometer"
                  data-count={39000}
                  ref={(el) => {
                    if (el) odometerRefs.current[0] = el
                  }}
                >
                  00000
                </span>{' '}
                people work for us in more than{' '}
                <span
                  className="odometer"
                  data-count={120}
                  ref={(el) => {
                    if (el) odometerRefs.current[1] = el
                  }}
                >
                  000
                </span>{' '}
                countries all over the This breadth of global coverage, combined with specialist
                services
              </p>
              <ul className="tmp-list-item-half">
                {features.map((feature) => (
                  <li key={feature.label}>
                    <div className="icon">
                      <i className={feature.icon} />
                    </div>
                    {feature.label}
                  </li>
                ))}
              </ul>
              <div className="quote-area-about tmponhover bg-card mt--30">
                <p>
                  &quot;Enimad minim veniam quis nostrud exercitation <br />
                  llamco laboris. Lorem ipsum dolor sit amet&quot;
                </p>
              </div>
              <Link href="/service/management-leadership" className="tmp-btn btn-primary">
                Our Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro
