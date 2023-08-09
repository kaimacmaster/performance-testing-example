const data = Array(1000000)
  .fill(0)
  .map(() => Math.random() * 100); // large array of random numbers

// Define sum using map
const sumWithMap = (arr: number[]) => {
  let sum = 0;
  arr.map((num: number) => (sum += num));
  return sum;
};

// Define sum using reduce
const sumWithReduce = (arr: number[]) => {
  return arr.reduce((total: number, num: number) => total + num, 0);
};

// Define sum using forEach
const sumWithForEach = (arr: number[]) => {
  let sum = 0;
  arr.forEach((num: number) => (sum += num));
  return sum;
};

// Define sum using a for loop
const sumWithFor = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// Measure performance for each method
const methods = [sumWithFor, sumWithForEach, sumWithMap, sumWithReduce];
const methodNames = ["for", "forEach", "map", "reduce"];

// Run multipe times to get average
methods.forEach((method, index) => {
  const t1 = performance.now();
  method(data);
  const t2 = performance.now();

  console.log(
    `Time taken with ${methodNames[index]}: ${(t2 - t1).toFixed(4)} ms`
  );
});
