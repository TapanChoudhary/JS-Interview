function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

var inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Evoquent Javascript", price: 15 }
];

var bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());

console.log(bookShop.priceForTitle("Harry Potter"));
