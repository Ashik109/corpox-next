"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const BannerOne: React.FC = () => {
  // Ref to the outer container
  const containerRef = useRef<HTMLDivElement>(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    cssEase: "linear",
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Grid mask effect
  useEffect(() => {
    if (!containerRef.current) return;

    const gridMasks = containerRef.current.querySelectorAll<HTMLDivElement>(".grid-mask");

    gridMasks.forEach((gridMask) => {
      // Clear previous blocks
      gridMask.innerHTML = "";

      // Create 32 blocks with random transition delay
      const blocks: HTMLDivElement[] = [];
      for (let i = 0; i < 32; i++) {
        const block = document.createElement("div");
        block.style.transitionDelay = `${Math.random() * 1.5}s`;
        blocks.push(block);
      }

      // Shuffle blocks
      blocks.sort(() => Math.random() - 0.5);

      // Append blocks to gridMask
      blocks.forEach((block) => gridMask.appendChild(block));
    });
  }, []);

  return (
    <div className="banner-slider-area-one slider-gird" ref={containerRef}>
      <div className="slider-animation-2 slider-dot tmp-slick-dot tmp-slick-arrow tmp-slick-arrow-white">
        <Slider {...settings}>

          {/* Slide 1 */}
          <div>
            <div className="slider-area slider-style-2 d-flex variation-2 height-850 bg_image bg_image--10">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-10">
                    <div className="inner text-left">
                      <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6>
                      <h1 className="title display-one">
                        Build a Strong <br /> <span>Consulting</span> Agency.
                      </h1>
                      <p className="mb--40 b1">
                        We provide you with user management functionality that results in
                        faster development and revenue.
                      </p>
                      <div className="read-more-btn">
                        <a
                          className="tmp-btn btn-large round hover-icon-reverse"
                          href="#"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Check our services</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-mask" />
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div className="slider-area slider-style-2 d-flex variation-2 height-850 bg_image bg_image--13">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-10">
                    <div className="inner text-left">
                      <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6>
                      <h1 className="title display-one">
                        Build a Strong <br /> <span>Creative</span> Agency.
                      </h1>
                      <p className="mb--40 b1">
                        We provide you with user management functionality that results in
                        faster development and revenue.
                      </p>
                      <div className="read-more-btn">
                        <a
                          className="tmp-btn btn-large round hover-icon-reverse"
                          href="#"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Check our services</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-mask" />
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div className="slider-area slider-style-2 d-flex variation-2 height-850 bg_image bg_image--19">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-10">
                    <div className="inner text-left">
                      <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6>
                      <h1 className="title display-one">
                        Build a Strong <br /> <span>Digital Agency</span>.
                      </h1>
                      <p className="mb--40 b1">
                        We provide you with user management functionality that results in
                        faster development and revenue.
                      </p>
                      <div className="read-more-btn">
                        <a
                          className="tmp-btn btn-large round hover-icon-reverse"
                          href="#"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Check our services</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-mask" />
            </div>
          </div>
        </Slider>
      </div>

      <div className="bg-line-animatoin-area-global" />
    </div>
  );
};

export default BannerOne;