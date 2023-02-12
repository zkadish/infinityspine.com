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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/articles.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/articles.js":
/*!****************************!*\
  !*** ./src/js/articles.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/localStorage */ \"./src/js/utils/localStorage.js\");\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/router */ \"./src/js/utils/router.js\");\n/* harmony import */ var _get_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.worker */ \"./src/js/get.worker.js\");\n/* harmony import */ var _get_worker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_get_worker__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// import onRouterEventHandler from './router';\n\n\n\nvar articleTitle = document.querySelector('.article-title h1');\nvar articleDate = document.querySelector('.page__article-nav--date');\nvar articleCopy = document.querySelector('.thoma-articles');\nvar nextArticleBtns = document.querySelectorAll('.next');\nvar previousArticleBtns = document.querySelectorAll('.previous');\nvar articles = null;\n\nvar currentArticle = function currentArticle() {\n  var articleNum = Object(_utils_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('article'); // number - length * -1\n\n  var articleIndex = (articleNum - articles.length) * -1;\n  var article = articles[articleIndex];\n  articleTitle.innerHTML = article.title.rendered;\n\n  var _article$date$split = article.date.split('T'),\n      _article$date$split2 = _slicedToArray(_article$date$split, 1),\n      date = _article$date$split2[0];\n\n  articleDate.innerHTML = date;\n  articleCopy.innerHTML = article.content.rendered;\n};\n\nif (!Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('localStorage')) {\n  console.log('localStorage not available fall back to the window object.');\n} else {\n  var articleNum = Object(_utils_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('article');\n\n  if (!localStorage.posts) {\n    // TODO: if posts don't exist fetch the requested post\n    var wpWorker = new _get_worker__WEBPACK_IMPORTED_MODULE_2___default.a();\n\n    wpWorker.onmessage = function () {\n      articles = JSON.parse(localStorage.posts);\n      currentArticle(articleNum);\n    };\n  } else {\n    articles = JSON.parse(localStorage.posts);\n    currentArticle(articleNum);\n  }\n}\n\nfunction onPreviousBtnsHandler() {\n  var articleNum = Object(_utils_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('article') - 1;\n  nextArticleBtns.forEach(function (btn) {\n    return btn.classList.remove('btn-disabled');\n  });\n\n  if (articleNum === 0) {\n    previousArticleBtns.forEach(function (btn) {\n      return btn.classList.add('btn-disabled');\n    });\n    return;\n  }\n\n  currentArticle(articleNum);\n  window.history.pushState(null, null, \"#articles?article=\".concat(articleNum)); // onRouterEventHandler(e, articleValue);\n}\n\npreviousArticleBtns.forEach(function (btn) {\n  btn.addEventListener('click', onPreviousBtnsHandler);\n});\n\nfunction onNextBtnsHandler() {\n  var articleNum = Object(_utils_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('article') + 1;\n  previousArticleBtns.forEach(function (btn) {\n    return btn.classList.remove('btn-disabled');\n  });\n\n  if (articleNum > articles.length) {\n    nextArticleBtns.forEach(function (btn) {\n      return btn.classList.add('btn-disabled');\n    });\n    return;\n  }\n\n  currentArticle(articleNum);\n  window.history.pushState(null, null, \"#articles?article=\".concat(articleNum)); // onRouterEventHandler(e, articleValue);\n}\n\nnextArticleBtns.forEach(function (btn) {\n  btn.addEventListener('click', onNextBtnsHandler);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXJ0aWNsZXMuanM/YzMwOCJdLCJuYW1lcyI6WyJhcnRpY2xlVGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnRpY2xlRGF0ZSIsImFydGljbGVDb3B5IiwibmV4dEFydGljbGVCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsInByZXZpb3VzQXJ0aWNsZUJ0bnMiLCJhcnRpY2xlcyIsImN1cnJlbnRBcnRpY2xlIiwiYXJ0aWNsZU51bSIsInBhcmFtVmFsdWUiLCJhcnRpY2xlSW5kZXgiLCJsZW5ndGgiLCJhcnRpY2xlIiwiaW5uZXJIVE1MIiwidGl0bGUiLCJyZW5kZXJlZCIsImRhdGUiLCJzcGxpdCIsImNvbnRlbnQiLCJzdG9yYWdlQXZhaWxhYmxlIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInBvc3RzIiwid3BXb3JrZXIiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJvblByZXZpb3VzQnRuc0hhbmRsZXIiLCJmb3JFYWNoIiwiYnRuIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk5leHRCdG5zSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXJCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXBCO0FBQ0EsSUFBTUUsV0FBVyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXBCO0FBQ0EsSUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNLLGdCQUFULENBQTBCLE9BQTFCLENBQXhCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUdOLFFBQVEsQ0FBQ0ssZ0JB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QkFBZSxDQUFDMkIsT0FBaEIsQ0FBd0IsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjRSxHQUFkLENBQWtCLGNBQWxCLENBQVQ7QUFBQSxLQUF4QjtBQUNBO0FBQ0Q7O0FBRUQzQixnQkFBYyxDQUFDQyxVQUFELENBQWQ7QUFFQTJCLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCLElBQXpCLEVBQStCLElBQS9CLDhCQUEwRDdCLFVBQTFELEdBWDJCLENBWTNCO0FBQ0Q7O0FBRURMLGVBQWUsQ0FBQzJCLE9BQWhCLENBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUMvQkEsS0FBRyxDQUFDTyxnQkFBSixDQUFxQixPQUFyQixFQUE4QkMsaUJBQTlCO0FBQ0QsQ0FGRCIsImZpbGUiOiIuL3NyYy9qcy9hcnRpY2xlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBvblJvdXRlckV2ZW50SGFuZGxlciBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tICcuL3V0aWxzL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgcGFyYW1WYWx1ZSBmcm9tICcuL3V0aWxzL3JvdXRlcic7XG5cbmltcG9ydCBXb3JrZXIgZnJvbSAnLi9nZXQud29ya2VyJztcblxuXG5jb25zdCBhcnRpY2xlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZS10aXRsZSBoMScpO1xuY29uc3QgYXJ0aWNsZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fYXJ0aWNsZS1uYXYtLWRhdGUnKTtcbmNvbnN0IGFydGljbGVDb3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRob21hLWFydGljbGVzJyk7XG5jb25zdCBuZXh0QXJ0aWNsZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV4dCcpO1xuY29uc3QgcHJldmlvdXNBcnRpY2xlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmV2aW91cycpO1xubGV0IGFydGljbGVzID0gbnVsbDtcblxuY29uc3QgY3VycmVudEFydGljbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGFydGljbGVOdW0gPSBwYXJhbVZhbHVlKCdhcnRpY2xlJyk7XG4gIC8vIG51bWJlciAtIGxlbmd0aCAqIC0xXG4gIGNvbnN0IGFydGljbGVJbmRleCA9IChhcnRpY2xlTnVtIC0gYXJ0aWNsZXMubGVuZ3RoKSAqIC0xO1xuICBjb25zdCBhcnRpY2xlID0gYXJ0aWNsZXNbYXJ0aWNsZUluZGV4XTtcbiAgYXJ0aWNsZVRpdGxlLmlubmVySFRNTCA9IGFydGljbGUudGl0bGUucmVuZGVyZWQ7XG4gIGNvbnN0IFtkYXRlXSA9IGFydGljbGUuZGF0ZS5zcGxpdCgnVCcpO1xuICBhcnRpY2xlRGF0ZS5pbm5lckhUTUwgPSBkYXRlO1xuICBhcnRpY2xlQ29weS5pbm5lckhUTUwgPSBhcnRpY2xlLmNvbnRlbnQucmVuZGVyZWQ7XG59O1xuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2Ugbm90IGF2YWlsYWJsZSBmYWxsIGJhY2sgdG8gdGhlIHdpbmRvdyBvYmplY3QuJyk7XG59IGVsc2Uge1xuICBjb25zdCBhcnRpY2xlTnVtID0gcGFyYW1WYWx1ZSgnYXJ0aWNsZScpO1xuXG4gIGlmICghbG9jYWxTdG9yYWdlLnBvc3RzKSB7XG4gICAgLy8gVE9ETzogaWYgcG9zdHMgZG9uJ3QgZXhpc3QgZmV0Y2ggdGhlIHJlcXVlc3RlZCBwb3N0XG4gICAgY29uc3Qgd3BXb3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgd3BXb3JrZXIub25tZXNzYWdlID0gKCkgPT4ge1xuICAgICAgYXJ0aWNsZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wb3N0cyk7XG4gICAgICBjdXJyZW50QXJ0aWNsZShhcnRpY2xlTnVtKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGFydGljbGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucG9zdHMpO1xuICAgIGN1cnJlbnRBcnRpY2xlKGFydGljbGVOdW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uUHJldmlvdXNCdG5zSGFuZGxlcigpIHtcbiAgY29uc3QgYXJ0aWNsZU51bSA9IHBhcmFtVmFsdWUoJ2FydGljbGUnKSAtIDE7XG4gIG5leHRBcnRpY2xlQnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tZGlzYWJsZWQnKSk7XG5cbiAgaWYgKGFydGljbGVOdW0gPT09IDApIHtcbiAgICBwcmV2aW91c0FydGljbGVCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXNhYmxlZCcpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdXJyZW50QXJ0aWNsZShhcnRpY2xlTnVtKTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYCNhcnRpY2xlcz9hcnRpY2xlPSR7YXJ0aWNsZU51bX1gKTtcbiAgLy8gb25Sb3V0ZXJFdmVudEhhbmRsZXIoZSwgYXJ0aWNsZVZhbHVlKTtcbn1cblxucHJldmlvdXNBcnRpY2xlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25QcmV2aW91c0J0bnNIYW5kbGVyKTtcbn0pO1xuXG5mdW5jdGlvbiBvbk5leHRCdG5zSGFuZGxlcigpIHtcbiAgY29uc3QgYXJ0aWNsZU51bSA9IHBhcmFtVmFsdWUoJ2FydGljbGUnKSArIDE7XG4gIHByZXZpb3VzQXJ0aWNsZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWRpc2FibGVkJykpO1xuXG4gIGlmIChhcnRpY2xlTnVtID4gYXJ0aWNsZXMubGVuZ3RoKSB7XG4gICAgbmV4dEFydGljbGVCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXNhYmxlZCcpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdXJyZW50QXJ0aWNsZShhcnRpY2xlTnVtKTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYCNhcnRpY2xlcz9hcnRpY2xlPSR7YXJ0aWNsZU51bX1gKTtcbiAgLy8gb25Sb3V0ZXJFdmVudEhhbmRsZXIoZSwgYXJ0aWNsZVZhbHVlKTtcbn1cblxubmV4dEFydGljbGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk5leHRCdG5zSGFuZGxlcik7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/articles.js\n");

