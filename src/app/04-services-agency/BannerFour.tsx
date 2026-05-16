'use client'
import React from 'react'
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";

function BannerFour() {
    useTitleSplitAnimation();
    return (
        <>
            {/* Start Slider Area  */}
            <div className="slider-area slider-style-6 shape-left inheader-not-transparent height-750">
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="inner text-left">
                                <h4 className="tmp-badge-2 tmp-title-split">
                                    Biggest Service Agency
                                </h4>
                                <h1 className="title color-white w-700 tmp-title-split mt--20">
                                    Acquire <br /> customers with <br /> Services!
                                </h1>
                                <p className="description color-white tmp-title-split-p">
                                    We help our clients succeed by creating brand identities, digital
                                    experiences, and print materials.
                                </p>
                                <div className="button-group mt--30 mt_sm--20 justify-content-start">
                                    <a className="tmp-btn btn-large hover-icon-reverse" href="#">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Order a New Service Now</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="video-btn">
                                <div className="video-popup icon-center">
                                    <div className="overlay-content">
                                        <div className="thumbnail">
                                            <img
                                                className="radius-small"
                                                src="/assets/images/banner/banenr-image-02.png"
                                                alt="Corporate Image"
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
                {/* <div class="shape-left-svg"></div> */}
            </div>
            {/* End Slider Area  */}
        </>

    )
}

export default BannerFour