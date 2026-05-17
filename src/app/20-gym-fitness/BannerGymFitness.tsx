"use client";
import Link from 'next/link'


import { useEffect, useRef } from "react";
import Slider from "react-slick";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

const slides = [
    {
        bg: "bg_gym-3",
        tag: "POWER YOUR BODY & MIND",
        title: "Fitness",
        rest: "Lifestyle.",
        text: "We help you achieve peak performance through expert training, modern equipment, and personalized workout programs.",
        cta: "Explore our programs",
    },
    {
        bg: "bg_gym-2",
        tag: "TRAIN HARD. STAY STRONG",
        title: "Workout",
        rest: "Routine.",
        text: "Our certified trainers guide you with structured plans that improve strength, endurance, and overall fitness results.",
        cta: "View training plans",
    },
    {
        bg: "bg_gym-1",
        tag: "TRANSFORM YOUR FITNESS",
        title: "Healthy Body",
        rest: ".",
        text: "Join our gym community and experience motivating workouts designed to burn fat, build muscle, and boost confidence.",
        cta: "Join the gym today",
    },
];

function BannerGymFitness() {
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
            <div className="slider-animation-2 slider-dot tmp-slick-dot tmp-slick-arrow tmp-slick-arrow-white">
                <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.tag}>
                    <div className={`slider-area slider-style-2 d-flex variation-2 height-850 bg_image ${slide.bg}`} key={slide.tag}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-10">
                                    <div className="inner text-left">
                                        <h6 className="tag-title">{slide.tag}</h6>
                                        <h1 className="title display-one">
                                            Build a Strong <br /> <span>{slide.title}</span> {slide.rest}
                                        </h1>
                                        <p className="mb--40 b1">{slide.text}</p>
                                        <div className="read-more-btn">
                                            <Link className="tmp-btn btn-large round hover-icon-reverse" href="#">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">{slide.cta}</span>
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

export default BannerGymFitness;
