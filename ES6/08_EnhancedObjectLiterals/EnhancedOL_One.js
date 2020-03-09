function createBookShop(inventory) {
  return {
    //If we have key and value with identical names, we can have remove the key
    inventory,
    //If we have a function defined, then we can directly write method as property
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    //If we have a function defined, then we can directly write method as property
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Evoquent Javascript", price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());

console.log(bookShop.priceForTitle("Harry Potter"));
