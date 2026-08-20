# OurStory — Proximity System

**Versión:** 0.1  
**Estado:** Diseño técnico  
**Funcionalidad:** Proximidad entre usuarios

---

## 1. 🎯 Objetivo

El sistema de proximidad permitirá que OurStory determine aproximadamente qué tan cerca están los dos usuarios y transforme esa información en una experiencia visual y emocional.

El objetivo principal es que, cuando ambos usuarios estén suficientemente cerca, la experiencia muestre:

> **Estamos juntos ❤️**

El umbral inicial definido para esta experiencia es:

```text
≤ 5 metros

## 2. 🧩 Objetivo de la funcionalidad

La funcionalidad debe permitir:

Obtener la ubicación de cada usuario.
Compartir la ubicación de forma segura entre los dos usuarios.
Calcular la distancia aproximada entre ambos.
Determinar un estado de proximidad.
Mostrar dicho estado en la interfaz.
Actualizar la información periódicamente.
Manejar errores y pérdida de conexión.
Evitar que un fallo de proximidad afecte al resto del sitio.
## 3. 🏗️ Arquitectura general

La arquitectura conceptual será:

Usuario A
   │
   └── Geolocation API
          │
          ▼
   Location Service
          │
          ▼
      Realtime
          │
          ▼
       Usuario B
          │
          ▼
   Location Service
          │
          ▼
 Distance Calculator
          │
          ▼
 Proximity State
          │
          ▼
   Proximity UI

Los componentes visuales no deben encargarse directamente de la lógica de geolocalización.

## 4. 🔀 Separación de responsabilidades
Geolocation

Responsable de:

Solicitar permiso de ubicación.
Obtener coordenadas.
Detectar cambios de ubicación.
Exponer precisión disponible.
Manejar errores del navegador.

No debe encargarse de:

Renderizar UI.
Calcular la distancia entre usuarios.
Gestionar autenticación.
Gestionar la conexión realtime.
Realtime

Responsable de:

Transmitir la ubicación de cada usuario.
Identificar a cada usuario.
Mantener actualizado el estado.
Detectar desconexiones.

No debe encargarse de:

Renderizar la interfaz.
Definir el diseño.
Determinar directamente el mensaje visual.
Distance Calculator

Responsable de:

Recibir las coordenadas de ambos usuarios.
Calcular la distancia.
Proporcionar una distancia aproximada.
Determinar el nivel de proximidad.
Proximity State

Responsable de transformar la distancia y disponibilidad de datos en estados comprensibles para la interfaz.

Ejemplo:

Distancia
   ↓
Proximity State
   ↓
"Lejos"
"Cerca"
"Muy cerca"
"Juntos"
Proximity UI

Responsable exclusivamente de presentar el estado.

Debe recibir información ya procesada.

No debe implementar directamente la lógica GPS.

## 5. 📍 Geolocation

La ubicación será obtenida mediante las capacidades de geolocalización disponibles en el navegador.

El sistema debe solicitar permiso al usuario antes de utilizar la ubicación.

Estados posibles:

idle
requesting
available
denied
unavailable
error
## 6. 🗺️ Datos de ubicación

La información mínima necesaria es:

type LocationData = {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
};
latitude

Latitud del dispositivo.

longitude

Longitud del dispositivo.

accuracy

Precisión estimada proporcionada por el dispositivo.

timestamp

Momento en que fue obtenida la ubicación.

## 7. 🔒 Privacidad

La ubicación es información sensible.

El sistema debe seguir el principio de:

Utilizar únicamente la información necesaria para proporcionar la experiencia de proximidad.

No se debe almacenar un historial de ubicaciones salvo que exista una decisión explícita que lo requiera.

La ubicación no debe exponerse públicamente.

Los datos deben estar asociados únicamente a los usuarios autorizados para participar en la experiencia.

## 8. 👤 Identificación de usuarios

El sistema necesita distinguir entre:

Usuario A
Usuario B

La implementación concreta de autenticación o identificación debe definirse en la arquitectura del proyecto.

El componente de proximidad no debe asumir cómo se autentican los usuarios.

## 9. ⚡ Comunicación en tiempo real

El sistema requiere algún mecanismo para transmitir la ubicación de un usuario al otro.

La tecnología concreta dependerá de la infraestructura elegida para el proyecto.

La capa realtime debe proporcionar conceptualmente:

type RealtimeLocation = {
  userId: string;
  location: LocationData;
};
## 10. 🔄 Frecuencia de actualización

No es necesario enviar la ubicación constantemente.

La implementación debe buscar un equilibrio entre:

Precisión
+
Respuesta rápida
+
Consumo de batería
+
Consumo de datos

La frecuencia concreta deberá determinarse durante la implementación y validarse en dispositivos reales.

## 11. 📏 Cálculo de distancia

La distancia debe calcularse a partir de las coordenadas de ambos usuarios.

Conceptualmente:

Ubicación A
     +
Ubicación B
     ↓
Distance Calculator
     ↓
Distancia aproximada

Para coordenadas geográficas debe utilizarse un cálculo adecuado para distancias sobre la superficie terrestre.

La unidad principal de presentación será:

metros

Para distancias mayores puede utilizarse:

kilómetros
## 12. 🎯 Precisión del GPS

El sistema NO debe asumir que:

accuracy = 5m

significa que la posición real tiene exactamente cinco metros de precisión.

Los dispositivos móviles pueden presentar errores de varios metros o más dependiendo de:

Interior/exterior.
Calidad de señal.
GPS.
Wi-Fi.
Redes móviles.
Dispositivo.
Condiciones ambientales.

Por lo tanto, el sistema debe comunicar la proximidad como una estimación.

## 13. 📍 Umbral de proximidad

El objetivo emocional inicial es:

≤ 5 metros

Sin embargo, la implementación debe considerar la precisión disponible.

Ejemplo conceptual:

Distancia calculada: 4.2m
Precisión A: 8m
Precisión B: 6m

No debería afirmarse que físicamente ambos usuarios están exactamente a 4.2 metros.

La UI debe utilizar lenguaje apropiado para una estimación.

## 14. 🧭 Estados de proximidad

El sistema debe manejar como mínimo:

UNAVAILABLE
CONNECTING
WAITING
FAR
NEAR
VERY_NEAR
TOGETHER
ERROR
UNAVAILABLE

No es posible utilizar la funcionalidad.

Ejemplos:

Permiso rechazado.
Navegador incompatible.
Ubicación deshabilitada.
CONNECTING

El sistema está intentando establecer comunicación.

Mensaje conceptual:

Conectando...
WAITING

El sistema está funcionando pero todavía no dispone de la ubicación del otro usuario.

Mensaje conceptual:

Esperando a que se conecte...
FAR

Los usuarios están relativamente lejos.

Mensaje conceptual:

Todavía estamos lejos...

La distancia puede mostrarse si está disponible.

NEAR

Los usuarios se encuentran relativamente cerca.

Mensaje conceptual:

Ya casi...
VERY_NEAR

Los usuarios están muy cerca, pero todavía no se ha alcanzado el estado TOGETHER.

Mensaje conceptual:

Estamos muy cerca...
TOGETHER

Se alcanza el umbral definido.

Condición inicial:

distancia ≤ 5 metros

Mensaje principal:

Estamos juntos ❤️

Este estado debe tener una experiencia visual especial.

ERROR

Ocurrió un problema durante el funcionamiento.

El error debe mostrarse de forma comprensible y no debe romper el resto de la página.

## 15. 🔁 Máquina de estados

Conceptualmente:

                ┌─────────────┐
                │ UNAVAILABLE │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │ CONNECTING  │
                └──────┬──────┘
                       │
                       ▼
                 ┌───────────┐
                 │  WAITING  │
                 └─────┬─────┘
                       │
                ┌──────┴──────┐
                ▼             ▼
             FAR/NEAR     ERROR
                │
                ▼
           VERY_NEAR
                │
                ▼
           TOGETHER ❤️

Las transiciones reales deben depender de los datos disponibles.

## 16. 🧩 Componente Proximity

El componente principal debe encargarse únicamente de representar el estado.

Conceptualmente:

<Proximity
  status={status}
  distance={distance}
  accuracy={accuracy}
/>

No debería contener directamente:

navigator.geolocation
WebSocket
Supabase
Firebase
Distance calculations

Estas responsabilidades pertenecen a capas inferiores.

## 17. 🪝 Hooks

La implementación puede utilizar hooks especializados.

Conceptualmente:

useGeolocation()
        ↓
useRealtimeLocation()
        ↓
useProximity()
        ↓
Proximity
useGeolocation

Obtiene la ubicación local.

useRealtimeLocation

Recibe la ubicación del otro usuario.

useProximity

Combina:

Ubicación propia
+
Ubicación del otro usuario
+
Precisión

y produce:

distance
status
## 18. ✅ Estado esperado

El estado de proximidad puede tener una estructura similar a:

type ProximityState = {
  status: ProximityStatus;
  distance: number | null;
  userLocation: LocationData | null;
  partnerLocation: LocationData | null;
  error: string | null;
};

La estructura definitiva puede modificarse si la arquitectura del proyecto determina una solución mejor.

## 19. 🔐 Manejo de permisos

Si el usuario rechaza la ubicación:

Permission denied
        ↓
UNAVAILABLE

La interfaz debe explicar de manera sencilla que necesita habilitar la ubicación para utilizar esta funcionalidad.

No debe mostrar errores técnicos innecesarios.

## 20. 📡 Pérdida de conexión

Si se pierde la comunicación con el otro usuario:

Realtime disconnected
        ↓
WAITING

o un estado equivalente definido por la implementación.

La página debe continuar funcionando normalmente.

## 21. 🕰️ Ubicación obsoleta

El sistema debe considerar que una ubicación puede estar desactualizada.

Cada ubicación tiene:

timestamp

El sistema debe poder determinar si los datos recibidos son demasiado antiguos para considerarlos confiables.

Si la ubicación del otro usuario está obsoleta:

No asumir proximidad actual.

Debe mostrarse un estado apropiado.

## 22. ⚠️ Precisión insuficiente

Si la precisión disponible es demasiado baja, el sistema no debería comunicar una falsa certeza.

Ejemplo:

Ubicación aproximada

puede ser preferible a:

Estamos a exactamente 5 metros.

La experiencia debe priorizar honestidad sobre precisión aparente.

## 23. 🛡️ Seguridad

La información de ubicación debe transmitirse únicamente mediante conexiones seguras.

No incluir:

Tokens en el frontend.
Credenciales privadas.
Secretos en el repositorio.
Información de ubicación en URLs públicas.
Datos personales innecesarios.

Las credenciales y secretos deben manejarse mediante variables de entorno o el mecanismo seguro correspondiente a la infraestructura.

## 24. ⚡ Rendimiento y batería

El sistema debe evitar solicitar ubicación con mayor frecuencia de la necesaria.

Debe considerarse:

Consumo de batería.
Consumo de datos.
Frecuencia de actualización.
Precisión necesaria.
Duración de la experiencia.

El objetivo es que la funcionalidad sea suficientemente reactiva sin mantener actividad innecesaria.

## 25. 🧯 Falla independiente

Proximity es una funcionalidad adicional.

Si falla:

Proximity ❌

el resto debe continuar funcionando:

Hero        ✅
Timeline    ✅
Gallery     ✅
LoveLetter  ✅
Finale      ✅

No permitir que un error de geolocalización o realtime bloquee la experiencia principal.

## 26. 🎨 Experiencia visual

El estado TOGETHER debe representar uno de los momentos emocionales más importantes del sitio.

La transición debería sentirse especial.

Conceptualmente:

Estamos cerca...
       ↓
Distancia disminuye
       ↓
Estamos muy cerca...
       ↓
5m
       ↓
❤️ ESTAMOS JUNTOS ❤️

Los detalles concretos de las animaciones se definirán en:

docs/MOTION-SYSTEM.md
## 27. 📱 Responsive

La experiencia debe funcionar especialmente bien en móviles.

Debe contemplar:

Pantallas pequeñas.
Orientación vertical.
Touch.
Diferentes tamaños de pantalla.
Cambios de viewport.

La información importante debe ser visible sin necesidad de interacciones complejas.

## 28. ♿ Accesibilidad

El componente debe:

Utilizar HTML semántico.
Mantener contraste suficiente.
Comunicar cambios de estado.
Ser compatible con lectores de pantalla.
Ser usable con teclado cuando existan controles.
Respetar prefers-reduced-motion.

Los cambios de estado importantes no deben depender exclusivamente de animaciones.

## 29. 🚀 Desarrollo por fases

La implementación debe realizarse progresivamente.

Fase 1 — Geolocation local

Implementar:

Obtener ubicación
↓
Mostrar coordenadas
↓
Mostrar precisión

Sin realtime.

Fase 2 — Realtime

Implementar:

Usuario A
   ↓
Enviar ubicación
   ↓
Servidor / Realtime
   ↓
Usuario B

Y viceversa.

Fase 3 — Distancia

Implementar:

Ubicación A
+
Ubicación B
↓
Distancia
Fase 4 — Estados

Implementar:

FAR
NEAR
VERY_NEAR
TOGETHER
Fase 5 — UI

Integrar el sistema con el componente visual Proximity.

Fase 6 — Experiencia

Agregar:

Animaciones.
Mensajes.
Transiciones.
Estado especial TOGETHER.
Fase 7 — Pruebas reales

Probar:

Dos teléfonos.
Dos navegadores.
Permisos.
GPS.
Pérdida de conexión.
Datos obsoletos.
Diferentes distancias.
Móvil.
## 30. ✅ Criterios de aceptación

La funcionalidad se considera terminada cuando:

 Ambos usuarios pueden proporcionar su ubicación.
 Las ubicaciones pueden intercambiarse de forma segura.
 Se puede calcular la distancia aproximada.
 Existe un estado de proximidad.
 Existe el estado TOGETHER.
 El umbral inicial de 5m funciona.
 Se manejan permisos rechazados.
 Se manejan errores.
 Se manejan desconexiones.
 Se detectan ubicaciones obsoletas.
 La funcionalidad funciona en móviles.
 La UI no depende directamente de la lógica GPS.
 Un fallo de proximidad no rompe el resto del sitio.
 No existen secretos en el código.
 Se respeta la privacidad de la ubicación.
 Se respeta prefers-reduced-motion.
## 31. 📝 Decisiones pendientes

Las siguientes decisiones deben resolverse antes o durante la implementación:

 Tecnología realtime.
 Método de identificación/autenticación de los dos usuarios.
 Frecuencia exacta de actualización.
 Política de datos obsoletos.
 Tolerancia de precisión GPS.
 Diseño definitivo del componente Proximity.
 Mensajes definitivos.
 Animación del estado TOGETHER.

Los agentes no deben inventar estas decisiones si afectan significativamente a la arquitectura.

## 32. ✅ Regla principal

La funcionalidad de proximidad debe cumplir:

Obtener únicamente la información necesaria, transmitirla de forma segura, calcular una proximidad aproximada y convertirla en una experiencia emocional sin comprometer privacidad, rendimiento ni estabilidad del resto de OurStory