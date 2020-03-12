function* shopping() {
  const stuffFromStore = yield "cash";
  const cleanClothes = yield "laundry";

  return [stuffFromStore, cleanClothes];
}

const gen = shopping();

gen.next();

gen.next("Groceries");

gen.next("Clean Clothes");
