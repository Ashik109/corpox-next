import Link from 'next/link'
const featureServices = [
    {
        icon: "/assets/images/services/icons/01.png",
        title: "Brand Building",
        front: "Optimized for a smaller build size, faster dev compilation and dozens of other improvements.",
        back: "Optimized for a smaller build size, faster dev compilation and dozens of other improvement.",
    },
    {
        icon: "/assets/images/services/icons/02.png",
        title: "Client Support",
        front: "Our template is full perfect for all device. You can visit our template all device easily.",
        back: "Our template is perfectly responsive and fully optimized for all devices, ensuring a seamless browsing.",
    },
    {
        icon: "/assets/images/services/icons/03.png",
        title: "Data Insights",
        front: "We are provide 24 hours support for all clients.You can purchase without hesitation.",
        back: "We provide 24/7 dedicated support for all our clients, ensuring that any issues or questions are",
    },
    {
        icon: "/assets/images/services/icons/04.png",
        title: "Easy to Use",
        front: "Create your own custom template or section by copying, pasting, and assembling.",
        back: "Create your own custom pasting, and assembling - designed to be super flexible",
    },
];

function LatestServiceDigitalAgency() {
    return (
        <div className="latest-service-area tmp-section-gapTop">
            <div className="container">
                <div className="row g-5 service-wrapper">
                    {featureServices.map((service, index) => (
                        <div
                            className="col-lg-3 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={200 + index * 200}
                            key={service.title}
                        >
                            <div className="service-feature-main-wrapper-splash">
                                <div className="inner">
                                    <div className="front-service-feature">
                                        <div className="service-small-default service service__style--1 bg-color-card radius text-center tmponhover">
                                            <div className="icon">
                                                <img src={service.icon} alt="Corporate Images" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title w-600">
                                                    <Link href="#">{service.title}</Link>
                                                </h4>
                                                <p className="description mb--0">{service.front}</p>
                                            </div>
                                            <div className="shape-service-1">
                                                <img src="/assets/images/services/shape/01.png" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="back-service-feature">
                                        <div className="service-small-default service service__style--1 bg-color-card radius text-center tmponhover">
                                            <div className="content">
                                                <h4 className="title w-600">
                                                    <Link href="#">{service.title}</Link>
                                                </h4>
                                                <p className="description mb--0">{service.back}</p>
                                                <Link className="btn-read-more mt--10 d-block" href="/service/management-leadership">
                                                    <span>Read More</span>
                                                </Link>
                                            </div>
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

export default LatestServiceDigitalAgency;
