import Link from 'next/link'
const portfolios = [
    ["05.webp", "col-lg-8 col-md-12 col-sm-12"],
    ["06.webp", "col-lg-4 col-md-6 col-sm-12"],
    ["07.webp", "col-lg-4 col-md-6 col-sm-12"],
    ["08.webp", "col-lg-4 col-md-6 col-sm-12"],
    ["09.webp", "col-lg-4 col-md-6 col-sm-12"],
];

function PortfolioAgencyThirteen() {
    return (
        <div className="tmp-portfolio-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Portfolio</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Our Case Studies.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {portfolios.map(([image, className]) => (
                        <div className={className} key={image}>
                            <div className="single-modern-case-studies">
                                <Link href="/portfolio/brand-refresh-venture" className="thumbnail invers-anime">
                                    <img src={`/assets/images/portfolio/${image}`} alt="case-studies" />
                                </Link>
                                <div className="inner-content-area">
                                    <span className="tags">2025, Business</span>
                                    <Link href="#" className="tmponhover">
                                        <h3 className="title">Business Solution</h3>
                                        <div className="tmp-icon">
                                            <span className="default">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M5.33333 0V2.13333H12.3627L0 14.496L1.504 16L13.8667 3.63733V10.6667H16V0H5.33333Z" fill="url(#tmp-svg-gradient-67)"></path>
                                                    <defs>
                                                    <linearGradient id="tmp-svg-gradient-56" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0" stopColor="#000"></stop>
                                                        <stop offset="1" stopColor="#000"></stop>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioAgencyThirteen;
