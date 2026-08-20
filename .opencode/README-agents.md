# ProjectLove Agents

Agentes especializados del proyecto. opencode los detecta automáticamente desde `.opencode/agents/**/*.md`; el nombre del agente es la ruta sin `.md` (p. ej. `ui-ux`). Un archivo sin frontmatter válido se descarta en silencio.

## Roster

| Agente | Arquetipo | Rol | Edita |
| --- | --- | --- | --- |
| `ui-ux` | creativo | Dirección visual, UI y UX | `docs/` |
| `motion-design` | creativo | Lenguaje de movimiento y animación | `docs/` |
| `responsive-design` | creativo | Comportamiento responsive y mobile-first | `docs/` |
| `frontend` | estricto (implementador) | Arquitectura e implementación React/TS + Supabase | `src/`, `docs/` |
| `geolocation` | estricto (implementador) | Sistema de proximidad y geolocalización | `src/`, `docs/` |
| `accessibility` | estricto (auditor) | Auditorías WCAG y accesibilidad | `docs/` (reportes) |
| `web-performance` | estricto (auditor) | Core Web Vitals y rendimiento | `docs/` (reportes) |

## Convenciones

- **Creativos** (temp 0.6-0.7): proponen 2-3 direcciones, buscan inspiración externa citando fuentes, toman iniciativa. Editan solo `docs/`; nunca `src/`; bash denegado.
- **Implementadores** (temp 0.1): ejecutan exactamente lo ordenado, sin scope creep ni features inventadas. Si la spec requerida está vacía, se detienen y reportan. Editan `src/` + `docs/`; nunca `references/`.
- **Auditores** (temp 0.1): todo hallazgo requiere evidencia medible; no editan `src/` — los fixes los implementa `frontend`. Solo `docs/` (reportes) y comandos de medición.
- `references/lovable/` es SOLO lectura para todos los agentes.
- Los prompts y los entregables están en español; la UI del producto también.
- MCP por defecto denegado (`github_*`, `supabase_*`, `playwright_*`, `engram_*`, `context7_*`); solo se concede donde aplica: `supabase_*` a `frontend`, `playwright_*` a los auditores.

## Estado de los docs (no asumir contenido)

- `docs/PRD.md`, `docs/ARCHITECTURE.md` — contenido real.
- `docs/DESIGN-DIRECTION.md`, `docs/COMPONENT-SPEC.md` — esqueletos (encabezados sin definiciones).
- `docs/MOTION-SYSTEM.md`, `docs/DATA-MODEL.md`, `docs/PROXIMITY-SYSTEM.md`, `docs/DECISIONS.md` — "Pendiente de definir".