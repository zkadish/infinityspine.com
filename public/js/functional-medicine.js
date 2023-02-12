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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/functional-medicine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/functional-medicine.js":
/*!***************************************!*\
  !*** ./src/js/functional-medicine.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetch */ \"./src/js/utils/fetch.js\");\n/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/html */ \"./src/js/utils/html.js\");\n\n\nvar pageCopy = document.querySelector('.page-copy');\nconsole.log('functional medicine loaded'); // Functional Medicine\n\nfetch('http://wp.infinityspine.com/wp-json/wp/v2/pages/2562').then(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  var frag = Object(_utils_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(res.content.rendered);\n  pageCopy.appendChild(frag);\n}).then(function () {\n  pageCopy.classList.add('fade-in');\n})[\"catch\"](function (err) {\n  console.error(err);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZnVuY3Rpb25hbC1tZWRpY2luZS5qcz85Zjc1Il0sIm5hbWVzIjpbInBhZ2VDb3B5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsImhhbmRsZUVycm9ycyIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsImZyYWciLCJkb2N1bWVudEZyYWciLCJjb250ZW50IiwicmVuZGVyZWQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosRSxDQUVBOztBQUNBQyxLQUFLLENBQUMsc0RBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1FDLG9EQURSLEVBRUdELElBRkgsQ0FFUSxVQUFDRSxRQUFEO0FBQUEsU0FBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxDQUZSLEVBR0dILElBSEgsQ0FHUSxVQUFDSSxHQUFELEVBQVM7QUFDYixNQUFNQyxJQUFJLEdBQUdDLDJEQUFZLENBQUNGLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxRQUFiLENBQXpCO0FBQ0FkLFVBQVEsQ0FBQ2UsV0FBVCxDQUFxQkosSUFBckI7QUFDRCxDQU5ILEVBT0dMLElBUEgsQ0FPUSxZQUFNO0FBQ1ZOLFVBQVEsQ0FBQ2dCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFNBQXZCO0FBQ0QsQ0FUSCxXQVVTLFVBQUNDLEdBQUQsRUFBUztBQUNkZixTQUFPLENBQUNnQixLQUFSLENBQWNELEdBQWQ7QUFDRCxDQVpIIiwiZmlsZSI6Ii4vc3JjL2pzL2Z1bmN0aW9uYWwtbWVkaWNpbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGFuZGxlRXJyb3JzIGZyb20gJy4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IGRvY3VtZW50RnJhZyBmcm9tICcuL3V0aWxzL2h0bWwnO1xuXG5jb25zdCBwYWdlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvcHknKTtcblxuY29uc29sZS5sb2coJ2Z1bmN0aW9uYWwgbWVkaWNpbmUgbG9hZGVkJyk7XG5cbi8vIEZ1bmN0aW9uYWwgTWVkaWNpbmVcbmZldGNoKCdodHRwOi8vd3AuaW5maW5pdHlzcGluZS5jb20vd3AtanNvbi93cC92Mi9wYWdlcy8yNTYyJylcbiAgLnRoZW4oaGFuZGxlRXJyb3JzKVxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudEZyYWcocmVzLmNvbnRlbnQucmVuZGVyZWQpO1xuICAgIHBhZ2VDb3B5LmFwcGVuZENoaWxkKGZyYWcpO1xuICB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgcGFnZUNvcHkuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/functional-medicine.js\n");

/***/ }),

/***/ "./src/js/utils/fetch.js":
/*!*******************************!*\
  !*** ./src/js/utils/fetch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar handleErrors = function handleErrors(response) {\n  if (!response.ok) {\n    throw Error(response.statusText);\n  }\n\n  return response;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleErrors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZmV0Y2guanM/MzZjNCJdLCJuYW1lcyI6WyJoYW5kbGVFcnJvcnMiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUNqQyxNQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixVQUFNQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csVUFBVixDQUFYO0FBQ0Q7O0FBQ0QsU0FBT0gsUUFBUDtBQUNELENBTEQ7O0FBT2VELDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL3V0aWxzL2ZldGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlRXJyb3JzID0gKHJlc3BvbnNlKSA9PiB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVFcnJvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/fetch.js\n");

/***/ }),

/***/ "./src/js/utils/html.js":
/*!******************************!*\
  !*** ./src/js/utils/html.js ***!
  \******************************/
