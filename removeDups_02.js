let arr = [2, 4, 1, 3, 4, 6, 2, 5, 9];

let obj = {};

arr.forEach(item => (obj[item] = item));

obj

let filteredArr = Object.values(obj);

filteredArr;
