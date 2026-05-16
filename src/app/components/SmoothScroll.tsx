"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import AOS from "aos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STICKY_HEADER_OFFSET = 100;

/** Full-page smooth scroll (wheel/trackpad) + in-page anchor links on every route. */
export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.15,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      anchors: {
        offset: -STICKY_HEADER_OFFSET,
      },
    });

    const onScroll = () => {
      AOS.refresh();
      ScrollTrigger.update();
    };

    lenis.on("scroll", onScroll);

    if (window.location.hash) {
      requestAnimationFrame(() => {
        lenis.scrollTo(window.location.hash, { offset: -STICKY_HEADER_OFFSET });
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
