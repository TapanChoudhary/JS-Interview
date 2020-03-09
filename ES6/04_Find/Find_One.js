const users = [
  { name: "xyz" },
  { name: "abc" },
  { name: "pqr" },
  { name: "lmn" }
];

const userOne = users.find(user => {
  return (user.name = "pqr");
});

console.log(userOne);

const user = users.find(user => (user.name = "pqr"));

console.log(user);
