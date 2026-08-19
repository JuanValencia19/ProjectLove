import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/spider-love.jpg.asset.json";
import { Timeline } from "@/components/Timeline";
import { LoveLetter } from "@/components/LoveLetter";
const heroArt = heroAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProjectLove — Nuestra historia en cada universo" },
      {
        name: "description",
        content:
          "Una historia de amor interactiva y cinematográfica: recuerdos, cartas y momentos contados como un cómic.",
      },
      { property: "og:title", content: "ProjectLove — Nuestra historia en cada universo" },
      {
        property: "og:description",
        content:
          "Una historia de amor interactiva y cinematográfica: recuerdos, cartas y momentos contados como un cómic.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--a66272b4-b18c-4654-afa9-6b194fecc3de.lovable.app/__l5e/assets-v1/bc30ca0b-3281-4fdd-b0fd-d6ed08c7b639/spider-love.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-[oklch(0.11_0.02_290)] text-[oklch(0.98_0_0)]">
      <section className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden">
        <img
          src={heroArt}
          alt="Miles Morales y Gwen Stacy recostados juntos sobre un tejado al atardecer, trazando un corazón luminoso en el cielo"
          width={736}
          height={1308}
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover object-center"
        />
        <div className="veil absolute inset-0" />
        <div className="halftone absolute inset-0 text-white/[0.07] mix-blend-overlay" />

        <div className="relative z-10 w-full px-6 pb-[max(3rem,env(safe-area-inset-bottom))] text-center">
          <span className="animate-drift-in inline-block bg-hero-red px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase">
            Issue #01
          </span>

          <h1
            className="animate-drift-in chromatic mt-5 font-display text-6xl leading-[0.85] uppercase sm:text-8xl lg:text-9xl"
            style={{ animationDelay: "120ms" }}
          >
            Project
            <br />
            <span className="text-hero-pink">Love</span>
          </h1>

          <p
            className="animate-drift-in mx-auto mt-6 max-w-sm font-serif text-xl italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-3xl"
            style={{ animationDelay: "260ms" }}
          >
            En cada universo, en cada versión de esta historia, te sigo eligiendo a ti.
          </p>
        </div>
      </section>

      <section className="px-6 py-28 text-center">
        <p className="mx-auto max-w-2xl font-serif text-2xl leading-snug italic text-white/70 sm:text-4xl">
          &ldquo;No importa cuántas veces caigamos, importa que
          <span className="text-hero-pink"> siempre volvemos al mismo tejado</span>.&rdquo;
        </p>
      </section>

      <Timeline />
      <LoveLetter />
    </main>
  );
}
