//Constructor Function
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return "vroom";
};

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

//To have access to methods available for Car
Toyota.prototype = Object.create(Car.prototype);

//To being able add new method to Toyota
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return "beep";
};

const newToyota = new Toyota({ title: "Toyota", color: "red" });

console.log(newToyota, newToyota.drive(), newToyota.honk());
