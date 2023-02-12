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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetch */ \"./src/js/utils/fetch.js\");\n // fixes issue with material textarea label getting cut off\n// by the inlined overflow value being applied by material-ui\n\nvar message = document.querySelector('#message-field');\n\nfunction onMousedownHandler() {\n  setTimeout(function () {\n    message.style = 'width: auto';\n  }, 0);\n}\n\nmessage.onmousedown = onMousedownHandler; // form submission and validation\n\nvar firstNameInput = document.querySelector('#name-first-input');\nvar lastNameInput = document.querySelector('#name-last-input');\nvar emailInput = document.querySelector('#email-input');\nvar checkbox = document.querySelector('#checkbox-1');\nvar textArea = document.querySelector('#textarea');\nvar submit = document.querySelector('.submit-btn');\nvar schedule = document.querySelector('.schedule');\nvar formData = {\n  'name-first-input': '',\n  'name-last-input': '',\n  'email-field': '',\n  checkbox: false,\n  message: ''\n};\nvar regx = {\n  name: /[a-zA-Z]/,\n  email: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,4})+$/\n};\n\nfunction regxTest(input, string) {\n  return regx[input].test(string);\n}\n\nfunction textFieldHandler(e) {\n  var input = e.target.id.split('-')[0];\n  var testInput = regxTest(input, e.key);\n  if (!testInput) e.preventDefault();\n}\n\nfunction invalidEmail(invalid) {\n  var borderElements = emailInput.parentElement.children[1].children;\n\n  if (invalid) {\n    emailInput.style.color = 'red';\n    borderElements[1].children[0].style.color = 'red';\n    borderElements[1].children[0].innerHTML = 'You must enter a valid email';\n\n    for (var i = 0; i < 3; i += 1) {\n      borderElements[i].style['border-color'] = 'red';\n    }\n\n    emailInput.focus();\n    return;\n  }\n\n  emailInput.style.color = null;\n  borderElements[1].children[0].style.color = null;\n  borderElements[1].children[0].innerHTML = 'Your Email';\n\n  for (var _i = 0; _i < 3; _i += 1) {\n    borderElements[_i].style['border-color'] = null;\n  }\n\n  emailInput.focus();\n  emailInput.blur();\n}\n\nfirstNameInput.onkeypress = textFieldHandler;\nlastNameInput.onkeypress = textFieldHandler; // emailInput.onkeypress = textFieldHandler;\n\nfunction sendEmail() {\n  console.log('sendEmail');\n  var origin = window.location.origin;\n  fetch(\"\".concat(origin, \"/infinity-spine/public/php/email.php?firstname=zach\")).then(function (response) {\n    var runPhp = document.querySelector('#run-php');\n    console.log('response', response);\n    runPhp.innerHTML = response.data;\n  });\n}\n\nsubmit.onclick = function () {\n  console.log('submit.onclick'); // debugger;\n\n  formData['name-first-input'] = firstNameInput.value;\n  formData['name-last-input'] = lastNameInput.value;\n  formData.checkbox = checkbox.value;\n  formData.message = textArea.value; // validate email\n\n  var validEmail = regxTest('email', emailInput.value);\n\n  if (validEmail) {\n    formData['email-field'] = emailInput.value;\n    invalidEmail(false);\n  } else {\n    console.log('not a valid email');\n    invalidEmail(true);\n    return;\n  }\n\n  submit.classList.add('submit-btn--disabled');\n  submit.setAttribute('disabled', '');\n  sendEmail();\n};\n\nfetch('http://wp.infinityspine.com/wp-json/wp/v2/pages/2522').then(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  // console.log(res);\n  // debugger;\n  schedule.innerHTML = res.content.rendered;\n})[\"catch\"](function (err) {\n  console.error(err);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFjdC5qcz9hYTE0Il0sIm5hbWVzIjpbIm1lc3NhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbk1vdXNlZG93bkhhbmRsZXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvbm1vdXNlZG93biIsImZpcnN0TmFtZUlucHV0IiwibGFzdE5hbWVJbnB1dCIsImVtYWlsSW5wdXQiLCJjaGVja2JveCIsInRleHRBcmVhIiwic3VibWl0Iiwic2NoZWR1bGUiLCJmb3JtRGF0YSIsInJlZ3giLCJuYW1lIiwiZW1haWwiLCJyZWd4VGVzdCIsImlucHV0Iiwic3RyaW5nIiwidGVzdCIsInRleHRGaWVsZEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwiaWQiLCJzcGxpdCIsInRlc3RJbnB1dCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaW52YWxpZEVtYWlsIiwiaW52YWxpZCIsImJvcmRlckVsZW1lbnRzIiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIiwiY29sb3IiLCJpbm5lckhUTUwiLCJpIiwiZm9jdXMiLCJibHVyIiwib25rZXlwcmVzcyIsInNlbmRFbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJvcmlnaW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwicnVuUGhwIiwiZGF0YSIsIm9uY2xpY2siLCJ2YWx1ZSIsInZhbGlkRW1haWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJoYW5kbGVFcnJvcnMiLCJqc29uIiwicmVzIiwiY29udGVudCIsInJlbmRlcmVkIiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Q0FFQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFoQjs7QUFDQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QkMsWUFBVSxDQUFDLFlBQU07QUFDZkosV0FBTyxDQUFD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MEMsS0FBNUIsQ0FOcUIsQ0FRckI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHcEMsUUFBUSxDQUFDLE9BQUQsRUFBVVQsVUFBVSxDQUFDNEMsS0FBckIsQ0FBM0I7O0FBQ0EsTUFBSUMsVUFBSixFQUFnQjtBQUNkeEMsWUFBUSxDQUFDLGFBQUQsQ0FBUixHQUEwQkwsVUFBVSxDQUFDNEMsS0FBckM7QUFDQXZCLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsR0FIRCxNQUdPO0FBQ0xZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FiLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0E7QUFDRDs7QUFFRGxCLFFBQU0sQ0FBQzJDLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLHNCQUFyQjtBQUNBNUMsUUFBTSxDQUFDNkMsWUFBUCxDQUFvQixVQUFwQixFQUFnQyxFQUFoQztBQUNBaEIsV0FBUztBQUNWLENBdEJEOztBQXdCQU0sS0FBSyxDQUFDLHNEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRVSxvREFEUixFQUVHVixJQUZILENBRVEsVUFBQ0MsUUFBRDtBQUFBLFNBQWNBLFFBQVEsQ0FBQ1UsSUFBVCxFQUFkO0FBQUEsQ0FGUixFQUdHWCxJQUhILENBR1EsVUFBQ1ksR0FBRCxFQUFTO0FBQ2I7QUFDQTtBQUNBL0MsVUFBUSxDQUFDdUIsU0FBVCxHQUFxQndCLEdBQUcsQ0FBQ0MsT0FBSixDQUFZQyxRQUFqQztBQUNELENBUEgsV0FRUyxVQUFDQyxHQUFELEVBQVM7QUFDZHJCLFNBQU8sQ0FBQ3NCLEtBQVIsQ0FBY0QsR0FBZDtBQUNELENBVkgiLCJmaWxlIjoiLi9zcmMvanMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoYW5kbGVFcnJvcnMgZnJvbSAnLi91dGlscy9mZXRjaCc7XG5cbi8vIGZpeGVzIGlzc3VlIHdpdGggbWF0ZXJpYWwgdGV4dGFyZWEgbGFiZWwgZ2V0dGluZyBjdXQgb2ZmXG4vLyBieSB0aGUgaW5saW5lZCBvdmVyZmxvdyB2YWx1ZSBiZWluZyBhcHBsaWVkIGJ5IG1hdGVyaWFsLXVpXG5jb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtZmllbGQnKTtcbmZ1bmN0aW9uIG9uTW91c2Vkb3duSGFuZGxlcigpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbWVzc2FnZS5zdHlsZSA9ICd3aWR0aDogYXV0byc7XG4gIH0sIDApO1xufVxubWVzc2FnZS5vbm1vdXNlZG93biA9IG9uTW91c2Vkb3duSGFuZGxlcjtcblxuLy8gZm9ybSBzdWJtaXNzaW9uIGFuZCB2YWxpZGF0aW9uXG5jb25zdCBmaXJzdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWZpcnN0LWlucHV0Jyk7XG5jb25zdCBsYXN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtbGFzdC1pbnB1dCcpO1xuY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1pbnB1dCcpO1xuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3gtMScpO1xuY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dGFyZWEnKTtcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG5jb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2hlZHVsZScpO1xuXG5jb25zdCBmb3JtRGF0YSA9IHtcbiAgJ25hbWUtZmlyc3QtaW5wdXQnOiAnJyxcbiAgJ25hbWUtbGFzdC1pbnB1dCc6ICcnLFxuICAnZW1haWwtZmllbGQnOiAnJyxcbiAgY2hlY2tib3g6IGZhbHNlLFxuICBtZXNzYWdlOiAnJyxcbn07XG5cbmNvbnN0IHJlZ3ggPSB7XG4gIG5hbWU6IC9bYS16QS1aXS8sXG4gIGVtYWlsOiAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKihcXC5cXHd7Miw0fSkrJC8sXG59O1xuXG5mdW5jdGlvbiByZWd4VGVzdChpbnB1dCwgc3RyaW5nKSB7XG4gIHJldHVybiByZWd4W2lucHV0XS50ZXN0KHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIHRleHRGaWVsZEhhbmRsZXIoZSkge1xuICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHRlc3RJbnB1dCA9IHJlZ3hUZXN0KGlucHV0LCBlLmtleSk7XG4gIGlmICghdGVzdElucHV0KSBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGludmFsaWRFbWFpbChpbnZhbGlkKSB7XG4gIGNvbnN0IGJvcmRlckVsZW1lbnRzID0gZW1haWxJbnB1dC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmNoaWxkcmVuO1xuXG4gIGlmIChpbnZhbGlkKSB7XG4gICAgZW1haWxJbnB1dC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIGJvcmRlckVsZW1lbnRzWzFdLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgYm9yZGVyRWxlbWVudHNbMV0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gJ1lvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBib3JkZXJFbGVtZW50c1tpXS5zdHlsZVsnYm9yZGVyLWNvbG9yJ10gPSAncmVkJztcbiAgICB9XG4gICAgZW1haWxJbnB1dC5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVtYWlsSW5wdXQuc3R5bGUuY29sb3IgPSBudWxsO1xuICBib3JkZXJFbGVtZW50c1sxXS5jaGlsZHJlblswXS5zdHlsZS5jb2xvciA9IG51bGw7XG4gIGJvcmRlckVsZW1lbnRzWzFdLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9ICdZb3VyIEVtYWlsJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICBib3JkZXJFbGVtZW50c1tpXS5zdHlsZVsnYm9yZGVyLWNvbG9yJ10gPSBudWxsO1xuICB9XG4gIGVtYWlsSW5wdXQuZm9jdXMoKTtcbiAgZW1haWxJbnB1dC5ibHVyKCk7XG59XG5cbmZpcnN0TmFtZUlucHV0Lm9ua2V5cHJlc3MgPSB0ZXh0RmllbGRIYW5kbGVyO1xubGFzdE5hbWVJbnB1dC5vbmtleXByZXNzID0gdGV4dEZpZWxkSGFuZGxlcjtcbi8vIGVtYWlsSW5wdXQub25rZXlwcmVzcyA9IHRleHRGaWVsZEhhbmRsZXI7XG5cbmZ1bmN0aW9uIHNlbmRFbWFpbCgpIHtcbiAgY29uc29sZS5sb2coJ3NlbmRFbWFpbCcpO1xuICBjb25zdCB7IG9yaWdpbiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBmZXRjaChgJHtvcmlnaW59L2luZmluaXR5LXNwaW5lL3B1YmxpYy9waHAvZW1haWwucGhwP2ZpcnN0bmFtZT16YWNoYClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IHJ1blBocCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNydW4tcGhwJyk7XG4gICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICBydW5QaHAuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9KTtcbn1cblxuc3VibWl0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdWJtaXQub25jbGljaycpO1xuICAvLyBkZWJ1Z2dlcjtcbiAgZm9ybURhdGFbJ25hbWUtZmlyc3QtaW5wdXQnXSA9IGZpcnN0TmFtZUlucHV0LnZhbHVlO1xuICBmb3JtRGF0YVsnbmFtZS1sYXN0LWlucHV0J10gPSBsYXN0TmFtZUlucHV0LnZhbHVlO1xuICBmb3JtRGF0YS5jaGVja2JveCA9IGNoZWNrYm94LnZhbHVlO1xuICBmb3JtRGF0YS5tZXNzYWdlID0gdGV4dEFyZWEudmFsdWU7XG5cbiAgLy8gdmFsaWRhdGUgZW1haWxcbiAgY29uc3QgdmFsaWRFbWFpbCA9IHJlZ3hUZXN0KCdlbWFpbCcsIGVtYWlsSW5wdXQudmFsdWUpO1xuICBpZiAodmFsaWRFbWFpbCkge1xuICAgIGZvcm1EYXRhWydlbWFpbC1maWVsZCddID0gZW1haWxJbnB1dC52YWx1ZTtcbiAgICBpbnZhbGlkRW1haWwoZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdub3QgYSB2YWxpZCBlbWFpbCcpO1xuICAgIGludmFsaWRFbWFpbCh0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bi0tZGlzYWJsZWQnKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gIHNlbmRFbWFpbCgpO1xufTtcblxuZmV0Y2goJ2h0dHA6Ly93cC5pbmZpbml0eXNwaW5lLmNvbS93cC1qc29uL3dwL3YyL3BhZ2VzLzI1MjInKVxuICAudGhlbihoYW5kbGVFcnJvcnMpXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBzY2hlZHVsZS5pbm5lckhUTUwgPSByZXMuY29udGVudC5yZW5kZXJlZDtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/contact.js\n");

/***/ }),

/***/ "./src/js/utils/fetch.js":
/*!*******************************!*\
  !*** ./src/js/utils/fetch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar handleErrors = function handleErrors(response) {\n  if (!response.ok) {\n    throw Error(response.statusText);\n  }\n\n  return response;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleErrors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZmV0Y2guanM/MzZjNCJdLCJuYW1lcyI6WyJoYW5kbGVFcnJvcnMiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUNqQyxNQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixVQUFNQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csVUFBVixDQUFYO0FBQ0Q7O0FBQ0QsU0FBT0gsUUFBUDtBQUNELENBTEQ7O0FBT2VELDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL3V0aWxzL2ZldGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlRXJyb3JzID0gKHJlc3BvbnNlKSA9PiB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVFcnJvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/fetch.js\n");

/***/ })

/******/ });