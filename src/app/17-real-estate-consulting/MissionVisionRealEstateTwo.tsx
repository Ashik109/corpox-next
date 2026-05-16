const sections = [
    {
        label: "ABOUT US",
        title: (
            <>
                Corpox specializes in <br /> Best Real state Business.
            </>
        ),
        image: "about-10.png",
        reverse: false,
        features: ["A strong business grows", "A good traveler has no fixed plans"],
    },
    {
        label: "Our Mission",
        title: (
            <>
                We help you buy or sell <br /> properties with ease
            </>
        ),
        image: "about-11.png",
        reverse: true,
        features: ["A strong business grows", "A smart investor follows vision trends."],
    },
];

function Media({ image }: { image: string }) {
    return (
        <div className="col-lg-6">
            <div className="video-btn">
                <div className="video-popup icon-center">
                    <div className="overlay-content">
                        <div className="thumbnail image-about-realstate jarallax">
                            <img className="radius-small jarallax-img rts-reveal-image-one" src={`/assets/images/about/${image}`} alt="Corporate Image" />
                        </div>
                        <div className="video-icon">
                            <a className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                <span>
                                    <i className="feather-play" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="video-lightbox-wrapper" />
            </div>
        </div>
    );
}

function Content({ section }: { section: (typeof sections)[number] }) {
    return (
        <div className={`col-lg-6 mt_md--40 mt_sm--40 ${section.reverse ? "mb_md--40 mb_sm--30" : ""}`}>
            <div className="content">
                <div className="inner">
                    <div className="tmp-section-title-border text-start">
                        <div className="pres-line-separator-wrapper mb--10" data-aos="slide-up" data-aos-duration="700">
                            <span className="subtitle">
                                <span className="number">01</span> <span className="subtitle-text">{section.label}</span>
                            </span>
                            <div className="line-separator" />
                        </div>
                    </div>
                    <h3 className="title w-700" data-aos="slide-up" data-aos-delay="200" data-aos-duration="700">
                        {section.title}
                    </h3>
                    <ul className="feature-list">
                        {section.features.map((feature) => (
                            <li data-aos="slide-up" key={`${section.label}-${feature}`}>
                                <div className="icon">
                                    <i className="feather-check" />
                                </div>
                                <div className="title-wrapper">
                                    <h4 className="title">{feature}</h4>
                                    <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="about-btn mt--30" data-aos="slide-up">
                        <a className="tmp-btn round text-center" href="/about">
                            About Our Corpox
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MissionVisionRealEstateTwo() {
    return (
        <>
            {sections.map((section) => (
                <div className="about-area about-style-4 tmp-section-gapBottom" key={section.label}>
                    <div className="container">
                        <div className="row row--40 align-items-center">
                            {section.reverse ? (
                                <>
                                    <Content section={section} />
                                    <Media image={section.image} />
                                </>
                            ) : (
                                <>
                                    <Media image={section.image} />
                                    <Content section={section} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MissionVisionRealEstateTwo;
