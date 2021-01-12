webpackHotUpdate_N_E("pages/about",{

/***/ "./components/pages/AboutPage.js":
/*!***************************************!*\
  !*** ./components/pages/AboutPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maciek\\Desktop\\CODE\\portfolio\\components\\pages\\AboutPage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StyledAboutPageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutPage__StyledAboutPageContainer",
  componentId: "b7b1eh-0"
})(["display:flex;flex-direction:column;padding:1rem;height:100%;overflow:auto;h2,h4,p{margin:0.6em 0;}@media (max-width:768px){margin-top:2em;h2,p{margin:0.6em 0;}h4{margin:0.2em 0;}}"]);
_c = StyledAboutPageContainer;
var StyledTechnologiesDisplayCase = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutPage__StyledTechnologiesDisplayCase",
  componentId: "b7b1eh-1"
})(["display:flex;flex-wrap:wrap;height:100%;justify-content:space-evenly;align-items:center;"]);
_c2 = StyledTechnologiesDisplayCase;
var StyledTechDisplayCaseItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutPage__StyledTechDisplayCaseItem",
  componentId: "b7b1eh-2"
})(["display:flex;flex-direction:column;align-items:center;padding:1rem;width:10rem;text-align:center;svg{font-size:4rem;margin-bottom:0.5em;color:#1ac966;transition:all 0.3s;&:hover{color:", "}@media (max-width:768px){font-size:3em;}}@media (max-width:1366px){width:7em;}@media (max-width:768px){width:8em;padding:0.5em;}"], function (props) {
  switch (props.icon) {
    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHtml5"]:
      return "#ff4900";

    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCss3Alt"]:
      return "#038cfc";

    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faJs"]:
      return "#ffee03";

    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faNodeJs"]:
      return "#29a600";

    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faReact"]:
      return "#30b7ff";

    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrosoft"]:
      return "#476cff";

    case _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDatabase"]:
      return "#ccc";

    case _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileExcel"]:
      return "#2e8c38";

    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPython"]:
      return "#ffe873";

    case _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGitSquare"]:
      return "#f1502f";
  }
});
_c3 = StyledTechDisplayCaseItem;

var AboutPage = function AboutPage() {
  return __jsx(StyledAboutPageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "My name is Maciej."), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "I'm a self taught software developer from Warsaw, Poland."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "I like to think of myself as a problem solver, a person that will always find a way to improve something, automate, speed up, optimize etc. - you name it. I like tinkering with stuff and undestanding how things work, so it's no wonder, that I became seriously interested in programming about 3 years ago. Since then, I always had a software project, something I'd work on (although there were quite a few couple-month-long breaks, when I'd just not code - work-life balance is important, right?)."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "In fact, this very website is a library of such projects of mine, including this website itself. All of the data here is received via GitHub's GraphQL API, so every time I make a change in any of my repositories, this change will be visible here as well."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Below is the list of most of the technologies and languages which I happened to use so far during my development as a... well, developer."), __jsx(StyledTechnologiesDisplayCase, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHtml5"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHtml5"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "HTML 5")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCss3Alt"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCss3Alt"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "CSS 3")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faJs"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faJs"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "JavaScript (ES6+)")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faNodeJs"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faNodeJs"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "Node.js")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faReact"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faReact"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "React.js")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrosoft"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMicrosoft"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, "C#")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDatabase"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDatabase"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "MS SQL")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileExcel"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileExcel"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "VBA")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPython"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPython"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, "Python")), __jsx(StyledTechDisplayCaseItem, {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGitSquare"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGitSquare"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, "GIT"))));
};

_c4 = AboutPage;
/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "StyledAboutPageContainer");
$RefreshReg$(_c2, "StyledTechnologiesDisplayCase");
$RefreshReg$(_c3, "StyledTechDisplayCaseItem");
$RefreshReg$(_c4, "AboutPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9BYm91dFBhZ2UuanMiXSwibmFtZXMiOlsiU3R5bGVkQWJvdXRQYWdlQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkVGVjaG5vbG9naWVzRGlzcGxheUNhc2UiLCJTdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtIiwicHJvcHMiLCJpY29uIiwiZmFIdG1sNSIsImZhQ3NzM0FsdCIsImZhSnMiLCJmYU5vZGVKcyIsImZhUmVhY3QiLCJmYU1pY3Jvc29mdCIsImZhRGF0YWJhc2UiLCJmYUZpbGVFeGNlbCIsImZhUHl0aG9uIiwiZmFHaXRTcXVhcmUiLCJBYm91dFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx3QkFBd0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyTEFBOUI7S0FBTUYsd0I7QUF3Qk4sSUFBTUcsNkJBQTZCLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQW5DO01BQU1DLDZCO0FBUU4sSUFBTUMseUJBQXlCLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc1VBZVYsVUFBQUcsS0FBSyxFQUFJO0FBQ2QsVUFBT0EsS0FBSyxDQUFDQyxJQUFiO0FBQ0ksU0FBS0MsMEVBQUw7QUFDSSxhQUFPLFNBQVA7O0FBQ0osU0FBS0MsNEVBQUw7QUFDSSxhQUFPLFNBQVA7O0FBQ0osU0FBS0MsdUVBQUw7QUFDSSxhQUFPLFNBQVA7O0FBQ0osU0FBS0MsMkVBQUw7QUFDSSxhQUFPLFNBQVA7O0FBQ0osU0FBS0MsMEVBQUw7QUFDSSxhQUFPLFNBQVA7O0FBQ0osU0FBS0MsOEVBQUw7QUFDSSxhQUFPLFNBQVA7O0FBQ0osU0FBS0MsNEVBQUw7QUFDSSxhQUFPLE1BQVA7O0FBQ0osU0FBS0MsNkVBQUw7QUFDSSxhQUFPLFNBQVA7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QUFpQixRQUFJLEVBQUVBLDRFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosQ0F6QkosRUE2QkksTUFBQyx5QkFBRDtBQUEyQixRQUFJLEVBQUVDLDZFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVBLDZFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosQ0E3QkosRUFpQ0ksTUFBQyx5QkFBRDtBQUEyQixRQUFJLEVBQUVDLDJFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVBLDJFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosQ0FqQ0osRUFxQ0ksTUFBQyx5QkFBRDtBQUEyQixRQUFJLEVBQUVDLDhFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVBLDhFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosQ0FyQ0osQ0FiSixDQURjO0FBQUEsQ0FBbEI7O01BQU1DLFM7QUEyRFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmQ3OTRmMTc4YmI4YWMwOTI0MjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFEYXRhYmFzZSwgZmFGaWxlRXhjZWwgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVJlYWN0LCBmYU5vZGVKcywgZmFKcywgZmFIdG1sNSwgZmFDc3MzQWx0LCBmYU1pY3Jvc29mdCwgZmFQeXRob24sIGZhR2l0U3F1YXJlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBTdHlsZWRBYm91dFBhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgaDIsIGg0LCBwIHtcclxuICAgICAgICBtYXJnaW46IDAuNmVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG5cclxuICAgICAgICBoMiwgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC42ZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFRlY2hub2xvZ2llc0Rpc3BsYXlDYXNlID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgY29sb3I6ICMxYWM5NjY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gocHJvcHMuaWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmFIdG1sNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiI2ZmNDkwMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmFDc3MzQWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjMDM4Y2ZjXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBmYUpzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjZmZlZTAzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBmYU5vZGVKczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiIzI5YTYwMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmFSZWFjdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiIzMwYjdmZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmFNaWNyb3NvZnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiM0NzZjZmZcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGZhRGF0YWJhc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiNjY2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGZhRmlsZUV4Y2VsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjMmU4YzM4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBmYVB5dGhvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiI2ZmZTg3M1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmFHaXRTcXVhcmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiNmMTUwMmZcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gICAgICAgIHdpZHRoOiA3ZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDhlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiAoXHJcbiAgICA8U3R5bGVkQWJvdXRQYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxoMj5NeSBuYW1lIGlzIE1hY2llai48L2gyPlxyXG4gICAgICAgIDxoND5JJ20gYSBzZWxmIHRhdWdodCBzb2Z0d2FyZSBkZXZlbG9wZXIgZnJvbSBXYXJzYXcsIFBvbGFuZC48L2g0PlxyXG4gICAgICAgIDxwPkkgbGlrZSB0byB0aGluayBvZiBteXNlbGYgYXMgYSBwcm9ibGVtIHNvbHZlciwgYSBwZXJzb24gdGhhdCB3aWxsIGFsd2F5cyBmaW5kIGEgd2F5IHRvIGltcHJvdmUgc29tZXRoaW5nLCBhdXRvbWF0ZSxcclxuICAgICAgICBzcGVlZCB1cCwgb3B0aW1pemUgZXRjLiAtIHlvdSBuYW1lIGl0LiBJIGxpa2UgdGlua2VyaW5nIHdpdGggc3R1ZmYgYW5kIHVuZGVzdGFuZGluZyBob3cgdGhpbmdzIHdvcmssIHNvIGl0J3Mgbm8gd29uZGVyLCBcclxuICAgICAgICB0aGF0IEkgYmVjYW1lIHNlcmlvdXNseSBpbnRlcmVzdGVkIGluIHByb2dyYW1taW5nIGFib3V0IDMgeWVhcnMgYWdvLiBTaW5jZSB0aGVuLCBJIGFsd2F5cyBoYWQgYSBzb2Z0d2FyZSBwcm9qZWN0LCBcclxuICAgICAgICBzb21ldGhpbmcgSSdkIHdvcmsgb24gKGFsdGhvdWdoIHRoZXJlIHdlcmUgcXVpdGUgYSBmZXcgY291cGxlLW1vbnRoLWxvbmcgYnJlYWtzLCB3aGVuIEknZCBqdXN0IG5vdCBjb2RlIC0gd29yay1saWZlIGJhbGFuY2VcclxuICAgICAgICBpcyBpbXBvcnRhbnQsIHJpZ2h0PykuPC9wPlxyXG4gICAgICAgIDxwPkluIGZhY3QsIHRoaXMgdmVyeSB3ZWJzaXRlIGlzIGEgbGlicmFyeSBvZiBzdWNoIHByb2plY3RzIG9mIG1pbmUsIGluY2x1ZGluZyB0aGlzIHdlYnNpdGUgaXRzZWxmLiBcclxuICAgICAgICBBbGwgb2YgdGhlIGRhdGEgaGVyZSBpcyByZWNlaXZlZCB2aWEgR2l0SHViJ3MgR3JhcGhRTCBBUEksIHNvIGV2ZXJ5IHRpbWUgSSBtYWtlIGEgY2hhbmdlIGluIGFueSBvZiBteSByZXBvc2l0b3JpZXMsIFxyXG4gICAgICAgIHRoaXMgY2hhbmdlIHdpbGwgYmUgdmlzaWJsZSBoZXJlIGFzIHdlbGwuPC9wPlxyXG4gICAgICAgIDxwPkJlbG93IGlzIHRoZSBsaXN0IG9mIG1vc3Qgb2YgdGhlIHRlY2hub2xvZ2llcyBhbmQgbGFuZ3VhZ2VzIHdoaWNoIEkgaGFwcGVuZWQgdG8gdXNlIHNvIGZhciBcclxuICAgICAgICBkdXJpbmcgbXkgZGV2ZWxvcG1lbnQgYXMgYS4uLiB3ZWxsLCBkZXZlbG9wZXIuPC9wPlxyXG4gICAgICAgIDxTdHlsZWRUZWNobm9sb2dpZXNEaXNwbGF5Q2FzZT5cclxuICAgICAgICAgICAgPFN0eWxlZFRlY2hEaXNwbGF5Q2FzZUl0ZW0gaWNvbj17ZmFIdG1sNX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSHRtbDV9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5IVE1MIDU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGVjaERpc3BsYXlDYXNlSXRlbT5cclxuICAgICAgICAgICAgPFN0eWxlZFRlY2hEaXNwbGF5Q2FzZUl0ZW0gaWNvbj17ZmFDc3MzQWx0fT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDc3MzQWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Q1NTIDM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGVjaERpc3BsYXlDYXNlSXRlbT5cclxuICAgICAgICAgICAgPFN0eWxlZFRlY2hEaXNwbGF5Q2FzZUl0ZW0gaWNvbj17ZmFKc30+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5KYXZhU2NyaXB0IChFUzYrKTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGVjaERpc3BsYXlDYXNlSXRlbSBpY29uPXtmYU5vZGVKc30+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTm9kZUpzfSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Tm9kZS5qczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGVjaERpc3BsYXlDYXNlSXRlbSBpY29uPXtmYVJlYWN0fT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFSZWFjdH0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlJlYWN0LmpzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRlY2hEaXNwbGF5Q2FzZUl0ZW0+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtIGljb249e2ZhTWljcm9zb2Z0fT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaWNyb3NvZnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5DIzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGVjaERpc3BsYXlDYXNlSXRlbSBpY29uPXtmYURhdGFiYXNlfT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEYXRhYmFzZX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk1TIFNRTDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGVjaERpc3BsYXlDYXNlSXRlbSBpY29uPXtmYUZpbGVFeGNlbH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmlsZUV4Y2VsfSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VkJBPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRlY2hEaXNwbGF5Q2FzZUl0ZW0+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtIGljb249e2ZhUHl0aG9ufT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQeXRob259IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QeXRob248L3NwYW4+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGVjaERpc3BsYXlDYXNlSXRlbT5cclxuICAgICAgICAgICAgPFN0eWxlZFRlY2hEaXNwbGF5Q2FzZUl0ZW0gaWNvbj17ZmFHaXRTcXVhcmV9PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdFNxdWFyZX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkdJVDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9TdHlsZWRUZWNoRGlzcGxheUNhc2VJdGVtPlxyXG4gICAgICAgIDwvU3R5bGVkVGVjaG5vbG9naWVzRGlzcGxheUNhc2U+XHJcbiAgICA8L1N0eWxlZEFib3V0UGFnZUNvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==