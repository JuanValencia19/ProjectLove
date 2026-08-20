"use client";

import { useEffect, useState } from "react";

/**
 * Normalized scroll progress (0..1) of the whole document, driven by a passive
 * scroll listener throttled with requestAnimationFrame. Standalone: not wired
 * to any component yet (Slice 1). Cleans up both listener and pending frame on
 * unmount.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return progress;
}