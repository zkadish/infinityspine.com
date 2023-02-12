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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/get.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/get.worker.js":
/*!******************************!*\
  !*** ./src/js/get.worker.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wp_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wp-api */ \"./src/js/wp-api.js\");\n\n\nObject(_wp_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  .then((posts) => {\n    // console.log(posts);\n    // debugger\n    postMessage({ posts });\n  })\n  .catch((err) => {\n    console.log(err);\n  });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2V0Lndvcmtlci5qcz9kYjUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBbUM7O0FBRW5DLHVEQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6Ii4vc3JjL2pzL2dldC53b3JrZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0QWxsUG9zdHMgZnJvbSAnLi93cC1hcGknO1xuXG5nZXRBbGxQb3N0cygpXG4gIC50aGVuKChwb3N0cykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHBvc3RzKTtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIHBvc3RNZXNzYWdlKHsgcG9zdHMgfSk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/get.worker.js\n");

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

/***/ "./src/js/wp-api.js":
/*!**************************!*\
  !*** ./src/js/wp-api.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetch */ \"./src/js/utils/fetch.js\");\n\n\nfunction getAllPosts() {\n  return fetch('http://wp.infinityspine.com/wp-json/wp/v2/posts?per_page=100').then(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    return json;\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAllPosts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvd3AtYXBpLmpzPzM0YWMiXSwibmFtZXMiOlsiZ2V0QWxsUG9zdHMiLCJmZXRjaCIsInRoZW4iLCJoYW5kbGVFcnJvcnMiLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQ3JCLFNBQU9DLEtBQUssQ0FBQyw4REFBRCxDQUFMLENBQ0pDLElBREksQ0FDQ0Msb0RBREQsRUFFSkQsSUFGSSxDQUVDLFVBQUNFLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEdBRkQsRUFHSkgsSUFISSxDQUdDLFVBQUNHLElBQUQ7QUFBQSxXQUFVQSxJQUFWO0FBQUEsR0FIRCxDQUFQO0FBSUQ7O0FBRWNMLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL3dwLWFwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoYW5kbGVFcnJvcnMgZnJvbSAnLi91dGlscy9mZXRjaCc7XG5cbmZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly93cC5pbmZpbml0eXNwaW5lLmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzP3Blcl9wYWdlPTEwMCcpXG4gICAgLnRoZW4oaGFuZGxlRXJyb3JzKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsUG9zdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/wp-api.js\n");

/***/ })

/******/ });