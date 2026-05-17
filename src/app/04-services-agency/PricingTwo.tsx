import Link from 'next/link'
import React from 'react'

function PricingTwo() {
    return (
        <>
            {/* Start Pricing Style-1  */}
            <div className="tmp-pricing-area tmp-section-gap">
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
                                <h2 className="title w-700 tmp-title-split">
                                    Pricing for Everyone.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tmp-pricing tmponhover">
                                <div className="pricing-table-inner">
                                    <div className="pricing-header">
                                        <h4 className="title tmp-badge-2">Free</h4>
                                        <div className="pricing">
                                            <div className="price-wrapper">
                                                <span className="currency">$</span>
                                                <span className="price">00</span>
                                            </div>
                                            <span className="subtitle">USD Per Month</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li>
                                                <i className="feather-check" /> 5 PPC Campaigns
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Digital Marketing
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Marketing Agency
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Seo Friendly
                                            </li>
                                            <li>
                                                <i className="feather-check" /> UI/UX designs
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link
                                            className="tmp-btn icon-hover text-center btn-border"
                                            href="#"
                                        >
                                            <span className="btn-text">Try This free</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tmp-pricing tmponhover active with-gradient-bg">
                                <div className="pricing-table-inner">
                                    <div className="pricing-header">
                                        <h4 className="title tmp-badge-2">Business</h4>
                                        <div className="pricing">
                                            <div className="price-wrapper">
                                                <span className="currency">$</span>
                                                <span className="price">50</span>
                                            </div>
                                            <span className="subtitle">USD Per Month</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li>
                                                <i className="feather-check" /> 5 PPC Campaigns
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Keep 100% Royalties
                                            </li>
                                            <li>
                                                <i className="feather-check" /> App Development
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Seo Friendly
                                            </li>
                                            <li>
                                                <i className="feather-check" /> UI/UX designs
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link className="tmp-btn icon-hover text-center" href="#">
                                            <span className="btn-text">Try 14-days free</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="popular-tag">Popular</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tmp-pricing tmponhover">
                                <div className="pricing-table-inner">
                                    <div className="pricing-header">
                                        <h4 className="title tmp-badge-2">Advanced</h4>
                                        <div className="pricing">
                                            <div className="price-wrapper">
                                                <span className="currency">$</span>
                                                <span className="price">100</span>
                                            </div>
                                            <span className="subtitle">USD Per Month</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li>
                                                <i className="feather-check" /> 50 PPC Campaigns
                                            </li>
                                            <li>
                                                <i className="feather-check" /> SEO Marketing
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Marketing Agency
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Seo Friendly
                                            </li>
                                            <li>
                                                <i className="feather-check" /> Application Manage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link
                                            className="tmp-btn icon-hover text-center btn-border"
                                            href="#"
                                        >
                                            <span className="btn-text">Try 14-days free</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Pricing Style-1  */}
        </>

    )
}

export default PricingTwo