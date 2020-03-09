function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET";
  }

  return method;
  //Logic to make request
}

var withOutMethodArg = makeAjaxRequest("google.com");
var withMethodArg = makeAjaxRequest("google.com", "POST");

console.log(withOutMethodArg);
console.log(withMethodArg);
