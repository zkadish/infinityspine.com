!function(n){var e={};function t(c){if(e[c])return e[c].exports;var Q=e[c]={i:c,l:!1,exports:{}};return n[c].call(Q.exports,Q,Q.exports,t),Q.l=!0,Q.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var Q in n)t.d(c,Q,function(e){return n[e]}.bind(null,Q));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=19)}({0:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return testimonialTags; });\n/**\n * @param {string} token\n * There are 2 tokens in the constants file\n * testimonialTags - builds the necessary html for the reviews\n * and testimonials on the home page and testimonials page\n */\nfunction testimonialTags(token) {\n  var scriptToken = document.createElement('script');\n  scriptToken.setAttribute('type', 'text/javascript');\n  scriptToken.innerHTML = \"\\n    var review_token = \\\"\".concat(token, \"\\\"; \\n    var review_target = 'review-container';\\n  \");\n  var scriptReview = document.createElement('script');\n  scriptReview.setAttribute('type', 'text/javascript');\n  scriptReview.setAttribute('src', 'https://reviewsonmywebsite.com/js/embed.js?v=7');\n  var reviewContainer = document.createElement('div');\n  reviewContainer.id = 'review-container';\n  return [scriptToken, scriptReview, reviewContainer];\n}\n/**\n * @param [string] - a string of html tags\n * documentFrag takes a string and returns it as a node element fragment\n */\n\nvar documentFrag = function documentFrag(string) {\n  return document.createRange().createContextualFragment(string);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (documentFrag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvaHRtbC5qcz81ODExIl0sIm5hbWVzIjpbInRlc3RpbW9uaWFsVGFncyIsInRva2VuIiwic2NyaXB0VG9rZW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJzY3JpcHRSZXZpZXciLCJyZXZpZXdDb250YWluZXIiLCJpZCIsImRvY3VtZW50RnJhZyIsInN0cmluZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7Ozs7QUFNTyxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUNyQyxNQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBRixhQUFXLENBQUNHLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsaUJBQWpDO0FBQ0FILGFBQVcsQ0FBQ0ksU0FBWix3Q0FDd0JMLEtBRHhCO0FBS0EsTUFBTU0sWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQUcsY0FBWSxDQUFDRixZQUFiLENBQTBCLE1BQTFCLEVBQWtDLGlCQUFsQztBQUNBRSxjQUFZLENBQUNGLFlBQWIsQ0FBMEIsS0FBMUIsRUFBaUMsZ0RBQWpDO0FBRUEsTUFBTUcsZUFBZSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBeEI7QUFDQUksaUJBQWUsQ0FBQ0MsRUFBaEIsR0FBcUIsa0JBQXJCO0FBRUEsU0FBTyxDQUFDUCxXQUFELEVBQWNLLFlBQWQsRUFBNEJDLGVBQTVCLENBQVA7QUFDRDtBQUVEOzs7OztBQUlBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQ7QUFBQSxTQUNuQlIsUUFBUSxDQUFDUyxXQUFULEdBQXVCQyx3QkFBdkIsQ0FBZ0RGLE1BQWhELENBRG1CO0FBQUEsQ0FBckI7O0FBSWVELHFFQUFmIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxuICogVGhlcmUgYXJlIDIgdG9rZW5zIGluIHRoZSBjb25zdGFudHMgZmlsZVxuICogdGVzdGltb25pYWxUYWdzIC0gYnVpbGRzIHRoZSBuZWNlc3NhcnkgaHRtbCBmb3IgdGhlIHJldmlld3NcbiAqIGFuZCB0ZXN0aW1vbmlhbHMgb24gdGhlIGhvbWUgcGFnZSBhbmQgdGVzdGltb25pYWxzIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RpbW9uaWFsVGFncyh0b2tlbikge1xuICBjb25zdCBzY3JpcHRUb2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHRUb2tlbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gIHNjcmlwdFRva2VuLmlubmVySFRNTCA9IChgXG4gICAgdmFyIHJldmlld190b2tlbiA9IFwiJHt0b2tlbn1cIjsgXG4gICAgdmFyIHJldmlld190YXJnZXQgPSAncmV2aWV3LWNvbnRhaW5lcic7XG4gIGApO1xuXG4gIGNvbnN0IHNjcmlwdFJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHRSZXZpZXcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xuICBzY3JpcHRSZXZpZXcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9yZXZpZXdzb25teXdlYnNpdGUuY29tL2pzL2VtYmVkLmpzP3Y9NycpO1xuXG4gIGNvbnN0IHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXZpZXdDb250YWluZXIuaWQgPSAncmV2aWV3LWNvbnRhaW5lcic7XG5cbiAgcmV0dXJuIFtzY3JpcHRUb2tlbiwgc2NyaXB0UmV2aWV3LCByZXZpZXdDb250YWluZXJdO1xufVxuXG4vKipcbiAqIEBwYXJhbSBbc3RyaW5nXSAtIGEgc3RyaW5nIG9mIGh0bWwgdGFnc1xuICogZG9jdW1lbnRGcmFnIHRha2VzIGEgc3RyaW5nIGFuZCByZXR1cm5zIGl0IGFzIGEgbm9kZSBlbGVtZW50IGZyYWdtZW50XG4gKi9cbmNvbnN0IGRvY3VtZW50RnJhZyA9IChzdHJpbmcpID0+IChcbiAgZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRGcmFnO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},1:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('var handleErrors = function handleErrors(response) {\n  if (!response.ok) {\n    throw Error(response.statusText);\n  }\n\n  return response;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (handleErrors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZmV0Y2guanM/MzZjNCJdLCJuYW1lcyI6WyJoYW5kbGVFcnJvcnMiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQWM7QUFDakMsTUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEIsVUFBTUMsS0FBSyxDQUFDRixRQUFRLENBQUNHLFVBQVYsQ0FBWDtBQUNEOztBQUNELFNBQU9ILFFBQVA7QUFDRCxDQUxEOztBQU9lRCxxRUFBZiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFuZGxlRXJyb3JzID0gKHJlc3BvbnNlKSA9PiB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVFcnJvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},19:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n\n\nvar pageCopy = document.querySelector('.page-copy'); // New Patient Forms\n\nfetch('http://wp.infinityspine.com/wp-json/wp/v2/pages/2575').then(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"]).then(function (response) {\n  return response.json();\n}).then(function (res) {\n  var frag = Object(_utils_html__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])(res.content.rendered);\n  pageCopy.appendChild(frag);\n}).then(function () {\n  pageCopy.classList.add('fade-in');\n})[\"catch\"](function (err) {\n  console.error(err);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbmV3LXBhdGllbnQtZm9ybXMuanM/MGZjMyJdLCJuYW1lcyI6WyJwYWdlQ29weSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZldGNoIiwidGhlbiIsImhhbmRsZUVycm9ycyIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsImZyYWciLCJkb2N1bWVudEZyYWciLCJjb250ZW50IiwicmVuZGVyZWQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCLEMsQ0FFQTs7QUFDQUMsS0FBSyxDQUFDLHNEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRQyw0REFEUixFQUVHRCxJQUZILENBRVEsVUFBQ0UsUUFBRDtBQUFBLFNBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsQ0FGUixFQUdHSCxJQUhILENBR1EsVUFBQ0ksR0FBRCxFQUFTO0FBQ2IsTUFBTUMsSUFBSSxHQUFHQyxtRUFBWSxDQUFDRixHQUFHLENBQUNHLE9BQUosQ0FBWUMsUUFBYixDQUF6QjtBQUNBWixVQUFRLENBQUNhLFdBQVQsQ0FBcUJKLElBQXJCO0FBQ0QsQ0FOSCxFQU9HTCxJQVBILENBT1EsWUFBTTtBQUNWSixVQUFRLENBQUNjLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFNBQXZCO0FBQ0QsQ0FUSCxXQVVTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxTQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNELENBWkgiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGFuZGxlRXJyb3JzIGZyb20gJy4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IGRvY3VtZW50RnJhZyBmcm9tICcuL3V0aWxzL2h0bWwnO1xuXG5jb25zdCBwYWdlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvcHknKTtcblxuLy8gTmV3IFBhdGllbnQgRm9ybXNcbmZldGNoKCdodHRwOi8vd3AuaW5maW5pdHlzcGluZS5jb20vd3AtanNvbi93cC92Mi9wYWdlcy8yNTc1JylcbiAgLnRoZW4oaGFuZGxlRXJyb3JzKVxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudEZyYWcocmVzLmNvbnRlbnQucmVuZGVyZWQpO1xuICAgIHBhZ2VDb3B5LmFwcGVuZENoaWxkKGZyYWcpO1xuICB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgcGFnZUNvcHkuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n")}});