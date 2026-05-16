import Link from "next/link";
import BusinessRotatingWords from "../08-business/BusinessRotatingWords";
import CountUpAiAgency from "./CountUpAiAgency";

function BannerAiAgency() {
    return (
        <div className="ai-agency-demo-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <div className="banner-top-style">
                                <div className="left">
                                    <img src="/assets/images/icons/ai-banner.svg" alt="" />
                                    <span>What&apos;s new</span>
                                </div>
                                <div className="right">
                                    <p>New in Smart Digital Transformation</p>
                                    <i className="feather-arrow-right" />
                                </div>
                            </div>
                            <h1 className="title">
                                Transform your business <br /> with the <BusinessRotatingWords words={["Power of AI", "Intelligence", "Possibilities"]} />
                            </h1>
                            <p className="disc">
                                In a world where cyberattacks are becoming more sophisticated, your business deserves the best protection. Our expert team leverages cutting-edge technology.
                            </p>
                            <div className="button-group mt--35">
                                <Link className="tmp-btn round hover-icon-reverse" href="/pricing-three">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Purchase Now</span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                    </span>
                                </Link>
                                <Link className="tmp-btn btn-border round hover-icon-reverse" href="/contact">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Contact Us</span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                            <div className="trusted-client-wrapper mt--30">
                                <p>
                                    Trusted by <CountUpAiAgency value={39000} />+ Satisfied Users
                                </p>
                                <div className="stars-wrapper">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img src="/assets/images/icons/star.svg" alt="" key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-top-blur" />
            <div className="left-top-blur" />
        </div>
    );
}

export default BannerAiAgency;
