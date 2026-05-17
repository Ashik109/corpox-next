import Link from 'next/link'
import AgencyThirteenOdometer from "./AgencyThirteenOdometer";

const avatars = ["tooltip-01.png", "tooltip-02.png", "tooltip-03.png"];

function ProfileAvatars({ centered = false }: { centered?: boolean }) {
    return (
        <div className={`profile-share ${centered ? "justify-content-center" : "justify-content-start"}`}>
            {avatars.map((avatar) => (
                <Link href="#" className="avatar" data-tooltip="Mark" tabIndex={0} key={avatar}>
                    <img src={`/assets/images/testimonial/${avatar}`} alt="education" />
                </Link>
            ))}
        </div>
    );
}

function AboutAgencyThirteen() {
    return (
        <div className="tmp-about-area tmp-section-gapTop mt--20">
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
                                    Meet the Experts Behind <br />
                                    Next Level of Success.
                                </h2>
                                <p className="tmp-title-split-p">
                                    We are an innovative and results-driven business agency committed to <br />
                                    delivering smart, effective solutions tailored to your unique needs.
                                </p>
                                <div className="why-choose-feature">
                                    {["Rapid Revenue Growth", "24/7 Assistance"].map((item) => (
                                        <div className="single tmponhover" key={item}>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="tmp-profile-box">
                                    <ProfileAvatars />
                                </div>
                                <div className="read-more-btn btn-group gap-4 mt--40">
                                    <Link className="tmp-btn btn-primary round btn-large" href="/about">
                                        More About Us
                                    </Link>
                                    <Link className="tmp-btn btn-border round btn-large" href="/contact">
                                        Contact With Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-xl-2 pl--60">
                        <div className="video-btn">
                            <div className="video-popup icon-center about-relative-thumb">
                                <div className="overlay-content">
                                    <div className="thumbnail invers-anime">
                                        <img className="radius-small" src="/assets/images/about/03.webp" alt="Corporate" />
                                    </div>
                                    <div className="video-icon">
                                        <Link className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                            <span>
                                                <i className="feather-play" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute-rating-area images-left-right-float image">
                                    <ProfileAvatars />
                                    <div className="stars-area">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <img src="/assets/images/icons/stars.svg" alt="star" key={star} />
                                        ))}
                                    </div>
                                    <p>
                                        <AgencyThirteenOdometer value={100} />+ Review
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

export { ProfileAvatars };
export default AboutAgencyThirteen;
