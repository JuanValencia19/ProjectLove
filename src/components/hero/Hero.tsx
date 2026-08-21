"use client";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hero-red/20 via-background to-hero-blue/10 animate-slow-zoom" />
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
          En cada universo, en cada versión de esta historia, te sigo eligiendo
          a ti.
        </p>
      </div>
    </section>
  );
}
