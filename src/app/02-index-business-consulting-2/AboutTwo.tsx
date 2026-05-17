"use client";
import Link from 'next/link'


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface OdometerElement extends HTMLElement {
    od?: any;
}
export default function AboutTwo() {

    const odometerRefs = useRef<OdometerElement[]>([]);
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
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
            <div className="about-area about-style-4 tmp-section-gap">
                <div className="container">
                    <div className="row row--5 align-items-center">
                        <div className="col-lg-7 pr--40 pr_sm--0">
                            <div className="about-2-thumbnail-left-wrapper">
                                <div className="single-thumbnail invers-anime">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/about/01.webp"
                                        alt="about"
                                    />
                                </div>
                                <div className="single-thumbnail invers-anime mt--80">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/about/02.webp"
                                        alt="about"
                                    />
                                    <div className="video-icon">
                                        <Link
                                            className="tmp-btn rounded-player popup-video"
                                            href="/assets/images/video/01.mp4"
                                        >
                                            <span>
                                                <i className="feather-play" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div ref={floatRef} className="absolute-rating-area images-left-right-float image">
                                    <div className="stars-area">
                                        <img
                                            loading="lazy"
                                            src="/assets/images/icons/stars.svg"
                                            alt="small-image"
                                        />
                                        <img
                                            loading="lazy"
                                            src="/assets/images/icons/stars.svg"
                                            alt="small-image"
                                        />
                                        <img
                                            loading="lazy"
                                            src="/assets/images/icons/stars.svg"
                                            alt="small-image"
                                        />
                                        <img
                                            loading="lazy"
                                            src="/assets/images/icons/stars.svg"
                                            alt="small-image"
                                        />
                                        <img
                                            loading="lazy"
                                            src="/assets/images/icons/stars.svg"
                                            alt="small-image"
                                        />
                                        <span>(4.99+)</span>
                                    </div>
                                    <p>
                                        <span
                                            className="odometer"
                                            data-count="599"
                                            ref={setOdometerRef}
                                        >
                                            0
                                        </span>{" "}
                                        Review form our <br /> Best Clients
                                    </p>
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
                                        <Link href="#" className="avatar" data-tooltip="Mark" tabIndex={0}>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    <div className="tmp-section-title-border text-start hero__sub-title">
                                        <div className="pres-line-separator-wrapper mb--10">
                                            <span className="subtitle">
                                                <span className="number">01</span>{" "}
                                                <span className="subtitle-text">ABOUT BUSINESS</span>
                                            </span>
                                            <div className="line-separator" />
                                        </div>
                                    </div>
                                    <h2 className="title w-700 tmp-title-split">
                                        Clever and results driven business agency.
                                    </h2>
                                    <ul className="feature-list">
                                        <li>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">
                                                    A good traveler has no fixed plans
                                                </h4>
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
                                                <h4 className="title">
                                                    A good traveler has no fixed plans
                                                </h4>
                                                <p className="text">
                                                    Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                                    incididunt labore.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="about-btn mt--30">
                                        <Link className="tmp-btn round text-center" href="#">
                                            About Our Corpox
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}
        </>

    );
}