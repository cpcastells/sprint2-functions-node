import generateRandomArray from "./ts/generateRandomArray.js";
import isUniqueExponential from "./ts/isUniqueExponential.js";
import measureTime from "./ts/measureTime.js";
import memoize from "./ts/memoize.js";
import { throttle } from "./ts/throttle.js";

const input = document.getElementById("debounce-name") as HTMLInputElement;
const normalValue = document.querySelector(".debounce-normal")!;
const debouncedValue = document.querySelector(".debounce-effect")!;

const inputThrottle = document.getElementById(
  "throttle-name",
) as HTMLInputElement;
const inputValueThrottle = document.querySelector(".throttle-normal")!;
const throttledValue = document.querySelector(".throttle-effect")!;

const inputMemoize = document.getElementById(
  "memoize-number",
) as HTMLInputElement;
const buttonNoMemoization = document.querySelector(".no-memoize");
const buttonMemoization = document.querySelector(".memoize");

const params = [
  generateRandomArray(19000),
  generateRandomArray(19000),
  generateRandomArray(19000),
  generateRandomArray(19000),
];

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

buttonNoMemoization?.addEventListener("click", () => {
  console.clear();
  const times = Number(inputMemoize.value);
  console.log("SIN MEMOIZE");
  console.log("Primera ejecución");
  for (let i = times; i > 0; i--) {
    params.forEach((param) => {
      measureTime(isUniqueExponential, param);
    });
  }

  console.log("---Finalizado---");
});

buttonMemoization?.addEventListener("click", () => {
  console.clear();
  const times = Number(inputMemoize.value);
  const isUniqueExponentialMemoized = memoize(isUniqueExponential);
  console.log("CON MEMOIZE");
  console.log("Primera ejecución");
  for (let i = times; i > 0; i--) {
    params.forEach((param) => {
      measureTime(isUniqueExponentialMemoized, param);
    });
  }

  console.log("---Finalizado---");
});
