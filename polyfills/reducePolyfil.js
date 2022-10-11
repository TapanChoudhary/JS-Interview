Array.prototype.myReduce = (cb, initialValue) => {
  let acc = initialValue;

  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index], index, this) : this[index];
  }

  return acc;
};
