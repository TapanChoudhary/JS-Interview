const points = [
  [4, 5],
  [10, 1],
  [0, 30]
];

const arrayOfObjects = points.map(([x, y]) => {
  return { x, y };
});

console.log(arrayOfObjects);
