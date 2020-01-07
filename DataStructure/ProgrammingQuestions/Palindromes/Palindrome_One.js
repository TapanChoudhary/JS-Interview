const isPalindrome = str => {
  let reversed = str
    .split("")
    .reverse()
    .join("");
  return str.length > 1 && reversed === str;
};

console.log(isPalindrome("tapan"));
