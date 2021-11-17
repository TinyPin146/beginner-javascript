// function doctorize(firstName) {
//   return `Dr . ${firstName}`;
// }

// Anon function
// function (firstName) {
//   return `Dr . ${firstName}`;
// }

// Function Expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// Arrow function
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

(function (age) {
  console.log(`Running the ANON function ${age}`);
  return `You are cool ${age}`;
})(22);

// Methods!!!

const wes = {
  name: 'Wes Bos',
  // Method -->
  sayhi() {
    console.log(`Hey ${this.name}`);
    return `Hey ${this.name}`;
  },
  // Short hand method
  yellHi() {
    console.log('HEY WESSSS');
  },
  // Arrow function (METHOD????)
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  },
};

// Callback function
// click callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Nice clicks!!!');
}

button.addEventListener('click', () => {
  console.log('Nice Job!!!');
});

// Timer callback
setTimeout(() => {
  console.log('Time to eat!');
}, 1000);
