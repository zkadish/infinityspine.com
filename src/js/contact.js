import { MDCTextField } from '@material/textfield';

const firstNameField = new MDCTextField(document.querySelector('#first-name-field')); // eslint-disable-line
const lastNameField = new MDCTextField(document.querySelector('#last-name-field')); // eslint-disable-line
const emailField = new MDCTextField(document.querySelector('#email-field')); // eslint-disable-line
const messageField = new MDCTextField(document.querySelector('#message-field')); // eslint-disable-line

// fixes issue with material textarea label getting cut off
// by the inlined overflow value being applied by material-ui
const message = document.querySelector('#message-field');
function onMousedownHandler() {
  setTimeout(() => {
    message.style = 'width: auto';
  }, 0);
}
message.onmousedown = onMousedownHandler;
