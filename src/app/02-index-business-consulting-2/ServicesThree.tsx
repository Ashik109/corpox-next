"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServicesThree() {
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
            {/* our business service area start */}
            <div className="my-business-service-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-flex-between">
                                <div className="tmp-section-title-border text-start">
                                    <div className="pres-line-separator-wrapper text-start mb--10">
                                        <span className="subtitle">
                                            <span className="subtitle-text">My Business Services</span>
                                        </span>
                                        <div className="line-separator line-right" />
                                    </div>
                                    <h2 className="title w-700 tmp-title-split">
                                        Innovative Service For Your <br />
                                        Business Solution
                                    </h2>
                                </div>
                                <div className="tmp-load-more d-flex justify-content-center">
                                    <a className="tmp-btn btn-large hover-icon-reverse" href="#">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">View More Service</span>
                                            <span className="btn-icon">
                                                <i className="feather-loader" />
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-loader" />
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-lg-12">
                            <div
                                className="single-service-list-area"
                                data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={100}
                            >
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-6">
                                        <a
                                            href="/service/management-leadership"
                                            className="thumbnail-service-list invers-anime"
                                        >
                                            <img
                                                src="/assets/images/services/list/01.webp"
                                                alt="Business consulting"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inner-content">
                                            <div className="head">
                                                <div className="icon">
                                                    <img
                                                        src="/assets/images/services/list/icon/01.svg"
                                                        alt="Business"
                                                    />
                                                </div>
                                                <h6 className="title">Business Growth</h6>
                                            </div>
                                            <p className="disc">
                                                Our business growth service helps companies expand faster
                                                with strategic planning, marketing solutions, and expert
                                                guidance to achieve sustainable success.
                                            </p>
                                            <a
                                                className="tmp-btn hover-icon-reverse"
                                                href="/service/financial-growth"
                                            >
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">See Details</span>
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
                            <div
                                className="single-service-list-area"
                                data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={100}
                            >
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-6 order-2 order-lg-1 order-md-2 order-sm-2">
                                        <div className="inner-content">
                                            <div className="head">
                                                <div className="icon">
                                                    <img
                                                        src="/assets/images/services/list/icon/02.svg"
                                                        alt="Business"
                                                    />
                                                </div>
                                                <h6 className="title">Audit Consulting</h6>
                                            </div>
                                            <p className="disc">
                                                Our audit consulting service ensures transparency,
                                                compliance, and financial accuracy with expert guidance to
                                                optimize performance and reduce risks.
                                            </p>
                                            <a
                                                className="tmp-btn hover-icon-reverse"
                                                href="/service/digital-transformation"
                                            >
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">See Details</span>
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
                                    <div className="col-lg-6 order-1 order-lg-2 order-md-1 order-sm-1">
                                        <a
                                            href="/service/management-leadership"
                                            className="thumbnail-service-list invers-anime"
                                        >
                                            <img
                                                src="/assets/images/services/list/02.webp"
                                                alt="Business consulting"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="single-service-list-area"
                                data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={100}
                            >
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-6">
                                        <a
                                            href="/service/financial-growth"
                                            className="thumbnail-service-list invers-anime"
                                        >
                                            <img
                                                src="/assets/images/services/list/03.webp"
                                                alt="Business consulting"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="inner-content">
                                            <div className="head">
                                                <div className="icon">
                                                    <img
                                                        src="/assets/images/services/list/icon/03.svg"
                                                        alt="Business"
                                                    />
                                                </div>
                                                <h6 className="title">Financial Idea</h6>
                                            </div>
                                            <p className="disc">
                                                Our Financial Idea service helps companies expand faster
                                                with strategic planning, marketing solutions, and expert
                                                guidance to achieve sustainable success.
                                            </p>
                                            <a
                                                className="tmp-btn hover-icon-reverse"
                                                href="/service/digital-transformation"
                                            >
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">See Details</span>
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
                            <div
                                className="single-service-list-area"
                                data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay={100}
                            >
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-6 order-2 order-lg-1 order-md-2 order-sm-2">
                                        <div className="inner-content">
                                            <div className="head">
                                                <div className="icon">
                                                    <img
                                                        src="/assets/images/services/list/icon/04.svg"
                                                        alt="Business"
                                                    />
                                                </div>
                                                <h6 className="title">Minimal Achievement</h6>
                                            </div>
                                            <p className="disc">
                                                Our minimal achievement strategy focuses on steady growth,
                                                smart resource use, and sustainable progress to reach goals
                                                with efficiency.
                                            </p>
                                            <a
                                                className="tmp-btn hover-icon-reverse"
                                                href="/service/management-leadership"
                                            >
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">See Details</span>
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
                                    <div className="col-lg-6 order-1 order-lg-2 order-md-1 order-sm-1">
                                        <a
                                            href="/service/management-leadership"
                                            className="thumbnail-service-list invers-anime"
                                        >
                                            <img
                                                src="/assets/images/services/list/04.webp"
                                                alt="Business consulting"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our business service area end */}
        </>

    )
}

export default ServicesThree