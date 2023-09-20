import { createInterface } from "readline";
import debounce from "../ts/debounce.js";
import { throttle } from "../ts/throttle.js";
import isUniqueExponential from "../ts/isUniqueExponential.js";
import measureTime from "../ts/measureTime.js";
import memoize from "../ts/memoize.js";
import generateRandomArray from "../ts/generateRandomArray.js";

const params = [
  generateRandomArray(19000),
  generateRandomArray(19000),
  generateRandomArray(19000),
  generateRandomArray(19000),
];

const menu = `
Seleccione una opción:
1. Debounce
2. Throttle
3. Memoize
`;

console.log(menu);

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Elija una opción (1-3): ", (option) => {
  if (option === "1") {
    handleDebounce();
  } else if (option === "2") {
    handleThrottle();
  } else if (option === "3") {
    handleMemoize();
  } else {
    console.error("Opción no válida. Debe ser 1, 2 o 3.");
    process.exit(1);
  }
});

const handleDebounce = () => {
  readline.question(
    "Introduzca el delay(en ms) y el mensaje (por ejemplo, '1000 Hola'): ",
    (input) => {
      const [delay, message] = input.split(" ");
      const numCalls = 5;

      const debouncedFunc = debounce(
        () => {
          console.log(message);
        },
        parseInt(delay, 10),
      );

      for (let i = 0; i < numCalls; i++) {
        setTimeout(
          () => {
            debouncedFunc();
          },
          i * (parseInt(delay, 10) / 2),
        );
      }

      readline.close();
    },
  );
};

const handleThrottle = () => {
  readline.question(
    "Introduzca el delay(en ms) y el mensaje (por ejemplo, '1000 Hola'): ",
    (input) => {
      const [delay, message] = input.split(" ");
      const numCalls = 5;

      const throttledFunc = throttle(
        () => {
          console.log(message);
        },
        parseInt(delay, 10),
      );

      for (let i = 0; i < numCalls; i++) {
        setTimeout(
          () => {
            throttledFunc();
          },
          i * (parseInt(delay, 10) / 2),
        );
      }

      readline.close();
    },
  );
};

const handleMemoize = () => {
  readline.question("Introduzca el número de veces a chequear: ", (input) => {
    const [times] = input.split(" ");
    const isUniqueExponentialMemoized = memoize(isUniqueExponential);

    for (let i = parseInt(times, 10); i > 0; i--) {
      params.forEach((param) => {
        measureTime(isUniqueExponentialMemoized, param);
      });
    }

    readline.close();
  });
};
