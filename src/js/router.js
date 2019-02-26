import axios from 'axios';
import { REVIEWS_ONE, REVIEWS_TWO } from './constants';

const body = document.querySelector('body');
const container = document.querySelector('.container');
export const routes = [
  '#nucca-chiropractic',
  '#sports-physiotherapy',
  '#functional-medicine',
  '#red-near-infrared-therapy',
  '#mission-vision',
  '#about-dr-thoma',
  '#corrective-exercises',
  '#performance-exercise',
  '#customized-nutrition',
  '#welcome',
  '#dr-thoma-blog',
  '#new-patient-forms',
  '#faqs',
  '#more-testimonials',
  '#contact',
  '#home',
];

console.log('router loaded!');

let page = window.location.hash;

function testimonialTags(token) {
  // TODO: look for a better solution... Cache the original HTML?
  const scriptToken = document.createElement('script');
  scriptToken.setAttribute('type', 'text/javascript');
  scriptToken.innerHTML = (`
    var review_token = "${token}"; 
    var review_target = 'review-container';
  `);

  const scriptReview = document.createElement('script');
  scriptReview.setAttribute('type', 'text/javascript');
  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7');

  const reviewContainer = document.createElement('div');
  reviewContainer.id = 'review-container';

  return [scriptToken, scriptReview, reviewContainer];
}

function getRouteContent(newRoute, anchor) {
  axios.get(`../pages/${newRoute}.html`)
    .then((response) => {
      // remove javascript page <script></script> if it exists
      const pageScript = document.querySelectorAll(`[src="js/${page.replace('#', '')}.js"]`);
      if (pageScript) {
        pageScript.forEach((script) => {
          body.removeChild(script);
        });
      }

      // reset page
      page = newRoute;
      // update "master page"
      container.innerHTML = response.data;
    }).then(() => {
      const script = document.createElement('script');
      script.setAttribute('id', page);

      // route specific HTML and Javascript
      if (page === 'home' || page === '') {
        const reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
        script.setAttribute('src', 'js/home.js');

        // insert page specific javascript
        body.appendChild(script);
        testimonialTags(REVIEWS_ONE).forEach(node => reviews.appendChild(node));
        // window.location.hash = '#home';
        if (!anchor) {
          window.history.replaceState({}, '', '#home');
        }
      }

      if (page === 'more-testimonials') {
        const reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
        testimonialTags(REVIEWS_TWO).forEach(node => reviews.appendChild(node));
      }

      // make sure loaded content starts at the top...
      window.scroll(0, 0);

      // replay the anchor tag...
      document.location = window.location.hash;
    }).catch((error) => {
      // TODO: route to 404 error page
      console.error('Error:', error); // eslint-disable-line
    });
}

// get route
export function onRouterEventHandler(e) {
  if (e) e.preventDefault();

  const { pathname } = window.location;
  let { hash } = window.location;
  if (pathname === '/' && hash === '') {
    hash = '#home';
  }

  // if hash is in routes[]
  if (routes.includes(hash)) {
    getRouteContent(hash.replace(/#/g, ''));
    return;
  }

  // if hash is an anchor on the home page
  getRouteContent('home', window.location.hash.replace(/#/g, ''));
}

window.addEventListener('load', (e) => {
  console.log('load event');
  onRouterEventHandler(e, window.location.hash);
}, false);

window.addEventListener('hashchange', () => {
  // if hash is in routes
  if (routes.includes(window.location.hash)) {
    onRouterEventHandler();
    return;
  }

  const { hash } = window.location;
  const idTags = document.querySelectorAll('[id]');
  let ids = [];
  idTags.forEach(tag => ids.push(`#${tag.id}`));
  // if hash has a matching id on the page its an anchor link
  if (!ids.includes(hash)) {
    ids = [];
    onRouterEventHandler();
  }
}, false);
// window.addEventListener('beforeunload', onRouterEventHandler, false);
// window.addEventListener('unload', () => {
//   console.log('unload event');
// }, false);
// window.addEventListener('loadstart', () => {
//   console.log('loadstart event');
// }, false);
window.addEventListener('error', () => {
  console.log('error event');
}, false);
