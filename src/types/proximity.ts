/**
 * Proximity types — PROXIMITY-SYSTEM.md §6, §14, §18.
 * Canonical contracts for MVP proximity implementation.
 */

// ── Location ──────────────────────────────────────────────

/** Browser geolocation coordinates (PROXIMITY-SYSTEM.md §6). */
export type LocationData = {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
};

// ── Geolocation hook state ────────────────────────────────

/** Geolocation permission/status states (PROXIMITY-SYSTEM.md §5). */
export type GeolocationStatus =
  | "idle"
  | "requesting"
  | "available"
  | "denied"
  | "unavailable"
  | "error";

/** Geolocation error with browser error code mapping. */
export type GeolocationError = {
  code: number;
  message: string;
};

// ── Proximity state (deferred — Phase 4) ──────────────────

/** Proximity distance states (PROXIMITY-SYSTEM.md §14). */
export type ProximityStatus =
  | "UNAVAILABLE"
  | "CONNECTING"
  | "WAITING"
  | "FAR"
  | "NEAR"
  | "VERY_NEAR"
  | "TOGETHER"
  | "ERROR";

/** Full proximity state (PROXIMITY-SYSTEM.md §18). */
export type ProximityState = {
  status: ProximityStatus;
  distance: number | null;
  userLocation: LocationData | null;
  partnerLocation: LocationData | null;
  error: string | null;
};
