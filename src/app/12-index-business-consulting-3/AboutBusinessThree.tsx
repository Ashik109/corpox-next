import Link from 'next/link'
const listItems = [
    "Track your teams progress with mobile app.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Ipsum dolor sit amet consectetur adipisicing.",
    "Your teams progress with mobile app.",
];

function AboutBusinessThree() {
    return (
        <div className="tmp-about-area tmp-section-gapBottom">
            <div className="container">
                <div className="row g-5 row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img loading="lazy" className="w-100 radius" src="/assets/images/about/about-7.png" alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="content">
                            <div className="tmp-section-title-border text-start">
                                <h2 className="title w-700 mb--30 tmp-title-split">We design and develop world-class web applications.</h2>
                                <p>Our Business ipsum dolor sit amet consectetur, adipisicing elit. Tempora sequi doloremque dicta quia unde odio nam minus reiciendis ullam aliquam.</p>
                                <ul className="list-icon">
                                    {listItems.map((item) => (
                                        <li key={item}>
                                            <span className="icon">
                                                <i className="feather-check" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="read-more-btn mt--40">
                                    <Link className="tmp-btn round btn-large" href="/contact">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBusinessThree;
