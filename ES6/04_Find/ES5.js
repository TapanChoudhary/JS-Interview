var users = [
  { name: "xyz" },
  { name: "abc" },
  { name: "pqr" },
  { name: "lmn" }
];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === "pqr") {
    user = users[i];
    break;
  }
}

console.log(user);
