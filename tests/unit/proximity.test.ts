import { describe, it, expect } from "vitest";
import { evaluateProximity } from "@/lib/proximity";
import type { LocationData } from "@/types/proximity";

// ── Helpers ──────────────────────────────────────────────

function makeLocation(overrides: Partial<LocationData> = {}): LocationData {
  return {
    latitude: -34.6,
    longitude: -58.38,
    accuracy: 5,
    timestamp: Date.now(),
    ...overrides,
  };
}

/** Create a partner at a given distance (approx) from the base location. */
function partnerAtDistance(distanceM: number): LocationData {
  // 1 degree latitude ≈ 111,320 m
  const latOffset = distanceM / 111_320;
  return makeLocation({
    latitude: makeLocation().latitude + latOffset,
    accuracy: 5,
  });
}

// ── Tests ────────────────────────────────────────────────

describe("evaluateProximity", () => {
  // ── WAITING ──────────────────────────────────────────

  it("returns WAITING when myLocation is null", () => {
    const s = evaluateProximity(null, makeLocation());
    expect(s.status).toBe("WAITING");
    expect(s.distance).toBeNull();
  });

  it("returns WAITING when partnerLocation is null", () => {
    const s = evaluateProximity(makeLocation(), null);
    expect(s.status).toBe("WAITING");
    expect(s.distance).toBeNull();
  });

  it("returns WAITING when both are null", () => {
    const s = evaluateProximity(null, null);
    expect(s.status).toBe("WAITING");
  });

  // ── TOGETHER (D-019) ─────────────────────────────────

  it("returns TOGETHER when distance ≤ 5m and combined accuracy < 10m", () => {
    const me = makeLocation({ accuracy: 3 });
    const partner = makeLocation({ accuracy: 4 }); // combined: 7 < 10
    const s = evaluateProximity(me, partner);
    expect(s.status).toBe("TOGETHER");
    expect(s.distance).toBe(0);
  });

  it("returns TOGETHER at exactly 5m with good accuracy", () => {
    const me = makeLocation({ accuracy: 3, latitude: -34.6 });
    // partner 5m north: 5 / 111320 ≈ 0.0000449 degrees
    const partner = makeLocation({
      accuracy: 4,
      latitude: -34.6 + 5 / 111_320,
    });
    const s = evaluateProximity(me, partner);
    expect(s.status).toBe("TOGETHER");
  });

  it("does NOT return TOGETHER when combined accuracy = 10m (not < 10)", () => {
    const me = makeLocation({ accuracy: 5 });
    const partner = makeLocation({ accuracy: 5 }); // combined: 10, NOT < 10
    const s = evaluateProximity(me, partner);
    expect(s.status).not.toBe("TOGETHER");
  });

  it("does NOT return TOGETHER when distance > 5m even with good accuracy", () => {
    const me = makeLocation({ accuracy: 2 });
    const partner = partnerAtDistance(6); // 6m > 5m
    const s = evaluateProximity(me, partner);
    expect(s.status).not.toBe("TOGETHER");
  });

  // ── VERY_NEAR ────────────────────────────────────────

  it("returns VERY_NEAR for distance between 5m and 10m", () => {
    const me = makeLocation({ accuracy: 20 }); // bad accuracy prevents TOGETHER
    const partner = partnerAtDistance(8);
    const s = evaluateProximity(me, partner);
    expect(s.status).toBe("VERY_NEAR");
  });

  it("returns VERY_NEAR at exactly 10m", () => {
    const me = makeLocation({ accuracy: 20 });
    const partner = partnerAtDistance(10);
    const s = evaluateProximity(me, partner);
    expect(s.status).toBe("VERY_NEAR");
  });

  // ── NEAR ─────────────────────────────────────────────

  it("returns NEAR for distance between 10m and 100m", () => {
    const me = makeLocation({ accuracy: 20 });
    const partner = partnerAtDistance(50);
    const s = evaluateProximity(me, partner);
    expect(s.status).toBe("NEAR");
  });

  it("returns NEAR at exactly 100m", () => {
    const me = makeLocation({ accuracy: 20 });
    const partner = partnerAtDistance(100);
    const s = evaluateProximity(me, partner);
    expect(s.status).toBe("NEAR");
  });

  // ── FAR ──────────────────────────────────────────────

  it("returns FAR for distance > 100m", () => {
    const me = makeLocation({ accuracy: 20 });
    const partner = partnerAtDistance(500);
    const s = evaluateProximity(me, partner);
    expect(s.status).toBe("FAR");
  });

  it("returns FAR for Buenos Aires → Montevideo", () => {
    const ba = makeLocation({
      latitude: -34.6037,
      longitude: -58.3816,
      accuracy: 10,
    });
    const mvd = makeLocation({
      latitude: -34.9011,
      longitude: -56.1645,
      accuracy: 10,
    });
    const s = evaluateProximity(ba, mvd);
    expect(s.status).toBe("FAR");
    expect(s.distance).toBeGreaterThan(200_000);
  });

  // ── General ──────────────────────────────────────────

  it("always returns a valid ProximityState shape", () => {
    const s = evaluateProximity(makeLocation(), partnerAtDistance(50));
    expect(s).toHaveProperty("status");
    expect(s).toHaveProperty("distance");
    expect(s).toHaveProperty("userLocation");
    expect(s).toHaveProperty("partnerLocation");
    expect(s).toHaveProperty("error");
    expect(typeof s.distance).toBe("number");
  });

  it("returns null error on successful evaluation", () => {
    const s = evaluateProximity(makeLocation(), partnerAtDistance(50));
    expect(s.error).toBeNull();
  });
});
