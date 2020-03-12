//Example for Symbol.iterator
const testingTeam = {
  lead: "Amanda",
  engineer: "Bill",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.engineer;
  }
};

const lazyTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Jill",
  managar: "Alex",
  engineer: "Dave",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.managar;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];

for (let name of lazyTeam) {
  names.push(name);
}

console.log(names);
