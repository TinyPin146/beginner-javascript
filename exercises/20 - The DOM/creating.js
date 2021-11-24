const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = ' Cool things';
myDiv.insertAdjacentElement('afterbegin', heading);

const unorderedList = document.createElement('ul');
const Ul1 = document.createElement('li');
Ul1.textContent = 'One';
const Ul2 = document.createElement('li');
Ul2.textContent = 'Two';
const Ul3 = document.createElement('li');
Ul3.textContent = 'Three';
const Ul4 = document.createElement('li');
Ul4.textContent = 'Four';
const Ul5 = document.createElement('li');
Ul5.textContent = 'Five';

unorderedList.appendChild(Ul2);
unorderedList.appendChild(Ul3);
unorderedList.insertAdjacentElement('afterbegin', Ul1);
unorderedList.appendChild(Ul5);
Ul5.insertAdjacentElement('beforebegin', Ul4);

document.body.insertAdjacentElement('afterbegin', unorderedList);
