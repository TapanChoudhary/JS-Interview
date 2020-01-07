const arrChunk = (arr, size) => {
  let chunkedArr = [];
  for (let i = 0; i < arr.length; i = i + size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

console.log(arrChunk([1, 2, 3, 4, 5, 6, 6], 3));
