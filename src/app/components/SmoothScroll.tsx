"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import AOS from "aos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STICKY_HEADER_OFFSET = 100;

/** Full-page smooth scroll (wheel/trackpad) + in-page anchor links on every route. */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    let scrollTriggerFrame = 0;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.15,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      prevent: (node) => node.closest(".mainmenu-nav, .popup-mobile-menu") !== null,
      anchors: {
        offset: -STICKY_HEADER_OFFSET,
      },
    });

    const onScroll = () => {
      if (scrollTriggerFrame) return;

      scrollTriggerFrame = requestAnimationFrame(() => {
        scrollTriggerFrame = 0;
        ScrollTrigger.update();
      });
    };

    lenis.on("scroll", onScroll);

    requestAnimationFrame(() => {
      lenis.resize();
      AOS.refresh();
      ScrollTrigger.refresh();
    });

    if (window.location.hash) {
      requestAnimationFrame(() => {
        lenis.scrollTo(window.location.hash, { offset: -STICKY_HEADER_OFFSET });
      });
    }

    return () => {
      cancelAnimationFrame(scrollTriggerFrame);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
