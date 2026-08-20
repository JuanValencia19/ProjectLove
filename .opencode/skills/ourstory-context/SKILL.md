# OurStory Context

## Propósito

Esta skill proporciona a los agentes el contexto específico del proyecto OurStory.

Debe utilizarse antes de realizar cambios importantes en diseño, arquitectura, componentes o experiencia de usuario.

---

# 1. Identidad del proyecto

**Nombre:** OurStory  
**Repositorio:** ProjectLove  
**Idioma de la interfaz:** Español

OurStory es una experiencia web romántica e interactiva creada como regalo de aniversario.

No debe tratarse como una landing page comercial convencional.

El objetivo principal es crear una experiencia emocional, visual y narrativa.

---

# 2. Documentación principal

Antes de tomar decisiones importantes, revisar:

```text
docs/
├── PRD.md
├── DESIGN-DIRECTION.md
├── ARCHITECTURE.md
├── COMPONENT-SPEC.md
└── MOTION-SYSTEM.md

Si alguno de estos documentos todavía no existe, no asumir su contenido.

3. Prototipo de referencia

Existe una implementación inicial creada con Lovable:

references/lovable/

Esta carpeta es exclusivamente de referencia.

Regla

NO modificar archivos dentro de:

references/lovable/

El agente debe estudiar el prototipo y utilizarlo como referencia cuando corresponda.

La implementación de producción debe realizarse dentro de:

src/
4. Principio de diseño

OurStory debe sentirse como:

Una historia cinematográfica e interactiva que el usuario recorre mediante scroll.

No debe sentirse como:

Una landing comercial.
Un dashboard.
Una plantilla genérica.
Una página corporativa.
Un conjunto de componentes desconectados.

Cada sección debe contribuir a la narrativa.

5. Identidad visual

La dirección visual está inspirada principalmente en:

Spider-Man: Into the Spider-Verse.
Miles Morales.
Gwen Stacy.
Cómics.
Fotografía cinematográfica.
Narrativa romántica.
Composición editorial.

La inspiración de Spider-Verse debe utilizarse como lenguaje visual.

No convertir el sitio en una página genérica de Spider-Man.

La historia de la pareja siempre es el elemento principal.

6. Elementos visuales existentes

El prototipo utiliza elementos como:

Halftone.
Aberración cromática.
Rojo.
Rosa.
Azul.
Tipografía display.
Tipografía serif.
Tipografía sans.
Gradientes.
Fotografía a pantalla completa.
Animaciones de entrada.
Slow zoom.
Scroll reveal.

Estos elementos deben mantenerse coherentes con:

docs/DESIGN-DIRECTION.md
7. Experiencia principal

La estructura conceptual de la experiencia es:

Hero
   ↓
Introducción
   ↓
Timeline
   ↓
Galería / recuerdos
   ↓
Love Letter
   ↓
Proximity
   ↓
Finale

El usuario debe sentir una progresión narrativa.

Las transiciones entre secciones son importantes.

8. Componentes importantes

Los componentes principales están definidos en:

docs/COMPONENT-SPEC.md

Entre ellos:

Hero
StoryIntro
Timeline
TimelineItem
Memory
Gallery
LoveLetter
Proximity
Finale

No crear componentes duplicados si ya existe uno que pueda reutilizarse.

9. Contenido personal

El contenido de la relación debe estar separado de la lógica visual cuando sea posible.

Preferir:

src/data/

para:

Recuerdos.
Fechas.
Textos.
Carta.
Mensajes.

Evitar introducir grandes cantidades de contenido personal directamente dentro de componentes reutilizables.

10. Animaciones

Las animaciones deben tener propósito narrativo.

No agregar animaciones solamente para hacer que la interfaz parezca más compleja.

Ejemplos:

Hero
→ Entrada cinematográfica


Timeline
→ Aparición durante scroll


Love Letter
→ Apertura de carta


Proximity
→ Cambios según distancia


Finale
→ Cierre emocional

Las reglas detalladas estarán en:

docs/MOTION-SYSTEM.md
11. Mobile First

El sitio debe funcionar correctamente en teléfonos.

Prioridad:

Mobile
↓
Tablet
↓
Desktop

Nunca asumir que una composición desktop puede simplemente reducirse para móvil.

Cuando sea necesario, adaptar la composición.

12. Proximity

La funcionalidad de proximidad permitirá mostrar aproximadamente la distancia entre los dos usuarios.

Objetivo inicial:

≤ 5 metros
→ Estamos juntos ❤️

La interfaz de proximidad no debe implementar directamente:

GPS.
Cálculos de distancia.
Comunicación realtime.
Autenticación.

Estas responsabilidades pertenecen a las capas correspondientes definidas en:

docs/ARCHITECTURE.md

y posteriormente:

docs/PROXIMITY-SYSTEM.md
13. Arquitectura

Respetar siempre:

docs/ARCHITECTURE.md

No introducir:

Backend innecesario.
Base de datos innecesaria.
Estado global innecesario.
Dependencias innecesarias.
Abstracciones prematuras.

La simplicidad es preferible cuando satisface los requisitos.

14. Tecnologías

El proyecto utiliza el stack definido por el repositorio.

Antes de introducir una nueva tecnología:

Revisar el stack existente.
Determinar si la funcionalidad puede resolverse con las herramientas actuales.
Solo agregar una dependencia si aporta un beneficio real.

No instalar librerías únicamente porque sean populares.

15. Reglas de implementación

Antes de implementar:

1. Leer documentación relevante.
2. Revisar componentes existentes.
3. Revisar referencia Lovable si aplica.
4. Implementar la solución mínima necesaria.
5. Mantener consistencia visual.
6. Probar responsive.
7. Revisar accesibilidad.
8. Revisar rendimiento.
16. Jerarquía de decisiones

Cuando existan contradicciones:

1. Decisión explícita del usuario
2. PRD.md
3. DESIGN-DIRECTION.md
4. ARCHITECTURE.md
5. COMPONENT-SPEC.md
6. MOTION-SYSTEM.md
7. references/lovable/
8. Inferencia del agente

El agente no debe inventar decisiones importantes cuando la documentación no las define.

17. Qué NO hacer

No:

Convertir OurStory en una landing comercial.
Cambiar arbitrariamente la identidad visual.
Modificar references/lovable/.
Añadir librerías sin necesidad.
Crear backend sin requisito.
Crear componentes duplicados.
Hardcodear grandes cantidades de contenido personal.
Sobrecargar la interfaz con animaciones.
Sacrificar rendimiento por efectos visuales.
Ignorar mobile.
Ignorar accesibilidad.
Tomar decisiones importantes sin revisar la documentación.
18. Filosofía

Cuando existan varias soluciones técnicamente válidas:

Preferir la solución más simple que preserve la experiencia visual y emocional de OurStory.

El código debe ser mantenible.

La experiencia debe ser memorable.

La tecnología debe estar al servicio de la historia.



### Con esto tenemos


```text
.opencode/
└── skills/
    └── ourstory-context/
        └── SKILL.md