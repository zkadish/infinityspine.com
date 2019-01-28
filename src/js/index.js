import { MDCRipple } from '@material/ripple';

// import images
import '../img/logo.png';
import '../img/logo-only.png';
import '../img/back-pain-01.png';
import '../img/runners.png';
import '../img/scoliosis.png';
import '../img/adjustment.png';
import '../img/sports.png';
import '../img/functional.png';
import '../img/red-light.png';
import '../img/breathing.png';
import '../img/knee.png';
import '../img/elbow.png';
import '../img/dr-john-thoma.jpg';

console.log('PRODUCTION', PRODUCTION); // eslint-disable-line

// Init Buttons
const home = new MDCRipple(document.querySelector('.main-nav__home')); // eslint-disable-line
const about = new MDCRipple(document.querySelector('.main-nav__about')); // eslint-disable-line
const treatments = new MDCRipple(document.querySelector('.main-nav__treatments')); // eslint-disable-line
const testimonials = new MDCRipple(document.querySelector('.main-nav__testimonials')); // eslint-disable-line
const blog = new MDCRipple(document.querySelector('.main-nav__blog')); // eslint-disable-line
const contact = new MDCRipple(document.querySelector('.main-nav__contact')); // eslint-disable-line

// const facebook = new MDCRipple(document.querySelector('.social'));
// const instagram = new MDCRipple(document.querySelectorAll('.social')[1]);
// const twitter = new MDCRipple(document.querySelectorAll('.social')[2]);
// const email = new MDCRipple(document.querySelectorAll('.social')[3]);

const newPatient = new MDCRipple(document.querySelector('.new-patient')); // eslint-disable-line


window.onresize = () => {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    console.log('desk1920');
  }

  if (window.matchMedia('(max-width: 1919px) and (min-width: 1600px)').matches) {
    console.log('desk1600');
  }

  if (window.matchMedia('(max-width: 1599px) and (min-width: 1440px)').matches) {
    console.log('desk1440');
  }

  if (window.matchMedia('(max-width: 1439px) and (min-width: 1280px)').matches) {
    console.log('desk1280');
  }

  if (window.matchMedia('(max-width: 1279px) and (min-width: 1024px)').matches) {
    console.log('desk1024');
  }

  if (window.matchMedia('(max-width: 1023px) and (min-width: 864px)').matches) {
    console.log('tab864');
  }

  if (window.matchMedia('(max-width: 863px) and (min-width: 480px)').matches) {
    console.log('pho480');
  }

  if (window.matchMedia('(max-width: 479px) and (min-width: 0px)').matches) {
    console.log('phone');
  }
};
