let arr = [
  { a: 10, b: 5 },
  { x: 2, a: 19 },
  { y: 7, b: 3 }
];

let expectedObj = arr.reduce((obj, currentItem) => {
  Object.keys(currentItem).forEach(item => {
    if (obj[item]) {
      obj[item] += currentItem[item];
    } else {
      obj[item] = currentItem[item];
    }
  });
  return obj;
}, {});

expectedObj;
