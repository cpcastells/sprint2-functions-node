const isUniqueExponential = (array: any[]) => {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        result = false;
      }
    }
  }

  return result;
};

export default isUniqueExponential;
