const maxCharCount = str => {
  let obj = {};
  let maxCount = 1;
  let maxCountItem = str[0];
  str.split("").forEach(item => {
    if (obj.hasOwnProperty(item)) {
      obj[item] = obj[item] + 1;
      if (obj[item] > maxCount) {
        maxCount = obj[item];
        maxCountItem = item;
      }
    } else {
      obj[item] = 1;
    }
  });
  return { maxCountItem, maxCount };
};

console.log(maxCharCount("vhg"));
