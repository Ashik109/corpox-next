'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function VideoOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      void video.play().catch(() => {
        // Autoplay may be blocked until user interaction
      });
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let refreshFrame = 0;
    const ctx = gsap.context(() => {

      // --------------------------
      // Overlay shrink animation
      // --------------------------
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          duration: 1,
          scaleX: 0,
          transformOrigin: 'center center', // shrink from both sides
          ease: 'power1.out',
          scrollTrigger: {
            trigger: overlayRef.current,
            scrub: 1,
            start: 'top 65%',
            end: '+=300',
          },
        });
      }

      // --------------------------
      // Scrolling text animation
      // --------------------------
      if (textRef.current) {
        // Infinite horizontal scroll
        gsap.to(textRef.current, {
          x: 1000,
          duration: 10,
          repeat: -1,
          ease: 'linear',
        });

        // Scroll-triggered subtle horizontal movement
        gsap.to(textRef.current, {
          xPercent: 5,
          scrollTrigger: {
            trigger: textRef.current,
            scrub: 1,
          },
        });
      }

      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => {
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* tmp video section start */}
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
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling text */}
        <div className="text-split-wrap-video scrolltext-wrapper">
          <div className="text-split scrollingtext-1" ref={textRef}>
            <h2 className="title">
              Overview of your consulting firm's{' '}
              <span>mission, values, and team expertise</span>
              Overview of your consulting firm's{' '}
              <span>mission, values, and team expertise</span>
              Overview of your consulting firm's{' '}
              <span>mission, values, and team expertise</span>
            </h2>
          </div>
        </div>
      </div>
      {/* tmp video section end */}
    </>
  );
}

export default VideoOne;
