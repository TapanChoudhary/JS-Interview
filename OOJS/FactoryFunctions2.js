const playerFunctions = {
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
};

function createPlayer(name, weapon) {
  return {
    name,
    weapon
  };
}

const peter = createPlayer("Spidy", "web");
peter.attack = playerFunctions.attack;
const stark = createPlayer("Ironman", "suite");
stark.attack = playerFunctions.attack;

console.log(peter.attack());
console.log(stark.attack());
