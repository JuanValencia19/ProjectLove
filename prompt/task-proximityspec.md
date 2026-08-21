# TASK — PROXIMITY SPEC + DECISIONS

## Objetivo

Preparar la documentación de Proximity para comenzar posteriormente la implementación.

Esta tarea es EXCLUSIVAMENTE documental.

NO implementar código.
NO instalar dependencias.
NO crear componentes.
NO configurar Supabase.
NO modificar hooks.
NO modificar `package.json`.

---

## 1. Leer primero

Revisar:

- `AGENTS.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DECISIONS.md`
- `docs/DATA-MODEL.md`
- `docs/ARCHITECTURE.md`
- `docs/PRD.md`

No reemplazar la especificación completa por conocimiento externo.
Mantener la terminología y estructura existente siempre que sea posible.

---

# 2. Decisiones confirmadas

Registrar estas decisiones en `docs/DECISIONS.md`:

### Realtime

Usar:

`Supabase Realtime Broadcast`

Motivo:
- Solo necesitamos comunicación entre dos dispositivos.
- No necesitamos persistir posiciones.
- Broadcast es suficiente para compartir ubicación temporalmente.

### Identidad

Usar:

`Room link mediante URL hash`

Ejemplo:

`https://ourstory.app/#kx7f2`

El hash identifica temporalmente la sala.

No implementar autenticación tradicional para MVP.

### Dependencia

La implementación utilizará:

`@supabase/supabase-js`

No instalarla todavía.

### Estado TOGETHER

Considerar `TOGETHER` únicamente cuando:

```text
distance <= 5m
AND
accuracyA + accuracyB < 10m

La precisión GPS debe formar parte de la evaluación del estado.

State Machine

Los estados de distancia son paralelos:

FAR
NEAR
VERY_NEAR
TOGETHER

No deben representarse como una secuencia obligatoria:

FAR → NEAR → VERY_NEAR → TOGETHER

El estado debe determinarse directamente según la distancia y precisión actuales.

3. Corregir PROXIMITY-SYSTEM.md

Corregir únicamente problemas reales detectados durante la auditoría.

Markdown

Cerrar correctamente los bloques de código actualmente abiertos.

Los bloques identificados por la auditoría son:

§2
§12
§13
§15

No alterar contenido que no necesite corrección.

State diagram

Actualizar el diagrama para representar:

WAITING
   ↓
┌──────┬──────┬───────────┬──────────┐
FAR   NEAR   VERY_NEAR  TOGETHER

Los cuatro estados son resultados paralelos de la distancia calculada.

4. Documentar arquitectura

Actualizar PROXIMITY-SYSTEM.md para reflejar claramente:

Device A
   ↓
Geolocation
   ↓
Supabase Realtime Broadcast
   ↓
Room
   ↓
Device B
   ↓
Partner Location
   ↓
Distance + Accuracy
   ↓
Proximity State
   ↓
UI

La ubicación debe tratarse como dato temporal.

No diseñar persistencia de ubicación.

5. Privacidad

Documentar explícitamente:

La ubicación no se almacena como historial.
Se utiliza únicamente para calcular proximidad.
La comunicación pertenece a una room temporal.
El usuario debe conceder permiso de geolocalización.
El sistema debe manejar correctamente la denegación del permiso.

No agregar políticas de privacidad complejas todavía.

6. NO resolver todavía

NO tomar decisiones adicionales sobre:

frecuencia exacta de actualización;
timeout definitivo;
tolerancia adicional del GPS;
mensajes finales;
diseño visual;
animación TOGETHER;
testing;
deployment.

Esos puntos quedan para las fases de implementación.

7. Validación

Después de modificar documentación:

Revisar Markdown.
Confirmar que no quedan bloques de código abiertos.
Confirmar que las decisiones son consistentes entre PROXIMITY-SYSTEM.md y DECISIONS.md.
Confirmar que no se modificó ningún archivo de src/.
Confirmar que no se modificó package.json.
8. Definition of Done

La tarea termina cuando:

 Decisiones registradas en DECISIONS.md.
 Markdown corregido.
 State diagram corregido.
 Supabase Broadcast documentado.
 Room hash documentado.
 Regla TOGETHER documentada.
 Estados paralelos documentados.
 Privacidad temporal documentada.
 Ningún código modificado.
 Ninguna dependencia instalada.
REPORTE FINAL

Responder únicamente:

Cambios

Archivos modificados.

Decisiones registradas

Lista de decisiones.

Correcciones

Lista de problemas corregidos.

Estado

Indicar si Proximity está listo para comenzar implementación.

Siguiente fase

Indicar únicamente:

Phase 1 — Geolocation

NO implementar la siguiente fase.