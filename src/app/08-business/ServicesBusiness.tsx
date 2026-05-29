import Link from 'next/link'
const services = [
    { image: "/assets/images/services/serviice-01.jpg", title: "Awarded Design" },
    { image: "/assets/images/services/serviice-02.jpg", title: "Design & Creative" },
    { image: "/assets/images/services/serviice-03.jpg", title: "App Development" },
    { image: "/assets/images/services/serviice-04.jpg", title: "Web Design" },
];

function ServicesBusiness() {
    return (
        <div className="tmp-service-area tmp-section-gap" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="tmp-section-title-border text-center"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">04</span>
                                    <span className="subtitle-text">Services</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Our Top<span className="theme-gradient"> Services</span>
                            </h2>
                            <p className="description b1 tmp-title-split-p">
                                We help our clients succeed by creating brand identities, <br />
                                digital experiences, and print materials.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10 service-wrapper">
                    {services.map((service, index) => (
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={index * 100}
                            key={service.title}
                        >
                            <div className="card-box card-style-1 text-left tmponhover">
                                <div className="inner">
                                    <div className="image invers-anime">
                                        <Link href="/service-details/management-leadership">
                                            <img loading="lazy" src={service.image} alt="card Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title mb--20">
                                            <Link href="/service-details/financial-growth">{service.title}</Link>
                                        </h4>
                                        <div className="discover-btn">
                                            <Link className="tmp-btn mt--0 round btn-small btn-border hover-icon-reverse" href="/service-details/digital-transformation">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Discover services</span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right" />
                                                    </span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right" />
                                                    </span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesBusiness;
