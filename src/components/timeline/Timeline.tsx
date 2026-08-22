"use client";

import { useReveal } from "@/hooks/use-reveal";
import { memories } from "@/data/memories";
import type { Memory } from "@/types/memory";

function TimelineItem({
  memory,
  index,
}: {
  memory: Memory;
  index: number;
}) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  const isEven = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={`relative grid items-center gap-8 pl-14 transition-all duration-700 sm:grid-cols-2 sm:pl-0 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Content — left on even, right on odd (desktop) */}
      <div
        className={`${isEven ? "sm:order-1 sm:text-right" : "sm:order-2 sm:text-left"} flex flex-col gap-3`}
      >
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-hero-blue">
          {memory.date}
        </span>
        <h3 className="chromatic font-display text-2xl uppercase sm:text-3xl">
          {memory.title}
        </h3>
        <p className="font-serif text-lg italic text-white/70">{memory.text}</p>
      </div>

      {/* Photo placeholder — right on even, left on odd (desktop) */}
      <div
        className={`${isEven ? "sm:order-2" : "sm:order-1"} flex justify-center`}
      >
        {memory.image ? (
          <img
            src={memory.image}
            alt={memory.title}
            className="h-48 w-48 rounded-sm object-contain sm:h-64 sm:w-64"
          />
        ) : (
          <div className="halftone h-48 w-48 rounded-sm bg-hero-pink/10 text-hero-pink/[0.06] mix-blend-overlay sm:h-64 sm:w-64" />
        )}
      </div>

      {/* Dot on the timeline line */}
      <div className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-1/2">
        <div className="h-3 w-3 rounded-full border-2 border-hero-pink bg-background" />
      </div>
    </li>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="relative px-6 py-24 sm:py-32">
      <header className="mx-auto mb-16 max-w-2xl text-center">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-hero-red">
          Línea de tiempo
        </span>
        <h2 className="chromatic mt-4 font-display text-4xl uppercase sm:text-6xl">
          Nuestra historia
        </h2>
      </header>

      <ol className="relative mx-auto flex max-w-5xl flex-col gap-24">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-hero-pink/50 to-transparent sm:left-1/2" />
        {memories.map((m, i) => (
          <TimelineItem key={m.id} memory={m} index={i} />
        ))}
      </ol>
    </section>
  );
}
