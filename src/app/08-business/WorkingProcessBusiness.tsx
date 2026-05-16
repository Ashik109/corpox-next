"use client";

import { useEffect, useState } from "react";

const steps = [
    {
        id: "nav-home",
        image: "/assets/images/timeline/01.webp",
        title: "Plan & Strategy",
        text: "Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa",
    },
    {
        id: "nav-profile",
        image: "/assets/images/timeline/02.webp",
        title: "Design & Develop",
        text: "Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa",
    },
    {
        id: "nav-contact",
        image: "/assets/images/timeline/03.webp",
        title: "Launch & Grow",
        text: "Purus dui eget sollicitudin curae leo proin platea cras, morbi torquent massa",
    },
];

function WorkingProcessBusiness() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % steps.length);
        }, 5000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="tmp-working-process-main tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+200</span>
                                    <span className="subtitle-text">Working Process</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Our Working <span className="theme-gradient">Process</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row g-0 g-md-5 mt--10 align-items-center">
                            <div className="col-lg-7">
                                <div className="tab-content" id="business-nav-tabContent">
                                    {steps.map((step, index) => (
                                        <div
                                            className={`tab-pane fade ${activeIndex === index ? "show active" : ""}`}
                                            id={step.id}
                                            role="tabpanel"
                                            key={step.id}
                                        >
                                            <div className="thumbnail-area-wrapper-inner-6">
                                                <img loading="lazy" src={step.image} alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-5 mt_md--40 mt_sm--40">
                                <nav>
                                    <div className="nav nav-tabs" id="business-nav-tab" role="tablist">
                                        {steps.map((step, index) => (
                                            <button
                                                className={`nav-link ${activeIndex === index ? "active" : ""}`}
                                                type="button"
                                                role="tab"
                                                aria-selected={activeIndex === index}
                                                onClick={() => setActiveIndex(index)}
                                                key={step.id}
                                            >
                                                <div className="working-steps-area-tabs tmponhover">
                                                    <div className="left-icon-number">{index + 1}</div>
                                                    <div className="inner-content">
                                                        <h5 className="title">{step.title}</h5>
                                                        <p className="disc">{step.text}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkingProcessBusiness;
