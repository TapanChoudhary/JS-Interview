class Car {
  constructor(title) {
    this.title = title;
  }
  drive() {
    return "vroom";
  }
}

class Toyota extends Car {
  constructor({ title, color }) {
    super(title);
    this.color = color;
  }
  honk() {
    return "beep";
  }
}

const newToyota = new Toyota({ title: "Toyota", color: "red" });

console.log(newToyota);
console.log(newToyota.drive());
console.log(newToyota.honk());
