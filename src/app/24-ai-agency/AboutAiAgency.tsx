import Link from "next/link";
import CountUpAiAgency from "./CountUpAiAgency";

const features = ["AI-Powered Automation", "24/7 Smart Support"];
const tooltips = [
    ["tooltip-01.png", "AI Engineer"],
    ["tooltip-02.png", "Data Scientist"],
    ["tooltip-03.png", "ML Expert"],
] as const;

function AboutAiAgency() {
    return (
        <div className="tmp-about-area tmp-section-gapBottom mt--20">
            <div className="container">
                <div className="row g-5 row--40 align-items-center">
                    <div className="col-lg-6 order-2 order-xl-1">
                        <div className="content">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper mb--10 tmp-title-split">
                                    <span className="subtitle">
                                        <span className="number">01</span>
                                        <span className="subtitle-text">About Us</span>
                                    </span>
                                    <div className="line-separator" />
                                </div>
                                <h2 className="title w-700 mb--30 tmp-title-split">
                                    Meet the Minds Powering <br />
                                    Intelligent AI Solutions.
                                </h2>
                                <p className="tmp-title-split-p">
                                    We are a forward-thinking AI agency focused on building smart, scalable <br />
                                    and data-driven solutions that accelerate business growth.
                                </p>
                                <div className="why-choose-feature">
                                    {features.map((feature) => (
                                        <div className="single tmponhover" key={feature}>
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="tmp-profile-box">
                                    <div className="profile-share justify-content-start">
                                        {tooltips.map(([image, tooltip]) => (
                                            <a href="#" className="avatar" data-tooltip={tooltip} tabIndex={0} key={tooltip}>
                                                <img src={`/assets/images/testimonial/${image}`} alt="" />
                                            </a>
                                        ))}
                                        <div className="more-author-text">
                                            <p className="subtitle">
                                                <a className="btn-read-more" href="#">
                                                    <span>Explore Our Journey</span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="read-more-btn btn-group gap-4 mt--40">
                                    <Link className="tmp-btn btn-primary round btn-large" href="/about">
                                        More About Us
                                    </Link>
                                    <Link className="tmp-btn btn-border round btn-large" href="/contact">
                                        Talk With Experts
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
                                        <img className="radius-small" src="/assets/images/ai-agency/about/01.webp" alt="AI experts collaborating" />
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
                                        {tooltips.map(([image]) => (
                                            <a href="#" className="avatar" data-tooltip="Client Review" tabIndex={0} key={image}>
                                                <img src={`/assets/images/testimonial/${image}`} alt="" />
                                            </a>
                                        ))}
                                    </div>
                                    <div className="stars-area">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <img src="/assets/images/icons/stars.svg" alt="" key={index} />
                                        ))}
                                    </div>
                                    <p>
                                        <CountUpAiAgency value={120} />+ Trusted Reviews
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

export default AboutAiAgency;
