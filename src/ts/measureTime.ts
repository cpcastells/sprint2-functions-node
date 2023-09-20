const measureTime = (callback: (arg0: any) => void, args: any) => {
  const t0 = performance.now();
  callback(args);
  const t1 = performance.now();
  console.log("Call to the function took " + (t1 - t0) + " milliseconds.");
};

export default measureTime;
