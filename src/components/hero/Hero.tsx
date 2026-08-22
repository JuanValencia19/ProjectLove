"use client";

export function Hero() {
  return (
    <section className="relative flex min-h-[120svh] flex-col items-center justify-end overflow-hidden bg-background">
      {/* ── Mobile/Tablet: single image covers viewport ── */}
      <img
        src="/images/hero/spider love.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center animate-slow-zoom md:hidden"
      />

      {/* ── Desktop: two-layer composition ── */}
      {/* Layer 1 — Blurred background fills viewport */}
      <img
        src="/images/hero/spider love.jpeg"
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover object-center blur-xl brightness-50 md:block"
      />
      {/* Layer 2 — Full image centered, no crop */}
      <div className="absolute inset-0 hidden items-center justify-center md:flex">
        <img
          src="/images/hero/spider love.jpeg"
          alt=""
          className="max-h-[85vh] max-w-[90vw] object-contain animate-slow-zoom"
        />
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 animate-scanlines opacity-[0.04] md:opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.8) 3px, rgba(255,255,255,0.8) 4px)",
        }}
      />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 w-full px-6 pb-[max(3rem,env(safe-area-inset-bottom))] text-center">
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
          Hoy y siempre tu eres mi proyecto de amor, te amo 3 millones.
        </p>
      </div>
    </section>
  );
}
