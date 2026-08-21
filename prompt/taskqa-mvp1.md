# TASK — QA + POLISH MVP1

## Objetivo

Auditar y pulir la experiencia MVP1 actualmente implementada.

El objetivo NO es agregar funcionalidades.

El objetivo es detectar y corregir problemas existentes de:

- Visual.
- Responsive.
- Motion.
- Accesibilidad.
- Consistencia.
- Integración entre secciones.
- Preparación de assets.

---

# 1. ESTADO ACTUAL

Actualmente existe este flujo funcional:

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

Las secciones ya están implementadas y el build funciona.

NO rehacerlas desde cero.

---

# 2. DOCUMENTACIÓN OBLIGATORIA

Antes de modificar cualquier archivo, leer:

- `AGENTS.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN-DIRECTION.md`
- `docs/COMPONENT-SPEC.md`
- `docs/MOTION-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/DECISIONS.md`
- `docs/AGENT-WORKFLOW.md`

También revisar:

- `src/components/`
- `src/data/`
- `src/hooks/`
- `src/lib/`
- `references/lovable/`

`references/lovable/` es únicamente referencia.

NO modificarlo.

---

# 3. REGLA PRINCIPAL

NO agregar funcionalidades nuevas.

NO implementar:

- Proximity.
- Backend.
- Realtime.
- Autenticación.
- Base de datos.
- Deploy.
- Nuevas secciones.
- Nuevas dependencias.

NO cambiar la arquitectura.

NO reemplazar la dirección visual existente por otra.

NO inventar contenido.

Si una mejora no está claramente justificada por la documentación existente, NO implementarla.

---

# 4. AUDITORÍA

Primero inspeccionar toda la experiencia actual.

Revisar específicamente:

## Hero

- Overflow.
- Alturas.
- Legibilidad.
- Contraste.
- Responsive.
- Motion.
- Jerarquía visual.

## Story Intro

- Espaciado.
- Tipografía.
- Contraste.
- Transición desde Hero.
- Responsive.
- Reveal.

## Timeline

- Línea central.
- Dots.
- Alternancia desktop.
- Layout mobile.
- Espaciado.
- Typography.
- Reveal.
- Overflow horizontal.
- Placeholders.

## Gallery

- Grid.
- Aspect ratios.
- Espaciado.
- Responsive.
- Reveal.
- Preparación para imágenes reales.

## Love Letter

- Estado cerrado.
- Apertura.
- Cierre.
- Contenido.
- Interacción.
- Responsive.
- Reduced motion.

## Finale

- Espaciado.
- Jerarquía.
- Motion.
- Contraste.
- Cierre narrativo.

---

# 5. RESPONSIVE

Validar conceptualmente:

```text
Mobile
Tablet
Desktop

Prestar especial atención a:

overflow horizontal.
textos demasiado grandes.
elementos fuera del viewport.
imágenes deformadas.
timeline en mobile.
interacción de Love Letter en pantallas pequeñas.
espaciado vertical excesivo.

Corregir únicamente problemas reales encontrados.

6. MOTION

Revisar que:

Las animaciones sean consistentes.
No existan animaciones excesivas.
No existan movimientos bruscos.
No existan animaciones que provoquen layout shifts.
Se utilicen preferentemente transform y opacity.
Se respete prefers-reduced-motion.

No crear un nuevo sistema de animaciones.

Utilizar el Motion System existente.

7. ACCESIBILIDAD

Revisar:

HTML semántico.
Headings.
Botones.
Focus states.
Contraste.
Alt text donde corresponda.
Navegación por teclado.
aria-* solamente cuando sea necesario.

No introducir soluciones artificiales.

8. PERFORMANCE

Revisar:

Animaciones innecesariamente costosas.
Imágenes.
Renderizados innecesarios.
JavaScript innecesario.
Dependencias innecesarias.

No realizar optimizaciones especulativas.

9. ASSETS

Actualmente los assets reales todavía no están integrados.

NO buscar imágenes externas.

NO inventar URLs.

NO descargar contenido.

Únicamente asegurar que los componentes estén preparados para sustituir posteriormente los placeholders por fotografías reales.

Mantener una estructura clara para realizar posteriormente ese reemplazo.

10. IMPLEMENTACIÓN

Si encuentras un problema:

Identificarlo.
Confirmar que realmente existe.
Corregirlo con el cambio mínimo necesario.
Mantener la arquitectura actual.
No modificar componentes no relacionados.

Prioridad:

Bug
↓
Responsive
↓
Accessibility
↓
Motion
↓
Visual polish
11. VALIDACIÓN

Después de los cambios ejecutar:

npm run build

Si existe un comando de typecheck disponible, ejecutarlo.

Comprobar:

TypeScript.
Build.
Imports.
Componentes.
Rutas.
Errores de consola conocidos por el código.

Confirmar que:

Hero → Intro → Timeline → Gallery → Love Letter → Finale

continúa funcionando.

12. DOCUMENTACIÓN

NO crear nuevos documentos.

NO modificar documentación si no es necesario.

Solo actualizar docs/DECISIONS.md si durante el trabajo se toma una decisión arquitectónica o de diseño que deba quedar registrada.

13. DEFINITION OF DONE

La tarea está terminada únicamente cuando:

 No existen bugs evidentes encontrados durante la auditoría.
 Mobile está correctamente considerado.
 Desktop está correctamente considerado.
 Motion es consistente.
 Reduced motion funciona.
 Accesibilidad básica está revisada.
 No existen overflow/scrollbars accidentales.
 Los placeholders están preparados para reemplazar assets.
 Build funciona.
 No se agregó funcionalidad fuera del alcance.
 references/lovable/ permanece intacto.
14. RESTRICCIÓN IMPORTANTE

Si encuentras un problema que requiere:

Nueva arquitectura.
Backend.
Nueva dependencia.
Cambio importante de diseño.
Cambio de modelo de datos.
Implementación de Proximity.

NO lo implementes.

Repórtalo como:

BLOCKER / FOLLOW-UP

y continúa con el resto del QA.

15. REPORTE FINAL

Al terminar responde únicamente con:

Cambios realizados

Lista breve de archivos modificados y motivo.

Problemas encontrados

Lista de problemas detectados y corregidos.

Pendientes

Solo problemas que realmente no puedan resolverse dentro de este alcance.

Validación

Indicar:

Build.
Typecheck.
Responsive.
Accessibility.
Motion.
Estado

Indicar:

MVP1:
[estado]


Progreso estimado:
XX%