const avatars = [
    { image: "/assets/images/testimonial/tooltip-01.png", label: "Mark JOrdan" },
    { image: "/assets/images/testimonial/tooltip-02.png", label: "Mark" },
    { image: "/assets/images/testimonial/tooltip-03.png", label: "Jordan" },
];

function CtaBusiness() {
    return (
        <div className="tmp-callto-action-area with-shape position-relative">
            <div className="wrapper">
                <div className="tmp-callto-action clltoaction-style-default style-5">
                    <div className="container">
                        <div className="row row--0 align-items-center content-wrapper theme-shape">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <div className="content text-center">
                                        <h2 className="title tmp-title-split">
                                            Ready to start creating <br /> a standard website?
                                        </h2>
                                        <h6 className="subtitle tmp-title-split">
                                            Finest choice for your home &amp; office
                                        </h6>
                                        <div className="call-to-btn d-flex justify-content-center">
                                            <a className="tmp-btn btn-extra-large hover-icon-reverse" target="_blank" href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Purchase Corpox</span>
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
                                    <div className="tmp-profile-box mt--50">
                                        <div className="profile-share justify-content-center">
                                            {avatars.map((avatar) => (
                                                <a href="#" className="avatar" data-tooltip={avatar.label} tabIndex={0} key={avatar.label}>
                                                    <img src={avatar.image} alt="education" />
                                                </a>
                                            ))}
                                            <div className="more-author-text">
                                                <h5 className="total-join-students">Join Over 3000+ Students</h5>
                                                <p className="subtitle">
                                                    <a className="btn-read-more" target="_blank" href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866">
                                                        <span>Purchase Corpox</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="person-stand images-left-right-float">
                                <img loading="lazy" src="/assets/images/call-to-action/01.png" alt="call-to-action" />
                            </div>
                            <div className="bg-shape-area-cta-main tmponhover">
                                <img loading="lazy" src="/assets/images/shape/01.webp" alt="" />
                            </div>
                            <div className="bg-line-animatoin-area-global" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaBusiness;
