import Link from 'next/link'
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
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio/brand-refresh-venture">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Service</Link>
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
                                                <Link href="/brand">Brand</Link>
                                            </li>
                                            <li>
                                                <Link href="/call-to-action">call To Action</Link>
                                            </li>
                                            <li>
                                                <Link href="/counter">Counter</Link>
                                            </li>
                                            <li>
                                                <Link href="/service">Service</Link>
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
                                            <Link href="/pricing">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link href="/tab">Tab Styles</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/social-share">Social</Link>
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
                                            <Link href="/team">Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/testimonial">Testimonial</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/timeline">Timeline</Link>
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
                                            <Link href="https://www.facebook.com/">
                                                <i className="feather-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.twitter.com">
                                                <i className="feather-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/">
                                                <i className="feather-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkdin.com/">
                                                <i className="feather-linkedin" />
                                            </Link>
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
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms And Condition</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
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