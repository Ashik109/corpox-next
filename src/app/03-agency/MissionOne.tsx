"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MissionOneProps {
  className?: string
  id?: string
}

function MissionOne({ className = ""}: MissionOneProps ) {
    const floatRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        /* =========================
            LEFT RIGHT FLOAT ANIMATION
        ========================== */

        if (floatRef.current) {
            gsap.fromTo(
                floatRef.current,
                { x: 0 },
                {
                    x: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: floatRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    },
                }
            );
        }
    }, []);
    return (
        <>
            {/* Start About Area  */}
            <div className={`tmp-about-area ${className}`}>
                <div className="container">
                    <div className="row g-5 row--40 align-items-center">
                        <div className="col-lg-6">
                            <div className="video-btn">
                                <div className="video-popup icon-center about-relative-thumb">
                                    <div className="overlay-content">
                                        <div className="thumbnail invers-anime">
                                            <img
                                                className="radius-small"
                                                src="/assets/images/about/04.webp"
                                                alt="Corporate Image"
                                            />
                                        </div>
                                        <div className="video-icon">
                                            <a
                                                className="tmp-btn rounded-player popup-video"
                                                href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                            >
                                                <span>
                                                    <i className="feather-play" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div ref={floatRef} className="absolute-rating-area images-left-right-float image">
                                        <div className="profile-share justify-content-start">
                                            <a
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Mark JOrdan"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-01.png"
                                                    alt="education"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Mark"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-02.png"
                                                    alt="education"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Jordan"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-03.png"
                                                    alt="education"
                                                />
                                            </a>
                                        </div>
                                        <div className="stars-area">
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                        </div>
                                        <p>
                                            <span className="odometer" data-count={999}>
                                                00
                                            </span>
                                            + Review
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="tmp-section-title-border text-start about-style-4">
                                    <div className="pres-line-separator-wrapper mb--10">
                                        <span className="subtitle">
                                            <span className="number">01</span>{" "}
                                            <span className="subtitle-text">Our Mission</span>
                                        </span>
                                        <div className="line-separator" />
                                    </div>
                                    <h2 className="title w-700 mb--30 tmp-title-split">
                                        Empowering Businesses Through Strategy
                                    </h2>
                                    <p className="tmp-title-split-p">
                                        At Corpox, our mission is to empower businesses with insightful
                                        strategies, data-driven solutions, and expert guidance that
                                        foster sustainable growth and operational excellence
                                    </p>
                                    <ul className="feature-list">
                                        <li>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">Delivering customized consulting</h4>
                                                <p className="text">
                                                    Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                                    incididunt labore.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">Building long-term relationships</h4>
                                                <p className="text">
                                                    Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                                    incididunt labore.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="read-more-btn mt--40">
                                        <a
                                            className="tmp-btn round btn-large btn-border"
                                            href="/contact"
                                        >
                                            Lets Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}
        </>

    )
}

export default MissionOne