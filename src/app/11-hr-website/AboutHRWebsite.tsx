import Link from 'next/link'
import HROdometer from "./HROdometer";

const features = ["Smart Home Design", "Beautiful Scene Around", "Exceptional Lifestyle", "Complete 24/7 Security"];

function AboutHRWebsite() {
    return (
        <div className="about-area about-style-4 tmp-section-gapTop">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail-about-8">
                            <div className="large-image invers-anime">
                                <img src="/assets/images/about/about-10.jpg" alt="" loading="lazy" />
                            </div>
                            <div className="small-iamge-area images-left-right-float">
                                <img src="/assets/images/about/about-12.png" alt="" loading="lazy" />
                                <div className="video-icon">
                                    <Link className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                        <span>
                                            <i className="feather-play" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 pl--60 pl_md--10 pl_sm--10 mt_md--30 mt_sm--30">
                        <div className="about-wrapper-8">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper text-start mb--10">
                                    <span className="subtitle">
                                        <span className="number">03</span>
                                        <span className="subtitle-text">About Us</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    Lets Know <span className="theme-gradient">About</span> Our <br /> Company
                                </h2>
                            </div>
                            <p className="discription">
                                Over <HROdometer value={39000} /> people work for us in more than <HROdometer value={120} /> countries all over the This breadth of global coverage, combined with specialist services
                            </p>
                            <ul className="tmp-list-item-half">
                                {features.map((feature) => (
                                    <li key={feature}>
                                        <div className="icon">
                                            <i className="feather-check" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="quote-area-about tmponhover bg-card mt--30">
                                <p>
                                    &quot;Enimad minim veniam quis nostrud exercitation <br />
                                    llamco laboris. Lorem ipsum dolor sit amet&quot;
                                </p>
                            </div>
                            <Link href="/service/management-leadership" className="tmp-btn btn-primary">
                                Our Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHRWebsite;
