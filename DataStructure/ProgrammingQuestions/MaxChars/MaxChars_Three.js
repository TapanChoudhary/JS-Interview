const getCharObject = str => {
  let charsObj = {};
  for (let char of str) {
    charsObj[char] = charsObj[char] + 1 || 1;
  }
  return charsObj;
};

const maxCountChar = str => {
  let charsObj = getCharObject(str);
  let maxCount = 0;
  let maxCountCh = "";
  for (let char in charsObj) {
    if (charsObj[char] > maxCount) {
      maxCount = charsObj[char];
      maxCountCh = char;
    }
  }
  return { maxCountCh, maxCount };
};

console.log(maxCountChar("tes"));
