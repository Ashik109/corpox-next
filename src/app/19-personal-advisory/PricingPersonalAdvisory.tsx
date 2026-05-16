const plans = [
    {
        name: "Free",
        price: "00",
        button: "Try This free",
        features: ["5 PPC Campaigns", "Digital Marketing", "Marketing Agency", "Seo Friendly", "UI/UX designs"],
        popular: false,
    },
    {
        name: "Business",
        price: "50",
        button: "Try 14-days free",
        features: ["5 PPC Campaigns", "Keep 100% Royalties", "App Development", "Seo Friendly", "UI/UX designs"],
        popular: true,
    },
    {
        name: "Advanced",
        price: "100",
        button: "Try 14-days free",
        features: ["50 PPC Campaigns", "SEO Marketing", "Marketing Agency", "Seo Friendly", "Application Manage"],
        popular: false,
    },
] as const;

function PricingPersonalAdvisory() {
    return (
        <div className="tmp-pricing-area tmp-section-gapBottom">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+3</span>
                                    <span className="subtitle-text">Pricing</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Pricing Plan.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    {plans.map((plan) => (
                        <div className="col-lg-4 col-md-6 col-12" key={plan.name}>
                            <div className={`tmp-pricing tmponhover ${plan.popular ? "active with-gradient-bg" : ""}`}>
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
                                        <a className={`tmp-btn icon-hover text-center ${plan.popular ? "" : "btn-border"}`} href="#">
                                            <span className="btn-text">{plan.button}</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {plan.popular ? <div className="popular-tag">Popular</div> : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PricingPersonalAdvisory;
