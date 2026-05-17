import Link from 'next/link'
function AboutArchitecture() {
    return (
        <div className="about-us-area tmp-section-gap">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <div className="about-architechture-left" data-aos="fade-up" data-aos-duration="700">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper text-start mb--10">
                                    <span className="subtitle">
                                        <span className="number">03</span>
                                        <span className="subtitle-text">About Us</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    Lets Know <span className="theme-gradient">About</span> Corpox
                                </h2>
                            </div>
                            <p className="desc mb--20">
                                Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristique.
                            </p>
                            <p className="desc mb--20">
                                Design inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.
                            </p>
                            <p className="desc mb--35">
                                Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.
                            </p>
                            <Link className="tmp-btn btn-primary" href="/about">
                                More About Us
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="thumbnail-image invers-anime" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                            <img src="/assets/images/about/about-archi.webp" alt="Architecture studio interior" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutArchitecture;
