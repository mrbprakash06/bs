import { describe, expect, it } from "vitest";
import Bs from "./bs";

describe("bs", () => {
  it("should be class", () => {
    expect(new Bs("2082-01-01")).toBeInstanceOf(Bs);
  });

  it("should throw error on invalid date", () => {
    expect(() => new Bs("2082-01-32")).toThrowError();
  });

  it("should print date", () => {
    const date = new Bs("2082-01-01");
    expect(date.toString()).toBe("2082-01-01");
  });

  it("should convert to js date", () => {
    const date = new Bs("2082-11-18");

    expect(date.toJsDate()).toBeInstanceOf(Date);
    expect(date.toJsDate().getTime()).toBe(new Date("2026-03-02").getTime());
  });
});
