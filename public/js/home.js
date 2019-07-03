/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: MAIN_NAV, REVIEWS_ONE, REVIEWS_TWO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_NAV", function() { return MAIN_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REVIEWS_ONE", function() { return REVIEWS_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REVIEWS_TWO", function() { return REVIEWS_TWO; });
var MAIN_NAV = ['about', 'treatments', 'testimonials', 'blog', 'forms', 'contact'];
var REVIEWS_ONE = 'uxte1J82H2vgWAbiXjypx3VRQYUQFwvYoHsy9HQWbYlSE4USBY';
var REVIEWS_TWO = 'Gx4RiWADI875OX4K4uiWJiVqmbm5cpGf8UM9DT6WYRBQB5PJOK';


/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/js/router.js");

var treatmentRoutes = _router__WEBPACK_IMPORTED_MODULE_0__["routes"].slice(0, 4);
var treatmentBtns = document.querySelectorAll('.treatments__btn');
var testimonialsBtn = document.querySelector('.testimonials__btn button');
var blogPreviewBtns = document.querySelectorAll('.articles-preview__btn');
var blogPreviewImages = document.querySelectorAll('.articles-preview-image img');
var blogPreviewTitles = document.querySelectorAll('.articles-preview__post h2');
var blogPreviewExcerpts = document.querySelectorAll('.articles-preview__excerpt');
fetch('http://infinityspine.com/wp-json/wp/v2/posts?per_page=2').then(function (response) {
  return response.json();
}).then(function (posts) {
  var featuredMedia = posts.map(function (post) {
    return post.featured_media;
  });
  var blogTitles = posts.map(function (post) {
    return post.title.rendered;
  });
  var blogExcerpt = posts.map(function (post) {
    return post.excerpt.rendered;
  });
  blogPreviewTitles.forEach(function (t, i) {
    var title = t;
    if (!blogTitles[i]) return;
    title.innerHTML = blogTitles[i];
  });
  blogPreviewExcerpts.forEach(function (e, i) {
    var excerpt = e;
    if (!blogExcerpt[i]) return;
    var index = blogExcerpt[i].indexOf('</p>');
    var html = "".concat(blogExcerpt[i].slice(0, index), "</p>");
    excerpt.innerHTML = html;
  }); // debugger

  Promise.all(featuredMedia.map(function (media) {
    return fetch("http://infinityspine.com/wp-json/wp/v2/media/".concat(media)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return data.media_details.sizes.medium;
    });
  })).then(function (arr) {
    // debugger
    blogPreviewImages.forEach(function (img, i) {
      if (!arr[i]) return undefined;
      return img.setAttribute('src', arr[i].source_url);
    });
  });
}); // treatments read-more buttons

treatmentBtns.forEach(function (btn, i) {
  function treatmentBtnsClickHandler() {
    window.history.pushState(null, null, treatmentRoutes[i]);
    Object(_router__WEBPACK_IMPORTED_MODULE_0__["onRouterEventHandler"])();
  }

  btn.addEventListener('click', treatmentBtnsClickHandler);
});
blogPreviewBtns.forEach(function (btn, i) {
  function blogPreviewBtnsClickHandler(e) {
    window.history.pushState(null, null, '#dr-thoma-articles');
    Object(_router__WEBPACK_IMPORTED_MODULE_0__["onRouterEventHandler"])(e, i);
  }

  btn.addEventListener('click', blogPreviewBtnsClickHandler);
}); // testimonials more button

function testimonialsBtnClickHandler() {
  window.history.pushState(null, null, '#more-testimonials');
  Object(_router__WEBPACK_IMPORTED_MODULE_0__["onRouterEventHandler"])();
}

testimonialsBtn.addEventListener('click', testimonialsBtnClickHandler);
var splash01 = document.querySelector('#splash-01');

