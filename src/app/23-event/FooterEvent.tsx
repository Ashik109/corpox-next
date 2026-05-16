import Link from "next/link";

const columns = [
    { title: "Services", links: ["About", "Portfolio", "Contact", "Service"] },
    { title: "Solutions", links: ["Brand", "Call To Action", "Counter", "Service"] },
    { title: "Company", links: ["Pricing", "Tab Styles", "Service", "Social"] },
    { title: "Resources", links: ["Team", "Testimonial", "Service", "Timeline"] },
] as const;

function FooterEvent() {
    return (
        <footer className="tmp-footer footer-style-default no-border">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        {columns.map((column) => (
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={column.title}>
                                <div className="tmp-footer-widget">
                                    <h4 className="title">{column.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {column.links.map((link) => (
                                                <li key={link}>
                                                    <a href="#">{link}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <h4 className="title">Stay With Us.</h4>
                                <div className="inner">
                                    <h6 className="subtitle">2000+ clients subscribe around the world</h6>
                                    <ul className="social-icon social-default justify-content-start">
                                        {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                                            <li key={icon}>
                                                <a href={`https://www.${icon}.com/`}>
                                                    <i className={`feather-${icon}`} />
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
            <div className="newsletter-area tmp-newsletter-default">
                <div className="container">
                    <div className="row row--0 newsletter-wrapper align-items-center border-top-bottom">
                        <div className="col-lg-4">
                            <div className="newsletter-section-title">
                                <h3 className="title">Stay up to Date</h3>
                                <p className="description">Don&apos;t miss the latest Corpox news, update and trend.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="tmp-newsletter mt_md--20 mt_sm--20" action="#">
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <button className="tmp-btn" type="submit">
                                        Subscribe
                                    </button>
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
                                        <a href="#">Terms And Condition</a>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="copyright-right text-center text-md-end">
                                <p className="copyright-text">All Rights Reserved InversWeb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterEvent;
