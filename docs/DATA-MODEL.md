# OurStory — Data Model

**Estado:** Diseño inicial

## 1. 🎯 Objetivo

Definir las estructuras de datos principales de OurStory.

El modelo debe mantenerse simple y evitar persistencia innecesaria.

---

## 2. 🧠 Memory

Representa un recuerdo de la relación.

```ts
type Memory = {
  id: string;
  date: string;
  title: string;
  text: string;
  image?: string;
};

## 3. 💌 Love Letter

Representa la carta personal.

type LoveLetter = {
  id: string;
  title: string;
  content: string;
};
## 4. 👤 User

Representa a uno de los participantes.

type User = {
  id: string;
  name: string;
};

La autenticación no forma parte de este modelo.

## 5. 📍 Location

Representa la ubicación actual de un usuario.

type LocationData = {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
};

No almacenar historial de ubicaciones salvo que sea requerido explícitamente.

## 6. 📡 Proximity

Estado calculado a partir de las ubicaciones.

type ProximityStatus =
  | "UNAVAILABLE"
  | "CONNECTING"
  | "WAITING"
  | "FAR"
  | "NEAR"
  | "VERY_NEAR"
  | "TOGETHER"
  | "ERROR";


type ProximityState = {
  status: ProximityStatus;
  distance: number | null;
  userLocation: LocationData | null;
  partnerLocation: LocationData | null;
};
## 7. 🔗 Relaciones
User
 └── LocationData


User
 └── LocationData


LocationData + LocationData
 └── ProximityState


Memory
 └── Timeline


LoveLetter
 └── LoveLetter UI
## 8. 💾 Persistencia

El contenido estático puede mantenerse inicialmente en:

src/data/

Ejemplo:

src/data/
├── memories.ts
└── love-letter.ts

No crear base de datos para contenido que no necesite persistencia.

La ubicación debe tratarse como estado temporal, no como historial.

## 9. ✅ Reglas
Mantener los modelos simples.
Evitar duplicación de datos.
No almacenar ubicaciones históricas innecesariamente.
No incluir secretos en ningún modelo.
Separar datos de presentación.
Los modelos pueden evolucionar durante la implementación.