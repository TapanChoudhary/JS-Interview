const multiDArray = [
  [
    [2, 4],
    [3, 4]
  ],
  [4, 7],
  [2, 6, 1, 9]
];

const flatArray = arr =>
  arr.reduce(
    (newAcc, newCItem) =>
      Array.isArray(newCItem)
        ? newAcc.concat(flatArray(newCItem))
        : newAcc.concat(newCItem),
    []
  );

console.log(flatArray(multiDArray));
