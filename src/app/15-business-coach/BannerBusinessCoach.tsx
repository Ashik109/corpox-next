import BusinessCoachOdometer from "./BusinessCoachOdometer";

function Stars() {
    return (
        <div className="stars-area">
            {[1, 2, 3, 4, 5].map((star) => (
                <img src="/assets/images/icons/stars.svg" alt="small-image" key={star} />
            ))}
        </div>
    );
}

function BannerBusinessCoach() {
    return (
        <div className="tmp-banner-business-coatch-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--80 mt_sm--80">
                        <div className="banner-business-coatch-wrapper">
                            <h4 className="tmp-badge-2 tmp-title-split">
                                We establish in <BusinessCoachOdometer value={1998} />
                            </h4>
                            <h1 className="title tmp-title-split">
                                We help Your <br />
                                <span className="theme-gradient">Business</span> to grow <br />
                                up next level
                            </h1>
                            <p>A business coach is a professional who helps business owners, entrepreneurs, and executives achieve their goals and improve their performance.</p>
                            <div className="button-group justify-content-start">
                                {["Get A Free Quote", "Get started"].map((label, index) => (
                                    <a className={`tmp-btn btn-large round hover-icon-reverse ${index === 1 ? "btn-border" : ""}`} href="#" key={label}>
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">{label}</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right" />
                                            </span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-2 order-md-1 order-sm-1 order-1">
                        <div className="banner-coatch-right-image">
                            <div className="thumbnail-banner-business-coatch">
                                <img src="/assets/images/banner/business-coatch.jpg" alt="business-coatch" />
                            </div>
                            <div className="absolute-rating-area tmponhover image">
                                <img src="/assets/images/banner/03.png" alt="small-image" />
                                <Stars />
                                <p>
                                    <BusinessCoachOdometer value={100} />+ Review
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerBusinessCoach;
