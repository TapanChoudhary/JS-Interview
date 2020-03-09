function addNumbers(a, b, c, d, e, f) {
  var numbers = [a, b, c, d, e, f];
  return numbers.reduce(function(sum, number) {
    return (sum += number);
  }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6));
