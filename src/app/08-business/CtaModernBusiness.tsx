"use client";

import { useEffect, useRef } from "react";
import BusinessRotatingWords from "./BusinessRotatingWords";
import "jarallax/dist/jarallax.css";

type JarallaxElement = HTMLDivElement & {
    jarallax?: {
        destroy: () => void;
    };
};

function CtaModernBusiness() {
    const jarallaxRef = useRef<JarallaxElement | null>(null);

    useEffect(() => {
        let mounted = true;
        const element = jarallaxRef.current;

        import("jarallax").then(({ jarallax }) => {
            if (mounted && element) {
                jarallax(element, { speed: 0.8 });
            }
        });

        return () => {
            mounted = false;
            element?.jarallax?.destroy();
        };
    }, []);

    return (
        <div
            ref={jarallaxRef}
            className="cta-main-wrapper bg-cta-modern bg_image jarallax"
            data-speed=".8"
            data-black-overlay={5}
        >
            <div className="container">
                <div className="call-to-action-modern-wrapper">
                    <h2 className="title">
                        Let&apos;s discuss your <br />
                        <BusinessRotatingWords
                            words={["Consulting.", "Business.", "Innovation."]}
                            mode="zoom"
                        />
                    </h2>
                    <div className="right-wrapper">
                        <div className="icons">
                            <img src="/assets/images/call-to-action/icons/01.svg" alt="icons" />
                        </div>
                        <p>
                            Looking for Collaboration? <br /> <a href="#">info@yourdomain.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaModernBusiness;
