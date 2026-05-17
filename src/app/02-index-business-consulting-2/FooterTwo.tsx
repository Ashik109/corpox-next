import Link from 'next/link'
import React from 'react'

function FooterTwo() {
    return (
        <>
            {/* Start Footer Area  */}
            <footer className="tmp-footer footer-style-default variation-two position-relative">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
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
                                    <p className="subtitle mt--30">
                                        If you want to create a corporate template you can purshace now
                                        our Corpex template.
                                    </p>
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
                                            1200+ trusted clients are subscribe Us around the world
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
                {/* <div class="jumping-text">
  <h2 class="title end">
      Contact Us
  </h2>
    </div> */}
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
                                        All Right Reserved © Corpox
                                        <span id="year" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Copy Right Area  */}
                <div className="shape-area" data-aos="fade-left" data-aos-offset={250}>
                    <img src="/assets/images/shape/02.png" alt="consulting_business" />
                </div>
            </footer>
            {/* End Footer Area  */}
        </>

    )
}

export default FooterTwo