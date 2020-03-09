const products = [
  { name: "banana", type: "fruit" },
  { name: "cucumber", type: "vegetable" },
  { name: "potato", type: "vegetable" },
  { name: "orange", type: "fruit" }
];

let filter = "fruit";

const filteredProductsOne = products.filter(function(product) {
  return product.type === filter;
});

console.log(filteredProductsOne);

const filteredProducts = products.filter(product => product.type === filter);

console.log(filteredProducts);
