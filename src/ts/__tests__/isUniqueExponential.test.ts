import isUniqueExponential from "../isUniqueExponential";

describe("Given a isUniqueExponential function", () => {
  describe("When it receives an array of unique numbers", () => {
    test("Then it should return true", () => {
      const arrayWithUniqueNumbers = [2, 4, 5, 7, 8];

      const result = isUniqueExponential(arrayWithUniqueNumbers);

      expect(result).toBe(true);
    });
  });

  describe("When it receives an array with duplicated numbers", () => {
    test("Then it should return false", () => {
      const arrayWithUniqueNumbers = [2, 4, 5, 5, 8];

      const result = isUniqueExponential(arrayWithUniqueNumbers);

      expect(result).toBe(false);
    });
  });
});
