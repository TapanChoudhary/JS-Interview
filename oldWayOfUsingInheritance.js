import { constants } from "crypto";

const Player = function(name, type) {
  this._name = name;
  this._type = type;
};

Player.prototype.introduce = function() {
  console.log(`My name is ${this._name} and I am a ${this._type}`);
};

const wizard = new Player("test", "player");

wizard.play = function() {
  console.log("I can play");
};

wizard.introduce();
wizard.play();
