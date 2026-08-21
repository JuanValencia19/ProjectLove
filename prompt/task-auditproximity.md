# TASK — AUDIT PROXIMITY SYSTEM

## Objetivo

Auditar el sistema de proximidad antes de implementar cualquier código.

Esta tarea es EXCLUSIVAMENTE de análisis.

NO implementar.
NO modificar código.
NO crear componentes.
NO instalar dependencias.
NO crear backend.
NO crear servicios realtime.

---

## 1. Documentación obligatoria

Leer:

- `AGENTS.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA-MODEL.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DECISIONS.md`
- `docs/AGENT-WORKFLOW.md`

Después revisar el código actual relacionado con:

```text
src/hooks/
src/lib/
src/components/proximity/
src/data/

También revisar package.json.

2. Objetivo del análisis

Determinar exactamente qué necesitamos para convertir la especificación de Proximity en un sistema funcional.

Analizar:

Geolocation
Estado actual.
APIs utilizadas o previstas.
Permisos.
Precisión.
Manejo de errores.
Actualización de posición.
Distance
Existencia de distanceBetween.
Fórmula utilizada o requerida.
Unidades.
Manejo de precisión.
Proximity State

Determinar cómo deben funcionar:

UNAVAILABLE
CONNECTING
WAITING
FAR
NEAR
VERY_NEAR
TOGETHER
ERROR

y qué condiciones producen cada estado.

Realtime

Determinar:

Si realmente es necesario.
Por qué es necesario.
Qué información debe sincronizarse.
Qué frecuencia aproximada tendría.
Qué alternativa de infraestructura requiere.
Qué información NO debe almacenarse.
Identidad

Determinar cómo pueden distinguirse los dos dispositivos.

No asumir autenticación si el proyecto no la requiere.

Privacidad

Determinar:

Qué datos se transmiten.
Qué datos se almacenan.
Cuándo se transmiten.
Cuándo dejan de transmitirse.
UI

Determinar qué necesita el componente Proximity.

No diseñar una UI nueva todavía.

3. Revisar decisiones pendientes

Buscar explícitamente en:

PROXIMITY-SYSTEM.md
DECISIONS.md
ARCHITECTURE.md

cualquier decisión todavía marcada como:

TODO
TBD
PENDING
UNKNOWN

o equivalente.

No resolverlas mediante suposiciones.

4. Clasificar hallazgos

Clasificar cada punto como:

READY
NEEDS DECISION
NEEDS IMPLEMENTATION
BLOCKER
5. Arquitectura recomendada

Al final proponer la arquitectura mínima necesaria para MVP.

Representarla de forma sencilla:

Device A
   ↓
Location
   ↓
Transport
   ↓
Shared State
   ↓
Distance Calculation
   ↓
Proximity State
   ↓
UI

Adaptar el diagrama al proyecto real.

No introducir tecnologías concretas si todavía no están justificadas.

6. Plan de implementación

Proponer fases pequeñas:

Phase 1
Geolocation


Phase 2
Distance calculation


Phase 3
Shared/realtime state


Phase 4
Proximity state machine


Phase 5
UI


Phase 6
Privacy + error handling


Phase 7
Testing

Modificar este orden únicamente si la documentación demuestra que otro orden es mejor.

7. Criterios de seguridad

NO:

Inventar APIs.
Inventar servicios realtime.
Inventar credenciales.
Inventar modelos.
Asumir que GPS tiene precisión de 5 metros.
Asumir que ambos dispositivos pueden comunicarse directamente.
Implementar nada durante esta auditoría.

Distinguir claramente:

Documentado
vs
Inferido
vs
Pendiente de decisión
REPORTE FINAL

Responder únicamente con:

1. Estado actual

Qué partes ya existen.

2. Gaps

Qué falta.

3. Decisiones pendientes

Qué necesitamos decidir antes de implementar.

4. Bloqueadores

Qué impide comenzar.

5. Arquitectura propuesta

Diagrama breve.

6. Plan de implementación

Máximo 5–7 fases.

7. Dependencias necesarias

Indicar solamente dependencias realmente necesarias.

8. Recomendación

Indicar si estamos listos para implementar o si primero debemos tomar alguna decisión.

NO modificar ningún archivo.

NO implementar ninguna fase.