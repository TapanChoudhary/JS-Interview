var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 24 },
  { name: "Acer", ram: 32 }
];

var allCompCanRunProgram = true;
var onlySomeCompCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allCompCanRunProgram = false;
  } else {
    onlySomeCompCanRunProgram = true;
  }
}

console.log(allCompCanRunProgram, onlySomeCompCanRunProgram);
