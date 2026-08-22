# TASK — PROXIMITY PHASE 5: PROXIMITY UI

## Objetivo

Implementar únicamente la interfaz visual del sistema Proximity.

La UI debe consumir `useProximity()` y representar sus estados de forma coherente con el lenguaje visual de OurStory / Spider-Verse.

NO modificar la lógica de:

- Geolocation.
- Realtime.
- Distance.
- State Machine.

---

## 1. Leer antes de modificar

Revisar obligatoriamente:

- `AGENTS.md`
- `docs/PRD.md`
- `docs/DESIGN-DIRECTION.md`
- `docs/COMPONENT-SPEC.md`
- `docs/MOTION-SYSTEM.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/DECISIONS.md`

Después revisar:

- `src/hooks/use-proximity.ts`
- `src/lib/proximity.ts`
- `src/types/proximity.ts`
- componentes existentes de `src/components/`

No inventar una nueva dirección visual.

---

## 2. Implementar

Crear:

`src/components/proximity/Proximity.tsx`

La sección debe integrarse en el flujo narrativo existente de `page.tsx`.

Utilizar:

```ts
useProximity()

como única fuente de datos de proximidad.

3. Estados visuales

Representar los estados:

WAITING
FAR
NEAR
VERY_NEAR
TOGETHER

Cada estado debe tener:

Indicador visual.
Distancia cuando esté disponible.
Mensaje/copy.
Tratamiento visual coherente con OurStory.
Transición apropiada.

NO cambiar las condiciones que determinan cada estado.

4. TOGETHER

Cuando el estado sea:

TOGETHER

debe sentirse como el momento emocional principal de esta sección.

Utilizar:

Animación especial.
Tratamiento visual más cálido/romántico.
Mensaje positivo.
Distancia visible si está disponible.

NO implementar lógica adicional para determinar TOGETHER.

El componente únicamente consume:

status
distance
5. WAITING

Mientras no exista suficiente información:

WAITING

mostrar una experiencia clara indicando que el sistema está esperando la ubicación necesaria.

Debe contemplar:

Solicitud inicial de geolocalización.
Pareja aún no conectada.
Información todavía no disponible.

Utilizar requestGeolocation() únicamente cuando corresponda según el contrato existente.

No solicitar ubicación automáticamente sin revisar el comportamiento actual del hook.

6. Distancia

Mostrar la distancia de forma amigable.

Ejemplo conceptual:

120 m

o

4.2 m

No alterar el valor calculado.

No recalcular distancia en el componente.

La UI debe consumir directamente:

distance
7. Errores

Representar de forma clara los errores expuestos por useProximity().

No crear una nueva arquitectura de errores.

No ocultar silenciosamente errores críticos.

La UI debe diferenciar, cuando sea posible:

Permiso de ubicación denegado.
Geolocalización no disponible.
Error de conexión.
Ausencia de pareja.

Los mensajes deben ser breves y coherentes con el tono romántico del proyecto.

8. Motion

Utilizar exclusivamente el sistema definido en:

docs/MOTION-SYSTEM.md

Respetar:

prefers-reduced-motion

No agregar librerías de animación.

No crear un sistema paralelo de motion.

Evitar animaciones excesivas o constantes que puedan consumir batería.

9. Diseño

Respetar:

Design Direction existente.
Tokens globales.
Tipografías existentes.
Paleta existente.
Componentes/utilidades existentes.
Lenguaje visual Spider-Verse.

No introducir:

Dashboard.
Cards genéricas de SaaS.
Estética minimalista genérica.
Nueva paleta.
Nuevas fuentes.

La sección debe sentirse parte de la misma historia visual.

10. Responsive

Debe funcionar correctamente en:

Mobile.
Tablet.
Desktop.

Mobile es la prioridad porque la funcionalidad está diseñada para utilizarse desde celulares.

No asumir hover como interacción principal.

11. Accesibilidad

Implementar:

HTML semántico.
Contraste suficiente.
Estados comprensibles sin depender únicamente del color.
Labels accesibles.
Focus visible cuando existan controles.
Reduced motion.
12. Restricciones

NO modificar:

src/hooks/use-proximity.ts
src/lib/proximity.ts
src/lib/distance.ts
src/hooks/use-geolocation.ts
src/hooks/use-realtime-location.ts

NO modificar:

references/lovable/

NO instalar dependencias.

NO implementar:

Nueva lógica de proximidad.
Nueva state machine.
Supabase.
Testing framework.
Deploy.

Solo crear/modificar lo estrictamente necesario para la UI e integración de la sección.

13. Integración

Actualizar src/app/page.tsx únicamente para incorporar:

<Proximity />

en la posición definida por PRD.md.

No alterar el orden narrativo existente salvo que la documentación lo indique.

14. Validación

Ejecutar:

npm run build

Ejecutar typecheck si existe.

Verificar visualmente:

WAITING.
FAR.
NEAR.
VERY_NEAR.
TOGETHER.
Error.
Mobile.
Desktop.
Reduced motion.

No crear infraestructura de testing en esta fase.

DEFINITION OF DONE
 Proximity.tsx implementado.
 Consume exclusivamente useProximity().
 Todos los estados tienen representación visual.
 TOGETHER tiene tratamiento especial.
 Distancia visible cuando corresponde.
 Errores representados.
 Motion System respetado.
 Reduced motion respetado.
 Responsive.
 Accesible.
 Integrado en page.tsx.
 Build correcto.
 No se modificó la lógica de proximidad.
 No se instalaron dependencias.
REPORTE FINAL

Responder únicamente:

Archivos modificados
UI implementada

Resumen breve.

Estados visuales

Indicar cómo se representa cada estado.

Validación

Build/typecheck y revisión responsive.

Problemas pendientes

Solo problemas reales.

Estado

Phase 5 — Proximity UI: COMPLETE

o

Phase 5 — Proximity UI: BLOCKED

Siguiente fase

Phase 6 — Privacy + Error Handling

NO implementar la siguiente fase automáticamente.