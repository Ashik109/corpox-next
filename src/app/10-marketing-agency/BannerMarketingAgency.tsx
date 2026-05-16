const bannerList = [
    "Track your teams progress with mobile app.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Your teams progress with mobile app.",
];

function BannerMarketingAgency() {
    return (
        <div className="slider-area slider-bg-image slider-style-5 tmp-section-gap">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7 order-2 order-lg-1">
                        <div className="inner text-start">
                            <span className="tmp-badge-2 tmp-title-split">MEET CONSULTING</span>
                            <h1 className="title display-one w-700 tmp-title-split mt--20">
                                Financial Analysis <br />
                                <span className="theme-gradient">Developing Meeting.</span>
                            </h1>
                            <ul className="list-icon">
                                {bannerList.map((item) => (
                                    <li key={item}>
                                        <span className="icon">
                                            <i className="feather-check" />
                                        </span>{" "}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="button-group mt--40 mt_sm--20 justify-content-start">
                                {["Get Started", "Contact Us"].map((label, index) => (
                                    <a
                                        className={`tmp-btn round hover-icon-reverse ${index === 1 ? "btn-border" : ""}`}
                                        href="#"
                                        key={label}
                                    >
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">{label}</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 text-end">
                        <div className="video-btn">
                            <div className="video-popup icon-center">
                                <div className="overlay-content">
                                    <div className="thumbnail">
                                        <img
                                            className="radius-10 tmp-title-split"
                                            src="/assets/images/about/about-9.jpg"
                                            alt="Banner Images"
                                        />
                                    </div>
                                    <div className="video-icon">
                                        <a
                                            className="tmp-btn rounded-player popup-video"
                                            href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                        >
                                            <span>
                                                <i className="feather-play" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tmp-star-images right-left">
                <img src="/assets/images/shape/stars2.svg" alt="Banner Images" />
            </div>
        </div>
    );
}

export default BannerMarketingAgency;
