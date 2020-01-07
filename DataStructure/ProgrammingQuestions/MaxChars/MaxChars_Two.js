const maxChars = str => {
  let chars = {};
  let maxCount = 1;
  let maxCountItem = str[0];
  for (let char of str) {
    if (chars[char]) {
      chars[char] = chars[char] + 1;
      if (chars[char] > maxCount) {
        maxCount = chars[char];
        maxCountItem = char;
      }
    } else {
      chars[char] = 1;
    }
  }
  return { maxCountItem, maxCount };
};

console.log(maxChars("ddfsfd"));
