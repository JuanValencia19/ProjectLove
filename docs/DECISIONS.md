# OurStory — Decisions

Registro breve de decisiones técnicas y de producto.

---

## D-001 🧭 Proyecto como experiencia narrativa

**Estado:** Aprobada

OurStory se desarrollará como una experiencia visual y emocional, no como una landing comercial tradicional.

---

## D-002 🔄 Referencia Lovable

**Estado:** Aprobada

El código generado por Lovable se mantiene en:

```text
references/lovable/

Es únicamente referencia.

El código de producción vive en:

src/
## D-003 🎨 Interfaz visual

Estado: Aprobada

La dirección visual toma inspiración de:

Spider-Man: Into the Spider-Verse.
Miles Morales.
Gwen Stacy.
Cómics.
Fotografía cinematográfica.

La referencia debe influir en el lenguaje visual sin convertir el proyecto en una página genérica de Spider-Man.

## D-004 📜 Scroll como narrativa

Estado: Aprobada

El desplazamiento vertical será uno de los principales mecanismos narrativos.

Las secciones deben conectarse mediante transiciones y animaciones.

## D-005 📱 Mobile First

Estado: Aprobada

La experiencia se diseñará primero para dispositivos móviles.

Mobile → Tablet → Desktop
## D-006 ✨ Animaciones

Estado: Aprobada

Las animaciones deben tener propósito narrativo.

Se priorizan:

opacity
transform
Scroll reveal
Slow zoom
Transiciones cinematográficas

Debe respetarse prefers-reduced-motion.

## D-007 📍 Proximity

Estado: Aprobada

OurStory tendrá una funcionalidad para detectar aproximadamente la distancia entre ambos usuarios.

Umbral inicial:

≤ 5 metros → "Estamos juntos ❤️"

La distancia debe considerarse aproximada debido a las limitaciones del GPS.

## D-008 🔒 Privacidad de ubicación

Estado: Aprobada

No se almacenará historial de ubicaciones salvo que posteriormente exista un requisito explícito.

La ubicación se tratará como estado temporal.

## D-009 🧩 Backend

Estado: Condicional

No se añadirá backend únicamente por existir la funcionalidad de proximidad.

Solo se incorporará infraestructura adicional cuando un requisito real lo justifique, principalmente para:

Identificación de usuarios.
Comunicación realtime.
Sincronización de ubicaciones.
## D-010 🏗️ Simplicidad arquitectónica

Estado: Aprobada

Evitar:

Dependencias innecesarias.
Estado global innecesario.
Abstracciones prematuras.
Infraestructura innecesaria.

Preferir la solución más simple que cumpla el requisito.

## D-011 🧠 Contenido separado de UI

Estado: Aprobada

Los recuerdos y contenido personal deben mantenerse separados de los componentes visuales siempre que sea posible.

Ubicación inicial:

src/data/
D-012 — Agentes

Estado: Aprobada

Los agentes deben utilizar la documentación del proyecto como fuente principal de contexto.

Orden de referencia:

PRD.md
DESIGN-DIRECTION.md
ARCHITECTURE.md
COMPONENT-SPEC.md
MOTION-SYSTEM.md
DATA-MODEL.md
PROXIMITY-SYSTEM.md
DECISIONS.md

Las decisiones explícitas del usuario tienen prioridad sobre cualquier inferencia del agente.

D-013 — Secrets

Estado: Aprobada

Los tokens, API keys y credenciales nunca deben almacenarse en:

Código fuente.
opencode.json.
Commits.
Repositorio público.

Se utilizarán variables de entorno y .env debe permanecer fuera de Git.

D-014 — Cambios de arquitectura

Estado: Aprobada

Los agentes no deben introducir cambios arquitectónicos importantes sin justificar la necesidad y respetar ARCHITECTURE.md.

Las nuevas decisiones importantes deben registrarse en este documento.

## D-015 ✨ Finale mínimo (MVP1)

**Estado:** Aprobada

El Finale (sección de cierre) se implementa en su forma mínima porque el PRD §8.8 deja el diseño exacto como TBD:

- Mensaje de cierre conceptual: "Esto es solo el principio" (placeholder en español en `src/data/finale.ts`, reemplazable por el usuario).
- Tipografía display + aberración cromática, una línea serif italic, overlay halftone.
- Sin foto ni partículas: estructura mínima, sin interacción requerida.

## D-017 📡 Realtime: Supabase Broadcast

**Estado:** Aprobada

Para la comunicación en tiempo real entre los dos dispositivos se utilizará **Supabase Realtime Broadcast**.

Motivo:
- Solo se necesita comunicación entre dos dispositivos.
- No se persisten posiciones en base de datos.
- Broadcast es suficiente para compartir ubicación temporalmente.
- El canal se destruye al cerrar la pestaña.

La dependencia `@supabase/supabase-js` será necesaria pero se instalará durante la implementación, no antes.

---

## D-018 🔗 Identificación: Room hash

**Estado:** Aprobada

Los dos usuarios se identifican mediante un **room code codificado en el hash de la URL**.

Ejemplo:

```text
https://ourstory.app/#kx7f2
```

Flujo:
1. Usuario A abre la página → se genera un room code corto → se comparte el link.
2. Usuario B abre el link → ingresa automáticamente a la misma sala.
3. No se implementa autenticación tradicional para MVP.

---

## D-019 🎯 Estado TOGETHER: regla de precisión

**Estado:** Aprobada

El estado TOGETHER se activa únicamente cuando se cumplen **ambas condiciones**:

```text
distancia ≤ 5m
AND
accuracyA + accuracyB < 10m
```

Si la precisión GPS combinada es insuficiente, el sistema no afirmará que los usuarios están juntos aunque la distancia calculada sea menor a 5m. La honestidad sobre la precisión tiene prioridad sobre la experiencia emocional.

---

## D-020 🔄 State machine: estados paralelos

**Estado:** Aprobada

Los estados de distancia (FAR, NEAR, VERY_NEAR, TOGETHER) son **paralelos**, no secuenciales.

El estado se determina directamente según la distancia y precisión actuales, no según una progresión obligatoria.

```text
WAITING → FAR | NEAR | VERY_NEAR | TOGETHER
```

---

## D-016 🖼️ Referencia Lovable canónica para MVP1

**Estado:** Aprobada

Para MVP1, `references/lovable/` es la especificación visual canónica: paleta OKLCH, tipografías (Bungee Inline / Playfair Display / Inter Tight), estética cómic y motion CSS + IntersectionObserver (sin librerías de animación).

La finalización de `COMPONENT-SPEC.md` y `DESIGN-DIRECTION.md` queda diferida (post-MVP1).

Contratos de datos resueltos para la implementación:

- `Memory` sigue `DATA-MODEL.md` §2 (`id, date, title, text, image?`); los campos extra del PRD §8.4 (`description, chapter, location, quote, featured`) quedan diferidos.
- `LoveLetter` evoluciona a `content: string[]` (un párrafo por entrada), sincronizado en `DATA-MODEL.md` §3.