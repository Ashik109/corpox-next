"use client";

import React, { ReactNode, forwardRef, useEffect, useRef } from "react";
import { useTitleSplitContext } from "./TitleSplitProvider";

interface TitleSplitWrapperProps {
  children: ReactNode;
  tag?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TitleSplitWrapper = forwardRef<HTMLElement, TitleSplitWrapperProps>(
  ({ children, tag = "div", className = "", style = {} }, ref) => {
    const elementRef = useRef<HTMLElement>(null);
    const { registerElement, unregisterElement } = useTitleSplitContext();

    useEffect(() => {
      const el = (ref as React.RefObject<HTMLElement>)?.current || elementRef.current;
      if (el) {
        registerElement(el);
        return () => unregisterElement(el);
      }
    }, [registerElement, unregisterElement, ref]);

    const finalClassName = className.includes("tmp-title-split")
      ? className
      : `${className} tmp-title-split`.trim();

    return React.createElement(tag, { ref: ref || elementRef, className: finalClassName, style }, children);
  }
);

TitleSplitWrapper.displayName = "TitleSplitWrapper";

export default TitleSplitWrapper;