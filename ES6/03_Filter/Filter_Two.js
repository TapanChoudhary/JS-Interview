const products = [
  { name: "banana", type: "fruit" },
  { name: "cucumber", type: "vegetable" },
  { name: "potato", type: "vegetable" },
  { name: "orange", type: "fruit" }
];

let filter = "fruit";

function filterHelper(product) {
  return product.type === filter;
}

const filteredProduts = products.filter(filterHelper);

console.log(filteredProduts);
