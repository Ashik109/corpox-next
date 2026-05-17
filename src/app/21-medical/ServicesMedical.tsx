import Link from 'next/link'
const services = [
    ["medical-1.webp", "Angioplasty"],
    ["medical-2.webp", "Cardiology"],
    ["medical-3.webp", "Neurology"],
] as const;

function ServicesMedical() {
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
                            <h2 className="title w-700 tmp-title-split">We provide various Directions</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 service-wrapper">
                    {services.map(([image, title], index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="slide-up" data-aos-delay={index * 100} data-aos-duration="700" key={title}>
                            <div className="service gallery-style text-left tmponhover">
                                <div className="inner">
                                    <div className="content">
                                        <h4 className="title mb--20">
                                            <Link href="/service/management-leadership">{title}</Link>
                                        </h4>
                                    </div>
                                    <div className="image invers-anime">
                                        <img src={`/assets/images/services/${image}`} alt="" />
                                    </div>
                                    <div className="discover-btn">
                                        <Link className="tmp-btn mt--20 round btn-small btn-border hover-icon-reverse" href="/service/financial-growth">
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

export default ServicesMedical;
