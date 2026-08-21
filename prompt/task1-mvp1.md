# TASK — MVP1: Love Letter + Gallery + Finale

Implementa la segunda fase visual de OurStory.

## Objetivo

Completar la experiencia narrativa:

Hero → Story Intro → Timeline → Gallery → Love Letter → Finale

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

Revisa también:

- `references/lovable/`
- `src/components/`
- `src/data/`
- implementación actual de Hero, StoryIntro y Timeline.

No modificar `references/lovable/`.

## Alcance

### 1. Gallery / Memories

Implementar la sección visual de recuerdos.

Debe:

- Utilizar los datos existentes.
- Mantener coherencia con Timeline.
- Permitir mostrar fotografías/momentos.
- Tener composición visual cinematográfica.
- Utilizar motion existente.
- Ser responsive.

No crear un sistema complejo de galería si el PRD no lo requiere.

### 2. Love Letter

Implementar el componente de Love Letter utilizando:

- Contrato existente.
- Datos existentes.
- Referencia funcional de `references/lovable/`.

Debe conservar la idea de una carta que se abre/revela progresivamente.

Debe incluir:

- Estado cerrado.
- Interacción de apertura.
- Contenido de la carta.
- Animación de apertura.
- Estado final legible.
- Mobile responsive.
- `prefers-reduced-motion`.

No duplicar los datos dentro del componente.

### 3. Finale

Crear la sección final de la experiencia.

Debe sentirse como el cierre emocional de la historia.

Utilizar:

- Motion System.
- Design Direction.
- Tipografía existente.
- Tokens existentes.

Evitar sobrecargarlo con elementos innecesarios.

### 4. Integración

Actualizar `page.tsx` para conseguir:

Hero
↓
Story Intro
↓
Timeline
↓
Gallery
↓
Love Letter
↓
Finale

La navegación debe sentirse como una experiencia continua.

## Reglas

- No implementar Proximity todavía.
- No implementar backend/realtime.
- No agregar dependencias salvo necesidad real.
- No modificar `references/lovable/`.
- No duplicar modelos ni datos.
- Reutilizar componentes/utilidades existentes.
- Mantener mobile-first.
- Respetar `prefers-reduced-motion`.
- Priorizar `transform` y `opacity`.
- No rehacer Hero, StoryIntro o Timeline salvo que sea estrictamente necesario para la integración.

## Assets

Todavía NO es necesario conseguir fotografías reales.

Si no existen assets definitivos, utilizar placeholders claramente estructurados para poder reemplazarlos posteriormente.

No inventar fotografías ni URLs externas.

## Validación

Al terminar:

1. Ejecutar `next build`.
2. Ejecutar typecheck si está disponible.
3. Verificar que no existan errores.
4. Revisar responsive.
5. Revisar flujo completo de navegación.
6. Revisar animaciones.
7. Revisar reduced motion.
8. Confirmar que `references/lovable/` no fue modificado.

## Documentación

Actualizar documentación únicamente si una decisión importante cambió.

No crear documentación innecesaria.

## Definition of Done

La fase está terminada cuando:

- Gallery está implementada.
- Love Letter está implementada.
- Finale está implementado.
- Las tres secciones están integradas en `page.tsx`.
- El flujo completo funciona.
- Build/typecheck funciona.
- No existen placeholders estructurales innecesarios.
- No se modificó `references/lovable/`.

Al finalizar responde únicamente con:

1. Archivos creados/modificados.
2. Validaciones.
3. Problemas pendientes.
4. Porcentaje actualizado.
5. Siguiente tarea recomendada.

NO implementar Proximity automáticamente.