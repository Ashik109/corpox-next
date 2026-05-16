import Link from "next/link";

const columns = [
    { title: "Company", links: ["Pricing", "Tab Styles", "Service", "Social"] },
    { title: "Resources", links: ["Team", "Testimonial", "Service", "Timeline"] },
];

function FooterMedical() {
    return (
        <footer className="tmp-footer footer-style-default variation-two position-relative">
            <div className="footer-top pt--0">
                <div className="container pb--80">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-message-and-form">
                                <p className="colophon">
                                    Corpox is powered by{" "}
                                    <a target="_blank" href="https://themeforest.net/user/inversweb">
                                        InversWeb
                                    </a>
                                    .
                                </p>
                                <div className="footer-form-wrap">
                                    <h4>
                                        Keep up to date on <a href="#">InversWeb</a>
                                    </h4>
                                    <p>with our hand-crafted newsletter</p>
                                    <form action="#">
                                        <div className="input-group tmponhover">
                                            <input type="email" placeholder="Email Here" required />
                                        </div>
                                        <button className="tmp-btn btn-primary" type="submit">
                                            SUBSCRIBE
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="tmp-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <img className="logo-light" src="/assets/images/logo/doctor-logo.svg" alt="Medical Healthcare" />
                                        <img className="logo-dark" src="/assets/images/logo/doctor-logo-dark.svg" alt="Medical Healthcare" />
                                    </Link>
                                </div>
                                <p className="subtitle mt--30">If you want to create a corporate template you can purshace now our Corpex template.</p>
                            </div>
                        </div>
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
                                    <h6 className="subtitle">10000+ trusted clients are subscribe Us around the world</h6>
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
                <div className="bg-line-animatoin-area-global" />
            </div>
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
                                        <a href="#">Terms And Condition</a>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                            <div className="copyright-right text-center text-lg-end">
                                <p className="copyright-text">All Right Corpox</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-area" data-aos="fade-left" data-aos-offset="250">
                <img src="/assets/images/shape/02.png" alt="" />
            </div>
        </footer>
    );
}

export default FooterMedical;
