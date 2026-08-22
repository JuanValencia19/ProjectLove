# TASK — PROXIMITY PHASE 7: TESTING

## Objetivo

Crear una cobertura de testing mínima y útil para validar el sistema Proximity existente.

NO modificar la lógica de producción para hacer pasar tests.

---

## 1. Leer antes de modificar

Revisar:

- `AGENTS.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/DECISIONS.md`

Código:

- `src/types/proximity.ts`
- `src/lib/distance.ts`
- `src/lib/proximity.ts`
- `src/hooks/use-geolocation.ts`
- `src/hooks/use-realtime-location.ts`
- `src/hooks/use-proximity.ts`
- `src/components/proximity/Proximity.tsx`

---

## 2. Auditar testing existente

Primero comprobar:

- `package.json`
- scripts disponibles
- `tests/`
- configuración existente de Jest/Vitest/Playwright u otro runner.

Si NO existe framework de testing:

Instalar únicamente una solución mínima y apropiada para el stack actual.

No instalar múltiples frameworks.

No instalar dependencias innecesarias.

Actualizar `package.json` únicamente con lo necesario.

---

## 3. Tests prioritarios

### `distanceBetween()`

Probar:

- mismo punto → `0`
- puntos cercanos → distancia razonable
- puntos alejados → distancia razonable
- resultado expresado en metros
- valores válidos

No probar detalles internos de la fórmula.

---

### `evaluateProximity()`

Probar exactamente D-019:

```text
distance <= 5m
AND
accuracyA + accuracyB < 10m
→ TOGETHER

Casos obligatorios:

WAITING
FAR
NEAR
VERY_NEAR
TOGETHER

Casos límite:

5m exactos
10m exactos
100m exactos
accuracy combinada = 10m

No modificar los umbrales existentes.

4. Datos obsoletos

Probar la política existente:

> 30 segundos → ubicación descartada

No inventar otro timeout.

5. Geolocation

Si el entorno de testing lo permite, cubrir:

permiso concedido;
permiso denegado;
timeout;
posición no disponible;
cleanup de watchPosition.

Si probar los hooks requiere una infraestructura considerable, no crear una arquitectura compleja.

Documentar cualquier limitación real.

6. Realtime

No intentar probar Supabase contra producción.

Mockear el transporte cuando sea necesario.

Validar:

conexión;
recepción de ubicación;
desconexión;
CHANNEL_ERROR;
cleanup;
ausencia de configuración.

No enviar coordenadas reales durante los tests.

7. Seguridad

Los tests NO deben contener:

Supabase keys reales.
tokens reales.
coordenadas personales.
URLs privadas.
secretos.

Utilizar datos ficticios.

8. No modificar comportamiento

Está estrictamente prohibido modificar:

src/lib/distance.ts
src/lib/proximity.ts

para adaptar la implementación a los tests.

Tampoco cambiar:

D-017
D-018
D-019
D-020
umbrales de proximidad
política de datos obsoletos

Si un test revela un bug real, detenerse y reportarlo antes de modificar la lógica.

9. UI

No hacer rediseño.

No agregar nuevas funcionalidades.

No modificar Proximity.tsx salvo que exista un problema estrictamente necesario para testabilidad.

10. Validación

Ejecutar:

npm run build

y el runner de tests configurado.

Todos los tests deben pasar.

Comprobar también TypeScript.

DEFINITION OF DONE
 Existe un único framework de testing adecuado.
 Tests de distanceBetween.
 Tests de evaluateProximity.
 Tests de límites.
 Tests de datos obsoletos.
 Tests relevantes de geolocation.
 Tests relevantes de realtime.
 Sin secrets.
 Sin coordenadas reales.
 Build correcto.
 TypeScript correcto.
 Todos los tests pasan.
 No se modificó la lógica para satisfacer los tests.
 D-017/D-018/D-019/D-020 intactos.
REPORTE FINAL

Responder únicamente:

Framework

Cuál se utilizó y por qué.

Tests creados

Lista breve.

Resultado
Tests: X
Passed: X
Failed: X
Skipped: X
Build

Estado de npm run build.

TypeScript

Estado.

Problemas encontrados

Solo problemas reales.

Archivos modificados

Lista exacta.

Estado

Phase 7 — Testing: COMPLETE

o

Phase 7 — Testing: BLOCKED

Siguiente fase

Phase 8 — Final QA + Deployment Preparation

NO implementar la siguiente fase automáticamente.