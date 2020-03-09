const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((sum, number) => (sum += number), 0);

console.log(sum);
