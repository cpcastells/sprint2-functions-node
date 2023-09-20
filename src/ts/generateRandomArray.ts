const generateRandomArray = (length: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * length));

export default generateRandomArray;
