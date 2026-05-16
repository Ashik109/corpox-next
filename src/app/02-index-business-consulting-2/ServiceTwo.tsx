"use client";
import { useEffect } from "react";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceTwo() {
    useTitleSplitAnimation();
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });

        const timer = setTimeout(() => {
            AOS.refresh();
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            {/* Start Service Area  */}
            <div className="tmp-service-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="number">03</span>
                                        <span className="subtitle-text">What we can do for you</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">Our Latest Services</h2>
                                <p className="description b1 tmp-title-split-p">
                                    There are many variations of passages of Lorem Ipsum available,
                                    <br />
                                    but the majority have suffered alteration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 service-wrapper mt--10">
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icons/04.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/management-leadership">Design</a>
                                    </h4>
                                    <p className="description mb--0">
                                        There are many variations variations of passages of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={100}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icons/02.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/digital-transformation">Team</a>
                                    </h4>
                                    <p className="description mb--0">
                                        Passages there are many variations variations of of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={200}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icons/03.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/financial-growth">Application</a>
                                    </h4>
                                    <p className="description mb--0">
                                        Variations There are many variations of passages of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={200}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icons/01.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/management-leadership">Support</a>
                                    </h4>
                                    <p className="description mb--0">
                                        Variations There are many variations of passages of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icon-01.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/financial-growth">Office</a>
                                    </h4>
                                    <p className="description mb--0">
                                        Office are many variations variations of passages of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={100}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icon-02.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/management-leadership">Web Award</a>
                                    </h4>
                                    <p className="description mb--0">
                                        Web App there are many variations variations of of Lorem
                                        available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={200}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icons/06.png" alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/digital-transformation">Call Center</a>
                                    </h4>
                                    <p className="description mb--0">
                                        Call Center are many variations of passages passages of Lorem of
                                        Lorem available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={200}
                        >
                            <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover">
                                <div className="icon">
                                    <img src="/assets/images/services/icons/05.png" alt="service" />
                                </div>
                                <div className="content">
                                    <h4 className="title w-600">
                                        <a href="/service/management-leadership">Managemenet</a>
                                    </h4>
                                    <p className="description mb--0">
                                        Managemenet are many variations of passages of Lorem available.
                                    </p>
                                    <div className="discover-btn mt--20">
                                        <a
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
                                        </a>
                                    </div>
                                </div>
                                <div className="shape-service-1">
                                    <img src="/assets/images/services/shape/01.png" alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Area  */}
        </>

    )
}

export default ServiceTwo