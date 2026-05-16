'use client'

import { useEffect, useRef } from 'react'
import { useTitleSplitAnimation } from '../components/useTitleSplitAnimation'

interface OdometerElement extends HTMLElement {
  od?: { update: (value: number) => void }
}

function AboutTestimonial() {
  useTitleSplitAnimation()
  const odometerRef = useRef<OdometerElement | null>(null)

  useEffect(() => {
    let observer: IntersectionObserver
    import('odometer').then((module) => {
      const Odometer = module.default
      if (!odometerRef.current) return
      odometerRef.current.od = new Odometer({ el: odometerRef.current, value: 0, format: 'd', duration: 2000 })
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
      observer.observe(odometerRef.current)
    })
    return () => observer?.disconnect()
  }, [])

  return (
    <section className="tmp-section-gapBottom position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle">
                  <span className="number">+4</span>
                  <span className="subtitle-text">Testimonials</span>
                </span>
                <div className="line-separator line-right" />
              </div>
              <h2 className="title w-700 tmp-title-split">Our customers success stories</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="tmp-testimonial-map-wrapper">
          <div className="tmp-inner position-relative z-2">
            <div className="tmp-testimonial-map-img">
              <img src="/assets/images/testimonial/map.png" alt="World Map" />
            </div>
          </div>
          <div className="tmp-testimonial-bottom-area pb--10">
            <h4 className="tmp-counter tmp-count tmp-w-fit mx-auto mb--0">
              <span
                className="odometer"
                data-count={216000}
                ref={odometerRef}
              >
                00
              </span>
              <span className="counter-suffix">+</span>
            </h4>
            <p className="mb--5 mt--5">Worldwide Customers Feedback</p>
            <p className="b3 mb--0 tmp-text-heading tmp-fw-medium">Since 1989</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTestimonial
