"use client";

import { useState } from "react";

const faqs = [
    [
        "What services do you provide?",
        "Corpox is a modern and professional business HTML template. It is designed for startups, agencies, and corporate websites. With clean code and responsive layout, it ensures seamless performance on all devices.",
    ],
    [
        "How does the consultation process work?",
        "After purchasing the product, share your request with our support team. We review the details and get back to you as soon as possible with clear next steps.",
    ],
    ["How can I schedule a meeting?", "You can contact the team any time to set up a discovery call, review your goals, and plan the next milestone."],
    ["Do you offer customized business solutions?", "Yes. The workflow can be tailored around your business model, data sources, automation needs, and growth plan."],
] as const;

function FaqAiAgency() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="tmp-faq-area tmp-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb_md--30 mb_sm--30">
                        <div className="tmp-section-title-border text-start sticky-faq-area">
                            <div className="pres-line-separator-wrapper text-start mb--10">
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">FAQ&apos;S</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Frequently Ask & <br /> Questions
                            </h2>
                            <a href="#" className="tmp-btn btn-primary mt--25">
                                View All Faq&apos;s
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tmp-accordion-style accordion" data-aos="slide-up" data-aos-duration="800">
                            <div className="accordion">
                                {faqs.map(([question, answer], index) => {
                                    const isActive = activeIndex === index;

                                    return (
                                        <div className="accordion-item card tmponhover" key={question}>
                                            <h2 className="accordion-header card-header">
                                                <button
                                                    aria-expanded={isActive}
                                                    className={`accordion-button ${isActive ? "" : "collapsed"}`}
                                                    type="button"
                                                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                                                >
                                                    {question}
                                                </button>
                                            </h2>
                                            <div className={`accordion-collapse collapse ${isActive ? "show" : ""}`}>
                                                <div className="accordion-body card-body">{answer}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqAiAgency;
