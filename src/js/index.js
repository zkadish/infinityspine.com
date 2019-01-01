import { MDCRipple } from '@material/ripple';

console.log('js/index.js loaded!x');
console.log(PRODUCTION);

// Init Buttons
const home = new MDCRipple(document.querySelector('.main-nav__home'));
const about = new MDCRipple(document.querySelector('.main-nav__about'));
const treatments = new MDCRipple(document.querySelector('.main-nav__treatments'));
const testimonials = new MDCRipple(document.querySelector('.main-nav__testimonials'));
const blog = new MDCRipple(document.querySelector('.main-nav__blog'));
const contact = new MDCRipple(document.querySelector('.main-nav__contact'));

const newPatient = new MDCRipple(document.querySelector('.new-patient'));
