var cars = [
  { model: "Buick", price: "Cheap" },
  { model: "Camaro", price: "Expensive" }
];

var pricesEs5 = [];

for (var i = 0; i < cars.length; i++) {
  pricesEs5.push(cars[i].price);
}

console.log(pricesEs5);
