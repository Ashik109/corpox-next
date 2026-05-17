import Link from 'next/link'
const pricingPlans = [
    {
        name: "Free",
        price: "00",
        button: "Try This free",
        active: false,
        features: ["5 PPC Campaigns", "Digital Marketing", "Marketing Agency", "Seo Friendly", "UI/UX designs"],
    },
    {
        name: "Business",
        price: "50",
        button: "Try 14-days free",
        active: true,
        features: ["5 PPC Campaigns", "Keep 100% Royalties", "App Development", "Seo Friendly", "UI/UX designs"],
    },
    {
        name: "Advanced",
        price: "100",
        button: "Try 14-days free",
        active: false,
        features: ["50 PPC Campaigns", "SEO Marketing", "Marketing Agency", "Seo Friendly", "Application Manage"],
    },
];

function PricingMarketingAgency() {
    return (
        <div className="tmp-pricing-area tmp-section-gap">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div
                            className="section-title text-center"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <h4 className="subtitle">Our Pricing Plan</h4>
                            <h2 className="title w-600 mb--20">Our Pricing Plan.</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available, <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    {pricingPlans.map((plan) => (
                        <div className="col-lg-4 col-md-6 col-12" key={plan.name}>
                            <div className={`tmp-pricing tmponhover ${plan.active ? "active with-gradient-bg" : ""}`}>
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
                                            {plan.features.map((feature) => (
                                                <li key={feature}>
                                                    <i className="feather-check" /> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link
                                            className={`tmp-btn icon-hover text-center ${plan.active ? "" : "btn-border"}`}
                                            href="#"
                                        >
                                            <span className="btn-text">{plan.button}</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {plan.active && <div className="popular-tag">Popular</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PricingMarketingAgency;
