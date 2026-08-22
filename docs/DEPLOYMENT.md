# Deployment — ProjectLove MVP1

## Requisitos

- Node.js 18+
- npm 9+
- Cuenta de Supabase (para Realtime Broadcast)

## Variables de entorno

Copiar `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Completar:

| Variable | Descripción | Obligatoria |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase | Sí (para Proximity) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anonymous key del proyecto | Sí (para Proximity) |

Sin estas variables, la app funciona correctamente pero la sección Proximity no se conecta.

## Instalación

```bash
npm install
```

## Build

```bash
npm run build
```

## Desarrollo

```bash
npm run dev
```

## Tests

```bash
npm test
```

## Deployment (Vercel)

1. Conectar el repositorio a Vercel
2. Configurar variables de entorno en el dashboard de Vercel
3. Deploy automático en push a `main`

## Configuración Supabase

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Ir a **Settings → API** para obtener URL y anon key
3. No se requiere crear tablas — solo Realtime Broadcast está habilitado por defecto
4. El canal se crea dinámicamente por room hash (`#roomCode`)

## Notas

- La app es estática (SSG) — no requiere servidor Node.js en runtime
- Las imágenes en `public/images/` se sirven estáticamente
- `references/lovable/` es solo referencia, no se despliega
