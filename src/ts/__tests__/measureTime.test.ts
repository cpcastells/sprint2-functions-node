import measureTime from "../measureTime";

describe("Given a measureTime function", () => {
  describe("When it receives a callback", () => {
    test("Then the callback should be called", () => {
      const mockCallback = jest.fn();

      measureTime(mockCallback, "test argument");

      expect(mockCallback).toHaveBeenCalled();
    });

    test("Then it should log 'Call to the function took'", () => {
      const loggedText = "Call to the function took";
      const mockCallback = jest.fn();
      const consoleLogSpy = jest.spyOn(console, "log");

      measureTime(mockCallback, "test argument");

      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining(loggedText)
      );
    });
  });
});
