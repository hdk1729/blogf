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

/***/ "./components/section1.js":
/*!********************************!*\
  !*** ./components/section1.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Section1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author */ \"./components/author.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Import Swiper React components\n\n// Import Swiper styles\n\n\nfunction Section1() {\n    _s();\n    const [slides, setSlides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchSlides = async ()=>{\n            try {\n                const response = await fetch(\"https://myblog-bk.onrender.com/api/post/trending\");\n                const data = await response.json();\n                setSlides(data.posts);\n            //console.log(data.posts);\n            } catch (error) {\n                console.error(\"Error fetching slides:\", error);\n            }\n        };\n        fetchSlides();\n    }, []);\n    //const bg={\n    //background:\"url('images/background/bg2.jpg') no-repeat\",\n    //backgroundPosition:\"right\"\n    // }\n    swiper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay\n    ]);\n    return(// <section className=\"py-16\" style={bg}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto md:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-4xl pb-12  mt-10 text-center\",\n                children: \"Trending\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {\n                slidesPerView: 1,\n                autoplay: {\n                    delay: 2000\n                },\n                children: slides.map((slide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {\n                            slide: slide\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, slide._id, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n        lineNumber: 37,\n        columnNumber: 6\n    }, this));\n}\n_s(Section1, \"KVoJDyX2IiQ2FdwKb/ySwq7FjXI=\");\n_c = Section1;\nfunction Slide(param) {\n    let { slide  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid md:grid-cols-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image mx-20 mr-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(slide._id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: slide.thumbnail.url,\n                        alt: slide.title,\n                        width: 500,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center ml-0 mx-0 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat\",\n                        children: [\n                            slide.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/search?tags=\".concat(tag),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-orange-600 hover:text-orange-800\",\n                                        children: tag\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600 hover:text-gray-600\",\n                                children: [\n                                    \"- \",\n                                    new Date(slide.createdAt).toLocaleDateString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/post/\".concat(slide._id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: slide.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 py-3\",\n                        children: slide.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Slide;\nvar _c, _c1;\n$RefreshReg$(_c, \"Section1\");\n$RefreshReg$(_c1, \"Slide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24xLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDckI7QUFDRDtBQUNBO0FBQzdCLGlDQUFpQztBQUNrQjtBQUNuRCx1QkFBdUI7QUFDb0I7QUFDdkI7QUFHTCxTQUFTVSxXQUFXOztJQUNqQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUN2Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1XLGNBQWMsVUFBWTtZQUM5QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ0wsVUFBVUksS0FBS0UsS0FBSztZQUNwQiwwQkFBMEI7WUFDNUIsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBRUFOO0lBQ0YsR0FBRyxFQUFFO0lBRUwsWUFBWTtJQUNYLDBEQUEwRDtJQUMxRCw0QkFBNEI7SUFDOUIsSUFBSTtJQUNGTCxrREFBYyxDQUFDO1FBQUNDLDRDQUFRQTtLQUFDO0lBRTFCLE9BQ0MseUNBQXlDO2tCQUN2Qyw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE4Qzs7Ozs7OzBCQUU1RCw4REFBQ2pCLGdEQUFNQTtnQkFBQ21CLGVBQWU7Z0JBQUdDLFVBQVU7b0JBQUVDLE9BQU87Z0JBQUs7MEJBQ2pEaEIsT0FBT2lCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ3RCLHFEQUFXQTtrQ0FDViw0RUFBQ3VCOzRCQUFNRCxPQUFPQTs7Ozs7O3VCQURFQSxNQUFNRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBUW5DLENBQUM7R0F0Q3VCckI7S0FBQUE7QUF5Q3hCLFNBQVNvQixNQUFNLEtBQVMsRUFBRTtRQUFYLEVBQUVELE1BQUssRUFBRSxHQUFUO0lBQ2IscUJBQ0UsOERBQUNQO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ25CLGtEQUFJQTtvQkFBQzRCLE1BQU0sU0FBbUIsT0FBVkgsTUFBTUUsR0FBRzs4QkFDNUIsNEVBQUM1QixtREFBS0E7d0JBQ0o4QixLQUFLSixNQUFNSyxTQUFTLENBQUNDLEdBQUc7d0JBQ3hCQyxLQUFLUCxNQUFNUSxLQUFLO3dCQUNoQkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJZCw4REFBQ2pCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUNaTSxNQUFNVyxJQUFJLENBQUNaLEdBQUcsQ0FBQyxDQUFDYSxLQUFLQyxzQkFDcEIsOERBQUN0QyxrREFBSUE7b0NBQWE0QixNQUFNLGdCQUFvQixPQUFKUzs4Q0FDdEMsNEVBQUNFO3dDQUFLcEIsV0FBVTtrREFDYmtCOzs7Ozs7bUNBRk1DOzs7OzswQ0FNYiw4REFBQ0M7Z0NBQUtwQixXQUFVOztvQ0FBb0M7b0NBQy9DLElBQUlxQixLQUFLZixNQUFNZ0IsU0FBUyxFQUFFQyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7a0NBR25ELDhEQUFDeEI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNuQixrREFBSUE7NEJBQUM0QixNQUFNLFNBQW1CLE9BQVZILE1BQU1FLEdBQUc7c0NBQzVCLDRFQUFDWTtnQ0FBS3BCLFdBQVU7MENBQ2JNLE1BQU1RLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWxCLDhEQUFDVTt3QkFBRXhCLFdBQVU7a0NBQXNCTSxNQUFNbUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hEO01BdENTbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uMS5qcz83ZDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgTGluayAgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vYXV0aG9yXCJcclxuLy8gSW1wb3J0IFN3aXBlciBSZWFjdCBjb21wb25lbnRzXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xyXG5pbXBvcnQgU3dpcGVyQ29yZSx7QXV0b3BsYXl9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbjEoKSB7XHJcbiAgY29uc3QgW3NsaWRlcywgc2V0U2xpZGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hTbGlkZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9teWJsb2ctYmsub25yZW5kZXIuY29tL2FwaS9wb3N0L3RyZW5kaW5nJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRTbGlkZXMoZGF0YS5wb3N0cyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnBvc3RzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzbGlkZXM6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoU2xpZGVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvL2NvbnN0IGJnPXtcclxuICAgLy9iYWNrZ3JvdW5kOlwidXJsKCdpbWFnZXMvYmFja2dyb3VuZC9iZzIuanBnJykgbm8tcmVwZWF0XCIsXHJcbiAgIC8vYmFja2dyb3VuZFBvc2l0aW9uOlwicmlnaHRcIlxyXG4gLy8gfVxyXG4gICBTd2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAvLyA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiIHN0eWxlPXtiZ30+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtZDpweC0yMFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHBiLTEyICBtdC0xMCB0ZXh0LWNlbnRlclwiPlRyZW5kaW5nPC9oMT5cclxuICAgICAgXHJcbiAgICAgIDxTd2lwZXIgc2xpZGVzUGVyVmlldz17MX0gYXV0b3BsYXk9e3sgZGVsYXk6IDIwMDAgfX0+XHJcbiAgICAgIHtzbGlkZXMubWFwKChzbGlkZSkgPT4gKFxyXG4gICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e3NsaWRlLl9pZH0+XHJcbiAgICAgICAgICA8U2xpZGUgc2xpZGU9e3NsaWRlfSAvPlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Td2lwZXI+XHJcbiAgICAgPC9kaXY+XHJcbiAgIC8vIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTbGlkZSh7IHNsaWRlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgbXgtMjAgbXItMjBcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtzbGlkZS5faWR9YH0+IFxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17c2xpZGUudGh1bWJuYWlsLnVybH1cclxuICAgICAgICAgICAgYWx0PXtzbGlkZS50aXRsZX1cclxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBmbGV4IGp1c3RpZnktY2VudGVyIG1sLTAgbXgtMCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0XCI+XHJcbiAgICAgICAgICB7c2xpZGUudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17YC9zZWFyY2g/dGFncz0ke3RhZ31gfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDAgaG92ZXI6dGV4dC1vcmFuZ2UtODAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgLSB7bmV3IERhdGUoc2xpZGUuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtzbGlkZS5faWR9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICB7c2xpZGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHB5LTNcIj57c2xpZGUuY29udGVudH08L3A+XHJcbiAgICAgICAgey8qIEF1dGhvciBjb21wb25lbnQgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJMaW5rIiwiQXV0aG9yIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJTd2lwZXJDb3JlIiwiQXV0b3BsYXkiLCJTZWN0aW9uMSIsInNsaWRlcyIsInNldFNsaWRlcyIsImZldGNoU2xpZGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicG9zdHMiLCJlcnJvciIsImNvbnNvbGUiLCJ1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNsaWRlc1BlclZpZXciLCJhdXRvcGxheSIsImRlbGF5IiwibWFwIiwic2xpZGUiLCJTbGlkZSIsIl9pZCIsImhyZWYiLCJzcmMiLCJ0aHVtYm5haWwiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwidGFncyIsInRhZyIsImluZGV4Iiwic3BhbiIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/section1.js\n"));

/***/ })

});