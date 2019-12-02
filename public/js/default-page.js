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

eval("console.log('Default Page loaded!');\nvar hash = window.location.hash.split('?')[0];\nvar title = hash.replace('#', '').split('-').join(' ');\nvar page = window.location.hash.split('?')[1].split('=')[1];\nvar h2 = document.querySelector('.default-page .call-to-action__title');\nh2.innerHTML = title;\nvar pageCopy = document.querySelector('.default-page .page__copy');\npageCopy.innerHTML = '';\nvar payPalBtns = \"<div id=\\\"paypal-button-container\\\"></div>\\n<script src=\\\"https://www.paypal.com/sdk/js?client-id=AUDV8H40Tek4B5fjdvmKObyYRD_pdGVmP-3ZQ3Eg5C2chOVfz6Bkh5KEGont_y7bH2FdpKkL9_DTWwRz&amp;currency=USD\\\" data-sdk-integration-source=\\\"button-factory\\\"></script>\\n<script>\\n    paypal.Buttons({\\n        style: {\\n            shape: 'pill',\\n            color: 'blue',\\n            layout: 'vertical',\\n            label: 'paypal',\\n            \\n        },\\n        createOrder: function(data, actions) {\\n            return actions.order.create({\\n                purchase_units: [{\\n                    amount: {\\n                        value: '2000'\\n                    }\\n                }]\\n            });\\n        },\\n        onApprove: function(data, actions) {\\n            return actions.order.capture().then(function(details) {\\n                alert('Transaction completed by ' + details.payer.name.given_name + '!');\\n            });\\n        }\\n    }).render('#paypal-button-container');\\n</script>\";\nfetch(\"http://wp.infinityspine.com/wp-json/wp/v2/pages/\".concat(page)).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  pageCopy.innerHTML = res.content.rendered;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzPzMzYzQiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0IiwidGl0bGUiLCJyZXBsYWNlIiwiam9pbiIsInBhZ2UiLCJoMiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInBhZ2VDb3B5IiwicGF5UGFsQnRucyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsImNvbnRlbnQiLCJyZW5kZXJlZCJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBRUEsSUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLElBQWhCLENBQXFCRyxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFiO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNLLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLEVBQXNCRixLQUF0QixDQUE0QixHQUE1QixFQUFpQ0csSUFBakMsQ0FBc0MsR0FBdEMsQ0FBZDtBQUNBLElBQU1DLElBQUksR0FBR04sTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUFoQixDQUFxQkcsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsRUFBbUNBLEtBQW5DLENBQXlDLEdBQXpDLEVBQThDLENBQTlDLENBQWI7QUFFQSxJQUFNSyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQ0FBdkIsQ0FBWDtBQUNBRixFQUFFLENBQUNHLFNBQUgsR0FBZVAsS0FBZjtBQUNBLElBQU1RLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFqQjtBQUNBRSxRQUFRLENBQUNELFNBQVQsR0FBcUIsRUFBckI7QUFFQSxJQUFNRSxVQUFVLG8vQkFBaEI7QUE0QkFDLEtBQUssMkRBQW9EUCxJQUFwRCxFQUFMLENBQ0dRLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxDQURoQixFQUVHRixJQUZILENBRVEsVUFBQ0csR0FBRCxFQUFTO0FBQ2JOLFVBQVEsQ0FBQ0QsU0FBVCxHQUFxQk8sR0FBRyxDQUFDQyxPQUFKLENBQVlDLFFBQWpDO0FBQ0QsQ0FKSCIsImZpbGUiOiIuL3NyYy9qcy9kZWZhdWx0LXBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnRGVmYXVsdCBQYWdlIGxvYWRlZCEnKTtcblxuY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMF07XG5jb25zdCB0aXRsZSA9IGhhc2gucmVwbGFjZSgnIycsICcnKS5zcGxpdCgnLScpLmpvaW4oJyAnKTtcbmNvbnN0IHBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdLnNwbGl0KCc9JylbMV07XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcGFnZSAuY2FsbC10by1hY3Rpb25fX3RpdGxlJyk7XG5oMi5pbm5lckhUTUwgPSB0aXRsZTtcbmNvbnN0IHBhZ2VDb3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtcGFnZSAucGFnZV9fY29weScpO1xucGFnZUNvcHkuaW5uZXJIVE1MID0gJyc7XG5cbmNvbnN0IHBheVBhbEJ0bnMgPSBgPGRpdiBpZD1cInBheXBhbC1idXR0b24tY29udGFpbmVyXCI+PC9kaXY+XG48c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LnBheXBhbC5jb20vc2RrL2pzP2NsaWVudC1pZD1BVURWOEg0MFRlazRCNWZqZHZtS09ieVlSRF9wZEdWbVAtM1pRM0VnNUMyY2hPVmZ6NkJraDVLRUdvbnRfeTdiSDJGZHBLa0w5X0RUV3dSeiZhbXA7Y3VycmVuY3k9VVNEXCIgZGF0YS1zZGstaW50ZWdyYXRpb24tc291cmNlPVwiYnV0dG9uLWZhY3RvcnlcIj48L3NjcmlwdD5cbjxzY3JpcHQ+XG4gICAgcGF5cGFsLkJ1dHRvbnMoe1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgc2hhcGU6ICdwaWxsJyxcbiAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgICBsYWJlbDogJ3BheXBhbCcsXG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlT3JkZXI6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgcHVyY2hhc2VfdW5pdHM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcyMDAwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkFwcHJvdmU6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKGZ1bmN0aW9uKGRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnVHJhbnNhY3Rpb24gY29tcGxldGVkIGJ5ICcgKyBkZXRhaWxzLnBheWVyLm5hbWUuZ2l2ZW5fbmFtZSArICchJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pLnJlbmRlcignI3BheXBhbC1idXR0b24tY29udGFpbmVyJyk7XG48L3NjcmlwdD5gXG5cbmZldGNoKGBodHRwOi8vd3AuaW5maW5pdHlzcGluZS5jb20vd3AtanNvbi93cC92Mi9wYWdlcy8ke3BhZ2V9YClcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgcGFnZUNvcHkuaW5uZXJIVE1MID0gcmVzLmNvbnRlbnQucmVuZGVyZWQ7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/default-page.js\n");

/***/ })

/******/ });