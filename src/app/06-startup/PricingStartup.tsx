"use client";

import { useAosOnce } from "../components/useAosOnce";
import { useHoverAnimation } from "../components/useHoverAnimation";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";

type PricingPlan = {
    name: string;
    price: string;
    features: string[];
    cta: string;
    ctaBorder: boolean;
    highlight: boolean;
};

const plans: PricingPlan[] = [
    {
        name: "Free",
        price: "00",
        features: [
            "5 PPC Campaigns",
            "Digital Marketing",
            "Marketing Agency",
            "Seo Friendly",
            "UI/UX designs",
        ],
        cta: "Try This free",
        ctaBorder: true,
        highlight: false,
    },
    {
        name: "Business",
        price: "50",
        features: [
            "5 PPC Campaigns",
            "Keep 100% Royalties",
            "App Development",
            "Seo Friendly",
            "UI/UX designs",
        ],
        cta: "Try 14-days free",
        ctaBorder: false,
        highlight: true,
    },
    {
        name: "Advanced",
        price: "100",
        features: [
            "50 PPC Campaigns",
            "SEO Marketing",
            "Marketing Agency",
            "Seo Friendly",
            "Application Manage",
        ],
        cta: "Try 14-days free",
        ctaBorder: true,
        highlight: false,
    },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
    const hoverRef = useHoverAnimation<HTMLDivElement>();

    const cardClass =
        plan.highlight
            ? "tmp-pricing tmponhover active with-gradient-bg"
            : "tmp-pricing tmponhover";

    const btnClass = plan.ctaBorder
        ? "tmp-btn icon-hover text-center btn-border"
        : "tmp-btn icon-hover text-center";

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div ref={hoverRef} className={cardClass}>
                <div className="pricing-table-inner">
                    <div className="pricing-header">
                        <h4 className="title tmp-badge-2">{plan.name}</h4>
                        <div className="pricing">
                            <div className="price-wrapper">
                                <span className="currency">$</span>
                                <span className="price">{plan.price}</span>
                            </div>
                            <span className="subtitle">USD Per Month</span>
                        </div>
                    </div>
                    <div className="pricing-body">
                        <ul className="list-style--1">
                            {plan.features.map((item) => (
                                <li key={item}>
                                    <i className="feather-check" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pricing-footer">
                        <a className={btnClass} href="#">
                            <span className="btn-text">{plan.cta}</span>
                            <span className="btn-icon">
                                <i className="feather-arrow-right" />
                            </span>
                        </a>
                    </div>
                </div>
                {plan.highlight ? <div className="popular-tag">Popular</div> : null}
            </div>
        </div>
    );
}

function PricingStartup() {
    useTitleSplitAnimation();
    useAosOnce();

    return (
        <section className="tmp-pricing-area tmp-section-gap bg-color-card" aria-labelledby="pricing-startup-title">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4
                                className="subtitle tmp-title-split"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                Simple pricing packages
                            </h4>
                            <h2
                                id="pricing-startup-title"
                                className="title w-600 mb--20 tmp-title-split"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="100"
                            >
                                Transparent & Affordable Pricing
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    {plans.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PricingStartup;
