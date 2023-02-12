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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/default-page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/default-page.js":
/*!********************************!*\
  !*** ./src/js/default-page.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_script_tag_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/script-tag-injection */ \"./src/js/utils/script-tag-injection.js\");\n/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/html */ \"./src/js/utils/html.js\");\n\n\nvar hash = window.location.hash.split('?')[0];\nvar title = hash.replace('#', '').split('-').join(' ');\nvar page = window.location.hash.split('?')[1].split('=')[1];\nvar h2 = document.querySelector('.default-page .call-to-action__title');\nh2.innerHTML = title;\nvar pageCopy = document.querySelector('.default-page .page__copy');\npageCopy.innerHTML = '';\nfetch(\"http://wp.infinityspine.com/wp-json/wp/v2/pages/\".concat(page)).then(function (response) {\n  if (!response.ok) {\n    throw new Error('Response failed!');\n  }\n\n  return response.json();\n}).then(function (json) {\n  pageCopy.innerHTML = '';\n  var rendered = json.content.rendered;\n  var frag = Object(_utils_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rendered); // This magic tests for <script> tags in the content...\n  // pulls them out rebuilds them and appends them back\n  // into the page... only if there is a <script> tag\n  // that has innerHTML content... those tags have to be\n  // re-injected back onto the page or they will be ignored\n  // by the browser...\n\n  var onload = function onload(scripts, message) {\n    // if there are scripts once the last one has loaded\n    console.log(message);\n    Object(_utils_script_tag_injection__WEBPACK_IMPORTED_MODULE_0__[\"injectScripts\"])(scripts, pageCopy);\n  }; // prepare page content\n\n\n  Object(_utils_script_tag_injection__WEBPACK_IMPORTED_MODULE_0__[\"filterScriptTags\"])(frag, onload); // add page content\n\n  pageCopy.appendChild(frag);\n})[\"catch\"](function (err) {\n  console.error(err);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzPzMzYzQiXSwibmFtZXMiOlsiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwic3BsaXQiLCJ0aXRsZSIsInJlcGxhY2UiLCJqb2luIiwicGFnZSIsImgyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicGFnZUNvcHkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwicmVuZGVyZWQiLCJjb250ZW50IiwiZnJhZyIsImRvY3VtZW50RnJhZyIsIm9ubG9hZCIsInNjcmlwdHMiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImluamVjdFNjcmlwdHMiLCJmaWx0ZXJTY3JpcHRUYWdzIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUFoQixDQUFxQkcsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBYjtBQUNBLElBQU1DLEtBQUssR0FBR0osSUFBSSxDQUFDSyxPQUFMLENBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQkYsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNHLElBQWpDLENBQXNDLEdBQXRDLENBQWQ7QUFDQSxJQUFNQyxJQUFJLEdBQUdOLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBaEIsQ0FBcUJHLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLEVBQW1DQSxLQUFuQyxDQUF5QyxHQUF6QyxFQUE4QyxDQUE5QyxDQUFiO0FBRUEsSUFBTUssRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0NBQXZCLENBQVg7QUFDQUYsRUFBRSxDQUFDRyxTQUFILEdBQWVQLEtBQWY7QUFDQSxJQUFNUSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBakI7QUFDQUUsUUFBUSxDQUFDRCxTQUFULEdBQXFCLEVBQXJCO0FBRUFFLEtBQUssMkRBQW9ETixJQUFwRCxFQUFMLENBQ0dPLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsTUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEIsVUFBTSxJQUFJQyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9GLFFBQVEsQ0FBQ0csSUFBVCxFQUFQO0FBQ0QsQ0FOSCxFQU9HSixJQVBILENBT1EsVUFBQ0ksSUFBRCxFQUFVO0FBQ2ROLFVBQVEsQ0FBQ0QsU0FBVCxHQUFxQixFQUFyQjtBQURjLE1BRU5RLFFBRk0sR0FFT0QsSUFBSSxDQUFDRSxPQUZaLENBRU5ELFFBRk07QUFHZCxNQUFNRSxJQUFJLEdBQUdDLDJEQUFZLENBQUNILFFBQUQsQ0FBekIsQ0FIYyxDQUtkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBc0I7QUFDbkM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQUcscUZBQWEsQ0FBQ0osT0FBRCxFQUFVWixRQUFWLENBQWI7QUFDRCxHQUpELENBWGMsQ0FnQmQ7OztBQUNBaUIsc0ZBQWdCLENBQUNSLElBQUQsRUFBT0UsTUFBUCxDQUFoQixDQWpCYyxDQW1CZDs7QUFDQVgsVUFBUSxDQUFDa0IsV0FBVCxDQUFxQlQsSUFBckI7QUFDRCxDQTVCSCxXQTZCUyxVQUFDVSxHQUFELEVBQVM7QUFDZEwsU0FBTyxDQUFDTSxLQUFSLENBQWNELEdBQWQ7QUFDRCxDQS9CSCIsImZpbGUiOiIuL3NyYy9qcy9kZWZhdWx0LXBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWx0ZXJTY3JpcHRUYWdzLCBpbmplY3RTY3JpcHRzIH0gZnJvbSAnLi91dGlscy9zY3JpcHQtdGFnLWluamVjdGlvbic7XG5pbXBvcnQgZG9jdW1lbnRGcmFnIGZyb20gJy4vdXRpbHMvaHRtbCc7XG5cbmNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzBdO1xuY29uc3QgdGl0bGUgPSBoYXNoLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJy0nKS5qb2luKCcgJyk7XG5jb25zdCBwYWdlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXS5zcGxpdCgnPScpWzFdO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXBhZ2UgLmNhbGwtdG8tYWN0aW9uX190aXRsZScpO1xuaDIuaW5uZXJIVE1MID0gdGl0bGU7XG5jb25zdCBwYWdlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXBhZ2UgLnBhZ2VfX2NvcHknKTtcbnBhZ2VDb3B5LmlubmVySFRNTCA9ICcnO1xuXG5mZXRjaChgaHR0cDovL3dwLmluZmluaXR5c3BpbmUuY29tL3dwLWpzb24vd3AvdjIvcGFnZXMvJHtwYWdlfWApXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2UgZmFpbGVkIScpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KVxuICAudGhlbigoanNvbikgPT4ge1xuICAgIHBhZ2VDb3B5LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHsgcmVuZGVyZWQgfSA9IGpzb24uY29udGVudDtcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnRGcmFnKHJlbmRlcmVkKTtcblxuICAgIC8vIFRoaXMgbWFnaWMgdGVzdHMgZm9yIDxzY3JpcHQ+IHRhZ3MgaW4gdGhlIGNvbnRlbnQuLi5cbiAgICAvLyBwdWxscyB0aGVtIG91dCByZWJ1aWxkcyB0aGVtIGFuZCBhcHBlbmRzIHRoZW0gYmFja1xuICAgIC8vIGludG8gdGhlIHBhZ2UuLi4gb25seSBpZiB0aGVyZSBpcyBhIDxzY3JpcHQ+IHRhZ1xuICAgIC8vIHRoYXQgaGFzIGlubmVySFRNTCBjb250ZW50Li4uIHRob3NlIHRhZ3MgaGF2ZSB0byBiZVxuICAgIC8vIHJlLWluamVjdGVkIGJhY2sgb250byB0aGUgcGFnZSBvciB0aGV5IHdpbGwgYmUgaWdub3JlZFxuICAgIC8vIGJ5IHRoZSBicm93c2VyLi4uXG4gICAgY29uc3Qgb25sb2FkID0gKHNjcmlwdHMsIG1lc3NhZ2UpID0+IHtcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBzY3JpcHRzIG9uY2UgdGhlIGxhc3Qgb25lIGhhcyBsb2FkZWRcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgaW5qZWN0U2NyaXB0cyhzY3JpcHRzLCBwYWdlQ29weSk7XG4gICAgfTtcbiAgICAvLyBwcmVwYXJlIHBhZ2UgY29udGVudFxuICAgIGZpbHRlclNjcmlwdFRhZ3MoZnJhZywgb25sb2FkKTtcblxuICAgIC8vIGFkZCBwYWdlIGNvbnRlbnRcbiAgICBwYWdlQ29weS5hcHBlbmRDaGlsZChmcmFnKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/default-page.js\n");

