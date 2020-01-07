const arrayChunk = (arr, size) => {
  let chunkedArr = [];
  let expectedChunkedArrLength = Math.ceil(arr.length / size);
  for (let i = 0, j = 0; i < expectedChunkedArrLength; i++) {
    let newChunk = [];
    for (let k = 0; k < size; k++) {
      if (arr[k + j]) newChunk.push(arr[k + j]);
      else break;
    }
    chunkedArr.push(newChunk);
    j = j + size;
  }
  return chunkedArr;
};

console.log(arrayChunk([2, 3, 4, 4, 4], 2));
