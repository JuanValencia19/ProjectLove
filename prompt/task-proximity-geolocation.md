# TASK — PROXIMITY PHASE 1: GEOLOCATION

## Objetivo

Implementar únicamente la capa local de geolocalización de Proximity.

Esta fase debe permitir obtener y mantener la ubicación actual del dispositivo mediante la Browser Geolocation API.

NO implementar todavía:

- Supabase.
- Realtime.
- Room/identity.
- Distance calculation.
- Proximity state machine.
- Proximity UI.
- Backend.
- Persistencia de ubicaciones.

---

## 1. Leer antes de modificar

Revisar:

- `AGENTS.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`

Después revisar:

- `src/hooks/use-geolocation.ts`
- `src/types/proximity.ts`
- `src/lib/`
- `package.json`

No asumir contratos que no estén definidos en la documentación.

---

## 2. Implementar

Implementar:

`src/hooks/use-geolocation.ts`

Utilizar la Browser Geolocation API.

El hook debe:

- Solicitar permiso mediante la API cuando corresponda.
- Obtener la posición actual.
- Mantener la posición más reciente.
- Utilizar `watchPosition` para actualizaciones.
- Limpiar correctamente el watcher al desmontar.
- Manejar errores de geolocalización.
- Exponer el estado de permiso/error necesario según el contrato existente.

La implementación debe funcionar únicamente en cliente.

---

## 3. Location Data

Utilizar el contrato definido actualmente en:

`docs/DATA-MODEL.md`

y/o

`docs/PROXIMITY-SYSTEM.md`

No crear un segundo modelo equivalente.

Si el tipo actual está incompleto, actualizar únicamente el contrato necesario para que `useGeolocation` sea correctamente tipado.

No modificar contratos no relacionados.

---

## 4. Precisión

Conservar la información de precisión (`accuracy`) proporcionada por el navegador.

NO utilizar todavía `accuracy` para determinar `TOGETHER`.

Eso pertenece a una fase posterior.

No inventar tolerancias.

---

## 5. Errores

Manejar como mínimo los estados definidos por la API/documentación:

- Permiso denegado.
- Posición no disponible.
- Timeout.

No crear mensajes visuales definitivos todavía.

La UI de errores se implementará posteriormente.

---

## 6. Performance

Utilizar las opciones de geolocalización definidas o permitidas por la documentación.

No implementar polling manual.

No crear intervalos innecesarios.

Limpiar siempre el `watchPosition`.

---

## 7. Restricciones

NO modificar:

```text
src/components/

salvo que sea estrictamente necesario para typecheck, lo cual debe reportarse.

NO implementar:

Supabase
Realtime
Room
Distance
Proximity
UI

NO instalar dependencias.

NO modificar package.json.

NO modificar references/lovable/.

8. Validación

Ejecutar:

npm run build

Ejecutar typecheck si existe un comando disponible.

Revisar:

TypeScript.
Imports.
Tipos.
Cleanup del watcher.
Manejo de errores.
Compatibilidad SSR/client.
No existencia de dependencias nuevas.
9. Definition of Done

La fase termina cuando:

 useGeolocation está implementado.
 Utiliza navigator.geolocation.
 Utiliza watchPosition.
 Limpia el watcher.
 Mantiene ubicación actual.
 Conserva accuracy.
 Maneja errores.
 Está correctamente tipado.
 Build funciona.
 No se implementó ninguna fase posterior.
REPORTE FINAL

Responder únicamente:

Archivos modificados
Implementación

Resumen de lo implementado.

Validación

Build/typecheck y resultados.

Pendientes

Problemas encontrados o decisiones necesarias.

Estado

Phase 1 — Geolocation: COMPLETE o BLOCKED.

Siguiente fase

Phase 2 — Distance Calculation

NO implementar la siguiente fase automáticamente.