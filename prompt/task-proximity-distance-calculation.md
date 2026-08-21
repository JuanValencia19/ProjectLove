# TASK — PROXIMITY PHASE 2: DISTANCE CALCULATION

## Objetivo

Implementar únicamente el cálculo de distancia entre dos ubicaciones.

NO implementar:

- Supabase.
- Realtime.
- Room/identity.
- `useProximity`.
- State machine.
- Proximity UI.
- Backend.
- Persistencia.

---

## 1. Leer antes de modificar

Revisar:

- `AGENTS.md`
- `docs/PROXIMITY-SYSTEM.md`
- `docs/DATA-MODEL.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`

Después revisar:

- `src/types/proximity.ts`
- `src/lib/distance.ts`
- `src/hooks/use-geolocation.ts`
- `package.json`

Respetar los contratos existentes.

---

## 2. Implementar

Implementar:

`src/lib/distance.ts`

Crear la función:

```ts
distanceBetween(a, b)

Debe:

Recibir dos LocationData.
Calcular la distancia geográfica entre ambas coordenadas.
Devolver la distancia en metros.
Ser una función pura.
No depender de React.
No acceder a APIs del navegador.
No modificar estado.

Utilizar la fórmula/criterio definido en PROXIMITY-SYSTEM.md.

No inventar una unidad diferente a la especificada por la documentación.

3. Precisión

La función debe calcular únicamente distancia.

NO utilizar todavía:

accuracy
umbral de 5 metros
TOGETHER
estados FAR / NEAR / VERY_NEAR

La evaluación de precisión y estados pertenece a fases posteriores.

4. Tests

Crear tests unitarios para distanceBetween.

Cubrir como mínimo:

Mismo punto → distancia 0.
Dos coordenadas conocidas → resultado razonable.
Coordenadas cercanas → resultado en metros.
Coordenadas alejadas → resultado correcto.
Verificar que el resultado sea un número válido.

Utilizar únicamente el runner/framework de testing existente.

Si actualmente NO existe infraestructura de testing:

NO instalar un framework automáticamente.
NO modificar package.json.
Reportar que los tests quedan pendientes por falta de runner.

5. Restricciones

NO modificar:

src/components/
src/hooks/

salvo que exista una necesidad estrictamente relacionada con tipos.

NO modificar:

references/lovable/

NO instalar dependencias.

NO modificar Supabase.

NO implementar fases posteriores.

6. Validación

Ejecutar:

npm run build

Ejecutar typecheck si existe.

Si existe runner de tests, ejecutar los tests correspondientes.

Verificar:

TypeScript.
Resultado en metros.
Función pura.
Casos límite.
No dependencias nuevas.

7. Definition of Done
 distanceBetween() implementada.
 Utiliza LocationData.
 Devuelve metros.
 Función pura.
 Tests creados si existe infraestructura.
 Build correcto.
 TypeScript correcto.
 No se implementó Realtime.
 No se implementó useProximity.
 No se implementó State Machine.
REPORTE FINAL

Responder únicamente:

Archivos modificados
Implementación

Resumen breve.

Tests

Indicar qué tests se ejecutaron o si no existe runner.

Validación

Build/typecheck.

Problemas pendientes

Solo problemas reales.

Estado

Phase 2 — Distance Calculation: COMPLETE o BLOCKED.

Siguiente fase

Phase 3 — Realtime

NO implementar la siguiente fase automáticamente.