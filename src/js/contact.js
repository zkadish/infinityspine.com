import { MDCTextField } from '@material/textfield';
import axios from 'axios';

const firstNameMDCTextField = new MDCTextField(document.querySelector('#first-name-field')); // eslint-disable-line
const lastNameMDCTextField = new MDCTextField(document.querySelector('#last-name-field')); // eslint-disable-line
const emailMDCTextField = new MDCTextField(document.querySelector('#email-field')); // eslint-disable-line
const messageMDCTextField = new MDCTextField(document.querySelector('#message-field')); // eslint-disable-line

// fixes issue with material textarea label getting cut off
// by the inlined overflow value being applied by material-ui
const message = document.querySelector('#message-field');
function onMousedownHandler() {
  setTimeout(() => {
    message.style = 'width: auto';
  }, 0);
}
message.onmousedown = onMousedownHandler;

// form sumbmition and validation
const firstNameInput = document.querySelector('#name-first-input');
const lastNameInput = document.querySelector('#name-last-input');
const emailInput = document.querySelector('#email-input');
const checkbox = document.querySelector('#checkbox-1');
const textArea = document.querySelector('#textarea');
const submit = document.querySelector('.submit-btn');

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

firstNameInput.onkeypress = textFieldHandler;
lastNameInput.onkeypress = textFieldHandler;
// emailInput.onkeypress = textFieldHandler;

function sendEmail() {
  console.log(window.location);
  const { origin } = window.location;
  axios.get(`${origin}/infinity-spine/public/php/email.php?firstname=zach`)
  // fetch(`${origin}/infinity-spine/public/php/email.php?firstname=zach`)
    .then((response) => {
      const runPhp = document.querySelector('#run-php');
      console.log('response', response);
      runPhp.innerHTML = response.data;
    });
}

submit.onclick = () => {
  sendEmail();
  // validate email
  const validEmail = regxTest('email', emailInput.value);
  if (validEmail) {
    formData['email-field'] = emailInput.value;
  } else {
    console.log('not a valid email');
    return;
  }

  formData['name-first-input'] = firstNameInput.value;
  formData['name-last-input'] = lastNameInput.value;
  formData.checkbox = checkbox.value;
  formData.message = textArea.value;
};