/*! exports provided: testimonialTags, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testimonialTags\", function() { return testimonialTags; });\n/**\n * @param {string} token\n * There are 2 tokens in the constants file\n * testimonialTags - builds the necessary html for the reviews\n * and testimonials on the home page and testimonials page\n */\nfunction testimonialTags(token) {\n  var scriptToken = document.createElement('script');\n  scriptToken.setAttribute('type', 'text/javascript');\n  scriptToken.innerHTML = \"\\n    var review_token = \\\"\".concat(token, \"\\\"; \\n    var review_target = 'review-container';\\n  \");\n  var scriptReview = document.createElement('script');\n  scriptReview.setAttribute('type', 'text/javascript');\n  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7');\n  var reviewContainer = document.createElement('div');\n  reviewContainer.id = 'review-container';\n  return [scriptToken, scriptReview, reviewContainer];\n}\n/**\n * @param [string] - a string of html tags\n * documentFrag takes a string and returns it as a node element fragment\n */\n\nvar documentFrag = function documentFrag(string) {\n  return document.createRange().createContextualFragment(string);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (documentFrag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvaHRtbC5qcz81ODExIl0sIm5hbWVzIjpbInRlc3RpbW9uaWFsVGFncyIsInRva2VuIiwic2NyaXB0VG9rZW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzY3JpcHRSZXZpZXciLCJyZXZpZXdDb250YWluZXIiLCJpZCIsImRvY3VtZW50RnJhZyIsInN0cmluZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Ozs7OztBQU1PLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQ3JDLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0FGLGFBQVcsQ0FBQ0csWUFBWixDQUF5QixNQUF6QixFQUFpQyxpQkFBakM7QUFDQUgsYUFBVyxDQUFDSSxTQUFaLHdDQUN3QkwsS0FEeEI7QUFLQSxNQUFNTSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBRyxjQUFZLENBQUNGLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsaUJBQWxDO0FBQ0FFLGNBQVksQ0FBQ0YsWUFBYixDQUEwQixLQUExQixFQUFpQyxnREFBakM7QUFFQSxNQUFNRyxlQUFlLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF4QjtBQUNBSSxpQkFBZSxDQUFDQyxFQUFoQixHQUFxQixrQkFBckI7QUFFQSxTQUFPLENBQUNQLFdBQUQsRUFBY0ssWUFBZCxFQUE0QkMsZUFBNUIsQ0FBUDtBQUNEO0FBRUQ7Ozs7O0FBSUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRDtBQUFBLFNBQ25CUixRQUFRLENBQUNTLFdBQVQsR0FBdUJDLHdCQUF2QixDQUFnREYsTUFBaEQsQ0FEbUI7QUFBQSxDQUFyQjs7QUFJZUQsMkVBQWYiLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvaHRtbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gKiBUaGVyZSBhcmUgMiB0b2tlbnMgaW4gdGhlIGNvbnN0YW50cyBmaWxlXG4gKiB0ZXN0aW1vbmlhbFRhZ3MgLSBidWlsZHMgdGhlIG5lY2Vzc2FyeSBodG1sIGZvciB0aGUgcmV2aWV3c1xuICogYW5kIHRlc3RpbW9uaWFscyBvbiB0aGUgaG9tZSBwYWdlIGFuZCB0ZXN0aW1vbmlhbHMgcGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVzdGltb25pYWxUYWdzKHRva2VuKSB7XG4gIGNvbnN0IHNjcmlwdFRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdFRva2VuLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgc2NyaXB0VG9rZW4uaW5uZXJIVE1MID0gKGBcbiAgICB2YXIgcmV2aWV3X3Rva2VuID0gXCIke3Rva2VufVwiOyBcbiAgICB2YXIgcmV2aWV3X3RhcmdldCA9ICdyZXZpZXctY29udGFpbmVyJztcbiAgYCk7XG5cbiAgY29uc3Qgc2NyaXB0UmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdFJldmlldy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gIHNjcmlwdFJldmlldy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3Jldmlld3Nvbm15d2Vic2l0ZS5jb20vanMvZW1iZWQuanM/dj03Jyk7XG5cbiAgY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldmlld0NvbnRhaW5lci5pZCA9ICdyZXZpZXctY29udGFpbmVyJztcblxuICByZXR1cm4gW3NjcmlwdFRva2VuLCBzY3JpcHRSZXZpZXcsIHJldmlld0NvbnRhaW5lcl07XG59XG5cbi8qKlxuICogQHBhcmFtIFtzdHJpbmddIC0gYSBzdHJpbmcgb2YgaHRtbCB0YWdzXG4gKiBkb2N1bWVudEZyYWcgdGFrZXMgYSBzdHJpbmcgYW5kIHJldHVybnMgaXQgYXMgYSBub2RlIGVsZW1lbnQgZnJhZ21lbnRcbiAqL1xuY29uc3QgZG9jdW1lbnRGcmFnID0gKHN0cmluZykgPT4gKFxuICBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudEZyYWc7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/utils/html.js\n");

/***/ })

/******/ });