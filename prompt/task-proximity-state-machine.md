# TASK — PROXIMITY PHASE 4: PROXIMITY STATE MACHINE

## Objetivo

Implementar únicamente la lógica que transforma:

- ubicación propia
- ubicación de la pareja
- distancia
- precisión GPS

en un `ProximityState`.

NO implementar UI ni modificar Supabase.

---

## 1. Leer antes de modificar

Revisar obligatoriamente:

- `AGENTS.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`

Después revisar:

- `src/types/proximity.ts`
- `src/lib/distance.ts`
- `src/hooks/use-geolocation.ts`
- `src/hooks/use-realtime-location.ts`

Respetar los contratos existentes.

---

## 2. Implementar

Crear la lógica necesaria para determinar el estado de proximidad.

Preferir una función pura en:

`src/lib/proximity.ts`

o la ubicación definida por `ARCHITECTURE.md`.

La función debe recibir:

```ts
myLocation: LocationData | null
partnerLocation: LocationData | null

y devolver el estado definido por ProximityState.

3. Estados

Los estados son independientes/paralelos:

WAITING
FAR
NEAR
VERY_NEAR
TOGETHER

No tratarlos como una secuencia obligatoria.

La transición depende exclusivamente de los datos disponibles y de la distancia.

4. WAITING

Devolver:

WAITING

cuando:

no existe ubicación propia, o
no existe ubicación de la pareja.

No intentar calcular distancia con datos incompletos.

5. Distancia

Utilizar exclusivamente:

distanceBetween()

No duplicar la fórmula Haversine.

No modificar src/lib/distance.ts.

6. Umbrales

Utilizar ÚNICAMENTE los umbrales definidos en:

docs/PROXIMITY-SYSTEM.md

No inventar nuevos valores.

No cambiar los umbrales documentados.

7. TOGETHER

Respetar exactamente D-019:

distance ≤ 5m
AND
accuracyA + accuracyB < 10m

Ambas condiciones deben cumplirse.

Si la distancia es ≤ 5m pero la precisión combinada NO cumple la condición:

NO devolver TOGETHER.

Utilizar accuracy de ambos LocationData.

8. Estados restantes

Determinar:

FAR
NEAR
VERY_NEAR

según los umbrales existentes en PROXIMITY-SYSTEM.md.

No crear lógica adicional de "histeresis", suavizado o tolerancia salvo que esté explícitamente documentada.

9. Hook

Después de implementar la función pura, integrar la lógica en:

src/hooks/use-proximity.ts

El hook debe combinar:

useGeolocation()
+
useRealtimeLocation()
+
distanceBetween()
+
proximity state machine

y exponer únicamente el contrato definido por la documentación.

No crear todavía UI.

10. Responsabilidades del hook

El hook debe:

Obtener ubicación propia.
Obtener ubicación de la pareja.
Calcular distancia cuando ambas existan.
Determinar ProximityState.
Exponer distancia.
Exponer información necesaria para una futura UI.
Manejar correctamente el estado inicial.

No debe:

Renderizar componentes.
Mostrar mensajes.
Crear animaciones.
Persistir ubicaciones.
Modificar Supabase.
11. Errores

No inventar nuevos estados.

Si geolocalización o realtime tienen errores, respetar los contratos existentes.

No convertir automáticamente un error técnico en FAR.

El agente debe revisar PROXIMITY-SYSTEM.md para determinar el comportamiento documentado.

12. Restricciones

NO modificar:

src/components/
src/lib/distance.ts
src/hooks/use-geolocation.ts
src/hooks/use-realtime-location.ts
references/lovable/

salvo que exista una incompatibilidad real con los contratos documentados.

NO instalar dependencias.

NO implementar:

Proximity UI.
Animaciones.
Privacy UX.
Testing framework.
Deploy.

13. Validación

Ejecutar:

npm run build

Ejecutar typecheck si existe.

Realizar validación manual de la función con:

Ubicación propia ausente.
Ubicación de pareja ausente.
Distancia FAR.
Distancia NEAR.
Distancia VERY_NEAR.
Distancia ≤ 5m con buena precisión.
Distancia ≤ 5m con mala precisión.
Misma ubicación.

No modificar el proyecto únicamente para crear un runner de tests.

14. Definition of Done
 Máquina de estados implementada.
 Estados paralelos correctamente evaluados.
 WAITING funciona.
 FAR funciona.
 NEAR funciona.
 VERY_NEAR funciona.
 TOGETHER respeta D-019.
 Utiliza distanceBetween().
 No duplica Haversine.
 useProximity integrado.
 Build correcto.
 TypeScript correcto.
 No UI implementada.
 No cambios en fases posteriores.
REPORTE FINAL

Responder únicamente:

Archivos modificados
Implementación

Resumen breve.

Estados

Indicar cómo quedó implementado cada estado.

Validación

Build/typecheck y validaciones realizadas.

Problemas pendientes

Solo problemas reales.

Estado

Phase 4 — Proximity State Machine: COMPLETE

o

Phase 4 — Proximity State Machine: BLOCKED

Siguiente fase

Phase 5 — Proximity UI

NO implementar la siguiente fase automáticamente.