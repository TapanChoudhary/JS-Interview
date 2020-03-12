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
  engineer: "Dave"
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.managar;
  yield team.engineer;
  yield* testingTeam;
}

const names = [];

for (let name of TeamIterator(lazyTeam)) {
  names.push(name);
}

console.log(names);
