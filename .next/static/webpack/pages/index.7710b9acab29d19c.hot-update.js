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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Section1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author */ \"./components/author.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Import Swiper React components\n\n// Import Swiper styles\n\n\nfunction Section1() {\n    _s();\n    const [slides, setSlides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchSlides = async ()=>{\n            try {\n                const response = await fetch(\"https://myblog-bk.onrender.com/api/post/trending\");\n                const data = await response.json();\n                setSlides(data.posts);\n            //console.log(data.posts);\n            } catch (error) {\n                console.error(\"Error fetching slides:\", error);\n            }\n        };\n        fetchSlides();\n    }, []);\n    //const bg={\n    //background:\"url('images/background/bg2.jpg') no-repeat\",\n    //backgroundPosition:\"right\"\n    // }\n    swiper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay\n    ]);\n    return(// <section className=\"py-16\" style={bg}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto md:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-4xl pb-12  mt-10 text-center\",\n                children: \"Trending\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {\n                slidesPerView: 1,\n                autoplay: {\n                    delay: 2000\n                },\n                children: slides.map((slide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {\n                            slide: slide\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, slide._id, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n        lineNumber: 37,\n        columnNumber: 6\n    }, this));\n}\n_s(Section1, \"KVoJDyX2IiQ2FdwKb/ySwq7FjXI=\");\n_c = Section1;\nfunction Slide(param) {\n    let { slide  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid md:grid-cols-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image mx-20 mr-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/post/\".concat(slide._id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: slide.thumbnail.url,\n                        alt: slide.title,\n                        width: 500,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center ml-0 mx-0 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat\",\n                        children: [\n                            slide.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/search?tags=\".concat(tag),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-orange-600 hover:text-orange-800\",\n                                                children: tag\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 9\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 7\n                                        }, this),\n                                        index < slide.tags.length - 1 && \" | \"\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 5\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600 hover:text-gray-600\",\n                                children: [\n                                    \"- \",\n                                    new Date(slide.createdAt).toLocaleDateString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                lineNumber: 76,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/post/\".concat(slide._id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: slide.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 py-3\",\n                        children: slide.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\deepak kumar\\\\OneDrive\\\\Documents\\\\GitHub\\\\blogf\\\\components\\\\section1.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Slide;\nvar _c, _c1;\n$RefreshReg$(_c, \"Section1\");\n$RefreshReg$(_c1, \"Slide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24xLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDckI7QUFDRDtBQUNBO0FBQzdCLGlDQUFpQztBQUNrQjtBQUNuRCx1QkFBdUI7QUFDb0I7QUFDdkI7QUFHTCxTQUFTVSxXQUFXOztJQUNqQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUN2Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1XLGNBQWMsVUFBWTtZQUM5QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ0wsVUFBVUksS0FBS0UsS0FBSztZQUNwQiwwQkFBMEI7WUFDNUIsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBRUFOO0lBQ0YsR0FBRyxFQUFFO0lBRUwsWUFBWTtJQUNYLDBEQUEwRDtJQUMxRCw0QkFBNEI7SUFDOUIsSUFBSTtJQUNGTCxrREFBYyxDQUFDO1FBQUNDLDRDQUFRQTtLQUFDO0lBRTFCLE9BQ0MseUNBQXlDO2tCQUN2Qyw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE4Qzs7Ozs7OzBCQUU1RCw4REFBQ2pCLGdEQUFNQTtnQkFBQ21CLGVBQWU7Z0JBQUdDLFVBQVU7b0JBQUVDLE9BQU87Z0JBQUs7MEJBQ2pEaEIsT0FBT2lCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ3RCLHFEQUFXQTtrQ0FDViw0RUFBQ3VCOzRCQUFNRCxPQUFPQTs7Ozs7O3VCQURFQSxNQUFNRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBUW5DLENBQUM7R0F0Q3VCckI7S0FBQUE7QUF5Q3hCLFNBQVNvQixNQUFNLEtBQVMsRUFBRTtRQUFYLEVBQUVELE1BQUssRUFBRSxHQUFUO0lBQ2IscUJBQ0UsOERBQUNQO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ25CLGtEQUFJQTtvQkFBQzRCLE1BQU0sU0FBbUIsT0FBVkgsTUFBTUUsR0FBRzs4QkFDNUIsNEVBQUM1QixtREFBS0E7d0JBQ0o4QixLQUFLSixNQUFNSyxTQUFTLENBQUNDLEdBQUc7d0JBQ3hCQyxLQUFLUCxNQUFNUSxLQUFLO3dCQUNoQkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJZCw4REFBQ2pCO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUNsQk0sTUFBTVcsSUFBSSxDQUFDWixHQUFHLENBQUMsQ0FBQ2EsS0FBS0Msc0JBQ3BCLDhEQUFDQzs7c0RBQ0MsOERBQUN2QyxrREFBSUE7NENBQUM0QixNQUFNLGdCQUFvQixPQUFKUztzREFDMUIsNEVBQUNFO2dEQUFLcEIsV0FBVTswREFBeUNrQjs7Ozs7Ozs7Ozs7d0NBRTFEQyxRQUFRYixNQUFNVyxJQUFJLENBQUNJLE1BQU0sR0FBRyxLQUFLOzttQ0FKekJGOzs7OzswQ0FPYiw4REFBQ0M7Z0NBQUtwQixXQUFVOztvQ0FBb0M7b0NBQy9DLElBQUlzQixLQUFLaEIsTUFBTWlCLFNBQVMsRUFBRUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7O2tDQUczQyw4REFBQ3pCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDbkIsa0RBQUlBOzRCQUFDNEIsTUFBTSxTQUFtQixPQUFWSCxNQUFNRSxHQUFHO3NDQUM1Qiw0RUFBQ1k7Z0NBQUtwQixXQUFVOzBDQUNiTSxNQUFNUSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQiw4REFBQ1c7d0JBQUV6QixXQUFVO2tDQUFzQk0sTUFBTW9CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4RDtNQXRDU25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbjEuanM/N2QyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IExpbmsgIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuL2F1dGhvclwiXHJcbi8vIEltcG9ydCBTd2lwZXIgUmVhY3QgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcclxuaW1wb3J0IFN3aXBlckNvcmUse0F1dG9wbGF5fSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb24xKCkge1xyXG4gIGNvbnN0IFtzbGlkZXMsIHNldFNsaWRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoU2xpZGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbXlibG9nLWJrLm9ucmVuZGVyLmNvbS9hcGkvcG9zdC90cmVuZGluZycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0U2xpZGVzKGRhdGEucG9zdHMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5wb3N0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2xpZGVzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFNsaWRlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9jb25zdCBiZz17XHJcbiAgIC8vYmFja2dyb3VuZDpcInVybCgnaW1hZ2VzL2JhY2tncm91bmQvYmcyLmpwZycpIG5vLXJlcGVhdFwiLFxyXG4gICAvL2JhY2tncm91bmRQb3NpdGlvbjpcInJpZ2h0XCJcclxuIC8vIH1cclxuICAgU3dpcGVyQ29yZS51c2UoW0F1dG9wbGF5XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgLy8gPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTZcIiBzdHlsZT17Ymd9PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWQ6cHgtMjBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCBwYi0xMiAgbXQtMTAgdGV4dC1jZW50ZXJcIj5UcmVuZGluZzwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8U3dpcGVyIHNsaWRlc1BlclZpZXc9ezF9IGF1dG9wbGF5PXt7IGRlbGF5OiAyMDAwIH19PlxyXG4gICAgICB7c2xpZGVzLm1hcCgoc2xpZGUpID0+IChcclxuICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtzbGlkZS5faWR9PlxyXG4gICAgICAgICAgPFNsaWRlIHNsaWRlPXtzbGlkZX0gLz5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICApKX1cclxuICAgIDwvU3dpcGVyPlxyXG4gICAgIDwvZGl2PlxyXG4gICAvLyA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gU2xpZGUoeyBzbGlkZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIG14LTIwIG1yLTIwXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7c2xpZGUuX2lkfWB9PiBcclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3NsaWRlLnRodW1ibmFpbC51cmx9XHJcbiAgICAgICAgICAgIGFsdD17c2xpZGUudGl0bGV9XHJcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gZmxleCBqdXN0aWZ5LWNlbnRlciBtbC0wIG14LTAgZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdCc+XHJcbiAge3NsaWRlLnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2g/dGFncz0ke3RhZ31gfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS04MDAnPnt0YWd9PC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIHtpbmRleCA8IHNsaWRlLnRhZ3MubGVuZ3RoIC0gMSAmJiAnIHwgJ31cclxuICAgIDwvc3Bhbj5cclxuICApKX1cclxuICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTYwMCc+XHJcbiAgICAtIHtuZXcgRGF0ZShzbGlkZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7c2xpZGUuX2lkfWB9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAge3NsaWRlLnRpdGxlfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBweS0zXCI+e3NsaWRlLmNvbnRlbnR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiTGluayIsIkF1dGhvciIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiU3dpcGVyQ29yZSIsIkF1dG9wbGF5IiwiU2VjdGlvbjEiLCJzbGlkZXMiLCJzZXRTbGlkZXMiLCJmZXRjaFNsaWRlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBvc3RzIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzbGlkZXNQZXJWaWV3IiwiYXV0b3BsYXkiLCJkZWxheSIsIm1hcCIsInNsaWRlIiwiU2xpZGUiLCJfaWQiLCJocmVmIiwic3JjIiwidGh1bWJuYWlsIiwidXJsIiwiYWx0IiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsInRhZ3MiLCJ0YWciLCJpbmRleCIsInNwYW4iLCJsZW5ndGgiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/section1.js\n"));

/***/ })

});