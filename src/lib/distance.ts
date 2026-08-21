import type { LocationData } from "@/types/proximity";

const EARTH_RADIUS_M = 6_371_000; // mean Earth radius in metres

/**
 * Haversine distance between two geographic coordinates — PROXIMITY-SYSTEM.md §11.
 *
 * Returns distance in **metres**. Pure function: no side-effects, no browser APIs.
 */
export function distanceBetween(a: LocationData, b: LocationData): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(b.latitude - a.latitude);
  const dLon = toRad(b.longitude - a.longitude);

  const lat1 = toRad(a.latitude);
  const lat2 = toRad(b.latitude);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  return EARTH_RADIUS_M * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
