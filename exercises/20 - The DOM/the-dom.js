const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = document.querySelector('img');
const heading = document.querySelector('h2');

console.log(heading.innerText);
console.log(heading.textContent);

// heading.textContent = 'Wes is cool';
// console.dir(heading.textContent);
// console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforeend', '🍕');
