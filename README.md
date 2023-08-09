# Script Execution and Description

In this repository, we have two main scripts (`script.ts` and `passthrough.ts`) that are set up to run using the provided npm scripts.

## Running the Scripts

To execute these scripts, you can run the following commands:

### 1. **startTest**

This script runs `script.ts` which measures the performance of various methods to sum up a large array of numbers.

```bash
npm run startTest
```

### 2. **startTestChaining**

This script runs `passthrough.ts` which measures the performance difference between using method chaining versus a for loop.

```bash
npm run startTestChaining
```

## Script Descriptions

### 1. `script.ts`

`script.ts` creates a large array of random numbers and then defines 4 different methods to sum them up:

- Using `map`
- Using `reduce`
- Using `forEach`
- Using a traditional `for` loop

After defining these methods, it measures the performance for each one to determine the most efficient approach.

### 2. `passthrough.ts`

`passthrough.ts` generates a large list of products with random prices and ratings. It then defines 2 main methods to filter, sort, and map these products:

- Using method chaining with `filter()`, `sort()`, and `map()`
- Using a single `for` loop

The performance of both approaches is measured and logged to the console.

---

This setup provides a hands-on approach to understand the performance implications of various array operations in JavaScript. Please refer to the respective scripts for detailed code and explanations.
