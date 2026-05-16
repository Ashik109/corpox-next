import BusinessOdometer from "./BusinessOdometer";
import BusinessRotatingWords from "./BusinessRotatingWords";

function BannerBusiness() {
    return (
        <div className="slider-area banner-splash-area tmp-slider-style-banner-tin business-banner position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center banner-content-8">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <BusinessOdometer value={2999} />
                                    <span className="subtitle-text">DIGITAL STARTUP AGENCY</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h1 className="title display-two w-700 mb--30">
                                Start New Business <br /> To Get{" "}
                                <BusinessRotatingWords
                                    words={["Build Success.", "Achive Goal.", "Touch Top."]}
                                />
                            </h1>
                            <p className="b1 mb--50 tmp-title-split-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro
                                quo at. <br /> Quisquam molestiae maiores ea iste ipsum unde animi aliquid.
                            </p>
                            <div className="button-group">
                                <a className="tmp-btn btn-gradient btn-xl hover-icon-reverse" href="#">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Looking to hire? Get in touch!</span>
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
                </div>
            </div>
            <div className="bg-circle-area" />
        </div>
    );
}

export default BannerBusiness;
