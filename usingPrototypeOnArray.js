let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.print = function() {
  return this.toString();
};

console.log(arr.print());
