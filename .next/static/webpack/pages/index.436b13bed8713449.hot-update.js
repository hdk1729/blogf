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

/***/ "./components/section2.js":
/*!********************************!*\
  !*** ./components/section2.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Section2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author */ \"./components/author.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Section2() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            try {\n                const response = await fetch(\"https://myblog-bk.onrender.com/api/post/posts\");\n                const data = await response.json();\n                setPosts(data.posts);\n            //console.log(data.posts);\n            } catch (error) {\n                console.error(\"Error fetching posts:\", error);\n            }\n        };\n        fetchPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container mx-auto md:px-20 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-4xl py-12 text-center\",\n                children: \"Latest Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-2 lg:grid-cols-3 gap-14\",\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Post, {\n                        post: post\n                    }, post._id, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Section2, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Section2;\nfunction Post(param) {\n    let { post  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"items\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"images\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/post/\".concat(post._id),\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: post.thumbnail.url,\n                        alt: post.title,\n                        width: 400,\n                        height: 300,\n                        className: \"rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center flex-col py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat\",\n                        children: [\n                            post.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/search?tags=\".concat(tag),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-orange-600 hover:text-orange-800\",\n                                                children: tag\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 9\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 7\n                                        }, this),\n                                        index < post.tags.length - 1 && \" | \"\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 5\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600 hover:text-gray-600\",\n                                children: [\n                                    \"- \",\n                                    new Date(post.createdAt).toLocaleDateString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                                lineNumber: 56,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/post/\".concat(post._id),\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 py-3\",\n                        children: post.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_author__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section2.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"Section2\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN2QjtBQUNFO0FBQ0Q7QUFFZCxTQUFTTSxXQUFXOztJQUNqQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLGFBQWEsVUFBWTtZQUM3QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ0wsU0FBU0ksS0FBS0wsS0FBSztZQUNuQiwwQkFBMEI7WUFDNUIsRUFBRSxPQUFPTyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztRQUNGO1FBRUFMO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNPO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXVDOzs7Ozs7MEJBR3JELDhEQUFDRTtnQkFBSUYsV0FBVTswQkFDWlYsTUFBTWEsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQzt3QkFBb0JELE1BQU1BO3VCQUFoQkEsS0FBS0UsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QixDQUFDO0dBOUJ1QmpCO0tBQUFBO0FBZ0N4QixTQUFTZ0IsS0FBSyxLQUFRLEVBQUU7UUFBVixFQUFFRCxLQUFJLEVBQUUsR0FBUjtJQUNaLHFCQUNFLDhEQUFDRjtRQUFJRixXQUFVOzswQkFDYiw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNkLGtEQUFJQTtvQkFBQ3FCLE1BQU0sU0FBa0IsT0FBVEgsS0FBS0UsR0FBRztvQkFBSUUsUUFBUTs4QkFDckMsNEVBQUNyQixtREFBS0E7d0JBQUNzQixLQUFLTCxLQUFLTSxTQUFTLENBQUNDLEdBQUc7d0JBQUVDLEtBQUtSLEtBQUtTLEtBQUs7d0JBQUVDLE9BQU87d0JBQUtDLFFBQVE7d0JBQUtmLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFGLDhEQUFDRTtnQkFBSUYsV0FBVTs7a0NBQ2YsOERBQUNFO3dCQUFJRixXQUFVOzs0QkFDbEJJLEtBQUtZLElBQUksQ0FBQ2IsR0FBRyxDQUFDLENBQUNjLEtBQUtDLHNCQUNuQiw4REFBQ0M7O3NEQUNDLDhEQUFDakMsa0RBQUlBOzRDQUFDcUIsTUFBTSxnQkFBb0IsT0FBSlU7c0RBQzFCLDRFQUFDRTtnREFBS25CLFdBQVU7MERBQXlDaUI7Ozs7Ozs7Ozs7O3dDQUUxREMsUUFBUWQsS0FBS1ksSUFBSSxDQUFDSSxNQUFNLEdBQUcsS0FBSzs7bUNBSnhCRjs7Ozs7MENBT2IsOERBQUNDO2dDQUFLbkIsV0FBVTs7b0NBQW9DO29DQUMvQyxJQUFJcUIsS0FBS2pCLEtBQUtrQixTQUFTLEVBQUVDLGtCQUFrQjs7Ozs7Ozs7Ozs7OztrQ0FHMUMsOERBQUNyQjt3QkFBSUYsV0FBVTtrQ0FDYiw0RUFBQ2Qsa0RBQUlBOzRCQUFDcUIsTUFBTSxTQUFrQixPQUFUSCxLQUFLRSxHQUFHOzRCQUFJRSxRQUFRO3NDQUN2Qyw0RUFBQ1c7Z0NBQUtuQixXQUFVOzBDQUF1REksS0FBS1MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHckYsOERBQUNXO3dCQUFFeEIsV0FBVTtrQ0FBc0JJLEtBQUtxQixPQUFPOzs7Ozs7a0NBQy9DLDhEQUFDckMsK0NBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO01BaENTaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uMi5qcz82NWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuL2F1dGhvclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uMigpIHsgIFxyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL215YmxvZy1iay5vbnJlbmRlci5jb20vYXBpL3Bvc3QvcG9zdHMnKTsgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRQb3N0cyhkYXRhLnBvc3RzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEucG9zdHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBvc3RzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgbXgtYXV0byBtZDpweC0yMCBweS0xMCc+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTR4bCBweS0xMiB0ZXh0LWNlbnRlcic+TGF0ZXN0IFBvc3Q8L2gxPlxyXG4gICAgXHJcbiAgICAgIHsvKmdyaWQgY29sdW1ucyovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMTQnPlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxQb3N0IGtleT17cG9zdC5faWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gUG9zdCh7IHBvc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbXMnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzJz5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0Ll9pZH1gfSBwYXNzSHJlZj4gXHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Bvc3QudGh1bWJuYWlsLnVybH0gYWx0PXtwb3N0LnRpdGxlfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezMwMH0gY2xhc3NOYW1lPSdyb3VuZGVkJyAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgcHktNCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXQnPlxyXG4gIHtwb3N0LnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2g/dGFncz0ke3RhZ31gfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS04MDAnPnt0YWd9PC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIHtpbmRleCA8IHBvc3QudGFncy5sZW5ndGggLSAxICYmICcgfCAnfVxyXG4gICAgPC9zcGFuPlxyXG4gICkpfVxyXG4gIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktNjAwJz5cclxuICAgIC0ge25ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0Ll9pZH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDAnPntwb3N0LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgcHktMyc+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgPEF1dGhvciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiSW1hZ2UiLCJBdXRob3IiLCJTZWN0aW9uMiIsInBvc3RzIiwic2V0UG9zdHMiLCJmZXRjaFBvc3RzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwibWFwIiwicG9zdCIsIlBvc3QiLCJfaWQiLCJocmVmIiwicGFzc0hyZWYiLCJzcmMiLCJ0aHVtYm5haWwiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwidGFncyIsInRhZyIsImluZGV4Iiwic3BhbiIsImxlbmd0aCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/section2.js\n"));

/***/ })

});