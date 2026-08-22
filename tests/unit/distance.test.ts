import { describe, it, expect } from "vitest";
import { distanceBetween } from "@/lib/distance";
import type { LocationData } from "@/types/proximity";

// ── Test data (fake coordinates — no real personal data) ──

const BUENOS_AIRES: LocationData = {
  latitude: -34.6037,
  longitude: -58.3816,
  accuracy: 10,
  timestamp: Date.now(),
};

const MONTEVIDEO: LocationData = {
  latitude: -34.9011,
  longitude: -56.1645,
  accuracy: 10,
  timestamp: Date.now(),
};

const SAME_POINT: LocationData = {
  latitude: -34.6037,
  longitude: -58.3816,
  accuracy: 5,
  timestamp: Date.now(),
};

const NEARBY_POINT: LocationData = {
  latitude: -34.604,
  longitude: -58.382,
  accuracy: 8,
  timestamp: Date.now(),
};

// ── Tests ────────────────────────────────────────────────

describe("distanceBetween", () => {
  it("returns 0 for the same point", () => {
    const d = distanceBetween(SAME_POINT, SAME_POINT);
    expect(d).toBe(0);
  });

  it("returns a positive number for different points", () => {
    const d = distanceBetween(BUENOS_AIRES, MONTEVIDEO);
    expect(d).toBeGreaterThan(0);
  });

  it("returns metres (Buenos Aires → Montevideo ≈ 210 km)", () => {
    const d = distanceBetween(BUENOS_AIRES, MONTEVIDEO);
    // ~210 km = ~210,000 m
    expect(d).toBeGreaterThan(200_000);
    expect(d).toBeLessThan(250_000);
  });

  it("returns metres for nearby points (< 1 km)", () => {
    const d = distanceBetween(BUENOS_AIRES, NEARBY_POINT);
    expect(d).toBeGreaterThan(0);
    expect(d).toBeLessThan(1_000);
  });

  it("returns a valid number (not NaN, not Infinity)", () => {
    const d = distanceBetween(BUENOS_AIRES, MONTEVIDEO);
    expect(Number.isFinite(d)).toBe(true);
    expect(Number.isNaN(d)).toBe(false);
  });

  it("is symmetric (a→b === b→a)", () => {
    const d1 = distanceBetween(BUENOS_AIRES, MONTEVIDEO);
    const d2 = distanceBetween(MONTEVIDEO, BUENOS_AIRES);
    expect(d1).toBe(d2);
  });
});
