import Link from 'next/link'
const categories = [
    "Brand Strategy",
    "Logo Design",
    "Service Agency",
    "Motion Graphics",
    "Video Editing",
    "Content Writing",
    "Social Media",
    "UI/UX Design",
    "Graphic Design",
    "Digital Marketing",
    "SEO Optimization",
    "PPC Advertising",
    "Email Marketing",
    "Much More 20+",
];

const categoryClasses = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
];

function BannerCreativeAgency() {
    return (
        <div className="slider-area banner-splash-area banner-7 tmp_jump_animation-wrapper tmp-slider-style-1 with-bg-tin bg-transparent ptb--150 ptb_sm--100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <div className="tmp-section-title-border text-center" data-aos="fade-up" data-aos-duration="700">
                                <div className="pres-line-separator-wrapper text-center mb--10">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="number">01</span>
                                        <span className="subtitle-text">SMART CREATIVE AGENCY</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                            </div>
                            <h1 className="title display-two w-700 mb--30 tmp-title-split">
                                Your New Superpower <br /> To Get Creative Agency.
                            </h1>
                            <p className="b1 mb--50" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro quo at. <br />
                                Quisquam molestiae maiores ea iste ipsum unde animi aliquid.
                            </p>
                            <div className="button-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                <Link className="tmp-btn btn-extra-large btn-border hover-icon-reverse" href="/contact">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Looking to hire? Get in touch!</span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right" />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                            <div className="scroll-down-btn mt--60" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <Link className="mdbutton mdbutton--surtur button-auto-rotate smoth-animation" href="#porfolio">
                                    <svg className="textcircle" viewBox="0 0 500 500">
                                        <title>Scroll Down For More Content.</title>
                                        <defs>
                                            <path id="textcircle2" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" />
                                        </defs>
                                        <text>
                                            <textPath xlinkHref="#textcircle2" aria-label="Scroll Down For More Content." textLength="900">
                                                Scroll Down For More Content.
                                            </textPath>
                                        </text>
                                    </svg>
                                    <i className="icon feather-arrow-down" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-svg" />
            <div className="category-area-main">
                {categories.map((category, index) => (
                    <div className={`single-category ${categoryClasses[index]}`} data-aos="fade-up" data-aos-delay={index * 30} key={category}>
                        <p>{category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BannerCreativeAgency;
