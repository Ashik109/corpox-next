"use client";

import { useEffect, useRef, useState } from "react";

type IsotopeInstance = {
    arrange: (options: { filter: string }) => void;
    destroy: () => void;
};

const filters = [
    { key: "*", label: "All Project" },
    { key: "cat--1", label: "Grow Business" },
    { key: "cat--2", label: "Art Design" },
    { key: "cat--3", label: "App Development" },
];

const portfolioItems = [
    { image: "10.webp", title: "App Development", categories: ["cat--1", "cat--3"], badges: ["Projects", "App"] },
    { image: "11.webp", title: "Business Development", categories: ["cat--3"], badges: ["Design"] },
    { image: "12.webp", title: "Photoshop Design", categories: ["cat--3", "cat--1"], badges: ["Art", "App"] },
    { image: "13.webp", title: "Native Application", categories: ["cat--3"], badges: ["Dev", "App"] },
    { image: "14.webp", title: "React Development", categories: ["cat--2", "cat--1"], badges: ["Projects"], video: true },
    { image: "15.webp", title: "App Installment", categories: ["cat--2", "cat--1"], badges: ["Photo", "App"] },
];

function PortfolioHRWebsite() {
    const isotope = useRef<IsotopeInstance | null>(null);
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        let cancelled = false;

        import("isotope-layout").then((module) => {
            if (cancelled) return;

            const IsotopeConstructor = module.default as unknown as new (
                selector: string,
                options: {
                    itemSelector: string;
                    layoutMode: string;
                    percentPosition: boolean;
                    masonry: { columnWidth: string };
                }
            ) => IsotopeInstance;

            isotope.current = new IsotopeConstructor(".hr-portfolio-items", {
                itemSelector: ".portfolio-3",
                layoutMode: "masonry",
                percentPosition: true,
                masonry: { columnWidth: ".portfolio-3" },
            });
        });

        return () => {
            cancelled = true;
            isotope.current?.destroy();
        };
    }, []);

    useEffect(() => {
        isotope.current?.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
    }, [filterKey]);

    return (
        <div className="tmp-portfolio-area tmp-section-gap">
            <div className="container">
                <div className="row">
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
                                Our Recent <span className="theme-gradient"> Works.</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-portfolio-filter filter-button-default messonry-button text-center mb--30">
                            {filters.map((filter) => (
                                <button className={filterKey === filter.key ? "is-checked" : ""} key={filter.key} onClick={() => setFilterKey(filter.key)}>
                                    <span className="filter-text">{filter.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className="portfolio-items grid-metro3 mesonry-list hr-portfolio-items">
                            <div className="resizer" />
                            {portfolioItems.map((item) => (
                                <div className={`portfolio-3 ${item.categories.join(" ")}`} key={item.title}>
                                    <div className="tmp-card portfolio">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <figure className="card-image">
                                                    <a href="/portfolio/brand-refresh-venture">
                                                        <img src={`/assets/images/portfolio/${item.image}`} alt="Portfolio" />
                                                    </a>
                                                    {item.video && (
                                                        <div className="video-icon">
                                                            <a className="tmp-btn btn-small rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                                                <span>
                                                                    <i className="feather-play" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    )}
                                                </figure>
                                                <a className="tmp-overlay" href="/portfolio/analytics-platform" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title mb--20">
                                                    <a href="/portfolio/field-service-modernization">{item.title}</a>
                                                </h5>
                                                <div className="tmp-badge-group">
                                                    {item.badges.map((badge) => (
                                                        <a href="#" className="tmp-badge-2" key={badge}>
                                                            {badge}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row row--15">
                    <div className="col-lg-12">
                        <div className="tmp-load-more d-flex justify-content-center mt--60">
                            <a className="tmp-btn btn-large round hover-icon-reverse" href="#">
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">Load More</span>
                                    <span className="btn-icon">
                                        <i className="feather-loader" />
                                    </span>
                                    <span className="btn-icon">
                                        <i className="feather-loader" />
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioHRWebsite;
