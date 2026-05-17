import Link from 'next/link'
import DigitalAgencyOdometer from "./DigitalAgencyOdometer";

const bannerCards = [
    {
        image: "/assets/images/banner/01.webp",
        title: (
            <>
                Creative <br /> Solutions
            </>
        ),
    },
    {
        image: "/assets/images/banner/02.webp",
        title: (
            <>
                Business <br /> Solutions
            </>
        ),
    },
];

function GoButton() {
    return (
        <Link href="/service/management-leadership" className="mdbutton mdbutton--fenrir">
            <svg aria-hidden="true" className="btnprogress" width="70" height="70" viewBox="0 0 70 70">
                <path
                    className="btnprogress__circle"
                    d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                />
                <path
                    className="btnprogress__path"
                    d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
                    pathLength="1"
                />
            </svg>
            <span>Go</span>
        </Link>
    );
}

function BannerDigitalAgency() {
    return (
        <div className="slider-area tmp-modern-slider position-relative">
            <div className="wrapper">
                <div className="row gy-5 align-items-center">
                    <div className="col-lg-6 order-lg-1 order-1 order-md-2 order-sm-2">
                        <div className="banner-content banner-content-9 text-left">
                            <div className="pres-line-separator-wrapper text-start mb--10 ml--0 justify-content-start">
                                <span className="subtitle mt--0" style={{ width: "auto" }}>
                                    <DigitalAgencyOdometer value={2999} />
                                    <span className="subtitle-text">DIGITAL STARTUP AGENCY</span>
                                </span>
                                <div className="line-separator line-right ml--15" />
                            </div>

                            <h1 className="title tmp-title-split">
                                Our Awesome <br /> <span>Digital Agency</span> &amp; Quick Solution
                            </h1>
                            <h6 className="subtitle tmp-title-split">
                                We deliver custom Satisfaction for build a long term relationship.
                            </h6>
                            <div className="button-group justify-content-start mt--40">
                                <Link href="#" className="tmp-btn btn-primary">
                                    Start Free Trail
                                </Link>
                                <Link href="#" className="tmp-btn btn-border">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl--60 pl_sm--10 order-lg-2 order-2 order-md-1 order-sm-1 mt--80">
                        <div className="row g-4">
                            {bannerCards.map((card, index) => (
                                <div
                                    className={`col-lg-6 col-md-6 col-sm-6 ${index === 0 ? "mt--80 mt_sm--0" : ""}`}
                                    key={card.image}
                                >
                                    <div className="inv-card content-overlay">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Link href="/service/financial-growth">
                                                    <img src={card.image} alt="Portfolio Images" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">
                                                    <Link href="/service/digital-transformation">{card.title}</Link>
                                                </h4>
                                                <div className="view-button">
                                                    <GoButton />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerDigitalAgency;
