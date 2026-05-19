"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHoverAnimation } from "../components/useHoverAnimation";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";

const features = [
    "Fast Growing Sells",
    "24/7 Quality Services",
    "Expert Members",
    "Best Quality Services",
];

function WhyChooseUsBoost() {
    useTitleSplitAnimation();
    const boostHoverRef = useHoverAnimation<HTMLDivElement>();
    const floatRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let floatTween: gsap.core.Tween | undefined;

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

        return () => {
            floatTween?.scrollTrigger?.kill();
            floatTween?.kill();
        };
    }, []);

    return (
        <section className="why-choose-us-area tmp-section-gapBottom" aria-labelledby="why-choose-boost-title">
            <div className="container-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            ref={boostHoverRef}
                            className="business-boost-wrapper-main tmp-section-gap tmponhover"
                        >
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="why-choose-thumb about-relative-thumb">
                                            <img
                                                loading="lazy"
                                                className="invers-anime"
                                                src="/assets/images/about/04.webp"
                                                alt="Team collaborating on business growth"
                                            />
                                            <div
                                                ref={floatRef}
                                                className="absolute-rating-area images-left-right-float image"
                                            >
                                                <div className="profile-share justify-content-start">
                                                    <Link href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}>
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
                                                    <Link href="#" className="avatar" data-tooltip="Jordan" tabIndex={0}>
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
                                                    <span className="odometer" data-count={100}>
                                                        00
                                                    </span>
                                                    + Review
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offset-lg-1 col-lg-6 mt_md--50 mt_sm--50">
                                        <div className="why-choose-content-wrapper">
                                            <header className="section-title text-start mb--20">
                                                <span className="subtitle bg-primary-opacity">Boost Your Business Today</span>
                                                <h2 id="why-choose-boost-title" className="title tmp-title-split w-600">
                                                    Your Dependable Business{" "}
                                                    <span className="color-primary">Growth Partner</span>
                                                </h2>
                                            </header>
                                            <p className="disc">
                                                Porttitor ornare fermentum aliquam pharetra ut facilisis gravida risus
                                                suscipit feugiat fusce conubia ridiculus tristique solving parturient
                                                natoque vulputate risu hasellus quam tincidunt posuere aliquam accumsan
                                            </p>
                                            <div className="feature-one-wrapper mt--40 mb--40 pl_sm--0">
                                                {features.map((label, index) => (
                                                    <div
                                                        key={label}
                                                        className={`single-feature-one${index === 0 ? " active" : ""}`}
                                                    >
                                                        <div className="icon">
                                                            <i className="feather-check" />
                                                        </div>
                                                        <p>{label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <Link href="/contact" className="tmp-btn btn-primary">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsBoost;
