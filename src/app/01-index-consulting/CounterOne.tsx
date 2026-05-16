'use client'
import { useEffect, useRef } from "react";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface OdometerElement extends HTMLElement {
  od?: any;
}

function CounterOne() {
  useTitleSplitAnimation();
  const odometerRefs = useRef<OdometerElement[]>([]);
  const jumpWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let jumpTween: gsap.core.Tween | undefined;

    /* =========================
       ODOMETER
    ========================== */
    let observer: IntersectionObserver;

    import("odometer").then((module) => {
      const Odometer = module.default;

      odometerRefs.current.forEach((el) => {
        el.od = new Odometer({
          el,
          value: 0,
          format: "d",
          duration: 2000,
        });
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as OdometerElement;
            if (entry.isIntersecting && !el.classList.contains("odometer-triggered")) {
              const value = Number(el.dataset.count);
              el.od?.update(value);
              el.classList.add("odometer-triggered");
            }
          });
        },
        { threshold: 0.5 }
      );

      odometerRefs.current.forEach((el) => observer.observe(el));
    });

    /* =========================
       JUMP ANIMATION
    ========================== */
    const deviceWidth = window.innerWidth;
    if (deviceWidth > 991 && jumpWrapperRef.current) {
      const jumpItems = jumpWrapperRef.current.querySelectorAll(".tmp-jump__item");
      if (jumpItems.length) {
        // initial state
        gsap.set(jumpItems, { opacity: 0, scale: 1.15, rotation: 0 });

        // animate on scroll
        jumpTween = gsap.to(jumpItems, {
          scrollTrigger: {
            trigger: jumpWrapperRef.current,
            start: "top 95%",
          },
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "bounce",
          stagger: 0.3,
        });
      }
    }

    return () => {
      jumpTween?.scrollTrigger?.kill();
      jumpTween?.kill();
      if (observer) observer.disconnect();
    };
  }, []);

  const setOdometerRef = (el: OdometerElement | null) => {
    if (el && !odometerRefs.current.includes(el)) odometerRefs.current.push(el);
  };

  return (
    <>
      {/* Start Main Counter up-5 Area */}
      <div className="tmp-counterup-area tmp-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left" />
                  <span className="subtitle">
                    <span className="number">+15000</span>
                    <span className="subtitle-text">Trusted</span>
                  </span>
                  <div className="line-separator line-right" />
                </div>
                <h2 className="title w-700 tmp-title-split">Our Fun Facts</h2>
              </div>
            </div>
          </div>

          <div
            className="row g-5 mt--20 tmp_jump_animation-wrapper"
            ref={jumpWrapperRef}
          >
            {[
              { count: "199", suffix: "K", title: "Happy Clients." },
              { count: "575", suffix: "+", title: "Employees" },
              { count: "69", suffix: "M", title: "Useful Programs" },
              { count: "500", suffix: "+", title: "Useful Programs" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="col-lg-3 col-md-6 col-sm-6 col-12 tmp-jump__item"
              >
                <div className="count-box counter-style-4 tmp-card text-center without-border tmponhover">
                  <div>
                    <div className="count-number">
                      <span
                        className="odometer"
                        data-count={item.count}
                        ref={setOdometerRef}
                      >
                        000
                      </span>
                      {item.suffix}
                    </div>
                  </div>
                  <h5 className="counter-title">{item.title}</h5>
                  <div className="left-hover-counter" />
                  <div className="right-hover-counter" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Main Counter up-5 Area */}
    </>
  );
}

export default CounterOne;
