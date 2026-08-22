# TASK — PROXIMITY PHASE 6: PRIVACY + ERROR HANDLING

## Objetivo

Reforzar el sistema Proximity para manejar correctamente:

- Permisos de geolocalización.
- Datos obsoletos.
- Desconexiones.
- Errores de Realtime.
- Ausencia de pareja.
- Configuración incompleta.
- Privacidad de ubicación.

NO modificar la lógica de distancia ni la State Machine.

---

## 1. Leer antes de modificar

Revisar obligatoriamente:

- `AGENTS.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`

Después revisar:

- `src/hooks/use-geolocation.ts`
- `src/hooks/use-realtime-location.ts`
- `src/hooks/use-proximity.ts`
- `src/lib/proximity.ts`
- `src/components/proximity/Proximity.tsx`
- `src/lib/supabase.ts`

La documentación es la fuente de verdad.

---

# 2. PRIVACIDAD

La ubicación debe:

- Existir únicamente mientras el usuario utiliza la funcionalidad.
- Transmitirse únicamente mediante el room correspondiente.
- No almacenarse en PostgreSQL.
- No crear historial.
- No escribirse en logs.
- No exponerse en errores.
- No persistirse innecesariamente en `localStorage`.

No introducir almacenamiento permanente de coordenadas.

---

# 3. GEOLOCATION

Revisar `useGeolocation()`.

Garantizar correctamente:

### Permiso denegado

Debe producir un estado manejable por la UI.

No intentar solicitar permisos repetidamente.

### Geolocalización no disponible

Debe detectarse correctamente.

### Timeout

Debe producir un error controlado.

### Cleanup

Al desmontar:

- detener `watchPosition`;
- liberar recursos;
- no ejecutar actualizaciones de estado posteriores.

No cambiar el contrato público del hook salvo que sea estrictamente necesario.

---

# 4. REALTIME

Revisar `useRealtimeLocation()`.

Garantizar:

- unsubscribe correcto;
- cleanup al desmontar;
- no duplicar subscriptions;
- manejo de desconexión;
- manejo de `CHANNEL_ERROR`;
- manejo de configuración Supabase ausente.

No crear persistencia.

No implementar otro sistema realtime.

No cambiar Supabase Broadcast por otra tecnología.

---

# 5. DATOS OBSOLETOS

Mantener la política definida en `PROXIMITY-SYSTEM.md`.

Una ubicación demasiado antigua NO debe utilizarse para afirmar que los usuarios están juntos.

Revisar la implementación actual de datos obsoletos.

Si ya existe una política de `>30s`, respetarla.

No inventar otro timeout.

Cuando los datos dejan de ser válidos:

- dejar de utilizarlos para calcular proximidad;
- devolver el estado definido por el contrato;
- no conservarlos como si fueran actuales.

---

# 6. SEGURIDAD DE ROOM

Revisar el uso de:

```text
#roomCode

No introducir autenticación en esta fase.

No cambiar D-018.

No almacenar datos personales asociados al room.

No enviar información adicional dentro del Broadcast.

El payload debe continuar limitado a:

deviceId
location

y los campos de LocationData ya definidos.

7. ERRORES

Los errores deben ser controlados y previsibles.

Revisar la cadena:

Geolocation
    ↓
Realtime
    ↓
useProximity
    ↓
Proximity UI

Evitar:

errores silenciosos;
excepciones no controladas;
estados imposibles;
errores duplicados;
mensajes técnicos innecesarios para el usuario.

No crear una nueva State Machine.

8. UI

Solo realizar cambios mínimos si son necesarios para representar correctamente un error o estado de privacidad.

NO rediseñar Proximity.tsx.

NO cambiar:

layout;
colores;
animaciones;
copy principal;
estructura visual.

La UI ya fue implementada en Phase 5.

9. TOGETHER

NO modificar D-019.

Debe continuar siendo exactamente:

distance ≤ 5m
AND
accuracyA + accuracyB < 10m

No agregar:

tolerancias nuevas;
suavizado;
hysteresis;
compensaciones GPS;
cambios de umbral.
10. Restricciones

NO modificar:

src/lib/distance.ts
src/lib/proximity.ts

NO cambiar:

D-017
D-018
D-019
D-020

NO instalar dependencias.

NO implementar:

Testing framework.
Deploy.
Analytics.
Authentication.
Database persistence.
Nueva UI.
Nueva state machine.

NO modificar:

references/lovable/
11. Variables de entorno

Revisar:

.env.example

Confirmar que las variables necesarias estén documentadas.

Nunca mostrar valores reales.

Nunca hardcodear:

Supabase URL.
Supabase key.
Tokens.
Secrets.

No modificar .env real.

12. Validación

Ejecutar:

npm run build

Ejecutar typecheck si existe.

Revisar manualmente:

Geolocation denied.
Geolocation unavailable.
Timeout.
Supabase sin configuración.
Realtime error.
Desconexión.
Room sin pareja.
Datos obsoletos.
Unmount/cleanup.
No exposición de coordenadas en logs.

No instalar testing framework en esta fase.

13. Definition of Done
 Permisos de geolocalización correctamente manejados.
 Errores de geolocalización controlados.
 Realtime cleanup correcto.
 Realtime errors controlados.
 Datos obsoletos correctamente invalidados.
 Ubicación no persistida.
 No coordenadas en logs.
 Room mantiene D-018.
 Payload mantiene únicamente datos necesarios.
 D-019 intacto.
 State Machine intacta.
 UI solo modificada si era estrictamente necesario.
 Build correcto.
 TypeScript correcto.
 Sin dependencias nuevas.
 references/lovable/ intacto.
REPORTE FINAL

Responder únicamente:

Archivos modificados
Privacidad

Qué se protegió.

Error Handling

Qué errores se manejan.

Datos obsoletos

Qué política quedó implementada.

Seguridad

Confirmar ausencia de secrets y persistencia de coordenadas.

Validación

Build/typecheck y verificaciones realizadas.

Problemas pendientes

Solo problemas reales.

Estado

Phase 6 — Privacy + Error Handling: COMPLETE

o

Phase 6 — Privacy + Error Handling: BLOCKED

Siguiente fase

Phase 7 — Testing

NO implementar la siguiente fase automáticamente.