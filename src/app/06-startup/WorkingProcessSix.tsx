"use client";

import React, { useEffect } from "react";
import { useAosOnce } from "../components/useAosOnce";

function WorkingProcessSix() {
    useAosOnce();

    useEffect(() => {

        const tabs = document.querySelectorAll<HTMLElement>('#nav-tab .nav-link');

        let current = 0;

        const interval = setInterval(() => {

            current = (current + 1) % tabs.length;

            tabs[current].click();

        }, 5000);

        return () => clearInterval(interval);

    }, []);

    return (
        <>
            {/* what we do */}
            <div className="tmp-working-process-main tmp-section-gapBottom">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h4
                                    className="subtitle color-secondary"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    What We Do
                                </h4>
                                <h2
                                    className="title w-600"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    data-aos-delay="100"
                                >
                                    Solutions We Deliver
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row g-0 g-md-5 mt--20 align-items-center progress-tabs-activation">

                                {/* LEFT IMAGE */}
                                <div className="col-lg-7">
                                    <div className="tab-content" id="nav-tabContent">

                                        <div className="tab-pane fade show active" id="nav-home">
                                            <div className="thumbnail-area-wrapper-inner-6 invers-anime">
                                                <img src="/assets/images/timeline/03.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="nav-profile">
                                            <div className="thumbnail-area-wrapper-inner-6 invers-anime">
                                                <img src="/assets/images/timeline/02.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="nav-contact">
                                            <div className="thumbnail-area-wrapper-inner-6 invers-anime">
                                                <img src="/assets/images/timeline/01.webp" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* RIGHT TABS */}
                                <div className="col-lg-5 mt_md--50 mt_sm--50">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                                            <div
                                                className="nav-link active"
                                                id="nav-home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-home"
                                            >
                                                <div className="working-steps-area-tabs tmponhover">
                                                    <div className="left-icon-number">1</div>
                                                    <div className="inner-content">
                                                        <h5 className="title">Plan & Strategy</h5>
                                                        <p className="disc">
                                                            Purus dui eget sollicitudin curae leo proin platea
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="nav-link"
                                                id="nav-profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-profile"
                                            >
                                                <div className="working-steps-area-tabs tmponhover">
                                                    <div className="left-icon-number">2</div>
                                                    <div className="inner-content">
                                                        <h5 className="title">Design & Develop</h5>
                                                        <p className="disc">
                                                            Purus dui eget sollicitudin curae leo proin platea
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="nav-link"
                                                id="nav-contact-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-contact"
                                            >
                                                <div className="working-steps-area-tabs tmponhover">
                                                    <div className="left-icon-number">3</div>
                                                    <div className="inner-content">
                                                        <h5 className="title">Launch & Grow</h5>
                                                        <p className="disc">
                                                            Purus dui eget sollicitudin curae leo proin platea
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default WorkingProcessSix;