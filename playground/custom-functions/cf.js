function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal = calculateBill(100);
console.log(myTotal);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

console.log(sayHiTo('Martin'));

const myTotal3 = calculateBill(20 + 20 + 30 + 43 + 50, 0.13);
console.log(myTotal3);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
console.log(yell(doctorize('Wes')));

const myTotal4 = calculateBill(100, undefined, 0.2);
console.log(myTotal4);
