import React from 'react'

function FooterThree() {
    return (
        <footer className="tmp-footer footer-style-default no-border">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <h4 className="title">Services</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        <li>
                                            <a href="/about">About</a>
                                        </li>
                                        <li>
                                            <a href="/portfolio/brand-refresh-venture">Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="/contact">Contact</a>
                                        </li>
                                        <li>
                                            <a href="/service/management-leadership">Service</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <div className="widget-menu-top">
                                    <h4 className="title">Solutions</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li>
                                                <a href="/brand">Brand</a>
                                            </li>
                                            <li>
                                                <a href="/call-to-action">call To Action</a>
                                            </li>
                                            <li>
                                                <a href="/counter">Counter</a>
                                            </li>
                                            <li>
                                                <a href="/service/financial-growth">Service</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <h4 className="title">Company</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        <li>
                                            <a href="/pricing">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="/tab">Tab Styles</a>
                                        </li>
                                        <li>
                                            <a href="/service/digital-transformation">Service</a>
                                        </li>
                                        <li>
                                            <a href="/social-share">Social</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <h4 className="title">Resources</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        <li>
                                            <a href="/team/benjamin-taylor">Team</a>
                                        </li>
                                        <li>
                                            <a href="/testimonial">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="/service/management-leadership">Service</a>
                                        </li>
                                        <li>
                                            <a href="/timeline">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <h4 className="title">Stay With Us.</h4>
                                <div className="inner">
                                    <h6 className="subtitle">
                                        <span className="odometer" data-count={2000}>
                                            000
                                        </span>{" "}
                                        Our clients are subscribe Around the World
                                    </h6>
                                    <ul className="social-icon social-default justify-content-start">
                                        <li>
                                            <a href="https://www.facebook.com/">
                                                <i className="feather-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com">
                                                <i className="feather-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <i className="feather-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkdin.com/">
                                                <i className="feather-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter-area tmp-newsletter-default">
                <div className="container">
                    <div className="row row--0 newsletter-wrapper align-items-center border-top-bottom">
                        <div className="col-lg-4">
                            <div className="newsletter-section-title">
                                <h3 className="title">Stay up to Date</h3>
                                <p className="description">
                                    Don't miss the latest Corpox news, update and trend.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="tmp-newsletter mt_md--20 mt_sm--20" action="#">
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <button className="tmp-btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area copyright-style-one no-border">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="copyright-left">
                                <ul className="ft-menu link-hover">
                                    <li>
                                        <a href="/privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms And Condition</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="copyright-right text-center text-md-end">
                                <p className="copyright-text">
                                    ©All Rights Reserved InversWeb <span id="year" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterThree