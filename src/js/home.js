import { routes, onRouterEventHandler } from './router';

const treatmentRoutes = routes.slice(0, 4);
const treatmentsBtn = document.querySelectorAll('.treatments__btn');

console.log('home loaded!');

// treatments read-more buttons
treatmentsBtn.forEach((btn, i) => {
  function treatmentsBtnClickHandler() {
    window.history.pushState(null, null, treatmentRoutes[i]);
    onRouterEventHandler();
  }
  btn.addEventListener('click', treatmentsBtnClickHandler);
});

const splash01 = document.querySelector('#splash-01');

function matchMedia() {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    console.log('home.js - desk1920');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1919px) and (min-width: 1600px)').matches) {
    console.log('home.js - desk1600');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1599px) and (min-width: 1440px)').matches) {
    console.log('home.js - desk1440');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1439px) and (min-width: 1280px)').matches) {
    console.log('home.js - desk1280');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1279px) and (min-width: 1024px)').matches) {
    console.log('home.js - desk1024');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1023px) and (min-width: 864px)').matches) {
    console.log('home.js - tab864');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 863px) and (min-width: 480px)').matches) {
    console.log('home.js - pho480');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }

  if (window.matchMedia('(max-width: 479px) and (min-width: 0px)').matches) {
    console.log('home.js - phone');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }
}
matchMedia();

window.onresize = () => {
  matchMedia();
};
