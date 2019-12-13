let arr = [1, 2, 13, 24, 12, 20, 23, 30];

Array.prototype.customSort = function() {
  this.sort((a, b) => a < b);
};

arr.customSort();

arr;
