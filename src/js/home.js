import onRouterEventHandler from './router';
// import { MDCRipple } from '@material/ripple';

// const facebook = new MDCRipple(document.querySelector('.social')); // eslint-disable-line
// const instagram = new MDCRipple(document.querySelectorAll('.social')[1]); // eslint-disable-line
// const twitter = new MDCRipple(document.querySelectorAll('.social')[2]); // eslint-disable-line
// const blog = new MDCRipple(document.querySelectorAll('.social')[3]); // eslint-disable-line
// const email = new MDCRipple(document.querySelectorAll('.social')[4]); // eslint-disable-line

// const newPatient = new MDCRipple(document.querySelector('.new-patient')); // eslint-disable-line

const nuccaChrioBtn = document.querySelector('.treatments__btn');
// console.log('nuccaChrioBtn:', nuccaChrioBtn);

// READ MORE BUTTON
function nuccaChrioBtnClickHandler() {
  window.history.pushState(null, null, '#nucca-chiropractic');
  onRouterEventHandler();
}
nuccaChrioBtn.addEventListener('click', nuccaChrioBtnClickHandler);
