import Link from 'next/link'
import React from 'react'

function TopbarConstruction() {
    return (
        <div className="header-top-news bg-image1">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content">
                                    <span className="tmp-badge">
                                        Limited Time Offer
                                    </span>

                                    <span className="news-text">
                                        Intro price. Get Corpox for Big Sale -95% off.
                                    </span>
                                </div>

                                <div className="right-button">
                                    <Link
                                        className="btn-read-more"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866"
                                    >
                                        <span>
                                            Purchase Now{" "}
                                            <i className="feather-arrow-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="icon-close">
                <button className="close-button bgsection-activation">
                    <i className="feather-x"></i>
                </button>
            </div>
        </div>

    )
}

export default TopbarConstruction
