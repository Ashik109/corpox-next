import React from 'react'

function TopbarThree() {
    return (
        <>
            {/* Start Header Top Area  */}
            <div className="header-top-news bg-image1 with-bg-gradient">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <div className="content">
                                        <span className="tmp-badge">Limited Time Offer</span>
                                        <span className="news-text">
                                            Intro price. Get Corpox for Big Sale -95% off.
                                        </span>
                                    </div>
                                    <div className="right-button">
                                        <a
                                            className="btn-read-more"
                                            target="_blank"
                                            href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866"
                                        >
                                            <span>
                                                Purchase Now <i className="feather-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon-close">
                    <button className="close-button bgsection-activation">
                        <i className="feather-x" />
                    </button>
                </div>
            </div>
            {/* End Header Top Area  */}
        </>

    )
}

export default TopbarThree