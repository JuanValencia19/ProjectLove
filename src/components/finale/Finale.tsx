"use client";

import { useReveal } from "@/hooks/use-reveal";
import { finale } from "@/data/finale";

export function Finale() {
  const { ref, shown } = useReveal();

  return (
    <section ref={ref} className="relative px-6 py-32 text-center sm:py-40">
      <div
        className={`transition-all duration-1000 ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <p className="chromatic font-display text-4xl uppercase sm:text-6xl lg:text-7xl">
          {finale.message}
        </p>
        <p className="mx-auto mt-6 max-w-md font-serif text-xl italic text-white/60 sm:text-2xl">
          {finale.line}
        </p>
        <div className="halftone mx-auto mt-12 h-px w-24 text-hero-pink/40" />
      </div>
    </section>
  );
}
