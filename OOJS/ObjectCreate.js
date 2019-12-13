const playerFunctions = {
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
};

function createPlayer(name, weapon) {
  let newPlayer = Object.create(playerFunctions);
  newPlayer.name = name;
  newPlayer.weapon = weapon;
  return newPlayer;
}

const peter = createPlayer("Spidy", "web");

const stark = createPlayer("Ironman", "suite");

console.log(peter.attack());
console.log(stark.attack());
