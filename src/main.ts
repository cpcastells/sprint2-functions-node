import { throttle } from "./ts/throttle.js";

// Debounce elements
const input = document.getElementById("debounce-name") as HTMLInputElement;
const normalValue = document.querySelector(".debounce-normal")!;
const debouncedValue = document.querySelector(".debounce-effect")!;

// Throttle elements
const inputThrottle = document.getElementById(
  "throttle-name",
) as HTMLInputElement;
const inputValueThrottle = document.querySelector(".throttle-normal")!;
const throttledValue = document.querySelector(".throttle-effect")!;

let debounceTimer: NodeJS.Timeout;

const updateInputValue = () => {
  normalValue.innerHTML = input.value;
};

const updateDebounceValue = () => {
  debouncedValue.innerHTML = input.value;
};

const updateThrottleInputValue = () => {
  inputValueThrottle.innerHTML = inputThrottle.value;
};

const updateThrottleThrottledValue = () => {
  throttledValue.innerHTML = inputThrottle.value;
};

const debounce = (callback: () => void, delay: number) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, delay);
};

input.addEventListener("input", () => {
  updateInputValue();
  debounce(updateDebounceValue, 500);
});

inputThrottle.addEventListener(
  "input",
  () => {
    updateThrottleInputValue();
    const throttledUpdate = throttle(updateThrottleThrottledValue, 2000);
    throttledUpdate();
  },
  false,
);
