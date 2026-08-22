"use client";

import { useEffect, useState } from "react";
import type { ProximityState } from "@/types/proximity";
import { useGeolocation } from "@/hooks/use-geolocation";
import { useRealtimeLocation, getRoomCodeFromHash } from "@/hooks/use-realtime-location";
import { evaluateProximity } from "@/lib/proximity";

const STALE_THRESHOLD_MS = 30_000; // partner location older than 30s is considered stale

/**
 * Proximity hook — combines geolocation + realtime + distance + state machine.
 *
 * Exposes the ProximityState for downstream consumers (UI, animations).
 * Does NOT render anything — pure state coordination.
 */
export function useProximity() {
  const { location: myLocation, status: geoStatus, error: geoError, request } = useGeolocation();
  const roomCode = getRoomCodeFromHash();

  const {
    status: realtimeStatus,
    partnerLocation: rawPartnerLocation,
    sendLocation,
    disconnect,
    deviceId,
  } = useRealtimeLocation({ roomCode });

  const [state, setState] = useState<ProximityState>({
    status: "UNAVAILABLE",
    distance: null,
    userLocation: null,
    partnerLocation: null,
    error: null,
  });

  // ── Send own location when available ──────────────────

  useEffect(() => {
    if (myLocation && realtimeStatus === "connected") {
      sendLocation(myLocation);
    }
  }, [myLocation, realtimeStatus, sendLocation]);

  // ── Evaluate proximity state on every data change ─────

  useEffect(() => {
    // Map geo errors to UNAVAILABLE
    if (geoStatus === "denied" || geoStatus === "unavailable") {
      setState({
        status: "UNAVAILABLE",
        distance: null,
        userLocation: myLocation,
        partnerLocation: null,
        error: geoError?.message ?? "Geolocation not available",
      });
      return;
    }

    // Map realtime errors to ERROR
    if (realtimeStatus === "error") {
      setState((prev) => ({
        ...prev,
        status: "ERROR",
        error: "Realtime connection error",
      }));
      return;
    }

    // Connect state
    if (realtimeStatus === "connecting") {
      setState((prev) => ({
        ...prev,
        status: "CONNECTING",
        userLocation: myLocation,
      }));
      return;
    }

    // Check for stale partner location
    let partnerLocation = rawPartnerLocation;
    if (partnerLocation && Date.now() - partnerLocation.timestamp > STALE_THRESHOLD_MS) {
      partnerLocation = null;
    }

    // Evaluate proximity
    setState(evaluateProximity(myLocation, partnerLocation));
  }, [myLocation, geoStatus, geoError, rawPartnerLocation, realtimeStatus]);

  // ── Cleanup on unmount ────────────────────────────────

  useEffect(() => {
    return () => disconnect();
  }, [disconnect]);

  return {
    ...state,
    geoStatus,
    realtimeStatus,
    roomCode,
    deviceId,
    requestGeolocation: request,
  } as const;
}
