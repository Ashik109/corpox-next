import Link from 'next/link'
const plans = [
    {
        name: "Starter",
        price: "0",
        subtitle: "Virtual Access",
        cta: "Get Free Access",
        popular: false,
        features: ["Access to live streams", "Digital event materials", "Q&A participation", "Networking lounge access", "Conference updates"],
    },
    {
        name: "Standard",
        price: "99",
        subtitle: "Full Event Pass",
        cta: "Register Now",
        popular: true,
        features: ["All live sessions & workshops", "Event kit & materials", "Networking opportunities", "Access to panel discussions", "1-year post-event recordings"],
    },
    {
        name: "Premium",
        price: "199",
        subtitle: "VIP Experience",
        cta: "Request VIP Pass",
        popular: false,
        features: ["Front-row seats & exclusive access", "VIP networking lounge", "Meet & greet with speakers", "Premium event kit", "One-on-one consultation"],
    },
] as const;

function PricingEvent() {
    return (
        <div className="tmp-pricing-area tmp-section-gap position-relative bg-card">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Pricing</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Conference Plans for Every Attendee</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 invers-arrange-container">
                    {plans.map((plan) => (
                        <div className="col-lg-4 col-md-6 col-12 invers-arrange-item" key={plan.name}>
                            <div className={`tmp-pricing tmponhover ${plan.popular ? "active with-gradient-bg" : ""}`}>
                                <div className="pricing-table-inner">
                                    <div className="pricing-header">
                                        <h4 className="title tmp-badge-2">{plan.name}</h4>
                                        <div className="pricing">
                                            <div className="price-wrapper">
                                                <span className="currency">$</span>
                                                <span className="price">{plan.price}</span>
                                            </div>
                                            <span className="subtitle">{plan.subtitle}</span>
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
                                        <Link className={`tmp-btn icon-hover text-center ${plan.popular ? "" : "btn-border"}`} href="#">
                                            <span className="btn-text">{plan.cta}</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </Link>
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

export default PricingEvent;
