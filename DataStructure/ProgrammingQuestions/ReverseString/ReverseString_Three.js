const reverseString = string => {
  let reversedString = "";
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return reversedString;
};

console.log(reverseString("Tapan Kumar"));
