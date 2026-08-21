# Auditoría Inicial del Proyecto

**Fecha:** 2026-08-20  
**Alcance:** documentación de `docs/`, producción en `src/`, referencia en `references/lovable/` e historial de Git.  
**Fase observada:** Phase 0 — Project Foundation & Design Definition.

## Diagnóstico ejecutivo

### Completado

- 🟢 **Foundation:** estructura Next.js, configuración, fuentes, metadata y tokens globales.
- 🟢 **Data contracts:** tipos `Memory` y `LoveLetter`, datos separados en `src/data/` y decisiones D-015/D-016.
- 🟢 **Motion utilities:** tokens y utilidades CSS, `useReveal` y `useScrollProgress`, con soporte para `prefers-reduced-motion` en los utilitarios CSS.
- 🟢 **App skeleton:** `layout.tsx` y `page.tsx` existen con el orden narrativo documentado, aunque la composición todavía no está conectada.

### Pendiente

- 🔴 **Design Direction:** el documento contiene sólo encabezados; la dirección visual canónica está actualmente en `references/lovable/` y D-016 la declara referencia para MVP1.
- 🔴 **Component Spec:** el documento contiene propósito y árbol de componentes, pero no especificaciones por componente.
- 🔴 **UI implementation:** las carpetas de componentes de producción están vacías salvo `Timeline.tsx`, que también está vacío; `page.tsx` sólo renderiza un `main` sin secciones.
- 🔴 **Timeline:** existe el contrato de datos y la implementación en la referencia, pero no la implementación de producción.
- 🟡 **Love Letter:** la referencia Lovable es funcional y el contrato/datos de producción existen, pero falta el componente de producción y su integración.
- 🔴 **Proximity:** la documentación es amplia, pero `useGeolocation`, `useProximity`, `distanceBetween` y `Proximity` no forman un sistema ejecutable; tampoco existe realtime, identificación ni pruebas.
- 🔴 **QA:** `tests/unit/` y `tests/e2e/` sólo contienen `.gitkeep`; no hay scripts de test en `package.json`.
- 🔴 **Deploy:** no se encontró configuración ni flujo de despliegue documentado.

## GAP analysis

| Área | Estado | Falta |
|---|---:|---|
| Foundation | ✅ | — |
| Design | 🟡 | Completar `DESIGN-DIRECTION.md` y convertir la referencia visual en criterios verificables. |
| Hero | 🔴 | Implementación de producción e integración en `page.tsx`. |
| Timeline | 🔴 | Implementación de producción basada en `src/data/memories.ts`. |
| Love Letter | 🟡 | Implementación de producción e integración; la referencia y los datos ya existen. |
| Proximity | 🔴 | Sistema completo: geolocalización, realtime, identidad, cálculo, estados, privacidad y UI. |
| QA | 🔴 | Pruebas unitarias, e2e, accesibilidad, responsive y validación de rendimiento. |
| Deploy | 🔴 | Plataforma, variables de entorno, build/deploy y operación documentados. |

### Porcentaje real

El porcentaje se calcula sobre las 8 áreas del GAP analysis:

- ✅ = 1 punto
- 🟡 = 0,5 puntos
- 🔴 = 0 puntos

Resultado: **1 + 0,5 + 0 + 0 + 0,5 + 0 + 0 + 0 = 2 de 8 puntos = 25%**.

Este 25% representa avance de foundation y preparación de MVP1; **no significa que el 25% de la experiencia final sea navegable**, porque la UI de producción todavía no está integrada.

## Evidencia y trazabilidad

| Fuente | Hallazgo |
|---|---|
| `docs/PRD.md` | Define el journey Hero → Intro → Timeline → Memories → Love Letter → Proximity → Finale y separa MVP1 de MVP2. |
| `docs/ARCHITECTURE.md` | Define capas, estructura, límites entre referencia y producción, y reglas de accesibilidad/rendimiento. |
| `docs/DATA-MODEL.md` | Define contratos MVP1 para `Memory`, `LoveLetter` y estados de proximidad; D-016 fija los contratos simplificados. |
| `docs/MOTION-SYSTEM.md` | Define principios, duraciones, easing, reduced motion y estados narrativos, pero no está conectado a componentes de producción. |
| `docs/PROXIMITY-SYSTEM.md` | Especifica el sistema y sus fases, pero mantiene pendientes realtime, identidad, precisión, datos obsoletos y diseño final. |
| `references/lovable/` | Contiene una referencia funcional para Hero, Intro, Timeline y Love Letter; es sólo referencia y no debe modificarse. |
| `src/app/page.tsx` | Sólo contiene `<main>` y comentarios de orden; no renderiza componentes. |
| `src/components/` | Las carpetas de Hero, Memory, Gallery, Letter, Proximity y Finale sólo tienen `.gitkeep`; `Timeline.tsx` está vacío. |
| `src/hooks/` y `src/lib/` | `useReveal` y `useScrollProgress` son utilidades reales; `useGeolocation`, `useProximity` y `distanceBetween` son placeholders. |
| `tests/` y `package.json` | No hay pruebas reales ni scripts de test configurados. |
| Git (`eae0fa1` → `234f80b`) | Los commits recientes cubren foundation, datos, hooks, decisiones y skeleton; no registran implementación de UI, QA ni deploy. |

## Próximo orden recomendado

1. Completar `DESIGN-DIRECTION.md` y `COMPONENT-SPEC.md` o registrar formalmente qué partes de D-016 sustituyen temporalmente esas especificaciones.
2. Implementar Hero, Story Intro, Timeline, Love Letter y Finale en `src/`, usando los contratos existentes.
3. Añadir pruebas de los contratos, utilidades de distancia, reveals y estados de error antes de abordar realtime.
4. Resolver las decisiones pendientes de `PROXIMITY-SYSTEM.md` y construir Proximity como subsistema aislado.
5. Definir QA visual/responsive y el flujo de deploy.