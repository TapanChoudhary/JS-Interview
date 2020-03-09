const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 12 },
  { name: "Acer", ram: 32 }
];

const allCompCanRunProgram = computers.every(computer => computer.ram > 16);

console.log(allCompCanRunProgram);
