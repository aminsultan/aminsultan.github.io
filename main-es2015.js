(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






const routes = [{
        path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    { path: "form", component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_ul_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const x_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r33);
} }
function AppComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const x_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("first name is : ", x_r34.fname, " last name is : ", x_r34.lname, " & age is : ", x_r34.age, " ");
} }
function AppComponent_tr_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const x_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r35.fname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r35.lname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](x_r35.age);
} }
function AppComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " red div tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " blue div tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " green div tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Default div tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is sunday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is monday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is tuesday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is wednesday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is thursday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is friday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is saturday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " wrong input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is addition and your result is [num1.value + num2.value] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is subtraction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is multiplication ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " this is division ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " wrong input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
// this is the combination of 4 files i.e. 
//app.component.css, app.component.html, app.component.spec.ts and
//app.component.ts. and this app-root is present in index.html..
class AppComponent {
    constructor() {
        this.title = 'myfirstproject';
        this.firstvariable = "this is the form";
        this.myclassarray = {
            "btn": true,
            "btn-danger": true
        };
        this.firstname = "";
        this.lastname = "";
        this.gender = "";
        this.institute = "";
        this.contact = "";
        this.email = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.inputnum = "";
        this.myvar = "";
        this.myobj = {
            "fname": "",
            "lname": "",
            "gender": "",
            "institute": "",
            "contact": "",
            "email": "",
            "city": "",
            "state": "",
            "country": ""
        };
        this.mystyle = {
            'color': 'red',
            'background-color': 'blue',
            'padding': '4px',
            'font-size': '20px'
        };
        this.isHidden = false;
        this.mycolor = "blue";
        this.x = 10;
        this.y = 20;
        this.z = 15;
        this.lnumber = "";
        this.mnumber = "";
        this.nnumber = "";
        this.myarray = ["mohammad", "amin", "sultan"];
        this.myobjectarray = [
            { "fname": "mohammad",
                "lname": "amin",
                "age": "33"
            },
            { "fname": "tarique",
                "lname": "zaman",
                "age": "35"
            },
            { "fname": "sayyed",
                "lname": "rizwan",
                "age": "35"
            }
        ];
        this.myfavcolor = "red";
        this.day = "";
        this.number1 = "";
        this.number2 = "";
        this.operate = "";
        this.addition = "";
        this.result1 = "";
    }
    getval(r) {
        this.inputnum = r;
    }
    get1value(a) {
        // alert(x);
        this.firstname = a;
    }
    get2value(b) {
        this.lastname = b;
    }
    get3value(c) {
        this.gender = c;
    }
    get4value(d) {
        this.institute = d;
    }
    get5value(e) {
        this.contact = e;
    }
    get6value(f) {
        this.email = f;
    }
    get7value(g) {
        this.city = g;
    }
    get8value(h) {
        this.state = h;
    }
    get9value(i) {
        this.country = i;
    }
    getdata() {
        console.log(this.myobj);
    }
    changecolor() {
        this.myclassarray["btn-danger"] = false;
    }
    get1number(l) {
        this.lnumber = l;
    }
    get2number(m) {
        this.mnumber = m;
    }
    get3number(n) {
        this.nnumber = n;
    }
    show() {
        console.log("this is the function");
        alert("this is try and error basis alert! thank you");
    }
    days(s) {
        this.day = s;
    }
    number_1(t) {
        this.number1 = t;
    }
    number_2(u) {
        this.number2 = u;
    }
    operation(v) {
        this.operate = v;
    }
    result(w) {
        this.result1 = w;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 159, vars: 35, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "form", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], ["type", "text", "value", "FIRST NAME"], ["fname", ""], [3, "click"], ["type", "text", "value", "LAST NAME"], ["lname", ""], ["type", "text", "value", "GENDER"], ["gndr", ""], ["type", "text", "value", "INSTITUTE NAME"], ["insti", ""], ["type", "number", "value", "10 DIGITS ONLY"], ["contnumber", ""], ["type", "email", "value", "ABC@XYZMAIL.COM"], ["Email", ""], ["type", "text", "value", "CITY NAME"], ["cty", ""], ["type", "text", "value", "STATE NAME"], ["stte", ""], ["type", "text", "value", "COUNTRY NAME"], ["cntry", ""], [4, "ngFor", "ngForOf"], [2, "border", "1px solid black"], ["style", "border: 1px solid black", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["style", "color:red ; font-size: 20px;", 4, "ngSwitchCase"], ["style", "color:blue ; font-size: 20px;", 4, "ngSwitchCase"], ["style", "color:green ; font-size: 20px;", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "text"], ["num", ""], ["style", "color:violet ; font-size: 20px;background-color: black;", 4, "ngSwitchCase"], ["style", "color:brown ; font-size: 20px;", 4, "ngSwitchCase"], ["style", "color:yellow ; font-size: 20px;background-color: black;", 4, "ngSwitchCase"], ["style", "color:orchid ; font-size: 20px;background-color: black;", 4, "ngSwitchCase"], ["style", "color:orange ; font-size: 20px; background-color: black;", 4, "ngSwitchCase"], ["type", "number"], ["num1", ""], ["num2", ""], ["operator", ""], [2, "color", "red", "font-size", "20px"], [2, "color", "blue", "font-size", "20px"], [2, "color", "green", "font-size", "20px"], [2, "color", "violet", "font-size", "20px", "background-color", "black"], [2, "color", "brown", "font-size", "20px"], [2, "color", "yellow", "font-size", "20px", "background-color", "black"], [2, "color", "orchid", "font-size", "20px", "background-color", "black"], [2, "color", "orange", "font-size", "20px", "background-color", "black"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "hello all ! we are learning angular 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "your form is here kindly fill it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](42); return ctx.get1value(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](47); return ctx.get2value(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](52); return ctx.get3value(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](57); return ctx.get4value(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](62); return ctx.get5value(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](67); return ctx.get6value(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](72); return ctx.get7value(_r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](77); return ctx.get8value(_r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](82); return ctx.get9value(_r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](104, AppComponent_ul_104_Template, 3, 1, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](105, AppComponent_div_105_Template, 3, 3, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "first name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](114, AppComponent_tr_114_Template, 7, 3, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](116, AppComponent_div_116_Template, 2, 0, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](117, AppComponent_div_117_Template, 2, 0, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](118, AppComponent_div_118_Template, 2, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](119, AppComponent_div_119_Template, 2, 0, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "input", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](121); return ctx.days(_r16.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](127, AppComponent_div_127_Template, 2, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](128, AppComponent_div_128_Template, 2, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](129, AppComponent_div_129_Template, 2, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](130, AppComponent_div_130_Template, 2, 0, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](131, AppComponent_div_131_Template, 2, 0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](132, AppComponent_div_132_Template, 2, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](133, AppComponent_div_133_Template, 2, 0, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](134, AppComponent_div_134_Template, 2, 0, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_137_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](136); return ctx.number_1(_r25.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "input", 54, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_143_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](142); return ctx.number_2(_r26.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "click to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "input", 54, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_149_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](148); return ctx.operation(_r27.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "enter the number 1 to 4 and click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](154, AppComponent_div_154_Template, 2, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](155, AppComponent_div_155_Template, 2, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](156, AppComponent_div_156_Template, 2, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](157, AppComponent_div_157_Template, 2, 0, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](158, AppComponent_div_158_Template, 2, 0, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](121);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](136);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](142);
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.firstvariable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your first name is ", ctx.firstname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your last name is ", ctx.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your gender is ", ctx.gender, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your institute name is ", ctx.institute, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your contact number is ", ctx.contact, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your email address is ", ctx.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your city name is ", ctx.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your state name is ", ctx.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your country name is ", ctx.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.myarray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.myobjectarray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.myobjectarray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.myfavcolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your number is ", _r16.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", _r16.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your number is ", _r25.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your number is ", _r26.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("your number is ", _r27.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", _r27.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 4);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"]], styles: [".myclass[_ngcontent-%COMP%]{\r\n    border:2px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNsYXNze1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








//it is importing AppComponent 
//from app.component.ts which is present in app folder
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormComponent.??fac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 2, vars: 0, template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "form works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

//AppModule class is 
//present in app.module.ts file which is present in app folder and exporting it. 



if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\full stack development\angular\myfirstapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map