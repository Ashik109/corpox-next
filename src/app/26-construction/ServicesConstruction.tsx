import Link from 'next/link'
const services = [
    ["10.webp", "Home Construction"],
    ["11.webp", "Commercial Build"],
    ["12.webp", "Architecture Design"],
    ["13.webp", "Project Management"],
    ["14.webp", "Cost Estimation"],
    ["15.webp", "Renovation"],
    ["10.webp", "Maintenance"],
    ["11.webp", "Interior Fit-Out"],
] as const;

function ServicesConstruction() {
    return (
        <div className="tmp-service-area tmp-section-gapBottom" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10" data-aos="fade-up" data-aos-duration="700">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">04</span>
                                    <span className="subtitle-text">Services</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Popular Services.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 service-wrapper mt--10">
                    <div className="col-lg-12">
                        <div className="inversweb-service-main-wrapper-list">
                            {services.map(([image, title], index) => (
                                <Link className="single-service-wrapper tmponhover" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 50} href="/service/management-leadership" key={`${title}-${index}`}>
                                    <div className="thumbnail invers-anime">
                                        <img src={`/assets/images/services/${image}`} alt={title} />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">{title}</h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesConstruction;
