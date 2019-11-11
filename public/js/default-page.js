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
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('Default Page loaded!');\nvar hash = window.location.hash.split('?')[0];\nvar title = hash.replace('#', '').split('-').join(' ');\nvar page = window.location.hash.split('?')[1].split('=')[1];\nvar h2 = document.querySelector('.default-page .call-to-action__title');\nh2.innerHTML = title;\nvar pageCopy = document.querySelector('.default-page .page__copy');\npageCopy.innerHTML = '';\ndebugger;\nfetch(\"http://infinityspine.com/wp-json/wp/v2/pages/\".concat(page)).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  console.log(res);\n  debugger;\n  pageCopy.innerHTML = res.content.rendered;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzPzMzYzQiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0IiwidGl0bGUiLCJyZXBsYWNlIiwiam9pbiIsInBhZ2UiLCJoMiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInBhZ2VDb3B5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwiY29udGVudCIsInJlbmRlcmVkIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFFQSxJQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBaEIsQ0FBcUJHLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQWI7QUFDQSxJQUFNQyxLQUFLLEdBQUdKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0JGLEtBQXRCLENBQTRCLEdBQTVCLEVBQWlDRyxJQUFqQyxDQUFzQyxHQUF0QyxDQUFkO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLElBQWhCLENBQXFCRyxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxFQUFtQ0EsS0FBbkMsQ0FBeUMsR0FBekMsRUFBOEMsQ0FBOUMsQ0FBYjtBQUVBLElBQU1LLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNDQUF2QixDQUFYO0FBQ0FGLEVBQUUsQ0FBQ0csU0FBSCxHQUFlUCxLQUFmO0FBQ0EsSUFBTVEsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWpCO0FBQ0FFLFFBQVEsQ0FBQ0QsU0FBVCxHQUFxQixFQUFyQjtBQUVBO0FBRUFFLEtBQUssd0RBQWlETixJQUFqRCxFQUFMLENBQ0dPLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxDQURoQixFQUVHRixJQUZILENBRVEsVUFBQ0csR0FBRCxFQUFTO0FBQ2JuQixTQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEdBQVo7QUFDQTtBQUNBTCxVQUFRLENBQUNELFNBQVQsR0FBcUJNLEdBQUcsQ0FBQ0MsT0FBSixDQUFZQyxRQUFqQztBQUNELENBTkgiLCJmaWxlIjoiLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0RlZmF1bHQgUGFnZSBsb2FkZWQhJyk7XG5cbmNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzBdO1xuY29uc3QgdGl0bGUgPSBoYXNoLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJy0nKS5qb2luKCcgJyk7XG5jb25zdCBwYWdlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXS5zcGxpdCgnPScpWzFdO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXBhZ2UgLmNhbGwtdG8tYWN0aW9uX190aXRsZScpO1xuaDIuaW5uZXJIVE1MID0gdGl0bGU7XG5jb25zdCBwYWdlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXBhZ2UgLnBhZ2VfX2NvcHknKTtcbnBhZ2VDb3B5LmlubmVySFRNTCA9ICcnO1xuXG5kZWJ1Z2dlclxuXG5mZXRjaChgaHR0cDovL2luZmluaXR5c3BpbmUuY29tL3dwLWpzb24vd3AvdjIvcGFnZXMvJHtwYWdlfWApXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgZGVidWdnZXJcbiAgICBwYWdlQ29weS5pbm5lckhUTUwgPSByZXMuY29udGVudC5yZW5kZXJlZDtcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/default-page.js\n");

/***/ })

/******/ });