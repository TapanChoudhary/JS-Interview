const lazyTeam = {
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
}

const names = [];

for (let name of TeamIterator(lazyTeam)) {
  names.push(name);
}

console.log(names);
