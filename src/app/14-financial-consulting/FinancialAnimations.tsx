"use client";

import { useEffect } from "react";
import "jarallax/dist/jarallax.css";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";

type JarallaxElement = HTMLElement & {
    jarallax?: {
        destroy: () => void;
    };
};

function FinancialAnimations() {
    useTitleSplitAnimation(".tmp-title-split, .tmp-title-split-p");

    useEffect(() => {
        let mounted = true;
        const elements = Array.from(document.querySelectorAll<JarallaxElement>(".page-wrapper .jarallax"));
        const initialized: JarallaxElement[] = [];

        import("jarallax").then(({ jarallax }) => {
            if (!mounted) return;

            elements.forEach((element) => {
                if (element.jarallax) return;

                const speed = Number(element.dataset.speed ?? "0.8");
                jarallax(element, {
                    imgElement: ".jarallax-img",
                    speed: Number.isNaN(speed) ? 0.8 : speed,
                });
                initialized.push(element);
            });
        });

        return () => {
            mounted = false;
            initialized.forEach((element) => element.jarallax?.destroy());
        };
    }, []);

    return null;
}

export default FinancialAnimations;
