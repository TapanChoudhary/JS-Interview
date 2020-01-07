const reverseString = string => {
  const stringArr = string.split("");
  const length = string.length - 1;
  let reversedStringArr = [];
  for (let i = length; i >= 0; i--) {
    reversedStringArr.push(stringArr[i]);
  }
  return reversedStringArr.join("");
};

console.log(reverseString("Tapan"));
