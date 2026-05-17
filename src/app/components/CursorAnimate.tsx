"use client";

import { useEffect, useRef } from "react";

function isHoverTarget(target: EventTarget | null) {
  return target instanceof Element
    ? target.closest("a, button, .cursor-pointer")
    : null;
}

export default function CursorAnimate() {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;

    if (!inner || !outer) return;

    const moveCursor = (event: MouseEvent) => {
      const transform = `translate(${event.clientX}px, ${event.clientY}px)`;

      inner.style.transform = transform;
      outer.style.transform = transform;
    };

    const addHover = (event: MouseEvent) => {
      if (!isHoverTarget(event.target)) return;

      inner.classList.add("cursor-hover");
      outer.classList.add("cursor-hover");
    };

    const removeHover = (event: MouseEvent) => {
      const leavingTarget = isHoverTarget(event.target);
      const enteringTarget = isHoverTarget(event.relatedTarget);

      if (!leavingTarget || enteringTarget) return;

      inner.classList.remove("cursor-hover");
      outer.classList.remove("cursor-hover");
    };

    inner.style.visibility = "visible";
    outer.style.visibility = "visible";

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseover", addHover);
    document.body.addEventListener("mouseout", removeHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseover", addHover);
      document.body.removeEventListener("mouseout", removeHover);
    };
  }, []);

  return (
    <>
      <div ref={innerRef} className="mouse-cursor cursor-inner" />
      <div ref={outerRef} className="mouse-cursor cursor-outer" />
    </>
  );
}
