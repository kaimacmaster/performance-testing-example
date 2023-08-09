import type { Product } from "./types";

const productNames = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Tablet",
  "Smartwatch",
];

const products = Array.from({ length: 100000 }, (_, index) => {
  const name = productNames[index % productNames.length]; // Reuse the product names
  const price = Math.floor(Math.random() * 1000); // Random price between 0 and 999
  const rating = +(Math.random() * 5).toFixed(1); // Random rating between 0.0 and 5.0

  return { name, price, rating };
});

// Using .filter().sort().map()
function usingChaining(products: Product[]): string[] {
  return products
    .filter((product) => product.price >= 100)
    .sort((a, b) => b.rating - a.rating)
    .map((product) => product.name);
}

// Using a single for loop
function usingForLoop(products: Product[]): string[] {
  let result: { name: string; rating: number }[] = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 100) {
      let product = products[i].name;
      let rating = products[i].rating;

      let j = result.length - 1;
      while (j >= 0 && result[j].rating < rating) {
        j--;
      }

      result.splice(j + 1, 0, { name: product, rating: rating });
    }
  }

  return result.map((product) => product.name);
}

// Measuring the performance
const startChaining = performance.now();
usingChaining(products);
const endChaining = performance.now();

const startForLoop = performance.now();
usingForLoop(products);
const endForLoop = performance.now();

console.log(
  `Time taken with chaining: ${(endChaining - startChaining).toFixed(4)} ms`
);
console.log(
  `Time taken with for loop: ${(endForLoop - startForLoop).toFixed(4)} ms`
);
