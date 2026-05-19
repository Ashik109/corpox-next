'use client'
import React, { useEffect, useRef } from "react";

interface OdometerElement extends HTMLElement {
    od?: any;
}

function CounterTwo() {

    const odometerRefs = useRef<OdometerElement[]>([]);

    useEffect(() => {
        let observer: IntersectionObserver;

        import("odometer").then((module) => {
            const Odometer = module.default;

            odometerRefs.current.forEach((el) => {
                if (!el) return;

                el.od = new Odometer({
                    el,
                    value: 0,
                    format: "(,ddd)",
                    duration: 2000,
                });
            });

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const el = entry.target as OdometerElement;

                        if (
                            entry.isIntersecting &&
                            !el.classList.contains("odometer-triggered")
                        ) {
                            const value = Number(el.dataset.count);
                            el.od?.update(value);
                            el.classList.add("odometer-triggered");
                        }
                    });
                },
                { threshold: 0.5 }
            );

            odometerRefs.current.forEach((el) => {
                if (el) observer.observe(el);
            });
        });

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    const setOdometerRef = (el: OdometerElement | null) => {
        if (el && !odometerRefs.current.includes(el)) {
            odometerRefs.current.push(el);
        }
    };

    return (
        <div className="tmp-counterup-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+2000</span>
                                    <span className="subtitle-text">Our Fun Facts</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Our Agency in Numbers
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--0">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="signle-fun-facts-one tmponhover">
                            <div className="icon">
                                <img src="/assets/images/fun-facts/01.svg" alt="fun-facts" />
                            </div>
                            <h2 className="title">
                                <span
                                    className="odometer"
                                    data-count="1200"
                                    ref={setOdometerRef}
                                >
                                    0
                                </span>
                                +
                            </h2>
                            <span className="bototm">Project Done</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="signle-fun-facts-one tmponhover">
                            <div className="icon">
                                <img src="/assets/images/fun-facts/02.svg" alt="fun-facts" />
                            </div>
                            <h2 className="title">
                                <span
                                    className="odometer"
                                    data-count="99"
                                    ref={setOdometerRef}
                                >
                                    0
                                </span>
                                %
                            </h2>
                            <span className="bototm">Business Solution</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="signle-fun-facts-one tmponhover">
                            <div className="icon">
                                <img src="/assets/images/fun-facts/03.svg" alt="fun-facts" />
                            </div>
                            <h2 className="title">
                                <span
                                    className="odometer"
                                    data-count="18"
                                    ref={setOdometerRef}
                                >
                                    0
                                </span>
                                M
                            </h2>
                            <span className="bototm">Global Customers</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CounterTwo;
