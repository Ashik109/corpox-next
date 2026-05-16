const socialLinks = ["facebook", "twitter", "instagram", "linkedin"] as const;

function BannerConstruction() {
    return (
        <div className="demo-banner-area-start-solar tmp-section-gap height-650 bg_image bg_image--27" id="home">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12">
                        <div className="inner no-radious text-center">
                            <h1 className="title w-800 tmp-title-split">
                                Building the Future <br /> with <span className="theme-gradient">Quality Construction</span>
                            </h1>
                            <div className="tmp-personal-portfolio-content" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                                <p className="description">
                                    We provide strong, reliable, and cost-effective construction services to help residential and commercial projects stand the test of time with confidence.
                                </p>
                                <div className="view-more-project">
                                    <a className="btn-read-more" href="#contactus">
                                        <span>
                                            Get Construction Quote
                                            <i className="feather-arrow-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <ul className="social-icon social-default transparent-with-border justify-content-center mt--25 mt_md--20 mt_sm--20">
                                {socialLinks.map((icon, index) => (
                                    <li data-aos="fade-up" data-aos-duration="400" data-aos-delay={200 + index * 100} key={icon}>
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
    );
}

export default BannerConstruction;
