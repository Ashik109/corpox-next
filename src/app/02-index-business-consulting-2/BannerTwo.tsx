"use client";
import Link from 'next/link'


import { useEffect, useRef, useState } from "react";

export default function BannerTwo() {
  const words = ["Finance.", "Consulting.", "Agency."];
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // wrapper width update
  const updateWidth = () => {
    if (wrapperRef.current && textRef.current) {
      wrapperRef.current.style.width =
        textRef.current.offsetWidth + "px";
    }
  };

  useEffect(() => {
    const changeWord = () => {
      if (!wrapperRef.current) return;

      wrapperRef.current.style.width = "2px";

      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % words.length);
      }, 400);
    };

    intervalRef.current = setInterval(changeWord, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateWidth);
  }, [activeIndex]);

  return (
    <div
      className="slider-area banner-two-shape-control tmp-slider-style-1 with-bg-tin bg-transparent height-850 position-relative"
      style={{ zIndex: 1 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <div className="inner text-center">

              <h1 className="title display-two w-700 mt--20 mb--20">
                <span>Corpox Business</span>
                <br />

                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">

                    <span
                      ref={wrapperRef}
                      className="cd-words-wrapper"
                      style={{
                        width: "2px",
                        overflow: "hidden",
                        display: "inline-block",
                        transition: "width 0.5s ease"
                      }}
                    >
                      {words.map((word, index) => (
                        <b
                          key={index}
                          ref={index === activeIndex ? textRef : null}
                          className={
                            index === activeIndex
                              ? "theme-gradient is-visible"
                              : "theme-gradient is-hidden"
                          }
                          style={{
                            position:
                              index === activeIndex
                                ? "relative"
                                : "absolute",
                            whiteSpace: "nowrap",
                            left: 0,
                            top: 0
                          }}
                        >
                          {word}
                        </b>
                      ))}
                    </span>

                  </span>
                </span>
              </h1>

              <p className="description b1 tmp-title-split-p">
                Our Business ipsum dolor sit amet consectetur,
                adipisicing elit. Tempora sequi doloremque <br />
                dicta quia unde odio nam minus reiciendis.
              </p>

              <div className="button-group">

                <Link
                  className="tmp-btn round hover-icon-reverse"
                  href="/pricing-three"
                >
                  <span className="icon-reverse-wrapper">

                    <span className="btn-text">
                      Purchase Now
                    </span>

                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>

                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>

                  </span>
                </Link>

                <Link
                  className="tmp-btn btn-border round hover-icon-reverse"
                  href="/contact"
                >
                  <span className="icon-reverse-wrapper">

                    <span className="btn-text">
                      Contact Us
                    </span>

                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>

                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>

                  </span>
                </Link>

              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="banner-svg" />
      <div className="banner-svg banner-svg-right" />

      <div className="shape-left-top">
        <img src="/assets/images/banner/shape-it-1.svg" alt="" />
      </div>

      <div className="shape-right-bottom">
        <img src="/assets/images/banner/shape-it-1.svg" alt="" />
      </div>
    </div>
  );
}