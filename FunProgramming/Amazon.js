const user = {
  name: "sam",
  active: true,
  cart: [],
  purchases: []
};

function addToCart(item) {
  return [...user.cart, item];
}

function purchaseItem(item) {
  removeFromCart(item);
  return [...user.purchases, item];
}

function addThreePercentTax() {
  const totalPrice = user.cart.reduce(
    (initialPrice, item) => initialPrice + item.price,
    0
  );
  return (totalPrice * 3) / 100;
}

function removerFromCart(item) {
  return user.cart.filter(itemName => itemName !== item);
}
