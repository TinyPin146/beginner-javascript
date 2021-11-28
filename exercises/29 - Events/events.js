const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked');
  return 'it got clicked';
}

const hooray = () => console.log('Hooray');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// Listen on multiple items

function buyItem() {
  console.log('buying item');
}

function loopBuyBtns(anythin) {
  console.log('Binding th button');
  anythin.addEventListener('click', buyItem);
}

const buyBtns = document.querySelectorAll('button.buy');

function handleBuyBtnClick(event) {
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
}

buyBtns.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyBtnClick);
});
