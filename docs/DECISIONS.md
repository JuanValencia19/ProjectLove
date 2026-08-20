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