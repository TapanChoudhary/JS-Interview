function* numbers() {
  yield;
}

const gen = numbers();

gen.next();

console.log(numbers());
