import { REVIEWS_ONE, REVIEWS_TWO } from './constants';

const { origin, pathname } = window.location;
const body = document.querySelector('body');
const container = document.querySelector('.container');
const path = '/infinity-spine/public/';
const newSite = '/infinity-spine/new/public/';
let root = '/';
// debugger
if (pathname === '/infinity-spine/public/') {
  debugger
  root = path;
}
if (pathname === '/infinity-spine/new/public/') {
  debugger
  root = newSite;
}

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
  '#dr-thoma-articles',
  '#new-patient-forms',
  '#faqs',
  '#more-testimonials',
  '#contact',
  '#directions',
  '#home',
];

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
  fetch(`${origin}${root}pages/${newRoute}.html`)
    .then(response => response.text())
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
      container.innerHTML = response;
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

        if (!anchor) {
          window.history.replaceState({}, '', '#home');
        }
      }

      if (page === 'contact') {
        script.setAttribute('src', 'js/contact.js');
        // insert page specific javascript
        body.appendChild(script);

        if (!anchor) {
          window.history.replaceState({}, '', '#contact');
        }
      }

      if (page === 'dr-thoma-articles') {
        script.setAttribute('src', 'js/dr-thoma-articles.js');
        // insert page specific javascript
        body.appendChild(script);

        if (!anchor) {
          window.history.replaceState({}, '', '#dr-thoma-articles');
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
    })
    .catch((error) => {
      // TODO: route to 404 error page
      console.error('Error:', error); // eslint-disable-line
    });
}

// get route
export function onRouterEventHandler(e, blog) {
  // console.log(blog);
  // debugger;

  if (e) e.preventDefault();

  let { hash } = window.location;

  if (pathname === root && hash === '') {
    hash = '#home';
  }

  // if hash is in routes[]
  if (routes.includes(hash)) {
    getRouteContent(hash.replace(/#/g, ''));
    return;
  }


  const dataRoutes = [...document.querySelectorAll('[data-route]')]
    .map(r => r.dataset.route.replace('#', ''));

  const ids = [...document.querySelectorAll('[id]')]
    .map(id => id.id);

  // some anchors are also routes
  // the main menu buttons work this way
  // when on the home page the btns are anchors
  // when on another page the btns take the
  // user back to the home page and the anchors
  // spot on the home page
  const routesAll = [...ids, ...dataRoutes];
  const isAnchor = routesAll.some(route => route === hash.replace('#', ''));

  if (!isAnchor) {
    // getRouteContent('404', window.location.hash.replace(/#/g, ''));
    window.location = 'pages/404.html';
    return;
  }

  // if hash is an anchor on the home page
  getRouteContent('home', window.location.hash.replace(/#/g, ''));
}

window.addEventListener('load', (e) => {
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

// window.addEventListener('beforeunload', () => {
//   console.log('beforeunload');
// }, false);

// window.addEventListener('unload', () => {
//   console.log('unload event');
// }, false);

// window.addEventListener('loadstart', () => {
//   console.log('loadstart event');
// }, false);

window.addEventListener('error', () => {
  console.log('error event'); // eslint-disable-line
}, false);
