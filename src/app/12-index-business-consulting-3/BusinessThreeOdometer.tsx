"use client";

import { useEffect, useRef } from "react";

type OdometerInstance = {
    update: (value: number) => void;
};

type OdometerConstructor = new (options: {
    el: HTMLElement;
    value: number;
    format: string;
    duration: number;
}) => OdometerInstance;

interface OdometerElement extends HTMLElement {
    od?: OdometerInstance;
}

function BusinessThreeOdometer({ value, format = "(,ddd)" }: { value: number; format?: string }) {
    const ref = useRef<OdometerElement | null>(null);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;
        let cancelled = false;

        import("odometer").then((module) => {
            if (cancelled || !ref.current) return;

            const element = ref.current;
            const Odometer = module.default as OdometerConstructor;

            element.od = new Odometer({
                el: element,
                value: 0,
                format,
                duration: 2000,
            });

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const current = entry.target as OdometerElement;

                        if (entry.isIntersecting && !current.classList.contains("odometer-triggered")) {
                            current.od?.update(value);
                            current.classList.add("odometer-triggered");
                        }
                    });
                },
                { threshold: 0.45 }
            );

            observer.observe(element);
        });

        return () => {
            cancelled = true;
            observer?.disconnect();
        };
    }, [format, value]);

    return (
        <span ref={ref} className="odometer" data-count={value}>
            0
        </span>
    );
}

export default BusinessThreeOdometer;
