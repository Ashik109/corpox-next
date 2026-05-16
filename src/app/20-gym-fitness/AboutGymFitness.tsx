import RealEstateOdometer from "../16-real-estate-consulting/RealEstateOdometer";

const avatars = ["tooltip-01.png", "tooltip-02.png", "tooltip-03.png"];

function AboutGymFitness() {
    return (
        <div className="tmp-about-area tmp-section-gapBottom mt--20">
            <div className="container">
                <div className="row g-5 row--40 align-items-center">
                    <div className="col-lg-6 order-2 order-xl-1">
                        <div className="content">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper mb--10 tmp-title-split">
                                    <span className="subtitle">
                                        <span className="number">01</span> <span className="subtitle-text">About Us</span>
                                    </span>
                                    <div className="line-separator" />
                                </div>
                                <h2 className="title w-700 mb--30 tmp-title-split">
                                    Meet the Experts Behind <br /> Next Level of Success.
                                </h2>
                                <p className="tmp-title-split-p">
                                    We are an innovative and results-driven business agency committed to <br /> delivering smart, effective solutions tailored to your unique needs.
                                </p>
                                <div className="why-choose-feature">
                                    {["Rapid Revenue Growth", "24/7 Assistance"].map((feature) => (
                                        <div className="single tmponhover" key={feature}>
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="tmp-profile-box">
                                    <div className="profile-share justify-content-start">
                                        {avatars.map((avatar, index) => (
                                            <a href="#" className="avatar" data-tooltip={index === 0 ? "Mark JOrdan" : index === 1 ? "Mark" : "Jordan"} key={avatar}>
                                                <img src={`/assets/images/testimonial/${avatar}`} alt="" />
                                            </a>
                                        ))}
                                        <div className="more-author-text">
                                            <p className="subtitle">
                                                <a className="btn-read-more" href="#">
                                                    <span>Check all History</span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="read-more-btn btn-group gap-4 mt--40">
                                    <a className="tmp-btn btn-primary round btn-large" href="/about">
                                        More About Us
                                    </a>
                                    <a className="tmp-btn btn-border round btn-large" href="/contact">
                                        Contact With Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-xl-2 pl--60">
                        <div className="video-btn">
                            <div className="video-popup icon-center about-relative-thumb">
                                <div className="overlay-content">
                                    <div className="thumbnail invers-anime">
                                        <img className="radius-small" src="/assets/images/about/15.webp" alt="Gym training" />
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
                                        {avatars.map((avatar) => (
                                            <a href="#" className="avatar" data-tooltip="Mark" key={`rating-${avatar}`}>
                                                <img src={`/assets/images/testimonial/${avatar}`} alt="" />
                                            </a>
                                        ))}
                                    </div>
                                    <div className="stars-area">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <img src="/assets/images/icons/stars.svg" alt="" key={index} />
                                        ))}
                                    </div>
                                    <p>
                                        <RealEstateOdometer value={100} />+ Review
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutGymFitness;
