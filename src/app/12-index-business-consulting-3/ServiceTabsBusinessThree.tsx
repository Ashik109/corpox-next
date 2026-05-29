"use client";
import Link from 'next/link'


import { useState } from "react";

const tabs = [
    {
        number: "01",
        title: "Business Solution",
        text: "Fusce dignissim erat dis proin ornare class sem nibh",
        image: "06.webp",
    },
    {
        number: "02",
        title: "Business Marketing",
        text: "Fusce dignissim erat dis proin ornare class sem nibh",
        image: "07.webp",
    },
    {
        number: "03",
        title: "Marketing",
        text: "Fusce dignissim erat dis proin ornare class sem nibh",
        image: "08.webp",
    },
];

function ServiceTabsBusinessThree() {
    const [active, setActive] = useState(0);

    return (
        <div className="auto-slider-service tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-layout-presentation-box tmponhover">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
                                    <div className="section-title text-start mb--60">
                                        <span className="subtitle bg-primary-opacity">What We Do</span>
                                        <h3 className="title">Innovative Consulting Solutions Offered</h3>
                                    </div>
                                    <div className="advance-tab-button advance-tab-button-1">
                                        <ul className="nav nav-tabs splash-nav-tabs tab-button-list" role="tablist">
                                            {tabs.map((tab, index) => (
                                                <li className={`nav-item ${active === index ? "active-nav" : ""}`} role="presentation" key={tab.title}>
                                                    <button
                                                        className={`nav-link tab-button ${active === index ? "active" : ""}`}
                                                        type="button"
                                                        role="tab"
                                                        aria-selected={active === index}
                                                        onClick={() => setActive(index)}
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
                                    <div className="tab-content">
                                        {tabs.map((tab, index) => (
                                            <div className={`tab-pane fade advance-tab-content-1 ${active === index ? "active show" : ""}`} role="tabpanel" key={tab.image}>
                                                <div className="thumbnail over-gradient-primary invers-anime">
                                                    <img loading="lazy" src={`/assets/images/about/${tab.image}`} alt="advance-tab" />
                                                    <Link href="/service-details/management-leadership" className="tmp-btn btn-primary">
                                                        View Details
                                                    </Link>
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

export default ServiceTabsBusinessThree;
