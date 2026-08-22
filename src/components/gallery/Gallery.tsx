"use client";

import { useReveal } from "@/hooks/use-reveal";
import { memories } from "@/data/memories";
import type { Memory } from "@/types/memory";

function GalleryCard({
  memory,
  index,
}: {
  memory: Memory;
  index: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex flex-col overflow-hidden rounded-sm border-2 border-white/15 bg-white/[0.04] text-white/80 transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {memory.image ? (
          <img
            src={memory.image}
            alt={memory.title}
            className="aspect-[4/3] w-full object-contain"
          />
        ) : (
          <div className="halftone aspect-[4/3] bg-hero-blue/[0.04] text-hero-blue/[0.06] mix-blend-overlay" />
        )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-hero-blue">
          {memory.date}
        </span>
        <h3 className="chromatic font-display text-xl uppercase sm:text-2xl">
          {memory.title}
        </h3>
        <p className="mt-auto font-serif text-sm italic leading-relaxed text-white/70 sm:text-base">
          {memory.text}
        </p>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24 sm:py-32">
      <header className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="chromatic font-display text-4xl uppercase sm:text-6xl">
          Momentos
        </h2>
      </header>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((m, i) => (
          <GalleryCard key={m.id} memory={m} index={i} />
        ))}
      </div>
    </section>
  );
}
