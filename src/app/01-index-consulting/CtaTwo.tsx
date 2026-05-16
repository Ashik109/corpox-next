"use client";

import React, { useEffect, useRef, useState } from "react";
import "jarallax/dist/jarallax.css";

export default function CtaTwo() {
  const jarallaxRef = useRef<HTMLDivElement | null>(null);

  const words = ["Consulting.", "Business.", "Innovation."];
  const [activeIndex, setActiveIndex] = useState(0);

  // Jarallax init
  useEffect(() => {
    const initJarallax = async () => {
      if (typeof window !== "undefined") {
        const { jarallax } = await import("jarallax");

        if (jarallaxRef.current) {
          jarallax(jarallaxRef.current, {
            speed: 0.8,
          });
        }
      }
    };

    initJarallax();

    return () => {
      if (
        jarallaxRef.current &&
        (jarallaxRef.current as any).jarallax
      ) {
        (jarallaxRef.current as any).jarallax.destroy();
      }
    };
  }, []);

  // Text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2000); // 2s delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={jarallaxRef}
      className="cta-main-wrapper jarallax large-height bg-cta-modern" data-speed=".8"
    data-black-overlay={8}
    >
      <div className="container">
        <div className="call-to-action-modern-wrapper">
          <h2 className="title">
            Let's discuss your <br />
            <span className="header-caption">
              <span className="cd-headline zoom">
                <span className="cd-words-wrapper">

                  {words.map((word, index) => (
                    <b
                      key={index}
                      className={`theme-gradient ${
                        index === activeIndex
                          ? "is-visible"
                          : "is-hidden"
                      }`}
                    >
                      {word}
                    </b>
                  ))}

                </span>
              </span>
            </span>
          </h2>

          <div className="right-wrapper">
            <p>
              Looking for Collaboration? <br />
              <a href="mailto:info@yourdomain.com">
                info@yourdomain.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}