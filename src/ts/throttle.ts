export const throttle = <T extends (...args: any[]) => void>(
  callback: T,
  time: number,
) => {
  let throttleTimer: boolean;

  return (...args: Parameters<T>) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback(...args);
      throttleTimer = false;
    }, time);
  };
};
