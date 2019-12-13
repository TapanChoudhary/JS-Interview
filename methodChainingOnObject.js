const obj = {
  a: 1,
  b: 3,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  }
};

obj.getA().getB();
