"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type BusinessRotatingWordsProps = {
    words: string[];
    mode?: "clip" | "zoom";
};

function BusinessRotatingWords({ words, mode = "clip" }: BusinessRotatingWordsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const wrapperRef = useRef<HTMLSpanElement | null>(null);
    const textRef = useRef<HTMLElement | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const updateWidth = useCallback(() => {
        if (mode === "clip" && wrapperRef.current && textRef.current) {
            wrapperRef.current.style.width = `${textRef.current.offsetWidth}px`;
        }
    }, [mode]);

    useEffect(() => {
        if (mode !== "clip") {
            intervalRef.current = setInterval(() => {
                setActiveIndex((current) => (current + 1) % words.length);
            }, 2200);

            return () => {
                if (intervalRef.current) clearInterval(intervalRef.current);
            };
        }

        const changeWord = () => {
            if (!wrapperRef.current) return;

            wrapperRef.current.style.width = "2px";
            timeoutRef.current = setTimeout(() => {
                setActiveIndex((current) => (current + 1) % words.length);
            }, 400);
        };

        intervalRef.current = setInterval(changeWord, 2500);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [mode, words.length]);

    useEffect(() => {
        if (mode === "clip") {
            requestAnimationFrame(updateWidth);
        }
    }, [activeIndex, mode, updateWidth]);

    return (
        <span className="header-caption">
            <span className={`cd-headline ${mode} is-full-width`}>
                <span
                    ref={mode === "clip" ? wrapperRef : null}
                    className="cd-words-wrapper"
                    style={
                        mode === "clip"
                            ? {
                                  width: "2px",
                                  overflow: "hidden",
                                  display: "inline-block",
                                  transition: "width 0.5s ease",
                              }
                            : undefined
                    }
                >
                    {words.map((word, index) => (
                        <b
                            key={word}
                            ref={mode === "clip" && index === activeIndex ? textRef : null}
                            className={`${index === activeIndex ? "is-visible" : "is-hidden"} theme-gradient`}
                            style={
                                mode === "clip"
                                    ? {
                                          position: index === activeIndex ? "relative" : "absolute",
                                          whiteSpace: "nowrap",
                                          left: 0,
                                          top: 0,
                                      }
                                    : undefined
                            }
                        >
                            {word}
                        </b>
                    ))}
                </span>
            </span>
        </span>
    );
}

export default BusinessRotatingWords;
