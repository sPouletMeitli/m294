"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchList.js":
/*!**********************************!*\
  !*** ./components/SearchList.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SearchList(props) {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredNames, setFilteredNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [names, setNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _props_names;\n        setNames((_props_names = props.names) !== null && _props_names !== void 0 ? _props_names : []);\n    }, [\n        props.names\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (query) {\n            setFilteredNames(names.filter((name)=>name.toLowerCase().includes(query.toLowerCase())));\n        } else {\n            setFilteredNames([]);\n        }\n    }, [\n        query,\n        names\n    ]);\n    const handleChange = (e)=>{\n        setQuery(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"filter...\",\n                value: query,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/home/jori/m294/auftrag-react-hooks-2/components/SearchList.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: (filteredNames.length > 0 ? filteredNames : names).map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"/home/jori/m294/auftrag-react-hooks-2/components/SearchList.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/jori/m294/auftrag-react-hooks-2/components/SearchList.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jori/m294/auftrag-react-hooks-2/components/SearchList.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(SearchList, \"z1gSxmII/guU8niISOv8FlLuaPQ=\");\n_c = SearchList;\nvar _c;\n$RefreshReg$(_c, \"SearchList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaExpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRSxXQUFXQyxLQUFLOztJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUM7WUFDR0U7UUFBVE0sU0FBU04sQ0FBQUEsZUFBQUEsTUFBTUssbUJBQU5MLDBCQUFBQSxlQUFlLEVBQUU7SUFDOUIsR0FBRztRQUFDQSxNQUFNSztLQUFNO0lBRWhCUCxnREFBU0EsQ0FBQztRQUNOLElBQUlHLE9BQU87WUFDUEcsaUJBQ0lDLE1BQU1FLE9BQU8sQ0FBQ0MsT0FDVkEsS0FBS0MsY0FBY0MsU0FBU1QsTUFBTVE7UUFHOUMsT0FBTztZQUNITCxpQkFBaUIsRUFBRTtRQUN2QjtJQUNKLEdBQUc7UUFBQ0g7UUFBT0k7S0FBTTtJQUVqQixNQUFNTSxlQUFlLENBQUNDO1FBQ2xCVixTQUFTVSxFQUFFQyxPQUFPQztJQUN0QjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaSixPQUFPYjtnQkFDUGtCLFVBQVVSOzs7Ozs7MEJBRWQsOERBQUNTOzBCQUNJLENBQUNqQixjQUFja0IsU0FBUyxJQUFJbEIsZ0JBQWdCRSxLQUFJLEVBQUdpQixJQUFJLENBQUNkLHFCQUNyRCw4REFBQ2U7a0NBQWVmO3VCQUFQQTs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQXhDd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC5qcz9hOGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaExpc3QocHJvcHMpIHtcclxuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZmlsdGVyZWROYW1lcywgc2V0RmlsdGVyZWROYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldE5hbWVzKHByb3BzLm5hbWVzID8/IFtdKTtcclxuICAgIH0sIFtwcm9wcy5uYW1lc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkTmFtZXMoXHJcbiAgICAgICAgICAgICAgICBuYW1lcy5maWx0ZXIoKG5hbWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RmlsdGVyZWROYW1lcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3F1ZXJ5LCBuYW1lc10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmaWx0ZXIuLi5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgeyhmaWx0ZXJlZE5hbWVzLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZE5hbWVzIDogbmFtZXMpLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoTGlzdCIsInByb3BzIiwicXVlcnkiLCJzZXRRdWVyeSIsImZpbHRlcmVkTmFtZXMiLCJzZXRGaWx0ZXJlZE5hbWVzIiwibmFtZXMiLCJzZXROYW1lcyIsImZpbHRlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInVsIiwibGVuZ3RoIiwibWFwIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SearchList.js\n"));

/***/ })

});