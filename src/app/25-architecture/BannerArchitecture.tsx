"use client";
import Link from 'next/link'


import { useEffect, useRef } from "react";
import Slider from "react-slick";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

const slides = [
    {
        bg: "bg_image--10",
        title: "Consulting",
    },
    {
        bg: "bg_image--13",
        title: "Creative",
    },
    {
        bg: "bg_image--19",
        title: "Digital Agency",
    },
] as const;

function BannerArchitecture() {
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

    useEffect(() => {
        if (!containerRef.current) return;

        const gridMasks = containerRef.current.querySelectorAll<HTMLDivElement>(".grid-mask");
        gridMasks.forEach((gridMask) => {
            gridMask.innerHTML = "";

            const blocks: HTMLDivElement[] = [];
            for (let index = 0; index < 32; index += 1) {
                const block = document.createElement("div");
                block.style.transitionDelay = `${Math.random() * 1.5}s`;
                blocks.push(block);
            }

            blocks.sort(() => Math.random() - 0.5);
            blocks.forEach((block) => gridMask.appendChild(block));
        });
    }, []);

    return (
        <div className="banner-slider-area-one slider-gird" ref={containerRef}>
            <div className="slider-animation-2 slider-activation-2 slider-dot tmp-slick-dot tmp-slick-arrow tmp-slick-arrow-white">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.bg}>
                            <div className={`slider-area slider-style-2 d-flex variation-2 height-850 bg_image ${slide.bg}`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-10">
                                            <div className="inner text-left">
                                                <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6>
                                                <h1 className="title display-one">
                                                    Build a Strong <br /> <span>{slide.title}</span>
                                                    {slide.title === "Digital Agency" ? "." : " Agency."}
                                                </h1>
                                                <p className="mb--40 b1">
                                                    We provide you with user management functionality that results in faster development and revenue.
                                                </p>
                                                <div className="read-more-btn">
                                                    <Link className="tmp-btn btn-large round hover-icon-reverse" href="#services">
                                                        <span className="icon-reverse-wrapper">
                                                            <span className="btn-text">Check our services</span>
                                                            <span className="btn-icon">
                                                                <i className="feather-arrow-right" />
                                                            </span>
                                                            <span className="btn-icon">
                                                                <i className="feather-arrow-right" />
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-mask" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="bg-line-animatoin-area-global" />
        </div>
    );
}

export default BannerArchitecture;