/***/ }),

/***/ "./src/js/utils/html.js":
/*!******************************!*\
  !*** ./src/js/utils/html.js ***!
  \******************************/
/*! exports provided: testimonialTags, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testimonialTags\", function() { return testimonialTags; });\n/**\n * @param {string} token\n * There are 2 tokens in the constants file\n * testimonialTags - builds the necessary html for the reviews\n * and testimonials on the home page and testimonials page\n */\nfunction testimonialTags(token) {\n  var scriptToken = document.createElement('script');\n  scriptToken.setAttribute('type', 'text/javascript');\n  scriptToken.innerHTML = \"\\n    var review_token = \\\"\".concat(token, \"\\\"; \\n    var review_target = 'review-container';\\n  \");\n  var scriptReview = document.createElement('script');\n  scriptReview.setAttribute('type', 'text/javascript');\n  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7');\n  var reviewContainer = document.createElement('div');\n  reviewContainer.id = 'review-container';\n  return [scriptToken, scriptReview, reviewContainer];\n}\n/**\n * @param [string] - a string of html tags\n * documentFrag takes a string and returns it as a node element fragment\n */\n\nvar documentFrag = function documentFrag(string) {\n  return document.createRange().createContextualFragment(string);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (documentFrag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvaHRtbC5qcz81ODExIl0sIm5hbWVzIjpbInRlc3RpbW9uaWFsVGFncyIsInRva2VuIiwic2NyaXB0VG9rZW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzY3JpcHRSZXZpZXciLCJyZXZpZXdDb250YWluZXIiLCJpZCIsImRvY3VtZW50RnJhZyIsInN0cmluZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Ozs7OztBQU1PLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQ3JDLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0FGLGFBQVcsQ0FBQ0csWUFBWixDQUF5QixNQUF6QixFQUFpQyxpQkFBakM7QUFDQUgsYUFBVyxDQUFDSSxTQUFaLHdDQUN3QkwsS0FEeEI7QUFLQSxNQUFNTSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBRyxjQUFZLENBQUNGLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsaUJBQWxDO0FBQ0FFLGNBQVksQ0FBQ0YsWUFBYixDQUEwQixLQUExQixFQUFpQyxnREFBakM7QUFFQSxNQUFNRyxlQUFlLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF4QjtBQUNBSSxpQkFBZSxDQUFDQyxFQUFoQixHQUFxQixrQkFBckI7QUFFQSxTQUFPLENBQUNQLFdBQUQsRUFBY0ssWUFBZCxFQUE0QkMsZUFBNUIsQ0FBUDtBQUNEO0FBRUQ7Ozs7O0FBSUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRDtBQUFBLFNBQ25CUixRQUFRLENBQUNTLFdBQVQsR0FBdUJDLHdCQUF2QixDQUFnREYsTUFBaEQsQ0FEbUI7QUFBQSxDQUFyQjs7QUFJZUQsMkVBQWYiLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvaHRtbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gKiBUaGVyZSBhcmUgMiB0b2tlbnMgaW4gdGhlIGNvbnN0YW50cyBmaWxlXG4gKiB0ZXN0aW1vbmlhbFRhZ3MgLSBidWlsZHMgdGhlIG5lY2Vzc2FyeSBodG1sIGZvciB0aGUgcmV2aWV3c1xuICogYW5kIHRlc3RpbW9uaWFscyBvbiB0aGUgaG9tZSBwYWdlIGFuZCB0ZXN0aW1vbmlhbHMgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVzdGltb25pYWxUYWdzKHRva2VuKSB7XG4gIGNvbnN0IHNjcmlwdFRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdFRva2VuLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgc2NyaXB0VG9rZW4uaW5uZXJIVE1MID0gKGBcbiAgICB2YXIgcmV2aWV3X3Rva2VuID0gXCIke3Rva2VufVwiOyBcbiAgICB2YXIgcmV2aWV3X3RhcmdldCA9ICdyZXZpZXctY29udGFpbmVyJztcbiAgYCk7XG5cbiAgY29uc3Qgc2NyaXB0UmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdFJldmlldy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gIHNjcmlwdFJldmlldy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3Jldmlld3Nvbm15d2Vic2l0ZS5jb20vanMvZW1iZWQuanM/dj03Jyk7XG5cbiAgY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldmlld0NvbnRhaW5lci5pZCA9ICdyZXZpZXctY29udGFpbmVyJztcblxuICByZXR1cm4gW3NjcmlwdFRva2VuLCBzY3JpcHRSZXZpZXcsIHJldmlld0NvbnRhaW5lcl07XG59XG5cbi8qKlxuICogQHBhcmFtIFtzdHJpbmddIC0gYSBzdHJpbmcgb2YgaHRtbCB0YWdzXG4gKiBkb2N1bWVudEZyYWcgdGFrZXMgYSBzdHJpbmcgYW5kIHJldHVybnMgaXQgYXMgYSBub2RlIGVsZW1lbnQgZnJhZ21lbnRcbiAqL1xuY29uc3QgZG9jdW1lbnRGcmFnID0gKHN0cmluZykgPT4gKFxuICBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudEZyYWc7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/utils/html.js\n");

