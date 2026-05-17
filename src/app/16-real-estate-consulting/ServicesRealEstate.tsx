import Link from 'next/link'
const services = [
    ["01.png", "Design", "There are many variations variations of passages of Lorem available."],
    ["02.png", "Team", "Passages there are many variations variations of of Lorem available."],
    ["03.png", "Application", "Variations There are many variations of passages of Lorem available."],
    ["04.png", "Support", "There are many variations of passages of Lorem available pro ability."],
] as const;

function ServicesRealEstate() {
    return (
        <div className="tmp-service-area mt-dec-250">
            <div className="container">
                <div className="row g-5 service-wrapper mt--10">
                    {services.map(([icon, title, text]) => (
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={title}>
                            <div className="service service__style--1 bg-color-card service-narrow radius text-center tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src={`/assets/images/services/icons/${icon}`} alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <Link href="/service/management-leadership">{title}</Link>
                                    </h4>
                                    <p className="description mb--0">{text}</p>
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

export default ServicesRealEstate;
