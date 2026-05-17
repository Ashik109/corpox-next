"use client";
import Link from 'next/link'


import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BannerThree() {

  const words = ["Websites.", "Features.", "Themes."];
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // update wrapper width
  const updateWidth = () => {
    if (wrapperRef.current && textRef.current) {
      wrapperRef.current.style.width =
        textRef.current.offsetWidth + "px";
    }
  };

  // word change animation
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
    <>
      {/* Start Slider Area */}
      <div
        className="slider-area slider-style-1 variation-default height-950 bg_image bg_image--25 jarallax"
        data-black-overlay={1}
      >

        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="inner inner-banner-three text-left pt--0">

                {/* Video Button */}
                <div
                  className="video-btn"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={100}
                >
                  <Link
                    className="tmp-btn btn-border rounded-player popup-video border-color-white"
                    href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                  >
                    <span>
                      <i className="feather-play" />
                    </span>
                  </Link>
                </div>

                {/* Title */}
                <h1
                  className="title display-one w-500 mt--30"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={300}
                >
                  <span className="color-white">
                    We Build Our <br />
                    <span className="text-decoration-underline">
                      Corpox
                    </span>{" "}
                    making
                  </span>

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
                                ? "is-visible"
                                : "is-hidden"
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

                {/* Description */}
                <p
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay={500}
                >
                  Design better websites with Corpox HTML Template.
                </p>

                {/* Button */}
                <div
                  className="button-group justify-content-start mt--40 mt_sm--20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={700}
                >
                  <Link
                    className="tmp-btn hover-icon-reverse btn-border round btn-large border-color-white"
                    href="/contact"
                  >
                    <span className="icon-reverse-wrapper">

                      <span className="btn-text">
                        Get in touch with us
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

      </div>
      {/* End Slider Area */}
    </>
  );
}