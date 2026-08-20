# OurStory — Motion System

**Estado:** Diseño inicial

## 1. 🎯 Objetivo

Las animaciones deben reforzar la narrativa y no existir únicamente como decoración.

Prioridad:

```text
Narrativa > Experiencia > Estética > Complejidad

## 2. 🧩 Principios
Animaciones suaves y cinematográficas.
Evitar exceso de movimiento.
Priorizar scroll-driven animation.
Respetar prefers-reduced-motion.
Evitar animaciones que afecten el rendimiento.
Mantener consistencia entre secciones.
## 3. 🌅 Hero

Objetivo: generar una entrada cinematográfica.

Animaciones:

Background → slow zoom
Contenido → fade + drift
Elementos gráficos → aparición progresiva

El hero debe sentirse vivo, pero no distraer del contenido principal.

## 4. 🔎 Scroll Reveal

Para elementos que aparecen durante el desplazamiento:

Estado inicial:
opacity: 0
translateY: 24px


Estado final:
opacity: 1
translateY: 0

Usar IntersectionObserver o la solución definida por la arquitectura.

## 5. 🕰️ Timeline

Cada recuerdo debe aparecer progresivamente.

Secuencia:

Timeline item
    ↓
Reveal
    ↓
Imagen
    ↓
Texto

Los elementos pueden utilizar pequeños delays para crear profundidad.

Evitar animaciones excesivamente largas.

## 6. 💌 Love Letter

Estados:

Cerrada
   ↓
Opening
   ↓
Abierta

La apertura debe sentirse física y emocional.

No bloquear la interacción mientras se ejecuta una animación larga.

## 7. 📍 Proximity

Estados visuales:

FAR
 ↓
NEAR
 ↓
VERY_NEAR
 ↓
TOGETHER

TOGETHER debe tener la transición más especial del sistema.

Conceptualmente:

Distancia disminuye
      ↓
Cambio visual progresivo
      ↓
❤️ ESTAMOS JUNTOS ❤️
## 8. ✨ Finale

El cierre debe sentirse como la conclusión de la historia.

Puede utilizar:

Fade.
Scale.
Movimiento suave.
Transición de luz/color.
Elementos flotantes.

Evitar sobrecargar el cierre.

## 9. ⏱️ Duraciones

Valores iniciales:

Micro:    150–250ms
Normal:   300–500ms
Entrada:  600–1000ms
Especial: 1000–2000ms

Los valores pueden ajustarse durante implementación.

## 10. 📈 Easing

Preferir curvas suaves.

Referencia:

cubic-bezier(0.16, 1, 0.3, 1)

Evitar animaciones con movimientos bruscos salvo que el diseño lo requiera.

## 11. ♿ Reduced Motion

Cuando:

prefers-reduced-motion: reduce

debe:

Reducirse el movimiento.
Eliminarse parallax innecesario.
Evitar zooms continuos.
Mantenerse la información y estructura visual.
## 12. ⚡ Rendimiento

Preferir animaciones sobre:

transform
opacity

Evitar animar constantemente:

width
height
top
left

No utilizar JavaScript para animaciones que puedan resolverse eficientemente mediante CSS.

## 13. ✅ Regla principal

Cada animación debe responder:

¿Esta animación mejora la historia o la experiencia?

Si la respuesta es no, no implementarla.