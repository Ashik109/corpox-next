import Link from 'next/link'
const socialLinks = [
    { href: "https://www.facebook.com/", icon: "feather-facebook", delay: 200 },
    { href: "https://www.twitter.com", icon: "feather-twitter", delay: 300 },
    { href: "https://www.instagram.com/", icon: "feather-instagram", delay: 400 },
    { href: "https://www.linkdin.com/", icon: "feather-linkedin", delay: 500 },
];

function BannerHRWebsite() {
    return (
        <div className="slider-hr-website-clip">
            <div className="slider-hr-website-banner height-950 bg_image bg_image--27">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-12">
                            <div className="inner no-radious text-center">
                                <h1 className="title w-700 tmp-title-split">
                                    Empowering People,<span className="theme-gradient"> Success</span>
                                </h1>
                                <div className="tmp-personal-portfolio-content">
                                    <p className="description tmp-title-split">
                                        Our experienced consultants work closely with you to understand your unique business challenges and ultimate goals.
                                    </p>
                                    <div className="view-more-project">
                                        <Link className="btn-read-more" href="/contact">
                                            <span>
                                                Contact With Us<i className="feather-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <ul className="social-icon social-default transparent-with-border justify-content-center mt--40 mt_md--20 mt_sm--20">
                                    {socialLinks.map((link) => (
                                        <li key={link.icon} data-aos="fade-up" data-aos-duration="400" data-aos-delay={link.delay}>
                                            <Link href={link.href}>
                                                <i className={link.icon} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerHRWebsite;