/***/ }),

/***/ "./src/js/get.worker.js":
/*!******************************!*\
  !*** ./src/js/get.worker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\n  return new Worker(\"../js/\" + \"get.worker.js\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2V0Lndvcmtlci5qcz9kYjUwIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJXb3JrZXIiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsWUFBVztBQUMxQixTQUFPLElBQUlDLE1BQUosQ0FBVyxXQUFXLGVBQXRCLENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vc3JjL2pzL2dldC53b3JrZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihcIi4uL2pzL1wiICsgXCJnZXQud29ya2VyLmpzXCIpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/get.worker.js\n");

/***/ }),

/***/ "./src/js/utils/localStorage.js":
/*!**************************************!*\
  !*** ./src/js/utils/localStorage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Feature detection for localStorage or sessionStorage\n * @param {string} type - 'localStorage' or 'sessionStorage'\n */\nfunction storageAvailable(type) {\n  var storage;\n\n  try {\n    storage = window[type];\n    var x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return e instanceof DOMException && ( // everything except Firefox\n    e.code === 22 // Firefox\n    || e.code === 1014 // test name field too, because code might not be present\n    // everything except Firefox\n    || e.name === 'QuotaExceededError' // Firefox\n    || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') // acknowledge QuotaExceededError only if there's something already stored\n    && storage && storage.length !== 0;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (storageAvailable);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvbG9jYWxTdG9yYWdlLmpzPzQ2NzAiXSwibmFtZXMiOlsic3RvcmFnZUF2YWlsYWJsZSIsInR5cGUiLCJzdG9yYWdlIiwid2luZG93IiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZSIsIkRPTUV4Y2VwdGlvbiIsImNvZGUiLCJuYW1lIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7O0FBSUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDO0FBQzlCLE1BQUlDLE9BQUo7O0FBQ0EsTUFBSTtBQUNGQSxXQUFPLEdBQUdDLE1BQU0sQ0FBQ0YsSUFBRCxDQUFoQjtBQUNBLFFBQU1HLENBQUMsR0FBRyxrQkFBVjtBQUNBRixXQUFPLENBQUNHLE9BQVIsQ0FBZ0JELENBQWhCLEVBQW1CQSxDQUFuQjtBQUNBRixXQUFPLENBQUNJLFVBQVIsQ0FBbUJGLENBQW5CO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9HLENBQVAsRUFBVTtBQUNWLFdBQU9BLENBQUMsWUFBWUMsWUFBYixNQUNMO0FBQ0FELEtBQUMsQ0FBQ0UsSUFBRixLQUFXLEVBQVgsQ0FDQTtBQURBLE9BRUdGLENBQUMsQ0FBQ0UsSUFBRixLQUFXLElBRmQsQ0FHQTtBQUNBO0FBSkEsT0FLR0YsQ0FBQyxDQUFDRyxJQUFGLEtBQVcsb0JBTGQsQ0FNQTtBQU5BLE9BT0dILENBQUMsQ0FBQ0csSUFBRixLQUFXLDRCQVRULEVBVUw7QUFWSyxPQVdEUixPQUFPLElBQUlBLE9BQU8sQ0FBQ1MsTUFBUixLQUFtQixDQVhwQztBQVlEO0FBQ0Y7O0FBRWNYLCtFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL3V0aWxzL2xvY2FsU3RvcmFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIGxvY2FsU3RvcmFnZSBvciBzZXNzaW9uU3RvcmFnZVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnbG9jYWxTdG9yYWdlJyBvciAnc2Vzc2lvblN0b3JhZ2UnXG4gKi9cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIGUuY29kZSA9PT0gMjJcbiAgICAgIC8vIEZpcmVmb3hcbiAgICAgIHx8IGUuY29kZSA9PT0gMTAxNFxuICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICB8fCBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InXG4gICAgICAvLyBGaXJlZm94XG4gICAgICB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgJiYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VBdmFpbGFibGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/localStorage.js\n");

/***/ }),

/***/ "./src/js/utils/router.js":
/*!********************************!*\
  !*** ./src/js/utils/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar paramValue = function paramValue(param) {\n  var hash = window.location.hash;\n  var regex = RegExp(\"\".concat(param, \"=([0-9]*)\"));\n\n  var _hash$match = hash.match(regex),\n      _hash$match2 = _slicedToArray(_hash$match, 2),\n      value = _hash$match2[1]; // TODO: handle non-number\n  // if (isNaN(value) === true) return value;\n\n\n  return Number(value);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (paramValue);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvcm91dGVyLmpzPzYyYmIiXSwibmFtZXMiOlsicGFyYW1WYWx1ZSIsInBhcmFtIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVnZXgiLCJSZWdFeHAiLCJtYXRjaCIsInZhbHVlIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNwQkMsSUFEb0IsR0FDWEMsTUFBTSxDQUFDQyxRQURJLENBQ3BCRixJQURvQjtBQUU1QixNQUFNRyxLQUFLLEdBQUdDLE1BQU0sV0FBSUwsS0FBSixlQUFwQjs7QUFGNEIsb0JBR1ZDLElBQUksQ0FBQ0ssS0FBTCxDQUFXRixLQUFYLENBSFU7QUFBQTtBQUFBLE1BR25CRyxLQUhtQixvQkFJNUI7QUFDQTs7O0FBQ0EsU0FBT0MsTUFBTSxDQUFDRCxLQUFELENBQWI7QUFDRCxDQVBEOztBQVNlUix5RUFBZiIsImZpbGUiOiIuL3NyYy9qcy91dGlscy9yb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJhbVZhbHVlID0gKHBhcmFtKSA9PiB7XG4gIGNvbnN0IHsgaGFzaCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBjb25zdCByZWdleCA9IFJlZ0V4cChgJHtwYXJhbX09KFswLTldKilgKTtcbiAgY29uc3QgWywgdmFsdWVdID0gaGFzaC5tYXRjaChyZWdleCk7XG4gIC8vIFRPRE86IGhhbmRsZSBub24tbnVtYmVyXG4gIC8vIGlmIChpc05hTih2YWx1ZSkgPT09IHRydWUpIHJldHVybiB2YWx1ZTtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJhbVZhbHVlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils/router.js\n");

/***/ })

/******/ });