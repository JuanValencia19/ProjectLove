# OurStory — Component Specification

**Version:** 0.1
**Status:** Draft
**Phase:** 0 — Project Foundation & Design Definition

---

# 1. Purpose

This document defines the visual and functional requirements of the main UI components of OurStory.

Components should preserve the approved visual language documented in:

`docs/DESIGN-DIRECTION.md`

The original Lovable implementation located at:

`references/lovable/`

is the primary implementation reference for existing components.

Production components belong exclusively in:

`src/components/`

---

# 2. Component Architecture

```text
src/components/
├── hero/
├── story-intro/
├── timeline/
├── memory/
├── gallery/
├── letter/
├── proximity/
└── finale/