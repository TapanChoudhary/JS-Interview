function Player(name, weapon) {
  this.name = name;
  this.weapon = weapon;

  //We can put attack in prototype so that each object have the same copy[Avoid duplicate copy]
  //   this.attack = function() {
  //     return `${this.name} attacks with ${this.weapon}`;
  //   };
}

Player.prototype.attack = function() {
  return `${this.name} attacks with ${this.weapon}`;
};

const peter = new Player("Spidy", "Web");
const stark = new Player("Ironman", "Suite");

console.log(peter.attack());
console.log(stark.attack());
