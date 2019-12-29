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

eval("console.log('Default Page loaded!');\nvar hash = window.location.hash.split('?')[0];\nvar title = hash.replace('#', '').split('-').join(' ');\nvar page = window.location.hash.split('?')[1].split('=')[1]; // const body = document.querySelector('body');\n\nvar h2 = document.querySelector('.default-page .call-to-action__title');\nh2.innerHTML = title;\nvar pageCopy = document.querySelector('.default-page .page__copy');\npageCopy.innerHTML = ''; // window.onload = () => {\n//   console.log('window loaded');\n//   debugger;\n// };\n\nvar buildPayPalBtnString = function buildPayPalBtnString() {\n  var payPalContainer = document.createElement('div');\n  payPalContainer.id = 'paypal-button-container';\n  var payPalSrcScript = document.createElement('script');\n  payPalSrcScript.src = 'https://www.paypal.com/sdk/js?client-id=AUDV8H40Tek4B5fjdvmKObyYRD_pdGVmP-3ZQ3Eg5C2chOVfz6Bkh5KEGont_y7bH2FdpKkL9_DTWwRz&amp;currency=USD';\n  payPalSrcScript.setAttribute('data-sdk-integration-source', 'button-factory');\n  var payPalScript = document.createElement('script');\n  payPalScript.innerHTML = \"\\n    paypal.Buttons({\\n      style: {\\n          shape: 'pill',\\n          color: 'blue',\\n          layout: 'vertical',\\n          label: 'paypal',\\n      },\\n      createOrder: function(data, actions) {\\n          return actions.order.create({\\n              purchase_units: [{\\n                  amount: {\\n                      value: '2000'\\n                  }\\n              }]\\n          });\\n      },\\n      onApprove: function(data, actions) {\\n          return actions.order.capture().then(function(details) {\\n              alert('Transaction completed by ' + details.payer.name.given_name + '!');\\n          });\\n      }\\n    }).render('#paypal-button-container');\\n  \"; // const frag = document.createRange().createContextualFragment(script);\n\n  setTimeout(function () {\n    // body.appendChild(payPalContainer);\n    // setTimeout(() => {\n    //   debugger\n    //   body.appendChild(payPalSrcScript);\n    // }, 0);\n    setTimeout(function () {\n      pageCopy.appendChild(payPalScript);\n    }, 1000);\n  }, 0);\n};\n\nfetch(\"http://wp.infinityspine.com/wp-json/wp/v2/pages/\".concat(page)).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  // pageCopy.innerHTML = res.content.rendered;\n  var frag = document.createRange().createContextualFragment(res.content.rendered);\n  pageCopy.innerHTML = '';\n  pageCopy.appendChild(frag);\n  buildPayPalBtnString();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzPzMzYzQiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImhhc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0IiwidGl0bGUiLCJyZXBsYWNlIiwiam9pbiIsInBhZ2UiLCJoMiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInBhZ2VDb3B5IiwiYnVpbGRQYXlQYWxCdG5TdHJpbmciLCJwYXlQYWxDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJwYXlQYWxTcmNTY3JpcHQiLCJzcmMiLCJzZXRBdHRyaWJ1dGUiLCJwYXlQYWxTY3JpcHQiLCJzZXRUaW1lb3V0IiwiYXBwZW5kQ2hpbGQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJmcmFnIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJjb250ZW50IiwicmVuZGVyZWQiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUVBLElBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUFoQixDQUFxQkcsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBYjtBQUNBLElBQU1DLEtBQUssR0FBR0osSUFBSSxDQUFDSyxPQUFMLENBQWEsR0FBYixFQUFrQixFQUFsQixFQUFzQkYsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNHLElBQWpDLENBQXNDLEdBQXRDLENBQWQ7QUFDQSxJQUFNQyxJQUFJLEdBQUdOLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBaEIsQ0FBcUJHLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLEVBQW1DQSxLQUFuQyxDQUF5QyxHQUF6QyxFQUE4QyxDQUE5QyxDQUFiLEMsQ0FDQTs7QUFFQSxJQUFNSyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQ0FBdkIsQ0FBWDtBQUNBRixFQUFFLENBQUNHLFNBQUgsR0FBZVAsS0FBZjtBQUNBLElBQU1RLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFqQjtBQUNBRSxRQUFRLENBQUNELFNBQVQsR0FBcUIsRUFBckIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQyxNQUFNQyxlQUFlLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUF4QjtBQUNBRCxpQkFBZSxDQUFDRSxFQUFoQixHQUFxQix5QkFBckI7QUFDQSxNQUFNQyxlQUFlLEdBQUdSLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixRQUF2QixDQUF4QjtBQUNBRSxpQkFBZSxDQUFDQyxHQUFoQixHQUFzQiwySUFBdEI7QUFDQUQsaUJBQWUsQ0FBQ0UsWUFBaEIsQ0FBNkIsNkJBQTdCLEVBQTRELGdCQUE1RDtBQUNBLE1BQU1DLFlBQVksR0FBR1gsUUFBUSxDQUFDTSxhQUFULENBQXVCLFFBQXZCLENBQXJCO0FBQ0FLLGNBQVksQ0FBQ1QsU0FBYixnckJBUGlDLENBK0JqQzs7QUFDQVUsWUFBVSxDQUFDLFlBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZULGNBQVEsQ0FBQ1UsV0FBVCxDQUFxQkYsWUFBckI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FUUyxFQVNQLENBVE8sQ0FBVjtBQVVELENBMUNEOztBQTRDQUcsS0FBSywyREFBb0RoQixJQUFwRCxFQUFMLENBQ0dpQixJQURILENBQ1EsVUFBQUMsUUFBUTtBQUFBLFNBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsQ0FEaEIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLEdBQUQsRUFBUztBQUNiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHbkIsUUFBUSxDQUFDb0IsV0FBVCxHQUF1QkMsd0JBQXZCLENBQWdESCxHQUFHLENBQUNJLE9BQUosQ0FBWUMsUUFBNUQsQ0FBYjtBQUNBcEIsVUFBUSxDQUFDRCxTQUFULEdBQXFCLEVBQXJCO0FBQ0FDLFVBQVEsQ0FBQ1UsV0FBVCxDQUFxQk0sSUFBckI7QUFDQWYsc0JBQW9CO0FBQ3JCLENBUkgiLCJmaWxlIjoiLi9zcmMvanMvZGVmYXVsdC1wYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0RlZmF1bHQgUGFnZSBsb2FkZWQhJyk7XG5cbmNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzBdO1xuY29uc3QgdGl0bGUgPSBoYXNoLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJy0nKS5qb2luKCcgJyk7XG5jb25zdCBwYWdlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXS5zcGxpdCgnPScpWzFdO1xuLy8gY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1wYWdlIC5jYWxsLXRvLWFjdGlvbl9fdGl0bGUnKTtcbmgyLmlubmVySFRNTCA9IHRpdGxlO1xuY29uc3QgcGFnZUNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1wYWdlIC5wYWdlX19jb3B5Jyk7XG5wYWdlQ29weS5pbm5lckhUTUwgPSAnJztcblxuLy8gd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coJ3dpbmRvdyBsb2FkZWQnKTtcbi8vICAgZGVidWdnZXI7XG4vLyB9O1xuXG5jb25zdCBidWlsZFBheVBhbEJ0blN0cmluZyA9ICgpID0+IHtcbiAgY29uc3QgcGF5UGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBheVBhbENvbnRhaW5lci5pZCA9ICdwYXlwYWwtYnV0dG9uLWNvbnRhaW5lcic7XG4gIGNvbnN0IHBheVBhbFNyY1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBwYXlQYWxTcmNTY3JpcHQuc3JjID0gJ2h0dHBzOi8vd3d3LnBheXBhbC5jb20vc2RrL2pzP2NsaWVudC1pZD1BVURWOEg0MFRlazRCNWZqZHZtS09ieVlSRF9wZEdWbVAtM1pRM0VnNUMyY2hPVmZ6NkJraDVLRUdvbnRfeTdiSDJGZHBLa0w5X0RUV3dSeiZhbXA7Y3VycmVuY3k9VVNEJztcbiAgcGF5UGFsU3JjU2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1zZGstaW50ZWdyYXRpb24tc291cmNlJywgJ2J1dHRvbi1mYWN0b3J5Jyk7XG4gIGNvbnN0IHBheVBhbFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBwYXlQYWxTY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgIHBheXBhbC5CdXR0b25zKHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgc2hhcGU6ICdwaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgIGxheW91dDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBsYWJlbDogJ3BheXBhbCcsXG4gICAgICB9LFxuICAgICAgY3JlYXRlT3JkZXI6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jcmVhdGUoe1xuICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcbiAgICAgICAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMjAwMCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkFwcHJvdmU6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbihmdW5jdGlvbihkZXRhaWxzKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdUcmFuc2FjdGlvbiBjb21wbGV0ZWQgYnkgJyArIGRldGFpbHMucGF5ZXIubmFtZS5naXZlbl9uYW1lICsgJyEnKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5yZW5kZXIoJyNwYXlwYWwtYnV0dG9uLWNvbnRhaW5lcicpO1xuICBgO1xuICAvLyBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc2NyaXB0KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChwYXlQYWxDb250YWluZXIpO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgZGVidWdnZXJcbiAgICAvLyAgIGJvZHkuYXBwZW5kQ2hpbGQocGF5UGFsU3JjU2NyaXB0KTtcbiAgICAvLyB9LCAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBhZ2VDb3B5LmFwcGVuZENoaWxkKHBheVBhbFNjcmlwdCk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIDApO1xufTtcblxuZmV0Y2goYGh0dHA6Ly93cC5pbmZpbml0eXNwaW5lLmNvbS93cC1qc29uL3dwL3YyL3BhZ2VzLyR7cGFnZX1gKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICAvLyBwYWdlQ29weS5pbm5lckhUTUwgPSByZXMuY29udGVudC5yZW5kZXJlZDtcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQocmVzLmNvbnRlbnQucmVuZGVyZWQpO1xuICAgIHBhZ2VDb3B5LmlubmVySFRNTCA9ICcnO1xuICAgIHBhZ2VDb3B5LmFwcGVuZENoaWxkKGZyYWcpO1xuICAgIGJ1aWxkUGF5UGFsQnRuU3RyaW5nKCk7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/default-page.js\n");

/***/ })

/******/ });