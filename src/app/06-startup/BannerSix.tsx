"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

function BannerSix() {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        cssEase: "linear",
        fade: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="slider-area slider-style-4 variation-2 slider-dot tmp-slick-dot tmp-slick-arrow pt--80">

                <Slider {...settings} className="slider-activation">

                    {/* Slide 1 */}
                    <div>
                        <div
                            className="height-850 bg_image bg_image--12 d-flex align-items-center"
                            data-black-overlay={1}
                        >
                            <div className="container">
                                <div className="row row--30 align-items-center">
                                    <div className="col-12">
                                        <div className="inner banner-startup-agency-content text-start pt--0">

                                            <span className="tmp-badge-2">
                                                DIGITAL STARTUP AGENCY
                                            </span>

                                            <h1 className="title w-700">
                                                Startup Your <br />
                                                <span className="theme-gradient">
                                                    Business Agency.
                                                </span>
                                            </h1>

                                            <p className="description">
                                                We help our clients succeed by creating
                                                brand identities, digital experiences,
                                                and print materials.
                                            </p>

                                            <ul className="social-icon social-default transparent-with-border">
                                                <li><a href="#"><i className="feather-facebook"></i></a></li>
                                                <li><a href="#"><i className="feather-twitter"></i></a></li>
                                                <li><a href="#"><i className="feather-instagram"></i></a></li>
                                                <li><a href="#"><i className="feather-linkedin"></i></a></li>
                                            </ul>

                                            <div className="button-group mt--30">
                                                <a className="tmp-btn btn-large round hover-icon-reverse" href="#">
                                                    <span className="icon-reverse-wrapper">
                                                        <span className="btn-text">Get started now</span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"></i>
                                                        </span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"></i>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div>
                        <div
                            className="height-850 bg_image bg_image--13 d-flex align-items-center"
                            data-black-overlay={1}
                        >
                            <div className="container">
                                <div className="row row--30 align-items-center">
                                    <div className="col-12">
                                        <div className="inner banner-startup-agency-content text-start pt--0">

                                            <span className="tmp-badge-2">
                                                DIGITAL STARTUP AGENCY
                                            </span>

                                            <h1 className="title w-700">
                                                Combine thinking <br />
                                                <span className="theme-gradient">
                                                    Business Agency.
                                                </span>
                                            </h1>

                                            <p className="description">
                                                We help our clients succeed by creating
                                                brand identities, digital experiences,
                                                and print materials.
                                            </p>

                                            <ul className="social-icon social-default transparent-with-border">
                                                <li><a href="#"><i className="feather-facebook"></i></a></li>
                                                <li><a href="#"><i className="feather-twitter"></i></a></li>
                                                <li><a href="#"><i className="feather-instagram"></i></a></li>
                                                <li><a href="#"><i className="feather-linkedin"></i></a></li>
                                            </ul>

                                            <div className="button-group mt--30">
                                                <a className="tmp-btn btn-large round hover-icon-reverse" href="#">
                                                    <span className="icon-reverse-wrapper">
                                                        <span className="btn-text">Get started now</span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"></i>
                                                        </span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"></i>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>

            </div>
        </>
    );
}

export default BannerSix;