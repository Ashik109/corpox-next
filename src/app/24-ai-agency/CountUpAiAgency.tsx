"use client";

import { useEffect, useRef, useState } from "react";

type CountUpAiAgencyProps = {
    value: number;
    format?: "compact" | "plain";
};

function CountUpAiAgency({ value, format = "plain" }: CountUpAiAgencyProps) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let frame = 0;
        let startTime = 0;
        let started = false;

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / 1600, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(value * eased));

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    frame = requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value]);

    return (
        <span ref={ref}>
            {format === "compact" && count >= 1000 ? `${Math.round(count / 1000)}K` : count.toLocaleString("en-US")}
        </span>
    );
}

export default CountUpAiAgency;
