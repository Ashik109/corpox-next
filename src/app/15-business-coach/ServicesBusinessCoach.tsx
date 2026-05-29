import Link from 'next/link'
const services = [
    { title: "Awarded Design", image: "galery-image-01.png", delay: 0 },
    { title: "Design & Creative", image: "galery-image-02.png", delay: 100 },
    { title: "App Development", image: "galery-image-03.png", delay: 200 },
];

function ServicesBusinessCoach() {
    return (
        <div className="tmp-service-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center" data-aos="slide-up" data-aos-delay="100" data-aos-duration="700">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Services</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Services We Provide</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 service-wrapper">
                    {services.map((service) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="slide-up" data-aos-delay={service.delay} data-aos-duration="700" key={service.image}>
                            <div className="service gallery-style text-left tmponhover">
                                <div className="inner">
                                    <div className="content">
                                        <h4 className="title mb--20">
                                            <Link href="/service-details/management-leadership">{service.title}</Link>
                                        </h4>
                                    </div>
                                    <div className="image invers-anime">
                                        <img src={`/assets/images/services/${service.image}`} alt="card Images" />
                                    </div>
                                    <div className="discover-btn">
                                        <Link className="tmp-btn mt--20 round btn-small btn-border hover-icon-reverse" href="/service-details/financial-growth">
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesBusinessCoach;
