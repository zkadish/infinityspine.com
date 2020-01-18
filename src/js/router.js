import { ROUTES, REVIEWS_KEY_ONE, REVIEWS_KEY_TWO } from './constants';
import documentFrag, { testimonialTags } from './utils/html';

const { origin, pathname } = window.location;
const body = document.querySelector('body');
const container = document.querySelector('.container');

// live site at infinityspine.com
let root = '/';

// localhost apache server
if (pathname.includes('/infinity-spine/public/')) {
  root = '/infinity-spine/public/';
}

// when site runs on new.infinityspine.com
// folder is public_html/new/
if (pathname === '/new/') {
  root = '/new/';
}

// get the current page on load
// TODO: account for params?
let currentPage = window.location.hash.replace('#', '');
const removePageScript = (script) => {
  const pageScript = document.querySelectorAll(`[src="js/${script}.js"]`);
  if (pageScript.length > 0) {
    pageScript.forEach((tag) => body.removeChild(tag));
  }
};

function getRouteContent(newRoute, anchor, article, pageId) {
  fetch(`${origin}${root}pages/${newRoute}.html`)
    .then((response) => response.text())
    .then((pageHTML) => {
      // before navigating to the new page remove
      // the current page's <script> tag
      removePageScript(currentPage);
      // update current page with the new route so script tag
      // can be removed on the next route change
      currentPage = newRoute;
      const frag = documentFrag(pageHTML);
      container.innerHTML = '';
      // update "index.html"
      container.appendChild(frag);
    }).then(() => {
      // create script tag for the newRoute
      const script = document.createElement('script');
      script.setAttribute('id', newRoute);

      switch (newRoute) {
        case 'home' || '': {
          const reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
          const contactScript = document.querySelectorAll('[src="js/home.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/home.js');
            body.appendChild(script);
          }

          testimonialTags(REVIEWS_KEY_ONE)
            .forEach((node) => reviews.appendChild(node));

          if (!anchor) {
            window.history.replaceState({}, '', '#home');
          }
          break;
        }
        case 'contact': {
          const contactScript = document.querySelectorAll('[src="js/contact.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/contact.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#contact');
          }
          break;
        }
        case 'directions': {
          const contactScript = document.querySelectorAll('[src="js/directions.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/directions.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#directions');
          }
          break;
        }
        case 'nucca-chiropractic': {
          const contactScript = document.querySelectorAll('[src="js/nucca-chiropractic.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/nucca-chiropractic.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#nucca-chiropractic');
          }
          break;
        }
        case 'sports-physiotherapy': {
          const contactScript = document.querySelectorAll('[src="js/sports-physiotherapy.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/sports-physiotherapy.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#sports-physiotherapy');
          }
          break;
        }
        case 'functional-medicine': {
          const contactScript = document.querySelectorAll('[src="js/functional-medicine.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/functional-medicine.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#functional-medicine');
          }
          break;
        }
        case 'red-light-therapy': {
          const contactScript = document.querySelectorAll('[src="js/red-light-therapy.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/red-light-therapy.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#red-light-therapy');
          }
          break;
        }
        case 'meet-dr-thoma': {
          const contactScript = document.querySelectorAll('[src="js/meet-dr-thoma.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/meet-dr-thoma.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#meet-dr-thoma');
          }
          break;
        }
        case 'mission-vision': {
          const contactScript = document.querySelectorAll('[src="js/mission-vision.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/mission-vision.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#mission-vision');
          }
          break;
        }
        case 'new-patient-forms': {
          const contactScript = document.querySelectorAll('[src="js/new-patient-forms.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/new-patient-forms.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#new-patient-forms');
          }
          break;
        }
        case 'faqs': {
          const contactScript = document.querySelectorAll('[src="js/faqs.js"]');
          if (contactScript.length === 0) {
            script.setAttribute('src', 'js/faqs.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', '#faqs');
          }
          break;
        }
        case 'dr-thoma-articles': {
          const articlesScript = document.querySelectorAll('[src="js/dr-thoma-articles.js"]');
          if (articlesScript) {
            articlesScript.forEach((s) => {
              body.removeChild(s);
            });
          }
          script.setAttribute('src', 'js/dr-thoma-articles.js');
          body.appendChild(script);

          if (!anchor) {
            window.history.replaceState({}, '', `#dr-thoma-articles?article=${article}`);
          }
          break;
        }
        case 'more-testimonials': {
          const reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
          testimonialTags(REVIEWS_KEY_TWO)
            .forEach((node) => reviews.appendChild(node));
          break;
        }
        case 'default-page': {
          const defaultPageScript = document.querySelectorAll('[src="js/default-page.js"]');
          if (defaultPageScript.length === 0) {
            script.setAttribute('src', 'js/default-page.js');
            body.appendChild(script);
          }

          if (!anchor) {
            window.history.replaceState({}, '', `#infinite-mind-retreat?page=${pageId}`);
          }
          break;
        }
        default:
          // Do nothing
          break;
      }

      // make sure loaded content starts at the top...
      window.scroll(0, 0);

      // replay the anchor tag...
      document.location = window.location.hash;
    })
    .catch((error) => {
      console.error('Error:', error); // eslint-disable-line
      window.location = 'pages/404.html';
    });
}

