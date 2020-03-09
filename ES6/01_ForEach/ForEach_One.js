//IN ES6
var colors = ["red", "blue", "green"];

colors.forEach(function(color) {
  console.log(color);
});

//USING ARROW FUNCTION
colors.forEach(color => {
  console.log(color);
});

//Shortcut
colors.forEach(color => console.log(color));
//OR
colors.forEach(console.log);
