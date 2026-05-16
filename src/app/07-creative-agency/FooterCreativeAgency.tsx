const footerColumns = [
    {
        title: "Company",
        links: [
            ["Pricing", "/pricing"],
            ["Tab Styles", "/tab"],
            ["Service", "/service"],
            ["Social", "/social-share"],
        ],
    },
    {
        title: "Resources",
        links: [
            ["Team", "/team"],
            ["Testimonial", "/testimonial"],
            ["Service", "/service"],
            ["Timeline", "/timeline"],
        ],
    },
];

function FooterCreativeAgency() {
    return (
        <footer className="tmp-footer footer-style-default variation-two position-relative">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
                                        <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                                    </a>
                                </div>
                                <p className="subtitle mt--30">
                                    If you want to create a corporate template you can purshace now our Corpex template.
                                </p>
                            </div>
                        </div>
                        {footerColumns.map((column) => (
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={column.title}>
                                <div className="tmp-footer-widget">
                                    <h4 className="title">{column.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {column.links.map(([label, href]) => (
                                                <li key={label}>
                                                    <a href={href}>{label}</a>
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
                                    <h6 className="subtitle">1200+ trusted clients are subscribe Us around the world</h6>
                                    <ul className="social-icon social-default justify-content-start">
                                        {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                                            <li key={icon}>
                                                <a href={icon === "linkedin" ? "https://www.linkdin.com/" : `https://www.${icon}.com/`}>
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
                                <p className="copyright-text">
                                    All Right Reserved © Corpox <span id="year" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-area wow move-right" data-aos="fade-left" data-aos-offset="250">
                <img src="/assets/images/shape/02.png" alt="consulting_business" />
            </div>
        </footer>
    );
}

export default FooterCreativeAgency;
