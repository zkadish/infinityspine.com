import { MDCRipple } from '@material/ripple';
import MAIN_NAV from './constants';

import './router';

// import images
import '../img/logo.png';
import '../img/logo-only.png';
import '../img/splash-01.png';
import '../img/splash-01-pho480.png';
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

// import forms
import '../forms/infinity-spine-new-patient-form.pdf';

// console.log('PRODUCTION', PRODUCTION); // eslint-disable-line

const mobileNavBtn = document.querySelector('.header__logo--mobile-nav');
const mobileNavMenu = document.querySelector('.mobile-nav');
// const reviewScripts = document.querySelectorAll('.testimonials .mdc-layout-grid__cell > *');
const mobileNavBtnRipple = new MDCRipple(mobileNavBtn); // eslint-disable-line

// console.log('reviewScripts:', reviewScripts);

function mobileNavBtnClickHandler() {
  mobileNavMenu.classList.toggle('display-none');
}

// Init Buttons
function initMainNavButtons() {
  // hide mobile menu
  if (!mobileNavMenu.classList.contains('display-none')) {
    mobileNavMenu.classList.add('display-none');
  }

  const obj = {};
  MAIN_NAV.forEach((btn) => {
    obj[btn] = new MDCRipple(document.querySelector(`.main-nav__${btn}`));
  });
}

function initMobileNavButtons() {
  mobileNavBtn.removeEventListener('click', mobileNavBtnClickHandler);
  mobileNavBtn.addEventListener('click', mobileNavBtnClickHandler);

  const obj = {};
  MAIN_NAV.forEach((btn) => {
    obj[btn] = new MDCRipple(document.querySelector(`.mobile-nav__${btn}`));
  });
}

const facebook = new MDCRipple(document.querySelector('.social')); // eslint-disable-line
const instagram = new MDCRipple(document.querySelectorAll('.social')[1]); // eslint-disable-line
const twitter = new MDCRipple(document.querySelectorAll('.social')[2]); // eslint-disable-line
const blog = new MDCRipple(document.querySelectorAll('.social')[3]); // eslint-disable-line
const email = new MDCRipple(document.querySelectorAll('.social')[4]); // eslint-disable-line

const newPatient = new MDCRipple(document.querySelector('.new-patient')); // eslint-disable-line

// select splash images for breakpoint image swapping.
const splash01 = document.querySelector('#splash-01');

function matchMedia() {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    console.log('desk1920');
    initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1919px) and (min-width: 1600px)').matches) {
    console.log('desk1600');
    initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1599px) and (min-width: 1440px)').matches) {
    console.log('desk1440');
    initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1439px) and (min-width: 1280px)').matches) {
    console.log('desk1280');
    initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1279px) and (min-width: 1024px)').matches) {
    console.log('desk1024');
    initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1023px) and (min-width: 864px)').matches) {
    console.log('tab864');
    initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 863px) and (min-width: 480px)').matches) {
    console.log('pho480');
    initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }

  if (window.matchMedia('(max-width: 479px) and (min-width: 0px)').matches) {
    console.log('phone');
    initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }
}

window.onresize = () => {
  matchMedia();
};

matchMedia();
