"use client";

import { useReveal } from "@/hooks/use-reveal";
import { storyIntro } from "@/data/story-intro";

export function StoryIntro() {
  const { ref, shown } = useReveal();
  const highlight = "siempre volvemos al mismo tejado";
  const idx = storyIntro.quote.indexOf(highlight);
  const before = storyIntro.quote.slice(0, idx);
  const after = storyIntro.quote.slice(idx + highlight.length);

  return (
    <section ref={ref} className="px-6 py-28 text-center">
      <p
        className={`mx-auto max-w-2xl font-serif text-2xl leading-snug italic text-white/70 sm:text-4xl transition-opacity duration-700 ${shown ? "opacity-100" : "opacity-0"}`}
      >
        &ldquo;{before}
        <span className="text-hero-pink">{highlight}</span>
        {after}&rdquo;
      </p>
    </section>
  );
}
