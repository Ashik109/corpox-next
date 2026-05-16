import React from 'react'

function TopbarOne() {
    return (
        <div className="header-top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="header-left">
                            <p>
                                <a href="#">
                                    Get the most advanced template
                                    <i className="feather-chevron-right" />
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="header-right">
                            <div className="address-content">
                                <p>
                                    <i className="feather-map-pin" />
                                    <span>Alabama, USA</span>
                                </p>
                                <p>
                                    <i className="feather-phone" />
                                    <span>
                                        <a href="#">+06 58 49 99 56</a>
                                    </span>
                                </p>
                            </div>
                            <div className="social-icon-wrapper">
                                <ul className="social-icon social-default icon-naked">
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <i className="feather-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com">
                                            <i className="feather-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <i className="feather-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkdin.com/">
                                            <i className="feather-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopbarOne