import Link from 'next/link'
const plans = [
    {
        name: "Starter",
        price: "00",
        subtitle: "Consultation Plan",
        button: "Get Free Review",
        popular: false,
        features: ["Site inspection support", "Basic energy assessment", "Solar feasibility report", "System size guidance", "Cost saving estimation"],
    },
    {
        name: "Standard",
        price: "50",
        subtitle: "Residential Package",
        button: "Start Installation",
        popular: true,
        features: ["Rooftop solar system", "High-efficiency panels", "Installation support", "Grid connection setup", "One year monitoring"],
    },
    {
        name: "Premium",
        price: "100",
        subtitle: "Commercial Solution",
        button: "Request a Quote",
        popular: false,
        features: ["Large scale solar setup", "Smart energy monitoring", "Battery storage option", "Performance optimization", "Priority maintenance"],
    },
];

function PricingSolar() {
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
                            <h2 className="title w-700 tmp-title-split">Solar Plans for Every Need.</h2>
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
                                            <span className="btn-text">{plan.button}</span>
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

export default PricingSolar;
