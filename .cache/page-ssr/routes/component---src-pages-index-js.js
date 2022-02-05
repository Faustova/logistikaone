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
}, "Features"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  className: "px-4",
  href: "#services"
}, "Services"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  className: "px-4",
  href: "#stats"
}, "Stats"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
  className: "px-4",
  href: "#testimonials"
}, "Testimonials")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
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
/* harmony import */ var _svg_HeroImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../svg/HeroImage */ "./src/svg/HeroImage.js");
/* harmony import */ var _svg_SvgCharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../svg/SvgCharts */ "./src/svg/SvgCharts.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");













const Index = () => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
  className: "pt-20 md:pt-40"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "container mx-auto px-8 lg:flex"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "text-center lg:text-left lg:w-1/2"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
  className: "text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"
}, "Main title of your landing page"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "text-xl lg:text-2xl mt-6 font-light"
}, "Free landing page template to promote your business startup and generate leads for the offered services"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-8 md:mt-12"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
  size: "lg"
}, "Get Started")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4 text-gray-600"
}, "Sed fermentum felis ut cursu")), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "lg:w-1/2"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_svg_HeroImage__WEBPACK_IMPORTED_MODULE_9__["default"], null)))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
  id: "features",
  className: "py-20 lg:pb-40 lg:pt-48"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "container mx-auto text-center"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
  className: "text-3xl lg:text-5xl font-semibold"
}, "Main Features"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex flex-col sm:flex-row sm:-mx-3 mt-12"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Service One"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer."))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Service Two"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer."))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: "mb-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "font-semibold text-xl"
}, "Service Three"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-4"
}, "An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.")))))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SplitSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  id: "services",
  primarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "lg:pr-32 xl:pr-48"
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
    className: "text-3xl font-semibold leading-tight"
  }, "Market Analysis"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
    className: "mt-8 text-xl font-light leading-relaxed"
  }, "Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors")),
  secondarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_svg_SvgCharts__WEBPACK_IMPORTED_MODULE_10__["default"], null)
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SplitSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  reverseOrder: true,
  primarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "lg:pl-32 xl:pl-48"
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
    className: "text-3xl font-semibold leading-tight"
  }, "Design And Plan Your Business Growth Steps"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
    className: "mt-8 text-xl font-light leading-relaxed"
  }, "Once the market analysis process is completed our staff will search for opportunities that are in reach")),
  secondarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_svg_SvgCharts__WEBPACK_IMPORTED_MODULE_10__["default"], null)
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SplitSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
  primarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "lg:pr-32 xl:pr-48"
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
    className: "text-3xl font-semibold leading-tight"
  }, "Search For Performance Optimization"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
    className: "mt-8 text-xl font-light leading-relaxed"
  }, "With all the information in place you will be presented with an action plan that your company needs to follow")),
  secondarySlot: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_svg_SvgCharts__WEBPACK_IMPORTED_MODULE_10__["default"], null)
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
  id: "stats",
  className: "py-20 lg:pt-32"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "container mx-auto text-center"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_LabelText__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "text-gray-600"
}, "Our customers get results"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex flex-col sm:flex-row mt-8 lg:px-24"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "w-full sm:w-1/3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_StatsBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
  primaryText: "+100%",
  secondaryText: "Stats Information"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "w-full sm:w-1/3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_StatsBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
  primaryText: "+100%",
  secondaryText: "Stats Information"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "w-full sm:w-1/3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_StatsBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
  primaryText: "+100%",
  secondaryText: "Stats Information"
}))))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
  id: "testimonials",
  className: "py-20 lg:py-40"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "container mx-auto"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_LabelText__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "mb-8 text-gray-600 text-center"
}, "What customers are saying"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  className: "flex flex-col md:flex-row md:-mx-3"
}, _data_customer_data__WEBPACK_IMPORTED_MODULE_8__["default"].map(customer => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
  key: customer.customerName,
  className: "flex-1 px-3"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_CustomerCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
  customer: customer
})))))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
  className: "container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
  className: "text-5xl font-semibold"
}, "Ready to grow your business?"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-8 text-xl font-light"
}, "Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in."), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
  className: "mt-8"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
  size: "xl"
}, "Get Started Now"))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./src/svg/HeroImage.js":
/*!******************************!*\
  !*** ./src/svg/HeroImage.js ***!
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



const HeroImage = () => (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1167.52 754.06"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", null, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("linearGradient", {
  id: "a",
  x1: "588.17",
  y1: "805.69",
  x2: "588.17",
  y2: "186.69",
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
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("linearGradient", {
  id: "b",
  x1: "568.69",
  y1: "1179.83",
  x2: "568.69",
  y2: "1173.83",
  gradientTransform: "translate(73.48 -1003.15)",
  xlinkHref: "#a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("linearGradient", {
  id: "c",
  x1: "995.74",
  y1: "822.32",
  x2: "995.74",
  y2: "622.1",
  xlinkHref: "#a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("linearGradient", {
  id: "d",
  x1: "355.29",
  y1: "824.58",
  x2: "355.29",
  y2: "603.69",
  gradientTransform: "matrix(-1 0 0 1 965 0)",
  xlinkHref: "#a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("linearGradient", {
  id: "e",
  x1: "463.15",
  y1: "767.98",
  x2: "463.15",
  y2: "572.32",
  gradientTransform: "matrix(-.98 .22 .22 .98 532.3 -45.53)",
  xlinkHref: "#a"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".2"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1007.26 726.43a18.25 18.25 0 01-1.73 2.67q-8.64-6.09-17.57-11.93c.12-.25.25-.51.39-.77a16.74 16.74 0 016-6.51c3.29-2 7-2.48 10-.86s4.76 4.93 4.94 8.77a16.85 16.85 0 01-2.03 8.63z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "1022.06",
  cy: "779.24",
  rx: "14.01",
  ry: "10.7",
  transform: "rotate(-62.09 953.41 756.26)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "1030.07",
  cy: "764.11",
  rx: "14.01",
  ry: "10.7",
  transform: "rotate(-62.09 961.425 741.122)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "1038.09",
  cy: "748.97",
  rx: "14.01",
  ry: "10.7",
  transform: "rotate(-62.09 969.439 725.984)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "1046.11",
  cy: "733.84",
  rx: "14.01",
  ry: "10.7",
  transform: "rotate(-62.09 977.453 710.846)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1049.31 538.53a51.89 51.89 0 01-.78-7l27 9.08-27-14a51.4 51.4 0 0118.23-36.45l26.16 37.81-20.31-42.07a51.28 51.28 0 1148 90.35 51.23 51.23 0 01.8 11l-41.15-.33 40.52 6.67a51.32 51.32 0 01-29.84 38.69 51.28 51.28 0 11-71.23-37.73 51.28 51.28 0 0129.67-56z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1115.4 609.41a51.13 51.13 0 01-24.53 22.88 51.28 51.28 0 11-71.23-37.73c-1.99-10.92 98.46 9.76 95.76 14.85z",
  opacity: ".1"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".2"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M975.13 423.96a31 31 0 01-2.25 4.63q-15.12-8.05-30.61-15.66c.14-.43.3-.87.47-1.31a27.32 27.32 0 018.3-11.66c4.87-3.9 10.74-5.37 16-3.38s8.62 7 9.67 13.12a27.21 27.21 0 01-1.58 14.26z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "985.03",
  cy: "464.84",
  rx: "22.69",
  ry: "17.33",
  transform: "rotate(-69.16 924.024 440.128)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "994.89",
  cy: "438.92",
  rx: "22.69",
  ry: "17.33",
  transform: "rotate(-69.16 933.888 414.207)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "1004.76",
  cy: "413.01",
  rx: "22.69",
  ry: "17.33",
  transform: "rotate(-69.16 943.748 388.294)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "1014.62",
  cy: "387.09",
  rx: "22.69",
  ry: "17.33",
  transform: "rotate(-69.16 953.612 362.373)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1005.25 113.7a83.22 83.22 0 01-2.65-11.17l45.22 9.21-46.16-17.18a83.11 83.11 0 0121.91-62l49.56 55.47-41-63.54a83 83 0 1195.09 135.6 83.51 83.51 0 013.46 17.52l-66.17 7.67 66.43 2.65a83.07 83.07 0 01-40.24 68.1 83 83 0 11-122-46.42 83 83 0 0136.52-95.94z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1125.55 214.41a82.63 82.63 0 01-34.86 41.62 83 83 0 11-122-46.42c-5.33-17.13 160.18-3.91 156.86 4.8z",
  opacity: ".1"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".2"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M178.38 510.17a37.65 37.65 0 002 5.8q19-7.29 38.43-14c-.11-.53-.22-1.07-.36-1.62a32.46 32.46 0 00-8.07-15c-5.18-5.32-11.89-7.92-18.34-6.34s-11.2 7-13.35 14.05a32.48 32.48 0 00-.31 17.11z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "206.83",
  cy: "546.21",
  rx: "20.61",
  ry: "26.98",
  transform: "rotate(-13.72 -104.628 577.056)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "199.01",
  cy: "514.17",
  rx: "20.61",
  ry: "26.98",
  transform: "rotate(-13.72 -112.456 545.04)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "191.2",
  cy: "482.14",
  rx: "20.61",
  ry: "26.98",
  transform: "rotate(-13.72 -120.278 512.984)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("ellipse", {
  cx: "183.38",
  cy: "450.11",
  rx: "20.61",
  ry: "26.98",
  transform: "rotate(-13.72 -128.106 480.968)",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M188.58 139.63a97.19 97.19 0 004.78-12.79l-54.71 4.19 57-13.47a98.81 98.81 0 00-16.71-76.43l-66.68 58.24 57.77-68.93a98.72 98.72 0 10-132.2 146 99 99 0 00-6.67 20.15l76.95 18.82-78.78-6.68a98.78 98.78 0 0037.43 86.3 98.72 98.72 0 10150.76-36.79 98.73 98.73 0 00-29-118.59z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M31.76 240.73a98.3 98.3 0 0035 54.3 98.72 98.72 0 10150.76-36.79c8.88-19.48-188.37-28.28-185.76-17.51z",
  opacity: ".1"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1072.54 186.69H103.8a8.64 8.64 0 00-8.63 8.65v592.89a17.43 17.43 0 0017.4 17.46h951.2a17.43 17.43 0 0017.4-17.46V195.34a8.64 8.64 0 00-8.63-8.65z",
  transform: "translate(-16.24 -72.97)",
  fill: "url(#a)"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1061.01 150.53v561.24a17.26 17.26 0 01-17.25 17.26H100.27a17.26 17.26 0 01-17.26-17.26V150.53z",
  fill: "#fff"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M211.93 143.72v585.31H100.27a17.26 17.26 0 01-17.26-17.26v-568z",
  fill: "#d7d9e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1061.01 125.59v24.94h-978v-24.94a8.56 8.56 0 018.56-8.56h960.88a8.56 8.56 0 018.56 8.56z",
  fill: "#ededf4"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "98.51",
  cy: "133.52",
  r: "4",
  fill: "#fa5959",
  opacity: ".8"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "109.51",
  cy: "133.52",
  r: "4",
  fill: "#fed253",
  opacity: ".8"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "120.51",
  cy: "133.52",
  r: "4",
  fill: "#8ccf4d",
  opacity: ".8"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#ededf4",
  d: "M371.93 199.71h94v10h-94zM371.93 228.71h528v10h-528zM371.93 257.71h528v10h-528zM371.93 286.71h528v10h-528zM371.93 315.71h528v10h-528zM95.93 199.71h94v10h-94zM95.93 228.71h94v10h-94zM95.93 257.71h94v10h-94zM95.93 286.71h94v10h-94zM95.93 315.71h94v10h-94z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  transform: "rotate(90 670.53 129.08)",
  fill: "url(#b)",
  d: "M640.17 170.69h4v6h-4z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M913 628.18a1.88 1.88 0 00-1-1.48 1.92 1.92 0 00-2.55 1.07l-9.21 19.37-2.07 76.25h3.32l1.24-76.08 10.12-17.93a1.92 1.92 0 00.15-1.2z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1069 819.92a1.46 1.46 0 01-.16.19 2.67 2.67 0 01-1.14.57 11.14 11.14 0 01-2.57.43h-.26a10.65 10.65 0 01-1.49 0 7.88 7.88 0 00-1.09-.07 7.63 7.63 0 00-1.55.38 13.29 13.29 0 01-3.44.49h-4.98c-2.24 0-4.46.42-6.7.45h-.72a10.58 10.58 0 01-6.18-1.85 2.34 2.34 0 01-.81-.93 2.68 2.68 0 01-.15-1.23 2.9 2.9 0 01.75-2.06 3.22 3.22 0 011.19-.58l2.28-.72 2.44-.73.16-.05.46-.13.29-.1a4.72 4.72 0 001-.47 3.36 3.36 0 001-1c0-.08.1-.16.14-.24v-.19c-.07-.52-.13-1-.22-1.56a6.15 6.15 0 01-3.06-1.73 9.88 9.88 0 01-1.79-2.41 50.82 50.82 0 01-2.33-6.17 55.59 55.59 0 00-4.63-8.89c-1.59-2.65-3.18-5.3-5-7.8-1.2-1.65-2.49-3.24-3.68-4.9a43.31 43.31 0 01-7.07-15.46 21.46 21.46 0 00-.86-3.14c-.71-1.74-2-3.15-3-4.75a15.59 15.59 0 01-2.19-5.62c-.21-1.14-.56-2.36-1.69-2.48l-.12.24c-2.34 4.57-4.75 9.2-8.29 12.92a13.83 13.83 0 00-1.55 1.78 18.13 18.13 0 00-1 1.91 12.6 12.6 0 01-2.2 3.22 7.42 7.42 0 01-.87.74 4.87 4.87 0 01-1.37.68 3.9 3.9 0 01-.59.14.68.68 0 010 .14v.16a19.56 19.56 0 01-.76 9.92c0 .1-.07.2-.1.29-.17.47-.36.92-.56 1.37-.51 1.1-1.11 2.15-1.58 3.27-.08.19-.16.38-.23.57-1.67 4.44-1.26 9.39-1.46 14.16a15.36 15.36 0 01-.37 3.1c-.28 1.15-.73 2.34-1 3.52a6 6 0 000 2.72h-.1c-.45.17-.9.32-1.35.46v.06c.17.93.32 1.86.48 2.78a4.1 4.1 0 00.86 2.22 4.18 4.18 0 01.4.44c.33.51 0 1.19.1 1.8.09.86.89 1.59.76 2.45a1.6 1.6 0 01-1 1.15 2.82 2.82 0 01-.64.21h-.13l-.75.09a34.69 34.69 0 01-9.27.09c-.61-.1-1.21-.24-1.82-.29a12.84 12.84 0 00-2.32.1 114.47 114.47 0 01-17.07.33c-1.48-.08-3.18-.32-4-1.59a4.67 4.67 0 01-.08-3.6 3.74 3.74 0 01.5-1.26.94.94 0 01.09-.12c.76-.94 2.2-1 3.43-1l4 .12a3.59 3.59 0 001.18-.1 12.36 12.36 0 001.77-1c.77-.37 1.74-.4 2.29-1l.07-.09a3.18 3.18 0 00.28-.43l.06-.08a.35.35 0 000-.08c.51-.67 1.41-.89 2.13-1.32a1.44 1.44 0 00.31-.22l.08-.07a8.61 8.61 0 01-2-2 2.14 2.14 0 01-.46-.8 1.21 1.21 0 01.05-.68 1 1 0 01.07-.15c.28-.56.86-1.06 1.18-1.63v-.05a2.57 2.57 0 00-.13-2.79c.33-5.45 1.83-10.78 2.17-16.24.13-2.17.07-4.35.17-6.52s.34-4.29.58-6.42c.55-4.88 1.87-9.66 1.69-14.56a9 9 0 010-1.37v-.09a8.2 8.2 0 01.93-2.87 22.18 22.18 0 012-2.87c2.55-3.31 5.61-6.62 6.52-10.71a23.13 23.13 0 012.54-5.93 10.42 10.42 0 012.21-3.11 9.39 9.39 0 001.47-1.26c.68-.88.7-2.09 1.1-3.14.21-.54.53-1 .69-1.6a1 1 0 010-.17 10.86 10.86 0 00.14-1.71v-.48a17.37 17.37 0 011.42-4.74l.25-.57a17.66 17.66 0 01-5-4.32 9.87 9.87 0 01-1.2-1.82 22 22 0 01-1.45-5.48c-1-4.43-3.17-8.6-3.47-13.12a14.83 14.83 0 00-.48-4.11 8.76 8.76 0 00-.47-1c-.08-.14-.15-.28-.22-.42a.8.8 0 01-.08-.16l-.22-.41-.34.26a248.49 248.49 0 01-26.61 18.19l-.8.47a2.93 2.93 0 00-1 .86l-.09.16c-.19.39-.24.84-.4 1.25a3.38 3.38 0 01-2.31 1.84 7.13 7.13 0 01-5.24-.68c-.2-.1-.4-.21-.59-.33a6.65 6.65 0 01-.66.32 6.49 6.49 0 01-.87.33 18.21 18.21 0 01-5.11.46 15.54 15.54 0 00-5.09.56 12.82 12.82 0 01-3.27 1h-.39a5.88 5.88 0 01-1.85-.55l-.34-.15c-.17-.09-.34-.17-.51-.28a2.69 2.69 0 01-.5-.39 1.83 1.83 0 01-.47-.79 1.34 1.34 0 010-.66.39.39 0 01.14-.25.41.41 0 01.24-.06 7.5 7.5 0 011.42.12 4.66 4.66 0 00.83 0h.15a1.77 1.77 0 001.26-.7.66.66 0 00.11-.2.87.87 0 00.08-.37.29.29 0 000-.09c-.17-.08-.35-.16-.51-.25l-.25-.15h-.05a2.44 2.44 0 01-.43-.35 1.33 1.33 0 01-.21-.26 1.57 1.57 0 01-.25-.5 2.38 2.38 0 00-1 0c-.45.12-.91.39-1.36.48a1.13 1.13 0 01-.68 0c-.65-.23-.87-1-1-1.69 0-.13 0-.26-.08-.4a2.27 2.27 0 010-.78 2.84 2.84 0 011.09-1.42l1.36-1.14.1-.08a3.43 3.43 0 01-.06-.34 2 2 0 010-.77 2.86 2.86 0 011.09-1.42l3-2.53a3.52 3.52 0 011.91-1c1.09-.07 2 .83 2.78 1.55a6.15 6.15 0 003.64 1.75 5.27 5.27 0 001.93-.26l.35-.12c-.07-.15-.15-.3-.22-.46s-.24-.51-.35-.76a8.29 8.29 0 004.7-2.25c1.34-1.16 2.49-2.53 3.84-3.67s3.13-2.17 4.61-3.36c3.44-2.79 5.73-6.89 9.41-9.35 1.27-.86 2.75-1.54 3.62-2.82.27-.39.47-.84.75-1.23.88-1.24 2.39-1.81 3.64-2.67a18 18 0 003.35-3.34c.72-.87 1.45-1.74 2.13-2.63.64-1.18 1.17-2.41 1.84-3.58a17.79 17.79 0 012-2.77c.17-.33.34-.66.53-1s.32-.55.49-.81.25-.37.38-.55c-.38-.67-.74-1.25-.91-1.49l-.08-.12a12.93 12.93 0 00-1.17-1.09q-.66-.11-1.29-.27a12.09 12.09 0 01-8.89-11.68 12 12 0 011.32-5.46c.17-.34.36-.66.56-1a5.31 5.31 0 01-.55-.23 2.12 2.12 0 01-.77-.63 1.84 1.84 0 01-.32-.81 4.07 4.07 0 01.3-2 9 9 0 01.38-.9v-.05a11.54 11.54 0 019.75-6.18c4.26-.17 8.4 1.82 11.76 4.68a15.83 15.83 0 012.87 2.67 17 17 0 012.77 8.64 13.11 13.11 0 010 2.87 6.81 6.81 0 01-.2 1c-.06.2-.13.39-.2.58a4.08 4.08 0 01-.19.42 2.93 2.93 0 01-.21.39v.05l-.06.09.11.24a2.26 2.26 0 00.11.22c.84.07 1.6.18 2.44.25a5.18 5.18 0 011.18.18 8.06 8.06 0 012.15 1.34c1.73 1.22 3.85 1.79 5.54 3.05 2.51 1.86 3.75 4.92 5.24 7.67 2 3.68 5.23 6.81 6.66 10.75l1.95 5.35a82.1 82.1 0 004.27 10.3c2.4 4.59 5.66 8.72 7.59 13.52a2.13 2.13 0 001 1.12 87.69 87.69 0 017 11.68 22.58 22.58 0 012.38 6.77 16.09 16.09 0 01-.52 6.32 29.11 29.11 0 01-1.21 3.59 6 6 0 00-.41 1.28.68.68 0 000 .14 12.11 12.11 0 00.3 2.38 4.38 4.38 0 01-.21 1.9c0 .09-.07.19-.11.28a11.08 11.08 0 00-.65 1.51v.19a7.52 7.52 0 00.42 2.71 35.93 35.93 0 01.41 9.94c-.1 1.65 1.24 3 2.36 4.21a44.61 44.61 0 015.25 7.64 24.23 24.23 0 012.15 4.29 37.92 37.92 0 011.15 5.28c1.06 5.47 4.51 10.3 5.45 15.79a14.16 14.16 0 003.2 6.79 13.91 13.91 0 011.38 1.67 6.73 6.73 0 01.69 1.49 11 11 0 01.56 3.78 6 6 0 00.11 1.84c.39 1.27 1.78 2 2.36 3.17s.17 2.73.39 4.09a4.48 4.48 0 001.64 2.76c-.33.29-.68.56-1 .82a4.08 4.08 0 01.86.9 3.49 3.49 0 01.39.74c.55 1.27.57 2.78 1 4.12a2.94 2.94 0 01.29 1.73 1.94 1.94 0 00-.14.51c0 .38.39.62.54 1a1 1 0 01-.18.98z",
  transform: "translate(-16.24 -72.97)",
  fill: "url(#c)"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M965.01 585.33a26.18 26.18 0 007-3.53l7.71-4.91a6.72 6.72 0 01-5-3.46 17.7 17.7 0 01-1.88-6 31.35 31.35 0 00-8.86 5.8c-1.07.92-3.32 2.3-3.65 3.73s1.76 2.59 2.57 3.55c.31.35 2.93 4.6 2.11 4.82z",
  fill: "#fbbebe"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M965.01 585.33a26.18 26.18 0 007-3.53l7.71-4.91a6.72 6.72 0 01-5-3.46 17.7 17.7 0 01-1.88-6 31.35 31.35 0 00-8.86 5.8c-1.07.92-3.32 2.3-3.65 3.73s1.76 2.59 2.57 3.55c.31.35 2.93 4.6 2.11 4.82z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M922.86 625.9a8.52 8.52 0 01-4.33 1.31 6.32 6.32 0 01-3.64-1.74c-.81-.72-1.68-1.62-2.77-1.54a3.57 3.57 0 00-1.91 1l-3 2.52a2.09 2.09 0 00-1 2.57c.14.67.36 1.46 1 1.69s1.35-.27 2-.45a2.39 2.39 0 012.35.69 1.41 1.41 0 01.4.9c0 .75-.84 1.24-1.59 1.28s-1.5-.21-2.25-.16a.41.41 0 00-.24.06.4.4 0 00-.14.24 1.57 1.57 0 00.48 1.45 4.19 4.19 0 001.35.81 5.49 5.49 0 001.85.55c1.27.08 2.44-.63 3.65-1a16 16 0 015.08-.56 17.74 17.74 0 005.1-.45 5.77 5.77 0 003.86-3.13.81.81 0 00.07-.48.82.82 0 00-.35-.41c-2.31-1.71-3.25-3.79-5.85-5z",
  fill: "#fbbebe"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M922.86 625.9a8.52 8.52 0 01-4.33 1.31 6.32 6.32 0 01-3.64-1.74c-.81-.72-1.68-1.62-2.77-1.54a3.57 3.57 0 00-1.91 1l-3 2.52a2.09 2.09 0 00-1 2.57c.14.67.36 1.46 1 1.69s1.35-.27 2-.45a2.39 2.39 0 012.35.69 1.41 1.41 0 01.4.9c0 .75-.84 1.24-1.59 1.28s-1.5-.21-2.25-.16a.41.41 0 00-.24.06.4.4 0 00-.14.24 1.57 1.57 0 00.48 1.45 4.19 4.19 0 001.35.81 5.49 5.49 0 001.85.55c1.27.08 2.44-.63 3.65-1a16 16 0 015.08-.56 17.74 17.74 0 005.1-.45 5.77 5.77 0 003.86-3.13.81.81 0 00.07-.48.82.82 0 00-.35-.41c-2.31-1.71-3.25-3.79-5.85-5z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M971.39 581.7a5 5 0 00-4.38-.53 9.43 9.43 0 00-3.78 2.52 17.24 17.24 0 00-2.66 3.52c-.71 1.23-1.26 2.54-1.95 3.78a39.41 39.41 0 01-4.5 6.11 17.55 17.55 0 01-3.35 3.32c-1.24.86-2.75 1.43-3.63 2.66-.28.39-.48.83-.76 1.23-.86 1.26-2.33 1.94-3.61 2.79-3.68 2.45-6 6.52-9.39 9.29-1.48 1.19-3.15 2.13-4.61 3.35s-2.5 2.49-3.83 3.64a8.2 8.2 0 01-4.7 2.23 24 24 0 004.6 7.24c2 2 5 3.35 7.8 2.55a3.39 3.39 0 002.31-1.83 7.56 7.56 0 01.48-1.41 3 3 0 011.05-.85 247.16 247.16 0 0031.54-21.86c2.67-2.17 5.31-4.11 8-6.2a17.51 17.51 0 002.71-2.37 9 9 0 001.09-9.92 23.75 23.75 0 00-2.51-3.41 30.08 30.08 0 00-5.92-5.85z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M971.39 581.7a5 5 0 00-4.38-.53 9.43 9.43 0 00-3.78 2.52 17.24 17.24 0 00-2.66 3.52c-.71 1.23-1.26 2.54-1.95 3.78a39.41 39.41 0 01-4.5 6.11 17.55 17.55 0 01-3.35 3.32c-1.24.86-2.75 1.43-3.63 2.66-.28.39-.48.83-.76 1.23-.86 1.26-2.33 1.94-3.61 2.79-3.68 2.45-6 6.52-9.39 9.29-1.48 1.19-3.15 2.13-4.61 3.35s-2.5 2.49-3.83 3.64a8.2 8.2 0 01-4.7 2.23 24 24 0 004.6 7.24c2 2 5 3.35 7.8 2.55a3.39 3.39 0 002.31-1.83 7.56 7.56 0 01.48-1.41 3 3 0 011.05-.85 247.16 247.16 0 0031.54-21.86c2.67-2.17 5.31-4.11 8-6.2a17.51 17.51 0 002.71-2.37 9 9 0 001.09-9.92 23.75 23.75 0 00-2.51-3.41 30.08 30.08 0 00-5.92-5.85z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M953.58 735.44a6.66 6.66 0 00-2.12 1.32c-.17.21-.28.47-.46.67-.55.65-1.53.68-2.29 1.05a13.55 13.55 0 01-1.77 1 3.94 3.94 0 01-1.19.09l-4-.12c-1.28 0-2.78 0-3.52 1.07a3.74 3.74 0 00-.5 1.26 4.62 4.62 0 00.08 3.58c.78 1.25 2.48 1.49 4 1.57a112.87 112.87 0 0017-.33 13.74 13.74 0 012.31-.09 18.16 18.16 0 011.82.29 35 35 0 009.26-.09 4.71 4.71 0 001.53-.33 1.58 1.58 0 001-1.14c.13-.86-.67-1.58-.76-2.44-.06-.61.23-1.28-.1-1.79a2.72 2.72 0 00-.4-.43 4.09 4.09 0 01-.85-2.21l-.75-4.28a1.27 1.27 0 00-.34-.8 1.19 1.19 0 00-.52-.21c-3.15-.72-6.39-.06-9.54.34a26.53 26.53 0 01-4.88.24c-.7 0-1-.13-1.5.33s-.85 1.04-1.51 1.45zM1029.84 740.56a6.58 6.58 0 01-1.77.69q-2.44.72-4.87 1.49a3.22 3.22 0 00-1.19.58 2.86 2.86 0 00-.75 2.05 2.66 2.66 0 00.15 1.22 2.39 2.39 0 00.81.92 10.85 10.85 0 006.61 1.84c2.33 0 4.64-.39 7-.45 2.82-.08 5.71.32 8.41-.47a8.12 8.12 0 011.6-.39 8 8 0 011.09.07 11.39 11.39 0 004.31-.39 2.65 2.65 0 001.15-.57 1.09 1.09 0 00.31-1.17c-.15-.33-.53-.58-.54-1a1.94 1.94 0 01.14-.51 2.91 2.91 0 00-.29-1.72c-.54-1.6-.45-3.44-1.41-4.83a6.14 6.14 0 00-4.38-2.18 12.21 12.21 0 00-4.09.12c-1.51.32-2.92 1-4.41 1.43a14.59 14.59 0 01-5.3.5c-1.19-.1-.78.09-1.18 1.08a3.49 3.49 0 01-1.4 1.69z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "963.62",
  cy: "567.57",
  r: "12.02",
  fill: "#fbbebe"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M1050.76 736.26c-3.73 3.21-8.77 4.61-13.68 4.66a11.18 11.18 0 01-6-1.28c-.12-.68-.17-1.41-.3-2.09a7.66 7.66 0 01-4.84-4.12 50.23 50.23 0 01-2.33-6.13 55.1 55.1 0 00-4.63-8.84c-1.58-2.63-3.17-5.26-5-7.74-1.2-1.65-2.49-3.22-3.67-4.87a43 43 0 01-7.07-15.36 19.45 19.45 0 00-.86-3.12 30.94 30.94 0 00-3-4.72 15.51 15.51 0 01-2.19-5.59c-.21-1.13-.55-2.35-1.69-2.47-2.38 4.63-4.81 9.32-8.4 13.08a12.85 12.85 0 00-1.55 1.76 17.34 17.34 0 00-1 1.91 12 12 0 01-2.19 3.2 5.13 5.13 0 01-2.83 1.54 19.26 19.26 0 01-1.36 11.81c-.5 1.1-1.1 2.14-1.57 3.25-1.93 4.55-1.49 9.7-1.69 14.64a15.07 15.07 0 01-.36 3.08c-.51 2-1.54 4.18-1 6.2-5.2 2-11 1.86-16.47 1a7.9 7.9 0 01-3.07-.93 8.57 8.57 0 01-2-2 2.14 2.14 0 01-.46-.8c-.21-.95.84-1.64 1.32-2.48a2.55 2.55 0 00-.11-2.82c.33-5.43 1.83-10.73 2.16-16.15.14-2.16.08-4.32.18-6.48s.33-4.26.57-6.38c.55-4.84 1.88-9.59 1.69-14.46a8.38 8.38 0 011-4.31 21.06 21.06 0 012-2.85c2.54-3.29 5.6-6.58 6.51-10.64a23 23 0 012.53-5.89 10.41 10.41 0 012.22-3.09 9.79 9.79 0 001.46-1.26c.68-.87.7-2.08 1.11-3.12a17.2 17.2 0 00.67-1.59 8.9 8.9 0 00.19-1.86 17.14 17.14 0 011.72-5.78 17.67 17.67 0 01-5-4.29 10.39 10.39 0 01-1.21-1.81 22.74 22.74 0 01-1.45-5.44c-1-4.41-3.15-8.55-3.46-13a14.73 14.73 0 00-.48-4.09 13.69 13.69 0 00-.77-1.59 6.4 6.4 0 01-.65-1.61c-.27-1.22.1-2.5 0-3.74a27.21 27.21 0 00-.8-3.2 15.36 15.36 0 01-.12-4.23 35.12 35.12 0 00.32-5 19.36 19.36 0 015.26-14.89l.1-.1c.79-.81 1.65-1.56 2.37-2.44 1-1.17 1.67-2.56 2.68-3.7.45-.51 1-1 1.4-1.48a12.05 12.05 0 011.34-1.51 2.08 2.08 0 011.88-.5 4.92 4.92 0 00.57 1.76c.86.07 1.63.19 2.48.26a5.18 5.18 0 011.18.18 7.78 7.78 0 012.15 1.33c1.72 1.21 3.84 1.78 5.53 3 2.51 1.84 3.75 4.89 5.23 7.62 2 3.66 5.23 6.77 6.66 10.68q1 2.67 1.94 5.32a81.9 81.9 0 004.27 10.24c2.4 4.55 5.65 8.66 7.57 13.43a2.15 2.15 0 001 1.11 87.55 87.55 0 017 11.61 22.06 22.06 0 012.37 6.73c.46 3.34-.46 6.72-1.72 9.85a4.91 4.91 0 00-.43 1.41 11.22 11.22 0 00.3 2.36 4.46 4.46 0 01-.32 2.17 9.86 9.86 0 00-.65 1.5 6.41 6.41 0 00.39 2.88 35.5 35.5 0 01.4 9.88c-.09 1.64 1.25 3 2.36 4.18a44.61 44.61 0 015.25 7.59 25 25 0 012.14 4.26 37.36 37.36 0 011.16 5.26c1 5.43 4.5 10.23 5.43 15.68a14 14 0 003.2 6.74 14.56 14.56 0 011.38 1.67 6.2 6.2 0 01.68 1.48 10.94 10.94 0 01.57 3.76 5.35 5.35 0 00.11 1.83c.38 1.26 1.78 2 2.35 3.15s.18 2.71.4 4.06a4.32 4.32 0 001.63 2.73z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M925.35 622.17a8.55 8.55 0 01-4.33 1.31 6.29 6.29 0 01-3.64-1.74c-.82-.72-1.69-1.62-2.77-1.54a3.54 3.54 0 00-1.91 1l-3 2.52a2.77 2.77 0 00-1.08 1.41 2.68 2.68 0 00.07 1.16c.13.67.36 1.46 1 1.69s1.35-.27 2-.45a2.37 2.37 0 012.35.69 1.36 1.36 0 01.4.9c0 .75-.83 1.25-1.59 1.28s-1.49-.21-2.24-.16a.42.42 0 00-.25.06.45.45 0 00-.14.24 1.6 1.6 0 00.54 1.49 4.57 4.57 0 001.36.82 5.73 5.73 0 001.84.54c1.28.08 2.45-.63 3.65-1a15.85 15.85 0 015.09-.57 17.77 17.77 0 005.1-.45 5.76 5.76 0 003.85-3.13.68.68 0 00.07-.48.8.8 0 00-.34-.41c-2.32-1.71-3.26-3.79-5.86-5z",
  fill: "#fbbebe"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M957.76 560.19a10.1 10.1 0 00-2 .87 3.46 3.46 0 01-2.83-.16 2.12 2.12 0 01-.77-.63 3 3 0 010-2.79 11.39 11.39 0 0110.15-7.08c4.25-.17 8.39 1.81 11.74 4.65a16.43 16.43 0 012.67 2.79 16.9 16.9 0 012.77 8.59 11.24 11.24 0 01-.26 3.84 4.68 4.68 0 01-2.17 2.94 4.33 4.33 0 01-3.81-.17 15.45 15.45 0 01-3.25-2.37 5 5 0 00-1.62-1 1.68 1.68 0 00-1.76.42c-.55.67-.42 1.76-.92 2.48a2.74 2.74 0 01-2.44.82 2.79 2.79 0 01-2.32-.78 2.9 2.9 0 01-.23-2.37 7.56 7.56 0 00.41-2.43c-.17-1.64-1.62-2.68-2.07-4.2-.29-1 .36-1.42.29-2.32a1.3 1.3 0 00-1.58-1.1z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M995.53 674.49v.1c-2.38 4.63-4.81 9.32-8.4 13.08a12.85 12.85 0 00-1.55 1.76 17.34 17.34 0 00-1 1.91 12 12 0 01-2.19 3.2l-3 1.5 9.53-49.73zM981.68 599.22a17.51 17.51 0 01-2.71 2.37c-2.74 2.09-5.38 4-8 6.2q-3.23 2.63-6.52 5.13a6.4 6.4 0 01-.65-1.61c-.27-1.22.1-2.5 0-3.74a27.21 27.21 0 00-.8-3.2 15.36 15.36 0 01-.12-4.23 35.12 35.12 0 00.32-5 19.36 19.36 0 015.26-14.89l.1-.1a7.77 7.77 0 011.41-.63 5 5 0 014.38.53 29.86 29.86 0 016 5.86 23.12 23.12 0 012.51 3.4 9 9 0 01-1.18 9.91z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M973.88 577.97a5 5 0 00-4.39-.53 9.46 9.46 0 00-3.77 2.52 17.28 17.28 0 00-2.67 3.52c-.7 1.23-1.26 2.54-1.94 3.78a38.84 38.84 0 01-4.51 6.11 17.22 17.22 0 01-3.34 3.32c-1.25.86-2.76 1.43-3.64 2.66-.28.39-.48.83-.75 1.23-.87 1.26-2.34 1.94-3.62 2.79-3.67 2.45-6 6.52-9.38 9.29-1.48 1.19-3.15 2.13-4.61 3.35s-2.5 2.49-3.84 3.64a8.15 8.15 0 01-4.69 2.23 24 24 0 004.59 7.24c2 2 5.05 3.35 7.81 2.55a3.38 3.38 0 002.3-1.83 8.39 8.39 0 01.49-1.41 3 3 0 011.05-.85 247.87 247.87 0 0031.54-21.86c2.67-2.17 5.31-4.11 8-6.2a17.06 17.06 0 002.71-2.37 9 9 0 001.1-9.92 22.49 22.49 0 00-2.52-3.4 29.81 29.81 0 00-5.92-5.86z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".1"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M964.07 571.7a2.76 2.76 0 01-2.32-.78 2.9 2.9 0 01-.23-2.37 7.5 7.5 0 00.41-2.42c-.17-1.65-1.62-2.68-2.07-4.21-.29-1 .36-1.42.29-2.32a1.31 1.31 0 00-1.55-1.07 10.1 10.1 0 00-2 .87 3.46 3.46 0 01-2.83-.15 2.35 2.35 0 01-.77-.63 3 3 0 010-2.8v-.09a10.53 10.53 0 00-.86 1.75 3 3 0 000 2.79 2.12 2.12 0 00.77.63 3.46 3.46 0 002.85.13 10.1 10.1 0 012-.87 1.3 1.3 0 011.55 1.07c.07.9-.58 1.32-.29 2.32.45 1.52 1.9 2.56 2.07 4.2a7.56 7.56 0 01-.41 2.43 2.9 2.9 0 00.23 2.37 2.79 2.79 0 002.32.78 2.74 2.74 0 002.44-.82 3.38 3.38 0 00.45-1.27 3.53 3.53 0 01-2.05.46zM977.86 571.55a4.31 4.31 0 01-3.8-.16 16.54 16.54 0 01-3.3-2.36 4.73 4.73 0 00-1.61-1 1.68 1.68 0 00-1.76.42 3.24 3.24 0 00-.52 1.4 1.75 1.75 0 011.45-.16 5 5 0 011.62 1 15.45 15.45 0 003.25 2.37 4.33 4.33 0 003.81.17 4.63 4.63 0 002.13-2.8 3.76 3.76 0 01-1.27 1.12z"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "874.73",
  cy: "737.28",
  r: "12.43",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "874.73",
  cy: "737.28",
  r: "12.43",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "874.73",
  cy: "737.28",
  r: "7.87",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "874.73",
  cy: "737.28",
  r: "7.87",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M865.19 717.8l8.16 18.44a1.58 1.58 0 002.87.06l9.7-19.75z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M865.19 717.8l8.16 18.44a1.58 1.58 0 002.87.06l9.7-19.75z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "797.23",
  cy: "737.28",
  r: "12.43",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "797.23",
  cy: "737.28",
  r: "12.43",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "797.23",
  cy: "737.28",
  r: "7.87",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "797.23",
  cy: "737.28",
  r: "7.87",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M787.7 717.8l8.16 18.44a1.58 1.58 0 002.87.06l9.69-19.75z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M787.7 717.8l8.16 18.44a1.58 1.58 0 002.87.06l9.69-19.75z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M915.07 629.03a1.86 1.86 0 00-1-1.48 1.92 1.92 0 00-2.55 1.07l-7.13 17.71-2.07 79.57h3.31l1.24-79.4 8.06-16.27a1.91 1.91 0 00.14-1.2z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#4299e1",
  d: "M768.43 719.66l11.19-7.04 120.8-1.04 3.11 8.08h-135.1z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#3f3d56",
  d: "M768.43 727.12v-7.46l137.29-1.32-.13 5.05H770.91v3.73h-2.48z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "785.83",
  cy: "741.63",
  r: "12.43",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "785.83",
  cy: "741.63",
  r: "7.87",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M776.3 722.15l8.16 18.44a1.58 1.58 0 002.87.06l9.69-19.74z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "882.39",
  cy: "741.63",
  r: "12.43",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "882.39",
  cy: "741.63",
  r: "7.87",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M872.86 722.15l8.16 18.44a1.58 1.58 0 002.87.06l9.69-19.74z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#ededf4",
  d: "M787.93 633.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M804.61 669.51h13.9v20.84h-13.9zm17.37-10.42h13.89v31.26h-13.89zm17.37 17.36h13.89v13.9h-13.89z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#d7d9e1",
  d: "M801.93 551.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M829.03 610.08h27.79v5.21h-27.79zm13.9-13.89a3.48 3.48 0 000-6.95 3.83 3.83 0 00-1 .13l-7.17-5.28-.43.38 5.31 7.24a3.29 3.29 0 00-.16 1 3.47 3.47 0 003.45 3.48z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M842.93 570.14a22.57 22.57 0 00-17.79 36.47h6.38l.43-.44 2.4-2.39-2.48-2.49-2.4 2.39a17.25 17.25 0 01-3.82-9.23h3.38v-3.42h-3.38a17.25 17.25 0 013.82-9.23l2.4 2.39 2.48-2.49-2.39-2.39a17.28 17.28 0 019.23-3.82v3.38h3.47v-3.38a17.25 17.25 0 019.23 3.82l-2.39 2.39 2.49 2.49 2.4-2.39a17.33 17.33 0 013.82 9.23h-3.39v3.47h3.39a17.33 17.33 0 01-3.82 9.23l-2.4-2.39-2.49 2.49 2.4 2.39.44.44h6.42a22.58 22.58 0 00-17.79-36.47z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  opacity: ".1",
  d: "M373.93 362.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#ededf4",
  d: "M371.93 360.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M404.24 380.88h6.95v41.68h-6.95zm-10.42 29.52h6.94v12.16h-6.95zm20.84-6.95h7v19.11h-7zm10.42-10.42h6.95v29.53h-6.95z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  opacity: ".1",
  d: "M817.93 361.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#ededf4",
  d: "M815.93 359.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M870.32 392.28l-9.47 14.48a5.13 5.13 0 011.17 3.28 5.21 5.21 0 01-10.42 0 6.12 6.12 0 01.09-1l-6.25-3.64a5.19 5.19 0 01-6.18.78l-6.65 6.23v6.21a4.65 4.65 0 004.63 4.64h39.37a4.66 4.66 0 004.64-4.64v-23.03l-6.36-4.23a5.23 5.23 0 01-4.57.92z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M841.83 396.48a5.21 5.21 0 015.21 5.21v.67l6.52 3.65a5.2 5.2 0 013.3-1.18 5.76 5.76 0 011.13.12l9.49-14.69a5.16 5.16 0 01-1-3 5.21 5.21 0 0110.42 0 5.52 5.52 0 01-.14 1.23l4.49 3v-8.69a4.66 4.66 0 00-4.64-4.64h-39.37a4.65 4.65 0 00-4.63 4.64v24.89l4.34-4.16a5.2 5.2 0 014.88-7z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  opacity: ".1",
  d: "M595.93 365.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#ededf4",
  d: "M593.93 363.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M621.03 422.08h27.79v5.21h-27.79zm13.9-13.89a3.5 3.5 0 000-7 3.83 3.83 0 00-1 .13l-7.17-5.23-.43.38 5.31 7.24a3.29 3.29 0 00-.16 1 3.47 3.47 0 003.45 3.48z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M634.93 382.14a22.57 22.57 0 00-17.79 36.47h6.38l.43-.44 2.4-2.39-2.48-2.49-2.4 2.39a17.25 17.25 0 01-3.82-9.23h3.38v-3.42h-3.38a17.25 17.25 0 013.82-9.23l2.4 2.39 2.48-2.49-2.39-2.39a17.28 17.28 0 019.23-3.82v3.38h3.47v-3.38a17.25 17.25 0 019.23 3.82l-2.39 2.39 2.49 2.49 2.4-2.39a17.33 17.33 0 013.82 9.23h-3.39v3.47h3.39a17.33 17.33 0 01-3.82 9.23l-2.4-2.39-2.49 2.49 2.4 2.39.44.44h6.42a22.58 22.58 0 00-17.79-36.47z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  opacity: ".1",
  d: "M561.93 494.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#ededf4",
  d: "M554.93 488.71h82v82h-82z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M605.65 515.12l5.57 5.56-11.86 11.88-9.73-9.73-18 18.05 3.43 3.43 14.59-14.59 9.73 9.73 15.31-15.3 5.57 5.57v-14.6z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M557.71 820c.59-2.52 1-4.73 1-4.73a9.73 9.73 0 011.09-4.8v-5.75a16.92 16.92 0 00-1.27-2.65c-.92-1.59 0-7.43 0-7.43s3.38-8.22 2.55-13.43S568 758 568 758a22.48 22.48 0 00-.74-5.12 4.4 4.4 0 01-.09-1.08v-.13c.11-3.44 2.83-9.88 2.83-9.88l-.36-12.29s-1.74-7.25 1.1-17c1-3.39 1.62-6.11 2-8.2 0-.24.09-.47.13-.69-5.83-.89-10.28-1.63-10.28-1.63s3.38-14.14 5.66-16.62 4.11-10.25 4.11-10.25 1.19-10-.73-12.91-2.19-8-2.19-8-4.39-3.18-4.94-4.59a23.8 23.8 0 01-1.46-6.28c0-1.68.55-3.18.37-4.07s1.28-4.24.55-5.83a4.38 4.38 0 01-.3-1.54v.11a21.42 21.42 0 01.39-4.15 11.7 11.7 0 014.33-2.32l.1-.38.25-1a4.92 4.92 0 01.43-.26v-1.79l-.69-3.23c-1.34-5.61 6.14-6.45 6.14-6.45a3.94 3.94 0 012.13-1.86c1.51-.53.25 8.44-.46 9a33.77 33.77 0 00-3 4.62l-.13.23a3.41 3.41 0 01.34.35l-.28 2v.3a8.25 8.25 0 011.19 2 4.36 4.36 0 00-1.1 3.18 10 10 0 01-.45 3.89c.08-.09 1.05-1.14 2-.88s3.65 1.06 3.65 1.06 2 .35 1.83.8 1.37 2.38 1.37 2.38l5.4-5.11c.05-.16.11-.31.15-.47a11.68 11.68 0 00.47-2.24 11.86 11.86 0 01-1.72-.55 3.59 3.59 0 01-1.5-1 5.82 5.82 0 01-.87-2.32 32.45 32.45 0 00-2-4.47 14.54 14.54 0 01-1.08-8 5.27 5.27 0 01.83-2.35c.88-1.22 2.48-1.71 3.64-2.68s1.92-2.44 3.27-3.17a6.5 6.5 0 014.1-.35 21.86 21.86 0 017.65 2.78 3.87 3.87 0 002.56.84 3.44 3.44 0 001.85-1.35v-.08l.06-.07a9.57 9.57 0 01.84 4v.65a1.79 1.79 0 000 .23 1.09 1.09 0 000 .18.9.9 0 000 .28 2 2 0 00.51.73 4.41 4.41 0 01.44.6c0-.07-.05-.15-.08-.22a3.13 3.13 0 01.56 1.7 1.7 1.7 0 01-.4 1.22 6.67 6.67 0 01-.88.71 10.76 10.76 0 01.16 1.8 10.47 10.47 0 01-5.09 8.91l-.18.46a12.81 12.81 0 00-1 5.89c0 .14 0 .28.06.43l.2.22s8.91.09 11-1.81 5.3 4.64 5.3 4.64 3.19.62 3.83 0 4.39-.09 4.39-.09a8 8 0 015.57-2 16.34 16.34 0 014.09-2.27h.1a4.49 4.49 0 012-.25s4.38-3.63 5.66-5.57 7.37-9.16 7.4-9.2v-.34l.07-1.06a3.43 3.43 0 00.55 0c0-.1.07-.23.12-.36a20.24 20.24 0 011.29-3s0-1.33-.38-1.66.16-5.2.16-5.2 4-9.23 7.49-2.34c0 0 6.69 4.46 1.07 9.66 0 0-2.24 1.08-2.56 1.94-.2.56-1 2.12-1.48 3.16l-.22.46h.06l-.08.87v.34c1.06.6 1.78 1.19 1.6 1.65a10.36 10.36 0 00-.64 2.38s-7.76 9.73-8.76 13.88c0 0-20.83 12.38-27.68 13.26l1.19 6.19s.36 3.71.27 5 .82 7.34.82 7.34 1.19 8.84 2.2 10.08.82 6.54.82 6.54a44 44 0 001.37 7.51 19.23 19.23 0 01.27 7.52s3.47 7.95-4.84 2.56c0 0-4.08-.25-8.78-.41v2.42c.06 4.55.09 10.83-.12 15.58-.36 8.4-2.92 25-2.92 25v8.35a11.11 11.11 0 01.24 2.39 15.51 15.51 0 01-2.25 8.36l-.64 5.57a21.82 21.82 0 00-1.53 5.86 2.83 2.83 0 00.07.53 4 4 0 01.07.85c.08 2.53-1.44 8.58-1.44 8.58s-.09 6.1-1 6.46 1 3.51 1.59 4.43a.85.85 0 000-.17l.11.18a4.25 4.25 0 01.28 1.55 2.21 2.21 0 01-1 2.14c-1.74 1.06-2.67 1.94-1.2 2.3a13.65 13.65 0 011.61.34 1.8 1.8 0 00.08-.21 1 1 0 01.6 1.07 4.56 4.56 0 01-.54 2.07 21.84 21.84 0 01-2.48 4.51l-.7-.08a3.69 3.69 0 00.41.75 2.89 2.89 0 001 .92 3.32 3.32 0 001.25.43 3.52 3.52 0 012.59 1.26c.91 1.17 1.48 2.78-.32 4.19l-6.53 2.25s-11.24 1.46-10.64-1.06 1-4.73 1-4.73a9.93 9.93 0 01.91-4.47c.12-.22.25-.44.4-.66h-.4s-.82-5.57-1.92-6.63c-.25-.25-.31-.43-.25-.58-.11-.3.17-.48.54-.58a1.43 1.43 0 01.08.22 5.47 5.47 0 011.09-.12s.37-2.92-.82-4a1.15 1.15 0 01-.23-.87 4.9 4.9 0 01.12-1.18l.05.06a43.41 43.41 0 012.62-6.85s.09-2.65-.64-3.71.09-14.41.09-14.41-.27-6.46.55-9.46-1-6.54-1-6.54v-.2s0-.4.11-1v.06c.18-1.71.53-4.8.79-6.23.36-2-.09-11.76-.09-11.76l-1.51-4.06-2.92 7.16-3.08 9.54a8.12 8.12 0 00-1.6 4.07v.94a5.72 5.72 0 01-1 3.4s-.82 4.51-2.1 5.66a5.1 5.1 0 00-1.28 3.36s-1.55 6.54-2.29 7.69c-.61 1-.64 3.63-.64 4.45v.24s-.22 2.34-.21 4.3v.7-.05a6.74 6.74 0 00.19 1.59v.09-.33a16.88 16.88 0 01.47 4.08c0 2.35-.32 5.13-1.74 6.77-2.47 2.83-4 2.47-4 2.47s1.19 3.54 2.65 4.25a.65.65 0 01.15.1 1.55 1.55 0 000-.21 1.74 1.74 0 01.43 1.32 9.48 9.48 0 01-1.81 5.24 2.9 2.9 0 01-1.24.72l.23.14a5.5 5.5 0 00.51.24 2.85 2.85 0 00.74.2 3.49 3.49 0 012.59 1.25c.91 1.18 1.48 2.78-.32 4.19l-6.53 2.26s-11.08 1.45-10.49-1.06z",
  transform: "translate(-16.24 -72.97)",
  fill: "url(#d)"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M584.38 751.19l6.32-2.25c1.75-1.41 1.19-3 .31-4.19a3.35 3.35 0 00-2.5-1.26 3.09 3.09 0 01-1.21-.43 2.79 2.79 0 01-1-.92 4.67 4.67 0 01-.73-2.44s-6.94-2-8.84 0a5.36 5.36 0 00-.84 1.23 10.33 10.33 0 00-.88 4.47s-.35 2.21-.93 4.73 10.3 1.06 10.3 1.06zM553.44 748.08l6.32-2.26c1.74-1.41 1.19-3 .31-4.19a3.35 3.35 0 00-2.5-1.25 2.7 2.7 0 01-.73-.2 4.28 4.28 0 01-.48-.24c-1.77-1-1.73-3.36-1.73-3.36s-6.94-2-8.84 0a5.42 5.42 0 00-.66.91 10 10 0 00-1.06 4.8s-.36 2.21-.93 4.73 10.3 1.06 10.3 1.06z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M543.89 729.09a18.2 18.2 0 011.24 2.65v7c1.77 2.91 11 1.94 12.2.35s2.56-5.75 1.15-6.45-2.57-4.25-2.57-4.25 1.51.36 3.89-2.47 1.68-9.11 1.24-10.61 0-6.54 0-6.54-.09-3.54.62-4.69 2.21-7.69 2.21-7.69a5.2 5.2 0 011.24-3.36c1.24-1.15 2-5.66 2-5.66a5.78 5.78 0 00.88-3.8c-.26-2.21 1.51-4.59 1.51-4.59l3-9.55 2.83-7.16 1.59 4.15s.45 9.73.09 11.76-.88 7.43-.88 7.43 1.77 3.53 1 6.54-.53 9.46-.53 9.46-.8 13.35-.09 14.41.62 3.71.62 3.71-3.62 7.78-2.47 8.84.79 4 .79 4-2.47 0-1.41 1.06 1.85 6.63 1.85 6.63l10.69 1.24a22.5 22.5 0 002.4-4.51c1.41-3.27-.27-2.92-1.69-3.27s-.52-1.24 1.16-2.3.7-3.45.7-3.45-2.56-4.33-1.68-4.68 1-6.46 1-6.46 1.76-7.25 1.32-9.19 1.42-6.63 1.42-6.63l.62-5.57a15.32 15.32 0 001.93-10.55v-8.58s2.48-16.62 2.83-25c.23-5.38.16-12.72.09-17.3 0-2.57-.09-4.27-.09-4.27l-38.19-4a31.47 31.47 0 01-.69 5.67c-.39 2.1-1 4.81-2 8.21a37.27 37.27 0 00-1.06 17l.35 12.29s-3.36 8.22-2.65 11a23.75 23.75 0 01.7 5.13s-7.51 17.94-6.71 23.16-2.48 13.44-2.48 13.44-.85 5.86.03 7.45z",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
  opacity: ".05"
}, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M588.09 729.03a2.06 2.06 0 00.95-1.51l.11.18s1 2.39-.71 3.45l-.54.36c-.31-.06-.65-.1-1-.18-1.39-.3-.49-1.24 1.19-2.3zM574.65 728.32c-.28-.26-.27-.94-.1-1.81a4.81 4.81 0 01.59 2.56 2.17 2.17 0 00-.49-.75zM576.26 684.34a12 12 0 01.7 3.25 12.43 12.43 0 00-.81-2.23s.04-.4.11-1.02zM552.37 679.7a4.57 4.57 0 01-.09-1c.13.66.22 1.28.29 1.81-.06-.24-.12-.48-.2-.81zM576.51 715.77a5.56 5.56 0 01-.27-2 6.61 6.61 0 01.52 2.48 2.1 2.1 0 00-.25-.48zM588.44 716.57s-.09 6.1-1 6.45c-.45-1-.75-2-.35-2.12.88-.36 1-6.46 1-6.46s1.77-7.25 1.33-9.19 1.41-6.63 1.41-6.63l.62-5.57a15.32 15.32 0 001.94-10.52v-8.58s2.48-16.62 2.83-25c.23-5.38.17-12.72.09-17.3v-2.18h.31s0 1.7.08 4.27c.08 4.58.14 11.92-.08 17.3-.36 8.4-2.83 25-2.83 25v8.57a15.36 15.36 0 01-2 10.52l-.62 5.57s-1.85 4.69-1.41 6.63-1.32 9.24-1.32 9.24zM543.53 726.73a16.93 16.93 0 011.24 2.65v1.24c-.2-.45-.49-1.05-.88-1.77a5.29 5.29 0 01-.39-2.19zM556.43 728.12a15.68 15.68 0 01-.87-2.1s1.5.36 3.89-2.47c1.73-2.06 1.83-5.95 1.58-8.49.45 1.51 1.16 7.78-1.23 10.61-1.56 1.85-2.74 2.36-3.37 2.45zM561.04 708.52a46.38 46.38 0 00-.18 5.24 7.72 7.72 0 00-.18-.82c-.44-1.5 0-6.54 0-6.54s-.08-3.54.62-4.69 2.21-7.69 2.21-7.69a5.2 5.2 0 011.24-3.36c1.24-1.15 2-5.65 2-5.65a5.86 5.86 0 00.89-3.81c-.27-2.21 1.5-4.59 1.5-4.59l3-9.55 2.83-7.16 1.59 4.15v1.35l-1.2-3.37-2.83 7.16-3 9.55s-1.76 2.39-1.5 4.6a5.78 5.78 0 01-.88 3.8s-.8 4.51-2 5.65a5.23 5.23 0 00-1.23 3.36s-1.51 6.55-2.21 7.7-.67 4.67-.67 4.67z"
})), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M553.62 545.87l.66 3.23v2.5l3.69.38.41-.77a33.82 33.82 0 012.87-4.63c.68-.57 1.89-9.55.43-9a3.88 3.88 0 00-2.05 1.86s-7.32.82-6.01 6.43z",
  fill: "#ffcdd3"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M554.21 551.6l3.69.38.41-.77a3.24 3.24 0 00-4.07-.67z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M553.28 553.34l4.86 1.13.11-.72.27-2a3.34 3.34 0 00-4.71-.64l-.24 1z",
  fill: "#dce6f2"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M632.08 546.23l5.19 2.78s.19-.41.47-1c.49-1 1.23-2.59 1.43-3.15.31-.86 2.47-2 2.47-2 5.44-5.19-1-9.65-1-9.65-3.42-6.9-7.24 2.34-7.24 2.34s-.54 4.86-.16 5.19.37 1.66.37 1.66a21 21 0 00-1.25 3c-.2.52-.28.83-.28.83z",
  fill: "#ffcdd3"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M632.08 546.23l5.19 2.78s.19-.41.47-1c-.74-.61-3.33-2.72-4.19-2.62a6.72 6.72 0 01-1.23 0c-.16.53-.24.84-.24.84z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M631.54 547.8l5.84 2.87.12-1.25.08-.87s-3.38-2.9-4.38-2.79a5.36 5.36 0 01-1.52 0l-.07 1z",
  fill: "#dce6f2"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M567.76 567.31s25.44 2.87 20.69 1.33c-3.31-1.08-4.63-3.18-4.9-5.52a13.21 13.21 0 01.94-5.89 25.52 25.52 0 012.28-4.59s-19.45-10.7-15.56-1a15.46 15.46 0 011.1 4.6 12.79 12.79 0 01-.5 4.67 13.88 13.88 0 01-4.05 6.4z",
  fill: "#ffcdd3"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M571.21 551.67a15.46 15.46 0 011.1 4.6c1.83 1.54 3.84 1.44 6.42 1.44 2 0 4.18.48 5.76-.48a25.52 25.52 0 012.28-4.59s-19.45-10.7-15.56-.97z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "579.08",
  cy: "547.86",
  r: "10.52",
  fill: "#ffcdd3"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M567.76 567.31s25.44 2.87 20.69 1.33c-3.31-1.08-4.63-3.18-4.9-5.52-1.27-1.37-3.82-2.36-5.45-2.89a7.64 7.64 0 00-4.61-.07 6.52 6.52 0 00-1.68.78 13.88 13.88 0 01-4.05 6.37zM553.28 553.34l4.86 1.13.11-.72a4.29 4.29 0 00-4.68-1.6zM631.54 547.8l5.84 2.87.12-1.25a43.62 43.62 0 00-5.89-2.61zM557.7 631.42c9.85 1.56 23.87 3.58 26.1 2.9 1.84-.56 7.74-.5 12.87-.32 0-2.57-.09-4.27-.09-4.27l-38.19-4a31.47 31.47 0 01-.69 5.69z",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M547.87 629.11s32.44 5.57 35.93 4.51 21.35.08 21.35.08c8.05 5.4 4.69-2.56 4.69-2.56a19.61 19.61 0 00-.27-7.51 45.92 45.92 0 01-1.32-7.52s.18-5.3-.8-6.54-2.12-10.08-2.12-10.08-.88-6-.79-7.34-.27-5-.27-5l-1.15-6.19c6.63-.89 26.79-13.26 26.79-13.26 1-4.16 8.48-13.88 8.48-13.88a10.18 10.18 0 01.62-2.39c.53-1.41-7.42-4.24-7.42-4.24s-5.93 7.25-7.16 9.19-5.48 5.57-5.48 5.57a4.38 4.38 0 00-2 .25h-.1a15.8 15.8 0 00-4 2.27 7.7 7.7 0 00-5.39 2s-3.62-.53-4.24.09-3.71 0-3.71 0-3.1-6.55-5.13-4.65-10.62 1.87-10.62 1.87c-1.15-1.53-3.95-2.63-5.7-3.19a7.64 7.64 0 00-4.61-.08 5.88 5.88 0 00-1.82.88l-5.24 5.13s-1.5-2-1.32-2.39-1.77-.8-1.77-.8-2.56-.79-3.54-1.06-1.86.79-1.94.88a10.27 10.27 0 00.44-3.88 4.45 4.45 0 011.06-3.18c-3.09-7.61-10.08-1.24-10.08-1.24s-.79 4.15-.09 5.74-.7 5-.53 5.84-.35 2.39-.35 4.07a23.69 23.69 0 001.42 6.27c.53 1.42 4.77 4.6 4.77 4.6s.26 5 2.12 8 .71 12.9.71 12.9-1.77 7.78-4 10.26-5.42 16.58-5.42 16.58z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M581.92 557.4a2.23 2.23 0 01-.82 1.42 2.11 2.11 0 01-1 .22c-3.21.2-6.55.34-9.52-.89a3.72 3.72 0 01-1.44-1 5.82 5.82 0 01-.84-2.33 34.5 34.5 0 00-1.94-4.47 15 15 0 01-1.05-8 5.54 5.54 0 01.81-2.35c.85-1.21 2.4-1.7 3.52-2.67s1.85-2.45 3.17-3.17a6 6 0 014-.35 20.74 20.74 0 017.41 2.78 3.77 3.77 0 002.48.84 3.46 3.46 0 001.82-1.4 9.76 9.76 0 01.78 4.59 2 2 0 000 .69 2 2 0 00.49.73c.79.92 1.28 2.37.5 3.3-.34.4-.86.62-1.19 1-.6.74-.4 1.81-.38 2.75a1.42 1.42 0 01-.24.93 1.32 1.32 0 01-1.29.31 3.66 3.66 0 00-1.39-.13 2.33 2.33 0 00-1.2.93 16.37 16.37 0 00-2.68 6.27z",
  fill: "#2d293d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M583.76 563.78s-13.15 1.74-14.33-.24",
  opacity: ".1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M409.93 667.72h-10a1 1 0 000 2h2v13.36h-34.25a1 1 0 00-.75-.36h-10a1 1 0 000 2h2v13.72h-33.06a1 1 0 00-.94-.72h-10a1 1 0 000 2h1v14.09h-33.59a1 1 0 00-.41-.09h-10a1 1 0 000 2h1v13.45h-33.17a1 1 0 00-.81-.45h-10a1 1 0 000 2h1v15h226v-78z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M190.53 802.15a8 8 0 003.41 3.72 29.36 29.36 0 014.26 2.91c1.54 1.46 2.54 3.48 4.35 4.6a8.81 8.81 0 002.2.91 13.86 13.86 0 002.71.55 19.16 19.16 0 007-1.2 6.49 6.49 0 002.1-.92 5.85 5.85 0 00.8-.77 4.5 4.5 0 001.1-1.74 1.42 1.42 0 00-.1-1.05 2.42 2.42 0 00-.89-.85 15.1 15.1 0 00-2-1.11 10.27 10.27 0 01-2.62-1.39 6.1 6.1 0 01-1.27-1.71 16.56 16.56 0 01-1.44-3.45 11.23 11.23 0 00-.8-2.35c-.43-.79-1.12-1.47-1.58-2.24.24 0 .49 0 .73-.1a6.82 6.82 0 00-.8-3.54c1 .08 1.47-1.23 1.31-2.2s-.63-2-.21-2.88a5.34 5.34 0 011.13-1.3c1.59-1.68 1.54-4.24 2.2-6.44a18.68 18.68 0 011.65-3.58c1.91-3.45 2.79-7.77 5.87-10.26l2.77-2.24a1.18 1.18 0 00.43-.51c.16-.43-.18-.88-.16-1.34.05-.81 1.15-1.14 1.52-1.87a4.62 4.62 0 00.27-1.11c.29-1.27 1.53-2.06 2.42-3a6.81 6.81 0 001.77-5.44 4.61 4.61 0 01-.08-1.48 7.14 7.14 0 01.39-1 9 9 0 00.33-3.24 29 29 0 01.63-5.15l13.66-3.1c.09.1.17.2.27.3 1.21 1.23 1.81 3 3 4.28l1.56 1.72c.3.33.61.77.43 1.17s-.41.41-.6.63a1.07 1.07 0 00.92 1.69 2.06 2.06 0 001.07 3.09 8.28 8.28 0 01-1.14 1.74 1.44 1.44 0 01.3.88 4.18 4.18 0 01-.2.56 2.37 2.37 0 00.11 1.26 18.93 18.93 0 010 9.8 5.66 5.66 0 00-.26 1.35 4 4 0 00.17 1.13c.46 1.65 1.38 3.38.74 5a10.3 10.3 0 00-.54 1.17c-.36 1.2.47 2.38.92 3.55a12 12 0 01.44 5c-.11 2.32-.23 4.63-.34 6.94a2.76 2.76 0 00.13 1.25 2.13 2.13 0 001.4 1.08c-.14.47-.28.94-.44 1.4a.83.83 0 00-1.4-.06 1.48 1.48 0 00-.18.66 16.61 16.61 0 00.81 4.91 2.28 2.28 0 01.07.78 4.92 4.92 0 01-.27.79 1.17 1.17 0 00-.06.2 4.87 4.87 0 00.22 2.38 2.1 2.1 0 00.69 1.27 2 2 0 00.9.28c4.78.55 9.44-2.56 14.22-2 1 .11 1.94.37 2.92.47a15.34 15.34 0 003.45-.17c1.6-.21 3.19-.48 4.76-.79a11.84 11.84 0 003.47-1.11 4.32 4.32 0 002.23-2.73 2.05 2.05 0 00-.2-1.54 1.78 1.78 0 00-.4-.42 4.3 4.3 0 00-1.24-.59l-1.85-.67a11.12 11.12 0 00-2.76-.72c-.69-.06-1.4 0-2.09 0-2.44-.13-4.59-1.53-6.6-2.87l-2.74-1.82a1.77 1.77 0 00-1.87-.31l-.38.14 1.69-.94q.12-12.36-.06-24.71a25.89 25.89 0 00-.58-6.09c-.3-1.14-.62-2.63.38-3.27.26-.89-.27-1.78-.51-2.66s.1-2.15 1-2.16c-.92-1.62-.89-3.58-.93-5.44 0-1.53-.12-3-.3-4.57a12.93 12.93 0 00-1.58-5.38l13.48-3.06-.44-1.95 2-.45-10.86-47.81a1.27 1.27 0 00.83-1.14c-.05-.47-.51-.9-.36-1.35.09-.27.36-.42.53-.65a1.55 1.55 0 00-.17-1.78.79.79 0 01-.19-.44.87.87 0 01.1-.31 2.34 2.34 0 00-.67-2.78.91.91 0 00-.39-.2c-.32 0-.6.1-.92 0s-.33-.28-.69-.31h-.11l-4.11-18.09a18 18 0 00.72-2.68 8.52 8.52 0 00-.43-4.85 9.91 9.91 0 002.38-1.79 1.34 1.34 0 00.32-1.7 12.11 12.11 0 00-4-5.47c-.57-.43-1.92-1.57-2.75-1.32q.31-.45.66-.87a8.81 8.81 0 001.31-1.64 11.42 11.42 0 006.81-13 3.47 3.47 0 00-.13-.46 1.85 1.85 0 001.54-.56 2 2 0 00.18-2 15.91 15.91 0 00-1-1.8c-.75-1.36-.57-3.12-1.34-4.39a14.66 14.66 0 00-2.73-3 8.75 8.75 0 00-7.28-1.66 15.82 15.82 0 00-6.85 3.44 9 9 0 01-1.92 1.33c-1.14.52-2.54.5-3.49 1.31-1.26 1.07-1.1 3-.62 4.6s1.19 3.23.64 4.79a10 10 0 00-.55 1.41 4.08 4.08 0 00.67 2.59 3.2 3.2 0 00.32-.57.13.13 0 010 .06c.07.26.15.52.22.78a.78.78 0 00-.33.07c-.47.21-.68.76-1.07 1.1s-1.36.56-1.55 1.19c-.09.3 0 .63-.11.92-.24.57-1.08.57-1.52 1a1.28 1.28 0 00-.25 1.3 2.71 2.71 0 00.34.68 1.44 1.44 0 00.09.87l-5.58 1.35a12.28 12.28 0 00-2.59.85 4 4 0 00-1.91 1.87c0 .1-.1.23-.21.27a.45.45 0 01-.28 0 5 5 0 00-2.89.14 15.63 15.63 0 00-7.39 5.4 2.72 2.72 0 00-.71 1.4c-.05.6.28 1.27 0 1.79l-.29.12a14.23 14.23 0 00-2.37 1c-.81.48-1.52 1.11-2.28 1.67-3.11 2.28-7.22 3.41-9.42 6.56-.72 1-1.24 2.29-2.34 2.93a15.11 15.11 0 00-1.5.77c-.92.71-1 1.94-1.21 3.11l-19.65 4.47.44 1.94-2 .45 18.16 79.91 16.76-3.8a4.81 4.81 0 00.16 1.13 9.71 9.71 0 001.15 3.32 1.91 1.91 0 00-1.32 1.77c-.09.77.05 1.57-.11 2.33-.3 1.36-1.48 2.33-2.46 3.34-4.46 4.58-5.4 11.34-7.68 17.26-1.07 2.76-2.46 5.41-3.16 8.27-.8 3.25-.85 7-3.41 9.25a1.79 1.79 0 00-.58.68 1.09 1.09 0 000 .62 3 3 0 00.95 1.52l-.12.23a.92.92 0 00-.3 0c-.52 0-.81.66-1 1.06a11.43 11.43 0 00-1.32 4.51 1.29 1.29 0 00-.44 0 1.87 1.87 0 00-1.35 1.11 3 3 0 00.13 2.06zm65.13-165.88h-.2a8.6 8.6 0 01.59-1.36 8.36 8.36 0 00-.39 1.36zM202.16 796a1.65 1.65 0 01-.57.87h-.05a2.57 2.57 0 01.1-.32l.22-.63z",
  transform: "translate(-16.24 -72.97)",
  fill: "url(#e)"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M244.42 719.03c-3 1.11-6.2 2.1-9.4 1.81-.49 0-1.09-.24-1.14-.73a1.13 1.13 0 01.11-.5 29.8 29.8 0 001.61-6 .47.47 0 01.12-.28.45.45 0 01.3-.07c1.46 0 2.85.66 4.31.73a5.72 5.72 0 002.17-.32c.61-.21 1.34-.92 1.91-1 .12 2.09-.22 4.19.01 6.36zM184.3 727.19c-2.37-.94-4.83-1.94-6.54-3.84a.79.79 0 01-.24-.4.93.93 0 01.07-.46 18 18 0 013.31-5.73 13 13 0 013 1.7c.64.43 2.27 1 2.46 1.8.12.48-.31 1.14-.48 1.57-.22.59-.43 1.18-.62 1.78a22.26 22.26 0 00-.96 3.58z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M233.64 728.03a2.14 2.14 0 00.68 1.27 1.8 1.8 0 00.9.28c4.71.57 9.29-2.52 14-2 1 .11 1.92.38 2.88.47a15 15 0 003.41-.16c1.57-.2 3.14-.46 4.69-.77a11.43 11.43 0 003.41-1.09 4.36 4.36 0 002.2-2.73 2.16 2.16 0 00-.21-1.54 1.78 1.78 0 00-.4-.42 4.34 4.34 0 00-1.22-.6l-1.83-.67a11 11 0 00-2.72-.73c-.68-.07-1.38 0-2.06 0-2.41-.15-4.53-1.55-6.52-2.9l-2.7-1.83a2.27 2.27 0 00-.9-.43 2.19 2.19 0 00-.95.12 12.79 12.79 0 00-5.49 3.35 8.38 8.38 0 01-1.27 1.19 5.35 5.35 0 01-4.22.42c-.63-.17-.54-.37-.9-.85s-1-.69-1.39-.09a1.36 1.36 0 00-.18.66 16.94 16.94 0 00.81 4.91 2.31 2.31 0 01.08.78 4.92 4.92 0 01-.27.79 1.46 1.46 0 00-.05.2 4.87 4.87 0 00.22 2.37z",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M233.64 728.03a2.14 2.14 0 00.68 1.27 1.8 1.8 0 00.9.28c4.71.57 9.29-2.52 14-2 1 .11 1.92.38 2.88.47a15 15 0 003.41-.16c1.57-.2 3.14-.46 4.69-.77a11.43 11.43 0 003.41-1.09 4.36 4.36 0 002.2-2.73 2.16 2.16 0 00-.21-1.54 1.78 1.78 0 00-.4-.42c-.14.59-.16 1.34-.26 1.63a3.13 3.13 0 01-1.71 1.93 5.08 5.08 0 01-1.91.18c-4.17-.08-8.37.86-12.49.24a29.34 29.34 0 00-4.26-.61 30.31 30.31 0 00-4.3.62c-2.26.32-4.57.14-6.85.29a4.87 4.87 0 00.22 2.41z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M174.28 729.17a8.13 8.13 0 003.38 3.73 28.23 28.23 0 014.21 2.93c1.52 1.46 2.51 3.49 4.31 4.61a8.69 8.69 0 002.17.92 14.24 14.24 0 002.67.56 18.54 18.54 0 006.92-1.18 6.27 6.27 0 002.08-.92 5.6 5.6 0 00.74-.79 4.43 4.43 0 001.07-1.74 1.47 1.47 0 00-.09-1 2.47 2.47 0 00-.88-.85 15.52 15.52 0 00-2-1.11 10.14 10.14 0 01-2.59-1.41 6.11 6.11 0 01-1.26-1.71 16.57 16.57 0 01-1.42-3.46 11.43 11.43 0 00-.8-2.35c-.63-1.15-1.8-2.06-2-3.36a.91.91 0 00-.17-.54.77.77 0 00-.49-.17 8.19 8.19 0 00-2.37 0 2.67 2.67 0 00-1.9 1.29c-.23.46-.32 1-.75 1.32a1.7 1.7 0 01-.71.19 5.9 5.9 0 01-3.49-.27 4.2 4.2 0 01-2.05-2.68c-.08-.43 0-.92-.67-.86s-.79.66-1 1.06a11.34 11.34 0 00-1.29 4.51 1.3 1.3 0 00-.44 0 1.84 1.84 0 00-1.32 1.11 3.07 3.07 0 00.14 2.17z",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M174.28 729.17a8.13 8.13 0 003.38 3.73 28.23 28.23 0 014.21 2.93c1.52 1.46 2.51 3.49 4.31 4.61a8.69 8.69 0 002.17.92 14.24 14.24 0 002.67.56 18.54 18.54 0 006.92-1.18 6.27 6.27 0 002.08-.92 5.6 5.6 0 00.74-.79 4.43 4.43 0 001.07-1.74 3.41 3.41 0 00-1.49 0c-1 .28-1.52 1.41-2.43 1.92-1.29.74-2.89.07-4.37.06-1 0-1.93.27-2.89.18a7.29 7.29 0 01-2.35-.77 11.17 11.17 0 01-2.69-1.63 14.27 14.27 0 01-1.87-2.29 38.38 38.38 0 00-3.75-4.4 3.79 3.79 0 00-.69-.58 8.76 8.76 0 00-.84-.35 5.67 5.67 0 01-2.34-2.65 5 5 0 00-.61-.93 1.84 1.84 0 00-1.32 1.11 3.07 3.07 0 00.09 2.21z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M239.51 560.26a10.34 10.34 0 00-2.06 3.92c-.36 1.44-1.88 12.31-1.33 13.69-1.52-1-6.46-.06-8-1-.64-.4-4-2.37-4.6-2.88s-4-1.09-4.48-1.63c-1.81-2 6.59-13.07 4.75-15a.43.43 0 01-.08-.65 16.39 16.39 0 012.54-2.73 5 5 0 001.67-3.25 10 10 0 013.06 1.2q3.41 1.78 6.75 3.72c.87.5 2.46 1.07 3 1.94s-.65 1.98-1.22 2.67z",
  fill: "#a1616a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M221.88 560.41a30.8 30.8 0 015.27 2.62 9.17 9.17 0 013.86 3.89c.29.67.44 1.39.7 2.07 1.16 3 4.34 4.62 6.17 7.23a14.87 14.87 0 011.38 2.58 34 34 0 011.76 5.27c.43 1.75-1 3.35-1.28 5.13a29.59 29.59 0 000 5.24 62 62 0 01-.7 9.9c-.86 6.92-4.35 26.32-5.21 33.25-7.51-.17-27.33 0-34.47-2.29-2.39-.77 11-18.66 8.59-19.12a.86.86 0 01-.9-1c0-10.32 5.19-20 6.2-30.23.36-3.56 1.7-6.84 2.49-10.33.71-3.16.72-6.48 1.74-9.56a5.68 5.68 0 01.85-1.75 6.85 6.85 0 011.13-1.09c.82-.69 1.62-1.19 2.42-1.81z",
  fill: "#d7d9e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
  cx: "236.36",
  cy: "548.15",
  r: "11.39",
  fill: "#a1616a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M226.25 555.94a3.84 3.84 0 00-4.32.34 2.09 2.09 0 00-.78 2.29l-5.49 1.34a11.27 11.27 0 00-2.56.83 3.93 3.93 0 00-1.87 1.86c-.05.11-.1.23-.21.27s-.18 0-.27 0a4.91 4.91 0 00-2.86.13 15.21 15.21 0 00-7.26 5.37 2.67 2.67 0 00-.7 1.39c0 .67.37 1.42 0 2 1.18 5.17.5 10.4.46 15.71a6.85 6.85 0 01-1.12 2.77 9.92 9.92 0 00-1.18 3.07c-.41 2.84 1.67 5.59 1.29 8.44a13.84 13.84 0 01-1.22 3.42 7.82 7.82 0 00-.73 4.21c.1.64.33 1.26.45 1.9a11.87 11.87 0 01.11 2.6c0 1.61-.13 3.22-.23 4.83-.15 2.6-.49 5.45-2.38 7.25 5.49-.3 11.26-.69 15.88-3.68a8.4 8.4 0 001.76-1.44c1.53-1.71 1.9-4.13 2.2-6.4a26.78 26.78 0 00.3-7.68 8.4 8.4 0 01-.2-2.44c.2-1.48 1.37-2.61 2.45-3.65a15.57 15.57 0 003.09-3.78 6 6 0 00.52-4.73c-.27-.76-.74-1.43-1-2.21a1.89 1.89 0 01.63-2.14c3.59-2 4.39-7 4.35-11.14a31.61 31.61 0 00-.9-6.26l-.85-4a5.45 5.45 0 00.86-4.19 4.71 4.71 0 01-.26-1.27 3.46 3.46 0 01.58-1.54 12.44 12.44 0 001.46-3.47zM240.97 565.95a30.45 30.45 0 001 3.7c.21.45.5.85.74 1.28a8.27 8.27 0 01.68 5.35 29.29 29.29 0 01-1.62 5.23 7.18 7.18 0 00-.49 1.8 8.64 8.64 0 00.08 1.9 56.21 56.21 0 01.37 7.67 14.85 14.85 0 01-1.25 6.5 1.8 1.8 0 01-.91 1 2 2 0 01-.95 0l-3.08-.44a1.85 1.85 0 01-.74-.2 1.76 1.76 0 01-.65-1 16.71 16.71 0 01-.28-7c.81-7.07 2.44-14.07 2.41-21.18 0-2-.45-4.92.59-6.73.42-.75.29-.44 1-.27a8.63 8.63 0 011.11.29 3.36 3.36 0 011.99 2.1z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M235.23 580.31q.22 6.26.41 12.51l-11.69-.39a8 8 0 01.21-3.52c.44-2.75-.18-5.56 0-8.34.17-2.12.83-4.17 1-6.29.07-1.23 0-2.47 0-3.71a26.53 26.53 0 01.53-3.65 22 22 0 011.39-5c1.53.21 3.18.47 4.27 1.57a5.28 5.28 0 011.22 2.21c.76 2.44.43 5.13 1.28 7.52a22.24 22.24 0 011.38 7.09z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M233.76 636.57c-.08 2.5 1.38 4.75 2.64 6.91a56.81 56.81 0 014.69 10.25 9.25 9.25 0 001.17 2.6 25.22 25.22 0 001.84 1.89c1.56 1.71 2.07 4.11 2.34 6.41.18 1.52.28 3 .31 4.57.05 1.86 0 3.83.94 5.45-.92 0-1.26 1.26-1 2.15s.77 1.78.52 2.67c-1 .63-.66 2.12-.37 3.27a26.39 26.39 0 01.6 6.09q.22 12.35.14 24.7c-3.7 2.13-8 4.47-12.22 3.63a2.52 2.52 0 01-1.92-1.23 2.73 2.73 0 01-.13-1.24l.31-6.94a12.26 12.26 0 00-.45-5c-.45-1.17-1.27-2.35-.92-3.55.12-.41.37-.77.53-1.17.63-1.59-.29-3.32-.74-5a3.77 3.77 0 01-.18-1.14 6.18 6.18 0 01.25-1.35 19.15 19.15 0 00-.05-9.8 2.34 2.34 0 01-.11-1.25 3.18 3.18 0 00.19-.57 1.4 1.4 0 00-.3-.88 8.31 8.31 0 001.13-1.73 2.08 2.08 0 01-1.07-3.09 1.09 1.09 0 01-.92-1.7c.2-.22.48-.36.6-.63s-.14-.84-.43-1.16l-1.54-1.7c-1.15-1.29-1.75-3.06-2.95-4.3a35.68 35.68 0 01-4.4-5.94l-5.1-8-1.71 2.33a6.8 6.8 0 00-1.3 2.39 8.79 8.79 0 000 2.51c.3 4.91-1.75 9.7-1.8 14.61a9 9 0 01-.31 3.25 6 6 0 00-.38 1 4.64 4.64 0 00.08 1.48 6.8 6.8 0 01-1.72 5.43c-.88 1-2.1 1.75-2.38 3a5.13 5.13 0 01-.26 1.11c-.37.73-1.44 1.05-1.49 1.86 0 .46.32.92.16 1.35a1.22 1.22 0 01-.43.5l-2.71 2.23c-3 2.49-3.89 6.8-5.76 10.25a18.08 18.08 0 00-1.61 3.56c-.65 2.2-.59 4.76-2.15 6.44a5.21 5.21 0 00-1.11 1.29c-.41.89.05 1.91.21 2.88s-.3 2.28-1.28 2.2a6.82 6.82 0 01.8 3.54 18.33 18.33 0 01-11.83-1.92 4.41 4.41 0 01-2.44-2.56 1.09 1.09 0 010-.62 1.77 1.77 0 01.57-.68c2.51-2.2 2.56-6 3.33-9.23.68-2.86 2-5.51 3.08-8.26 2.24-5.92 3.14-12.67 7.52-17.23 1-1 2.12-2 2.41-3.33.16-.77 0-1.56.11-2.34a1.88 1.88 0 011.29-1.76 9.92 9.92 0 01-1.15-3.32 4.61 4.61 0 01-.16-1.52 7.73 7.73 0 01.42-1.62 14.31 14.31 0 00.23-8 12.62 12.62 0 01-.79-4.08c.06-.71.28-1.38.39-2.08a11.93 11.93 0 00-.22-3.67l-.74-4.58a22.26 22.26 0 01-.43-4.6c.15-3.72-2.27-18.61.59-21s10.93 7.66 14.61 7.06a16.58 16.58 0 014.92-.16 23.24 23.24 0 017.36 2.78l7.94 4.09a25.27 25.27 0 004.74 2.2z",
  fill: "#65617d"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M243.99 533.44a8.6 8.6 0 00-7.18-1.69 15.5 15.5 0 00-6.74 3.42 9.09 9.09 0 01-1.89 1.33c-1.13.51-2.5.49-3.44 1.29-1.24 1.07-1.08 3-.59 4.6s1.17 3.24.64 4.79a12.76 12.76 0 00-.54 1.41 4.16 4.16 0 00.67 2.6 18.74 18.74 0 001-2c.37-.65 1.13-1.22 1.83-1s.86 1 1 1.68.54 1.42 1.22 1.49a1.38 1.38 0 001.27-.87c.78-1.55-.13-3.56.63-5.12.44-.9 1.36-1.49 1.75-2.41.3-.72.23-1.54.46-2.29s1-1.45 1.73-1.12a2.65 2.65 0 01.65.56 3 3 0 003.67.25 5.76 5.76 0 011.34-1 1.86 1.86 0 011.9.54 3.72 3.72 0 01.89 1.86 4.58 4.58 0 001 2.61 3 3 0 001 .52 2.4 2.4 0 002.66-.33 2 2 0 00.17-2 15 15 0 00-1-1.8c-.75-1.37-.58-3.13-1.34-4.4a14.85 14.85 0 00-2.76-2.92z",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M245.57 567.94a1.71 1.71 0 01.12 1 1.61 1.61 0 01-.43.66 11.75 11.75 0 01-4.85 2.89 1.58 1.58 0 00-.68.35 1.32 1.32 0 000 1.53 3.79 3.79 0 01.68 1.47c.09 1-1 1.72-1.93 2.07a5.44 5.44 0 01-4.15.13 6.17 6.17 0 01-2.19-2.09c-4.11-5.58-6.61-12.21-10.75-17.77a4.39 4.39 0 01-.7-1.2 1.32 1.32 0 01.24-1.3c.44-.43 1.27-.43 1.5-1 .11-.28 0-.62.1-.91.19-.64 1-.76 1.53-1.19s.59-.89 1-1.09a1.61 1.61 0 011.41.26c2 1.13 3.27 3.06 4.61 4.86a69.6 69.6 0 006.79 7.76c-.28-.28.37-3.06.83-3.26.8-.37 2.22.87 2.8 1.32a12.18 12.18 0 014.07 5.51z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  opacity: ".1",
  d: "M258.205 656.217l-79.962 18.167-18.167-79.962 79.962-18.167z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  fill: "#ededf4",
  d: "M259.704 653.832l-79.962 18.167-18.167-79.962 79.962-18.167z"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M233.94 615.86a22.58 22.58 0 00-27-17c-.57.13-1.16.29-1.68.45l5.38 23.64 23.64-5.37c-.1-.55-.21-1.15-.34-1.72z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M231.65 621.73L208 627.1l-5.37-23.64a22.57 22.57 0 1029 18.27z",
  fill: "#4299e1"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M195.6 619.52a22.77 22.77 0 013.14 2.08 5.5 5.5 0 011.94 3.15 1.81 1.81 0 01-.1 1.08.88.88 0 01-.89.5 1.41 1.41 0 01-.56-.31c-.63-.48-1.29-.93-2-1.35-.25-.15-.56-.31-.81-.17a.78.78 0 00-.28.29 2.29 2.29 0 00-.43 1.18 2.51 2.51 0 001.19 1.83 5.23 5.23 0 011.63 1.54.78.78 0 01.11.59.85.85 0 01-.29.39 5.4 5.4 0 01-4.37 1.3c-1-.16-2-.63-3.06-.75a6.35 6.35 0 01-1.31-.17 2.56 2.56 0 01-1.44-1.36 6.75 6.75 0 01-.52-2 23.25 23.25 0 01-.06-7.85 1.08 1.08 0 01.18-.46.94.94 0 01.43-.23c1.17-.4 3-1.46 4.27-1.28a3.25 3.25 0 011.23.68c.33.23 1.93 1.01 2 1.32z",
  fill: "#a1616a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M195.76 618.37c-.24-1.15.54-4.24-1.76-3.91-.27-1.23 1.28-2.38.67-3.61-.2-.4-.64-.68-.79-1.11-.43-1.22 1.68-2.41 1-3.53-.25-.43-.81-.6-1-1-.5-1 1.33-1.95 1.12-3.08-.08-.37-.38-.68-.45-1.06a3.14 3.14 0 01.36-1.37c.35-1.18-.31-2.74.64-3.53-.7.23-1.18-.77-1-1.48s.62-1.41.46-2.12a3.17 3.17 0 01-.19-.78c0-.73 1.15-1 1.18-1.77a5.12 5.12 0 00-.15-.78 1.5 1.5 0 01.9-1.28 4.51 4.51 0 001.39-.88c.27-.32.56-.83 1-.69.15 0 .25.19.38.28.53.39 1.29 0 1.74-.49a7.4 7.4 0 001.58-5.45c-.08-1.95-.53-3.87-.54-5.81a13.64 13.64 0 01.12-1.81 8.66 8.66 0 00.41-1.86c-.16-1.1-2.23.15-3.05.45a13.12 13.12 0 00-2.34 1 25.4 25.4 0 00-2.24 1.66c-3.06 2.27-7.11 3.39-9.26 6.52-.71 1-1.22 2.29-2.3 2.93a14.78 14.78 0 00-1.48.77c-1.16.9-1 2.66-1.39 4.06a8.12 8.12 0 00-.35 1.16 4.45 4.45 0 00.11 1.36l.65 3.28a124 124 0 004 16.29 14 14 0 011.16 5.37c0 .49-.13 1-.14 1.48a8.35 8.35 0 00.21 1.73l.4 2.13a.65.65 0 00.22.46.7.7 0 00.6 0c2.87-.93 5.46-3.26 8.46-2.89",
  fill: "#3f3d56"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M248.47 597.35a.91.91 0 01.39.2 2.39 2.39 0 01.67 2.78.87.87 0 00-.1.31.76.76 0 00.19.44 1.6 1.6 0 01.17 1.79c-.16.22-.43.37-.52.64-.15.45.31.88.36 1.35.06.63-.59 1.09-1.18 1.31a1.54 1.54 0 01-1.42 0 1.16 1.16 0 01-.28-1.22 3.42 3.42 0 01.7-1.11 1.42 1.42 0 01-1.59-.93 2 2 0 01.39-1.88.73.73 0 00.23-.44c0-.22-.22-.37-.41-.49-.81-.53-1.75-2.09-.54-2.75a3.3 3.3 0 011.35-.25c.36 0 .4.23.69.31s.59-.11.9-.06z",
  fill: "#a1616a"
}), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M224.23 553.03a2.3 2.3 0 011.94.47 5.2 5.2 0 011.26 2.17 20.8 20.8 0 004.47 6.82M222.26 555.47a2.74 2.74 0 012.59.85 7.9 7.9 0 011.1 2.19 13.06 13.06 0 003.39 4.36",
  opacity: ".1"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroImage);

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map