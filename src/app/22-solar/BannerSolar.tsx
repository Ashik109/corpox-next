function BannerSolar() {
    return (
        <div className="demo-banner-area-start-solar tmp-section-gap height-650 bg_image bg_image--27">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12">
                        <div className="inner no-radious text-center">
                            <h1 className="title w-800">
                                Powering the Future <br /> with <span className="theme-gradient">Solar Energy</span>
                            </h1>
                            <div className="tmp-personal-portfolio-content">
                                <p className="description">We deliver clean, reliable, and cost-effective solar solutions to help homes and businesses reduce energy costs and build a sustainable future.</p>
                                <div className="view-more-project">
                                    <a className="btn-read-more" href="/contact">
                                        <span>
                                            Get Solar Consultation<i className="feather-arrow-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <ul className="social-icon social-default transparent-with-border justify-content-center mt--25 mt_md--20 mt_sm--20">
                                {["facebook", "twitter", "instagram", "linkedin"].map((icon, index) => (
                                    <li data-aos="slide-up" data-aos-delay={200 + index * 100} data-aos-duration="400" key={icon}>
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

export default BannerSolar;
