exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");


const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({
  children,
  className = '',
  size
}) => {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: "button",
    className: `
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



const Card = ({
  className,
  children
}) => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: `p-12 rounded-lg border border-solid border-gray-200 ${className}`,
  style: {
    boxShadow: '0 10px 28px rgba(0,0,0,.08)'
  }
}, children);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/CustomerCard.js":
/*!****************************************!*\
  !*** ./src/components/CustomerCard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/components/Card.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");




const CustomerCard = ({
  customer
}) => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
  className: "text-xl font-semibold"
}, customer.title), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
  className: "mt-6"
}, customer.content), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: "flex items-center mt-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
  className: "w-12 h-12 mr-4 rounded-full",
  src: customer.customerImage,
  alt: customer.customerName
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", null, customer.customerName), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
  className: "text-sm text-gray-600"
}, customer.customerTitle))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerCard);

/***/ }),

/***/ "./src/components/LabelText.js":
/*!*************************************!*\
  !*** ./src/components/LabelText.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



const LabelText = ({
  children,
  className = ''
}) => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
  className: `uppercase tracking-wider ${className}`
}, children);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelText);

/***/ }),

/***/ "./src/components/SplitSection.js":
/*!****************************************!*\
  !*** ./src/components/SplitSection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



const SplitSection = ({
  id,
  primarySlot,
  secondarySlot,
  reverseOrder
}) => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
  id: id,
  className: "py-20"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: "container mx-auto px-16 items-center flex flex-col lg:flex-row"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: "lg:w-1/2"
}, primarySlot), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: `mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`
}, secondarySlot)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplitSection);

/***/ }),

/***/ "./src/components/StatsBox.js":
/*!************************************!*\
  !*** ./src/components/StatsBox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



const StatsBox = ({
  primaryText,
  secondaryText
}) => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
  className: "text-4xl lg:text-6xl font-semibold text-primary"
}, primaryText), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
  className: "font-semibold mb-6"
}, secondaryText));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatsBox);

/***/ }),

/***/ "./src/components/layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



const Footer = () => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
  className: "container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: "flex -mx-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
  className: "text-lg font-semibold"
}, "About Us"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
  className: "mt-5"
}, "Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
  className: "text-lg font-semibold"
}, "Important Links"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
  className: "mt-4 leading-loose"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
  href: "https://codebushi.com"
}, "Terms & Conditions")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
  href: "https://codebushi.com"
}, "Privacy Policy")))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
  className: "text-lg font-semibold"
}, "Social Media"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
  className: "mt-4 leading-loose"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
  href: "https://dev.to/changoman"
}, "Dev.to")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
  href: "https://twitter.com/HuntaroSan"
}, "Twitter")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
  href: "https://github.com/codebushi/gatsby-starter-lander"
}, "GitHub"))))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/layout/Header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_LogoIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/LogoIcon */ "./src/svg/LogoIcon.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");






const Header = () => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("header", {
  className: "sticky top-0 bg-white shadow"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: "container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: "flex items-center text-2xl"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: "w-12 mr-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_svg_LogoIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null)), "Logistika One"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: "flex mt-4 sm:mt-0"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  className: "px-4",
  href: "#features"
}, "Home"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  className: "px-4",
  href: "#services"
}, "Services"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  className: "px-4",
  href: "#stats"
}, "About"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  className: "px-4",
  href: "#testimonials"
}, "(Testimonials)")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: "hidden md:block"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: "text-sm"
}, "Contact"))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/layout/Header.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");





const Layout = ({
  children
}) => {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
    className: "text-gray-900"
  }, children), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/data/customer-data.js":
/*!***********************************!*\
  !*** ./src/data/customer-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  content: 'Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.',
  customerName: 'Jane Doe',
  customerTitle: 'Director of Research and Data',
  customerImage: 'https://placeimg.com/150/150/people'
}, {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  content: 'Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.',
  customerName: 'John Doe',
  customerTitle: 'Director of Research and Data',
  customerImage: 'https://placeimg.com/150/150/people'
}, {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  content: 'Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis.',
  customerName: 'Jane Smith',
  customerTitle: 'Director of Research and Data',
  customerImage: 'https://placeimg.com/150/150/people'
}]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_CustomerCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CustomerCard */ "./src/components/CustomerCard.js");
/* harmony import */ var _components_LabelText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LabelText */ "./src/components/LabelText.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Layout */ "./src/components/layout/Layout.js");
/* harmony import */ var _components_SplitSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SplitSection */ "./src/components/SplitSection.js");
/* harmony import */ var _components_StatsBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/StatsBox */ "./src/components/StatsBox.js");
/* harmony import */ var _data_customer_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/customer-data */ "./src/data/customer-data.js");
/* harmony import */ var _svg_SvgCharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../svg/SvgCharts */ "./src/svg/SvgCharts.js");
/* harmony import */ var _images_HeroImage_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/HeroImage.png */ "./src/images/HeroImage.png");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");













const Index = () => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SplitSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  primarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
    src: _images_HeroImage_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "Boat",
    className: "image-Hero"
  }),
  secondarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
    className: "text-3xl lg:text-5xl font-semibold leading-none"
  }, "Are  you looking to Grow Your Amazon Business?"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
    className: "text-xl lg:text-2xl mt-6 font-light"
  }, "Out-of-stock products are lost sales. Logistika One covers the whole process of inventory management for you so your products are always available, while minimizing inventory carrying cos"))
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
  id: "features",
  className: "py-20 lg:pb-40 lg:pt-48"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "container mx-auto text-center"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
  className: "text-3xl lg:text-5xl font-semibold"
}, "My services"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex flex-col sm:flex-row sm:-mx-3 mt-12"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "AJJudit of the current supply chain "), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "Identifying current bottlenecks of the supply chain and creating a new strategy to meet your goals."))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Restock planning"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "A customized restock plan including seasonality of a product, running promotions or deals."))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Sales forecasting"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "Creating a sales forecast based on your historic shipment information.")))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex flex-col sm:flex-row sm:-mx-3 mt-12"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Sourcing of new forwarders and 3PLs"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "Providing different options of a reliable warehouses/  forwarders to help you with your business."))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Analysis of the account and tips for IPI score increase"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "Review of the account and current listings and providing guidance on how IPI score can be increased."))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Sourcing of new forwarders and 3PLs"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "Providing different options of a reliable warehouses/  forwarders to help you with your business.")))))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "container mx-auto text-center"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
  className: "text-3xl lg:text-5xl font-semibold"
}, "Advantages of stock management by Logistika One vs. by a software:")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SplitSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  id: "services",
  primarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "lg:pr-32 xl:pr-48"
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
    className: "text-3xl font-semibold leading-tight"
  }, "Flexible inventory plan"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
    className: "mt-8 text-xl font-light leading-relaxed"
  }, "Stock planning must be flexible and easy adjustable.\xA0You need take into account many factors such as seasonality of a product, delays at the port or at the factory, peak season sales, prime day, etc... There are many things that can change along the way\xA0and my mission is to find a\xA0problem at an early stage and minimize the risks.\xA0")),
  secondarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
    src: _images_HeroImage_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "Whatever",
    class: "right"
  })
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SplitSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  reverseOrder: true,
  primarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "lg:pl-32 xl:pl-48"
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
    className: "text-3xl font-semibold leading-tight"
  }, "It's more than just stock management"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
    className: "mt-8 text-xl font-light leading-relaxed"
  }, "Normally if you use a software for stock planning, you still need to be fully involved in\xA0communication processes\xA0 with\xA0forwarders/factories. I want to take care of this part of the business and create trusting relationships with forwarders and factories so your shipments are always in priority.")),
  secondarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
    src: _images_HeroImage_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "Whatever",
    class: "right"
  })
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SplitSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  primarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "lg:pr-32 xl:pr-48"
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
    className: "text-3xl font-semibold leading-tight"
  }, "Amazon Policy"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
    className: "mt-8 text-xl font-light leading-relaxed"
  }, "Amazon always changes its\xA0policy. As you know, right now many sellers are facing\xA0stock limits \u2013 which does not allow them to send big shipments straight to Amazon.\xA0My task would be to create a drip feeding plan for your goods and help you to increase your stock limits.\xA0")),
  secondarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
    src: _images_HeroImage_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "Whatever",
    class: "right"
  })
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
  id: "testimonials",
  className: "py-20 lg:py-40"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "container mx-auto"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_LabelText__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "mb-8 text-gray-600 text-center"
}, "About me"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-8 text-xl font-light leading-relaxed"
}, "My name is Lidia Faustova. I am originally from Russian and currently leave in Barcelona, Spain. "), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", null, "I came to Barcelona to study Supply Chain and Revenue management and later have been working in Amazon oriented start-ups as a Logistics Planner. Amazon is much more complicated than a usual supply chain as it has their own rules that cannot be taught in any university. Now I have been in Amazon business for more than 3 years and I learned a lot about best practices for Amazon optimization. I have been managing different types of products from a very light small sized products to an oversized ones that cannot be managed by FBA, from skincare and fitness to a household category. This experience taught me that every product is different and it is very important to take in account all peculiarities of a product before creating an inventory strategy.  I also have an experience in launching new markets on Amazon."))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./src/svg/LogoIcon.js":
/*!*****************************!*\
  !*** ./src/svg/LogoIcon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



const LogoIcon = () => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#BEE3F8",
  d: "M44,7L4,23l40,16l-7-16L44,7z M36,23H17l18-7l1,6V23z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#3182CE",
  d: "M40.212,10.669l-5.044,11.529L34.817,23l0.351,0.802l5.044,11.529L9.385,23L40.212,10.669 M44,7L4,23 l40,16l-7-16L44,7L44,7z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#3182CE",
  d: "M36,22l-1-6l-18,7l17,7l-2-5l-8-2h12V22z M27.661,21l5.771-2.244L33.806,21H27.661z"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoIcon);

/***/ }),

/***/ "./src/svg/SvgCharts.js":
/*!******************************!*\
  !*** ./src/svg/SvgCharts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");


const mainColor = '#4299e1';

const SvgCharts = () => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1113.58 784.41"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("linearGradient", {
  id: "a",
  x1: "990.77",
  y1: "609.55",
  x2: "1147.32",
  y2: "609.55",
  gradientTransform: "matrix(-1 0 0 1 2040 0)",
  gradientUnits: "userSpaceOnUse"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("stop", {
  offset: "0",
  stopColor: "gray",
  stopOpacity: ".25"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("stop", {
  offset: ".54",
  stopColor: "gray",
  stopOpacity: ".12"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("stop", {
  offset: "1",
  stopColor: "gray",
  stopOpacity: ".1"
}))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "965",
  cy: "767.42",
  rx: "64",
  ry: "16.99",
  fill: mainColor,
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1070.55 694.89c-24.35 20.2-59 28.56-92.51 33.84l-5.64.86c-35 5.22-70.39 8-105.9 9.69-19 .92-38 1.57-57 2.15l-14.89.44q-29 .86-58.11 1.69-28.5.81-57 1.52-36.5.89-73 1.48-28.5.45-57 .62-36.51.21-73-.14-28.52-.29-57-1-36.52-.94-73-2.75-24.76-1.21-49.49-2.91l-7.51-.53c-70.77-5.1-142.81-14.25-204.74-43.17l-1.67-.79c-.83-.39-1.66-.78-2.49-1.19a224.11 224.11 0 01-32.56-19.09c-18.31-13.06-33.43-29-41.42-47.91-12.52-29.66-5.9-63 8.4-92s35.77-55.18 54.34-82.49c5.44-8 10.6-16.3 15.4-24.81 30-53.37 44.88-115.13 13.43-166.56a228.58 228.58 0 00-13.43-19c-7.67-10-15.47-20-20.74-31.07-12.29-25.76-9.65-54.73-5.17-82.25 6-36.59 17-76 51.38-98.86 35.67-23.74 86.3-22.54 130.57-14 68.83 13.19 132.36 40.8 196.49 65.7s131.31 47.67 201.82 50.12a322.09 322.09 0 0045.38-1.65 287.81 287.81 0 0059.12-12.45c27.75-9.14 53-22.89 71.72-42 40.15-40.85 115.6-43.94 170-19.27 51.91 23.54 85.48 73.36 83 123.12-2.82 55.39-44.3 100.93-82.31 147.64-4.61 5.66-9.16 11.34-13.59 17.06q-3.71 4.79-7.28 9.6c-4.17 5.66-8.2 11.35-12 17.11-19.42 29.53-33.15 65-19.78 96.88 7.5 17.85 21.81 31.47 39.06 43.36 38.65 26.63 92 44.55 116 81.83 20.68 32.13 13.02 75.5-17.88 101.18z",
  fill: mainColor,
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".1"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M555.5 549.35q.06 1.41.21 2.76 11.67-4.65 22.91-10a18.57 18.57 0 0010.59-5.18c2.19-1.1 4.37-2.25 6.53-3.4a26.82 26.82 0 00-1.66-3c-4.21-6.65-10.61-10.81-17.66-10.58s-13.15 4.8-16.92 11.69a34.46 34.46 0 00-4 17.71z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M554.35 514.38a34.57 34.57 0 005.15 17.32c4.22 6.63 10.62 10.79 17.67 10.56.49 0 1-.07 1.45-.11a18.57 18.57 0 0010.59-5.18 25.47 25.47 0 004.87-6.38 35.82 35.82 0 00-1.14-35c-4.22-6.65-10.62-10.81-17.67-10.58s-13.14 4.8-16.91 11.69a34.47 34.47 0 00-4.01 17.68z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "618.28",
  cy: "536.48",
  rx: "21.87",
  ry: "28.63",
  transform: "rotate(-1.88 -1164.772 1824.132)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "617.13",
  cy: "501.51",
  rx: "21.87",
  ry: "28.63",
  transform: "rotate(-1.88 -1165.721 1789.062)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "615.99",
  cy: "466.54",
  rx: "21.87",
  ry: "28.63",
  transform: "rotate(-1.88 -1166.98 1754.292)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M646.79 166.77a104.08 104.08 0 007.74-12.25l-57.74-7.54 62.12-1.58a104.89 104.89 0 00-.72-83l-81.91 45.95 75-59a104.75 104.75 0 10-169.11 122.86 105.16 105.16 0 00-11.31 19.48l75.81 36.28-80.36-24.06a104.8 104.8 0 0020.11 97.75 104.74 104.74 0 10164.56-5.45 104.77 104.77 0 00-4.19-129.44z",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M461.89 237.63a104.26 104.26 0 0024.53 64 104.74 104.74 0 10164.56-5.42c13.45-18.26-189.47-70.33-189.09-58.58z",
  opacity: ".1"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".1"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M326.18 733.56c0 .66-.07 1.32-.15 2q-8.3-3.3-16.31-7.07a13.21 13.21 0 01-7.54-3.67q-2.34-1.19-4.65-2.42a18.9 18.9 0 011.18-2.12c3-4.74 7.54-7.7 12.56-7.54s9.36 3.4 12 8.3a24.5 24.5 0 012.91 12.52z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M326.96 708.67a24.59 24.59 0 01-3.64 12.33c-3 4.72-7.55 7.69-12.56 7.53l-1-.08a13.21 13.21 0 01-7.54-3.67 18 18 0 01-3.47-4.54 25.53 25.53 0 01.78-24.89c3-4.74 7.55-7.7 12.56-7.54s9.36 3.4 12.05 8.3a24.5 24.5 0 012.82 12.56z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "355.4",
  cy: "741.08",
  rx: "20.37",
  ry: "15.56",
  transform: "rotate(-88.19 304.008 734.493)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "356.18",
  cy: "716.19",
  rx: "20.37",
  ry: "15.56",
  transform: "rotate(-88.19 304.789 709.606)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "356.97",
  cy: "691.3",
  rx: "20.37",
  ry: "15.56",
  transform: "rotate(-88.19 305.575 684.715)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M260.91 461.38a75.81 75.81 0 01-5.53-8.71l41.08-5.46-44.21-1a74.64 74.64 0 01.44-59.08l58.33 32.63-53.42-41.95a74.54 74.54 0 11120.42 87.26 74.43 74.43 0 018.07 13.86l-53.92 25.88 57.17-17.2a74.65 74.65 0 01-14.22 69.6 74.54 74.54 0 11-117.12-3.7 74.54 74.54 0 012.91-92.12z",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M392.51 511.64a74.27 74.27 0 01-17.39 45.57 74.54 74.54 0 11-117.12-3.7c-9.59-13 134.79-50.24 134.51-41.87z",
  opacity: ".1"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".1"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M846.95 603.51c0 .67-.07 1.32-.14 2q-8.31-3.3-16.31-7.07a13.26 13.26 0 01-7.55-3.67c-1.55-.79-3.11-1.6-4.65-2.42a20.63 20.63 0 011.18-2.12c3-4.74 7.54-7.7 12.56-7.54s9.36 3.4 12 8.3a24.5 24.5 0 012.91 12.52z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M847.79 578.62a24.59 24.59 0 01-3.65 12.33c-3 4.72-7.54 7.69-12.56 7.53l-1-.08a13.26 13.26 0 01-7.55-3.67 18.32 18.32 0 01-3.47-4.54 25.53 25.53 0 01.78-24.89c3-4.73 7.55-7.7 12.56-7.54s9.37 3.4 12.05 8.3a24.5 24.5 0 012.84 12.56z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "876.17",
  cy: "611.03",
  rx: "20.37",
  ry: "15.56",
  transform: "rotate(-88.19 824.791 604.421)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "876.96",
  cy: "586.14",
  rx: "20.37",
  ry: "15.56",
  transform: "rotate(-88.19 825.582 579.535)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "877.74",
  cy: "561.26",
  rx: "20.37",
  ry: "15.56",
  transform: "rotate(-88.19 826.363 554.648)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M781.68 331.33a73.57 73.57 0 01-5.52-8.71l41.08-5.41-44.21-1.07a74.7 74.7 0 01.43-59.08l58.33 32.63-53.42-41.93a74.55 74.55 0 11120.42 87.26 74.39 74.39 0 018.06 13.86l-53.92 25.88 57.17-17.2a74.57 74.57 0 01-14.22 69.59 74.53 74.53 0 11-117.09-3.7 74.54 74.54 0 012.91-92.12z",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M913.29 381.59a74.2 74.2 0 01-17.4 45.56 74.53 74.53 0 11-117.1-3.7c-9.6-12.99 134.76-50.24 134.5-41.86z",
  opacity: ".1"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "193.5",
  cy: "750.89",
  rx: "57.01",
  ry: "10.96",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "192.55",
  cy: "746.23",
  rx: "6.64",
  ry: "8.69",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "192.55",
  cy: "735.61",
  rx: "6.64",
  ry: "8.69",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "192.55",
  cy: "724.99",
  rx: "6.64",
  ry: "8.69",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "192.55",
  cy: "714.37",
  rx: "6.64",
  ry: "8.69",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "192.55",
  cy: "703.75",
  rx: "6.64",
  ry: "8.69",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "192.55",
  cy: "693.13",
  rx: "6.64",
  ry: "8.69",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "192.55",
  cy: "682.51",
  rx: "6.64",
  ry: "8.69",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M217.4 609.83a32.32 32.32 0 002.47-3.64l-17.44-2.87 18.86.15a31.89 31.89 0 00.61-25.2l-25.31 13.13 23.34-17.19a31.8 31.8 0 10-52.52 35.59 32 32 0 00-3.62 5.8l22.64 11.76-24.14-8.1a31.82 31.82 0 005.12 29.86 31.8 31.8 0 1050 0 31.82 31.82 0 000-39.32z",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M160.61 629.49a31.67 31.67 0 006.8 19.66 31.8 31.8 0 1050 0c4.25-5.41-56.8-23.23-56.8-19.66z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M346.5 517.21v226q-24.76-1.21-49.49-2.91l-7.51-.53V517.21a8.82 8.82 0 018.82-8.82h39.36a8.82 8.82 0 018.82 8.82zM419.5 746.02V366.21a8.82 8.82 0 018.82-8.82h39.36a8.82 8.82 0 018.82 8.82v380.8zM549.5 747.21v-302a8.82 8.82 0 018.82-8.82h39.36a8.82 8.82 0 018.82 8.82v301.35zM736.5 221.21v522.35q-28.5.81-57 1.52V221.21a8.82 8.82 0 018.82-8.82h39.36a8.82 8.82 0 018.82 8.82zM866.5 326.21v413c-19 .92-38 1.57-57 2.15V326.21a8.82 8.82 0 018.82-8.82h39.36a8.82 8.82 0 018.82 8.82z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "none",
  stroke: "#3f3d56",
  strokeLinecap: "round",
  strokeMiterlimit: "10",
  strokeWidth: "7",
  d: "M318.5 385.41l130-145 130 73 130-224 130 107"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "318",
  cy: "385.41",
  r: "28",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "448",
  cy: "240.41",
  r: "28",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "578",
  cy: "313.41",
  r: "28",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "708",
  cy: "89.41",
  r: "28",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "958",
  cy: "327.41",
  r: "28",
  fill: mainColor
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "233.68",
  cy: "722.61",
  rx: "18.68",
  ry: "3.16",
  fill: mainColor,
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M221.14 707.94s10.65-.33 13.86-2.62 16.39-5 17.19-1.35 16 18.24 4 18.34-27.95-1.88-31.15-3.83-3.9-10.54-3.9-10.54z",
  fill: "#a8a8a8"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M256.38 721.03c-12 .1-27.94-1.87-31.15-3.82-2.44-1.49-3.41-6.82-3.74-9.28h-.35s.67 8.59 3.88 10.54 19.12 3.93 31.15 3.83c3.47 0 4.67-1.26 4.6-3.09-.48 1.11-1.8 1.8-4.39 1.82z",
  opacity: ".2"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "1063.8",
  cy: "749.41",
  rx: "34.31",
  ry: "5.8",
  fill: mainColor,
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1040.79 722.46s19.57-.6 25.47-4.8 30.1-9.21 31.56-2.48 29.42 33.5 7.32 33.68-51.34-3.44-57.23-7-7.12-19.4-7.12-19.4z",
  fill: "#a8a8a8"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1105.51 746.52c-22.1.18-51.34-3.44-57.23-7-4.48-2.73-6.27-12.53-6.87-17h-.65s1.24 15.79 7.12 19.37 35.14 7.21 57.23 7c6.38 0 8.58-2.32 8.46-5.68-.89 2-3.32 3.27-8.06 3.31z",
  opacity: ".2"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M892.81 402.37a9 9 0 002 4.77c1.45 1.64 3.62 2.39 5.57 3.37a22 22 0 0110.76 12.37c3.33 9.72 3.76 20 8 29.38s9.22 18.39 12.88 28c2.08 5.45 3.74 11.12 6.79 16.08a24.94 24.94 0 005.57 6.41c-.23 3.52-.32 7-.3 10.52a4 4 0 013.42 1.8 10.41 10.41 0 011.5 3.75c1.37 5.67-.32 11.71.91 17.41a88.56 88.56 0 01-3 47.64c-1.37 3.88-3.09 16.72-1.63 20.57 5.44-.55 10.26 2.79 15.35 5a21.12 21.12 0 01-.72 9c-1.83 5.27-1.82 11-1.79 16.57l.25 41.26c0 5.23.07 10.53 1.38 15.6 1.49 5.71 4.62 11.53 4.52 17.43-.27 12.7 5.73 24.8 5.25 37.4-.09 2.42-.42 4.82-.65 7.22a82.14 82.14 0 00.48 19.19c1.82 12.66 6.63 25.11 5.43 37.84-.08.86-.37 2-1.18 2.33 1 1.13 2.06 2.25 3.14 3.32a2.85 2.85 0 01-.87.91 8.84 8.84 0 01-3.82 1 8.09 8.09 0 00-4.37 1.42 6.29 6.29 0 00-1.82 3.34 9 9 0 001.2 7.48 8.35 8.35 0 003.39 2.54c4.62 2 9.92.55 14.74-.91l18.88-5.72a6.36 6.36 0 003.07-1.6 3.36 3.36 0 00.75-1.62c4.17 1 8.75-.23 13-1.5l18.88-5.73a6.27 6.27 0 003.07-1.6 3.66 3.66 0 00.77-3c.14-.06.28-.1.42-.17 1.44-.65 3-1.92 2.65-3.45-.25-1-1.25-1.58-1.68-2.5a3.61 3.61 0 01.7-3.53c.74-1 1.74-1.83 2.42-2.88 2.18-3.34.7-7.73-.12-11.64-1.77-8.35-.13-17.07-1.25-25.53-.38-2.85-1.07-5.65-1.62-8.48a173.29 173.29 0 01-2.31-20.22c-.72-9.68-3.41-19.22-1.87-28.82a111.93 111.93 0 00.95-17 74 74 0 00-.47-10.84c-.39-2.68-1.08-5.31-1.38-8a72.52 72.52 0 01-.16-9.09 89.92 89.92 0 00-1.86-20.12c-2-9.09-5.76-17.79-7.36-26.9.54.12 1.08.24 1.6.38.06-7-6.07-22.22-8.34-28.86a8.39 8.39 0 01-.6-2.55 27.51 27.51 0 01.63-3.43c.29-2.42-1-4.72-1.35-7.14a16.75 16.75 0 01.37-5.08c1.61-8.95 3.61-17.83 5.61-26.7a28.44 28.44 0 00.89-9.87 12.39 12.39 0 013-9.83 11.66 11.66 0 002.22-2.79 7.08 7.08 0 00.44-2.79 44.83 44.83 0 00-1.8-12.15c1.76-3.19 2.41-7.11 2.92-10.81 1.12-8.17 2.24-16.38 2.2-24.63a41.75 41.75 0 00-1.8-13 51.59 51.59 0 00-3.42-7.54c-5.26-10.13-10.29-20.79-16.93-30.07-2-2.82-.74-6.71-.6-10.19.15-4.2-1.51-8.23-3.14-12.09a19.84 19.84 0 00-3.76-6.47 6.11 6.11 0 00-4.4-2 6.63 6.63 0 00-4.69 2.87 15.47 15.47 0 00-2.81 11.57 22.37 22.37 0 005.09 10.93 24.77 24.77 0 004.39 4.17q2.48 7.88 5 15.75c2.64 8.35 5.28 16.74 9 24.64 1.09 2.29 2.29 4.62 2.42 7.15.14 2.73-1 5.33-1.91 7.9a55.75 55.75 0 00-3.22 16.66 5.73 5.73 0 00-.84.46c-3.15 2.06-4.14 6.55-7.42 8.39-1.91 1.07-4.23 1-6.37 1.49-.19 0-.38.1-.58.16-.08-.4-.16-.79-.21-1.2a3.23 3.23 0 010-.77 33.59 33.59 0 0012.43-11.84 10.83 10.83 0 001.47-3 11.6 11.6 0 00.15-3.9 62.24 62.24 0 00-1.85-12.85 21.37 21.37 0 00-6.69-10.89c-1.64-1.32-3.53-2.31-5.16-3.64-3.18-2.57-5.36-6.37-9-8.28a10.83 10.83 0 00-13.61 3.52 7.89 7.89 0 01-2 2.54 20.55 20.55 0 00-1.86 1c-1.1.88-1.16 2.57-.8 3.94a41 41 0 011.14 8.59 21 21 0 00-.06 27.17c0 1.86 0 3.72-.07 5.58 0 .35 0 .71-.07 1.06a7.21 7.21 0 01-3-2c-1.12-1.4-1.32-3.46-2.69-4.61a7.59 7.59 0 00-3.28-1.2 20.37 20.37 0 01-8-3.79c-1.85-1.43-3.77-3.26-5.93-3.68a131.57 131.57 0 00-13-19.84 38.65 38.65 0 01-3.4-4.67c-2.15-3.75-2.79-8.16-4.15-12.27-3.8-11.52-13.28-20.76-15.59-32.68-.84-4.32-3.58-8.08-5.46-12.06-1.27-2.69-2.67-5.53-5.21-7.07-3.27-2-7.79-1.08-10.51 1.61a12.63 12.63 0 00-3.25 10.63zm118.73 404.69a8.84 8.84 0 01-3.82 1 18.43 18.43 0 00-2 .32c-.25-2.1-.39-4.23-.55-6.3-.53-6.79-1.59-13.53-2.64-20.26-1.1-7-1.62-14.66-4-21.38-3.83-10.94-7.71-22.21-7.22-33.8.11-2.63.44-5.24.58-7.86.32-6.49-.59-13.12 1-19.43.71-2.87 1.92-5.61 2.38-8.53a40.49 40.49 0 00.1-7.94 105.53 105.53 0 012.27-27.35c1.86 2.43 2.47 5.57 3 8.58l3.75 20.34c2.23 12.07 4.2 24.87 10.11 35.61-.83 3.87-1.65 8-.28 11.7.59 1.6 1.56 3 2.16 4.62 1 2.69.86 5.65 1.16 8.5.65 6 3.13 11.9 1.31 17.69a86.29 86.29 0 00-3.63 18.36 44.71 44.71 0 01-.6 5.17c-.32 1.54-.84 3-1.13 4.58a15.17 15.17 0 00.29 6.67 13.62 13.62 0 01.82 3.75c0 1.28-1.57 2.2-2.83 2.4.37.48.77.94 1.18 1.39a4.38 4.38 0 01-1.41 2.17z",
  transform: "translate(-43.21 -57.79)",
  fill: "url(#a)"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M928.84 760.81a8.09 8.09 0 00-4.37 1.42 6.16 6.16 0 00-1.82 3.32 8.88 8.88 0 001.2 7.42 8.33 8.33 0 003.39 2.53c4.62 2 9.92.54 14.74-.91l18.88-5.68a6.34 6.34 0 003.07-1.59 4.17 4.17 0 00.08-4.86 9.44 9.44 0 00-4-3.19c-5.87-2.86-12.49-3.51-18.94-3.63-2.4 0-4.77-.58-6.4 1.27-.86 1-.7 2.07-2 2.92a9 9 0 01-3.83.98z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M964.51 750.43a8.17 8.17 0 00-4.37 1.42 6.2 6.2 0 00-1.82 3.32 8.91 8.91 0 001.2 7.43 8.4 8.4 0 003.39 2.52c4.63 2 9.92.55 14.74-.9l18.88-5.69a6.34 6.34 0 003.07-1.59 4.16 4.16 0 00.08-4.85 9.47 9.47 0 00-4-3.19c-5.88-2.86-12.5-3.52-18.95-3.64-2.4 0-4.76-.57-6.4 1.28-.86 1-.7 2.06-2 2.91a8.7 8.7 0 01-3.82.98z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M948.1 545.53a232.59 232.59 0 0133.49-.94 6.66 6.66 0 012.17.34c2.46 1 2.84 4.22 3.07 6.85 1 10.68 5.66 20.63 8 31.09a88.83 88.83 0 011.86 20 71.72 71.72 0 00.16 9c.3 2.67 1 5.29 1.38 7.95a73 73 0 01.47 10.77 110.49 110.49 0 01-.95 16.87c-1.54 9.53 1.15 19 1.87 28.64a170.93 170.93 0 002.27 20.11c.55 2.81 1.24 5.59 1.62 8.42 1.12 8.41-.52 17.07 1.25 25.37.82 3.88 2.3 8.24.12 11.56-.68 1-1.68 1.85-2.42 2.86a3.57 3.57 0 00-.7 3.51c.43.91 1.43 1.51 1.68 2.48.39 1.53-1.21 2.78-2.65 3.43-10.85 4.9-24.84 1.45-32.16-7.94 1.26-.2 2.8-1.11 2.83-2.39a13.5 13.5 0 00-.82-3.72 15 15 0 01-.29-6.62c.29-1.54.81-3 1.13-4.55a44.2 44.2 0 00.6-5.14 85.21 85.21 0 013.63-18.24c1.82-5.75-.66-11.57-1.31-17.57-.3-2.84-.17-5.77-1.16-8.45-.6-1.58-1.57-3-2.16-4.58-1.37-3.69-.55-7.79.28-11.63-5.91-10.67-7.88-23.39-10.11-35.38l-3.75-20.2c-.56-3-1.17-6.11-3-8.53a104.16 104.16 0 00-2.27 27.17 40 40 0 01-.1 7.89c-.46 2.9-1.67 5.63-2.38 8.47-1.55 6.27-.64 12.85-1 19.3-.14 2.61-.47 5.2-.58 7.81-.49 11.52 3.39 22.72 7.22 33.59 2.35 6.67 2.87 14.25 4 21.23 1 6.69 2.11 13.38 2.64 20.13.49 6.2.71 12.91 4.57 17.78-3.53 2.29-7.17 4.62-11.3 5.41a20.86 20.86 0 01-13.92-2.7 43.79 43.79 0 01-11-9.35c.81-.28 1.1-1.46 1.18-2.31 1.2-12.66-3.61-25-5.43-37.6a81 81 0 01-.48-19.06c.23-2.39.56-4.78.65-7.18.48-12.51-5.55-24.56-5.33-37.08.1-5.87-3-11.65-4.52-17.32-1.31-5-1.35-10.3-1.38-15.5l-.25-41c0-5.54 0-11.22 1.79-16.45 2.2-6.3-.32-13.53-.7-20.19a83.22 83.22 0 0032.19 3.59z",
  fill: "#696791"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M912.45 427.73a130.66 130.66 0 00-15.31-24.17 38.33 38.33 0 01-3.4-4.64c-2.15-3.73-2.79-8.11-4.15-12.19-3.8-11.44-13.28-20.63-15.59-32.46-.84-4.3-3.58-8-5.46-12-1.27-2.67-2.67-5.49-5.21-7-3.27-2-7.79-1.08-10.51 1.6a12.49 12.49 0 00-3.22 10.55 8.93 8.93 0 002 4.74c1.45 1.63 3.62 2.37 5.57 3.35a21.88 21.88 0 0110.76 12.29c3.33 9.65 3.76 19.87 8 29.19s9.22 18.26 12.88 27.79c2.08 5.41 3.74 11 6.79 16s7.81 9.19 13.56 9.94a33.45 33.45 0 011.63-10.68c1.25-3.94 3.47-8.58 1.66-12.31zM974.36 435.21a55.26 55.26 0 013.25-20.78c.92-2.55 2-5.14 1.91-7.85-.13-2.52-1.33-4.83-2.42-7.11-3.76-7.85-6.4-16.17-9-24.47l-5-15.65a24.31 24.31 0 01-4.39-4.15 22.1 22.1 0 01-5.09-10.86 15.25 15.25 0 012.81-11.48 6.65 6.65 0 014.69-2.86 6.14 6.14 0 014.4 2 19.71 19.71 0 013.76 6.42c1.63 3.84 3.29 7.84 3.14 12-.14 3.46-1.43 7.32.6 10.13 6.64 9.22 11.67 19.81 16.93 29.88a50.56 50.56 0 013.42 7.49 41.19 41.19 0 011.8 12.94c0 8.19-1.08 16.35-2.2 24.47-.71 5.09-1.64 10.63-5.49 14-4-5.12-8.02-10.12-13.12-14.12z",
  fill: "#a0616a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "948.92",
  cy: "418.36",
  r: "20.75",
  fill: "#a0616a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M958.97 440.21c.5 3.75 2.51 7.11 4.47 10.35 1.18 2 2.69 4.13 5 4.35a100.79 100.79 0 01-18.85 7.58 21.32 21.32 0 01-6.88 1.11 16.83 16.83 0 01-5.73-1.47 28.49 28.49 0 01-16.19-18.92 37.6 37.6 0 007.71-.59 5.67 5.67 0 003.78-1.86 6 6 0 00.78-3.34c.1-3.46.11-6.93 0-10.39a41 41 0 0115.08 1.86c2 .65 4 1.43 6 1.94 1.26.32 4.73 0 5.66.73 1.53 1.03-1.18 6.1-.83 8.65z",
  fill: "#a0616a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M949.85 452.82a13.06 13.06 0 019.94-11.61c2.14-.48 4.46-.42 6.37-1.48 3.28-1.83 4.27-6.29 7.42-8.34s7.62-.91 10.36 1.68 4.13 6.28 5.25 9.89a50.06 50.06 0 012.69 15.15 7 7 0 01-.44 2.77 11.56 11.56 0 01-2.22 2.77 12.26 12.26 0 00-3 9.77 28 28 0 01-.89 9.8c-2 8.82-4 17.63-5.61 26.53a16.47 16.47 0 00-.37 5c.31 2.41 1.64 4.69 1.35 7.1a26.87 26.87 0 00-.63 3.41 8.27 8.27 0 00.6 2.53c2.27 6.59 8.4 21.69 8.34 28.67-10.65-2.73-26.35-3.34-37.35-3.39a83.11 83.11 0 00-9.06.4c-7.23.78-14.63 2.89-21.64.94-6.51-1.81-12.27-7-19-6.35-1.46-3.82.26-16.57 1.63-20.43a87.44 87.44 0 003-47.33c-1.23-5.66.46-11.67-.91-17.29a10.31 10.31 0 00-1.5-3.73 4 4 0 00-3.42-1.79 127.39 127.39 0 012.5-26.93c.66-3.15 2-6.87 5.23-7.41 2.86-.49 5.26 1.93 7.56 3.7a20.31 20.31 0 008 3.76 7.59 7.59 0 013.28 1.2c1.37 1.14 1.57 3.19 2.69 4.58 2 2.49 6.47 2.28 7.89 5.15a19.61 19.61 0 01.75 2.62 9.62 9.62 0 003.3 4.26 18.56 18.56 0 007.89 4.4z",
  fill: "#f86d70"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M932.06 396.3c-.36-1.37-.3-3 .8-3.92.55-.43 1.27-.59 1.86-1a8 8 0 002-2.53 10.86 10.86 0 0113.59-3.45c3.61 1.89 5.79 5.67 9 8.22 1.63 1.32 3.52 2.3 5.16 3.62a21.21 21.21 0 016.69 10.82 61.39 61.39 0 011.85 12.76 11.48 11.48 0 01-.15 3.88 10.86 10.86 0 01-1.47 3c-3.3 5-7.65 9.54-13.1 12.12s-12.08 3-17.46.3a3 3 0 01-1.34-1.07 3.85 3.85 0 01-.21-2.31 15.81 15.81 0 00-1.74-8.85c-1-2-2.5-3.72-3.3-5.79a20.17 20.17 0 01-.94-7.18c-.09-6.29.34-12.56-1.24-18.62z",
  fill: "#2d293d"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCharts);

/***/ }),

/***/ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "react"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_663__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_663__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_663__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_663__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_663__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_663__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_663__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_663__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_663__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_663__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_663__(__nested_webpack_require_663__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2940__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchorLink = __nested_webpack_require_2940__(1);

var _anchorLink2 = _interopRequireDefault(_anchorLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _anchorLink2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_3335__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __nested_webpack_require_3335__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnchorLink = function (_Component) {
  _inherits(AnchorLink, _Component);

  function AnchorLink(props) {
    _classCallCheck(this, AnchorLink);

    var _this = _possibleConstructorReturn(this, (AnchorLink.__proto__ || Object.getPrototypeOf(AnchorLink)).call(this, props));

    _this.smoothScroll = _this.smoothScroll.bind(_this);
    return _this;
  }

  _createClass(AnchorLink, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __nested_webpack_require_3335__(3).polyfill();
    }
  }, {
    key: 'smoothScroll',
    value: function smoothScroll(e) {
      var _this2 = this;

      e.preventDefault();
      var offset = function offset() {
        return 0;
      };
      if (typeof this.props.offset !== 'undefined') {
        if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
          offset = this.props.offset;
        } else {
          offset = function offset() {
            return parseInt(_this2.props.offset);
          };
        }
      }
      var id = e.currentTarget.getAttribute('href').slice(1);
      var $anchor = document.getElementById(id);
      var offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: offsetTop - offset(),
        behavior: 'smooth'
      });
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          offset = _props.offset,
          rest = _objectWithoutProperties(_props, ['offset']);

      return _react2.default.createElement('a', _extends({}, rest, { onClick: this.smoothScroll }));
    }
  }]);

  return AnchorLink;
}(_react.Component);

exports.default = AnchorLink;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/images/HeroImage.png":
/*!**********************************!*\
  !*** ./src/images/HeroImage.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/HeroImage-5909d22f98cb913b069318ad45e67b46.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map