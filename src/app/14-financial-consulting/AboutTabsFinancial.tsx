"use client";
import Link from 'next/link'


import { useState } from "react";

const tabs = [
    {
        id: "story",
        label: "Our Story",
        text: "From our humble beginnings, we started with a simple vision - to empower individuals and businesses to achieve financial stability and long-term growth. With years of experience in financial consulting, investment planning, and business advisory.",
    },
    {
        id: "mission",
        label: "Our Mission",
        text: "From our humble beginnings, we started with a simple vision - to empower individuals and businesses to achieve financial stability and long-term growth. With years of experience in financial consulting, investment planning, and business advisory.",
    },
    {
        id: "vision",
        label: "Our Vission",
        text: "From our humble beginnings, we started with a simple vision - to empower individuals and businesses to achieve financial stability and long-term growth. With years of experience in financial consulting, investment planning, and business advisory.",
    },
];

function AboutTabsFinancial() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

    return (
        <div className="tmp-tab-area tmp-section-gap">
            <div className="container">
                <div className="row g-5 row--30 align-items-center">
                    <div className="col-lg-5 order-1 order-lg-2 finance-about-image jarallax" data-speed=".9">
                        <img className="radius-small jarallax-img" src="/assets/images/about/finance-about.jpg" alt="Corporate Template" />
                    </div>
                    <div className="col-lg-7 order-2 order-lg-1">
                        <div className="section-title text-left mb--40">
                            <h4 className="subtitle tmp-title-split">About Us</h4>
                            <h2 className="title w-600 mb--20 tmp-title-split">
                                We Help Our Clients To Grow <br /> Their Business
                            </h2>
                        </div>
                        <div className="tmp-default-tab style-two">
                            <ul className="nav nav-tabs tab-button" role="tablist">
                                {tabs.map((tab) => (
                                    <li className="nav-item tabs__tab" key={tab.id} role="presentation">
                                        <button
                                            aria-controls={`financial-${tab.id}`}
                                            aria-selected={activeTab === tab.id}
                                            className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                                            id={`financial-${tab.id}-tab`}
                                            onClick={() => setActiveTab(tab.id)}
                                            role="tab"
                                            type="button"
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tmp-tab-content tab-content tmponhover">
                                {tabs.map((tab) => (
                                    <div
                                        aria-labelledby={`financial-${tab.id}-tab`}
                                        className={`tab-pane fade ${active.id === tab.id ? "show active" : ""}`}
                                        id={`financial-${tab.id}`}
                                        key={tab.id}
                                        role="tabpanel"
                                    >
                                        <p>{tab.text}</p>
                                        <div className="why-choose-feature pb--20">
                                            {["Fast Growing Sells", "24/7 Quality Services"].map((item) => (
                                                <div className="single tmponhover" key={item}>
                                                    <p>{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="title">
                                            Our team is driven by trust, transparency, and innovation. We believe every financial journey is unique, and we craft strategies tailored to each
                                            client&apos;s goals.
                                        </p>
                                        <Link className="tmp-btn btn-small" href="/about">
                                            Read More
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTabsFinancial;
