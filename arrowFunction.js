const obj = {
  name: "Tapan",
  getName: function() {
    // let that = this;
    name = () => {
      console.log(this.name);
    };
    name();
  }
};

obj.getName();

const keepArrow = {
  name: "Tapan",
  getName: () => {
    console.log(name);
  }
};

keepArrow.getName();
