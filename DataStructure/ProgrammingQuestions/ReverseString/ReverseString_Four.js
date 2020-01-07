const reverseString = str =>
  str.split("").reduce((rev, char) => char + rev, "");

console.log(reverseString("Tapan Kumar"));
