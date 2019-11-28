import { MDCRipple } from '@material/ripple';
import { WP_MAIN_NAV, MAIN_NAV } from './constants';

import './router';

// import images
import '../img/logo.png';
import '../img/logo-only.png';
import '../img/splash-01.png';
import '../img/splash-01-pho480.png';
import '../img/runners.png';
import '../img/gentle.png';
import '../img/adjustment.png';
import '../img/sports.png';
import '../img/functional.png';
import '../img/red-light.png';
import '../img/breathing.png';
import '../img/knee.png';
import '../img/elbow.png';
import '../img/dr-john-thoma.jpg';

// import forms
import '../forms/nucca-new-patient-form.pdf';
import '../forms/functional-medicine-form.pdf';
import '../forms/Insurance-Intake-form.pdf';

// set up localstorage
if (!localStorage.getItem('wpRoutes')) {
  localStorage.setItem('wpRoutes', JSON.stringify([]));
}

const mobileNavMenuBtn = document.querySelector('.header__logo--mobile-nav');
const mainNav = document.querySelector('.main-nav');
const mobileNav = document.querySelector('.mobile-nav');

const createMainNav = (wpBtns = []) => {
  const mainNavBtn = document.createElement('button');
  const mobileNavBtn = document.createElement('button');
  const vHr = document.createElement('hr');
  const hHr = document.createElement('hr');
  vHr.classList.add('vertical-rule');
  hHr.classList.add('horizontal-rule');

  let additionalMainNavBtns = [];
  let additionalMobileNavBtns = [];

  // process btns from wp
  wpBtns.forEach((btn) => {
    // todo: remove when wp gets cleaned up
    const btnSlug = btn.object_slug.replace('-1', '');
    // put btn and page btn goes to in localStorage
    localStorage.setItem('wpRoutes', JSON.stringify([{
      slug: `#${btnSlug}`,
      pageId: btn.object_id,
    }]));
    // click handler for wp btns
    const mobileNavBtnClickHandler = () => {
      document.location = `#${btnSlug}`;
      mobileNav.classList.toggle('display-none');
    };
    // add btn class
    mainNavBtn.classList.add(`main-nav__${btnSlug}`, 'mdc-button');
    mobileNavBtn.classList.add(`mobile-nav__${btnSlug}`, 'mdc-button');
    // add data route
    mainNavBtn.setAttribute('data-route', `#${btnSlug}`);
    mobileNavBtn.setAttribute('data-route', `#${btnSlug}`);
    // add onclick event
    mainNavBtn.setAttribute('onclick', `document.location="#${btnSlug}"`);
    mobileNavBtn.addEventListener('click', mobileNavBtnClickHandler);
    // clear menu container
    mainNavBtn.innerHTML = btnSlug.split('-').join(' ');
    mobileNavBtn.innerHTML = btnSlug.split('-').join(' ');
    // add btns from wp to main navs
    additionalMainNavBtns = [...additionalMainNavBtns, mainNavBtn, vHr];
    additionalMobileNavBtns = [...additionalMobileNavBtns, mobileNavBtn, hHr];
  });

  const mobileNavChildren = [...mobileNav.children];
  mobileNavChildren.forEach((nav) => {
    if (nav.className.includes('mobile-nav')) {
      const route = nav.getAttribute('data-route');
      const clickHandler = () => {
        document.location = route;
        mobileNav.classList.toggle('display-none');
      };
      nav.addEventListener('click', clickHandler);
    }
  });

  const main = [...additionalMainNavBtns, ...mainNav.children];
  const mobile = [...additionalMobileNavBtns, ...mobileNav.children];
  mainNav.innerHTML = '';
  mobileNav.innerHTML = '';
  main.forEach((node) => {
    mainNav.appendChild(node);
  });
  mobile.forEach((node) => {
    // node.addEventListener('click', mobileNavBtnClickHandler);
    mobileNav.appendChild(node);
  });
};

// get wp menu items
fetch('http://wp.infinityspine.com/wp-json/wp-api-menus/v2/menus/3')
  .then(response => response.json())
  .then((res) => {
    const { items } = res;
    const wpMainNav = items.find(item => item.object_slug === WP_MAIN_NAV[0]);
    createMainNav([wpMainNav]);
  });

// reset the home link href url so that the path
// is correct for local and live production
// TODO: set this up so that its a template
// literal string html template
const logoHomeLink = document.querySelector('#logo-home-link');
if (window.location.pathname === '/infinity-spine/public/') {
  logoHomeLink.setAttribute('href', '/infinity-spine/public/');
}

// Init Buttons
function initMainNavButtons() {
  // hide mobile menu
  if (!mobileNav.classList.contains('display-none')) {
    mobileNav.classList.add('display-none');
  }

  const obj = {};
  MAIN_NAV.forEach((btn) => {
    obj[btn] = new MDCRipple(document.querySelector(`.main-nav__${btn}`));
  });
}

function mobileNavMenuBtnClickHandler() {
  mobileNav.classList.toggle('display-none');
}

function initMobileNavButtons() {
  mobileNavMenuBtn.addEventListener('click', mobileNavMenuBtnClickHandler);

  // const obj = {};
  // MAIN_NAV.forEach((btn) => {
  //   obj[btn] = new MDCRipple(document.querySelector(`.mobile-nav__${btn}`));
  // });
}

// const facebook = new MDCRipple(document.querySelector('.social')); // eslint-disable-line
// const instagram = new MDCRipple(document.querySelectorAll('.social')[1]); // eslint-disable-line
// const twitter = new MDCRipple(document.querySelectorAll('.social')[2]); // eslint-disable-line
// const blog = new MDCRipple(document.querySelectorAll('.social')[3]); // eslint-disable-line
// const email = new MDCRipple(document.querySelectorAll('.social')[4]); // eslint-disable-line
// const newPatient = new MDCRipple(document.querySelector('.new-patient')); // eslint-disable-line

const splash01 = document.getElementById('splash-01');

function matchMedia() {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    // console.log('index.js - desk1920');
    initMainNavButtons();
  }

  if (window.matchMedia('(max-width: 1919px) and (min-width: 1600px)').matches) {
    // console.log('index.js - desk1600');
    initMainNavButtons();
  }

  if (window.matchMedia('(max-width: 1599px) and (min-width: 1440px)').matches) {
    // console.log('index.js - desk1440');
    initMainNavButtons();
  }

  if (window.matchMedia('(max-width: 1439px) and (min-width: 1280px)').matches) {
    // console.log('index.js - desk1280');
    initMainNavButtons();
  }

  if (window.matchMedia('(max-width: 1279px) and (min-width: 1024px)').matches) {
    // console.log('index.js - desk1024');
    initMainNavButtons();
  }

  if (window.matchMedia('(max-width: 1023px) and (min-width: 864px)').matches) {
    // console.log('index.js - tab864');
    initMainNavButtons();
  }

  if (window.matchMedia('(max-width: 863px) and (min-width: 480px)').matches) {
    // console.log('index.js - pho480');
    splash01.setAttribute('src', 'img/pho490/splash-01-pho480.png');
    initMobileNavButtons();
  }

  if (window.matchMedia('(max-width: 479px) and (min-width: 0px)').matches) {
    // console.log('index.js - phone');
    initMobileNavButtons();
  }
}
matchMedia();

// matchMedia in this file is only being used on load
// window.onresize = () => {
//   matchMedia();
// };
