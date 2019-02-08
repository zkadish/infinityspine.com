import axios from 'axios';

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
  '#dr-thoma-blog',
];
// const reviewScripts = document.querySelectorAll('.testimonials .mdc-layout-grid__cell > *');

let page = window.location.hash;

function testimonialTags() {
  // TODO: look for a better solution... Cache the original HTML?
  const scriptToken = document.createElement('script');
  scriptToken.setAttribute('type', 'text/javascript');
  scriptToken.innerHTML = (`
    var review_token = 'uxte1J82H2vgWAbiXjypx3VRQYUQFwvYoHsy9HQWbYlSE4USBY'; 
    var review_target = 'review-container';
  `);

  const scriptReview = document.createElement('script');
  scriptReview.setAttribute('type', 'text/javascript');
  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7')

  const reviewContainer = document.createElement('div');
  reviewContainer.id = 'review-container';

  return [scriptToken, scriptReview, reviewContainer];
}

function getRouteContent(newRoute) {
  debugger;
  axios.get(`../pages/${newRoute}.html`)
    .then((response) => {
      // remove javascript page <script></script> if it exists
      const pageScript = document.querySelector(`[src="page/${newRoute}.html"]`);
      if (pageScript) body.removeChild(pageScript);

      // reset page
      page = newRoute;
      // update "master page"
      container.innerHTML = response.data;
    }).then(() => {
      const script = document.createElement('script');
      script.setAttribute('id', page);

      // route specific HTML and Javascript
      if (page === 'home') {
        const reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
        script.setAttribute('src', 'js/home.js');
        testimonialTags().forEach(node => reviews.appendChild(node));
      }

      // insert page specific javascript
      body.appendChild(script);
      // make sure loaded content starts at the top...
      window.scroll(0, 0);
      // replay the anchor tag...
      document.location = window.location.hash;
    }).catch((error) => {
      console.error('Error:', error); // eslint-disable-line
    });
}

// get route
export function onRouterEventHandler(e) {
  if (e) e.preventDefault();

  const { hash } = window.location;
  // console.log('currentHash:', newHash);
  // console.log('page', page);

  // if window.location.hash is in routes[]
  if (routes.includes(hash)) {
    getRouteContent(hash.replace(/#/g, ''));
    return;
  }

  // if hash is not in routes its an anchor on the home page
  // if page is not an empty string and current hash is not
  // current page nav to home content
  if (page && hash !== page) {
    getRouteContent('home');
  }
}

window.addEventListener('beforeunload', onRouterEventHandler, false);
window.addEventListener('load', onRouterEventHandler, false);
window.addEventListener('hashchange', onRouterEventHandler, false);
window.addEventListener('unload', () => {
  console.log('unload event');
}, false);
window.addEventListener('loadstart', () => {
  console.log('loadstart event');
}, false);
window.addEventListener('error', () => {
  console.log('error event');
}, false);

const treatmentRoutes = routes.slice(0, 4);
const treatmentsBtn = document.querySelectorAll('.treatments__btn');
// READ MORE BUTTON
// TODO: look for a better place for this Click event
// NOTE: this also exits in home.js
treatmentsBtn.forEach((btn, i) => {
  function treatmentsBtnClickHandler() {
    window.history.pushState(null, null, treatmentRoutes[i]);
    onRouterEventHandler();
  }
  btn.addEventListener('click', treatmentsBtnClickHandler);
});
