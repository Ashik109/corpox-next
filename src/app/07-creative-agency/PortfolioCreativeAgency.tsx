"use client";
import Link from 'next/link'


import { useMemo, useState } from "react";

const projects = [
    {
        image: "/assets/images/portfolio/10.webp",
        title: "App Development",
        categories: ["cat--1", "cat--3"],
        badges: ["Projects", "App"],
    },
    {
        image: "/assets/images/portfolio/11.webp",
        title: "Business Development",
        categories: ["cat--3"],
        badges: ["Design"],
    },
    {
        image: "/assets/images/portfolio/12.webp",
        title: "Photoshop Design",
        categories: ["cat--3", "cat--1"],
        badges: ["Art", "App"],
    },
    {
        image: "/assets/images/portfolio/13.webp",
        title: "Native Application",
        categories: ["cat--3"],
        badges: ["Dev", "App"],
    },
    {
        image: "/assets/images/portfolio/14.webp",
        title: "React Development",
        categories: ["cat--2", "cat--1"],
        badges: ["Projects"],
        video: true,
    },
    {
        image: "/assets/images/portfolio/15.webp",
        title: "App Installment",
        categories: ["cat--2", "cat--1"],
        badges: ["Photo", "App"],
    },
    {
        image: "/assets/images/portfolio/16.webp",
        title: "Digital Campaign",
        categories: ["cat--1", "cat--2"],
        badges: ["Marketing", "Design"],
    },
    {
        image: "/assets/images/portfolio/17.webp",
        title: "Brand Identity",
        categories: ["cat--2"],
        badges: ["Brand", "Art"],
    },
    {
        image: "/assets/images/portfolio/18.webp",
        title: "Creative Dashboard",
        categories: ["cat--3", "cat--1"],
        badges: ["UI", "App"],
    },
    {
        image: "/assets/images/portfolio/10.webp",
        title: "Product Landing",
        categories: ["cat--3"],
        badges: ["Web", "Dev"],
    },
    {
        image: "/assets/images/portfolio/11.webp",
        title: "Growth Strategy",
        categories: ["cat--1"],
        badges: ["Business"],
    },
    {
        image: "/assets/images/portfolio/12.webp",
        title: "Visual System",
        categories: ["cat--2", "cat--3"],
        badges: ["Design", "Project"],
    },
];

const filters = [
    { key: "*", label: "All Project", dataFilter: "*" },
    { key: "cat--1", label: "Grow Business", dataFilter: ".cat--1" },
    { key: "cat--2", label: "Art Design", dataFilter: ".cat--2" },
    { key: "cat--3", label: "App Development", dataFilter: ".cat--3" },
];

function PortfolioCreativeAgency() {
    const [filterKey, setFilterKey] = useState("*");
    const [visibleCount, setVisibleCount] = useState(6);
    const filteredProjects = useMemo(
        () => projects.filter((project) => filterKey === "*" || project.categories.includes(filterKey)),
        [filterKey],
    );
    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMoreProjects = visibleCount < filteredProjects.length;

    const handleFilterChange = (key: string) => {
        setFilterKey(key);
        setVisibleCount(6);
    };

    return (
        <div className="tmp-portfolio-area tmp-section-gapBottom" id="porfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center" data-aos="fade-up" data-aos-duration="700">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+6</span>
                                    <span className="subtitle-text">Projects</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Awesome Projects.</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available,
                                <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-portfolio-filter filter-button-default messonry-button text-center mb--30" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                            {filters.map((filter) => (
                                <button
                                    type="button"
                                    data-filter={filter.dataFilter}
                                    aria-pressed={filterKey === filter.key}
                                    onClick={() => handleFilterChange(filter.key)}
                                    className={filterKey === filter.key ? "is-checked" : ""}
                                    key={filter.key}
                                >
                                    <span className="filter-text">{filter.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className="portfolio-items grid-metro3 mesonry-list creative-portfolio-grid">
                            {visibleProjects.map((project, index) => (
                                <div
                                    className={`portfolio-3 ${project.categories.join(" ")}`}
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    data-aos-delay={(index % 3) * 100}
                                    key={project.title}
                                >
                                    <div className="tmp-card portfolio">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <figure className="card-image">
                                                    <Link href="/portfolio/brand-refresh-venture">
                                                        <img src={project.image} alt="Portfolio-01" />
                                                    </Link>
                                                    {project.video && (
                                                        <div className="video-icon">
                                                            <Link
                                                                className="tmp-btn btn-small rounded-player popup-video"
                                                                href="https://www.youtube.com/watch?v=4jnzf1yj48M"
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
                                                    <Link href="/portfolio/field-service-modernization">{project.title}</Link>
                                                </h5>
                                                <div className="tmp-badge-group">
                                                    {project.badges.map((badge) => (
                                                        <Link href="#" className="tmp-badge-2" key={badge}>
                                                            {badge}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="resizer" aria-hidden="true" />
                        </div>
                    </div>
                </div>

                {hasMoreProjects && (
                    <div className="row row--15">
                        <div className="col-lg-12">
                            <div className="tmp-load-more d-flex justify-content-center mt--60">
                                <button
                                    className="tmp-btn btn-large hover-icon-reverse"
                                    type="button"
                                    onClick={() => setVisibleCount((count) => count + 6)}
                                >
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Load More</span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PortfolioCreativeAgency;
