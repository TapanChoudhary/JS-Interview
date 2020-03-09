const products = [
  { name: "banana", type: "fruit", quantity: 10, price: 1 },
  { name: "cucumber", type: "vegetable", quantity: 0, price: 15 },
  { name: "potato", type: "vegetable", quantity: 30, price: 13 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 }
];

const filteredProducts = products.filter(product => {
  return product.quantity > 0 && product.price < 10;
});

console.log(filteredProducts);

//Using destructuring here
const filteredProductsOne = products.filter(({ quantity, price }) => {
  return quantity > 0 && price < 10;
});

console.log(filteredProductsOne);
