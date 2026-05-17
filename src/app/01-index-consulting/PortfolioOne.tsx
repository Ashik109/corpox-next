"use client";
import Link from 'next/link'


import React, { useEffect, useRef, useState } from "react";

interface PortfolioItem {
    id: number;
    image: string;
    title: string;
    categories: string[];
    badges: string[];
    video?: string;
}

const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        image: "/assets/images/portfolio/10.webp",
        title: "App Development",
        categories: ["cat--1", "cat--3"],
        badges: ["Projects", "App"],
    },
    {
        id: 2,
        image: "/assets/images/portfolio/11.webp",
        title: "Business Development",
        categories: ["cat--3"],
        badges: ["Design"],
    },
    {
        id: 3,
        image: "/assets/images/portfolio/12.webp",
        title: "Photoshop Design",
        categories: ["cat--3", "cat--1"],
        badges: ["Art", "App"],
    },
    {
        id: 4,
        image: "/assets/images/portfolio/13.webp",
        title: "Native Application",
        categories: ["cat--3"],
        badges: ["Dev", "App"],
    },
    {
        id: 5,
        image: "/assets/images/portfolio/14.webp",
        title: "React Development",
        categories: ["cat--2", "cat--1"],
        badges: ["Projects"],
        video: "https://www.youtube.com/watch?v=4jnzf1yj48M",
    },
    {
        id: 6,
        image: "/assets/images/portfolio/15.webp",
        title: "App Installment",
        categories: ["cat--2", "cat--1"],
        badges: ["Photo", "App"],
    },
];

const PortfolioOne = () => {
    const isotope = useRef<any>(null);
    const [filterKey, setFilterKey] = useState("*");

    // Initialize Isotope
    useEffect(() => {
        let IsotopeLib: any;

        import("isotope-layout").then((module) => {
            IsotopeLib = module.default;

            isotope.current = new IsotopeLib(".portfolio-items", {
                itemSelector: ".portfolio-3",
                layoutMode: "masonry",
                percentPosition: true,
                masonry: {
                    columnWidth: ".portfolio-3",
                },
            });
        });

        return () => isotope.current?.destroy();
    }, []);

    // Apply filter whenever filterKey changes
    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({
                filter: filterKey === "*" ? "*" : `.${filterKey}`,
            });
        }
    }, [filterKey]);

    return (
        <div className="tmp-portfolio-area tmp-section-gapBottom">
            <div className="container">
                {/* Section Title */}
                <div className="row mb--20">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+6</span>
                                    <span className="subtitle-text">Projects</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Business Case Studies.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-portfolio-filter filter-button-default messonry-button text-center mb--30">
                            <button
                                onClick={() => setFilterKey("*")}
                                className={filterKey === "*" ? "is-checked" : ""}
                            >
                                <span className="filter-text">All Project</span>
                            </button>

                            <button
                                onClick={() => setFilterKey("cat--1")}
                                className={filterKey === "cat--1" ? "is-checked" : ""}
                            >
                                <span className="filter-text">Grow Business</span>
                            </button>

                            <button
                                onClick={() => setFilterKey("cat--2")}
                                className={filterKey === "cat--2" ? "is-checked" : ""}
                            >
                                <span className="filter-text">Art Design</span>
                            </button>

                            <button
                                onClick={() => setFilterKey("cat--3")}
                                className={filterKey === "cat--3" ? "is-checked" : ""}
                            >
                                <span className="filter-text">App Development</span>
                            </button>
                        </div>

                        {/* Portfolio Items */}
                        <div className="portfolio-items grid-metro3 mesonry-list">
                            {portfolioData.map((item) => (
                                <div
                                    key={item.id}
                                    className={`portfolio-3 ${item.categories.join(" ")}`}
                                >
                                    <div className="tmp-card portfolio">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <figure className="card-image">
                                                    <Link href="/portfolio/brand-refresh-venture">
                                                        <img src={item.image} alt={item.title} />
                                                    </Link>
                                                    {item.video && (
                                                        <div className="video-icon">
                                                            <Link
                                                                className="tmp-btn btn-small rounded-player popup-video"
                                                                href={item.video}
                                                            >
                                                                <span>
                                                                    <i className="feather-play" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </figure>
                                                <Link className="tmp-overlay" href="/portfolio/analytics-platform" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title mb--20">
                                                    <Link href="/portfolio/field-service-modernization">{item.title}</Link>
                                                </h5>
                                                <div className="tmp-badge-group">
                                                    {item.badges.map((badge, index) => (
                                                        <Link key={index} href="#" className="tmp-badge-2">
                                                            {badge}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="resizer" />
                        </div>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="row row--15">
                    <div className="col-lg-12">
                        <div className="tmp-load-more d-flex justify-content-center mt--60">
                            <Link className="tmp-btn btn-large hover-icon-reverse" href="#">
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">Load More</span>
                                    <span className="btn-icon">
                                        <i className="feather-loader" />
                                    </span>
                                    <span className="btn-icon">
                                        <i className="feather-loader" />
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioOne;