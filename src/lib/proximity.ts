import type { LocationData, ProximityState, ProximityStatus } from "@/types/proximity";
import { distanceBetween } from "@/lib/distance";

// ── Thresholds (PROXIMITY-SYSTEM.md §14 qualitative descriptions) ──
// TOGETHER is the only exact threshold (D-019): ≤ 5m + accuracy.
// FAR/NEAR/VERY_NEAR thresholds derived from §14 descriptions.
// These constants can be refined during real-device testing.

const TOGETHER_DISTANCE_M = 5;
const TOGETHER_ACCURACY_M = 10;
const VERY_NEAR_DISTANCE_M = 10;
const NEAR_DISTANCE_M = 100;

/**
 * Pure proximity state evaluator — PROXIMITY-SYSTEM.md §14, §15.
 *
 * Given two locations (or null), returns the current ProximityState.
 * Parallel states: FAR | NEAR | VERY_NEAR | TOGETHER determined by distance.
 * WAITING when either location is missing.
 */
export function evaluateProximity(
  myLocation: LocationData | null,
  partnerLocation: LocationData | null,
): ProximityState {
  // ── WAITING: incomplete data ──────────────────────────
  if (!myLocation || !partnerLocation) {
    return {
      status: "WAITING",
      distance: null,
      userLocation: myLocation,
      partnerLocation,
      error: null,
    };
  }

  // ── Distance ──────────────────────────────────────────
  const distance = distanceBetween(myLocation, partnerLocation);

  // ── TOGETHER: D-019 (both conditions required) ────────
  const combinedAccuracy = myLocation.accuracy + partnerLocation.accuracy;
  if (distance <= TOGETHER_DISTANCE_M && combinedAccuracy < TOGETHER_ACCURACY_M) {
    return {
      status: "TOGETHER",
      distance,
      userLocation: myLocation,
      partnerLocation,
      error: null,
    };
  }

  // ── Parallel distance states ──────────────────────────
  let status: ProximityStatus;
  if (distance <= VERY_NEAR_DISTANCE_M) {
    status = "VERY_NEAR";
  } else if (distance <= NEAR_DISTANCE_M) {
    status = "NEAR";
  } else {
    status = "FAR";
  }

  return {
    status,
    distance,
    userLocation: myLocation,
    partnerLocation,
    error: null,
  };
}
