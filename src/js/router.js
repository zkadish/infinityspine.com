import { ROUTES, REVIEWS_KEY_ONE, REVIEWS_KEY_TWO } from './constants';
import documentFrag, { testimonialTags } from './utils/html';
import storageAvailable from './utils/localStorage';

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
// TODO: account for params? Yes! Handle all types of
// route calls with the router.
// TODO: Load HTML and JavaScript for the page every time
// and inject the page js at the bottom of the HTML being
// loaded. So that it gets removed all with the HTML when
// a new route is being loaded.
let currentPage = window.location.hash.replace('#', '');
const removePageScript = (script) => {
  const pageScript = document.querySelectorAll(`[src="js/${script}.js"]`);
  if (pageScript.length > 0) {
    pageScript.forEach((tag) => body.removeChild(tag));
  }
};
const addRouteScript = (route) => {
  const routeScripts = document.querySelectorAll(`[src="js/${route}.js"]`);
  // if route script doesn't exist create and append it
  // to the <body /> of the document
  if (routeScripts.length === 0) {
    const script = document.createElement('script');
    script.setAttribute('id', route);
    script.setAttribute('src', `js/${route}.js`);
    body.appendChild(script);
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
          addRouteScript('home');

          // take into account testimonials is a special case...
          // add the home.js???
          const reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
          testimonialTags(REVIEWS_KEY_ONE)
            .forEach((node) => reviews.appendChild(node));

          if (!anchor) {
            window.history.replaceState({}, '', '#home');
          }
          break;
        }
        case 'contact': {
          addRouteScript('contact');

          if (!anchor) {
            window.history.replaceState({}, '', '#contact');
          }
          break;
        }
        case 'directions': {
          addRouteScript('directions');

          if (!anchor) {
            window.history.replaceState({}, '', '#directions');
          }
          break;
        }
        case 'nucca-chiropractic': {
          addRouteScript('nucca-chiropractic');

          if (!anchor) {
            window.history.replaceState({}, '', '#nucca-chiropractic');
          }
          break;
        }
        case 'sports-physiotherapy': {
          addRouteScript('sports-physiotherapy');

          if (!anchor) {
            window.history.replaceState({}, '', '#sports-physiotherapy');
          }
          break;
        }
        case 'functional-medicine': {
          addRouteScript('functional-medicine');

          if (!anchor) {
            window.history.replaceState({}, '', '#functional-medicine');
          }
          break;
        }
        case 'red-light-therapy': {
          addRouteScript('red-light-therapy');

          if (!anchor) {
            window.history.replaceState({}, '', '#red-light-therapy');
          }
          break;
        }
        case 'meet-dr-thoma': {
          addRouteScript('meet-dr-thoma');

          if (!anchor) {
            window.history.replaceState({}, '', '#meet-dr-thoma');
          }
          break;
        }
        case 'mission-vision': {
          addRouteScript('mission-vision');


          if (!anchor) {
            window.history.replaceState({}, '', '#mission-vision');
          }
          break;
        }
        case 'new-patient-forms': {
          addRouteScript('new-patient-forms');

          if (!anchor) {
            window.history.replaceState({}, '', '#new-patient-forms');
          }
          break;
        }
        case 'faqs': {
          addRouteScript('faqs');

          if (!anchor) {
            window.history.replaceState({}, '', '#faqs');
          }
          break;
        }
        case 'articles': {
          const articlesScript = document.querySelectorAll('[src="js/articles.js"]');
          if (articlesScript) {
            articlesScript.forEach((s) => {
              body.removeChild(s);
            });
          }
          script.setAttribute('src', 'js/articles.js');
          body.appendChild(script);
          // addRouteScript('dr-thoma-articles');

          if (!anchor) {
            window.history.replaceState({}, '', `#articles?article=${article}`);
          }
          break;
        }
        case 'more-testimonials': {
          const reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
          testimonialTags(REVIEWS_KEY_TWO)
            .forEach((node) => reviews.appendChild(node));

          if (!anchor) {
            window.history.replaceState({}, '', '#more-testimonials');
          }
          break;
        }
        case 'default-page': { // infinite-mind-retreat
          addRouteScript('default-page');

          if (!anchor) {
            window.history.replaceState({}, '', `#infinite-mind-retreat?page=${pageId}`);
          }
          break;
        }
        default: // Do nothing
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
export default function onRouterEventHandler(e, article) {
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
    // TODO: replace with paramValue() in utils/router
    article = hash.slice(hash.indexOf('?article') + 9);
    // debugger;
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

  let articlesLength = null;
  if (!storageAvailable('localStorage')) {
    // TODO: get from window
  } else {
    articlesLength = JSON.parse(localStorage.posts).length;
  }

  let article = null;
  const { hash } = window.location;
  // debugger
  // TODO: use articleNum() from dr-thoma-articles.js
  // get article num
  if (hash.includes('article')) {
    article = hash.match(/\?articles=[0-9]*/);
    // debugger
    article = hash.slice(hash.indexOf('?article') + 9);
    if (article === 's') {
      article = articlesLength;
    }
    // debugger;
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
