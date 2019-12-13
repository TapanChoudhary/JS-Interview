function createPlayer(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return `${name} attacks with ${weapon}`;
    }
  };
}

const peter = createPlayer("Spidy", "web");
const stark = createPlayer("Ironman", "suite");

console.log(peter.attack());
console.log(stark.attack());