// get route
export function onRouterEventHandler(e, article) {
  if (e) e.preventDefault();
  let hash = window.location.hash.split('?')[0];
  const wpRoutes = JSON.parse(localStorage.wpRoutes).map((r) => r.slug);
  const wpPageIds = JSON.parse(localStorage.wpRoutes).map((r) => r.pageId);

  if (pathname === root && hash === '') {
    hash = '#home';
  }

  if (ROUTES.includes(hash)) {
    const route = hash.replace(/#/g, '').split('?')[0];
    getRouteContent(route, '', article);
    return;
  }

  if (wpRoutes.includes(hash.replace('-1', ''))) {
    const index = wpRoutes.findIndex((r) => r === hash);
    getRouteContent('default-page', '', article, wpPageIds[index]);
    return;
  }

  // handle anchor hrefs
  const dataRoutes = [...document.querySelectorAll('[data-route]')]
    .map((r) => r.dataset.route.replace('#', ''));

  const ids = [...document.querySelectorAll('[id]')]
    .map((id) => id.id);

  // some anchors are also routes
  // the main menu buttons work this way
  // when on the home page the btns are anchors
  // when on another page the btns take the
  // user back to the home page and the anchors
  // spot on the home page
  const routesAll = [...ids, ...dataRoutes];
  const isAnchor = routesAll.some((route) => route === hash.replace('#', ''));

  if (!isAnchor) {
    window.location = 'pages/404.html';
    return;
  }

  // if hash is an anchor on the home page
  getRouteContent('home', window.location.hash.replace(/#/g, ''));
}

/**
 * When user refreshes the browser
 * onLoad event listener
 * Handler - anonymous function
 * @param {object} - event
 */
window.addEventListener('load', (e) => {
  let article = null;
  const { hash } = window.location;
  if (hash.includes('article')) {
    article = hash.slice(hash.indexOf('?article') + 9);
  }

  // handle apache dev environment
  // this should handle all environments
  let [uriPath] = window.location.pathname.split();
  [uriPath] = uriPath.replace(root, '').split('/');
  // handle path names
  if (uriPath) {
    window.location = `${root}#${uriPath}`;
    return;
  }

  onRouterEventHandler(e, article);
}, false);

/**
 * When user changes the URL
 * onHashchange event listener
 * Handler - anonymous function
 * @param {object} - event
 */
window.addEventListener('hashchange', (e) => {
  if (e.oldURL.split('?')[0] === e.newURL) {
    window.history.replaceState({}, '', `#infinite-mind-retreat?${e.oldURL.split('?')[1]}`);
    return;
  }

  let article = null;
  const { hash } = window.location;

  // TODO: use articleNum() from dr-thoma-articles.js
  // get article num
  if (hash.includes('article')) {
    article = hash.slice(hash.indexOf('?article') + 9);
  }

  // if hash is in routes
  if (ROUTES.includes(hash.split('?')[0])) {
    onRouterEventHandler(e, article);
    return;
  }

  // select all dom elements with id attributes
  const idTags = document.querySelectorAll('[id]');
  let ids = [];
  idTags.forEach((tag) => ids.push(`#${tag.id}`));

  // if hash has a matching id on the page its an anchor link
  // execute the onRouterEventHandler
  if (!ids.includes(hash)) {
    ids = [];
    onRouterEventHandler();
  }
}, false);

// these events might get used in a refactor of the router
// window.addEventListener('beforeunload', () => {
//   console.log('beforeunload');
// }, false);

// window.addEventListener('unload', () => {
//   console.log('unload event');
// }, false);

window.addEventListener('error', (err) => {
  console.error('error event', err); // eslint-disable-line
}, false);
