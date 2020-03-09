var products = [
  { name: "banana", type: "fruit" },
  { name: "cucumber", type: "vegetable" },
  { name: "potato", type: "vegetable" },
  { name: "orange", type: "fruit" }
];

var filteredProducts = [];
var filter = "vegetable";

for (var i = 0; i < products.length; i++) {
  if (products[i].type === filter) {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);
