/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/modules/loginPage.js":
/*!*****************************************!*\
  !*** ./src/assets/modules/loginPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
var Main = {
  $btnRegister: document.querySelector('#btnRegister'),
  $btnLogin: document.querySelector('#btnLogin'),
  URL_API: 'http://localhost:8080/api/client',
  init: function init() {
    this.cacheSelectors();
    this.bindEvents();
  },
  cacheSelectors: function cacheSelectors() {
    this.$btnRegister.onclick = this.Events.click_Register.bind(this);
    this.$btnLogin.onclick = this.Events.click_Login.bind(this);
  },
  bindEvents: function bindEvents() {},
  Events: {
    click_Register: function click_Register(e) {
      e.preventDefault();
      var objClient = {
        name: document.forms['formCadastro'].name.value,
        email: document.forms['formCadastro'].email.value,
        phone: document.forms['formCadastro'].phone.value,
        address: document.forms['formCadastro'].address.value
      };
      fetch(this.URL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objClient)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.message === 'success') {
          document.forms['formCadastro'].reset();
          alert('Sucesso');
          return;
        }

        alert('Deu erro ai irmão');
      })["catch"](function (e) {
        return console.log('error');
      });
    },
    click_Login: function click_Login(e) {
      e.preventDefault();
      var objLogin = {
        email: document.forms['formLogin'].email.value,
        _id: document.forms['formLogin']._id.value
      };
      fetch("".concat(this.URL_API, "Login"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objLogin)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.message === 'success') {
          console.log(data);
          return;
        }

        alert('Deu erro');
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes dropDown {\n  0% {\n    top: 125%;\n    opacity: 0;\n  }\n  100% {\n    top: 100%;\n    opacity: 1;\n  }\n}\nfooter.ftfooter {\n  text-align: center;\n  padding: 20px;\n  background-color: rgb(201, 201, 201);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  width: 800px;\n  margin: auto;\n}\n\n.none {\n  display: none;\n}\n\nheader.hrheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 75px;\n  padding: 0 65px;\n}\nheader.hrheader h1.title {\n  font-size: 2.5em;\n  font-weight: 900;\n}\nheader.hrheader h1.title a {\n  text-decoration: none;\n  color: black;\n}\nheader.hrheader nav.navbar ul.menu {\n  list-style: none;\n  display: flex;\n  align-items: center;\n}\nheader.hrheader nav.navbar ul.menu > li {\n  position: relative;\n  margin: 0 5px;\n}\nheader.hrheader nav.navbar ul.menu > li a {\n  display: block;\n  padding: 15px 25px;\n  text-decoration: none;\n  color: black;\n  font-size: 0.9em;\n  font-weight: bold;\n  transition: color 500ms ease;\n}\nheader.hrheader nav.navbar ul.menu > li a:hover {\n  color: grey;\n}\nheader.hrheader nav.navbar ul.menu > li ul.submenu {\n  background-color: white;\n  box-shadow: 0 0 5px grey;\n  list-style: none;\n  left: -1000000%;\n  position: absolute;\n  opacity: 0;\n  min-width: 100%;\n}\nheader.hrheader nav.navbar ul.menu > li:hover ul.submenu {\n  left: 0;\n  opacity: 1;\n  animation: dropDown 250ms ease 0ms 1 normal forwards;\n}\nheader.hrheader nav.navbar ul.menu > li:first-child a {\n  background-color: black;\n  color: white;\n  border-radius: 25px;\n}\nheader.hrheader nav.navbar ul.menu > li:nth-child(2) > a:hover {\n  color: black;\n}\nheader.hrheader nav.navbar ul.menu > li:last-child {\n  margin: 0 0 0 5px;\n}\nheader.hrheader nav.navbar ul.menu > li:last-child a {\n  padding: 0;\n  position: relative;\n}\nheader.hrheader nav.navbar ul.menu > li:last-child a img {\n  width: 25px;\n}\nheader.hrheader nav.navbar ul.menu > li:last-child a span {\n  position: absolute;\n  background-color: black;\n  color: white;\n  height: 20px;\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  right: -35%;\n  top: -25%;\n}\n\nmain.mnmainContent {\n  width: 1250px;\n  margin: auto;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\nmain.mnmainContent div.container {\n  text-align: center;\n}\nmain.mnmainContent div.container h2.title {\n  font-size: 3em;\n  font-weight: 100;\n  padding-bottom: 25px;\n  color: red;\n}\nmain.mnmainContent div.container p.text {\n  text-align: left;\n  font-size: 1.6em;\n}\nmain.mnmainContent div.img {\n  padding: 75px 0;\n}\nmain.mnmainContent div.img img {\n  width: 100%;\n}\n\nmain.lgmainContent {\n  padding: 100px 0;\n}\nmain.lgmainContent div.divLogin {\n  display: flex;\n  justify-content: space-between;\n}\nmain.lgmainContent div.divLogin div.divCadastro h2.title, main.lgmainContent div.divLogin div.subDivLogin h2.title {\n  text-align: center;\n  padding-bottom: 15px;\n}\nmain.lgmainContent div.divLogin div.divCadastro form.formCadastro label, main.lgmainContent div.divLogin div.divCadastro form.formLogin label, main.lgmainContent div.divLogin div.subDivLogin form.formCadastro label, main.lgmainContent div.divLogin div.subDivLogin form.formLogin label {\n  display: block;\n  padding-top: 15px;\n}\nmain.lgmainContent div.divLogin div.divCadastro form.formCadastro input, main.lgmainContent div.divLogin div.divCadastro form.formLogin input, main.lgmainContent div.divLogin div.subDivLogin form.formCadastro input, main.lgmainContent div.divLogin div.subDivLogin form.formLogin input {\n  padding: 5px 10px;\n  font-size: 1em;\n  width: 100%;\n  margin-top: 5px;\n}\nmain.lgmainContent div.divLogin div.divCadastro form.formCadastro button, main.lgmainContent div.divLogin div.divCadastro form.formLogin button, main.lgmainContent div.divLogin div.subDivLogin form.formCadastro button, main.lgmainContent div.divLogin div.subDivLogin form.formLogin button {\n  margin-top: 25px;\n  width: 100%;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 25px;\n  padding: 10px 0;\n  font-size: 1em;\n  cursor: pointer;\n  transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease;\n}\nmain.lgmainContent div.divLogin div.divCadastro form.formCadastro button:hover, main.lgmainContent div.divLogin div.divCadastro form.formLogin button:hover, main.lgmainContent div.divLogin div.subDivLogin form.formCadastro button:hover, main.lgmainContent div.divLogin div.subDivLogin form.formLogin button:hover {\n  background-color: black;\n  color: white;\n  border-color: blue;\n}\nmain.lgmainContent div.divLogin div.divCadastro form.formCadastro button:active, main.lgmainContent div.divLogin div.divCadastro form.formLogin button:active, main.lgmainContent div.divLogin div.subDivLogin form.formCadastro button:active, main.lgmainContent div.divLogin div.subDivLogin form.formLogin button:active {\n  background-color: blue;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/assets/css/partials/common/_animation.scss","webpack://./src/assets/css/style.css","webpack://./src/assets/css/partials/common/_footer.scss","webpack://./src/assets/css/partials/common/_commons.scss","webpack://./src/assets/css/partials/common/_header.scss","webpack://./src/assets/css/partials/pages/_indexMain.scss","webpack://./src/assets/css/partials/pages/_loginMain.scss"],"names":[],"mappings":"AAAA;EACI;IACI,SAAA;IACA,UAAA;ECCN;EDCE;IACI,SAAA;IACA,UAAA;ECCN;AACF;ACTA;EACI,kBAAA;EACA,aAAA;EACA,oCAAA;ADWJ;;AEdA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AFiBJ;;AEdA;EACI,yCAAA;AFiBJ;;AEbA;EACI,YAAA;EACA,YAAA;AFgBJ;;AEZA;EACI,aAAA;AFeJ;;AGjCA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;AHoCJ;AGlCI;EACI,gBAAA;EACA,gBAAA;AHoCR;AGnCQ;EACI,qBAAA;EACA,YAAA;AHqCZ;AGhCQ;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;AHkCZ;AGjCY;EACI,kBAAA;EACA,aAAA;AHmChB;AGlCgB;EACI,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,4BAAA;AHoCpB;AGlCoB;EACI,WAAA;AHoCxB;AGhCgB;EACI,uBAAA;EACA,wBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;AHkCpB;AG/BgB;EACI,OAAA;EACA,UAAA;EACA,oDAAA;AHiCpB;AG7BoB;EACI,uBAAA;EACA,YAAA;EACA,mBAAA;AH+BxB;AG1BoB;EACI,YAAA;AH4BxB;AGxBgB;EACI,iBAAA;AH0BpB;AGzBoB;EACI,UAAA;EACA,kBAAA;AH2BxB;AG1BwB;EACI,WAAA;AH4B5B;AG1BwB;EACI,kBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AH4B5B;;AInHA;EACI,aAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;AJsHJ;AIrHI;EACI,kBAAA;AJuHR;AItHQ;EACI,cAAA;EACA,gBAAA;EACA,oBAAA;EACA,UAAA;AJwHZ;AItHQ;EACI,gBAAA;EACA,gBAAA;AJwHZ;AIrHI;EACI,eAAA;AJuHR;AItHQ;EACI,WAAA;AJwHZ;;AK7IA;EACI,gBAAA;ALgJJ;AK/II;EACI,aAAA;EACA,8BAAA;ALiJR;AK/IY;EACI,kBAAA;EACA,oBAAA;ALiJhB;AK9IgB;EACI,cAAA;EACA,iBAAA;ALgJpB;AK9IgB;EACI,iBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;ALgJpB;AK9IgB;EACI,gBAAA;EACA,WAAA;EACA,uBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,kFAAA;ALgJpB;AK9IoB;EACI,uBAAA;EACA,YAAA;EACA,kBAAA;ALgJxB;AK7IoB;EACI,sBAAA;AL+IxB,CAAC,oCAAoC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_modules_loginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/loginPage */ "./src/assets/modules/loginPage.js");



try {
  _assets_modules_loginPage__WEBPACK_IMPORTED_MODULE_1__.Main.init();
} catch (e) {}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map