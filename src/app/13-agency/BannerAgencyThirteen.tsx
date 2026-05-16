"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const words = ["Websites.", "Features.", "Themes."];

function BannerAgencyThirteen() {
    const [activeIndex, setActiveIndex] = useState(0);
    const wrapperRef = useRef<HTMLSpanElement | null>(null);
    const textRef = useRef<HTMLElement | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const updateWidth = useCallback(() => {
        if (wrapperRef.current && textRef.current) {
            wrapperRef.current.style.width = `${textRef.current.offsetWidth}px`;
        }
    }, []);

    useEffect(() => {
        const changeWord = () => {
            if (!wrapperRef.current) return;

            wrapperRef.current.style.width = "2px";
            timeoutRef.current = setTimeout(() => {
                setActiveIndex((current) => (current + 1) % words.length);
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
    }, [activeIndex, updateWidth]);

    useEffect(() => {
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, [updateWidth]);

    return (
        <div
            className="slider-area slider-style-1 variation-default height-950 jarallax"
            data-black-overlay="5"
            style={{ overflow: "hidden" }}
        >
            <video
                aria-hidden="true"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                    height: "100%",
                    left: 0,
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    zIndex: 0,
                }}
            >
                <source src="/assets/images/video/01.mp4" type="video/mp4" />
            </video>
            <div className="container" style={{ position: "relative", zIndex: 3 }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-left pt--0">
                            <div className="video-btn">
                                <span className="tmp-badge-2">DIGITAL STARTUP AGENCY</span>
                            </div>
                            <h1 className="title display-one w-500 mt--30">
                                <span className="color-white">
                                    We Build Our <br />
                                    <span className="text-decoration-underline">Corpox</span> making
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
                                                transition: "width 0.5s ease",
                                            }}
                                        >
                                            {words.map((word, index) => (
                                                <b
                                                    className={activeIndex === index ? "is-visible" : "is-hidden"}
                                                    key={word}
                                                    ref={activeIndex === index ? textRef : null}
                                                    style={{
                                                        position: activeIndex === index ? "relative" : "absolute",
                                                        whiteSpace: "nowrap",
                                                        left: 0,
                                                        top: 0,
                                                    }}
                                                >
                                                    {word}
                                                </b>
                                            ))}
                                        </span>
                                    </span>
                                </span>
                            </h1>
                            <p>Design better websites with Corpox HTML Template.</p>
                            <div className="button-group justify-content-start mt--40 mt_sm--20">
                                <a className="tmp-btn hover-icon-reverse btn-border round btn-large border-color-white" href="#">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Get in touch with us</span>
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
        </div>
    );
}

export default BannerAgencyThirteen;
