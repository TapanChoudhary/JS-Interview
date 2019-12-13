const first = () => {
  const greet = "Hello";
  console.log("First function called");
  const second = () => {
    console.log("Still able to greet ", greet);
  };
  console.log("Returned from first here");
  return second;
};

const funCall = first();
funCall();
