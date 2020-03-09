//Array of numbers
var numbers = [1, 2, 3, 4, 5];

//variable to hold the sum
var sum = 0;

//function to add numbers
function adder(number) {
  sum += number;
}

//For each function to loop over array
numbers.forEach(adder);

console.log(sum);
