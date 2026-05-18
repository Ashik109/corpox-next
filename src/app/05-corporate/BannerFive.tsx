"use client";
import Link from 'next/link'


import { useEffect, useRef, useState } from "react";

const ROTATING_WORDS = ["Websites.", "Features.", "Themes."] as const;

function BannerFive() {

    const [activeIndex, setActiveIndex] = useState(0);

    const wrapperRef = useRef<HTMLSpanElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
                setActiveIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
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
            {/* Start Slider Area  */}
            <div
                className="slider-area jarallax slider-style-1 bg-clicppath variation-default height-950 bg_image bg_image--22"
                data-black-overlay={2}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner banner-five-inner text-center pt--80 pt_sm--0">
                                <div
                                    className="tmp-section-title-border text-center"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay={100}
                                >
                                    <div className="pres-line-separator-wrapper text-center mb--10">
                                        <div className="line-separator line-left" />
                                        <span className="subtitle">
                                            <span className="number">2000+ </span>
                                            <span className="subtitle-text">
                                                Design better websites with Corpox HTML Template.
                                            </span>
                                        </span>
                                        <div className="line-separator line-right" />
                                    </div>
                                </div>
                                <h1
                                    className="title display-one w-500"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay={300}
                                >
                                    <span className="color-white">
                                        Company Build Our <br />
                                        <span className="text-decoration-underline">Corpox</span> making
                                    </span>{" "}
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

                                                {ROTATING_WORDS.map((word, index) => (
                                                    <b
                                                        key={index}
                                                        ref={index === activeIndex ? textRef : null}
                                                        className={
                                                            index === activeIndex
                                                                ? "is-visible theme-gradient"
                                                                : "is-hidden theme-gradient"
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
                                <div
                                    className="button-group justify-content-center mt--20 mt_sm--20"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay={700}
                                >
                                    <div className="video-btn">
                                        <Link
                                            className="tmp-btn rounded-player popup-video"
                                            href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                        >
                                            <span>
                                                <i className="feather-play" />
                                            </span>
                                        </Link>
                                    </div>
                                    <Link className="btn-read-more" href="/about">
                                        <span>Get in touch with us</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-bg-dot-shape">
                    <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
                        <div className="blocksync-stars" />
                        <div className="blocksync-stars2" />
                        <div className="blocksync-stars3" />
                    </div>
                </div>
                <div className="slider-bg-dot-shape two-splash">
                    <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
                        <div className="blocksync-stars" />
                        <div className="blocksync-stars2" />
                        <div className="blocksync-stars3" />
                    </div>
                </div>
            </div>
            {/* End Slider Area  */}
        </>

    )
}

export default BannerFive
