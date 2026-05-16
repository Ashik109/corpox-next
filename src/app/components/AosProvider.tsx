"use client";

import { useAosOnce } from "./useAosOnce";

/** Initializes AOS globally for every page (scroll-in animations). */
export default function AosProvider() {
  useAosOnce();
  return null;
}
