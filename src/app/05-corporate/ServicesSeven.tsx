"use client";
import React, { useEffect, useState } from "react";
import { useHoverAnimation } from '../components/useHoverAnimation'

function ServicesSeven() {
    const hoverRef = useHoverAnimation<HTMLDivElement>()

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Business Solution",
            desc: "Fusce dignissim erat dis proin ornare class sem nibh",
            img: "/assets/images/about/06.webp"
        },
        {
            title: "Business Marketing",
            desc: "Fusce dignissim erat dis proin ornare class sem nibh",
            img: "/assets/images/about/07.webp"
        },
        {
            title: "Marketing",
            desc: "Fusce dignissim erat dis proin ornare class sem nibh",
            img: "/assets/images/about/08.webp"
        }
    ];

    useEffect(() => {

        const interval = setInterval(() => {

            setActiveTab((prev) => {
                if (prev === tabs.length - 1) {
                    return 0;
                }
                return prev + 1;
            });

        }, 5000);

        return () => clearInterval(interval);

    }, []);

    return (
        <>
            <div className="auto-slider-service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div ref={hoverRef} className="service-layout-presentation-box tmponhover">
                                <div className="row g-5 align-items-center">

                                    {/* LEFT */}
                                    <div className="col-lg-5 order-2 order-lg-1">

                                        <div className="section-title text-start mb--60">
                                            <span className="subtitle bg-primary-opacity">
                                                What We Do
                                            </span>

                                            <h3 className="title">
                                                Innovative Consulting Solutions Offered
                                            </h3>
                                        </div>
                                        <div className="advance-tab-button advance-tab-button-1">
                                            <ul className="nav nav-tabs splash-nav-tabs tab-button-list">

                                                {tabs.map((tab, index) => (

                                                    <li
                                                        key={index}
                                                        className={`nav-item ${index === 0 ? "active-nav" : ""}`}
                                                    >

                                                        <button
                                                            className={`nav-link tab-button ${activeTab === index ? "active" : ""}`}
                                                            onClick={() => setActiveTab(index)}
                                                        >

                                                            <div className="tab">

                                                                <span>{String(index + 1).padStart(2, "0")}</span>

                                                                <div className="inner">

                                                                    <h4 className="title">
                                                                        {tab.title}
                                                                    </h4>

                                                                    <p>
                                                                        {tab.desc}
                                                                    </p>

                                                                </div>

                                                            </div>

                                                        </button>

                                                    </li>

                                                ))}

                                            </ul>
                                        </div>

                                    </div>

                                    {/* RIGHT */}
                                    <div className="col-lg-7 order-1 order-lg-2">

                                        <div className="tab-content">

                                            {tabs.map((tab, index) => (

                                                <div
                                                    key={index}
                                                    className={`tab-pane fade advance-tab-content-1 ${activeTab === index ? "show active" : ""
                                                        }`}
                                                >

                                                    <div className="thumbnail invers-anime">

                                                        <img
                                                            src={tab.img}
                                                            alt="advance-tab-image"
                                                        />

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
        </>
    );
}

export default ServicesSeven;