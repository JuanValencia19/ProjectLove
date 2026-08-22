# TASK — HERO DESKTOP IMAGE FIT

## Objetivo

Corregir únicamente el comportamiento responsive de la imagen del Hero en desktop.

Actualmente la imagen del Hero se ve correctamente en móvil y tablet, pero en desktop la imagen se recorta debido a la diferencia entre la proporción vertical de la imagen y el viewport horizontal.

El objetivo es:

> En desktop, mostrar la imagen original COMPLETA, sin recortarla ni deformarla, mientras el Hero continúa ocupando el 100% del viewport.

---

## Solución requerida

NO utilizar simplemente `object-fit: cover` para la imagen principal en desktop, porque esto recorta la imagen.

Implementar en desktop una composición de dos capas:

### Capa 1 — Background

Utilizar la misma imagen del Hero como fondo ampliado para cubrir todo el viewport.

Características:

- `cover`
- ocupar 100% del Hero
- aplicar blur
- aplicar overlay oscuro/veil existente
- debe funcionar como background atmosférico
- no debe competir visualmente con la imagen principal

### Capa 2 — Imagen principal

Mostrar la imagen original del Hero centrada.

Características:

- utilizar la imagen existente de `public/images/hero/`
- NO crear otra imagen
- NO modificar la imagen original
- NO recortarla
- NO deformarla
- mantener `object-fit: contain`
- mantener proporción original
- centrada horizontal y verticalmente
- altura máxima limitada al viewport
- ancho máximo limitado al viewport

El resultado debe permitir visualizar la imagen completa.

---

## Responsive

IMPORTANTE:

### Mobile

NO modificar el comportamiento actual.

### Tablet

NO modificar el comportamiento actual.

### Desktop

Aplicar únicamente la nueva composición:

Background ampliado + imagen principal completa.

Usar el breakpoint existente del proyecto si ya existe.

No introducir breakpoints arbitrarios si no son necesarios.

---

## Overlay y contenido

Conservar completamente:

- título PROJECT LOVE
- subtítulo
- tipografías
- colores
- chromatic effect
- animaciones
- veil existente
- halftone existente
- spacing
- motion
- estructura del Hero

La modificación debe afectar únicamente al tratamiento visual de la imagen.

---

## Restricciones

NO:

- generar imágenes;
- descargar imágenes;
- editar la imagen;
- cambiar la imagen del Hero;
- cambiar el diseño general;
- modificar Timeline;
- modificar Gallery;
- modificar Love Letter;
- modificar Proximity;
- modificar Supabase;
- modificar arquitectura;
- modificar tests salvo que sea estrictamente necesario.

Utilizar exclusivamente la imagen existente en:

`public/images/hero/`

---

## Validación visual

Verificar específicamente:

### Desktop

- La imagen principal completa es visible.
- No existe crop de la imagen principal.
- No existe deformación.
- La imagen está centrada.
- El Hero ocupa todo el viewport.
- Los laterales quedan integrados mediante el background ampliado.
- El texto continúa siendo legible.
- El background no compite con la imagen principal.

### Tablet

Verificar que conserve el comportamiento actual.

### Mobile

Verificar que conserve el comportamiento actual.

---

## Validación técnica

Ejecutar:

```bash
npm test
npm run build
npx tsc --noEmit

No modificar lógica que no esté relacionada con Hero.

Reporte final

Responder únicamente con:

Archivos modificados

Lista de archivos.

Hero

Explicar brevemente cómo se resolvió el problema de desktop.

Responsive
Mobile: OK
Tablet: OK
Desktop: OK
Validación
Tests:
Build:
TypeScript:
Estado

HERO DESKTOP FIT — COMPLETE


**Yo elegiría esta solución para ProjectLove.** Te permite conservar exactamente la ilustración que elegiste de Pinterest