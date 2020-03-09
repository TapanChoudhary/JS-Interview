const cars = [
  { model: "Buick", price: "Cheap" },
  { model: "Camaro", price: "Expensive" }
];

const pricesOne = cars.map(function(car) {
  return car.price;
});

console.log(pricesOne);

const prices = cars.map(car => car.price);

console.log(prices);
