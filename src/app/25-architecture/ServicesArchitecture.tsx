import Link from 'next/link'
const services = [
    {
        image: "05.webp",
        icon: "01.svg",
        title: "Architectural Design",
        alt: "Architecture Design",
        iconAlt: "Architecture",
        text: "Our architectural design service delivers innovative, functional, and visually appealing building concepts tailored to modern lifestyles.",
        reverse: false,
    },
    {
        image: "06.webp",
        icon: "02.svg",
        title: "Interior Planning",
        alt: "Interior Design",
        iconAlt: "Interior",
        text: "Our interior planning service combines aesthetics and functionality to create comfortable, elegant, and practical living spaces.",
        reverse: true,
    },
    {
        image: "07.webp",
        icon: "03.svg",
        title: "Structural Concept",
        alt: "Structural Concept",
        iconAlt: "Structure",
        text: "Our structural concept service ensures safety, durability, and efficient construction while supporting bold architectural ideas.",
        reverse: false,
    },
    {
        image: "08.webp",
        icon: "04.svg",
        title: "Sustainable Design",
        alt: "Sustainable Architecture",
        iconAlt: "Sustainable",
        text: "Our sustainable design approach focuses on eco-friendly materials, energy efficiency, and environmentally responsible architecture.",
        reverse: true,
    },
] as const;

function ServiceContent({ service }: { service: (typeof services)[number] }) {
    return (
        <div className="inner-content">
            <div className="head">
                <div className="icon">
                    <img src={`/assets/images/services/list/icon/${service.icon}`} alt={service.iconAlt} />
                </div>
                <h6 className="title">{service.title}</h6>
            </div>
            <p className="disc">{service.text}</p>
            <Link className="tmp-btn hover-icon-reverse" href="/service-details/management-leadership">
                <span className="icon-reverse-wrapper">
                    <span className="btn-text">See Details</span>
                    <span className="btn-icon">
                        <i className="feather-arrow-right" />
                    </span>
                    <span className="btn-icon">
                        <i className="feather-arrow-right" />
                    </span>
                </span>
            </Link>
        </div>
    );
}

function ServiceImage({ service }: { service: (typeof services)[number] }) {
    return (
        <Link className="thumbnail-service-list invers-anime" href="/service-details/financial-growth">
            <img src={`/assets/images/services/list/${service.image}`} alt={service.alt} />
        </Link>
    );
}

function ServicesArchitecture() {
    return (
        <div className="my-business-service-area tmp-section-gapBottom" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-flex-between">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper text-start mb--10" data-aos="fade-up" data-aos-duration="700">
                                    <span className="subtitle">
                                        <span className="subtitle-text">Our Architecture Services</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    Creative Architecture For Your <br />
                                    Modern Living Spaces
                                </h2>
                            </div>
                            <div className="tmp-load-more d-flex justify-content-center" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                                <Link className="tmp-btn btn-large hover-icon-reverse" href="/service-details/management-leadership">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">View More Services</span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    <div className="col-lg-12">
                        {services.map((service) => (
                            <div className="single-service-list-area" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" key={service.title}>
                                <div className="row g-5 align-items-center">
                                    {service.reverse ? (
                                        <>
                                            <div className="col-lg-6 order-2 order-lg-1 order-md-2 order-sm-2">
                                                <ServiceContent service={service} />
                                            </div>
                                            <div className="col-lg-6 order-1 order-lg-2 order-md-1 order-sm-1">
                                                <ServiceImage service={service} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-lg-6">
                                                <ServiceImage service={service} />
                                            </div>
                                            <div className="col-lg-6">
                                                <ServiceContent service={service} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesArchitecture;
