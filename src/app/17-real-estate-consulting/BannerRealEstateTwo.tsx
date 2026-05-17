"use client";
import Link from 'next/link'


import { useCallback, useEffect, useRef, useState } from "react";

const words = ["Home Buyers.", "New Home.", "Home Deals."];

function BannerRealEstateTwo() {
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
        <div className="tmp-banner-area-realstate-two">
            <div className="container-full">
                <div className="row align-items-center pt-control-forl-smlg">
                    <div className="col-lg-7 mb_md--60 mb_sm--40">
                        <div className="realstate-banner-style-two">
                            <h1 className="title mb--35">
                                <span className="large">Seamless Solutions for</span> <br />
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
                                                    className={`${activeIndex === index ? "is-visible" : "is-hidden"} theme-gradient`}
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
                            <p>
                                In the world of real estate, where transactions involve substantial investments and detailed negotiations, the guidance of a knowledgeable professional difference.
                            </p>
                            <Link className="tmp-btn btn-small mt--40" href="/contact">
                                Contact With Us
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="realstate-banner-style-two-thumbnail">
                            <img src="/assets/images/banner/real-estate-thumbnail-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerRealEstateTwo;
