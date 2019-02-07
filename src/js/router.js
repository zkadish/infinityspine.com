import axios from 'axios';

const body = document.querySelector('body');
const container = document.querySelector('.container');
const routes = ['#nucca-chiropractic'];
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
  axios.get(`../pages/${newRoute}.html`)
    .then((response) => {
      // remove javascript page <script></script> if it exists
      const pageScript = document.querySelector(`[src="page/${newRoute}.html"]`);
      if (pageScript) body.removeChild(pageScript);

      // Note: I couldn't get selecting the nodes before
      // page content overwrites the original HTML
      // let reviewNodeList;
      // if (newRoute === 'home') {
      //   // reviewNodeList = document.querySelector('.testimonials .mdc-layout-grid__cell > *');
      //   reviewNodeList = document.querySelector('.testimonials');
      //   console.log('reviewNodeList', reviewNodeList);
      // }

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
export default function onRouterEventHandler(e) {
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

const nuccaChrioBtn = document.querySelector('.treatments__btn');

// READ MORE BUTTON
// TODO: look for a better place for this Click event
// NOTE: this also exits in home.js
function nuccaChrioBtnClickHandler() {
  // console.log('nuccaChrioBtnClickHandler');
  window.history.pushState(null, null, '#nucca-chiropractic');
  onRouterEventHandler();
}
nuccaChrioBtn.addEventListener('click', nuccaChrioBtnClickHandler);
