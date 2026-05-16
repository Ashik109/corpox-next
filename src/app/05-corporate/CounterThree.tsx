'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHoverAnimation } from '../components/useHoverAnimation'

interface OdometerElement extends HTMLElement {
    
    od?: any;
}

function CounterThree() {
    const hoverRef1 = useHoverAnimation<HTMLDivElement>()
    const hoverRef2 = useHoverAnimation<HTMLDivElement>()
    const hoverRef3 = useHoverAnimation<HTMLDivElement>()
    const odometerRefs = useRef<OdometerElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            if (observer) observer.disconnect();
        };
    }, []);

    const setOdometerRef = (el: OdometerElement | null) => {
        if (el && !odometerRefs.current.includes(el)) {
            odometerRefs.current.push(el);
        }
    };
    return (
        <>
            {/* Start Main Counter up-5 Area  */}
            <div className="tmp-counterup-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row mb--50">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h4 className="subtitle color-secondary">Our Fun Facts</h4>
                                <h2 className="title w-600 tmp-title-split">
                                    Our Agency in Numbers
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="row g-5 mt--0">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div ref={hoverRef1} className="signle-fun-facts-one tmponhover">
                                    <div className="icon">
                                        <img src="/assets/images/fun-facts/01.svg" alt="fun-facts" />
                                    </div>
                                    <h2 className="title">
                                        <span
                                            className="odometer"
                                            data-count="1200"
                                            ref={setOdometerRef} >
                                            00
                                        </span>
                                        +
                                    </h2>
                                    <span className="bototm">Project Done</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div ref={hoverRef2} className="signle-fun-facts-one tmponhover">
                                    <div className="icon">
                                        <img src="/assets/images/fun-facts/02.svg" alt="fun-facts" />
                                    </div>
                                    <h2 className="title">
                                        <span
                                            className="odometer"
                                            data-count="99"
                                            ref={setOdometerRef} >
                                            00
                                        </span>
                                        %
                                    </h2>
                                    <span className="bototm">Business Solution</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div ref={hoverRef3} className="signle-fun-facts-one tmponhover">
                                    <div className="icon">
                                        <img src="/assets/images/fun-facts/03.svg" alt="fun-facts" />
                                    </div>
                                    <h2 className="title">
                                        <span
                                            className="odometer"
                                            data-count="18"
                                            ref={setOdometerRef} >
                                            00
                                        </span>
                                        M
                                    </h2>
                                    <span className="bototm">Global Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Main Counter up-5 Area  */}
        </>

    )
}

export default CounterThree