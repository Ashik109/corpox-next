import Link from 'next/link'
import AgencyThirteenOdometer from "./AgencyThirteenOdometer";
import { ProfileAvatars } from "./AboutAgencyThirteen";

const features = [
    ["Delivering customized consulting", "Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore."],
    ["Building long-term relationships", "Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore."],
];

function MissionAgencyThirteen() {
    return (
        <div className="tmp-about-area tmp-section-gapTop">
            <div className="container">
                <div className="row g-5 row--40 align-items-center">
                    <div className="col-lg-6">
                        <div className="video-btn">
                            <div className="video-popup icon-center about-relative-thumb">
                                <div className="overlay-content">
                                    <div className="thumbnail invers-anime">
                                        <img className="radius-small" src="/assets/images/about/04.webp" alt="Corporate" />
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
                                        <AgencyThirteenOdometer value={999} />+ Review
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="tmp-section-title-border text-start about-style-4">
                                <div className="pres-line-separator-wrapper mb--10">
                                    <span className="subtitle">
                                        <span className="number">01</span> <span className="subtitle-text">Our Mission</span>
                                    </span>
                                    <div className="line-separator" />
                                </div>
                                <h2 className="title w-700 mb--30 tmp-title-split">Empowering Businesses Through Strategy</h2>
                                <p className="tmp-title-split-p">At Corpox, our mission is to empower businesses with insightful strategies, data-driven solutions, and expert guidance that foster sustainable growth and operational excellence</p>
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
                                    <Link className="tmp-btn round btn-large btn-border" href="/contact">
                                        Lets Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionAgencyThirteen;
