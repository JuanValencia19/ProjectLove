---
name: ourstory-context
description: "Contexto específico del proyecto OurStory (ProjectLove): identidad, arquitectura, decisiones y convenciones. Usar antes de cambios importantes en diseño, arquitectura, componentes o experiencia de usuario. OurStory, ProjectLove, proyecto, contexto."
---

# OurStory Context

## Propósito

Contexto base del proyecto para los 7 agentes. Leer SIEMPRE primero; luego los docs dirigidos por rol (ahorro de tokens en vez de leer los 8 docs completos). No inventar specs, APIs ni contratos: si el doc requerido está vacío o es esqueleto, reportarlo y detenerse.

## 1. Identidad

- **Nombre:** OurStory (en docs y referencias). El PRD dice "ProjectLove" — contradicción conocida, reportarla, no resolverla.
- Experiencia web privada, cinematográfica de aniversario. Contenido en español. Mobile-first.

## 2. Stack

Next.js + React + TypeScript + Tailwind + shadcn/ui (justificado en PRD §14). Framer Motion/GSAP solo si se justifica. La referencia usa CSS + IntersectionObserver, sin framer-motion.

## 3. Docs — estado real

- `docs/PRD.md` — definido (550 líneas). Hero → Introduction → Timeline → Memories → Love Letter → Proximity → Finale. MVP1 (sin backend) + MVP2 (Proximity). Memory en §8.4: `id, date, chapter, title, description, image, location, quote, featured`.
- `docs/ARCHITECTURE.md` — definido (509 líneas). Principios: references/ read-only, contenido separado de presentación, mobile-first. Estructura src/: app/, components/, data/, hooks/, lib/, types/. Animación 3 niveles (CSS → IO → librerías). Tokens en §10. §20 límites de capas, §21 regla de implementación.
- `docs/MOTION-SYSTEM.md` — definido (170 líneas). Micro 150-250ms, Normal 300-500ms, Entrada 600-1000ms, Especial 1000-2000ms. Easing `cubic-bezier(0.16, 1, 0.3, 1)`. Solo transform/opacity. prefers-reduced-motion.
- `docs/DATA-MODEL.md` — definido (121 líneas). Memory: `id, date, title, text, image?`. Persistencia estática en `src/data/`, sin BD.
- `docs/PROXIMITY-SYSTEM.md` — definido (718 líneas, el más completo). Umbral ≤5m "Estamos juntos". 8 estados. Componente Proximity recibe solo status/distance/accuracy. Hooks: useGeolocation → useRealtimeLocation → useProximity. §31 decisiones pendientes: no inventar.
- `docs/DECISIONS.md` — definido (165 líneas, D-001 a D-014).
- `docs/COMPONENT-SPEC.md` — **esqueleto** (propósito + árbol; specs por componente pendientes).
- `docs/DESIGN-DIRECTION.md` — **esqueleto** (solo encabezados; NO usar como criterio visual).

## 4. Orden canónico de lectura (D-012)

PRD → DESIGN-DIRECTION → ARCHITECTURE → COMPONENT-SPEC → MOTION-SYSTEM → DATA-MODEL → PROXIMITY-SYSTEM → DECISIONS. Regla: decisiones explícitas del usuario > inferencias del agente.

## 5. Referencia visual — `references/lovable/` (fuente de verdad VISUAL, read-only)

La UI visual DEBE replicar esta referencia (paleta, tipografías, estética cómic, motion CSS+IO). Funcionalidades nuevas (proximity) respetan los docs, pero la UI visual sigue la referencia.

**Paleta exacta (OKLCH):**
- `--hero-red` oklch(0.58 0.23 27) ≈ #E3121E
- `--hero-pink` oklch(0.66 0.28 350) ≈ #FF00AA
- `--hero-blue` oklch(0.82 0.15 205) ≈ #00DFF2
- Fondo oklch(0.11 0.02 290) ≈ #04040A; texto oklch(0.98 0 0) ≈ #F8F8F8
- Secundario white/70-80; bordes white/15; cards white/4%; halftone white/5-7% (mix-blend-overlay); gradiente `--gradient-veil`

**Tipografías (Google Fonts):** Bungee Inline (display, uppercase, leading 0.85-0.9, text-6xl→9xl), Playfair Display 600/500-italic (serif lírico), Inter Tight 400/600 (sans). Labels cómic 10px bold uppercase tracking 0.3-0.4em. Aberración cromática: text-shadow 2px pink, -2px blue.

**Estructura UI (página única vertical, sin nav):** Hero (min-h-100svh, img fondo slow-zoom, veil, halftone, badge "Issue #01", h1 "Project/Love" con "Love" pink, tagline serif italic) → Cita → Timeline (label "Línea de tiempo" red, ol 5 capítulos, línea central gradiente, dots pink, fotos aspect-4/3, móvil columna única con línea izquierda / sm 2 columnas alternadas) → LoveLetter (badge "Issue #02" blue, card expandible max-h-40→900px con transition 1000ms, "Para ti" pink, firma "Siempre, yo") → [Proximity, Finale].

**Motion real:** drift-in (opacity 0→1 + translateY 24px→0, 1s cubic-bezier(0.16,1,0.3,1) both, delays 0/120/260ms), slow-zoom (scale 1.06→1.14 24s infinite alternate), useReveal IO threshold 0.25 rootMargin -10%, transition-all duration-700 ease-out, dot scale-0→100 duration-500.

**Nota:** hero img `spider-love.jpg` AUSENTE — recuperar de Lovable o reproducir.

## 6. Contradicciones conocidas (REPORTAR, no resolver)

1. Nombre: PRD "ProjectLove" vs resto "OurStory".
2. Memory: PRD `description/chapter/location/quote/featured` vs DATA-MODEL `text` (renombrado) + image opcional.
3. AGENTS.md viejo declaraba MOTION/DATA/PROXIMITY/DECISIONS "pending" — desactualizado, ya tienen contenido.
4. Gallery: PRD no la lista; ARCHITECTURE/COMPONENT-SPEC sí.
5. Proximidad: PRD 4 estados conceptuales vs 8 reales.

## 7. Reglas clave

- Si la spec requerida falta o es esqueleto: reportar y detenerse — no inventar.
- Contenido separado de presentación (`src/data/`).
- Animar solo transform/opacity; respetar prefers-reduced-motion.
- Proximidad: umbral ≤5m "Estamos juntos", 8 estados; el componente no usa geolocation/WebSocket/Supabase directamente.
- `references/lovable/` read-only; la implementación vive en `src/`.
- No introducir decisiones de arquitectura nuevas sin documentarlas.