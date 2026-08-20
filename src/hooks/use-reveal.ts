"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  /** Visibility fraction required to trigger the reveal (spec default 0.25). */
  threshold?: number;
  /** IntersectionObserver rootMargin (spec default "0px 0px -10% 0px"). */
  rootMargin?: string;
};

/**
 * Reveal-on-scroll hook (ARCHITECTURE §8): exposes `{ ref, shown }`, observes
 * via IntersectionObserver, flips `shown` once and disconnects. SSR-safe: the
 * observer is created inside useEffect, so no window/document access on render.
 */
export function useReveal<T extends HTMLElement>(options: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  const { threshold = 0.25, rootMargin = "0px 0px -10% 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return { ref, shown };
}