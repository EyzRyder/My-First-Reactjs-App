"use strict";
exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Contador() {
    const { 0: contador , 1: setContador  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    function adicionarContador() {
        setContador(contador + 1);
        if (contador === 10) {
            alert("Gostou?");
        }
        if (contador === 50) {
            alert("Ta aqui ainda?");
        }
        if (contador === 100) {
            alert("Tem nada melhor pra fazer?");
        }
        if (contador === 500) {
            alert("Man, ta bem?");
        }
        if (contador === 1000) {
            alert("Pro seu bem, sai mano");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "number",
                children: contador
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn",
                onClick: adicionarContador,
                children: "Adicionar"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contador);


/***/ })

};
;