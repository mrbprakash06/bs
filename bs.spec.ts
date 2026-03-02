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

  it("should return year via getter", () => {
    const date = new Bs("2082-11-18");
    expect(date.getYear()).toBe(2082);
  });

  it("should return month via getter", () => {
    const date = new Bs("2082-11-18");
    expect(date.getMonth()).toBe(11);
  });

  it("should return day via getter", () => {
    const date = new Bs("2082-11-18");
    expect(date.getDay()).toBe(18);
  });

  it("should return day of week via getter", () => {
    const date = new Bs("2082-11-18");
    expect(date.getDayOfWeek()).toBe(2);
  });

  it("should update year via setter", () => {
    const date = new Bs("2082-01-01");
    date.setYear(2082);
    expect(date.getYear()).toBe(2082);
    expect(date.toString()).toBe("2082-01-01");
  });

  it("should update month via setter", () => {
    const date = new Bs("2082-01-01");
    date.setMonth(2);
    expect(date.getMonth()).toBe(2);
    expect(date.toString()).toBe("2082-02-01");
  });

  it("should update day via setter", () => {
    const date = new Bs("2082-01-01");
    date.setDay(2);
    expect(date.getDay()).toBe(2);
    expect(date.toString()).toBe("2082-01-02");
  });

  it("should throw error when setting invalid month", () => {
    const date = new Bs("2082-01-01");
    expect(() => date.setMonth(13)).toThrowError();
  });

  it("should throw error when setting invalid day", () => {
    const date = new Bs("2082-01-01");
    expect(() => date.setDay(32)).toThrowError();
  });
});
