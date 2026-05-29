import Link from 'next/link'
const services = [
    ["feather-code", "Design", "There are many variations variations of passages of Lorem available."],
    ["feather-cast", "Team", "Passages there are many variations variations of of Lorem available."],
    ["feather-map", "Application", "Variations There are many variations of passages of Lorem available."],
    ["feather-phone-call", "Support", "There are many variations of passages of Lorem available pro Variations There are many."],
    ["feather-activity", "Office", "There are many variations variations of passages of Lorem available."],
    ["feather-award", "Web Award", "Passages there are many variations variations of of Lorem available."],
    ["feather-headphones", "Call Center", "Variations There are many variations of passages of Lorem of Lorem available."],
    ["feather-layers", "Managemenet", "There are many variations of passages of Lorem available pro Variations There are many."],
];

function ServicesAgencyThirteen() {
    return (
        <div className="tmp-service-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">04</span>
                                    <span className="subtitle-text">Services</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Large Variety of Services.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 service-wrapper mt--10">
                    {services.map(([icon, title, description], index) => (
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700" data-aos-delay={(index % 4) * 100} key={title}>
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <i className={icon} />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <Link href="/service-details/management-leadership">{title}</Link>
                                    </h4>
                                    <p className="description mb--0">{description}</p>
                                    <div className="discover-btn mt--20">
                                        <Link className="tmp-btn round btn-small btn-border hover-icon-reverse" href="/service-details/financial-growth">
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

export default ServicesAgencyThirteen;
