webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_next_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_next_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\next-project\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var ProfileLink = function ProfileLink(props) {
  /*
    Link의
    'href'는 실제 이동할 경로
    'as'는 우리 URL에 어떻게 보일지 결정
    */
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/p/[profile]",
      as: "/p/".concat(props.profile),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        children: ["Go to ", props.profile, "'s profile"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = ProfileLink;

var Index = function Index(props) {
  _s();

  var _useState = Object(C_next_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(react__WEBPACK_IMPORTED_MODULE_7__["useState"], 2),
      nextName = _useState[0],
      setNextName = _useState[1];

  var userNameList = 'https://jsonplaceholder.typicode.com/users';
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getUserName().then(function (result) {
      console.log('결과', result.data);
    })["catch"](function (error) {
      console.log('실패', error);
    });
  }, []);
  console.log("인덱스", props);

  var getUserName = /*#__PURE__*/function () {
    var _ref = Object(C_next_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return C_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(userNameList);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getUserName() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        children: "Friends List "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(Index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c2 = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "ProfileLink");
$RefreshReg$(_c2, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZUxpbmsiLCJwcm9wcyIsInByb2ZpbGUiLCJJbmRleCIsInVzZVN0YXRlIiwibmV4dE5hbWUiLCJzZXROZXh0TmFtZSIsInVzZXJOYW1lTGlzdCIsInVzZUVmZmVjdCIsImdldFVzZXJOYW1lIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJheGlvcyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUMzQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBRUUsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksZ0JBQVY7QUFBNEIsUUFBRSxlQUFRQSxLQUFLLENBQUNDLE9BQWQsQ0FBOUI7QUFBQSw2QkFDRTtBQUFBLDZCQUFVRCxLQUFLLENBQUNDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBZEQ7O0tBQU1GLFc7O0FBZ0JOLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFGLEtBQUssRUFBSTtBQUFBOztBQUFBLHNJQUNhRyw4Q0FEYjtBQUFBLE1BQ2JDLFFBRGE7QUFBQSxNQUNIQyxXQURHOztBQUVyQixNQUFNQyxZQUFZLEdBQUcsNENBQXJCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxlQUFXLEdBQ1ZDLElBREQsQ0FDTSxVQUFDQyxNQUFELEVBQVk7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0JGLE1BQU0sQ0FBQ0csSUFBekI7QUFDRCxLQUhELFdBSU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCRSxLQUFsQjtBQUNELEtBTkQ7QUFPRCxHQVJRLEVBUVAsRUFSTyxDQUFUO0FBU0FILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJaLEtBQW5COztBQUlBLE1BQU1RLFdBQVc7QUFBQSxzUEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTE8sNENBQUssQ0FBQ0MsR0FBTixDQUFVVixZQUFWLENBREs7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYRSxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQU1BLHNCQUNBO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFEQTtBQVdELENBbENEOztHQUFNTixLOztNQUFBQSxLO0FBbUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MGJmNjEwOWUyNDQ3MmEwODdiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZmlsZUxpbmsgPSBwcm9wcyA9PiB7XHJcbiAgLypcclxuICAgIExpbmvsnZhcclxuICAgICdocmVmJ+uKlCDsi6TsoJwg7J2064+Z7ZWgIOqyveuhnFxyXG4gICAgJ2FzJ+uKlCDsmrDrpqwgVVJM7JeQIOyWtOuWu+qyjCDrs7Tsnbzsp4Ag6rKw7KCVXHJcblxyXG4gICovXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcC9bcHJvZmlsZV1gfSBhcz17YC9wLyR7cHJvcHMucHJvZmlsZX1gfT4gICAgICAgIFxyXG4gICAgICAgIDxhPkdvIHRvIHtwcm9wcy5wcm9maWxlfSdzIHByb2ZpbGU8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgWyBuZXh0TmFtZSwgc2V0TmV4dE5hbWUgXSA9IHVzZVN0YXRlXHJcbiAgY29uc3QgdXNlck5hbWVMaXN0ID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycyc7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRVc2VyTmFtZSgpXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfqsrDqs7wnLCByZXN1bHQuZGF0YSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfsi6TtjKgnLCBlcnJvcilcclxuICAgIH0pXHJcbiAgfSxbXSlcclxuICBjb25zb2xlLmxvZyhcIuyduOuNseyKpFwiLCBwcm9wcylcclxuXHJcblxyXG5cclxuICBjb25zdCBnZXRVc2VyTmFtZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldCh1c2VyTmFtZUxpc3QpXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPD5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMT5GcmllbmRzIExpc3QgPC9oMT5cclxuXHJcbiAgICA8L0xheW91dD5cclxuICA8Lz5cclxuICApO1xyXG5cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=