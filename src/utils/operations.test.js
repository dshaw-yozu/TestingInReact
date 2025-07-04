import { add } from "./operations";

describe("operations", () => {
  describe("add", () => {
    it("should correctly add 1 and 1", () => {
      expect(add(1, 1)).toBe(2);
    });
  });
});
