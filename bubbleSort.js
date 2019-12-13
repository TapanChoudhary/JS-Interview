let arr = [1, 2, 13, 24, 12, 20, 23, 30];

const swap = (arr, indexOne, indexTwo) => {
  let temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
};

const sortArray = array => {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};

console.log(sortArray(arr));
