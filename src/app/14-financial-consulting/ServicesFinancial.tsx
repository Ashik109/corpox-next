import Link from 'next/link'
const services = [
    { image: "serviice-01.jpg", title: "Awarded Design", delay: 0 },
    { image: "serviice-02.jpg", title: "Design & Creative", delay: 100 },
    { image: "serviice-03.jpg", title: "App Development", delay: 200 },
    { image: "serviice-04.jpg", title: "Web Design", delay: 300 },
];

function ServicesFinancial() {
    return (
        <div className="tmp-service-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle tmp-title-split">Services</h4>
                            <h2 className="title w-600 tmp-title-split">Variety of Financial Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--0 service-wrapper">
                    {services.map((service) => (
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="slide-up" data-aos-delay={service.delay} data-aos-duration="700" key={service.image}>
                            <div className="card-box card-style-1 text-left tmponhover">
                                <div className="inner">
                                    <div className="image invers-anime">
                                        <Link href="/service-details/management-leadership">
                                            <img loading="lazy" src={`/assets/images/services/${service.image}`} alt="card Images" />
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

export default ServicesFinancial;
