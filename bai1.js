function add(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
    console.log(arg);
  }
  return sum;
}
const x = add(1, 2, 3, 4, 5, 6, 7, 8, 4);
console.log(x);
