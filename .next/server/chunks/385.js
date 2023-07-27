"use strict";
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 9743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ author)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function author() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "author flex py-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/images/author/profile avatar.png",
                width: 45,
                height: 45,
                className: "rounded-full"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        legacyBehavior: true,
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-md font-bold text-gray-800 hover:text-gray-600",
                            children: "Hdk"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: " text-sm text-gray-500",
                        children: "Admin"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ format)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/header.js




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "px-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container flex flex-col items-center sm:flex-row sm:justify-between mx-10 py-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "input-text",
                        placeholder: "Search.."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "  sm:order-2  justify-center px-30 ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/logo/logoblog.jpg",
                            alt: "",
                            width: 100,
                            height: 100
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-96 h-5 order-3 flex justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImFacebook, {
                                    color: "blue"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImYoutube, {
                                    color: "red"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImTwitter, {
                                    color: "blue"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/newsletter.js

function newsletter() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font text-xl text-gray-900 mx-8 ",
                children: " Want to Know More and Connect? "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-4 mx-8 px-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "text",
                    className: "shadow border rounded  px-6 py-3 w-78 h-12   text-black focus:outline-none focus:shadow-outline",
                    placeholder: "Enter your email "
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/footer.js



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        class: " container mx-auto py-14 px-8 grid lg:grid-cols-3 justify-between gap-8 text-gray-50 ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " container  ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: " text-3xl  mx-4 font-bold text-black",
                        children: "Drah. "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-black mt-5 mx-4",
                        children: "loren cknsknknmnmnsman am cnasc as ccccccccd dcnkcnklbhbhhhkbbjkjnjnbkbbkbubub hbb kdc"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "flex gap-6  mx-4 my-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImFacebook, {
                                    color: "gray",
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImYoutube, {
                                    color: "gray",
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImTwitter, {
                                    color: "gray",
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImInstagram, {
                                    color: "gray",
                                    size: 18
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "lg:col-span-1 flex justify-between text-lg ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                class: "font-medium text-gray-400",
                                children: "Solution"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                class: "text-black mt-3 px-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "Analytics"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "marketing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "Commerce"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "insights"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                class: "font-medium text-gray-400",
                                children: "Support"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                class: "text-black mt-3 px-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "Analytics"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "marketing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "Commerce"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "insights"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                class: "font-medium text-gray-400",
                                children: "Support"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                class: "text-black mt-3 px-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "Analytics"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "marketing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "Commerce"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        class: "py-2 text-sm",
                                        children: "insights"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-",
                children: /*#__PURE__*/ jsx_runtime_.jsx(newsletter, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto flex justify-center  text-center ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    class: " text-gray-400 ",
                    children: "Copyright@hdk-ak All rights reserved"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./layout/format.js




function format({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "VIEW"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;