function matchMedia() {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    // console.log('home.js - desk1920');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1919px) and (min-width: 1600px)').matches) {
    // console.log('home.js - desk1600');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1599px) and (min-width: 1440px)').matches) {
    // console.log('home.js - desk1440');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1439px) and (min-width: 1280px)').matches) {
    // console.log('home.js - desk1280');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1279px) and (min-width: 1024px)').matches) {
    // console.log('home.js - desk1024');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 1023px) and (min-width: 864px)').matches) {
    // console.log('home.js - tab864');
    // initMainNavButtons();
    splash01.setAttribute('src', 'img/splash-01.png');
  }

  if (window.matchMedia('(max-width: 863px) and (min-width: 480px)').matches) {
    // console.log('home.js - pho480');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }

  if (window.matchMedia('(max-width: 479px) and (min-width: 0px)').matches) {
    // console.log('home.js - phone');
    // initMobileNavButtons();
    splash01.setAttribute('src', 'img/splash-01-pho480.png');
  }
}

matchMedia();

window.onresize = function () {
  matchMedia();
};

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! exports provided: routes, onRouterEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRouterEventHandler", function() { return onRouterEventHandler; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var _window$location = window.location,
    origin = _window$location.origin,
    pathname = _window$location.pathname;
var body = document.querySelector('body');
var container = document.querySelector('.container'); // live site at infinityspine.com

var root = '/'; // localhost apache server

if (pathname === '/infinity-spine/public/') {
  root = '/infinity-spine/public/';
} // infinityspine.com/new


if (pathname === '/new/') {
  root = '/new/';
}

var routes = ['#nucca-chiropractic', '#sports-physiotherapy', '#functional-medicine', '#red-near-infrared-therapy', '#mission-vision', '#about-dr-thoma', '#corrective-exercises', '#performance-exercise', '#customized-nutrition', '#welcome', '#dr-thoma-articles', '#new-patient-forms', '#faqs', '#more-testimonials', '#contact', '#directions', '#home'];
var page = window.location.hash;

function testimonialTags(token) {
  // TODO: look for a better solution... Cache the original HTML?
  var scriptToken = document.createElement('script');
  scriptToken.setAttribute('type', 'text/javascript');
  scriptToken.innerHTML = "\n    var review_token = \"".concat(token, "\"; \n    var review_target = 'review-container';\n  ");
  var scriptReview = document.createElement('script');
  scriptReview.setAttribute('type', 'text/javascript');
  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7');
  var reviewContainer = document.createElement('div');
  reviewContainer.id = 'review-container';
  return [scriptToken, scriptReview, reviewContainer];
}

function getRouteContent(newRoute, anchor, article) {
  // const route = newRoute.split('?')[0];
  // console.log(newRoute, anchor, article);
  fetch("".concat(origin).concat(root, "pages/").concat(newRoute, ".html")).then(function (response) {
    return response.text();
  }).then(function (response) {
    // remove javascript page <script></script> if it exists
    var pageScript = document.querySelectorAll("[src=\"js/".concat(page.replace('#', ''), ".js\"]"));

    if (pageScript) {
      pageScript.forEach(function (script) {
        body.removeChild(script);
      });
    } // reset page


    page = newRoute; // update "master page"

    container.innerHTML = response;
  }).then(function () {
    var script = document.createElement('script');
    script.setAttribute('id', page); // route specific HTML and Javascript

    if (page === 'home' || page === '') {
      var reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');
      script.setAttribute('src', 'js/home.js'); // insert page specific javascript

      body.appendChild(script);
      testimonialTags(_constants__WEBPACK_IMPORTED_MODULE_0__["REVIEWS_ONE"]).forEach(function (node) {
        return reviews.appendChild(node);
      });

      if (!anchor) {
        window.history.replaceState({}, '', '#home');
      }
    }

    if (page === 'contact') {
      script.setAttribute('src', 'js/contact.js'); // insert page specific javascript

      body.appendChild(script);

      if (!anchor) {
        window.history.replaceState({}, '', '#contact');
      }
    }

    if (page === 'dr-thoma-articles') {
      script.setAttribute('src', 'js/dr-thoma-articles.js'); // insert page specific javascript

      body.appendChild(script);

      if (!anchor) {
        window.history.replaceState({}, '', "#dr-thoma-articles?article=".concat(article));
      }
    }

    if (page === 'more-testimonials') {
      var _reviews = document.querySelector('.testimonials .mdc-layout-grid__cell');

      testimonialTags(_constants__WEBPACK_IMPORTED_MODULE_0__["REVIEWS_TWO"]).forEach(function (node) {
        return _reviews.appendChild(node);
      });
    } // make sure loaded content starts at the top...


    window.scroll(0, 0); // replay the anchor tag...

    document.location = window.location.hash;
  }).catch(function (error) {
    // TODO: route to 404 error page
    console.error('Error:', error); // eslint-disable-line
  });
} // get route


