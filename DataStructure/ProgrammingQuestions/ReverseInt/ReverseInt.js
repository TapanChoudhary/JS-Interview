const reverseInt = num => {
  let reversedString = num
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversedString) * Math.sign(num);
};

console.log(reverseInt(984983));
