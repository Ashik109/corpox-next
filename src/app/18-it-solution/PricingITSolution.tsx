"use client";
import Link from 'next/link'


import { useState } from "react";

const features = ["Need your wireframe", "Design with Figma, Framer", "Implement with Webflow, React, WordPress, Laravel/PHP", "Remote/Online", "Work in business days, no weekend.", "Support 6 months"];

const plans = {
    monthly: [
        ["basic", "$59", "/ Month", false],
        ["Standard", "$159", "/ Month", true],
        ["Premium", "$259", "/ Month", false],
    ],
    yearly: [
        ["basic", "$159", "/ Year", false],
        ["Standard", "$259", "/ Year", true],
        ["Premium", "$759", "/ Year", false],
    ],
} as const;

function PricingITSolution() {
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

    return (
        <div className="tmp-pricing-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Our Pricing</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Yearly & Monthly Pricing</h2>
                            <p className="description b1 tmp-title-split-p">
                                Easily schedule your appointment with just a few clicks. Our team is <br /> always ready to assist you at your preferred time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt--20">
                    <div className="col-lg-12">
                        <ul className="nav nav-tabs pricing-tab-nav-yearly" role="tablist">
                            {[
                                ["monthly", "Monthly Plan"],
                                ["yearly", "Yearly Plan"],
                            ].map(([id, label]) => (
                                <li className="nav-item" key={id} role="presentation">
                                    <button
                                        aria-selected={activeTab === id}
                                        className={`nav-link tmp-btn btn-border ${activeTab === id ? "active" : ""}`}
                                        onClick={() => setActiveTab(id as "monthly" | "yearly")}
                                        role="tab"
                                        type="button"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="tab-content pricing-table-items mt--40">
                            <div className="tab-pane fade show active" role="tabpanel">
                                <div className="row g-5">
                                    {plans[activeTab].map(([name, price, period, popular]) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12" key={`${activeTab}-${name}`}>
                                            <div className="pricing-table large-padding tmponhover">
                                                <div className="pricing-table-header">
                                                    <div className="top d-flex justify-content-between align-items-start">
                                                        <h4>{name}</h4>
                                                    </div>
                                                    <h1>
                                                        {price} <span>{period}</span>
                                                    </h1>
                                                </div>
                                                <ul className="feature-lists">
                                                    {features.map((feature) => (
                                                        <li key={feature}>{feature}</li>
                                                    ))}
                                                </ul>
                                                {popular ? <div className="popular-tag">Popular</div> : null}
                                                <Link href="/contact" className={`tmp-btn btn-primary ${popular ? "" : "btn-border"} w-100`}>
                                                    Pick This Package
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
    );
}

export default PricingITSolution;
