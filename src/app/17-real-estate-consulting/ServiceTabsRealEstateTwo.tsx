"use client";

import { useState } from "react";

const tabs = [
    {
        id: "layouttab1",
        number: "01",
        title: "Business Solution",
        text: "Fusce dignissim erat dis proin ornare class sem nibh",
        image: "06.webp",
    },
    {
        id: "layouttab2",
        number: "02",
        title: "Business Marketing",
        text: "Fusce dignissim erat dis proin ornare class sem nibh",
        image: "07.webp",
    },
    {
        id: "layouttab3",
        number: "03",
        title: "Marketing",
        text: "Fusce dignissim erat dis proin ornare class sem nibh",
        image: "08.webp",
    },
];

function ServiceTabsRealEstateTwo() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="auto-slider-service tmp-section-gapTop">
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
                                            {tabs.map((tab) => (
                                                <li className={`nav-item ${activeTab === tab.id ? "active-nav" : ""}`} key={tab.id} role="presentation">
                                                    <button
                                                        aria-controls={tab.id}
                                                        aria-selected={activeTab === tab.id}
                                                        className={`nav-link tab-button ${activeTab === tab.id ? "active" : ""}`}
                                                        id={`${tab.id}-tab`}
                                                        onClick={() => setActiveTab(tab.id)}
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
                                    <div className="tab-content">
                                        {tabs.map((tab) => (
                                            <div
                                                aria-labelledby={`${tab.id}-tab`}
                                                className={`tab-pane fade advance-tab-content-1 ${activeTab === tab.id ? "active show" : ""}`}
                                                id={tab.id}
                                                key={tab.id}
                                                role="tabpanel"
                                            >
                                                <div className="thumbnail invers-anime">
                                                    <img src={`/assets/images/about/${tab.image}`} alt="advance-tab-image" />
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

export default ServiceTabsRealEstateTwo;
