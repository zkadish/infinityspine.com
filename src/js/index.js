import { MDCRipple } from '@material/ripple';

// import images
import '../img/logo.png';
import '../img/back-pain-01.jpg';
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

console.log('PRODUCTION', PRODUCTION);

// Init Buttons
const home = new MDCRipple(document.querySelector('.main-nav__home'));
const about = new MDCRipple(document.querySelector('.main-nav__about'));
const treatments = new MDCRipple(document.querySelector('.main-nav__treatments'));
const testimonials = new MDCRipple(document.querySelector('.main-nav__testimonials'));
const blog = new MDCRipple(document.querySelector('.main-nav__blog'));
const contact = new MDCRipple(document.querySelector('.main-nav__contact'));

const facebook = new MDCRipple(document.querySelectorAll('.social')[0]);
const instagram = new MDCRipple(document.querySelectorAll('.social')[1]);
const twitter = new MDCRipple(document.querySelectorAll('.social')[2]);
const email = new MDCRipple(document.querySelectorAll('.social')[3]);

const newPatient = new MDCRipple(document.querySelector('.new-patient'));
