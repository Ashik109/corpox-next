import Link from 'next/link'
function ProfileShare() {
    return (
        <div className="profile-share justify-content-center">
            {["tooltip-01.png", "tooltip-02.png", "tooltip-03.png"].map((image, index) => (
                <Link href="#" className="avatar" data-tooltip={["Mark JOrdan", "Mark", "Jordan"][index]} key={image}>
                    <img src={`/assets/images/testimonial/${image}`} alt="education" />
                </Link>
            ))}
            <div className="more-author-text">
                <h5 className="total-join-students">Join Over 3000+ Students</h5>
                <p className="subtitle">
                    <Link className="btn-read-more" href="#" target="_blank">
                        <span>Purchase Corpox</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

function CtaBusinessCoach() {
    return (
        <div className="tmp-callto-action-area tmp-section-gapTop">
            <div className="wrapper">
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
                                                <h6 className="subtitle tmp-title-split">Finest choice for your home &amp; office</h6>
                                                <div className="call-to-btn d-flex justify-content-center">
                                                    <Link className="tmp-btn btn-extra-large hover-icon-reverse" target="_blank" href="#">
                                                        <span className="icon-reverse-wrapper">
                                                            <span className="btn-text">Purchase Corpox</span>
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
                                            <div className="tmp-profile-box mt--50">
                                                <ProfileShare />
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
            </div>
        </div>
    );
}

export default CtaBusinessCoach;
