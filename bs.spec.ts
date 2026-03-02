import { describe, expect, it } from "vitest";
import Bs from "./bs";

describe("bs", () => {
  it("should be class", () => {
    expect(new Bs()).toBeInstanceOf(Bs);
  });
});
