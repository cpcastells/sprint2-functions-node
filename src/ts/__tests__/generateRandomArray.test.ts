import generateRandomArray from "../generateRandomArray";

describe("Given a generateRandomArray function", () => {
  describe("When it receives the number 5 as an argument", () => {
    test("Then it should generate an array of length 5", () => {
      const length = 5;

      const array = generateRandomArray(length);

      expect(array).toHaveLength(length);
    });
  });
});
