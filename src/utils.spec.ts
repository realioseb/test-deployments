import "jest";
import { sum } from "./utils";

describe("utils", () => {
  it("should sum up two numbers correctly", () => {
    const number = sum(1, 1);
    expect(number).toEqual(4);
  });
});
