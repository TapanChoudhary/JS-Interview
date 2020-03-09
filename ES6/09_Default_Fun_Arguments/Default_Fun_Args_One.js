function makeAjaxRequest(url, method = "GET") {
  return method;
  //Logic to make request
}

const withOutMethodArg = makeAjaxRequest("google.com");
const withMethodArg = makeAjaxRequest("google.com", "POST");

console.log(withOutMethodArg);
console.log(withMethodArg);
