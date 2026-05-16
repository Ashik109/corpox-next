'use client'
import { useEffect, useRef } from 'react';

/**
 * Custom hook for hover animation that tracks mouse position
 * and sets CSS custom properties --x and --y on the element
 */
export function useHoverAnimation<T extends HTMLElement = HTMLDivElement>() {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left; // element X position
      const y = e.clientY - rect.top;  // element Y position
      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return elementRef;
}

