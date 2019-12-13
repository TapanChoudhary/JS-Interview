class Player {
  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  introduce() {
    console.log(`My name is ${this._name} and I am a ${this._type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`I am a ${this._type}`);
  }
}

const wizard1 = new Wizard("test", "Auto");
const wizard2 = new Wizard("test2", "Auto2");
const player = new Player("player", "play");

wizard1.introduce();
wizard2.play();
player.introduce();
