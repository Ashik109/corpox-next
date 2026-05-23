"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MarqueeBusinessThree() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const text = "Overview of your consulting firm's mission, values, and team expertise";

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            if (!textRef.current) {
                return;
            }

            gsap.to(textRef.current, {
                x: 1000,
                duration: 10,
                repeat: -1,
                ease: "linear",
            });

            gsap.to(textRef.current, {
                xPercent: 5,
                scrollTrigger: {
                    trigger: textRef.current,
                    scrub: 1,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="tmp-video-section-start-one title-index-12-marque" ref={sectionRef}>
            <div className="text-split-wrap-video scrolltext-wrapper">
                <div className="text-split scrollingtext-1" ref={textRef}>
                    <h2 className="title">
                        {text} <span>{text}</span> {text}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default MarqueeBusinessThree;
