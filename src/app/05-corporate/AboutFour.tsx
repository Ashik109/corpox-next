"use client";
import Link from 'next/link'


import { useEffect, useRef } from "react";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface OdometerElement extends HTMLElement {
    od?: any;
}

function AboutFour() {
    useTitleSplitAnimation();

    const odometerRefs = useRef<OdometerElement[]>([]);
    const floatRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let floatTween: gsap.core.Tween | undefined;

        /* =========================
           LEFT RIGHT FLOAT ANIMATION
        ========================== */

        if (floatRef.current) {
            gsap.killTweensOf(floatRef.current);
            floatTween = gsap.fromTo(
                floatRef.current,
                { x: 0 },
                {
                    x: -150,
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

        /* =========================
           ODOMETER
        ========================== */

        let observer: IntersectionObserver;

        import("odometer").then((module) => {
            const Odometer = module.default;

            odometerRefs.current.forEach((el) => {
                el.od = new Odometer({
                    el,
                    value: 0,
                    format: "d",
                    duration: 2000,
                });
            });

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const el = entry.target as OdometerElement;

                        if (
                            entry.isIntersecting &&
                            !el.classList.contains("odometer-triggered")
                        ) {
                            const value = Number(el.dataset.count);
                            el.od?.update(value);
                            el.classList.add("odometer-triggered");
                        }
                    });
                },
                { threshold: 0.5 }
            );

            odometerRefs.current.forEach((el) => observer.observe(el));
        });

        return () => {
            floatTween?.scrollTrigger?.kill();
            floatTween?.kill();
            if (observer) observer.disconnect();
        };
    }, []);

    const setOdometerRef = (el: OdometerElement | null) => {
        if (el && !odometerRefs.current.includes(el)) {
            odometerRefs.current.push(el);
        }
    };

    return (
        <>
            {/* Start About Area  */}
            <div className="tmp-about-area tmp-section-gap bg-color-card">
                <div className="container">
                    <div className="row g-5 row--40 align-items-center">
                        <div className="col-lg-6 order-2 order-xl-1">
                            <div className="content">
                                <div className="tmp-section-title-border1 text-start">
                                    <div className="section-title text-start mb--30">
                                        <span className="subtitle bg-primary-opacity">About Us</span>
                                        <h2 className="title w-700 mb--30 tmp-title-split">
                                            Meet the Experts Behind <br />
                                            Next Level of Success.
                                        </h2>
                                    </div>
                                    <p className="tmp-title-split-p">
                                        We are an innovative and results-driven business agency
                                        committed to <br /> delivering smart, effective solutions
                                        tailored to your unique needs.
                                    </p>
                                    <div className="why-choose-feature">
                                        <div className="single tmponhover">
                                            <p>Rapid Revenue Growth</p>
                                        </div>
                                        <div className="single tmponhover">
                                            <p>24/7 Assistance</p>
                                        </div>
                                    </div>
                                    <div className="tmp-profile-box">
                                        <div className="profile-share justify-content-start">
                                            <Link
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Mark JOrdan"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-01.png"
                                                    alt="education"
                                                />
                                            </Link>
                                            <Link
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Mark"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-02.png"
                                                    alt="education"
                                                />
                                            </Link>
                                            <Link
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Jordan"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-03.png"
                                                    alt="education"
                                                />
                                            </Link>
                                            <div className="more-author-text">
                                                <p className="subtitle">
                                                    <Link className="btn-read-more" href="#">
                                                        <span>Check all History</span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="read-more-btn btn-group gap-4 mt--40">
                                        <Link
                                            className="tmp-btn btn-primary round btn-large"
                                            href="/about"
                                        >
                                            More About Us
                                        </Link>
                                        <Link
                                            className="tmp-btn btn-border round btn-large"
                                            href="/contact"
                                        >
                                            Contact With Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-xl-2 pl--60">
                            <div className="video-btn">
                                <div className="video-popup icon-center about-relative-thumb">
                                    <div className="overlay-content">
                                        <div className="thumbnail invers-anime">
                                            <img
                                                className="radius-small"
                                                src="/assets/images/about/03.webp"
                                                alt="Corporate Image"
                                            />
                                        </div>
                                        <div className="video-icon">
                                            <Link
                                                className="tmp-btn rounded-player popup-video"
                                                href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                            >
                                                <span>
                                                    <i className="feather-play" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div ref={floatRef} className="absolute-rating-area images-left-right-float image">
                                        <div className="profile-share justify-content-start">
                                            <Link
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Mark JOrdan"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-01.png"
                                                    alt="education"
                                                />
                                            </Link>
                                            <Link
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Mark"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-02.png"
                                                    alt="education"
                                                />
                                            </Link>
                                            <Link
                                                href="#"
                                                className="avatar"
                                                data-tooltip="Jordan"
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="/assets/images/testimonial/tooltip-03.png"
                                                    alt="education"
                                                />
                                            </Link>
                                        </div>
                                        <div className="stars-area">
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                            <img src="/assets/images/icons/stars.svg" alt="small-image" />
                                        </div>
                                        <p>
                                            <span
                                                className="odometer"
                                                data-count="100"
                                                ref={setOdometerRef}
                                            >
                                                00
                                            </span>
                                            + Review
                                        </p>
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

export default AboutFour
