import Link from "next/link";
import React from "react";

const missionPoints = [
    {
        title: "Delivering customized consulting",
        description:
            "Every roadmap is tailored to your market, team capacity, and growth goals for measurable outcomes.",
    },
    {
        title: "Building long-term partnerships",
        description:
            "We stay aligned with your business over time, helping you adapt quickly while protecting strategic direction.",
    },
];

function AboutSeven() {
    return (
        <section className="tmp-about-area tmp-section-gapBottom" aria-labelledby="about-seven-title">
            <div className="container">
                <div className="row g-5 row--40 align-items-center">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="text-start about-style-4">
                                <header className="section-title text-start mb--10">
                                    <span className="subtitle bg-primary-opacity">Our Mission</span>
                                    <h2 id="about-seven-title" className="title tmp-title-split w-600">
                                        Empowering <span className="theme-gradient">Businesses</span> Through
                                        Strategy
                                    </h2>
                                </header>
                                <p className="tmp-title-split-p">
                                    At Corpox, we help ambitious teams make smarter decisions with data-backed
                                    strategy, practical execution support, and a focus on sustainable growth.
                                </p>
                                <ul className="feature-list">
                                    {missionPoints.map((item) => (
                                        <li key={item.title}>
                                            <div className="icon" aria-hidden="true">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">{item.title}</h4>
                                                <p className="text">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="read-more-btn mt--40">
                                    <Link className="tmp-btn round btn-large btn-primary" href="/contact">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-btn">
                            <div className="video-popup icon-center">
                                <div className="overlay-content">
                                    <div className="thumbnail invers-anime">
                                        <img
                                            className="radius-small"
                                            loading="lazy"
                                            src="/assets/images/about/04.webp"
                                            alt="Corpox consultants collaborating on business strategy"
                                        />
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

export default AboutSeven;