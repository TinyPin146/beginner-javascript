function checkHuman() {
  let checkCompleted = false;
  while (checkCompleted === false) {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const addValue = a + b;
    const checkValue = prompt(`What is ${a} + ${b}?`);
    if (addValue === parseInt(checkValue)) {
      console.log('You may proceed!');
      checkCompleted = true;
    } else {
      console.log('Retry please!');
      checkCompleted = false;
    }
  }
}
checkHuman();
