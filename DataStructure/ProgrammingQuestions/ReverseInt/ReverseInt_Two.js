const reverseInt = num => {
  let stringifiedNum = num.toString();

  let reversedString = stringifiedNum
    .split("")
    .reverse()
    .join("");

  if (num < 0) return parseInt(reversedString) * -1;
  return parseInt(reversedString);
};

console.log(reverseInt(9843));
