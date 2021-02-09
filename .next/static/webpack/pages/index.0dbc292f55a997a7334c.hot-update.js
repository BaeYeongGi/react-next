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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\next-project\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var ProfileLink = function ProfileLink(props) {
  /*
    Link의
    'href'는 실제 이동할 경로
    'as'는 우리 URL에 어떻게 보일지 결정
    */
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/p/[profile]",
      as: "/p/".concat(props.profile),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      nextName = _useState[0],
      setNextName = _useState[1];

  var userNameList = 'https://jsonplaceholder.typicode.com/users';
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    getUserName().then(function (result) {
      console.log('결과', result.data);
      set(result.data);
    })["catch"](function (error) {
      console.log('실패', error);
    });
  }, []);
  console.log("인덱스", props);
  console.log("넥스트네임", nextName);

  var getUserName = /*#__PURE__*/function () {
    var _ref = Object(C_next_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return C_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(userNameList);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Friends List "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(Index, "8wR0EbL9CAzeCE4Kumn1JGQz95k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZUxpbmsiLCJwcm9wcyIsInByb2ZpbGUiLCJJbmRleCIsInVzZVN0YXRlIiwibmV4dE5hbWUiLCJzZXROZXh0TmFtZSIsInVzZXJOYW1lTGlzdCIsInVzZUVmZmVjdCIsImdldFVzZXJOYW1lIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic2V0IiwiZXJyb3IiLCJheGlvcyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUVFLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLGdCQUFWO0FBQTRCLFFBQUUsZUFBUUEsS0FBSyxDQUFDQyxPQUFkLENBQTlCO0FBQUEsNkJBQ0U7QUFBQSw2QkFBVUQsS0FBSyxDQUFDQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFPRCxDQWREOztLQUFNRixXOztBQWdCTixJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBRixLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDYUcsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDYkMsUUFEYTtBQUFBLE1BQ0hDLFdBREc7O0FBRXJCLE1BQU1DLFlBQVksR0FBRyw0Q0FBckI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGVBQVcsR0FDVkMsSUFERCxDQUNNLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkYsTUFBTSxDQUFDRyxJQUF6QjtBQUNBQyxTQUFHLENBQUNKLE1BQU0sQ0FBQ0csSUFBUixDQUFIO0FBQ0QsS0FKRCxXQUtPLFVBQUNFLEtBQUQsRUFBVztBQUNoQkosYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkcsS0FBbEI7QUFDRCxLQVBEO0FBUUQsR0FUUSxFQVNQLEVBVE8sQ0FBVDtBQVVBSixTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CWixLQUFuQjtBQUNBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCUixRQUFyQjs7QUFHQSxNQUFNSSxXQUFXO0FBQUEsc1BBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0xRLDRDQUFLLENBQUNDLEdBQU4sQ0FBVVgsWUFBVixDQURLOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEUsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFNQSxzQkFDQTtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREE7QUFXRCxDQW5DRDs7R0FBTU4sSzs7TUFBQUEsSztBQW9DU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGRiYzI5MmY1NWE5OTdhNzMzNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGVMaW5rID0gcHJvcHMgPT4ge1xyXG4gIC8qXHJcbiAgICBMaW5r7J2YXHJcbiAgICAnaHJlZifripQg7Iuk7KCcIOydtOuPme2VoCDqsr3roZxcclxuICAgICdhcyfripQg7Jqw66asIFVSTOyXkCDslrTrlrvqsowg67O07J287KeAIOqysOyglVxyXG5cclxuICAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGluayBocmVmPXtgL3AvW3Byb2ZpbGVdYH0gYXM9e2AvcC8ke3Byb3BzLnByb2ZpbGV9YH0+ICAgICAgICBcclxuICAgICAgICA8YT5HbyB0byB7cHJvcHMucHJvZmlsZX0ncyBwcm9maWxlPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFsgbmV4dE5hbWUsIHNldE5leHROYW1lIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgdXNlck5hbWVMaXN0ID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycyc7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRVc2VyTmFtZSgpXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfqsrDqs7wnLCByZXN1bHQuZGF0YSlcclxuICAgICAgc2V0KHJlc3VsdC5kYXRhKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ+yLpO2MqCcsIGVycm9yKVxyXG4gICAgfSlcclxuICB9LFtdKVxyXG4gIGNvbnNvbGUubG9nKFwi7J24642x7IqkXCIsIHByb3BzKVxyXG4gIGNvbnNvbGUubG9nKFwi64Sl7Iqk7Yq464Sk7J6EXCIsIG5leHROYW1lKVxyXG5cclxuXHJcbiAgY29uc3QgZ2V0VXNlck5hbWUgPSBhc3luYygpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQodXNlck5hbWVMaXN0KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gIDw+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+RnJpZW5kcyBMaXN0IDwvaDE+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPC8+XHJcbiAgKTtcclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9