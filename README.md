# ProjectLove ❤️

> Una experiencia web interactiva para contar nuestra historia.

ProjectLove es un proyecto personal diseñado para transformar recuerdos, fotografías y momentos especiales en una experiencia narrativa interactiva.

La experiencia combina storytelling, fotografía, animaciones y elementos interactivos para recorrer nuestra historia como pareja.

---

## ✨ Experiencia

El recorrido principal sigue esta estructura:

```text
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
  ↓
Proximity

La intención no es crear una landing tradicional, sino una experiencia visual que se sienta como recorrer nuestra historia.

🎨 Dirección visual

La identidad visual está inspirada principalmente en:

Spider-Man: Into the Spider-Verse
Miles Morales & Gwen Stacy
Estética de cómic
Halftone
Chromatic effects
Fotografía cinematográfica
Tipografía expresiva
Motion storytelling

La referencia visual principal del MVP se encuentra en:

references/lovable/

references/lovable/ es únicamente material de referencia. El código de producción vive en src/.

🛠️ Stack

Actualmente el proyecto utiliza:

Next.js
React
TypeScript
Tailwind CSS
CSS animations
Git / GitHub

No se deben añadir dependencias innecesariamente.

📁 Estructura
ProjectLove/
│
├── .opencode/
│   ├── agents/
│   └── skills/
│
├── docs/
│   ├── PRD.md
│   ├── DESIGN-DIRECTION.md
│   ├── ARCHITECTURE.md
│   ├── COMPONENT-SPEC.md
│   ├── DATA-MODEL.md
│   ├── MOTION-SYSTEM.md
│   ├── PROXIMITY-SYSTEM.md
│   ├── DECISIONS.md
│   └── AGENT-WORKFLOW.md
│
├── references/
│   └── lovable/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   └── lib/
│
├── tests/
│
├── AGENTS.md
├── package.json
└── README.md
🤖 Desarrollo con agentes

OurStory está diseñado para desarrollarse mediante agentes de IA coordinados por un Orchestrator.

Antes de trabajar en el proyecto, los agentes deben consultar:

AGENTS.md
      ↓
docs/AGENT-WORKFLOW.md
      ↓
Documentación específica de la tarea

La documentación funciona como contexto persistente del proyecto.

📚 Documentación
Documento	Propósito
PRD.md	Objetivos y alcance
DESIGN-DIRECTION.md	Dirección visual
ARCHITECTURE.md	Arquitectura
COMPONENT-SPEC.md	Componentes
DATA-MODEL.md	Modelos de datos
MOTION-SYSTEM.md	Sistema de animaciones
PROXIMITY-SYSTEM.md	Sistema de proximidad
DECISIONS.md	Decisiones del proyecto
AGENT-WORKFLOW.md	Flujo de trabajo de agentes
📍 Proximity

Una de las funcionalidades principales previstas es detectar aproximadamente la distancia entre ambos dispositivos.

Conceptualmente:

Dispositivo A
      +
Dispositivo B
      ↓
Distancia
      ↓
≤ 5 metros
      ↓
❤️ Estamos juntos

La implementación debe respetar las restricciones de privacidad y las limitaciones de precisión de la geolocalización.

🚧 Estado actual

MVP1 — En desarrollo

Foundation       ✅
Hero              ✅
Story Intro       ✅
Timeline          ✅
Gallery           ✅
Love Letter       ✅
Finale            ✅
QA                🟡
Assets            🟡
Proximity         🔴
Deploy            🔴

Progreso aproximado: 70% del MVP1.

El porcentaje es una estimación de avance funcional y no representa porcentaje de código.

🚀 Desarrollo local

Instalar dependencias:

npm install

Ejecutar desarrollo:

npm run dev

Crear build:

npm run build
🔐 Seguridad

Nunca almacenar en el repositorio:

.env
API keys
Tokens
Credentials
Secrets

Utilizar variables de entorno para cualquier secreto necesario.

📌 Principios
La experiencia es más importante que la cantidad de funcionalidades.
Las animaciones deben reforzar la narrativa.
Mobile-first.
Evitar complejidad innecesaria.
Mantener datos y UI separados.
No modificar referencias como si fueran código de producción.
No introducir arquitectura innecesaria.
Las decisiones importantes deben quedar documentadas.
❤️ Objetivo final

Crear una experiencia que permita recorrer nuestra historia y que, al llegar al final, se sienta como algo más cercano a vivir un recuerdo que visitar una página web.
