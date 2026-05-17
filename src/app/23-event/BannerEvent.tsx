import Link from 'next/link'
function BannerEvent() {
    return (
        <div className="event-banner-area-start tmp-section-gap bg_image jarallax">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-inner-content-event">
                            <span className="banner-badge-1">Join The Future</span>
                            <h1 className="title">Connecting Minds to Create Tomorrow&apos;s Ideas</h1>
                            <p className="desc">
                                Connecting brilliant minds from around the world to share ideas, inspire innovation, and shape the future. Join industry leaders, visionaries, and creators for an unforgettable conference experience.
                            </p>
                            <div className="button-group">
                                <Link className="tmp-btn round hover-icon-reverse" href="/pricing-three">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Purchase Ticket</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerEvent;