function onRouterEventHandler(e, article) {
  // NOTE: if route gets here with params do something with params...
  if (e) e.preventDefault();
  var hash = window.location.hash.split('?')[0];

  if (pathname === root && hash === '') {
    hash = '#home';
  } // if hash is in routes[]


  if (routes.includes(hash)) {
    var route = hash.replace(/#/g, '').split('?')[0]; // const params = hash.split('?')[1] || null;
    // console.log(article);
    // getRouteContent(hash.replace(/#/g, ''));

    getRouteContent(route, '', article);
    return;
  }

  var dataRoutes = _toConsumableArray(document.querySelectorAll('[data-route]')).map(function (r) {
    return r.dataset.route.replace('#', '');
  });

  var ids = _toConsumableArray(document.querySelectorAll('[id]')).map(function (id) {
    return id.id;
  }); // some anchors are also routes
  // the main menu buttons work this way
  // when on the home page the btns are anchors
  // when on another page the btns take the
  // user back to the home page and the anchors
  // spot on the home page


  var routesAll = [].concat(_toConsumableArray(ids), _toConsumableArray(dataRoutes));
  var isAnchor = routesAll.some(function (route) {
    return route === hash.replace('#', '');
  });

  if (!isAnchor) {
    // getRouteContent('404', window.location.hash.replace(/#/g, ''));
    window.location = 'pages/404.html';
    return;
  } // if hash is an anchor on the home page


  getRouteContent('home', window.location.hash.replace(/#/g, ''));
}
window.addEventListener('load', function (e) {
  var article = null;
  var hash = window.location.hash;

  if (hash.includes('article')) {
    article = hash.slice(hash.indexOf('?article') + 9);
  } // const hash = window.location.hash.split('?')[0];
  // onRouterEventHandler(e, hash.split('?')[0]);


  onRouterEventHandler(e, article);
}, false);
window.addEventListener('hashchange', function (e) {
  var article = null;
  var hash = window.location.hash;

  if (hash.includes('article')) {
    article = hash.slice(hash.indexOf('?article') + 9);
  } // const hash = window.location.hash.split('?')[0];
  // if hash is in routes


  if (routes.includes(hash.split('?')[0])) {
    onRouterEventHandler(e, article);
    return;
  } // const { hash } = window.location;


  var idTags = document.querySelectorAll('[id]');
  var ids = [];
  idTags.forEach(function (tag) {
    return ids.push("#".concat(tag.id));
  }); // if hash has a matching id on the page its an anchor link

  if (!ids.includes(hash)) {
    ids = [];
    onRouterEventHandler();
  }
}, false); // window.addEventListener('beforeunload', () => {
//   console.log('beforeunload');
// }, false);
// window.addEventListener('unload', () => {
//   console.log('unload event');
// }, false);
// window.addEventListener('loadstart', () => {
//   console.log('loadstart event');
// }, false);

window.addEventListener('error', function () {
  console.log('error event'); // eslint-disable-line
}, false);

/***/ })

/******/ });
//# sourceMappingURL=home.js.map