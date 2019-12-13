const multiDArray = [1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12];

const getDepth = arr => {
  arr.forEach(element => {
    console.log(element);
    if (Array.isArray(arr)) {
      console.log("Depth++");
      getDepth(element);
    }
  });
};

getDepth(multiDArray);
