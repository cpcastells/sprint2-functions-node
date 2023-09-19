import memoize from "../memoize";

jest.useFakeTimers();

describe("Given a memoize function,", () => {
  describe("When it is called with a callback", () => {
    test("Then it should memoize a function and return the same result for the same arguments", () => {
      const add = (a: number, b: number) => a + b;

      const memoizedAdd = memoize(add);

      const result1 = memoizedAdd(2, 3);
      const result2 = memoizedAdd(2, 3);
      const result3 = memoizedAdd(2, 3);

      expect(result1).toBe(result2);
      expect(result2).toBe(result3);
    });

    test("Then it should call the original function only once for the same arguments", () => {
      const multiply = jest.fn();
      const memoizedMultiply = memoize(multiply);

      memoizedMultiply(3, 4);
      memoizedMultiply(3, 4);
      memoizedMultiply(3, 4);

      expect(multiply).toHaveBeenCalledTimes(1);
    });

    test("Then it should work with different argument sets", () => {
      const subtract = (a: number, b: number) => a - b;

      const memoizedSubtract = memoize(subtract);

      const result1 = memoizedSubtract(10, 5);
      const result2 = memoizedSubtract(8, 2);

      expect(result1).toBe(5);
      expect(result2).toBe(6);
    });
  });
});
