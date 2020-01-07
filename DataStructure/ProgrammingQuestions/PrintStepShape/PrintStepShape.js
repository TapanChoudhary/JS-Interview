const printStepShape = number => {
  for (let row = 0; row <= number; row++) {
    let step = "";
    for (let column = 0; column <= number; column++) {
      if (row >= column) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};

printStepShape(6);
