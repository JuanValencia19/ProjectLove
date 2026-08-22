"use client";

import { useProximity } from "@/hooks/use-proximity";

function formatDistance(meters: number): string {
  return meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(1)} km`;
}

// ── State configs ────────────────────────────────────────

type StateConfig = {
  badge: string;
  badgeColor: string;
  message: string;
  submessage?: string;
};

const STATE_CONFIGS: Record<string, StateConfig> = {
  WAITING: {
    badge: "Conectando",
    badgeColor: "bg-hero-blue",
    message: "Compartí este link con tu pareja",
    submessage: "Esperando ubicación...",
  },
  CONNECTING: {
    badge: "Conectando",
    badgeColor: "bg-hero-blue",
    message: "Estableciendo conexión...",
  },
  UNAVAILABLE: {
    badge: "Sin acceso",
    badgeColor: "bg-white/10",
    message: "Necesitamos tu ubicación para esta experiencia",
    submessage: "Habilitá la geolocalización en tu navegador",
  },
  FAR: {
    badge: "Proximidad",
    badgeColor: "bg-hero-blue",
    message: "Todavía estamos lejos...",
  },
  NEAR: {
    badge: "Cerca",
    badgeColor: "bg-hero-pink",
    message: "Ya casi...",
  },
  VERY_NEAR: {
    badge: "Muy cerca",
    badgeColor: "bg-hero-pink",
    message: "Estamos muy cerca...",
  },
  TOGETHER: {
    badge: "Juntos",
    badgeColor: "bg-hero-red",
    message: "Estamos juntos",
  },
  ERROR: {
    badge: "Error",
    badgeColor: "bg-white/10",
    message: "Algo salió mal",
    submessage: "Intentá recargar la página",
  },
};

// ── Component ────────────────────────────────────────────

export function Proximity() {
  const { status, distance, error, requestGeolocation, geoStatus, roomCode } =
    useProximity();

  const config = STATE_CONFIGS[status] ?? STATE_CONFIGS.WAITING;

  const showRequestButton =
    status === "WAITING" && geoStatus === "idle";

  return (
    <section className="relative px-6 py-24 text-center sm:py-32">
      <header className="mx-auto mb-12 max-w-2xl">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-hero-red">
          Issue #04
        </span>
        <h2 className="chromatic mt-4 font-display text-4xl uppercase sm:text-6xl">
          Proximidad
        </h2>
      </header>

      <div className="mx-auto max-w-2xl">
        {/* Status badge */}
        <div className="mb-8 flex justify-center">
          <span
            className={`inline-block px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase ${config.badgeColor}`}
          >
            {config.badge}
          </span>
        </div>

        {/* Main message */}
        <p
          className={`font-serif text-2xl italic sm:text-3xl ${
            status === "TOGETHER" ? "text-hero-pink" : "text-white/80"
          }`}
        >
          {status === "TOGETHER" ? (
            <span className="chromatic">{config.message} ❤️</span>
          ) : (
            config.message
          )}
        </p>

        {/* Distance */}
        {distance !== null && (
          <p className="mt-4 font-display text-xl text-white/50 sm:text-2xl">
            {formatDistance(distance)}
          </p>
        )}

        {/* Submessage */}
        {config.submessage && (
          <p className="mt-4 font-sans text-sm text-white/40">{config.submessage}</p>
        )}

        {/* Error detail */}
        {status === "ERROR" && error && (
          <p className="mt-2 font-sans text-xs text-white/30">{error}</p>
        )}

        {/* Request geolocation button */}
        {showRequestButton && (
          <button
            type="button"
            onClick={requestGeolocation}
            className="mt-8 border-2 border-hero-pink px-6 py-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-hero-pink hover:text-[oklch(0.11_0.02_290)]"
          >
            Compartir mi ubicación
          </button>
        )}

        {/* Room code hint */}
        {status === "WAITING" && !roomCode && (
          <p className="mt-6 font-sans text-xs text-white/30">
            Abrí el link que te compartió tu pareja para conectarse
          </p>
        )}
      </div>
    </section>
  );
}
