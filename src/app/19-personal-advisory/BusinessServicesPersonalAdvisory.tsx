import Link from 'next/link'
const businessServices = [
    {
        image: "01.webp",
        icon: "01.svg",
        title: "Business Growth",
        text: "My business growth service helps companies expand faster with strategic planning, marketing solutions, and expert guidance to achieve sustainable success.",
        reverse: false,
    },
    {
        image: "02.webp",
        icon: "02.svg",
        title: "Audit Consulting",
        text: "My audit consulting service ensures transparency, compliance, and financial accuracy with expert guidance to optimize performance and reduce risks.",
        reverse: true,
    },
    {
        image: "03.webp",
        icon: "03.svg",
        title: "Financial Idea",
        text: "My Financial Idea service helps companies expand faster with strategic planning, marketing solutions, and expert guidance to achieve sustainable success.",
        reverse: false,
    },
    {
        image: "04.webp",
        icon: "04.svg",
        title: "Minimal Achievement",
        text: "my minimal achievement strategy focuses on steady growth, smart resource use, and sustainable progress to reach goals with efficiency.",
        reverse: true,
    },
] as const;

function ServiceContent({ icon, title, text }: { icon: string; title: string; text: string }) {
    return (
        <div className="inner-content">
            <div className="head">
                <div className="icon">
                    <img src={`/assets/images/services/list/icon/${icon}`} alt="Business" />
                </div>
                <h6 className="title">{title}</h6>
            </div>
            <p className="disc">{text}</p>
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

function ServiceImage({ image }: { image: string }) {
    return (
        <Link href="/service-details/financial-growth" className="thumbnail-service-list invers-anime">
            <img src={`/assets/images/services/list/${image}`} alt="Business consulting" />
        </Link>
    );
}

function BusinessServicesPersonalAdvisory() {
    return (
        <div className="my-business-service-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-flex-between">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper text-start mb--10">
                                    <span className="subtitle">
                                        <span className="subtitle-text">My Business Services</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    Innovative Service For Your <br /> Business Solution
                                </h2>
                            </div>
                            <div className="tmp-load-more d-flex justify-content-center">
                                <Link className="tmp-btn btn-large hover-icon-reverse" href="#">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">View More Service</span>
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
                        {businessServices.map((service) => (
                            <div className="single-service-list-area" key={service.title}>
                                <div className="row g-5 align-items-center">
                                    {service.reverse ? (
                                        <>
                                            <div className="col-lg-6 order-2 order-lg-1 order-md-2 order-sm-2">
                                                <ServiceContent icon={service.icon} title={service.title} text={service.text} />
                                            </div>
                                            <div className="col-lg-6 order-1 order-lg-2 order-md-1 order-sm-1">
                                                <ServiceImage image={service.image} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-lg-6">
                                                <ServiceImage image={service.image} />
                                            </div>
                                            <div className="col-lg-6">
                                                <ServiceContent icon={service.icon} title={service.title} text={service.text} />
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

export default BusinessServicesPersonalAdvisory;
