"use client";

import { useEffect, useState } from "react";

const tabs = [
    ["Residential Solar", "Clean rooftop solar systems designed to reduce energy bills efficiently", "18.webp"],
    ["Commercial Solar", "Scalable solar power solutions for offices factories and warehouses", "19.webp"],
    ["Solar Maintenance", "Reliable monitoring maintenance and performance optimization services", "20.webp"],
] as const;

function ServiceTabsSolar() {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => setActiveTab((current) => (current + 1) % tabs.length), 5000);
        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="auto-slider-service tmp-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-layout-presentation-box tmponhover">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
                                    <div className="section-title text-start mb--60">
                                        <span className="subtitle bg-primary-opacity">What We Do</span>
                                        <h3 className="title">Smart & Sustainable Solar Solutions</h3>
                                    </div>
                                    <div className="advance-tab-button advance-tab-button-1">
                                        <ul className="nav nav-tabs splash-nav-tabs tab-button-list">
                                            {tabs.map(([title, desc], index) => (
                                                <li className={`nav-item ${activeTab === index ? "active-nav" : ""}`} key={title}>
                                                    <button className={`nav-link tab-button ${activeTab === index ? "active" : ""}`} type="button" onClick={() => setActiveTab(index)}>
                                                        <div className="tab">
                                                            <span>{String(index + 1).padStart(2, "0")}</span>
                                                            <div className="inner">
                                                                <h4 className="title">{title}</h4>
                                                                <p>{desc}</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                                    <div className="tab-content">
                                        {tabs.map(([title, , image], index) => (
                                            <div className={`tab-pane fade advance-tab-content-1 ${activeTab === index ? "active show" : ""}`} key={title}>
                                                <div className="thumbnail invers-anime">
                                                    <img src={`/assets/images/about/${image}`} alt={title} />
                                                </div>
                                            </div>
                                        ))}
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

export default ServiceTabsSolar;
