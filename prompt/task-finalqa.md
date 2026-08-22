# TASK — PROXIMITY PHASE 8: FINAL QA + DEPLOYMENT PREPARATION

## Objetivo

Realizar la auditoría final de ProjectLove antes de considerarlo MVP1 terminado.

Esta fase tiene dos objetivos:

1. QA final de la experiencia completa.
2. Preparación técnica para deployment.

NO implementar nuevas funcionalidades.

---

# 1. LEER ANTES DE MODIFICAR

Revisar:

- `AGENTS.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN-DIRECTION.md`
- `docs/COMPONENT-SPEC.md`
- `docs/MOTION-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DECISIONS.md`

Revisar también:

- `package.json`
- `.env.example`
- `src/app/page.tsx`
- `src/components/`
- `src/hooks/`
- `src/lib/`
- `tests/`

---

# 2. REGLA PRINCIPAL

No rediseñar el proyecto.

No agregar funcionalidades.

No cambiar decisiones arquitectónicas.

No cambiar:

- D-017
- D-018
- D-019
- D-020
- umbrales de proximidad
- State Machine
- arquitectura Supabase
- estructura narrativa

Solo corregir problemas reales encontrados durante QA.

---

# 3. EXPERIENCIA COMPLETA

Verificar el flujo:

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
Proximity
↓
Finale

Comprobar:

- continuidad visual;
- spacing;
- overflow horizontal;
- transiciones;
- jerarquía tipográfica;
- legibilidad;
- consistencia de componentes;
- navegación;
- comportamiento al hacer scroll.

---

# 4. RESPONSIVE QA

Revisar como mínimo:

- Mobile 320px
- Mobile 375px
- Mobile 390px
- Tablet
- Desktop

Buscar:

- contenido cortado;
- overflow;
- textos fuera de pantalla;
- imágenes deformadas;
- botones inaccesibles;
- timeline roto;
- Proximity ilegible;
- problemas de viewport.

Corregir únicamente problemas encontrados.

---

# 5. ACCESIBILIDAD

Verificar:

- HTML semántico.
- Headings correctamente ordenados.
- Alt text en imágenes reales.
- Buttons accesibles.
- Focus visible.
- Contraste suficiente.
- Estados no dependientes únicamente del color.
- `prefers-reduced-motion`.

No instalar herramientas adicionales salvo que sean estrictamente necesarias.

---

# 6. MOTION

Verificar que las animaciones existentes:

- no causen layout shift;
- no sean excesivas;
- respeten `prefers-reduced-motion`;
- no bloqueen interacción;
- no produzcan scroll horizontal.

No crear nuevas animaciones.

No introducir librerías de motion.

---

# 7. PERFORMANCE

Revisar:

- imágenes;
- tamaños excesivos;
- formatos;
- fuentes;
- renders innecesarios;
- imports innecesarios;
- dependencias no utilizadas.

Especial atención al Hero y Gallery.

No realizar optimizaciones especulativas.

---

# 8. IMÁGENES Y ASSETS

Verificar que las imágenes utilizadas en producción:

- existan;
- tengan rutas correctas;
- carguen correctamente;
- no generen 404;
- tengan dimensiones razonables;
- tengan `alt` cuando corresponda.

No reemplazar assets reales por placeholders.

No modificar `references/lovable/`.

---

# 9. PROXIMITY QA

Auditar:

### WAITING
- sin pareja;
- sin ubicación;
- room inexistente.

### FAR
- distancia correcta.

### NEAR
- distancia correcta.

### VERY_NEAR
- distancia correcta.

### TOGETHER
Debe respetar exactamente:

```text
distance <= 5m
AND
accuracyA + accuracyB < 10m

Errors

Verificar:

permiso denegado;
GPS unavailable;
timeout;
Realtime error;
Supabase sin configuración;
datos obsoletos.

NO modificar la lógica salvo que exista un bug demostrado.

10. SEGURIDAD

Verificar:

no existen secrets hardcodeados;
.env.local no está trackeado;
.env.example no contiene secrets;
no existen coordenadas reales en código;
no existen coordenadas en logs;
no existe persistencia accidental de ubicación.

Ejecutar:

git status
git ls-files

y revisar cualquier archivo sospechoso.

11. BUILD + TESTS

Ejecutar obligatoriamente:

npm test
npm run build
npx tsc --noEmit

Todos deben finalizar correctamente.

Si existe un fallo:

identificar causa;
corregir únicamente si está dentro del alcance;
volver a ejecutar las validaciones.

No eliminar tests para conseguir un resultado verde.

12. DEPLOYMENT PREPARATION

Auditar que el proyecto pueda desplegarse como aplicación Next.js.

Verificar:

package.json;
build;
variables de entorno;
.env.example;
configuración de producción;
assets;
metadata;
favicon si existe;
rutas.

No ejecutar deployment real.

No crear cuentas.

No publicar secrets.

Si falta documentación de deployment, crear:

docs/DEPLOYMENT.md

Debe ser breve y contener:

1. Requisitos
2. Variables de entorno
3. Instalación
4. Build
5. Deployment
6. Configuración Supabase
13. DOCUMENTACIÓN

Si durante QA se descubre una discrepancia entre implementación y documentación:

no asumir;
comparar con las decisiones existentes;
corregir la documentación solo si la implementación ya representa una decisión válida.

No crear nuevas decisiones arquitectónicas durante esta fase.

14. RESTRICCIONES

NO instalar dependencias innecesarias.

NO crear nuevas funcionalidades.

NO implementar:

Authentication.
Analytics.
Database.
Nuevos sistemas realtime.
Nuevos componentes narrativos.
Nuevos sistemas de motion.

NO modificar:

references/lovable/

15. DEFINITION OF DONE
 Flujo completo revisado.
 Mobile QA realizado.
 Tablet QA realizado.
 Desktop QA realizado.
 Accesibilidad revisada.
 Reduced motion revisado.
 Assets revisados.
 Proximity revisado.
 Seguridad revisada.
 No secrets expuestos.
 npm test pasa.
 npm run build pasa.
 npx tsc --noEmit pasa.
 Deployment readiness verificado.
 docs/DEPLOYMENT.md creado si es necesario.
 No nuevas funcionalidades.
 D-017/D-018/D-019/D-020 intactos.
REPORTE FINAL

Responder únicamente:

QA

Resumen de problemas encontrados y corregidos.

Responsive

Mobile / Tablet / Desktop.

Accesibilidad

Resultado.

Performance

Problemas encontrados y corregidos.

Proximity

Resultado de la auditoría.

Seguridad

Confirmar estado de secrets y ubicación.

Tests
Tests: X
Passed: X
Failed: X
Build

Estado.

TypeScript

Estado.

Deployment

Indicar si está preparado y qué falta para publicar.

Archivos modificados

Lista exacta.

Problemas pendientes

Solo problemas reales.

Estado

Phase 8 — Final QA + Deployment Preparation: COMPLETE

o

Phase 8 — Final QA + Deployment Preparation: BLOCKED

NO implementar ninguna fase posterior automáticamente.


Con esto, **Phase 8 debe ser la última fase de implementación del MVP1**. Después ya conviene hacer una auditoría 