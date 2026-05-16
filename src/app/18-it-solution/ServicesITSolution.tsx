const services = [
    ["01.png", "UI/UX Design", "Strong brand identity, enhance visibility, and build lasting customer trust."],
    ["02.png", "Development", "We provide dedicated assistance, resolve issues deliver exceptional customer."],
    ["03.png", "Data Insights", "We analyze business data, find patterns, give recommendations, and support strategic decisions."],
    ["04.png", "Marketing", "We analyze business data, find patterns, give recommendations, and support strategic decisions."],
] as const;

function ServicesITSolution() {
    return (
        <div className="tmp-service-area tmp-section-gapBottom">
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
                            <h2 className="title w-700 tmp-title-split">Our Top Services.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 service-wrapper mt--10">
                    {services.map(([icon, title, description]) => (
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={title}>
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src={`/assets/images/services/icons/${icon}`} alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/management-leadership">{title}</a>
                                    </h4>
                                    <p className="description mb--0">{description}</p>
                                    <div className="discover-btn mt--30">
                                        <a className="tmp-btn round btn-small btn-border hover-icon-reverse" href="/service/financial-growth">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Discover services</span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right" />
                                                </span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right" />
                                                </span>
                                            </span>
                                        </a>
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

export default ServicesITSolution;
