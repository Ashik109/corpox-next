import Link from 'next/link'
function FooterRealEstateTwo() {
    return (
        <div className="footer-style-3">
            <div className="tmp-callto-action tmp-call-to-action bg_patern-1 style-8 content-wrapper">
                <div className="container">
                    <div className="row row--0 align-items-center">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content text-center">
                                    <h2 className="title">
                                        Ready to start creating a <br /> standard website?
                                    </h2>
                                    <h6 className="subtitle">Finest choice for your home &amp; office</h6>
                                    <div className="call-to-btn text-center mt--30 d-flex justify-content-center">
                                        <Link className="tmp-btn btn-icon" href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866" target="_blank">
                                            Purchase Corpox <i className="icon feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area copyright-style-one variation-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-7 col-sm-12 col-12">
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
                        <div className="col-lg-4 col-md-5 mt_sm--20">
                            <div className="copyright-center text-center">
                                <ul className="social-icon social-default color-lessdark justify-content-center">
                                    {["facebook", "twitter", "instagram", "linkedin"].map((icon, index) => (
                                        <li data-aos="slide-up" data-aos-delay={200 + index * 100} data-aos-duration="400" key={icon}>
                                            <Link href={`https://www.${icon}.com/`}>
                                                <i className={`feather-${icon}`} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                            <div className="copyright-right text-center text-lg-end">
                                <p className="copyright-text">
                                    &copy; Copyright All rights reserved{" "}
                                    <Link target="_blank" href="https://themeforest.net/user/inversweb/portfolio">
                                        InversWeb
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterRealEstateTwo;
