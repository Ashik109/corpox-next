'use client'
import Link from 'next/link'

function ServicesEight() {
    return (
        <>
            {/* Start Service-2 Area  */}
            <div className="tmp-service-area tmp-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h4 className="subtitle color-secondary">
                                    Amazing design services
                                </h4>
                                <h2 className="title w-600 tmp-title-split">Amazing services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 service-wrapper mt--10">
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                                <div className="icon">
                                    {/* <i class="feather-activity"></i> */}
                                    <img src="/assets/images/services/icons/02.png" alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <Link href="/service/management-leadership">Business Solution</Link>
                                    </h4>
                                    <p className="description mb--0">
                                        There are many variations variations of passages of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <Link
                                            className="tmp-btn round btn-small btn-border hover-icon-reverse"
                                            href="/service/financial-growth"
                                        >
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Discover services</span>
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
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                                <div className="icon">
                                    {/* <i class="feather-cast"></i> */}
                                    <img src="/assets/images/services/icons/01.png" alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <Link href="/service/digital-transformation">Creative Ideas</Link>
                                    </h4>
                                    <p className="description mb--0">
                                        Passages there are many variations variations of of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <Link
                                            className="tmp-btn round btn-small btn-border hover-icon-reverse"
                                            href="/service/management-leadership"
                                        >
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Discover services</span>
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
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="200"
                        >
                            <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                                <div className="icon">
                                    {/* <i class="feather-map"></i> */}
                                    <img src="/assets/images/services/icons/03.png" alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <Link href="/service/financial-growth">App Development</Link>
                                    </h4>
                                    <p className="description mb--0">
                                        Variations There are many variations of passages of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <Link
                                            className="tmp-btn round btn-small btn-border hover-icon-reverse"
                                            href="/service/digital-transformation"
                                        >
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Discover services</span>
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
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <div className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                                <div className="icon">
                                    {/* <i class="feather-map"></i> */}
                                    <img src="/assets/images/services/icons/04.png" alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <Link href="/service/management-leadership">Market Research</Link>
                                    </h4>
                                    <p className="description mb--0">
                                        There are many variations of passages of Lorem available pro
                                        content.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <Link
                                            className="tmp-btn round btn-small btn-border hover-icon-reverse"
                                            href="/service/management-leadership"
                                        >
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Discover services</span>
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
            </div>
            {/* End Service-2 Area  */}
        </>

    )
}

export default ServicesEight
