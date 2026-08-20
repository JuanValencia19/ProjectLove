# Agent Instructions

## Project
ProjectLove is a private, cinematic anniversary web experience.

## Source of Truth

Before modifying the project, agents MUST read and verify the actual state of these docs (do not assume content):

- docs/PRD.md — defined (550 lines)
- docs/ARCHITECTURE.md — defined (509 lines)
- docs/COMPONENT-SPEC.md — skeleton (purpose + component tree only; per-component specs pending)
- docs/DESIGN-DIRECTION.md — skeleton (headers only; do NOT use as visual criterion)
- docs/MOTION-SYSTEM.md — defined (170 lines)
- docs/DATA-MODEL.md — defined (121 lines)
- docs/PROXIMITY-SYSTEM.md — defined (718 lines)
- docs/DECISIONS.md — defined (165 lines, D-001 to D-014)

The definitive visual reference is `references/lovable/` (palette, typography, layout, comic aesthetic). Agents read the `.opencode/skills/ourstory-context/` skill first, then the docs directed by role (token savings).

If the spec required for the task is pending or a skeleton, report it and stop — do not invent specifications, features, APIs, or data contracts.

## Project Agents

Specialized subagents live in `.opencode/agents/` and are auto-discovered by opencode (agent name = path without `.md`, e.g. `ui-ux`). A file without valid frontmatter is silently skipped.

- Creative (ui-ux, motion-design, responsive-design): propose alternatives and edit `docs/` only — never `src/`.
- Implementers (frontend, geolocation): execute exactly what is ordered; edit `src/` and `docs/`; never `references/`.
- Auditors (accessibility, web-performance): evidence-based audits, edit `docs/` only; fixes are implemented by `frontend`.

See `.opencode/README-agents.md` for the roster and conventions.

## References

The original Lovable prototype is located at:

references/lovable/

These files are references only and MUST NOT be modified.

Production implementation belongs in:

src/

## Current Phase

Phase 0 — Project Foundation & Design Definition

Do not implement features that have not been specified yet.

## General Rules

- Preserve the approved visual identity.
- Prefer reusable components.
- Keep content separate from presentation.
- Prioritize mobile experience.
- Do not introduce major design decisions without documenting them.