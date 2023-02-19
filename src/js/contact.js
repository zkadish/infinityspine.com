import handleErrors from './utils/fetch';

// fixes issue with material textarea label getting cut off
// by the inlined overflow value being applied by material-ui
const message = document.querySelector('#message-field');
function onMousedownHandler() {
  setTimeout(() => {
    message.style = 'width: auto';
  }, 0);
}
message.onmousedown = onMousedownHandler;

// form submission and validation
const firstNameInput = document.querySelector('#name-first-input');
const lastNameInput = document.querySelector('#name-last-input');
const emailInput = document.querySelector('#email-input');
const checkbox = document.querySelector('#checkbox-1');
const textArea = document.querySelector('#textarea');
const submit = document.querySelector('.submit-btn');
const schedule = document.querySelector('.schedule');

const formData = {
  'name-first-input': '',
  'name-last-input': '',
  'email-field': '',
  checkbox: false,
  message: '',
};

const regx = {
  name: /[a-zA-Z]/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,
};

function regxTest(input, string) {
  return regx[input].test(string);
}

function textFieldHandler(e) {
  const input = e.target.id.split('-')[0];
  const testInput = regxTest(input, e.key);
  if (!testInput) e.preventDefault();
}

function invalidEmail(invalid) {
  const borderElements = emailInput.parentElement.children[1].children;

  if (invalid) {
    emailInput.style.color = 'red';
    borderElements[1].children[0].style.color = 'red';
    borderElements[1].children[0].innerHTML = 'You must enter a valid email';
    for (let i = 0; i < 3; i += 1) {
      borderElements[i].style['border-color'] = 'red';
    }
    emailInput.focus();
    return;
  }

  emailInput.style.color = null;
  borderElements[1].children[0].style.color = null;
  borderElements[1].children[0].innerHTML = 'Your Email';
  for (let i = 0; i < 3; i += 1) {
    borderElements[i].style['border-color'] = null;
  }
  emailInput.focus();
  emailInput.blur();
}

firstNameInput.onkeypress = textFieldHandler;
lastNameInput.onkeypress = textFieldHandler;
// emailInput.onkeypress = textFieldHandler;

function sendEmail() {
  console.log('sendEmail');
  const { origin } = window.location;
  fetch(`${origin}/infinity-spine/public/php/email.php?firstname=zach`)
    .then((response) => {
      const runPhp = document.querySelector('#run-php');
      console.log('response', response);
      runPhp.innerHTML = response.data;
    });
}

submit.onclick = () => {
  console.log('submit.onclick');
  // debugger;
  formData['name-first-input'] = firstNameInput.value;
  formData['name-last-input'] = lastNameInput.value;
  formData.checkbox = checkbox.value;
  formData.message = textArea.value;

  // validate email
  const validEmail = regxTest('email', emailInput.value);
  if (validEmail) {
    formData['email-field'] = emailInput.value;
    invalidEmail(false);
  } else {
    console.log('not a valid email');
    invalidEmail(true);
    return;
  }

  submit.classList.add('submit-btn--disabled');
  submit.setAttribute('disabled', '');
  sendEmail();
};

fetch('https://wp.infinityspine.com/wp-json/wp/v2/pages/2522')
  .then(handleErrors)
  .then((response) => response.json())
  .then((res) => {
    // console.log(res);
    // debugger;
    schedule.innerHTML = res.content.rendered;
  })
  .catch((err) => {
    console.error(err);
  });
