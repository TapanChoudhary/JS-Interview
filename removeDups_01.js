let arr = [2, 4, 1, 3, 4, 6, 2, 5, 9];

let filteredArr = [];

arr.forEach(item => {
  if (!filteredArr.includes(item)) {
    filteredArr.push(item);
  }
});

filteredArr;
