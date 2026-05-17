import Link from 'next/link'
import RealEstateOdometer from "../16-real-estate-consulting/RealEstateOdometer";

const avatars = ["tooltip-01.png", "tooltip-02.png", "tooltip-03.png"];

function AboutMedical() {
    return (
        <div className="about-area about-style-4 tmp-section-gap">
            <div className="container">
                <div className="row row--5 align-items-center">
                    <div className="col-lg-7 pr--40 pr_sm--0">
                        <div className="about-2-thumbnail-left-wrapper">
                            <div className="single-thumbnail invers-anime">
                                <img src="/assets/images/about/16.webp" alt="about" />
                            </div>
                            <div className="single-thumbnail invers-anime mt--80">
                                <img src="/assets/images/about/17.webp" alt="about" />
                                <div className="video-icon">
                                    <Link className="tmp-btn rounded-player popup-video" href="/assets/images/video/01.mp4">
                                        <span>
                                            <i className="feather-play" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute-rating-area images-left-right-float image">
                                <div className="stars-area">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img src="/assets/images/icons/stars.svg" alt="" key={index} />
                                    ))}
                                    <span>(4.99+)</span>
                                </div>
                                <p>
                                    <RealEstateOdometer value={599} /> Review form our <br /> Best Patients
                                </p>
                                <div className="profile-share justify-content-start">
                                    {avatars.map((avatar) => (
                                        <Link href="#" className="avatar" data-tooltip="Mark" key={avatar}>
                                            <img src={`/assets/images/testimonial/${avatar}`} alt="" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <div className="tmp-section-title-border text-start hero__sub-title">
                                    <div className="pres-line-separator-wrapper mb--10">
                                        <span className="subtitle">
                                            <span className="number">01</span> <span className="subtitle-text">ABOUT US</span>
                                        </span>
                                        <div className="line-separator" />
                                    </div>
                                </div>
                                <h2 className="title w-700 tmp-title-split">Compassionate Healthcare Solutions</h2>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <i className="feather-check" />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Comprehensive Patient Care</h4>
                                            <p className="text">Our team of experts ensures personalized treatment and continuous support for every patient.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="feather-check" />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">State-of-the-Art Facilities</h4>
                                            <p className="text">We use the latest medical technologies and modern healthcare facilities to provide accurate diagnosis and treatment.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="about-btn mt--30">
                                    <Link className="tmp-btn round text-center" href="/about">
                                        Learn More About Our Clinic
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

export default AboutMedical;
