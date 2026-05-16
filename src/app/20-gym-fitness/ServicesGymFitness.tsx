const services = [
    {
        icon: "07.png",
        title: "Personal Training",
        front: "Customized workout plans designed to improve strength, endurance, flexibility and overall physical performance.",
        back: "One-on-one personal training sessions focused on achieving your fitness goals safely and effectively.",
        delay: 200,
    },
    {
        icon: "08.png",
        title: "Strength Training",
        front: "Professional strength programs using modern equipment to help build muscle and increase power.",
        back: "Our structured strength training sessions are suitable for beginners and advanced athletes alike.",
        delay: 400,
    },
    {
        icon: "09.png",
        title: "Fitness Guidance",
        front: "Expert guidance and motivation to keep you consistent, focused and progressing every step.",
        back: "Our trainers provide continuous fitness guidance to help you stay on track and avoid injuries.",
        delay: 600,
    },
];

function ServicesGymFitness() {
    return (
        <div className="latest-service-area tmp-section-gap">
            <div className="container">
                <div className="row g-5 service-wrapper">
                    {services.map((service) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="slide-up" data-aos-delay={service.delay} data-aos-duration="700" key={service.title}>
                            <div className="service-feature-main-wrapper-splash">
                                <div className="inner">
                                    <div className="front-service-feature">
                                        <div className="service-small-default service service__style--1 bg-color-card radius text-center tmponhover">
                                            <div className="icon">
                                                <img src={`/assets/images/services/icons/${service.icon}`} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title w-600">
                                                    <a href="#">{service.title}</a>
                                                </h4>
                                                <p className="description mb--0">{service.front}</p>
                                            </div>
                                            <div className="shape-service-1">
                                                <img src="/assets/images/services/shape/01.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="back-service-feature">
                                        <div className="service-small-default service service__style--1 bg-color-card radius text-center tmponhover">
                                            <div className="content">
                                                <h4 className="title w-600">
                                                    <a href="#">{service.title}</a>
                                                </h4>
                                                <p className="description mb--0">{service.back}</p>
                                                <a className="btn-read-more mt--10 d-block" href="/service/management-leadership">
                                                    <span>Read More</span>
                                                </a>
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

export default ServicesGymFitness;
