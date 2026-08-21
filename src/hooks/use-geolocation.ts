"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { GeolocationError, GeolocationStatus, LocationData } from "@/types/proximity";

/**
 * Browser Geolocation hook — PROXIMITY-SYSTEM.md §5.
 *
 * Exposes `{ location, status, error, request }`.
 * Uses watchPosition for continuous updates; cleans up on unmount.
 * SSR-safe: all browser API access inside useEffect / callbacks.
 */
export function useGeolocation() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [status, setStatus] = useState<GeolocationStatus>("idle");
  const [error, setError] = useState<GeolocationError | null>(null);
  const watchIdRef = useRef<number | null>(null);

  // ── Helpers ───────────────────────────────────────────

  const clearWatch = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }, []);

  const handlePosition = useCallback((pos: GeolocationPosition) => {
    setLocation({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
      accuracy: pos.coords.accuracy,
      timestamp: pos.timestamp,
    });
    setStatus("available");
  }, []);

  const handleError = useCallback((err: GeolocationPositionError) => {
    clearWatch();
    const geoError: GeolocationError = { code: err.code, message: err.message };
    setError(geoError);

    if (err.code === err.PERMISSION_DENIED) {
      setStatus("denied");
    } else if (err.code === err.POSITION_UNAVAILABLE) {
      setStatus("unavailable");
    } else {
      // TIMEOUT
      setStatus("error");
    }
  }, [clearWatch]);

  // ── Request + watch ───────────────────────────────────

  const request = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus("unavailable");
      setError({ code: 0, message: "Geolocation not supported" });
      return;
    }

    clearWatch();
    setStatus("requesting");
    setError(null);

    // Initial position
    navigator.geolocation.getCurrentPosition(handlePosition, handleError, {
      enableHighAccuracy: true,
      timeout: 15_000,
      maximumAge: 0,
    });

    // Continuous watch
    const id = navigator.geolocation.watchPosition(handlePosition, handleError, {
      enableHighAccuracy: true,
      timeout: 30_000,
      maximumAge: 5_000,
    });
    watchIdRef.current = id;
  }, [clearWatch, handlePosition, handleError]);

  // ── Cleanup on unmount ────────────────────────────────

  useEffect(() => {
    return () => clearWatch();
  }, [clearWatch]);

  return { location, status, error, request } as const;
}
