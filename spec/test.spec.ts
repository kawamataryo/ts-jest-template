import { sum } from "../src/test";

describe("sum", () => {
  test("sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
