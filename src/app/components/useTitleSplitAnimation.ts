"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useTitleSplitAnimation(selector: string = ".tmp-title-split") {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    elements.forEach((element) => {
      try {
        const splitText = new SplitType(element, { types: "chars,words" });
        const chars = splitText.chars || [];

        if (chars.length === 0) return;

        gsap.from(chars, {
          duration: 1,
          delay: 0.1,
          x: 20,
          autoAlpha: 0,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      } catch (error) {
        console.error("SplitText animation error:", error);
      }
    });

    ScrollTrigger.refresh();
  }, [selector]);
}