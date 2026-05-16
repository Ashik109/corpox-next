import BusinessCoachOdometer from "./BusinessCoachOdometer";

const features = [
    {
        title: "A good traveler has no fixed plans",
        text: "Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.",
    },
    {
        title: "A good traveler has no fixed plans",
        text: "Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.",
    },
];

function Stars() {
    return (
        <div className="stars-area">
            {[1, 2, 3, 4, 5].map((star) => (
                <img src="/assets/images/icons/stars.svg" alt="small-image" key={star} />
            ))}
            <span>(4.99+)</span>
        </div>
    );
}

function ProfileShare() {
    return (
        <div className="profile-share justify-content-start">
            {["tooltip-01.png", "tooltip-02.png", "tooltip-03.png"].map((image, index) => (
                <a href="#" className="avatar" data-tooltip={["Mark JOrdan", "Mark", "Jordan"][index]} key={image}>
                    <img src={`/assets/images/testimonial/${image}`} alt="education" />
                </a>
            ))}
        </div>
    );
}

function AboutBusinessCoach() {
    return (
        <div className="about-area about-style-4 tmp-section-gapBottom">
            <div className="container">
                <div className="row row--5 align-items-center">
                    <div className="col-lg-7 pr--40 pr_sm--0">
                        <div className="about-2-thumbnail-left-wrapper">
                            <div className="single-thumbnail invers-anime">
                                <img src="/assets/images/about/01.webp" alt="about" />
                            </div>
                            <div className="single-thumbnail invers-anime mt--80">
                                <img src="/assets/images/about/02.webp" alt="about" />
                                <div className="video-icon">
                                    <a className="tmp-btn rounded-player popup-video" href="/assets/images/video/01.mp4">
                                        <span>
                                            <i className="feather-play" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute-rating-area images-left-right-float image">
                                <Stars />
                                <p>
                                    <BusinessCoachOdometer value={599} /> Review form our <br /> Best Clients
                                </p>
                                <ProfileShare />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <div className="tmp-section-title-border text-start hero__sub-title">
                                    <div className="pres-line-separator-wrapper mb--10">
                                        <span className="subtitle">
                                            <span className="number">01</span> <span className="subtitle-text">ABOUT BUSINESS</span>
                                        </span>
                                        <div className="line-separator" />
                                    </div>
                                </div>
                                <h2 className="title w-700 tmp-title-split">Clever and results driven business agency.</h2>
                                <ul className="feature-list">
                                    {features.map((feature, index) => (
                                        <li key={`${feature.title}-${index}`}>
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
                                <div className="about-btn mt--30">
                                    <a className="tmp-btn round text-center" href="#">
                                        About Our Corpox
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

export default AboutBusinessCoach;
