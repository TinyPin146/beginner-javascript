const wes = document.querySelector('.wes');
wes.addEventListener('click', (e) => {
  const shouldChangePage = confirm(
    'This page might be harmful, do you wish to change?'
  );

  if (!shouldChangePage) {
    e.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.log(e.currentTarget.name.value);
  //   console.log(e.currentTarget.email.value);
  //   console.log(e.currentTarget.agree.checked);

  const name = e.currentTarget.name.value;
  if (name.includes('chad')) alert('sorry bro');
  e.preventDefault();
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
