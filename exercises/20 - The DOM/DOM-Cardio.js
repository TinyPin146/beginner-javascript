// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const unorderedList = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'One';
unorderedList.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'Two';
unorderedList.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'Three';
unorderedList.appendChild(li3);

// put that list into the above wrapper
myDiv.appendChild(unorderedList);

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Snarky Puppy';
// Append that image to the wrapper
myDiv.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const stringHTML = `
<div>
    <p>Teszt</p>
    <p>Add .warning</p>
</div>
`;

// put this div before the unordered list from above
const ulElem = document.querySelector('ul');
const fragmentHTML = document
  .createRange()
  .createContextualFragment(stringHTML);

myDiv.insertAdjacentHTML('afterbegin', stringHTML);

// add a class to the second paragraph called warning
const divOfWarning = myDiv.querySelector('div');
divOfWarning.children[1].classList.add('warning');
// remove the first paragraph
divOfWarning.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const playerCardHTML = `
  <div class="playerCard">
    <h2>${name.toUpperCase()} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class='delete' class='button'>Delete</button>
  </div>
  `;
  return playerCardHTML;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const divCard = document.createElement('div');
divCard.classList.add('cards');
// make 4 player cards using generatePlayerCard

const Martin = generatePlayerCard('Martin', 22, 186);
const János = generatePlayerCard('János', 22, 175);
const Ricsárdka = generatePlayerCard('Ricsárdka', 26, 180);
const István = generatePlayerCard('István', 40, 166);

// append those cards to the div

divCard.insertAdjacentHTML('afterbegin', Martin);
divCard.insertAdjacentHTML('afterbegin', János);
divCard.insertAdjacentHTML('afterbegin', Ricsárdka);
divCard.insertAdjacentHTML('afterbegin', István);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', divCard);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const btns = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const btnThatGotClicked = event.currentTarget;
  btnThatGotClicked.parentElement.remove();

  // btnThatGotClicked.closest('.playerCard').remove()
}
// loop over them and attach a listener
btns.forEach((button) => button.addEventListener('click', deleteCard));
