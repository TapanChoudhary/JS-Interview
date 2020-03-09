//IN ES6
let numbers = [1, 2, 3, 4, 5, 6, 7];

let doubledOne = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledOne);

let doubled = numbers.map(number => number * 2);

console.log(doubled);
