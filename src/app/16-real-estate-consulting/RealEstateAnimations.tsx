"use client";

import { useEffect } from "react";
import "jarallax/dist/jarallax.css";
import { useAosOnce } from "../components/useAosOnce";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";

type JarallaxElement = HTMLElement & {
    jarallax?: {
        destroy: () => void;
    };
};

function RealEstateAnimations() {
    useAosOnce();
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

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>(".tmponhover"));

        const cleanup = elements.map((element) => {
            const handleMouseMove = (event: MouseEvent) => {
                const rect = element.getBoundingClientRect();
                element.style.setProperty("--x", `${event.clientX - rect.left}px`);
                element.style.setProperty("--y", `${event.clientY - rect.top}px`);
            };

            element.addEventListener("mousemove", handleMouseMove);
            return () => element.removeEventListener("mousemove", handleMouseMove);
        });

        return () => cleanup.forEach((removeListener) => removeListener());
    }, []);

    return null;
}

export default RealEstateAnimations;
