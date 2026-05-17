import Link from 'next/link'
const plans = [
    {
        name: "basic",
        price: "$59",
        note: "Have design ready to build? or small budget",
        features: ["Need your wireframe", "Design with Figma, Framer", "Implement with Webflow, React, WordPress, Laravel/PHP", "Remote/Online", "Work in business days, no weekend.", "Support 6 months"],
    },
    {
        name: "premium",
        price: "$129",
        note: "Not have any design? Leave its for me",
        features: [
            "Don't need wireframe or anything",
            "Design with Figma, Framer from scratch",
            "Implement with Webflow, React, WordPress, Laravel/PHP",
            "Remote/Online",
            "Work with both weekend",
            "Support 12 months",
            "Your project alway be priority",
            "Customer care gifts",
        ],
    },
];

function PricingBusinessCoach() {
    return (
        <div className="tmp-service-area tmp-section-gapBottom banner-personal-portfolio signle-section">
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
                            <h2 className="title w-700 tmp-title-split">Pricing Style Two.</h2>
                        </div>
                    </div>
                </div>
                <div className="pricing-table-items">
                    <div className="pricing-table-items">
                        <div className="row g-5">
                            {plans.map((plan) => (
                                <div className="col-md-6" key={plan.name}>
                                    <div className="pricing-table large-padding tmponhover">
                                        <div className="pricing-table-header">
                                            <div className="top d-flex justify-content-between align-items-start">
                                                <h4>{plan.name}</h4>
                                                <p className="text-right">{plan.note}</p>
                                            </div>
                                            <h1>
                                                {plan.price} <span>/ hour</span>
                                            </h1>
                                        </div>
                                        <ul className="feature-lists">
                                            {plan.features.map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                        <Link href="#" className="tmp-btn btn-primary w-100">
                                            pick this package
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="info text-center">
                            Don&apos;t find any package match with your plan!
                            <br />
                            Want to setup a new tailor-made package for only you?. <Link href="/contact">Contact Us</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingBusinessCoach;
