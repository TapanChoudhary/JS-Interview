const users = [
  { name: "xyz" },
  { name: "abc" },
  { name: "pqr" },
  { name: "lmn" }
];

function finder(user) {
  return (user.name = "pqr");
}

const user = users.find(finder);

console.log(user);
