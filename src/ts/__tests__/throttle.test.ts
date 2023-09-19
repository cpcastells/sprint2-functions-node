import { throttle } from "../throttle";

jest.useFakeTimers();

describe("Given a throttle function,", () => {
  describe("When it is called with a callback and 100ms", () => {
    const callback = jest.fn();

    test("should call the provided function once if called multiple times within the throttle time", () => {
      const throttledCallback = throttle(callback, 100);

      throttledCallback();
      throttledCallback();
      throttledCallback();

      jest.advanceTimersByTime(100);

      expect(callback).toHaveBeenCalledTimes(1);
    });

    test("should not call the provided function if called within the throttle time", () => {
      const callback = jest.fn();
      const throttledCallback = throttle(callback, 100);

      throttledCallback();
      throttledCallback();

      jest.advanceTimersByTime(50);

      expect(callback).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
