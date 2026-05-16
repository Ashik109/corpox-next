"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initializes AOS once per mount for scroll-in animations.
 */
export function useAosOnce() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 80,
            once: true,
        });
        AOS.refresh();
    }, []);
}
