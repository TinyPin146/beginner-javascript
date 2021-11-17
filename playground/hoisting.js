const age = 10;
console.log(age);

sayHi();

function sayHi() {
  console.log('Hi');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}
