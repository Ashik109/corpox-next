'use client'

import { useEffect, useRef } from 'react'
import { useTitleSplitAnimation } from '../components/useTitleSplitAnimation'

interface OdometerElement extends HTMLElement {
  od?: { update: (value: number) => void }
}

const counters = [
  { icon: '01.svg', count: 1200, suffix: '+', label: 'Project Done' },
  { icon: '02.svg', count: 99, suffix: '%', label: 'Business Solution' },
  { icon: '03.svg', count: 18, suffix: 'M', label: 'Global Customers' },
]

function AboutCounter() {
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
    <div className="tmp-counterup-area tmp-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle">
                  <span className="number">+2000</span>
                  <span className="subtitle-text">Awesome Clients</span>
                </span>
                <div className="line-separator line-right" />
              </div>
              <h2 className="title w-700">Our Agency in Numbers</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="row g-5 mt--0">
              {counters.map((item, index) => (
                <div key={item.label} className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="signle-fun-facts-one tmponhover">
                    <div className="icon">
                      <img src={`/assets/images/fun-facts/${item.icon}`} alt="fun-facts" />
                    </div>
                    <h2 className="title">
                      <span
                        className="odometer"
                        data-count={item.count}
                        ref={(el) => {
                          if (el) odometerRefs.current[index] = el
                        }}
                      >
                        00
                      </span>
                      {item.suffix}
                    </h2>
                    <span className="bototm">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCounter
