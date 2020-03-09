const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];

console.log(defaultColors.concat(userFavoriteColors));

//Or we can use spread operator to achieve the same as above

console.log([...defaultColors, ...userFavoriteColors]);

console.log([...defaultColors, "blue", ...userFavoriteColors]);
