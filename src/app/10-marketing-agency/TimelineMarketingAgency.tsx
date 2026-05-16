const timelineItems = [
    {
        step: "01",
        title: "Your working processe",
        gradient: "you can present.",
        image: "/assets/images/timeline/timeline-01.jpg",
    },
    {
        step: "02",
        title: "Boost your brand with",
        gradient: "our strategy.",
        image: "/assets/images/timeline/timeline-02.jpg",
    },
    {
        step: "03",
        title: "Design your future with",
        gradient: "smart planning.",
        image: "/assets/images/timeline/timeline-03.jpg",
    },
];

const workingList = ["Gain your works.", "Working process.", "Build your website.", "Acquire Knowledge."];

function TimelineMarketingAgency() {
    return (
        <div className="tmp-timeline-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="section-title text-center"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <h4 className="subtitle">Business process</h4>
                            <h2 className="title w-600 mb--20 tmp-title-split">Our Business Process.</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available, <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-timeline-wrapper timeline-style-one position-relative">
                            <div className="timeline-line" />
                            {timelineItems.map((item, itemIndex) => (
                                <div className={`single-timeline ${itemIndex === 0 ? "mt--30" : "mt--50"}`} key={item.step}>
                                    <div className="timeline-dot">
                                        <div className="time-line-circle" />
                                    </div>
                                    <div className="single-content tmponhover">
                                        <div className="inner">
                                            <div className="row row--30 align-items-center">
                                                <div className="col-lg-6 mt_md--40 mt_sm--40 order-2 order-lg-1">
                                                    <div className="content">
                                                        <div className="tmp-section-title-border text-start">
                                                            <div className="pres-line-separator-wrapper mb--20">
                                                                <span className="subtitle">
                                                                    <span className="number-step">{item.step}</span>{" "}
                                                                    <span className="subtitle-text">Step</span>
                                                                </span>
                                                                <div className="line-separator" />
                                                            </div>
                                                            <h2 className="title w-700">
                                                                {item.title}{" "}
                                                                <span className="theme-gradient">{item.gradient}</span>
                                                            </h2>
                                                        </div>
                                                        <div className="row row--30 mt--40">
                                                            {workingList.map((title, index) => (
                                                                <div className="col-lg-6 col-md-6 col-12" key={title}>
                                                                    <div className="working-list">
                                                                        <h5
                                                                            className="working-title mb_sm--5"
                                                                            data-aos="fade-up"
                                                                            data-aos-duration="700"
                                                                            data-aos-delay={300 + index * 50}
                                                                        >
                                                                            {title}
                                                                        </h5>
                                                                        <p
                                                                            data-aos="fade-up"
                                                                            data-aos-duration="700"
                                                                            data-aos-delay={400 + index * 50}
                                                                        >
                                                                            Lorem ipsum dolor sit amet at consectetur adipisicing
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div
                                                            className="read-morebtn"
                                                            data-aos="fade-up"
                                                            data-aos-duration="700"
                                                            data-aos-delay="300"
                                                        >
                                                            <a className="tmp-btn round icon-hover" href="#">
                                                                <span className="btn-text">Get Started Now</span>
                                                                <span className="btn-icon">
                                                                    <i className="feather-arrow-right" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 order-1 order-lg-2">
                                                    <div className="thumbnail">
                                                        <img loading="lazy" className="w-100" src={item.image} alt="Corporate Html Template" />
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
            </div>
        </div>
    );
}

export default TimelineMarketingAgency;
