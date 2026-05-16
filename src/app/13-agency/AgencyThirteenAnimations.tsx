"use client";

import { useEffect } from "react";
import { useAosOnce } from "../components/useAosOnce";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";

function AgencyThirteenAnimations() {
    useAosOnce();
    useTitleSplitAnimation(".tmp-title-split, .tmp-title-split-p");

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

export default AgencyThirteenAnimations;
