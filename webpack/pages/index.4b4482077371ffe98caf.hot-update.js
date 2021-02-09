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
  var linkStyle = {
    display: block
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/p/[profile]",
      as: "/p/".concat(props.profile),
      style: linkStyle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        children: ["Go to ", props.profile, "'s profile"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = ProfileLink;

var Index = function Index(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      jsonData = _useState[0],
      setJsonData = _useState[1];

  var userNameList = 'https://jsonplaceholder.typicode.com/users';
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    getUserName().then(function (result) {
      console.log('결과', result.data);
      setJsonData(result.data);
    })["catch"](function (error) {
      console.log('실패', error);
    });
  }, []);
  console.log("인덱스", props);
  console.log("넥스트네임", jsonData);

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Friends List "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, _this), jsonData.map(function (data) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ProfileLink, {
          profile: data.name
        }, data.id, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(Index, "zpOqN+vz5eL+YWDQc3RoTvxrD3Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZUxpbmsiLCJwcm9wcyIsImxpbmtTdHlsZSIsImRpc3BsYXkiLCJibG9jayIsInByb2ZpbGUiLCJJbmRleCIsInVzZVN0YXRlIiwianNvbkRhdGEiLCJzZXRKc29uRGF0YSIsInVzZXJOYW1lTGlzdCIsInVzZUVmZmVjdCIsImdldFVzZXJOYW1lIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJheGlvcyIsImdldCIsIm1hcCIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLLEVBQUk7QUFDM0I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUVFLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsV0FBTyxFQUFDQztBQURRLEdBQWxCO0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksZ0JBQVY7QUFBNEIsUUFBRSxlQUFRSCxLQUFLLENBQUNJLE9BQWQsQ0FBOUI7QUFBdUQsV0FBSyxFQUFFSCxTQUE5RDtBQUFBLDZCQUNFO0FBQUEsNkJBQVVELEtBQUssQ0FBQ0ksT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQ0FsQkQ7O0tBQU1MLFc7O0FBb0JOLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFMLEtBQUssRUFBSTtBQUFBOztBQUFBLGtCQUNhTSxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNiQyxRQURhO0FBQUEsTUFDSEMsV0FERzs7QUFFckIsTUFBTUMsWUFBWSxHQUFHLDRDQUFyQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZUFBVyxHQUNWQyxJQURELENBQ00sVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCRixNQUFNLENBQUNHLElBQXpCO0FBQ0FSLGlCQUFXLENBQUNLLE1BQU0sQ0FBQ0csSUFBUixDQUFYO0FBQ0QsS0FKRCxXQUtPLFVBQUNDLEtBQUQsRUFBVztBQUNoQkgsYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkUsS0FBbEI7QUFDRCxLQVBEO0FBUUQsR0FUUSxFQVNQLEVBVE8sQ0FBVDtBQVVBSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CZixLQUFuQjtBQUNBYyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCUixRQUFyQjs7QUFHQSxNQUFNSSxXQUFXO0FBQUEsc1BBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0xPLDRDQUFLLENBQUNDLEdBQU4sQ0FBVVYsWUFBVixDQURLOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEUsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFNQSxzQkFDQTtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUdJSixRQUFRLENBQUNhLEdBQVQsQ0FBYSxVQUFDSixJQUFEO0FBQUEsNEJBQ1gscUVBQUMsV0FBRDtBQUEyQixpQkFBTyxFQUFFQSxJQUFJLENBQUNLO0FBQXpDLFdBQWtCTCxJQUFJLENBQUNNLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFiLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREE7QUFlRCxDQXZDRDs7R0FBTWpCLEs7O01BQUFBLEs7QUF3Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiNDQ4MjA3NzM3MWZmZTk4Y2FmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9maWxlTGluayA9IHByb3BzID0+IHtcclxuICAvKlxyXG4gICAgTGlua+ydmFxyXG4gICAgJ2hyZWYn64qUIOyLpOygnCDsnbTrj5ntlaAg6rK966GcXHJcbiAgICAnYXMn64qUIOyasOumrCBVUkzsl5Ag7Ja065a76rKMIOuztOydvOyngCDqsrDsoJVcclxuXHJcbiAgKi9cclxuICBjb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpbmsgaHJlZj17YC9wL1twcm9maWxlXWB9IGFzPXtgL3AvJHtwcm9wcy5wcm9maWxlfWB9IHN0eWxlPXtsaW5rU3R5bGV9PiAgICAgICAgXHJcbiAgICAgICAgPGE+R28gdG8ge3Byb3BzLnByb2ZpbGV9J3MgcHJvZmlsZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcclxuICBjb25zdCBbIGpzb25EYXRhLCBzZXRKc29uRGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHVzZXJOYW1lTGlzdCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXNlck5hbWUoKVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn6rKw6rO8JywgcmVzdWx0LmRhdGEpXHJcbiAgICAgIHNldEpzb25EYXRhKHJlc3VsdC5kYXRhKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ+yLpO2MqCcsIGVycm9yKVxyXG4gICAgfSlcclxuICB9LFtdKVxyXG4gIGNvbnNvbGUubG9nKFwi7J24642x7IqkXCIsIHByb3BzKVxyXG4gIGNvbnNvbGUubG9nKFwi64Sl7Iqk7Yq464Sk7J6EXCIsIGpzb25EYXRhKVxyXG5cclxuXHJcbiAgY29uc3QgZ2V0VXNlck5hbWUgPSBhc3luYygpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQodXNlck5hbWVMaXN0KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gIDw+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+RnJpZW5kcyBMaXN0IDwvaDE+XHJcbiAgICAgIHtcclxuICAgICAgICBqc29uRGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgIDxQcm9maWxlTGluayBrZXk9e2RhdGEuaWR9IHByb2ZpbGU9e2RhdGEubmFtZX0+PC9Qcm9maWxlTGluaz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L0xheW91dD5cclxuICA8Lz5cclxuICApO1xyXG5cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=