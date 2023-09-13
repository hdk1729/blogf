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

/***/ "./components/section4.js":
/*!********************************!*\
  !*** ./components/section4.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Section4; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author */ \"./components/author.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Section4() {\n    _s();\n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedTag) {\n            fetchPostsByTag(selectedTag);\n        }\n    }, [\n        selectedTag\n    ]);\n    const fetchPostsByTag = async (tag)=>{\n        try {\n            const response = await fetch(\"https://myblog-bk.onrender.com/api/post/posts?tags=\".concat(tag));\n            const data = await response.json();\n            setPosts(data.posts);\n            console.log(data.posts);\n        } catch (error) {\n            console.error(\"Error fetching posts by tag:\", error);\n        }\n    };\n    const tags = [\n        \"Nature\",\n        \"Adventure\",\n        \"health\",\n        \"travel\",\n        \"lifestyle\"\n    ]; // Add more tags as needed\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto md:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-4xl pb-12 mt-10 text-center\",\n                children: \"Tags\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-4\",\n                children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TagCard, {\n                        tag: tag,\n                        isSelected: selectedTag === tag,\n                        onSelect: ()=>setSelectedTag(tag)\n                    }, tag, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            selectedTag && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-2xl mt-8 mb-4\",\n                        children: [\n                            \"Posts with tag: \",\n                            selectedTag\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Post, {\n                            post: post\n                        }, post._id, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Section4, \"55K55fl6aM/kBWmCOLA+ZV8BA7M=\");\n_c = Section4;\nfunction TagCard(param) {\n    let { tag , isSelected , onSelect  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-200 p-2 rounded-lg cursor-pointer \".concat(isSelected ? \"bg-blue-500 text-white\" : \"\"),\n        onClick: onSelect,\n        children: tag\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TagCard;\nfunction Post(param) {\n    let { post  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"images flex flex-col justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(post._id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        src: post.thumbnail.url,\n                        alt: post.title,\n                        width: 200,\n                        height: 150,\n                        className: \"rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat\",\n                        children: [\n                            post.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/search?tags=\".concat(tag),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-orange-600 hover:text-orange-800\",\n                                        children: tag\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600 hover:text-gray-600\",\n                                children: [\n                                    \"- \",\n                                    new Date(post.createdAt).toLocaleDateString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/post/\".concat(post._id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_author__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section4.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Post;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Section4\");\n$RefreshReg$(_c1, \"TagCard\");\n$RefreshReg$(_c2, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBQ2IsNEVBQUNuQixrREFBSUE7NEJBQUM4QixNQUFNLFNBQWtCLE9BQVRKLEtBQUtFLEdBQUc7c0NBQzNCLDRFQUFDVztnQ0FBRXBCLFdBQVU7MENBQ1ZPLEtBQUtTLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWpCLDhEQUFDbEMsK0NBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO01BcENTMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uNC5qcz84ZWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEF1dGhvciBmcm9tICcuL2F1dGhvcic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb240KCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRUYWcpIHtcclxuICAgICAgZmV0Y2hQb3N0c0J5VGFnKHNlbGVjdGVkVGFnKTtcclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRUYWddKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQb3N0c0J5VGFnID0gYXN5bmMgKHRhZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9teWJsb2ctYmsub25yZW5kZXIuY29tL2FwaS9wb3N0L3Bvc3RzP3RhZ3M9JHt0YWd9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQb3N0cyhkYXRhLnBvc3RzKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5wb3N0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwb3N0cyBieSB0YWc6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhZ3MgPSBbJ05hdHVyZScsICdBZHZlbnR1cmUnLCAnaGVhbHRoJywgJ3RyYXZlbCcsICdsaWZlc3R5bGUnXTsgLy8gQWRkIG1vcmUgdGFncyBhcyBuZWVkZWRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWQ6cHgtMjBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCBwYi0xMiBtdC0xMCB0ZXh0LWNlbnRlclwiPlRhZ3M8L2gxPlxyXG5cclxuICAgICAgey8qIFRhZ3MgQ2FyZHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgPFRhZ0NhcmRcclxuICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgIHRhZz17dGFnfVxyXG4gICAgICAgICAgICBpc1NlbGVjdGVkPXtzZWxlY3RlZFRhZyA9PT0gdGFnfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gc2V0U2VsZWN0ZWRUYWcodGFnKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIERpc3BsYXkgUG9zdHMgKi99XHJcbiAgICAgIHtzZWxlY3RlZFRhZyAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgbXQtOCBtYi00XCI+UG9zdHMgd2l0aCB0YWc6IHtzZWxlY3RlZFRhZ308L2gyPlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8UG9zdCBrZXk9e3Bvc3QuX2lkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYWdDYXJkKHsgdGFnLCBpc1NlbGVjdGVkLCBvblNlbGVjdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgYmctZ3JheS0yMDAgcC0yIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICBpc1NlbGVjdGVkID8gJ2JnLWJsdWUtNTAwIHRleHQtd2hpdGUnIDogJydcclxuICAgICAgfWB9XHJcbiAgICAgIG9uQ2xpY2s9e29uU2VsZWN0fVxyXG4gICAgPlxyXG4gICAgICB7dGFnfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTUnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCc+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5faWR9YH0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtwb3N0LnRodW1ibmFpbC51cmx9XHJcbiAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8gZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdCc+XHJcbiAgICAgICAgICB7cG9zdC50YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSBocmVmPXtgL3NlYXJjaD90YWdzPSR7dGFnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTgwMCc+e3RhZ308L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS02MDAnPlxyXG4gICAgICAgICAgICAtIHtuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3QuX2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMCc+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QXV0aG9yIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkxpbmsiLCJBdXRob3IiLCJJbWFnZSIsIlNlY3Rpb240Iiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsInBvc3RzIiwic2V0UG9zdHMiLCJmZXRjaFBvc3RzQnlUYWciLCJ0YWciLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0YWdzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJUYWdDYXJkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0IiwiaDIiLCJwb3N0IiwiUG9zdCIsIl9pZCIsIm9uQ2xpY2siLCJocmVmIiwic3JjIiwidGh1bWJuYWlsIiwidXJsIiwiYWx0IiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImluZGV4IiwiYSIsInNwYW4iLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/section4.js\n"));

/***/ })

});