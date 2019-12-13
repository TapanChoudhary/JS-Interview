class Player {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} attacks with  ${this.weapon}`;
  }
}

const peter = new Player("Spidy", "Web");
const stark = new Player("Ironman", "Suite");

console.log(peter.attack());
console.log(stark.attack());
