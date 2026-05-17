"use client";
import Link from 'next/link'


import Slider from "react-slick";

const bannerImages = ["team-04.jpg", "team-05.jpg", "team-06.jpg"];

function BannerBusinessThree() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        cssEase: "linear",
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-area banner-12-shape-controlder slider-style-new height-950 position-relative">
            <div className="container">
                <div className="row row--30 align-items-center pt--30 pt_sm--5 pt_md--5">
                    <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                        <div className="inner text-left">
                            <span className="tmp-badge-3">BUSINESS CONSULTANCY</span>
                            <h1 className="title color-white w-700 mt--20 mb--30 tmp-title-split">
                                Your Trusted <span>Consulting</span> Partner.
                            </h1>
                            <p className="description color-white">
                                Our experienced consultants work closely with you to understand your unique business challenges and ultimate goals.
                            </p>
                            <div className="button-group mt--40 mt_sm--20 justify-content-start">
                                <Link className="tmp-btn btn-large hover-icon-reverse round" href="#">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Get Started</span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                    </span>
                                </Link>
                                <Link className="tmp-btn btn-primary rounded-player popup-video btn-border" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                    <span>
                                        <i className="feather-play" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 order-1 order-lg-2">
                        <div className="banner-right-picking-image">
                            <Slider {...settings} className="tmp-banner-right-carousel tmp-slick-dot text-end banner-12-radious">
                                {bannerImages.map((image) => (
                                    <div className="single-banner banner-small-right" key={image}>
                                        <div className="thumbnail">
                                            <img className="w-100" src={`/assets/images/team/${image}`} alt="Banner" />
                                        </div>
                                        <div className="line-effect">
                                            {[1, 2, 3, 4, 5, 6].map((line) => (
                                                <div className="line" key={line} />
                                            ))}
                                        </div>
                                        <div className="slider-bg-dot-shape two-splash">
                                            <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
                                                <div className="blocksync-stars" />
                                                <div className="blocksync-stars2" />
                                                <div className="blocksync-stars3" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="right-image-absolute">
                                <img src="/assets/images/banner/03.webp" alt="" />
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
                </div>
            </div>
            <div className="shape-left-top">
                <img src="/assets/images/banner/shape-it-1.svg" alt="" />
            </div>
        </div>
    );
}

export default BannerBusinessThree;
