import { useEffect, useRef, useState } from "react";

const paragraphs = [
  "Si tuviera que dibujar el universo, empezaría por ti. Por tu risa cuando nadie más la escucha, por esa forma tuya de convertir un día cualquiera en un capítulo que vale la pena guardar.",
  "He aprendido que el amor no es un salto perfecto entre edificios: es la mano que aparece a mitad de la caída. Y tú siempre apareces.",
  "Así que aquí estoy, un año después, con el mismo vértigo del primer día y la misma certeza: en cada universo, te elijo a ti.",
];

export function LoveLetter() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="carta" className="relative px-6 py-24 sm:py-32">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-hero-blue">
          Issue #02
        </span>
        <h2 className="chromatic mt-4 font-display text-4xl uppercase sm:text-6xl">
          Carta de amor
        </h2>
      </header>

      <div
        ref={ref}
        className={`mx-auto max-w-2xl transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="halftone relative overflow-hidden rounded-sm border-2 border-white/15 bg-white/[0.04] p-8 text-white/[0.05] sm:p-12">
          <div className="relative">
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-hero-pink">
              Para ti
            </span>

            <div
              className={`relative mt-6 overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
                open ? "max-h-[900px]" : "max-h-40"
              }`}
            >
              <div className="space-y-6 font-serif text-lg italic leading-relaxed text-white/80 sm:text-xl">
                {paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              {!open && (
                <div className="veil pointer-events-none absolute inset-x-0 bottom-0 h-24" />
              )}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <span className="font-display text-xl uppercase text-hero-pink">
                Siempre, yo
              </span>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="border-2 border-hero-pink px-4 py-2 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-hero-pink hover:text-[oklch(0.11_0.02_290)]"
              >
                {open ? "Cerrar carta" : "Abrir carta"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
