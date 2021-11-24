const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;

// Security issue demo
const description = prompt('What is your name?');

const myHTML = `
<div class='wrapper'>
    <h2>Cute ${description}</h2>
    <img src='${src}' alt="${description}"/>
</div>
<style>
img {
    border: 1px solid black;
}
</style>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);
