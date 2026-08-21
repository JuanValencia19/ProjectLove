"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import type { LocationData } from "@/types/proximity";
import { getSupabaseClient } from "@/lib/supabase";

// ── Types ────────────────────────────────────────────────

export type RealtimeStatus = "idle" | "connecting" | "connected" | "error";

/** Broadcast payload for location data. */
export type BroadcastLocation = {
  deviceId: string;
  location: LocationData;
};

// ── Room helpers ─────────────────────────────────────────

/** Extract room code from URL hash (#code). Returns null if absent. */
export function getRoomCodeFromHash(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "").trim();
  return hash.length > 0 ? hash : null;
}

/** Generate a short random device ID for this session. */
function generateDeviceId(): string {
  return crypto.randomUUID().slice(0, 8);
}

// ── Hook ─────────────────────────────────────────────────

export type UseRealtimeLocationOptions = {
  roomCode: string | null;
};

export function useRealtimeLocation({ roomCode }: UseRealtimeLocationOptions) {
  const [status, setStatus] = useState<RealtimeStatus>("idle");
  const [partnerLocation, setPartnerLocation] = useState<LocationData | null>(null);
  const channelRef = useRef<RealtimeChannel | null>(null);
  const deviceIdRef = useRef<string>(generateDeviceId());
  const mountedRef = useRef(true);

  // ── Cleanup ───────────────────────────────────────────

  const disconnect = useCallback(() => {
    if (channelRef.current) {
      channelRef.current.unsubscribe();
      channelRef.current = null;
    }
    if (mountedRef.current) {
      setStatus("idle");
      setPartnerLocation(null);
    }
  }, []);

  // ── Connect ───────────────────────────────────────────

  const connect = useCallback(
    (code: string) => {
      const supabase = getSupabaseClient();
      if (!supabase) {
        setStatus("error");
        return;
      }

      // Clean previous channel
      if (channelRef.current) {
        channelRef.current.unsubscribe();
      }

      setStatus("connecting");

      const channel = supabase.channel(`room:${code}`);

      // Listen for partner broadcasts
      channel.on("broadcast", { event: "location" }, ({ payload }) => {
        const data = payload as BroadcastLocation;
        // Ignore own broadcasts
        if (data.deviceId === deviceIdRef.current) return;
        if (mountedRef.current) {
          setPartnerLocation(data.location);
        }
      });

      channel.subscribe((state) => {
        if (!mountedRef.current) return;
        if (state === "SUBSCRIBED") {
          setStatus("connected");
        } else if (state === "CHANNEL_ERROR") {
          setStatus("error");
        }
      });

      channelRef.current = channel;
    },
    [],
  );

  // ── Send location ─────────────────────────────────────

  const sendLocation = useCallback(
    (location: LocationData) => {
      if (!channelRef.current || status !== "connected") return;

      channelRef.current.send({
        type: "broadcast",
        event: "location",
        payload: {
          deviceId: deviceIdRef.current,
          location,
        } satisfies BroadcastLocation,
      });
    },
    [status],
  );

  // ── Auto-connect when roomCode changes ────────────────

  useEffect(() => {
    mountedRef.current = true;

    if (roomCode) {
      connect(roomCode);
    } else {
      disconnect();
    }

    return () => {
      mountedRef.current = false;
      disconnect();
    };
  }, [roomCode, connect, disconnect]);

  return {
    status,
    partnerLocation,
    sendLocation,
    disconnect,
    deviceId: deviceIdRef.current,
  } as const;
}
