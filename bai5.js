class calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  subtract() {
    return this.a - this.b;
  }
  receive() {
    return this.a * this.b;
  }
  devide(){
    if this.b != 0
        return this.a / this.b;
    else
        return "không thể chia hết cho 0";
  }
}

const num = new calculator (2,4);

console.log(num);
console.log(num.sum());
console.log(num.subtract());
console.log(num.receive());
console.log(num.devide());