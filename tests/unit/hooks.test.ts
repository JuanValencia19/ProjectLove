// @vitest-environment jsdom
import { describe, it, expect, afterEach } from "vitest";
import { getRoomCodeFromHash } from "@/hooks/use-realtime-location";

describe("getRoomCodeFromHash", () => {
  const originalHash = window.location.hash;

  afterEach(() => {
    window.location.hash = originalHash;
  });

  it("returns null when hash is empty", () => {
    window.location.hash = "";
    expect(getRoomCodeFromHash()).toBeNull();
  });

  it("returns the code from hash", () => {
    window.location.hash = "#kx7f2";
    expect(getRoomCodeFromHash()).toBe("kx7f2");
  });

  it("strips leading #", () => {
    window.location.hash = "#abc123";
    expect(getRoomCodeFromHash()).toBe("abc123");
  });

  it("returns null when hash is only #", () => {
    window.location.hash = "#";
    expect(getRoomCodeFromHash()).toBeNull();
  });
});
