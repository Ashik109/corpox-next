import Link from 'next/link'
import React from 'react'

function AboutFive() {
    return (
        <>
            {/* about area fluid start */}
            <div className="tmp-about-area-fluid">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-us-thumbnail invers-anime">
                                <img src="/assets/images/about/05.webp" alt="why" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl--40 pl_sm--15 pt_md--30 pt_sm--30">
                            <div
                                className="content pb_sm--40 pb_md--40"
                                style={{ maxWidth: "100%" }}
                            >
                                <div className="tmp-section-title-border-none text-start about-style-4">
                                    <div className="section-title text-start mb--30">
                                        <span className="subtitle bg-primary-opacity">
                                            Make Your Best Insurance With Us
                                        </span>
                                        <h2 className="title w-700 mb--30 tmp-title-split">
                                            Smart Solutions to Elevate <br /> Your Global Business
                                        </h2>
                                    </div>
                                    <ul className="feature-list">
                                        <li>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">Delivering customized consulting</h4>
                                                <p className="text">
                                                    Fusce condimentum mattis placerat odio donec lacus porta
                                                    torquent, mauris gravida rutrum.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="feather-check" />
                                            </div>
                                            <div className="title-wrapper">
                                                <h4 className="title">Building long-term relationships</h4>
                                                <p className="text">
                                                    Fusce condimentum mattis placerat odio donec lacus porta
                                                    torquent, mauris gravida rutrum
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="read-more-btn mt--40">
                                        <Link
                                            className="tmp-btn icon-hover text-center"
                                            href="/contact"
                                        >
                                            <span className="btn-text">Contact Us</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about area fluid end */}
        </>

    )
}

export default AboutFive