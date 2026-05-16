const services = [
    ["01.png", "Keynote Sessions", "Experience inspiring talks from industry leaders and visionaries who shape the future of business and technology.", "Join thought-provoking sessions led by top experts to gain actionable insights and fresh perspectives."],
    ["02.png", "Networking", "Connect with professionals, innovators, and peers from around the world to expand your network and collaborations.", "Engage in interactive sessions, meet like-minded professionals, and create lasting business relationships."],
    ["03.png", "Workshops & Panels", "Participate in hands-on workshops and panel discussions to gain practical knowledge and insights.", "Learn directly from experts in specialized sessions designed to enhance skills and knowledge."],
    ["04.png", "Event Resources", "Access event materials, presentations, and recordings to maximize your learning and participation.", "Get exclusive access to all conference resources, helping you apply insights effectively after the event."],
] as const;

function ServicesEvent() {
    return (
        <div className="latest-service-area tmp-section-gapTop">
            <div className="container">
                <div className="row g-5 service-wrapper">
                    {services.map(([icon, title, frontText, backText], index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="slide-up" data-aos-duration="700" data-aos-delay={(index + 1) * 200} key={title}>
                            <div className="service-feature-main-wrapper-splash">
                                <div className="inner">
                                    <div className="front-service-feature">
                                        <div className="service-small-default service service__style--1 bg-color-card radius text-center tmponhover">
                                            <div className="icon">
                                                <img src={`/assets/images/services/icons/${icon}`} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title w-600">
                                                    <a href="#">{title}</a>
                                                </h4>
                                                <p className="description mb--0">{frontText}</p>
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
                                                    <a href="#">{title}</a>
                                                </h4>
                                                <p className="description mb--0">{backText}</p>
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

export default ServicesEvent;
