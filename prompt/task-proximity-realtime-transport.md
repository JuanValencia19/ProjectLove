# TASK — PROXIMITY PHASE 3: REALTIME TRANSPORT

## Objetivo

Implementar únicamente la capa de comunicación temporal entre dos dispositivos mediante:

Supabase Realtime Broadcast

Esta fase NO debe implementar el cálculo de proximidad ni la UI.

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
- `src/hooks/use-geolocation.ts`
- `src/lib/distance.ts`
- `package.json`
- configuración actual de variables de entorno.

---

## 2. Implementar únicamente Realtime

Configurar Supabase Realtime Broadcast para una room temporal.

La arquitectura debe ser:

Device A
↓
useGeolocation
↓
Realtime Broadcast
↓
room:{roomCode}
↓
Device B

Y viceversa.

Cada dispositivo debe poder:

- Conectarse a una room.
- Publicar su ubicación.
- Recibir la ubicación del otro dispositivo.
- Desconectarse correctamente.

---

## 3. Room Identity

Utilizar el `roomCode` obtenido del hash de URL:

```text
https://ourstory.app/#kx7f2

No implementar:

Login.
Email.
Password.
Supabase Auth.
Registro de usuarios.

Si no existe hash, el transporte debe poder representar correctamente el estado "sin room".

No generar todavía UI para crear/compartir rooms.

4. Supabase

Instalar únicamente si es necesario:

@supabase/supabase-js

Crear/configurar el cliente Supabase utilizando variables de entorno.

NUNCA:

Hardcodear URLs.
Hardcodear API keys.
Hardcodear secrets.
Commitear .env.
Crear credenciales ficticias.

Utilizar variables públicas únicamente donde corresponda al cliente Supabase.

Si faltan credenciales reales:

Configurar la estructura necesaria.
Crear/actualizar .env.example con nombres de variables.
NO inventar valores.
NO bloquear la implementación por ausencia de valores locales.

5. Datos transmitidos

Transmitir únicamente la información necesaria para proximidad:

latitude
longitude
accuracy
timestamp

No transmitir:

Nombre.
Email.
Información personal.
Historial de ubicaciones.
Datos innecesarios.

No persistir ubicaciones en PostgreSQL.

Utilizar Broadcast, no postgres_changes.

6. Identificación del dispositivo

La room identifica el contexto de comunicación.

Para distinguir los dos participantes dentro de una room:

utilizar un identificador temporal generado localmente;
no utilizar autenticación;
no utilizar información personal.

El identificador debe permanecer únicamente en memoria/local session según lo definido por la arquitectura existente.

No crear todavía lógica de proximidad.

7. Hook / API

Crear la mínima abstracción necesaria para el transporte.

Puede ser un hook o módulo de infraestructura según ARCHITECTURE.md.

Debe permitir conceptualmente:

connect(roomCode)
sendLocation(location)
onPartnerLocation(callback)
disconnect()

No implementar:

distanceBetween
useProximity
FAR
NEAR
VERY_NEAR
TOGETHER

distanceBetween() ya existe y NO debe modificarse.

8. Lifecycle

Garantizar:

Conexión limpia.
Suscripción limpia.
Broadcast limpio.
Unsubscribe al desmontar.
No crear múltiples subscriptions accidentalmente.
No actualizar estado después de desmontar.

Evitar memory leaks.

9. Errores

Manejar como mínimo:

Supabase no configurado.
Room inexistente/vacía.
Error de conexión.
Desconexión.
Error de broadcast.

No crear todavía mensajes visuales definitivos.

Exponer estados técnicos suficientes para que una futura capa de Proximity pueda utilizarlos.

10. Seguridad y privacidad

No almacenar ubicación.

No crear tablas para ubicaciones.

No crear historial.

No registrar coordenadas en logs.

No imprimir tokens ni credenciales.

No exponer secretos en código cliente.

Mantener .env fuera de Git.

11. Restricciones

NO modificar:

src/components/
src/lib/distance.ts

salvo que sea estrictamente necesario y esté justificado.

NO implementar:

useProximity.
State machine.
UI.
Cálculo de distancia.
TOGETHER.
Animaciones.
Testing framework.
Backend adicional.

No instalar ninguna dependencia distinta de:

@supabase/supabase-js
12. Validación

Ejecutar:

npm run build

Ejecutar typecheck si existe.

Verificar:

TypeScript.
SSR/client compatibility.
Variables de entorno.
Cleanup.
No secrets hardcodeados.
No persistencia de ubicaciones.
No modificación de references/lovable/.

Si existen credenciales Supabase funcionales disponibles en el entorno, realizar una prueba mínima de:

Device A → Broadcast → Device B
Device B → Broadcast → Device A

Si no existen credenciales:

validar build/configuración;
NO inventar credenciales;
reportar la prueba realtime como pendiente.

13. Definition of Done

 Supabase client configurado.
 @supabase/supabase-js instalado si era necesario.
 Room basada en URL hash.
 Broadcast funcionando o listo para probar con credenciales reales.
 Ubicación transmitida sin persistencia.
 Partner location recibida.
 Identificador temporal implementado.
 Lifecycle correctamente limpiado.
 Errores básicos manejados.
 Variables de entorno correctamente separadas.
 No existen secrets hardcodeados.
 Build correcto.
 No se implementó ninguna fase posterior.
REPORTE FINAL

Responder únicamente:

Archivos modificados
Implementación

Resumen breve de la capa Realtime.

Variables de entorno

Indicar únicamente los nombres de variables creadas/requeridas.
Nunca mostrar valores.

Validación

Indicar build/typecheck y si se pudo probar Broadcast entre dos clientes.

Seguridad

Confirmar que no existen secretos hardcodeados.

Pendientes

Solo problemas reales.

Estado

Phase 3 — Realtime: COMPLETE o BLOCKED.

Siguiente fase

Phase 4 — Proximity State

NO implementar la siguiente fase automáticamente.