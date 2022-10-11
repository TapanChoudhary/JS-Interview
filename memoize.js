function memoize(cb, context) {
  const cache = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = cb.call(context || this, ...args);
    }
    return cache[argsCache];
  };
}

const square = (num1, num2) => {
  for (let index = 0; index < 100000; index++) {}
  return num1 * num2;
};

const memoizedSquare = memoize(square);

console.time('first')

console.log(memoizedSquare(10, 10))

console.timeEnd('Second')