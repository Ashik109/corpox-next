import Link from 'next/link'
const services = [
    {
        icon: "/assets/images/services/icons/04.png",
        title: "Design",
        description: "There are many variations variations of passages of Lorem available.",
    },
    {
        icon: "/assets/images/services/icons/02.png",
        title: "Team",
        description: "Passages there are many variations variations of of Lorem available.",
    },
    {
        icon: "/assets/images/services/icons/03.png",
        title: "Application",
        description: "Variations There are many variations of passages of Lorem available.",
    },
    {
        icon: "/assets/images/services/icons/01.png",
        title: "Support",
        description: "Variations There are many variations of passages of Lorem available.",
    },
    {
        icon: "/assets/images/services/icon-01.png",
        title: "Office",
        description: "Office are many variations variations of passages of Lorem available.",
    },
    {
        icon: "/assets/images/services/icon-02.png",
        title: "Web Award",
        description: "Web App there are many variations variations of of Lorem available.",
    },
    {
        icon: "/assets/images/services/icons/06.png",
        title: "Call Center",
        description: "Call Center are many variations of passages passages of Lorem of Lorem available.",
    },
    {
        icon: "/assets/images/services/icons/05.png",
        title: "Managemenet",
        description: "Managemenet are many variations of passages of Lorem available.",
    },
];

function ServicesCreativeAgency() {
    return (
        <div className="tmp-service-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center" data-aos="fade-up" data-aos-duration="700">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">What we can do for you</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Large Variety of Services.</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available,
                                <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 service-wrapper mt--10">
                    {services.map((service, index) => (
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={index % 4 === 0 ? undefined : `${(index % 4) * 100}`}
                            key={service.title}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <Link href="/service/management-leadership">{service.title}</Link>
                                    </h4>
                                    <p className="description mb--0">{service.description}</p>
                                    <div className="discover-btn mt--20">
                                        <Link className="tmp-btn round btn-small btn-border hover-icon-reverse" href="/service/financial-growth">
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
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesCreativeAgency;
