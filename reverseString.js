let string = "tapan";

const reverseStringUsingSplit = str => {
  return str
    .split()
    .reverse()
    .join("");
};

console.log(reverseStringUsingSplit(string));
