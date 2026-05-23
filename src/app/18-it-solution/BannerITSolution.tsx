"use client";

import Link from 'next/link'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function BannerITSolution() {
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const banner = bannerRef.current;
        if (!banner) return;

        const shapes = Array.from(banner.querySelectorAll<HTMLElement>(".shape-image .shape"));
        if (!shapes.length) return;

        const handleMouseMove = (event: MouseEvent) => {
            const wx = window.innerWidth;
            const wy = window.innerHeight;

            const x = event.pageX - banner.offsetLeft;
            const y = event.pageY - banner.offsetTop;

            const newx = x - wx / 2;
            const newy = y - wy / 2;

            shapes.forEach((shape) => {
                let speed = Number(shape.dataset.speed ?? "0");
                if (shape.hasAttribute("data-revert")) {
                    speed *= -1;
                }

                gsap.to(shape, {
                    duration: 1,
                    x: 1 - newx * speed,
                    y: 1 - newy * speed,
                });
            });
        };

        banner.addEventListener("mousemove", handleMouseMove);

        return () => {
            banner.removeEventListener("mousemove", handleMouseMove);
            gsap.killTweensOf(shapes);
        };
    }, []);

    return (
        <div className="banner-slider-it-solution tmp-section-gap shape-move" ref={bannerRef}>
            <div className="container pt--70">
                <div className="row align-items-center">
                    <div className="col-lg-5 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--30 mt_sm--30">
                        <div className="it-solution-banner-area-content">
                            <h6 className="tag-title">SOLUTION FOR YOUR IT BUSINESS</h6>
                            <h1 className="title tmp-title-split">
                                We Care Your any <br /> IT Solution
                            </h1>
                            <p className="disc">Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.</p>
                            <div className="button-group justify-content-start mt--20 mt_sm--20" data-aos="slide-up" data-aos-delay="700" data-aos-duration="800">
                                <div className="video-btn">
                                    <Link className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=gXFATcwrO-U">
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
                    <div className="col-lg-7 pl--80 pl_md--10 pl_sm--10 order-lg-2 order-md-1 order-sm-1 order-1">
                        <div className="thumbnail-banner-right-it">
                            <img src="/assets/images/banner/10.webp" alt="thumbnail_ite-solution" />
                            <div className="dots shape-image">
                                <img data-speed="0.03" data-revert="true" src="/assets/images/banner/banner_dot.png" alt="dot" className="dot-1 shape" />
                                <img data-speed="0.03" src="/assets/images/banner/banner_dot.png" alt="dot" className="dot-2 shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-left-top">
                <img src="/assets/images/banner/shape-it-1.svg" alt="" />
            </div>
        </div>
    );
}

export default BannerITSolution;
