//Lexical Scope = variable that are defined in outer scope (upper scope)
//then they are availble inside

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 2000);
}

for (var i = 0; i < 10; i++) {
  (i => {
    setTimeout(function() {
      console.log(i);
    }, 2000);
  })(i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 2000);
}

var x = 10;
(function() {
  console.log(x);
  var x = 20;
})();
