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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Section1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author */ \"./components/author.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Import Swiper React components\n\n// Import Swiper styles\n\n\nfunction Section1() {\n    _s();\n    const [slides, setSlides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchSlides = async ()=>{\n            try {\n                const response = await fetch(\"https://myblog-bk.onrender.com/api/post/trending\");\n                const data = await response.json();\n                setSlides(data.posts);\n            //console.log(data.posts);\n            } catch (error) {\n                console.error(\"Error fetching slides:\", error);\n            }\n        };\n        fetchSlides();\n    }, []);\n    //const bg={\n    //background:\"url('images/background/bg2.jpg') no-repeat\",\n    //backgroundPosition:\"right\"\n    // }\n    swiper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay\n    ]);\n    return(// <section className=\"py-16\" style={bg}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto md:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-4xl pb-12  mt-10 text-center\",\n                children: \"Trending\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {\n                slidesPerView: 1,\n                autoplay: {\n                    delay: 2000\n                },\n                children: slides.map((slide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {\n                            slide: slide\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, slide._id, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n        lineNumber: 37,\n        columnNumber: 6\n    }, this));\n}\n_s(Section1, \"KVoJDyX2IiQ2FdwKb/ySwq7FjXI=\");\n_c = Section1;\nfunction Slide(param) {\n    let { slide  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid md:grid-cols-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image mx-20 mr-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(slide._id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: slide.image,\n                        alt: slide.title,\n                        width: 500,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center ml-0 mx-0 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat \",\n                        children: [\n                            slide.categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: category.link,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-orange-600 hover:text-orange-800\",\n                                        children: category.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                }, category, false, {\n                                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600 hover:text-gray-600\",\n                                children: [\n                                    \"- \",\n                                    new Date(slide.date).toLocaleDateString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: slide.link,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: slide.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 py-3\",\n                        children: slide.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Slide;\nvar _c, _c1;\n$RefreshReg$(_c, \"Section1\");\n$RefreshReg$(_c1, \"Slide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24xLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDckI7QUFDRDtBQUNBO0FBQzdCLGlDQUFpQztBQUNrQjtBQUNuRCx1QkFBdUI7QUFDb0I7QUFDdkI7QUFHTCxTQUFTVSxXQUFXOztJQUNqQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUN2Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1XLGNBQWMsVUFBWTtZQUM5QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ0wsVUFBVUksS0FBS0UsS0FBSztZQUNwQiwwQkFBMEI7WUFDNUIsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBRUFOO0lBQ0YsR0FBRyxFQUFFO0lBRUwsWUFBWTtJQUNYLDBEQUEwRDtJQUMxRCw0QkFBNEI7SUFDOUIsSUFBSTtJQUNGTCxrREFBYyxDQUFDO1FBQUNDLDRDQUFRQTtLQUFDO0lBRTFCLE9BQ0MseUNBQXlDO2tCQUN2Qyw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE4Qzs7Ozs7OzBCQUU1RCw4REFBQ2pCLGdEQUFNQTtnQkFBQ21CLGVBQWU7Z0JBQUdDLFVBQVU7b0JBQUVDLE9BQU87Z0JBQUs7MEJBQ2pEaEIsT0FBT2lCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ3RCLHFEQUFXQTtrQ0FDViw0RUFBQ3VCOzRCQUFNRCxPQUFPQTs7Ozs7O3VCQURFQSxNQUFNRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBUW5DLENBQUM7R0F0Q3VCckI7S0FBQUE7QUF5Q3hCLFNBQVNvQixNQUFNLEtBQVMsRUFBRTtRQUFYLEVBQUVELE1BQUssRUFBRSxHQUFUO0lBQ2IscUJBQ0UsOERBQUNQO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ25CLGtEQUFJQTtvQkFBQzRCLE1BQU0sU0FBbUIsT0FBVkgsTUFBTUUsR0FBRzs4QkFDNUIsNEVBQUM1QixtREFBS0E7d0JBQ0o4QixLQUFLSixNQUFNSyxLQUFLO3dCQUNoQkMsS0FBS04sTUFBTU8sS0FBSzt3QkFDaEJDLE9BQU87d0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUNoQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDWk0sTUFBTVUsVUFBVSxDQUFDWCxHQUFHLENBQUMsQ0FBQ1kseUJBQ3JCLDhEQUFDcEMsa0RBQUlBO29DQUFnQjRCLE1BQU1RLFNBQVNDLElBQUk7OENBQ3RDLDRFQUFDQzt3Q0FBRW5CLFdBQVU7a0RBQ1ZpQixTQUFTRyxJQUFJOzs7Ozs7bUNBRlBIOzs7OzswQ0FNYiw4REFBQ0k7Z0NBQUtyQixXQUFVOztvQ0FBb0M7b0NBQy9DLElBQUlzQixLQUFLaEIsTUFBTWlCLElBQUksRUFBRUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7O2tDQUc5Qyw4REFBQ3pCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDbkIsa0RBQUlBOzRCQUFDNEIsTUFBTUgsTUFBTVksSUFBSTtzQ0FDcEIsNEVBQUNDO2dDQUFFbkIsV0FBVTswQ0FDVk0sTUFBTU8sS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJbEIsOERBQUNZO3dCQUFFekIsV0FBVTtrQ0FBc0JNLE1BQU1vQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUQ7TUF0Q1NuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb24xLmpzPzdkMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBMaW5rICBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9hdXRob3JcIlxyXG4vLyBJbXBvcnQgU3dpcGVyIFJlYWN0IGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXHJcbmltcG9ydCBTd2lwZXJDb3JlLHtBdXRvcGxheX0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uMSgpIHtcclxuICBjb25zdCBbc2xpZGVzLCBzZXRTbGlkZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFNsaWRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL215YmxvZy1iay5vbnJlbmRlci5jb20vYXBpL3Bvc3QvdHJlbmRpbmcnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFNsaWRlcyhkYXRhLnBvc3RzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEucG9zdHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNsaWRlczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hTbGlkZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vY29uc3QgYmc9e1xyXG4gICAvL2JhY2tncm91bmQ6XCJ1cmwoJ2ltYWdlcy9iYWNrZ3JvdW5kL2JnMi5qcGcnKSBuby1yZXBlYXRcIixcclxuICAgLy9iYWNrZ3JvdW5kUG9zaXRpb246XCJyaWdodFwiXHJcbiAvLyB9XHJcbiAgIFN3aXBlckNvcmUudXNlKFtBdXRvcGxheV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgIC8vIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCIgc3R5bGU9e2JnfT5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1kOnB4LTIwXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgcGItMTIgIG10LTEwIHRleHQtY2VudGVyXCI+VHJlbmRpbmc8L2gxPlxyXG4gICAgICBcclxuICAgICAgPFN3aXBlciBzbGlkZXNQZXJWaWV3PXsxfSBhdXRvcGxheT17eyBkZWxheTogMjAwMCB9fT5cclxuICAgICAge3NsaWRlcy5tYXAoKHNsaWRlKSA9PiAoXHJcbiAgICAgICAgPFN3aXBlclNsaWRlIGtleT17c2xpZGUuX2lkfT5cclxuICAgICAgICAgIDxTbGlkZSBzbGlkZT17c2xpZGV9IC8+XHJcbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgKSl9XHJcbiAgICA8L1N3aXBlcj5cclxuICAgICA8L2Rpdj5cclxuICAgLy8gPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFNsaWRlKHsgc2xpZGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBteC0yMCBtci0yMFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3NsaWRlLl9pZH1gfT5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3NsaWRlLmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e3NsaWRlLnRpdGxlfVxyXG4gICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGZsZXgganVzdGlmeS1jZW50ZXIgbWwtMCBteC0wIGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXQgXCI+XHJcbiAgICAgICAgICB7c2xpZGUuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17Y2F0ZWdvcnl9IGhyZWY9e2NhdGVnb3J5Lmxpbmt9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgLSB7bmV3IERhdGUoc2xpZGUuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17c2xpZGUubGlua30+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICB7c2xpZGUudGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHB5LTNcIj57c2xpZGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIHsvKiBBdXRob3IgY29tcG9uZW50ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiTGluayIsIkF1dGhvciIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiU3dpcGVyQ29yZSIsIkF1dG9wbGF5IiwiU2VjdGlvbjEiLCJzbGlkZXMiLCJzZXRTbGlkZXMiLCJmZXRjaFNsaWRlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBvc3RzIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzbGlkZXNQZXJWaWV3IiwiYXV0b3BsYXkiLCJkZWxheSIsIm1hcCIsInNsaWRlIiwiU2xpZGUiLCJfaWQiLCJocmVmIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwibGluayIsImEiLCJuYW1lIiwic3BhbiIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/section1.js\n"));

/***/ })

});