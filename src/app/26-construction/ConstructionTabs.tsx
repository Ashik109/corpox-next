"use client";

import { useState } from "react";

const tabs = [
    {
        number: "01",
        title: "Residential Construction",
        text: "Modern and durable home construction built for comfort safety and longevity",
        image: "29.webp",
        alt: "residential-construction",
    },
    {
        number: "02",
        title: "Commercial Projects",
        text: "Professional construction solutions for offices factories and business spaces",
        image: "30.webp",
        alt: "commercial-construction",
    },
    {
        number: "03",
        title: "Renovation & Maintenance",
        text: "Quality renovation repair and long term maintenance services you can trust",
        image: "31.webp",
        alt: "construction-maintenance",
    },
] as const;

function ConstructionTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const current = tabs[activeTab];

    return (
        <div className="auto-slider-service tmp-section-gap" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-layout-presentation-box tmponhover">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
                                    <div className="tmp-section-title-border mb--40 text-start">
                                        <div className="pres-line-separator-wrapper text-start mb--10" data-aos="fade-up" data-aos-duration="700">
                                            <span className="subtitle">
                                                <span className="number">03</span>
                                                <span className="subtitle-text">What We Do</span>
                                            </span>
                                            <div className="line-separator line-right" />
                                        </div>
                                        <h3 className="title w-700 tmp-title-split">Smart & Reliable Construction Solutions</h3>
                                    </div>
                                    <div className="advance-tab-button advance-tab-button-1">
                                        <ul className="nav nav-tabs splash-nav-tabs tab-button-list" role="tablist">
                                            {tabs.map((tab, index) => (
                                                <li className={`nav-item ${activeTab === index ? "active-nav" : ""}`} role="presentation" key={tab.title}>
                                                    <button
                                                        aria-selected={activeTab === index}
                                                        className={`nav-link tab-button ${activeTab === index ? "active" : ""}`}
                                                        onClick={() => setActiveTab(index)}
                                                        role="tab"
                                                        type="button"
                                                    >
                                                        <div className="tab">
                                                            <span>{tab.number}</span>
                                                            <div className="inner">
                                                                <h4 className="title">{tab.title}</h4>
                                                                <p>{tab.text}</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                                    <div className="tab-content" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                                        <div className="tab-pane fade advance-tab-content-1 active show" role="tabpanel">
                                            <div className="thumbnail invers-anime">
                                                <img src={`/assets/images/about/${current.image}`} alt={current.alt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConstructionTabs;
