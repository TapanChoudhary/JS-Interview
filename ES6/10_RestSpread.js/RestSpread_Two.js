const validateShoppingList = (...items) => {
  if (!items.includes("Milk")) {
    return ["Milk", ...items];
  }
  return items;
};

const shoppingList = validateShoppingList("Oranges", "Bread", "Eggs");

console.log(shoppingList);
