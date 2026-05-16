"use client";

import { useEffect, useRef } from "react";

const avatars = [
    { src: "/assets/images/testimonial/tooltip-01.png", label: "Mark JOrdan" },
    { src: "/assets/images/testimonial/tooltip-02.png", label: "Mark" },
    { src: "/assets/images/testimonial/tooltip-03.png", label: "Jordan" },
];

type OdometerInstance = {
    update: (value: number) => void;
};

type OdometerConstructor = new (options: {
    el: HTMLElement;
    value: number;
    format: string;
    duration: number;
}) => OdometerInstance;

interface OdometerElement extends HTMLElement {
    od?: OdometerInstance;
}

function AboutCreativeAgency() {
    const odometerRefs = useRef<OdometerElement[]>([]);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;
        let cancelled = false;

        import("odometer").then((module) => {
            if (cancelled) return;

            const Odometer = module.default as OdometerConstructor;

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

                        if (entry.isIntersecting && !el.classList.contains("odometer-triggered")) {
                            const value = Number(el.dataset.count);
                            el.od?.update(value);
                            el.classList.add("odometer-triggered");
                        }
                    });
                },
                { threshold: 0.5 }
            );

            odometerRefs.current.forEach((el) => observer?.observe(el));
        });

        return () => {
            cancelled = true;
            observer?.disconnect();
        };
    }, []);

    const setOdometerRef = (el: OdometerElement | null) => {
        if (el && !odometerRefs.current.includes(el)) {
            odometerRefs.current.push(el);
        }
    };

    return (
        <div className="about-area about-style-4 tmp-section-gap">
            <div className="container">
                <div className="row row--5 align-items-center">
                    <div className="col-lg-5" data-aos="fade-up" data-aos-duration="700">
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
                                    {[1, 2].map((item) => (
                                        <li key={item}>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">A good traveler has no fixed plans</h4>
                                                <p className="text">
                                                    Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="about-btn mt--30">
                                    <a className="tmp-btn round text-center" href="/about">
                                        About Our Corpox
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 pr--40 pr_sm--0 pr_md--0 mt_md--30 mt_sm--30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
                        <div className="about-2-thumbnail-left-wrapper ml--30 ml_md--0 ml_sm--0">
                            <div className="single-thumbnail invers-anime">
                                <img loading="lazy" src="/assets/images/about/01.webp" alt="about" />
                            </div>
                            <div className="single-thumbnail invers-anime mt--80">
                                <img loading="lazy" src="/assets/images/about/02.webp" alt="about" />
                                <div className="video-icon">
                                    <a className="tmp-btn rounded-player popup-video" href="/assets/images/video/01.mp4">
                                        <span>
                                            <i className="feather-play" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute-rating-area images-left-right-float image">
                                <div className="stars-area">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <img key={star} loading="lazy" src="/assets/images/icons/stars.svg" alt="small-image" />
                                    ))}
                                    <span>(4.99+)</span>
                                </div>
                                <p>
                                    <span className="odometer" data-count="599" ref={setOdometerRef}>
                                        0
                                    </span>{" "}
                                    Review form our <br /> Best Clients
                                </p>
                                <div className="profile-share justify-content-start">
                                    {avatars.map((avatar) => (
                                        <a href="#" className="avatar" data-tooltip={avatar.label} tabIndex={0} key={avatar.label}>
                                            <img loading="lazy" src={avatar.src} alt="education" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCreativeAgency;
