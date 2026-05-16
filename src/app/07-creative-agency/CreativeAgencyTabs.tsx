"use client";

import { useState } from "react";

const tabs = [
    {
        id: "layouttab1",
        number: "01",
        title: "Business Solution",
        image: "/assets/images/about/06.webp",
    },
    {
        id: "layouttab2",
        number: "02",
        title: "Business Marketing",
        image: "/assets/images/about/07.webp",
    },
    {
        id: "layouttab3",
        number: "03",
        title: "Marketing",
        image: "/assets/images/about/08.webp",
    },
];

function CreativeAgencyTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeImage = tabs.find((tab) => tab.id === activeTab)?.image ?? tabs[0].image;

    return (
        <div className="auto-slider-service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-layout-presentation-box tmponhover">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
                                    <div className="tmp-section-title-border mb--40 text-start hero__sub-title" data-aos="fade-up" data-aos-duration="700">
                                        <div className="pres-line-separator-wrapper mb--10">
                                            <span className="subtitle">
                                                <span className="number">01</span>{" "}
                                                <span className="subtitle-text">What We Do</span>
                                            </span>
                                            <div className="line-separator" />
                                        </div>
                                        <h3 className="title">Innovative Consulting Solutions Offered</h3>
                                    </div>
                                    <div className="advance-tab-button advance-tab-button-1">
                                        <ul className="nav nav-tabs splash-nav-tabs tab-button-list" role="tablist">
                                            {tabs.map((tab) => (
                                                <li className={`nav-item ${activeTab === tab.id ? "active-nav" : ""}`} role="presentation" key={tab.id}>
                                                    <button
                                                        className={`nav-link tab-button ${activeTab === tab.id ? "active" : ""}`}
                                                        type="button"
                                                        role="tab"
                                                        aria-selected={activeTab === tab.id}
                                                        onClick={() => setActiveTab(tab.id)}
                                                    >
                                                        <div className="tab">
                                                            <span>{tab.number}</span>
                                                            <div className="inner">
                                                                <h4 className="title">{tab.title}</h4>
                                                                <p>Fusce dignissim erat dis proin ornare class sem nibh</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                                    <div className="tab-content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                        <div className="tab-pane fade advance-tab-content-1 active show" role="tabpanel">
                                            <div className="thumbnail invers-anime">
                                                <img loading="lazy" src={activeImage} alt="advance-tab-image" />
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

export default CreativeAgencyTabs;
