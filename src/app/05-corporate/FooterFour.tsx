import Link from 'next/link'
import React from 'react'

function FooterFour() {
    return (
        <>
            {/* Start Footer Area  */}
            <footer className="tmp-footer footer-style-default footer-style-1 position-relative">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="tmp-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <img
                                                className="logo-light"
                                                src="/assets/images/logo/logo.png"
                                                alt="Corporate Logo"
                                            />
                                            <img
                                                className="logo-dark"
                                                src="/assets/images/logo/logo-dark.png"
                                                alt="Corporate Logo"
                                            />
                                        </Link>
                                    </div>
                                    <h3 className="text-big">
                                        Create Website By Corpox So Quick Download And Make Your Site.
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="tmp-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">Services</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li>
                                                    <Link href="/testimonial">Testiminial</Link>
                                                </li>
                                                <li>
                                                    <Link href="/05-corporate">Company</Link>
                                                </li>
                                                <li>
                                                    <Link href="/10-marketing-agency">Marketing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/06-startup">Startup</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-menu-bottom">
                                        <h4 className="title">Products</h4>
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
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="tmp-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">Company</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li>
                                                    <Link href="/05-corporate">Corporate</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio/analytics-platform">Portfolio</Link>
                                                </li>
                                                <li>
                                                    <Link href="/04-services-agency">SEO Agency</Link>
                                                </li>
                                                <li>
                                                    <Link href="/09-digital-agency">Web Agency</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-menu-bottom">
                                        <h4 className="title">Solutions</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li>
                                                    <Link href="/gallery">Gallery</Link>
                                                </li>
                                                <li>
                                                    <Link href="/testimonial">Testimonial</Link>
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
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="tmp-footer-widget">
                                    <h4 className="title">Newsletter</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">
                                            <span className="odometer" data-count={2000}>
                                                000
                                            </span>{" "}
                                            Our clients are subscribe Around the World
                                        </h6>
                                        <form className="newsletter-form" action="#">
                                            <div className="form-group">
                                                <input type="email" placeholder="Enter Your Email Here" />
                                            </div>
                                            <div className="form-group">
                                                <button className="tmp-btn" type="submit">
                                                    Submit Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer Area  */}
            {/* Start Copy Right Area  */}
            <div className="copyright-area copyright-style-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
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
                        <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                            <div className="copyright-right text-center text-lg-end">
                                <p className="copyright-text">
                                    All Right © Corpox <span id="year" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Copy Right Area  */}
        </>

    )
}

export default FooterFour