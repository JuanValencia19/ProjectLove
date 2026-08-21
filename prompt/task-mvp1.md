# TASK — MVP1: Hero + Story Intro + Timeline

Implementa la primera fase real de la experiencia visual de OurStory.

## Objetivo

Pasar el proyecto de Foundation/Skeleton a una experiencia navegable implementando:

Hero → Story Intro → Timeline

El resultado debe sentirse como una única experiencia narrativa continua.

## Contexto obligatorio

Antes de modificar código, lee:

- `AGENTS.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN-DIRECTION.md`
- `docs/COMPONENT-SPEC.md`
- `docs/MOTION-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/DECISIONS.md`
- `docs/AGENT-WORKFLOW.md`

También revisa:

- `references/lovable/`
- implementación actual de `src/`
- `src/data/`
- hooks y utilidades existentes.

`references/lovable/` es SOLO referencia. No modificarlo.

## Alcance

Implementar únicamente:

### 1. Hero

Crear el Hero de producción respetando la dirección visual definida en la documentación y la referencia Lovable.

Debe incluir:

- Imagen/background principal.
- Composición visual.
- Título.
- Subtítulo/contenido correspondiente.
- CTA o indicador de scroll si está definido.
- Motion inicial.

### 2. Story Intro

Crear la sección introductoria posterior al Hero.

Debe funcionar como transición narrativa hacia la historia.

### 3. Timeline

Implementar el Timeline utilizando:

`src/data/memories.ts`

Debe incluir:

- Línea central.
- Alternancia desktop.
- Layout mobile.
- Memory content.
- Imágenes cuando estén disponibles.
- Reveal animations.
- Responsive behavior.

Reutiliza `useReveal` y las utilidades existentes cuando corresponda.

## Reglas

- No implementar Proximity todavía.
- No implementar backend/realtime.
- No implementar QA completo todavía.
- No crear nuevas dependencias salvo necesidad real.
- No modificar arquitectura sin justificarlo.
- No modificar `references/lovable/`.
- No duplicar contratos existentes.
- Mantener contenido y UI separados.
- Respetar `prefers-reduced-motion`.
- Priorizar `transform` y `opacity` para motion.
- Mobile-first.
- Mantener el estilo Spider-Verse/cinematográfico definido por el proyecto.

## Uso de agentes

Divide el trabajo entre los agentes especializados disponibles cuando sea útil.

El Orchestrator debe coordinar y revisar el resultado final.

No delegar tareas innecesarias.

## Validación

Al terminar:

1. Ejecuta el build disponible.
2. Ejecuta typecheck si está disponible.
3. Revisa errores.
4. Verifica responsive.
5. Verifica que Hero → Intro → Timeline funcionen como flujo continuo.
6. Verifica reduced motion.
7. Revisa que no se haya modificado `references/lovable/`.

## Documentación

Si durante la implementación se toma una decisión arquitectónica o de diseño importante:

- Actualiza el documento correspondiente.
- Si es una decisión nueva, registra `docs/DECISIONS.md`.

Actualiza `docs/AGENT-WORKFLOW.md` únicamente si el estado del proyecto cambia de forma significativa.

## Definition of Done

La tarea está terminada cuando:

- Hero está implementado.
- Story Intro está implementado.
- Timeline está implementado.
- Los componentes están conectados desde `page.tsx`.
- El contenido proviene de `src/data/`.
- Las animaciones funcionan.
- Mobile funciona.
- Build/typecheck no presentan errores.
- No existen placeholders innecesarios en estas tres secciones.

Al finalizar, entrega un resumen breve:

- Archivos creados/modificados.
- Qué agentes participaron.
- Validaciones ejecutadas.
- Problemas pendientes.
- Nuevo porcentaje estimado del proyecto.
- Siguiente tarea recomendada.

NO implementes la siguiente fase automáticamente.