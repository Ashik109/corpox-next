const features = [
    {
        title: "Delivering customized consulting",
        text: "Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum.",
    },
    {
        title: "Building long-term relationships",
        text: "Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum",
    },
];

function AboutBusinessFluid() {
    return (
        <div className="tmp-about-area-fluid about-business-8">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="why-choose-us-thumbnail invers-anime">
                            <img loading="lazy" src="/assets/images/about/05.webp" alt="why" />
                        </div>
                    </div>
                    <div className="col-lg-6 pl--40 pl_sm--10 mt_md--50 mt_sm--50">
                        <div className="content">
                            <div className="tmp-section-title-border text-start about-style-4">
                                <div className="pres-line-separator-wrapper mb--10">
                                    <span className="subtitle">
                                        <span className="number">01</span>{" "}
                                        <span className="subtitle-text">Make Your Best Insurance With Us</span>
                                    </span>
                                    <div className="line-separator" />
                                </div>
                                <h2 className="title w-700 mb--30 tmp-title-split">
                                    Smart Solutions to Elevate <br /> Your Global Business
                                </h2>
                                <ul className="feature-list">
                                    {features.map((feature) => (
                                        <li key={feature.title}>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">{feature.title}</h4>
                                                <p className="text">{feature.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="read-more-btn mt--40">
                                    <a className="tmp-btn icon-hover text-center" href="/contact">
                                        <span className="btn-text">Contact Us</span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBusinessFluid;
