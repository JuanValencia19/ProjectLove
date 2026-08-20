# OurStory — Architecture

**Version:** 0.1
**Status:** Draft
**Phase:** 0 — Project Foundation & Design Definition

---

## 1. 🧭 Architecture Goals

The architecture must:

- Keep the visual experience independent from relationship content.
- Keep components small and reusable.
- Make animations composable.
- Prioritize mobile performance.
- Allow the proximity system to be introduced without restructuring the application.
- Keep the original Lovable prototype isolated as a reference.
- Make the codebase easy for OpenCode agents to understand and modify.

The architecture should favor simplicity over unnecessary abstractions.

---

## 2. 🏛️ Architectural Principles

### 2.1 🔄 Reference vs Production

The original Lovable implementation is stored in:

`references/lovable/`

This directory is read-only.

Production code belongs exclusively in:

`src/`

Agents may study the Lovable implementation but must not modify it.

---

### 2.2 🧩 Content vs Presentation

Relationship content must be separated from UI components.

Example:

```text
src/data/memories.ts
        ↓
Timeline component
        ↓
TimelineItem
        ↓
Visual presentation

Components should not contain large amounts of hardcoded relationship content.

### 2.3 🧠 Components vs Logic

Visual components should primarily handle presentation.

Reusable application logic should live in:

src/hooks/
src/lib/

Examples:

useReveal()
useScrollProgress()
useGeolocation()
useProximity()
### 2.4 📱 Mobile First

Mobile is the primary target.

Components should be designed for small screens first and progressively enhanced for larger screens.

Do not create separate desktop/mobile implementations unless the interaction genuinely requires different behavior.

## 3. 🗂️ Project Structure
src/
├── app/
│
├── components/
│   ├── hero/
│   ├── timeline/
│   ├── memory/
│   ├── gallery/
│   ├── letter/
│   ├── proximity/
│   └── finale/
│
├── data/
│   └── memories.ts
│
├── hooks/
│   ├── use-reveal.ts
│   ├── use-scroll-progress.ts
│   ├── use-geolocation.ts
│   └── use-proximity.ts
│
├── lib/
│   ├── distance.ts
│   └── utils.ts
│
└── types/
    ├── memory.ts
    └── proximity.ts

The structure may evolve when implementation reveals a legitimate need.

Agents should not create new architectural layers without justification.

## 4. 🧱 Application Layer
src/app/

Contains the Next.js application routes and page-level composition.

Responsibilities:

Page composition
Global providers
Metadata
Global layout
Application-level configuration

Page files should compose existing components rather than contain large UI implementations.

Example:

<main>
  <Hero />
  <StoryIntro />
  <Timeline />
  <Gallery />
  <LoveLetter />
  <Proximity />
  <Finale />
</main>
## 5. 🧩 Component Layer
src/components/

Contains reusable visual components.

Each major experience section should have its own directory.

Example:

components/timeline/
├── Timeline.tsx
├── TimelineItem.tsx
└── TimelineNode.tsx

Components should follow the project's visual direction defined in:

docs/DESIGN-DIRECTION.md

and component requirements defined in:

docs/COMPONENT-SPEC.md

## 6. 🗃️ Data Layer
src/data/

Contains static relationship content.

Example:

src/data/
└── memories.ts

This layer should contain:

Memories
Timeline content
Quotes
Metadata
Other narrative content

It should not contain UI logic.

## 7. 🧾 Types Layer
src/types/

Contains shared TypeScript types.

Examples:

Memory
ProximityState
LocationPoint

Types should be shared when multiple components or modules depend on the same structure.

Avoid creating types that are only used once unless they significantly improve readability.

## 8. 🪝 Hooks Layer
src/hooks/

Contains reusable React hooks.

Examples:

use-reveal.ts

Handles viewport-based reveal behavior.

The current Lovable prototype uses IntersectionObserver for this purpose.

use-scroll-progress.ts

Provides normalized scroll progress when required by scroll-driven interactions.

use-geolocation.ts

Encapsulates browser geolocation access.

use-proximity.ts

Coordinates proximity-related state.

Hooks should not contain visual markup.

## 9. 🛠️ Utility Layer
src/lib/

Contains framework-independent utilities.

Examples:

distance.ts

Responsible for calculating distance between two geographic coordinates.

The calculation should be isolated from React components.

utils.ts

General project utilities.

Avoid turning this directory into a generic dumping ground.

## 10. 🎨 Styling Architecture

The project uses Tailwind CSS and CSS custom properties.

Global design tokens should be defined centrally.

The current visual system includes:

Hero red
Hero pink
Hero blue
Display typography
Serif typography
Sans typography
Border radius
Background
Foreground
Animation utilities
Halftone effect
Chromatic effect
Gradient veil

The canonical visual definition lives in:

docs/DESIGN-DIRECTION.md

Agents must not introduce alternative design systems without documenting the reason.

## 11. ✨ Animation Architecture

Animation should be layered according to complexity.

Level 1 — CSS

Use CSS for:

opacity
transforms
hover states
simple reveals
simple scaling
infinite decorative animations
Level 2 — Browser APIs

Use native APIs for:

IntersectionObserver
ResizeObserver
viewport detection
Level 3 — Animation Libraries

Use Framer Motion or GSAP only when the interaction requires:

complex sequencing
scroll-linked animation
coordinated component transitions
advanced timelines

Do not introduce a library solely for a simple CSS transition.

The complete animation system is documented in:

docs/MOTION-SYSTEM.md

## 12. 🖼️ Image Architecture

Images should be treated as first-class content.

Recommended organization:

public/images/
├── hero/
├── memories/
├── gallery/
└── decorative/

Images should:

Use appropriate formats.
Be optimized for their display size.
Avoid unnecessarily large files.
Use responsive image loading where appropriate.
Be lazy-loaded when they are not immediately visible.

Real relationship photographs should replace placeholders without requiring component restructuring.

## 13. 📍 Proximity Architecture

The core experience does not require a backend.

The proximity feature is an independent subsystem.

Conceptually:

Browser
   │
   ├── Geolocation API
   │
   ↓
Location State
   │
   ↓
Realtime Transport
   │
   ↓
Other User Location
   │
   ↓
Distance Calculation
   │
   ↓
Proximity State
   │
   ↓
Proximity UI

The exact realtime provider and backend architecture remain TBD.

The proximity implementation must be isolated so it does not introduce unnecessary dependencies into the storytelling experience.

Detailed requirements belong in:

docs/PROXIMITY-SYSTEM.md

## 14. 🧠 State Management

The project should avoid global state unless genuinely required.

Prefer:

Local React state.
Component composition.
URL/state derived from application context where appropriate.
Dedicated hooks for reusable stateful behavior.

A global state library should only be introduced if the application demonstrates a real need.

## 15. 🔒 Dependency Rules

Before introducing a dependency, agents should verify whether the functionality can reasonably be implemented using:

Existing project dependencies.
Native browser APIs.
CSS.
Small local utilities.

Avoid adding dependencies for isolated or trivial functionality.

Every significant new dependency should have a clear justification.

## 16. 🔗 Component Communication

Prefer explicit props and composition.

Example:

<Timeline memories={memories} />

rather than having components independently import unrelated application state.

Shared state should only be introduced when multiple distant components genuinely require it.

## 17. ⚠️ Error and Empty States

Interactive components should define meaningful fallback behavior.

Examples:

Image unavailable

Show a visually consistent placeholder.

Geolocation unavailable

Explain that proximity cannot currently be determined.

Location permission denied

Allow the user to continue using the rest of the experience.

The main story experience must never become unusable because the proximity feature fails.

## 18. ♿ Accessibility

The architecture must support:

Semantic HTML
Keyboard navigation
Accessible buttons
Meaningful image alt text
Sufficient contrast
Reduced motion preferences
Screen-reader friendly interactive elements

Animations must never be the only mechanism used to communicate important information.

## 19. ⚡ Performance

Performance is especially important on mobile.

Agents should:

Avoid unnecessary client components.
Avoid excessive re-renders.
Lazy-load non-critical content.
Optimize images.
Prefer CSS for simple animations.
Avoid unnecessary animation libraries.
Keep scroll handlers efficient.
Avoid continuous JavaScript work when browser APIs can be used.
## 20. 🚧 Architecture Boundaries

The following boundaries must be respected:

references/
    ↓
Reference only


docs/
    ↓
Project knowledge and decisions


src/data/
    ↓
Relationship content


src/components/
    ↓
Visual presentation


src/hooks/
    ↓
Reusable React behavior


src/lib/
    ↓
Framework-independent logic


src/types/
    ↓
Shared contracts


src/app/
    ↓
Application composition
## 21. 🤖 Agent Implementation Rule

Before implementing a feature, agents should determine:

Which architectural layer owns the feature.
Whether an existing component or utility can be reused.
Whether the feature is already specified in project documentation.
Whether the feature introduces a new dependency.
Whether the feature affects mobile behavior.
Whether the change requires updating documentation.

Agents should prefer extending existing architecture over creating parallel implementations.