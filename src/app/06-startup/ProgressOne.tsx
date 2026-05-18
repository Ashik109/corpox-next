"use client";

import React, { useEffect, useRef, useState } from "react";

const progressItems = [
  { title: "Business Solutions", percent: 80 },
  { title: "Creative Ideas", percent: 60 },
  { title: "App Development", percent: 70 },
  { title: "Market Research", percent: 95 },
];

const SVG_SIZE = 220;
const CENTER = SVG_SIZE / 2;
const STROKE_WIDTH = 20;
const RADIUS = (SVG_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const ANIMATION_DURATION_MS = 2800;

function ProgressCircle({ title, percent }: { title: string; percent: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(CIRCUMFERENCE);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    let frameId = 0;
    let hasAnimated = false;

    const runAnimation = () => {
      const start = performance.now();

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.ceil(percent * eased);
        const offset = CIRCUMFERENCE - (currentValue * CIRCUMFERENCE) / 100;

        setDisplayValue(currentValue);
        setStrokeDashoffset(offset);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;
        hasAnimated = true;
        runAnimation();
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [percent]);

  return (
    <article className="radial-progress-single" ref={rootRef}>
      <div className="radial-progress" data-percent={percent} data-bar-color="#5237f9" data-track-color="#0f0f11">
        <svg
          className="radial-progress"
          data-countervalue={percent}
          width={SVG_SIZE}
          height={SVG_SIZE}
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          role="img"
          aria-label={`${title}: ${displayValue}`}
        >
          <circle
            className="bar-static"
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#0f0f11"
            strokeWidth={STROKE_WIDTH}
          />
          <circle
            className="bar--animated"
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#5237f9"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
          />
        </svg>
        <div className="circle-text">
          <span className="count countervalue">{displayValue}</span>
        </div>
      </div>
      <div className="circle-info">
        <h4 className="title mb--10">{title}</h4>
        <h6 className="subtitle">Presentation your skill</h6>
      </div>
    </article>
  );
}

function ProgressOne() {
  return (
    <section className="tmp-progressbar-area tmp-section-gap" aria-labelledby="progress-one-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4
                className="subtitle"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Our Experience
              </h4>
              <h2
                id="progress-one-title"
                className="title w-600 mb--20"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
              >
                25+ years work Experience
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt--20">
          <div className="col-lg-10 offset-lg-1 mt--20">
            <div className="row g-5 row--30">
              {progressItems.map((item) => (
                <div key={item.title} className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12">
                  <ProgressCircle title={item.title} percent={item.percent} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressOne;
