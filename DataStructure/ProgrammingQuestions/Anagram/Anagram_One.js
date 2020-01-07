const isAnagram = (stringOne, stringTwo) => {
  let stringOneLength = getCharOnlyString(stringOne).length;
  let stringTwoLength = getCharOnlyString(stringTwo).length;
  if (stringOneLength !== stringTwoLength) {
    return false;
  }

  let stringOneObj = getCharObject(stringOne);
  let stringTwoObj = getCharObject(stringTwo);

  return Object.keys(stringOneObj).every(
    item => stringOneObj[item] === stringTwoObj[item]
  );
};

const getCharOnlyString = str => str.replace(/[^\w]/g, "");

const getCharObject = str => {
  let charsObj = {};
  for (let char of getCharOnlyString(str).toLowerCase()) {
    charsObj[char] = charsObj[char] + 1 || 1;
  }
  return charsObj;
};

console.log(isAnagram("Apna", "pana!"));
