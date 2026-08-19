import { useEffect, useRef, useState } from "react";

type Memory = {
  date: string;
  title: string;
  text: string;
};

const memories: Memory[] = [
  {
    date: "Capítulo 01",
    title: "El primer día",
    text: "Ese momento en el que el universo decidió cruzar nuestras líneas y nada volvió a ser igual.",
  },
  {
    date: "Capítulo 02",
    title: "Nuestra primera cita",
    text: "Risas nerviosas, miradas largas y la certeza silenciosa de que esto iba a durar.",
  },
  {
    date: "Capítulo 03",
    title: "El viaje",
    text: "Cambiamos de ciudad, de clima y de planes, pero nunca de compañía.",
  },
  {
    date: "Capítulo 04",
    title: "Los días difíciles",
    text: "Aprendimos que amarse también es quedarse cuando el cielo se pone gris.",
  },
  {
    date: "Capítulo 05",
    title: "Hoy",
    text: "Un año más contigo y sigo eligiendo este tejado, esta historia, este universo.",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

function TimelineItem({ memory, index }: { memory: Memory; index: number }) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  const flipped = index % 2 === 1;

  return (
    <li
      ref={ref}
      className={`relative grid gap-6 pl-14 transition-all duration-700 ease-out sm:grid-cols-2 sm:items-center sm:gap-10 sm:pl-0 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <span
        className={`absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-hero-pink bg-[oklch(0.11_0.02_290)] transition-transform duration-500 sm:left-1/2 ${
          shown ? "scale-100" : "scale-0"
        }`}
      />

      <div className={flipped ? "sm:order-2 sm:pl-12" : "sm:pr-12 sm:text-right"}>
        <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-hero-blue">
          {memory.date}
        </span>
        <h3 className="chromatic mt-3 font-display text-3xl uppercase leading-[0.9] sm:text-4xl">
          {memory.title}
        </h3>
        <p className="mt-4 font-serif text-lg italic text-white/70 sm:text-xl">{memory.text}</p>
      </div>

      <div className={flipped ? "sm:order-1 sm:pr-12" : "sm:pl-12"}>
        <div className="halftone relative aspect-[4/3] w-full overflow-hidden rounded-sm border-2 border-white/15 bg-white/[0.04] text-white/[0.06]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-white/30">
              Foto
            </span>
          </div>
        </div>
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
          <TimelineItem key={m.title} memory={m} index={i} />
        ))}
      </ol>
    </section>
  );
}
