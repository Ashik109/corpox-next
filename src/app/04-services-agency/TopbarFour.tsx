import React from 'react'

function TopbarFour() {
    return (
        <div className="header-top-bar with-border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="header-left">
                            <p>
                                <a href="#">
                                    Discover the most advanced template
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
                                    <span>California, USA</span>
                                </p>
                                <p>
                                    <i className="feather-phone" />
                                    <span>
                                        <a href="#">+06 98 68 23 22</a>
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

export default TopbarFour