const names = ["Alexandria", "Matthew", "Joe"];

const allNamesAreLenghty = names.every(name => name.length > 4);

const atleastOneNameIsLengthy = names.some(name => name.length > 4);

const allNamesAreShort = names.every(name => name.length < 4);

const atleastOneNameIsShort = names.some(name => name.length < 4);

console.log(allNamesAreLenghty);

console.log(atleastOneNameIsLengthy);

console.log(allNamesAreShort);

console.log(atleastOneNameIsShort);
