import Link from "next/link";

const companyLinks = ["Pricing", "Tab Styles", "Service", "Social"];
const resourceLinks = ["Team", "Testimonial", "Service", "Timeline"];
const socials = ["feather-facebook", "feather-twitter", "feather-instagram", "feather-linkedin"];

function FooterBusiness() {
    return (
        <footer className="tmp-footer footer-style-default variation-two position-relative">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
                                        <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                                    </Link>
                                </div>
                                <p className="subtitle mt--30">
                                    If you want to create a corporate template you can purshace now our Corpex
                                    template.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <h4 className="title">Company</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        {companyLinks.map((link) => (
                                            <li key={link}>
                                                <a href="#">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <h4 className="title">Resources</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        {resourceLinks.map((link) => (
                                            <li key={link}>
                                                <a href="#">{link}</a>
                                            </li>
                                        ))}
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
                                        {socials.map((social) => (
                                            <li key={social}>
                                                <a href="#">
                                                    <i className={social} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area copyright-style-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
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
                        <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                            <div className="copyright-right text-center text-lg-end">
                                <p className="copyright-text">All Right Reserved &copy; Corpox</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-area" data-aos="fade-left" data-aos-offset="250">
                <img src="/assets/images/shape/02.png" alt="consulting_business" />
            </div>
        </footer>
    );
}

export default FooterBusiness;
