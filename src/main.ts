// Debounce elements
const input = document.getElementById("debounce-name") as HTMLInputElement;
const normalValue = document.querySelector(".debounce-normal")!;
const debouncedValue = document.querySelector(".debounce-effect")!;

let debounceTimer: NodeJS.Timeout;

const updateInputValue = () => {
  normalValue.innerHTML = input.value;
};

const updateDebounceValue = () => {
  debouncedValue.innerHTML = input.value;
};

const debounce = (callback: () => void, delay: number) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, delay);
};

input.addEventListener("input", () => {
  updateInputValue();
  debounce(updateDebounceValue, 500);
});
