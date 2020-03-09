const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 12 },
  { name: "Acer", ram: 32 }
];

const atleastOneComputerCanRunProgram = computers.some(
  computer => computer.ram > 24
);

console.log(atleastOneComputerCanRunProgram);
