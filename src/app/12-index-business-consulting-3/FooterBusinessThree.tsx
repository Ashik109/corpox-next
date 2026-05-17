import Link from "next/link";
import BusinessThreeOdometer from "./BusinessThreeOdometer";

const columns = [
    {
        title: "Quick Link",
        links: ["Recent work", "About us", "Testimonials", "News & Blog", "FAQs"],
    },
    {
        title: "Company",
        links: ["Our approach", "Team members", "Coming soon", "Contact us", "We're hiring!"],
    },
    {
        title: "Our Service",
        links: ["Planning", "Strategy", "Research", "Consulting", "Analysis"],
    },
];

function ArrowIcon() {
    return <i className="feather-arrow-up-right" />;
}

function FooterBusinessThree() {
    return (
        <footer className="tmp-section-gapTop pb--80 pb_sm--20 tmp-card tmp-footer-style-3 position-relative">
            <div className="container position-relative">
                <div className="row row-gap-5 d-flex justify-content-between align-items-center mb--30">
                    <div className="footer-top-wrapper-style-three">
                        <div className="left">
                            <div className="pres-line-separator-wrapper text-start mb--10 ml--0 justify-content-start">
                                <span className="subtitle mt--0" style={{ width: "auto" }}>
                                    <BusinessThreeOdometer value={2999} />
                                    <span className="subtitle-text color-white">MARKETING STARTUP AGENCY</span>
                                </span>
                            </div>
                            <h3 className="tmp-text-white pr--80 pr_sm--0 pr_md--0">
                                We won&apos;t charge you for our <span className="color-primary">Marketing</span> Deal for the first year.
                            </h3>
                        </div>
                        <div className="right">
                            <div className="text-center right-text-area">
                                <Link href="/contact" className="tmp-btn btn-primary">
                                    Contact with us
                                </Link>
                                <p className="tmp-text-white">We are here to help your business grow</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tmp-separator" />
                <div className="row g-5 row-gap-5 d-flex justify-content-between pt--60">
                    <div className="col-12 col-xxl-8 pr--50">
                        <div className="row row-gap-5 d-flex justify-content-between">
                            {columns.map((column) => (
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3" key={column.title}>
                                    <div className="tmp-footer-widget">
                                        <h5 className="tmp-text-white mb--30">{column.title}</h5>
                                        <ul className="tmp-list-footer tmp-list-has-left-icon">
                                            {column.links.map((link) => (
                                                <li key={link}>
                                                    <Link href="#">
                                                        {link}
                                                        <ArrowIcon />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div className="tmp-footer-widget">
                                    <h5 className="tmp-text-white mb--30">Need any help?</h5>
                                    <p className="b4-style mb--10">Call us directly</p>
                                    <Link className="tmp-text-white tmp-hover-underline color-white" href="tel:+010098007804">
                                        +01 009 800 7804
                                    </Link>
                                    <p className="b4-style mt--20 mb--10">Email us</p>
                                    <Link className="tmp-text-white tmp-hover-underline color-white" href="mailto:corpox@example.com">
                                        corpox@example.com
                                    </Link>
                                    <p className="b4-style mt--20 mb--10">We are available</p>
                                    <p className="tmp-text-white color-white">
                                        <span className="tmp-gradient-text">Mon-Sat:</span> 9am to 7pm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="tmp-separator tmp-bg-white-opacity-100 mt--50 mt_sm--25 mt_md--30" />
                        <div className="tmp-copyright-area-3">
                            <p className="m-0 tmp-copyright">
                                &copy; <Link className="tmp-hover-underline" href="/">Corpox</Link>. All Rights Reserved
                            </p>
                            <ul className="tmp-social">
                                {["feather-facebook", "feather-twitter", "feather-instagram", "feather-linkedin"].map((icon) => (
                                    <li key={icon}>
                                        <Link href="#">
                                            <i className={icon} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="tmp-separator tmp-bg-white-opacity-100" />
                    </div>
                    <div className="col-12 col-xxl-4">
                        <div className="tmp-footer-card-3 tmponhover">
                            <div className="tmp-footer-widget">
                                <div className="widget-inner">
                                    <div>
                                        <Link className="tmp-logo mb--50 d-block mb_sm--25 mb_md--25" href="/">
                                            <img src="/assets/images/logo/logo.png" alt="Logo" />
                                        </Link>
                                        <h5 className="tmp-text-white mb--10">Subscribe Newsletter</h5>
                                        <p className="mb--25">* We will send you weekly updates to help you manage your business better.</p>
                                    </div>
                                    <form className="tmp-newsletter-form" autoComplete="off">
                                        <div className="tmp-input-field mb--25">
                                            <input className="tmp-input-field-rounded tmp-input-bg-var-2" type="email" name="email" placeholder="Enter your email..." autoComplete="off" required />
                                            <button className="tmp-btn btn-primary" type="submit">
                                                Subscribe
                                            </button>
                                        </div>
                                        <div className="tmp-input-field">
                                            <input id="tmp-checkbox-12" name="tmp-checkbox-12" type="checkbox" value="yes" />
                                            <label className="tmp-checkbox" htmlFor="tmp-checkbox-12">
                                                Agree to Privacy &amp; Policy
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterBusinessThree;
