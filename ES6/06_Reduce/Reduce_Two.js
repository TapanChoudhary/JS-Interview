const primaryColors = [
  { color: "red" },
  { color: "yellow" },
  { color: "blue" },
  { color: "black" },
  { color: "yellow" }
];

const colors = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(colors);