/***/ }),

/***/ "./src/js/utils/script-tag-injection.js":
/*!**********************************************!*\
  !*** ./src/js/utils/script-tag-injection.js ***!
  \**********************************************/
/*! exports provided: injectScripts, filterScriptTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectScripts\", function() { return injectScripts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterScriptTags\", function() { return filterScriptTags; });\nvar injectScripts = function injectScripts(scripts, parentNode) {\n  for (var i = 0; i < scripts.length; i += 1) {\n    if (scripts[i].innerHTML) {\n      parentNode.appendChild(scripts[i]);\n    }\n  }\n};\nvar filterScriptTags = function filterScriptTags(frag, callback) {\n  var scriptTags = frag.querySelectorAll('script');\n  var fragScriptTags = [];\n  var jsScriptTags = [];\n\n  for (var i = 0; i < scriptTags.length; i += 1) {\n    if (!scriptTags[i].innerHTML) {\n      fragScriptTags.push(scriptTags[i]);\n    }\n\n    if (scriptTags[i].innerHTML) {\n      jsScriptTags.push(scriptTags[i]); // mutate the original nodeList\n\n      scriptTags[i].parentNode.removeChild(scriptTags[i]);\n    }\n  }\n\n  if (fragScriptTags.length > 0) {\n    fragScriptTags[fragScriptTags.length - 1].onload = function () {\n      callback(jsScriptTags, 'scripts have loaded');\n      fragScriptTags[fragScriptTags.length - 1].onload = null;\n    };\n\n    return;\n  } // this shouldn't run unless there are no script\n  // tags being inserted withe the page content...\n\n\n  callback(jsScriptTags);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvc2NyaXB0LXRhZy1pbmplY3Rpb24uanM/NjA3MSJdLCJuYW1lcyI6WyJpbmplY3RTY3JpcHRzIiwic2NyaXB0cyIsInBhcmVudE5vZGUiLCJpIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJmaWx0ZXJTY3JpcHRUYWdzIiwiZnJhZyIsImNhbGxiYWNrIiwic2NyaXB0VGFncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmcmFnU2NyaXB0VGFncyIsImpzU2NyaXB0VGFncyIsInB1c2giLCJyZW1vdmVDaGlsZCIsIm9ubG9hZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQVVDLFVBQVYsRUFBeUI7QUFDcEQsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixPQUFPLENBQUNHLE1BQTVCLEVBQW9DRCxDQUFDLElBQUksQ0FBekMsRUFBNEM7QUFDMUMsUUFBSUYsT0FBTyxDQUFDRSxDQUFELENBQVAsQ0FBV0UsU0FBZixFQUEwQjtBQUN4QkgsZ0JBQVUsQ0FBQ0ksV0FBWCxDQUF1QkwsT0FBTyxDQUFDRSxDQUFELENBQTlCO0FBQ0Q7QUFDRjtBQUNGLENBTk07QUFRQSxJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNsRCxNQUFNQyxVQUFVLEdBQUdGLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsUUFBdEIsQ0FBbkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsRUFBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7O0FBRUEsT0FBSyxJQUFJVixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTyxVQUFVLENBQUNOLE1BQS9CLEVBQXVDRCxDQUFDLElBQUksQ0FBNUMsRUFBK0M7QUFDN0MsUUFBSSxDQUFDTyxVQUFVLENBQUNQLENBQUQsQ0FBVixDQUFjRSxTQUFuQixFQUE4QjtBQUM1Qk8sb0JBQWMsQ0FBQ0UsSUFBZixDQUFvQkosVUFBVSxDQUFDUCxDQUFELENBQTlCO0FBQ0Q7O0FBQ0QsUUFBSU8sVUFBVSxDQUFDUCxDQUFELENBQVYsQ0FBY0UsU0FBbEIsRUFBNkI7QUFDM0JRLGtCQUFZLENBQUNDLElBQWIsQ0FBa0JKLFVBQVUsQ0FBQ1AsQ0FBRCxDQUE1QixFQUQyQixDQUUzQjs7QUFDQU8sZ0JBQVUsQ0FBQ1AsQ0FBRCxDQUFWLENBQWNELFVBQWQsQ0FBeUJhLFdBQXpCLENBQXFDTCxVQUFVLENBQUNQLENBQUQsQ0FBL0M7QUFDRDtBQUNGOztBQUVELE1BQUlTLGNBQWMsQ0FBQ1IsTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM3QlEsa0JBQWMsQ0FBQ0EsY0FBYyxDQUFDUixNQUFmLEdBQXdCLENBQXpCLENBQWQsQ0FBMENZLE1BQTFDLEdBQW1ELFlBQU07QUFDdkRQLGNBQVEsQ0FBQ0ksWUFBRCxFQUFlLHFCQUFmLENBQVI7QUFDQUQsb0JBQWMsQ0FBQ0EsY0FBYyxDQUFDUixNQUFmLEdBQXdCLENBQXpCLENBQWQsQ0FBMENZLE1BQTFDLEdBQW1ELElBQW5EO0FBQ0QsS0FIRDs7QUFJQTtBQUNELEdBdEJpRCxDQXdCbEQ7QUFDQTs7O0FBQ0FQLFVBQVEsQ0FBQ0ksWUFBRCxDQUFSO0FBQ0QsQ0EzQk0iLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvc2NyaXB0LXRhZy1pbmplY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5qZWN0U2NyaXB0cyA9IChzY3JpcHRzLCBwYXJlbnROb2RlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChzY3JpcHRzW2ldLmlubmVySFRNTCkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzY3JpcHRzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJTY3JpcHRUYWdzID0gKGZyYWcsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHNjcmlwdFRhZ3MgPSBmcmFnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICBjb25zdCBmcmFnU2NyaXB0VGFncyA9IFtdO1xuICBjb25zdCBqc1NjcmlwdFRhZ3MgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcmlwdFRhZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoIXNjcmlwdFRhZ3NbaV0uaW5uZXJIVE1MKSB7XG4gICAgICBmcmFnU2NyaXB0VGFncy5wdXNoKHNjcmlwdFRhZ3NbaV0pO1xuICAgIH1cbiAgICBpZiAoc2NyaXB0VGFnc1tpXS5pbm5lckhUTUwpIHtcbiAgICAgIGpzU2NyaXB0VGFncy5wdXNoKHNjcmlwdFRhZ3NbaV0pO1xuICAgICAgLy8gbXV0YXRlIHRoZSBvcmlnaW5hbCBub2RlTGlzdFxuICAgICAgc2NyaXB0VGFnc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdFRhZ3NbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFnU2NyaXB0VGFncy5sZW5ndGggPiAwKSB7XG4gICAgZnJhZ1NjcmlwdFRhZ3NbZnJhZ1NjcmlwdFRhZ3MubGVuZ3RoIC0gMV0ub25sb2FkID0gKCkgPT4ge1xuICAgICAgY2FsbGJhY2soanNTY3JpcHRUYWdzLCAnc2NyaXB0cyBoYXZlIGxvYWRlZCcpO1xuICAgICAgZnJhZ1NjcmlwdFRhZ3NbZnJhZ1NjcmlwdFRhZ3MubGVuZ3RoIC0gMV0ub25sb2FkID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRoaXMgc2hvdWxkbid0IHJ1biB1bmxlc3MgdGhlcmUgYXJlIG5vIHNjcmlwdFxuICAvLyB0YWdzIGJlaW5nIGluc2VydGVkIHdpdGhlIHRoZSBwYWdlIGNvbnRlbnQuLi5cbiAgY2FsbGJhY2soanNTY3JpcHRUYWdzKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/script-tag-injection.js\n");

/***/ })

/******/ });