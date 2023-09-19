import debounce from "../debounce";

describe("Given a debounce function", () => {
  jest.useFakeTimers();
  const mockFn = jest.fn();

  describe("When it receives a callback function and 100ms of delay", () => {
    beforeEach(() => {
      mockFn.mockClear();
    });

    test("Then it should call the function after the specified delay", async () => {
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();

      expect(mockFn).not.toBeCalled();

      jest.advanceTimersByTime(110);

      expect(mockFn).toBeCalled();
    });

    test("Then it should debounce multiple calls", () => {
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      expect(mockFn).not.toBeCalled();

      jest.advanceTimersByTime(110);

      expect(mockFn).toBeCalledTimes(1);
    });
  });
});
