// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';

//   console.log(hair);
//   console.log(myAge);
// }

// go();

// function isCool(name) {
//   let cool;
//   if (name === 'Martin') {
//     cool = true;
//   }
//   return cool;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}
go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
