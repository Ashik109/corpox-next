'use client';
import React, { useEffect } from 'react';
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";
import AOS from 'aos';
import 'aos/dist/aos.css';

function TimelineOne() {
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
            {/* Start Timeline-Style-Four */}
            <div className="tmp-timeline-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="number">+3</span>
                                        <span className="subtitle-text">Working Process</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">How We Do It?</h2>
                                <p className="b1 tmp-title-split">
                                    We make your spending stress-free for you to have the perfect control.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt--10">
                        <div className="timeline-style-two bg-color-blackest">
                            <div className="row row--0">
                                {[
                                    { title: 'Knowledge', desc: 'Present all available features in Essentials.' },
                                    { title: 'Working', desc: 'All Feature available features in Essentials.' },
                                    { title: 'Solution', desc: 'Popular Feature available features in Essentials.' },
                                    { title: 'Process', desc: 'Latest Feature available features in Essentials.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-lg-3 col-md-3 tmp-timeline-single no-gradient">
                                        <div className="tmp-timeline">
                                            <h6 className="title" data-aos="fade-up" data-aos-delay={200 + idx*100}>
                                                {item.title}
                                            </h6>
                                            <div className="progress-line">
                                                <div className="line-inner" />
                                            </div>
                                            <div className="progress-dot">
                                                <div className="dot-level">
                                                    <div className="dot-inner" />
                                                </div>
                                            </div>
                                            <p className="description" data-aos="fade-up" data-aos-delay={300 + idx*100}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Timeline-Style-Four */}
        </>
    )
}

export default TimelineOne;