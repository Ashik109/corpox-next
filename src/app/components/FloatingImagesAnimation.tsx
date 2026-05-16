"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FloatingImagesAnimation() {
    const pathname = usePathname();

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>(".images-left-right-float"));

        if (!elements.length) {
            return;
        }

        const tweens = elements.map((element) =>
            gsap.fromTo(
                element,
                { x: 0 },
                {
                    x: -150,
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 4,
                    },
                    ease: "none",
                }
            )
        );

        ScrollTrigger.refresh();

        return () => {
            tweens.forEach((tween) => {
                tween.scrollTrigger?.kill();
                tween.kill();
            });
        };
    }, [pathname]);

    return null;
}

export default FloatingImagesAnimation;
