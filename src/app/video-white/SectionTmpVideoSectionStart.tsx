"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function SectionTmpVideoSectionStart() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    void video.play().catch(() => {
      // Some browsers defer autoplay until the next user gesture.
    })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let refreshFrame = 0
    const ctx = gsap.context(() => {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          duration: 1,
          scaleX: 0,
          transformOrigin: 'center center',
          ease: 'power1.out',
          scrollTrigger: {
            trigger: overlayRef.current,
            scrub: 1,
            start: 'top 65%',
            end: '+=300',
          },
        })
      }

      if (textRef.current) {
        gsap.to(textRef.current, {
          x: 1000,
          duration: 10,
          repeat: -1,
          ease: 'linear',
        })

        gsap.to(textRef.current, {
          xPercent: 5,
          scrollTrigger: {
            trigger: textRef.current,
            scrub: 1,
          },
        })
      }

      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh())
    }, sectionRef)

    return () => {
      cancelAnimationFrame(refreshFrame)
      ctx.revert()
    }
  }, [])

  return (
    <>
      <div className="tmp-video-section-start-one tmp-section-gapBottom" ref={sectionRef}>
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="large-video-playing grow-thumbnail-1">
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto">
      <source src="/assets/images/video/01.mp4" type="video/mp4" />
      </video>
      <div
        className="grow-thumbnail-1-overlay"
        ref={overlayRef}
        style={{ transformOrigin: 'center center' }}
      ></div>
      </div>
      </div>
      </div>
      </div>
      <div className="text-split-wrap-video scrolltext-wrapper">
      <div className="text-split scrollingtext-1" ref={textRef}>
      <h2 className="title">
                              Overview of your consulting firm&apos;s{' '}
                              <span>mission, values, and team expertise</span>
                              Overview of your consulting firm&apos;s{' '}
                              <span>mission, values, and team expertise</span>
                              Overview of your consulting firm&apos;s{' '}
                              <span>mission, values, and team expertise</span>
      </h2>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionTmpVideoSectionStart
