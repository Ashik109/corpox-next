const features = [
    ["Inspiring keynote sessions", "Gain insights from renowned speakers through impactful talks and expert-led discussions."],
    ["Networking & collaboration", "Connect with professionals, build meaningful relationships, and expand your network."],
] as const;

function AboutEvent() {
    return (
        <div className="tmp-about-area tmp-section-gapTop">
            <div className="container">
                <div className="row g-5 row--40 align-items-center invers-arrange-container">
                    <div className="col-lg-6 invers-arrange-item">
                        <div className="video-btn">
                            <div className="video-popup icon-center about-relative-thumb">
                                <div className="overlay-content">
                                    <div className="thumbnail invers-anime">
                                        <img className="radius-small" src="/assets/images/about/25.webp" alt="Corporate event audience" />
                                    </div>
                                    <div className="video-icon">
                                        <a className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                            <span>
                                                <i className="feather-play" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute-rating-area images-left-right-float image">
                                    <div className="profile-share justify-content-start">
                                        {["01", "02", "03"].map((image) => (
                                            <a href="#" className="avatar" data-tooltip="Attendee" tabIndex={0} key={image}>
                                                <img src={`/assets/images/testimonial/tooltip-${image}.png`} alt="Attendee" />
                                            </a>
                                        ))}
                                    </div>
                                    <div className="stars-area">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <img src="/assets/images/icons/stars.svg" alt="Rating star" key={star} />
                                        ))}
                                    </div>
                                    <p>
                                        <span className="odometer" data-count="999">
                                            999
                                        </span>
                                        + Review
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 invers-arrange-item">
                        <div className="content">
                            <div className="tmp-section-title-border text-start about-style-4">
                                <div className="pres-line-separator-wrapper mb--10">
                                    <span className="subtitle">
                                        <span className="number">01</span>
                                        <span className="subtitle-text">About The Event</span>
                                    </span>
                                    <div className="line-separator" />
                                </div>
                                <h2 className="title w-700 mb--30 tmp-title-split">Connecting Minds for Meaningful Experiences</h2>
                                <p className="tmp-title-split-p">Our conference brings together industry leaders, innovators, and professionals to share knowledge, explore new ideas, and build connections that shape the future of business and technology.</p>
                                <ul className="feature-list">
                                    {features.map(([title, text]) => (
                                        <li key={title}>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">{title}</h4>
                                                <p className="text">{text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="read-more-btn mt--40">
                                    <a className="tmp-btn round btn-large btn-border" href="/contact">
                                        Join The Event
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

export default AboutEvent;
