const multiDArray = [
  [
    [2, 4],
    [3, 4]
  ],
  [4, 7],
  [2, 6, 1, 9]
];

const flatten = arr =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

console.log(flatten(multiDArray));
