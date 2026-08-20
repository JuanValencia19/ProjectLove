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
- **Delegación de exploración**: `frontend`, `geolocation`, `accessibility` y `web-performance` tienen permiso `task: { "*": deny, "explore": allow }` — en tareas complejas DELEGAN el mapeo del código al subagente `explore` en lugar de leer 4+ archivos inline (ahorro de tokens). Requiere `subagent_depth: 2` en `opencode.json` (ya configurado). `mode` se mantiene `subagent` — no hace falta `all` para delegar.
- `references/lovable/` es SOLO lectura para todos los agentes.
- Los prompts y los entregables están en español; la UI del producto también.
- MCP por defecto denegado (`github_*`, `supabase_*`, `playwright_*`, `engram_*`, `context7_*`); solo se concede donde aplica: `supabase_*` a `frontend`, `playwright_*` a los auditores.

## Skills externas (YA IMPORTADAS a `.opencode/skills/`)

Skills de terceros que potencian a los agentes. **Ya están importadas** (17 skills, 100% con `SKILL.md` válido, `name` = nombre de carpeta, licencia MIT). Provienen de los repos oficiales vía clone + copia de la carpeta completa.

**Por qué no `npx skillsadd`**: el script de `skillsadd` descarga SOLO el archivo `SKILL.md` desde el registro skills.ws y lo deja en `~/.claude/skills/` (o `--dir`). No trae los assets/referencias que muchas skills necesitan (p. ej. `supabase` trae `assets/` y `references/`; `react-best-practices` trae `rules/`; `animate` trae `RECIPES.md`). opencode sí auto-carga `~/.claude/skills/` globalmente, pero con una skill incompleta. La vía robusta es copiar la carpeta completa desde el repo fuente (GitHub). Verificar licencia (todas MIT/permisivas salvo indicación).

| Skill | Fuente | Agente(s) |
| --- | --- | --- |
| `frontend-design` | `anthropics/skills/skills/frontend-design` | ui-ux, responsive-design (compartida) |
| `web-design-guidelines` | `vercel-labs/agent-skills/skills/web-design-guidelines` | ui-ux, responsive-design (compartida) |
| `animate` | `emilkowalski/skills/skills/animate` | motion-design |
| `animation-vocabulary` | `emilkowalski/skills/skills/animation-vocabulary` | motion-design |
| `improve-animations` | `emilkowalski/skills/skills/improve-animations` | motion-design |
| `react-best-practices` | `vercel-labs/agent-skills/skills/react-best-practices` | frontend |
| `supabase` | `supabase/agent-skills/skills/supabase` | frontend |
| `react-modern-react` | `jaballer/react-claude-skills/react-modern-react` | frontend |
| `react-component-design` | `jaballer/react-claude-skills/react-component-design` | frontend |
| `accessibility` | `addyosmani/web-quality-skills/skills/accessibility` | accessibility |
| `react-a11y` | `jaballer/react-claude-skills/react-a11y` | accessibility |
| `web-quality-audit` | `addyosmani/web-quality-skills/skills/web-quality-audit` | web-performance |
| `performance` | `addyosmani/web-quality-skills/skills/performance` | web-performance |
| `core-web-vitals` | `addyosmani/web-quality-skills/skills/core-web-vitals` | web-performance |
| `webapp-testing` | `anthropics/skills/skills/webapp-testing` | accessibility |
| `vercel-optimize` | `vercel-labs/agent-skills/skills/vercel-optimize` | web-performance |
| `react-senior-ux` | `jaballer/react-claude-skills/react-senior-ux` | ui-ux |

**No hay skill externa para geolocalización/proximidad** — la cubre `.opencode/skills/ourstory-context/` + el prompt del agente.
**No importar**: remotion/heygen (video, no aplica), prisma (no se usa), shadcn (no se usa), skills de agentes no-React.
**Compartir, no duplicar**: las skills compartidas (`web-design-guidelines`, `frontend-design`) viven una sola vez en `.opencode/skills/`; varios agentes las leen.

**Cómo se importó** (para referencia futura): `git clone --depth 1` del repo fuente en `/tmp`, `cp -r <repo>/<ruta-skill> .opencode/skills/<nombre>/`, y validación de frontmatter (name = carpeta, description presente). No usar `npx skillsadd`: solo baja `SKILL.md` sin assets y apunta a `~/.claude/skills/`.

## Estado de los docs (no asumir contenido)

- `docs/PRD.md` — definido (550 líneas).
- `docs/ARCHITECTURE.md` — definido (509 líneas).
- `docs/COMPONENT-SPEC.md` — esqueleto (propósito + árbol de componentes; specs por componente pendientes).
- `docs/DESIGN-DIRECTION.md` — esqueleto (solo encabezados; NO usar como criterio visual).
- `docs/MOTION-SYSTEM.md` — definido (170 líneas).
- `docs/DATA-MODEL.md` — definido (121 líneas).
- `docs/PROXIMITY-SYSTEM.md` — definido (718 líneas).
- `docs/DECISIONS.md` — definido (165 líneas, D-001 a D-014).

La referencia visual definitiva es `references/lovable/` (paleta, tipografías, estructura, estética cómic). Los agentes leen la skill `ourstory-context` primero y luego los docs dirigidos por rol (ahorro de tokens).