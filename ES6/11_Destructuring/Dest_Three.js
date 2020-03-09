const companies = ["Google", "Facebook", "Uber"];

const [comOne, comTwo, comThree] = companies;

console.log(comOne, comTwo, comThree);

const [compOne, ...rest] = companies;

console.log(compOne, rest);
