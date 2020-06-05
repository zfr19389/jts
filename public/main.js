(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/']);
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
            });
        })
            .catch(function (error) {
            alert(error.message);
        });
    };
    AuthService.prototype.logout = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
        this.token = null;
        this.router.navigate(['/']);
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Core/auth/authGaurd.service.ts":
/*!************************************************!*\
  !*** ./src/app/Core/auth/authGaurd.service.ts ***!
  \************************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/Core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated())
            return true;
        else {
            this.router.navigate(['home']);
            return false;
        }
    };
    AuthGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/app/Core/auth/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Core/auth/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Core/auth/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/Core/auth/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row px-5\">\n  <div class=\"col-md-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-1\">\n    <form (ngSubmit)=\"onSignIn(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Mail</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          ngModel\n          class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Core/auth/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Core/auth/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/Core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSignIn = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Core/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Core/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/Core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/Core/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/authGaurd.service */ "./src/app/Core/auth/authGaurd.service.ts");
/* harmony import */ var _Utils_sharedData_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils/sharedData.service */ "./src/app/Utils/sharedData.service.ts");
/* harmony import */ var _Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Utils/bill-storage.service */ "./src/app/Utils/bill-storage.service.ts");
/* harmony import */ var _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Utils/payment-storage.service */ "./src/app/Utils/payment-storage.service.ts");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ "./src/app/Core/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/Core/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/sidebar.directive */ "./src/app/Core/shared/sidebar.directive.ts");
/* harmony import */ var _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Utils/expense-storage.service */ "./src/app/Utils/expense-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_TOGGLE_DIRECTIVES"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_1__["AppRouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            exports: [
                _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_1__["AppRouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_TOGGLE_DIRECTIVES"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"],
                _Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_9__["BillStorageService"],
                _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_10__["PaymentStorageService"],
                _auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"],
                _Utils_sharedData_service__WEBPACK_IMPORTED_MODULE_8__["SharedDataService"],
                _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_14__["ExpenseStorageService"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/Core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/Core/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-heading {\r\n  position: relative;\r\n  margin-bottom: 30px;\r\n  padding: 30px 15px;\r\n  text-align: center;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  font-size: 1.25rem;\r\n  background: #b84d45 url('bg.png');\r\n}\r\n\r\nagm-map {\r\n  height: 300px;\r\n}\r\n\r\nh2, h3, h4 {\r\n  margin-top: 10px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .home__page h1 { font-size: 50px;}\r\n  .home__page p { font-size: 20px;}\r\n\r\n  .about--text {\r\n    line-height: 2em;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .servicesTab li {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .contactTab span {\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .contactTab p {\r\n    font-size: 18px;\r\n    line-height: 1.5em;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n  .home__page h1 { font-size: 23px;}\r\n\r\n  .servicesTab li {\r\n    font-size: 13px;\r\n  }\r\n\r\n  .nav-tabs>li>a {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .contactTab span {\r\n    font-size: 23px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .contactTab p {\r\n    font-size: 14px;\r\n    line-height: 1.5em;\r\n  }\r\n}\r\n\r\n.imageHeader {\r\n  width: 100%;\r\n  margin-top: -30px;\r\n}\r\n\r\n.imageHeader img {\r\n  width: 100%;\r\n}\r\n\r\n.brandName {\r\n  color: white;\r\n  font-size: 100px;\r\n  text-align: center;\r\n  margin-top: -5.5%;\r\n  margin-bottom: 25px;\r\n  line-height: 0.5;\r\n}\r\n\r\n.brandTag {\r\n  color: white;\r\n  font-size: 25px;\r\n  padding-right: 12%;\r\n  text-align: right;\r\n}\r\n\r\n@media (max-width: 560px) {\r\n  .imageHeader img {\r\n    height: 150px;\r\n  }\r\n\r\n  .brandName {\r\n    font-size: 30px;\r\n    margin-top: -20%;\r\n  }\r\n\r\n  .brandTag {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGtDQUFrRDtDQUNuRDs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQixnQkFBZ0IsQ0FBQztFQUNsQyxnQkFBZ0IsZ0JBQWdCLENBQUM7O0VBRWpDO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCO0NBQ0Y7O0FBRUQ7O0VBRUUsaUJBQWlCLGdCQUFnQixDQUFDOztFQUVsQztJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7R0FDakI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0dBQ25COztFQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtHQUNwQjtDQUNGOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0U7SUFDRSxjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db3JlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGluZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjYjg0ZDQ1IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZy5wbmdcIik7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbmgyLCBoMywgaDQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5ob21lX19wYWdlIGgxIHsgZm9udC1zaXplOiA1MHB4O31cclxuICAuaG9tZV9fcGFnZSBwIHsgZm9udC1zaXplOiAyMHB4O31cclxuXHJcbiAgLmFib3V0LS10ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZXNUYWIgbGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RUYWIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0VGFiIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblxyXG4gIC5ob21lX19wYWdlIGgxIHsgZm9udC1zaXplOiAyM3B4O31cclxuXHJcbiAgLnNlcnZpY2VzVGFiIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIC5uYXYtdGFicz5saT5hIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3RUYWIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0VGFiIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlSGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxufVxyXG5cclxuLmltYWdlSGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5icmFuZE5hbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNS41JTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbn1cclxuXHJcbi5icmFuZFRhZyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMiU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xyXG4gIC5pbWFnZUhlYWRlciBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5icmFuZE5hbWUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwJTtcclxuICB9XHJcblxyXG4gIC5icmFuZFRhZyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/Core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imageHeader\">\n  <div>\n    <img src=\"../assets/image.jpg\" alt=\"\">\n    <p class=\"brandName\"> Janata Transport Services </p>\n  </div>\n\n</div>\n\n<header class=\"page-heading\">\n  <div class=\"home__page\">\n    <p>We intend to simplify the movement of goods by providing numerous options and creating a transparent,\n      reliable & time saving approach for transactions between consignors and transporters..</p>\n  </div>\n</header>\n<div class=\"row\" style=\"margin-left: 0px; padding: 0 20px;\">\n  <tabset>\n    <tab heading=\"About Us\" id=\"tab1\">\n      <div class=\"row col-lg-12 col-xs-12\">\n        <h3>About Us</h3>\n        <p class=\"text-justify about--text\">\n          Janata Transport has been in the business of transportation and logistics for more than 40 years. We have the\n          first hand experience and knowledge of booking trucks and using truck logistic services for sending\n          different sized loads across Mumbai. We know how tedious and time consuming it can be to find best\n          transporters to send truck loads and make sure that the material reaches the destination on time properly.\n          Similarly for the transporters, truck booking agents and brokers, the task of getting truck loads\n          from reliable customers and the assurance of payment is difficult.\n          <br>Currently we operate from Darukhana (Reay Road) and Kalamboli.</p>\n        <h3>Mission Statement</h3>\n        <p class=\"text-justify about--text\">\n          Introduce the trucking industry to the benefits of technology and how it can help them in achieving targets\n          that were unreachable before. Help the business owners to access Mumbai transporters for their loads.\n        </p>\n        <h3>Our Vision</h3>\n        <p class=\"text-justify about--text\">\n          We intend to simplify the movement of goods by providing numerous options and creating a transparent,\n          reliable & time saving approach for transactions between consignors and transporters.\n        </p>\n      </div>\n    </tab>\n    <tab heading=\"Services\">\n      <div class=\"row col-lg-12 col-xs-12\">\n        <br>\n        <p class=\"text-justify about--text \">We provides transporters, trucks and transportation services from all over Mumbai. Major locations where\n          Janata Transport provide services includes: </p>\n        <div class=\"servicesTab container row\">\n          <div class=\"servicesTab row col-lg-12 col-xs-12\">\n            <div class=\"row col-lg-6 col-xs-12\">\n              <h4>Central Mumbai</h4>\n              <ul class=\"col-xs-6\">\n                <li>Chembur</li>\n                <li>Govandi</li>\n                <li>Ghatkopar</li>\n                <li>Vikhroli</li>\n                <li>Kanjurmarg</li>\n                <li>Bhandup</li>\n                <li>Mulund</li>\n                <li>Thane</li>\n                <li>Bhiwandi</li>\n                <li>Airoli</li>\n                <li>Murbad</li>\n                <li>Digha</li>\n              </ul>\n              <ul class=\"col-xs-6\">\n                <li>Kalwa</li>\n                <li>Rabale</li>\n                <li>Mahape</li>\n                <li>Khairne</li>\n                <li>Pawane</li>\n                <li>Turbhe</li>\n                <li>Nerul</li>\n                <li>Taloja</li>\n                <li>Ambarnath</li>\n                <li>Dombivali</li>\n                <li>Badlapur</li>\n              </ul>\n            </div>\n            <div class=\"row col-lg-6 col-xs-12\">\n              <h4>West Mumbai</h4>\n              <ul class=\"col-xs-6\">\n                <li>Santacruz</li>\n                <li>Kurla</li>\n                <li>Narayan Nagar</li>\n                <li>Jarimari</li>\n                <li>Andheri</li>\n                <li>Khairani Road</li>\n                <li>Goregaon</li>\n                <li>Jogeshwari</li>\n                <li>Malad</li>\n                <li>Nalasopara</li>\n                <li>Virar</li>\n              </ul>\n              <ul class=\"col-xs-6\">\n                <li>Kandivali</li>\n                <li>Dahisar</li>\n                <li>Kashi Mira</li>\n                <li>Ghodbandar</li>\n                <li>Naya Gaon</li>\n                <li>Vasai</li>\n                <li>Kaman</li>\n                <li>Palghar</li>\n                <li>Bhayander</li>\n                <li>Naigaon</li>\n              </ul>\n            </div>\n            </div>\n\n          </div>\n      </div>\n    </tab>\n    <tab heading=\"Contact Us\">\n      <br>\n      <div class=\"row col-lg-12\">\n        <div class=\"col-lg-12 col-xs-12 contactTab\">\n          <span>Janata Transport Services</span>\n          <p>BEHIND SANGAM HOTEL, 4th LANE OZA MARKET, MAGAZINE STREET</p>\n          <p>DARUKHANA, MUMBAI, MAHARASHTRA 400010</p>\n          <p>India</p>\n          <p class=\"fa fa-phone\"> +91-9867290909 / 022-23767218</p>\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n          <!--<agm-map #map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n              <agm-info-window>\n                <strong>Janata Transport Services</strong>\n              </agm-info-window>\n            </agm-marker>\n          </agm-map>-->\n          <div #gmap style=\"width:100%;height:400px\"></div>\n        </div>\n      </div>\n    </tab>\n  </tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/Core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/Core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    /*lat: number = 18.974224;
    lng: number =  72.846074;
    zoom: number = 17;
  
    @ViewChild('map') map: AgmMap;*/
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Core/shared/header-navigation/navigation.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Core/shared/header-navigation/navigation.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\r\n  <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n    <!-- ============================================================== -->\r\n    <!-- Logo -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <!-- Logo icon -->\r\n        <b>\r\n          <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n          <!-- Dark Logo icon -->\r\n          <img src=\"assets/logoJTS.JPG\" alt=\"homepage\" class=\"dark-logo jtsLogo\"/>\r\n          <!-- Light Logo icon -->\r\n          <!--<img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" />-->\r\n        </b>\r\n        <!--End Logo icon -->\r\n        <!-- Logo text -->\r\n\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-collapse\">\r\n      <ul class=\"navbar-nav mr-auto mt-md-0 \">\r\n        <li class=\"nav-item\"><a class=\"nav-link nav-toggler hidden-lg-up text-muted waves-effect waves-dark\"\r\n                                href=\"javascript:void(0)\"><i class=\"ti-close ti-menu\"></i></a></li>\r\n      </ul>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Logo -->\r\n    <!-- ============================================================== -->\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/Core/shared/header-navigation/navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Core/shared/header-navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        // This is for Notifications
        this.notifications = [{
                round: 'round-danger',
                icon: 'ti-link',
                title: 'Luanch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            }, {
                round: 'round-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            }, {
                round: 'round-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            }, {
                round: 'round-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }];
        // This is for Mymessages
        this.mymessages = [{
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            }, {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            }, {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            }, {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }];
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $(".preloader").fadeOut();
        });
        var set = function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 70;
            if (width < 1170) {
                $("body").addClass("mini-sidebar");
                $('.navbar-brand span').hide();
                $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
            }
            else {
                $("body").removeClass("mini-sidebar");
                $('.navbar-brand span').show();
            }
            var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1)
                height = 1;
            if (height > topOffset) {
                $(".page-wrapper").css("min-height", (height) + "px");
            }
        };
        $(window).ready(set);
        $(window).on("resize", set);
        $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            $(".app-search").toggle(200);
        });
        $('[data-toggle="tooltip"]').tooltip();
        $('.scroll-sidebar').slimScroll({
            position: 'left',
            size: "5px",
            height: '100%',
            color: '#dcdcdc'
        });
        $("body").trigger("resize");
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/Core/shared/header-navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/Core/shared/sidebar.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/Core/shared/sidebar.directive.ts ***!
  \**************************************************/
/*! exports provided: MobileSidebarToggleDirective, RightSidebarToggleDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarToggleDirective", function() { return RightSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
/*@Directive({
  selector: '.sidebartoggler',
})
export class SidebarToggleDirective {
  constructor() { }

@HostListener('click', ['$event'])
    toggleOpen($event:any) {
        $event.preventDefault();
        if(document.querySelector('body').classList.contains('mini-sidebar')) {
            document.querySelector('body').classList.remove('mini-sidebar');
        } else {
            document.querySelector('body').classList.add('mini-sidebar');
        }
    }
}*/
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('show-sidebar');
        document.querySelector('.nav-toggler i').classList.toggle('ti-menu');
        document.querySelector('.nav-toggler i').classList.add('ti-close');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.nav-toggler',
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

var RightSidebarToggleDirective = /** @class */ (function () {
    function RightSidebarToggleDirective() {
    }
    RightSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('.right-sidebar').classList.toggle('shw-rside');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RightSidebarToggleDirective.prototype, "toggleOpen", null);
    RightSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.right-side-toggle',
        }),
        __metadata("design:paramtypes", [])
    ], RightSidebarToggleDirective);
    return RightSidebarToggleDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [MobileSidebarToggleDirective, RightSidebarToggleDirective];


/***/ }),

/***/ "./src/app/Core/shared/sidebar/sidebar.component.html":
/*!************************************************************!*\
  !*** ./src/app/Core/shared/sidebar/sidebar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"left-sidebar\">\r\n  <!-- Sidebar scroll-->\r\n  <div class=\"scroll-sidebar\">\r\n    <!-- User profile -->\r\n    <div class=\"user-profile\">\r\n      <!-- User profile image -->\r\n      <div class=\"profile-img\"><img src=\"assets/1.jpg\" alt=\"user\"/></div>\r\n      <!-- User profile text-->\r\n      <div class=\"profile-text\"><a href=\"#\" class=\"dropdown-toggle link u-dropdown\" data-toggle=\"dropdown\" role=\"button\"\r\n                                   aria-haspopup=\"true\" aria-expanded=\"true\">Naseem Ahmed&nbsp;&nbsp;<span\r\n        class=\"caret\"></span></a>\r\n        <div class=\"dropdown-menu animated flipInY\">\r\n          <a class=\"dropdown-item\"><i class=\"ti-mobile\"></i> +91-9867290909</a>\r\n          <a class=\"dropdown-item\"><i class=\"ti-email\"></i> nkjts1974@gmail.com</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a *ngIf=\"!isAuthenticated()\" class=\"dropdown-item\" routerLink=\"/signIn\"><i class=\"fa fa-power-off\"></i>  Login</a>\r\n          <a *ngIf=\"isAuthenticated()\" class=\"dropdown-item\" style=\"cursor: pointer\" (click)=\"onLogout()\"><i class=\"fa fa-power-off\"></i>  Logout</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End User profile text-->\r\n    <!-- Sidebar navigation-->\r\n    <nav class=\"sidebar-nav\">\r\n      <ul id=\"sidebarnav\">\r\n        <li class=\"nav-devider\"></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated()\"><a routerLink=\"/add\">Add Data</a></li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated()\"><a routerLink=\"/view\">View Data</a></li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated()\"><a routerLink=\"/generate\">Generate Bill</a></li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated()\"><a routerLink=\"/dailyreport\">Daily Report</a></li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated()\"><a routerLink=\"/dailycashreport\">Daily Cash Report</a></li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated()\"><a routerLink=\"/balance\">View Balance</a></li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated()\"><a routerLink=\"/bills\">View Bill Details</a></li>\r\n      </ul>\r\n    </nav>\r\n    <!-- End Sidebar navigation -->\r\n  </div>\r\n  <!-- End Sidebar scroll-->\r\n  <!-- Bottom points-->\r\n  <!-- End Bottom points-->\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/Core/shared/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Core/shared/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
        // this is for the open close
        this.isActive = true;
        this.showMenu = '';
        this.showSubMenu = '';
        this.isIn = false; // store state
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false;
    };
    SidebarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    SidebarComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    // End open close
    SidebarComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $('.sidebartoggler').on('click', function () {
                if ($('body').hasClass('mini-sidebar')) {
                    $('body').trigger('resize');
                    $('.scroll-sidebar, .slimScrollDiv')
                        .css('overflow', 'hidden')
                        .parent()
                        .css('overflow', 'visible');
                    $('body').removeClass('mini-sidebar');
                    $('.navbar-brand span').show();
                    // $(".sidebartoggler i").addClass("ti-menu");
                }
                else {
                    $('body').trigger('resize');
                    $('.scroll-sidebar, .slimScrollDiv')
                        .css('overflow-x', 'visible')
                        .parent()
                        .css('overflow', 'visible');
                    $('body').addClass('mini-sidebar');
                    $('.navbar-brand span').hide();
                    // $(".sidebartoggler i").removeClass("ti-menu");
                }
            });
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ap-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/Core/shared/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/Utils/bill-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Utils/bill-storage.service.ts ***!
  \***********************************************/
/*! exports provided: BillStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillStorageService", function() { return BillStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillStorageService = /** @class */ (function () {
    function BillStorageService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    BillStorageService.prototype.getTotalBill = function (date) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('date', date);
            return this.http.get(this.apiUrl + 'bills/totalBills', { params: params });
        }
    };
    BillStorageService.prototype.storeBill = function (bill) {
        if (this.authService.isAuthenticated()) {
            return this.http.post(this.apiUrl + 'bills/bills', bill);
        }
    };
    BillStorageService.prototype.getBill = function (billNo, LRNo) {
        if (true) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('billNo', billNo);
            params = params.append('LRNo', LRNo.toString());
            return this.http.get(this.apiUrl + 'bills/bill', { params: params });
        }
    };
    BillStorageService.prototype.deleteBill = function (billNo) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('billNo', billNo.toString());
            return this.http.delete(this.apiUrl + 'bills/entry', { params: params });
        }
    };
    BillStorageService.prototype.getUnPaidBills = function (name) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('name', name);
            return this.http.get(this.apiUrl + 'bills/unpaidBill', { params: params });
        }
    };
    BillStorageService.prototype.getUnpaidBillFullDetails = function () {
        if (this.authService.isAuthenticated()) {
            return this.http.get(this.apiUrl + 'bills/unpaidBillFullDetails');
        }
    };
    BillStorageService.prototype.updateBalance = function (billNos, billDetails) {
        if (this.authService.isAuthenticated()) {
            return this.http.put(this.apiUrl + 'bills/update', { billNos: billNos, billDetails: billDetails });
        }
    };
    BillStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BillStorageService);
    return BillStorageService;
}());



/***/ }),

/***/ "./src/app/Utils/data-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Utils/data-storage.service.ts ***!
  \***********************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DataStorageService.prototype.storeEntry = function (entry) {
        if (this.authService.isAuthenticated()) {
            return this.http.post(this.apiUrl + 'recordEntry/entry', entry);
        }
    };
    DataStorageService.prototype.getEntries = function (name, lrno, dateRangeOption, startDate, endDate) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = name ? params.append('name', name) : params.append('lrno', lrno);
            /*params = params.append('name', name);
            params = params.append('lrno', lrno);*/
            params = params.append('dateRangeOption', dateRangeOption);
            if (dateRangeOption === '5') {
                params = params.append('startDate', startDate);
                params = params.append('endDate', endDate);
            }
            return this.http.get(this.apiUrl + 'recordEntry/entries', { params: params });
        }
    };
    DataStorageService.prototype.getNonGeneratedEntries = function (name, startDate, endDate) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('name', name);
            params = params.append('dateRangeOption', '5');
            params = params.append('startDate', startDate);
            params = params.append('endDate', endDate);
            return this.http.get(this.apiUrl + 'recordEntry/nonGeneratedEntries', { params: params });
        }
    };
    DataStorageService.prototype.getUnpaidLRFullDetails = function () {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            return this.http.get(this.apiUrl + 'recordEntry/nonGeneratedLRs');
        }
    };
    DataStorageService.prototype.getPaidOnBooking = function (startDate, endDate) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('startDate', startDate);
            params = params.append('endDate', endDate);
            return this.http.get(this.apiUrl + 'recordEntry/paidOnBooking', { params: params });
        }
    };
    DataStorageService.prototype.nonGeneratedEntriesAmount = function (name) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('name', name);
            return this.http.get(this.apiUrl + 'recordEntry/nonGeneratedEntriesAmount', { params: params });
        }
    };
    DataStorageService.prototype.getGeneratedEntries = function (LRNos, billNo) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('LRNos', LRNos);
            params = params.append('billNo', billNo.toString());
            return this.http.get(this.apiUrl + 'recordEntry/generatedBill', { params: params });
        }
    };
    DataStorageService.prototype.getNames = function () {
        if (this.authService.isAuthenticated()) {
            return this.http.get(this.apiUrl + 'recordEntry/partyNames');
        }
    };
    DataStorageService.prototype.getEntry = function (id) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('id', id);
            return this.http.get(this.apiUrl + 'recordEntry/entry', { params: params });
        }
    };
    DataStorageService.prototype.updateEntry = function (id, entry) {
        if (this.authService.isAuthenticated()) {
            return this.http.put(this.apiUrl + 'recordEntry/entry', { id: id, entry: entry });
        }
    };
    DataStorageService.prototype.updateBillNo = function (name, billNo, LRNos) {
        if (this.authService.isAuthenticated()) {
            return this.http.put(this.apiUrl + 'recordEntry/updateBillNo', { name: name, billNo: billNo, LRNos: LRNos });
        }
    };
    DataStorageService.prototype.deleteEntry = function (id) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('id', id);
            return this.http.delete(this.apiUrl + 'recordEntry/entry', { params: params });
        }
    };
    DataStorageService.prototype.getDailyReport = function (date, endDate) {
        if (true) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('date', date);
            params = params.append('endDate', endDate);
            return this.http.get(this.apiUrl + 'recordEntry/dailyReport', { params: params });
        }
    };
    DataStorageService.prototype.getDailyCashReport = function (date, endDate) {
        if (true) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('date', date);
            params = params.append('endDate', endDate);
            return this.http.get(this.apiUrl + 'recordEntry/dailyCashReport', { params: params });
        }
    };
    DataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/Utils/expense-storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Utils/expense-storage.service.ts ***!
  \**************************************************/
/*! exports provided: ExpenseStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseStorageService", function() { return ExpenseStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenseStorageService = /** @class */ (function () {
    function ExpenseStorageService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ExpenseStorageService.prototype.getExpense = function (date) {
        if (true) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('date', date);
            return this.http.get(this.apiUrl + 'expense/expense', { params: params });
        }
    };
    ExpenseStorageService.prototype.storeExpense = function (expense) {
        if (this.authService.isAuthenticated()) {
            return this.http.post(this.apiUrl + 'expense/addExpense', { expense: expense });
        }
    };
    ExpenseStorageService.prototype.updateExpense = function (expense, id) {
        if (this.authService.isAuthenticated()) {
            return this.http.put(this.apiUrl + 'expense/updateExpense', { expense: expense, id: id });
        }
    };
    ExpenseStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExpenseStorageService);
    return ExpenseStorageService;
}());



/***/ }),

/***/ "./src/app/Utils/payment-storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Utils/payment-storage.service.ts ***!
  \**************************************************/
/*! exports provided: PaymentStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentStorageService", function() { return PaymentStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/auth/auth.service */ "./src/app/Core/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentStorageService = /** @class */ (function () {
    function PaymentStorageService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PaymentStorageService.prototype.addPayment = function (name, paymentDetails, advanceAmount) {
        if (this.authService.isAuthenticated()) {
            return this.http.put(this.apiUrl + 'payments/addPayments', { name: name, paymentDetails: paymentDetails, advanceAmount: advanceAmount });
        }
    };
    PaymentStorageService.prototype.getAdvance = function (name) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('name', name);
            return this.http.get(this.apiUrl + 'payments/advance', { params: params });
        }
    };
    PaymentStorageService.prototype.getPayments = function (name) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('name', name);
            return this.http.get(this.apiUrl + 'payments/payments', { params: params });
        }
    };
    PaymentStorageService.prototype.getAllPayments = function (startDate, endDate) {
        if (this.authService.isAuthenticated()) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append('startDate', startDate);
            params = params.append('endDate', endDate);
            return this.http.get(this.apiUrl + 'payments/allPayments', { params: params });
        }
    };
    PaymentStorageService.prototype.updateAdvance = function (name, advanceAmount) {
        if (this.authService.isAuthenticated()) {
            return this.http.put(this.apiUrl + 'payments/updateAdvance', { name: name, advanceAmount: advanceAmount });
        }
    };
    PaymentStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PaymentStorageService);
    return PaymentStorageService;
}());



/***/ }),

/***/ "./src/app/Utils/sharedData.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Utils/sharedData.service.ts ***!
  \*********************************************/
/*! exports provided: SharedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataService", function() { return SharedDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedDataService = /** @class */ (function () {
    function SharedDataService() {
    }
    SharedDataService.prototype.getData = function () {
        return this.data;
    };
    SharedDataService.prototype.setData = function (data) {
        this.data = data;
    };
    SharedDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedDataService);
    return SharedDataService;
}());



/***/ }),

/***/ "./src/app/add-challan/add-challan.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-challan/add-challan.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".challanCheckbox {\r\n  vertical-align: middle;\r\n  width: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNoYWxsYW4vYWRkLWNoYWxsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZGQtY2hhbGxhbi9hZGQtY2hhbGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYWxsYW5DaGVja2JveCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/add-challan/add-challan.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-challan/add-challan.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\" (onCreate)=\"created($event)\"\n                      (onDestroy)=\"destroyed($event)\"></simple-notifications>\n\n\n<p-dialog header=\"Title\" [(visible)]=\"display\">\n  Please fill all the fields\n</p-dialog>\n\n<div class=\"row px-5\">\n\n  <h2>Add new Bill</h2>\n  <hr>\n\n  <div class=\"col-md-12\">\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"text\" class=\"form-control\" name=\"date\" [maxDate]=\"maxDate\" id=\"date\"\n               formControlName=\"date\" bsDatepicker readonly>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Party Name</label>\n        <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Start typing...\" [readonly]=\"editMode\"\n               [typeahead]=\"names\" formControlName=\"name\" class=\"form-control\" required autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"LRNo\">L R Number</label>\n        <input type=\"number\" id=\"LRNo\" name=\"LRNo\" formControlName=\"LRNo\" class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"item\">Particulars</label>\n        <input type=\"text\" id=\"item\" [typeahead]=\"items\" name=\"item\" autocomplete=\"off\"\n               formControlName=\"item\" class=\"form-control\" placeholder=\"Start typing...\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"area\">Delivery Area</label>\n        <input type=\"text\" id=\"area\" name=\"area\" [typeahead]=\"areas\" autocomplete=\"off\"\n               formControlName=\"area\" class=\"form-control\" placeholder=\"Start typing...\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"weight\">Weight (Kgs)</label>\n        <input type=\"number\" id=\"weight\" [(ngModel)]=\"weightEntered\" (change)=\"calculateAmount()\" name=\"weight\"\n               formControlName=\"weight\" class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"rate\">Rate (per Kg)</label>\n        <input type=\"number\" [(ngModel)]=\"rateEntered\" (change)=\"calculateAmount()\" id=\"rate\" name=\"rate\"\n               formControlName=\"rate\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"amount\">Amount (Rs.)</label>\n        <input type=\"number\" [(ngModel)]=\"totalAmount\" id=\"amount\"\n               [readonly]=\"disableAmount\" name=\"amount\" formControlName=\"amount\" class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n        <label> Bill Paid\n          <input type=\"checkbox\" name=\"paid\" formControlName=\"paid\" class=\"form-control challanCheckbox\"/>\n        </label>\n      </div>\n      <div id=\"paymentDetails\" [hidden]=\"!addForm.get('paid').value\">\n        <div class=\"form-group\">\n          <label for=\"pType\">Payment Type</label>\n          <select id=\"pType\" formControlName=\"mode\" class=\"form-control mat-form-field\">\n            <option *ngFor=\"let pType of pTypes\">\n              {{ pType }}\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pDate\">Date</label>\n          <input type=\"text\" class=\"form-control\" name=\"pDate\" [maxDate]=\"maxDate\" id=\"pDate\"\n                 formControlName=\"paymentDate\" bsDatepicker readonly>\n        </div>\n        <div class=\"form-group\" [hidden]=\"addForm.get('mode').value != 'Cheque'\">\n          <label for=\"bName\">Bank Name</label>\n          <input type=\"text\" id=\"bName\" name=\"bankName\" formControlName=\"bankName\"\n                 class=\"form-control\" autocomplete=\"off\">\n        </div>\n        <div class=\"form-group\" [hidden]=\"addForm.get('mode').value != 'Cheque'\">\n          <label for=\"cNo\">Cheque Number</label>\n          <input type=\"text\" id=\"cNo\" name=\"chequeNumber\" formControlName=\"chequeNumber\"\n                 class=\"form-control\" autocomplete=\"off\">\n        </div>\n      </div>\n      <div class=\"form-group pull-left col-lg-3 col-sm-12\">\n        <button class=\"btn btn-md btn-danger\" type=\"button\" (click)=\"onCancel()\" *ngIf=\"editMode\">Cancel</button>\n      </div>\n      <div class=\"form-group col-lg-9 col-sm-12\">\n        <button class=\"btn btn-primary btn-md pull-right\" [disabled]=\"!addForm.valid\"\n                style=\"margin-left: 10px\" type=\"button\" (click)=\"postData()\">Done\n        </button>\n        <button class=\"btn btn-primary btn-md pull-right\" [disabled]=\"!addForm.valid\"\n                type=\"submit\" *ngIf=\"!editMode\">Submit\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/add-challan/add-challan.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-challan/add-challan.component.ts ***!
  \******************************************************/
/*! exports provided: AddChallanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChallanComponent", function() { return AddChallanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddChallanComponent = /** @class */ (function () {
    function AddChallanComponent(dataStorageService, route, router, _service) {
        this.dataStorageService = dataStorageService;
        this.route = route;
        this.router = router;
        this._service = _service;
        this.editMode = false;
        this.display = false;
        this.disableAmount = false;
        this.maxDate = new Date();
        this.options = {
            position: ['bottom', 'right'],
            timeOut: 1000,
            lastOnBottom: true
        };
        this.pTypes = ['Cash', 'Cheque'];
        this.items = ['Angle', 'Flate', 'Channel', 'Beam', 'Plate', 'Round', 'Bright', 'Sheet', 'Profile',
            'Bag', 'Pipes', 'Ring', 'Circle', 'Square Cutting'];
        this.areas = ['Chembur', 'Govandi', 'Ghatkopar', 'Vikhroli', 'Kanjurmarg', 'Bhandup', 'Mulund', 'Thane', 'Bhiwandi', 'Airoli',
            'Kalwa', 'Rabale', 'Mahape', 'Khairne', 'Pawane', 'Turbhe', 'Nerul', 'Taloja', 'Ambarnath', 'Dombivali', 'Santacruz',
            'Kurla', 'Narayan Nagar', 'Jarimari', 'Andheri', 'Khairani Road', 'Goregaon', 'Jogeshwari', 'Malad', 'Kandivali',
            'Dahisar', 'Kashi Mira', 'Ghodbandar', 'Naya Gaon', 'Vasai', 'Kaman', 'Palghar', 'Nalasopara', 'Murbad', 'Digha', 'Virar',
            'Bhayander', 'Naigaon', 'Badlapur'];
    }
    AddChallanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStorageService.getNames()
            .subscribe(function (response) {
            _this.names = response;
        }, function (err) {
            console.log(err);
        });
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = params['id'] != null;
            _this.formInit();
        });
    };
    AddChallanComponent.prototype.onCancel = function () {
        this.router.navigate(['./', 'view'], { relativeTo: this.route.parent });
    };
    AddChallanComponent.prototype.adjustForTimezone = function (date) {
        var timeOffsetInMS = date.getTimezoneOffset() * 60000;
        date.setTime(date.getTime() - timeOffsetInMS);
        return date;
    };
    AddChallanComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.addForm.valid) {
            this.addForm.value.rate = this.addForm.value.rate ? this.addForm.value.rate : 0;
            this.addForm.value.billNo = this.addForm.value.paid ? -1 : 0;
            this.addForm.value.billGenerated = this.addForm.value.paid ? true : false;
            this.addForm.value.name = this.addForm.value.name.toUpperCase().trim();
            this.addForm.value.item = this.addForm.value.item.toUpperCase().trim();
            this.addForm.value.area = this.addForm.value.area.toUpperCase().trim();
            if (this.addForm.value.billGenerated) {
                this.addForm.value.paymentDetails = {
                    paymentDate: this.addForm.value.paymentDate,
                    mode: this.addForm.value.mode,
                    chequeNumber: this.addForm.value.chequeNumber.trim(),
                    bankName: this.addForm.value.bankName.toUpperCase().trim()
                };
            }
            else {
                this.addForm.value.paymentDetails = {
                    paymentDate: this.addForm.value.date,
                    mode: 'Cash',
                    chequeNumber: '',
                    bankName: ''
                };
            }
            if (this.editMode) {
                this.dataStorageService.updateEntry(this.id, this.addForm.value)
                    .subscribe(function (response) {
                    _this.onCancel();
                });
            }
            else {
                this.dataStorageService.storeEntry(this.addForm.value)
                    .subscribe(function (response) {
                    _this._service.success('Message', 'Added Successfully', {
                        timeOut: 1000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: false,
                        maxLength: 10
                    });
                }, function (err) {
                    _this._service.error('Message', err.message, {
                        timeOut: 1000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: false,
                        maxLength: 10
                    });
                });
                if (this.names.indexOf(this.addForm.value.name) === -1) {
                    this.names.push(this.addForm.value.name);
                }
                this.addForm.reset();
            }
        }
        else
            this.display = true;
    };
    AddChallanComponent.prototype.postData = function () {
        if (this.addForm.valid) {
            this.onSubmit();
            this.onCancel();
        }
        else
            this.display = true;
    };
    AddChallanComponent.prototype.calculateAmount = function () {
        this.totalAmount = Math.ceil(this.rateEntered * this.weightEntered);
        this.disableAmount = !!(this.rateEntered && this.weightEntered);
    };
    AddChallanComponent.prototype.formInit = function () {
        var _this = this;
        var date = new Date();
        var LRNo;
        var name = '';
        var amount;
        var rate;
        var area = '';
        var item = '';
        var weight;
        var billNo = 0;
        var billGenerated = false;
        var paid;
        var paymentDate = new Date();
        var chequeNumber = '';
        var bankName = '';
        var mode = 'Cash';
        if (this.editMode) {
            this.dataStorageService.getEntry(this.id)
                .subscribe(function (response) {
                var bill = response[0];
                date = new Date(bill.date);
                LRNo = bill.LRNo;
                amount = bill.amount;
                rate = bill.rate;
                area = bill.area;
                item = bill.item;
                weight = bill.weight;
                name = bill.name;
                billNo = bill.billNo;
                billGenerated = bill.billGenerated;
                paid = bill.paid;
                if (bill.paymentDetails) {
                    paymentDate = new Date(bill.paymentDetails.paymentDate);
                    chequeNumber = bill.paymentDetails.chequeNumber;
                    bankName = bill.paymentDetails.bankName;
                    mode = bill.paymentDetails.mode;
                }
                else {
                    paymentDate = new Date(bill.date);
                    mode = 'Cash';
                    chequeNumber = '';
                    bankName = '';
                }
                _this.weightEntered = parseInt(weight);
                _this.rateEntered = parseInt(rate);
                _this.totalAmount = parseInt(amount);
                _this.disableAmount = !!(_this.rateEntered && _this.weightEntered);
                _this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](date),
                    'LRNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](LRNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](amount, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](rate),
                    'area': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](area, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    'item': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    'weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](weight, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    'billNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](billNo),
                    'billGenerated': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](billGenerated),
                    'paid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](paid),
                    'paymentDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](paymentDate),
                    'chequeNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](chequeNumber),
                    'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](bankName),
                    'mode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](mode)
                });
            }, function (err) {
                _this._service.error('Message', err.message, {
                    timeOut: 1000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 10
                });
            });
        }
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](date, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'LRNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](LRNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](amount, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](rate),
            'area': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](area, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'item': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](weight, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'billNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](billNo),
            'billGenerated': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](billGenerated),
            'paid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](paid),
            'paymentDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](paymentDate),
            'chequeNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](chequeNumber),
            'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](bankName),
            'mode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](mode)
        });
    };
    AddChallanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-challan',
            template: __webpack_require__(/*! ./add-challan.component.html */ "./src/app/add-challan/add-challan.component.html"),
            styles: [__webpack_require__(/*! ./add-challan.component.css */ "./src/app/add-challan/add-challan.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], AddChallanComponent);
    return AddChallanComponent;
}());



/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_challan_add_challan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-challan/add-challan.component */ "./src/app/add-challan/add-challan.component.ts");
/* harmony import */ var _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-bill/view-bill.component */ "./src/app/view-bill/view-bill.component.ts");
/* harmony import */ var _Core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/auth/login/login.component */ "./src/app/Core/auth/login/login.component.ts");
/* harmony import */ var _generate_bill_generate_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate-bill/generate-bill.component */ "./src/app/generate-bill/generate-bill.component.ts");
/* harmony import */ var _print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print-bill/print-bill.component */ "./src/app/print-bill/print-bill.component.ts");
/* harmony import */ var _Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Core/auth/authGaurd.service */ "./src/app/Core/auth/authGaurd.service.ts");
/* harmony import */ var _view_balance_view_balance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-balance/view-balance.component */ "./src/app/view-balance/view-balance.component.ts");
/* harmony import */ var _Core_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Core/home/home.component */ "./src/app/Core/home/home.component.ts");
/* harmony import */ var _pending_bill_pending_bill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pending-bill/pending-bill.component */ "./src/app/pending-bill/pending-bill.component.ts");
/* harmony import */ var _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./daily-report/daily-report.component */ "./src/app/daily-report/daily-report.component.ts");
/* harmony import */ var _print_report_print_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./print-report/print-report.component */ "./src/app/print-report/print-report.component.ts");
/* harmony import */ var _daily_cash_report_daily_cash_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./daily-cash-report/daily-cash-report.component */ "./src/app/daily-cash-report/daily-cash-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: _Core_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'add', component: _add_challan_add_challan_component__WEBPACK_IMPORTED_MODULE_2__["AddChallanComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'view', component: _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_3__["ViewBillComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'add/:id', component: _add_challan_add_challan_component__WEBPACK_IMPORTED_MODULE_2__["AddChallanComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'signIn', component: _Core_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'generate', component: _generate_bill_generate_bill_component__WEBPACK_IMPORTED_MODULE_5__["GenerateBillComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'print', component: _print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_6__["PrintBillComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'dailyreport', component: _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_11__["DailyReportComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'dailycashreport', component: _daily_cash_report_daily_cash_report_component__WEBPACK_IMPORTED_MODULE_13__["DailyCashReportComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'printreport/:date/:endDate', component: _print_report_print_report_component__WEBPACK_IMPORTED_MODULE_12__["PrintReportComponent"] },
    { path: 'print/:id/:lrno', component: _print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_6__["PrintBillComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'balance', component: _view_balance_view_balance_component__WEBPACK_IMPORTED_MODULE_8__["ViewBalanceComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: 'bills', component: _pending_bill_pending_bill_component__WEBPACK_IMPORTED_MODULE_10__["PendingBillComponent"], canActivate: [_Core_auth_authGaurd_service__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdService"]] },
    { path: '**', redirectTo: '/home' }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.main-container{\r\n  margin-top: 60px;\r\n  margin-left: 235px;\r\n  padding: 15px;\r\n  -ms-overflow-x: hidden;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .main-container {\r\n    margin-left: 0px !important;\r\n  }\r\n}\r\n.footer {\r\n  border-top: 5px solid black;\r\n}\r\n.footer p {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  margin-right: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7O0NBRWxCO0FBQ0Q7RUFDRTtJQUNFLDRCQUE0QjtHQUM3QjtDQUNGO0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7QUFHRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5tYWluLWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmZvb3RlciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\">\r\n  <!-- ============================================================== -->\r\n  <!-- Topbar header - style you can find in pages.scss -->\r\n  <!-- ============================================================== -->\r\n  <ap-navigation></ap-navigation>\r\n  <!-- ============================================================== -->\r\n  <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n  <!-- ============================================================== -->\r\n  <ap-sidebar></ap-sidebar>\r\n  <!-- ============================================================== -->\r\n  <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n  <!-- ============================================================== -->\r\n  <!-- ============================================================== -->\r\n  <!-- Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n  <div class=\"page-wrapper\">\r\n    <!-- ============================================================== -->\r\n    <!-- Container fluid  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"container-fluid\">\r\n      <!-- ============================================================== -->\r\n      <!-- Start Page Content -->\r\n      <!-- ============================================================== -->\r\n      <ng-http-loader></ng-http-loader>\r\n      <router-outlet></router-outlet>\r\n      <!-- ============================================================== -->\r\n      <!-- End Start Page Content -->\r\n      <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Container fluid  -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- footer -->\r\n    <!-- ============================================================== -->\r\n   <footer class=\"footer footer\">\r\n      <div class=\"pull-right\">\r\n        <p>Proprietor: Naseem Ahmad Khan </p>\r\n      </div>\r\n\r\n    </footer>\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- End footer -->\r\n    <!-- ============================================================== -->\r\n  </div>\r\n  <!-- ============================================================== -->\r\n  <!-- End Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var config = {
            apiKey: "AIzaSyArlfVX43UcvKXRN3if-jYjOf7_KfGlvt8",
            authDomain: "jantatransportservices.firebaseapp.com",
            databaseURL: "https://jantatransportservices.firebaseio.com",
            projectId: "jantatransportservices",
            storageBucket: "jantatransportservices.appspot.com",
            messagingSenderId: "77158393953"
        };
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_challan_add_challan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-challan/add-challan.component */ "./src/app/add-challan/add-challan.component.ts");
/* harmony import */ var _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-bill/view-bill.component */ "./src/app/view-bill/view-bill.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Core/core.module */ "./src/app/Core/core.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _generate_bill_generate_bill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generate-bill/generate-bill.component */ "./src/app/generate-bill/generate-bill.component.ts");
/* harmony import */ var _print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./print-bill/print-bill.component */ "./src/app/print-bill/print-bill.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _view_balance_view_balance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-balance/view-balance.component */ "./src/app/view-balance/view-balance.component.ts");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _Core_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Core/home/home.component */ "./src/app/Core/home/home.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _pending_bill_pending_bill_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pending-bill/pending-bill.component */ "./src/app/pending-bill/pending-bill.component.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./daily-report/daily-report.component */ "./src/app/daily-report/daily-report.component.ts");
/* harmony import */ var _print_report_print_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./print-report/print-report.component */ "./src/app/print-report/print-report.component.ts");
/* harmony import */ var _daily_cash_report_daily_cash_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./daily-cash-report/daily-cash-report.component */ "./src/app/daily-cash-report/daily-cash-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _Core_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _add_challan_add_challan_component__WEBPACK_IMPORTED_MODULE_3__["AddChallanComponent"],
                _view_bill_view_bill_component__WEBPACK_IMPORTED_MODULE_4__["ViewBillComponent"],
                _generate_bill_generate_bill_component__WEBPACK_IMPORTED_MODULE_11__["GenerateBillComponent"],
                _print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_12__["PrintBillComponent"],
                _view_balance_view_balance_component__WEBPACK_IMPORTED_MODULE_15__["ViewBalanceComponent"],
                _pending_bill_pending_bill_component__WEBPACK_IMPORTED_MODULE_20__["PendingBillComponent"],
                _daily_report_daily_report_component__WEBPACK_IMPORTED_MODULE_22__["DailyReportComponent"],
                _daily_cash_report_daily_cash_report_component__WEBPACK_IMPORTED_MODULE_24__["DailyCashReportComponent"],
                _print_report_print_report_component__WEBPACK_IMPORTED_MODULE_23__["PrintReportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_10__["NgHttpLoaderModule"].forRoot(),
                _Core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_16__["TypeaheadModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_19__["TabsModule"].forRoot(),
                angular2_notifications__WEBPACK_IMPORTED_MODULE_21__["SimpleNotificationsModule"].forRoot()
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["ConfirmationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/daily-cash-report/daily-cash-report.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/daily-cash-report/daily-cash-report.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-buffer {  }\r\n\r\n.billPdf {\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n}\r\n\r\n.billPdf h1 {\r\n  font-size: 55px;\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf h3 {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  margin: 5px;\r\n}\r\n\r\n.billPdf h5 {\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf span, .billPdf p {\r\n  font-size: 20px;\r\n}\r\n\r\n.totalTable {\r\n  border: none !important;\r\n  border-top: 1px solid !important;\r\n  border-bottom: 1px solid !important;\r\n}\r\n\r\ntable th {\r\n  border: 1px solid;\r\n  padding: 5px;\r\n  height: 38px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\ntable td {\r\n  border: 1px solid;\r\n  padding: 6px 5px;\r\n  height: 30px;\r\n  font-size: 14px;\r\n}\r\n\r\n.billFont {\r\n  color: navy;\r\n}\r\n\r\n.billFont h1, .billFont h3, .billFont h5 {\r\n  color: navy !important;\r\n}\r\n\r\n.billLogo {\r\n  width: 200px;\r\n  height: 80px;\r\n}\r\n\r\n.partyName {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbHktY2FzaC1yZXBvcnQvZGFpbHktY2FzaC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7O0FBRWhCO0VBQ0UseURBQXlEO0NBQzFEOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsVUFBVTtDQUNYOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9kYWlseS1jYXNoLXJlcG9ydC9kYWlseS1jYXNoLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1idWZmZXIgeyAgfVxyXG5cclxuLmJpbGxQZGYge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iaWxsUGRmIGgxIHtcclxuICBmb250LXNpemU6IDU1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYmlsbFBkZiBoMyB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYmlsbFBkZiBoNSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYmlsbFBkZiBzcGFuLCAuYmlsbFBkZiBwIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50b3RhbFRhYmxlIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgcGFkZGluZzogNnB4IDVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYmlsbEZvbnQge1xyXG4gIGNvbG9yOiBuYXZ5O1xyXG59XHJcblxyXG4uYmlsbEZvbnQgaDEsIC5iaWxsRm9udCBoMywgLmJpbGxGb250IGg1IHtcclxuICBjb2xvcjogbmF2eSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmlsbExvZ28ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5wYXJ0eU5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/daily-cash-report/daily-cash-report.component.html":
/*!********************************************************************!*\
  !*** ./src/app/daily-cash-report/daily-cash-report.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row px-5\">\n\n  <h2>Generate Daily Cash Report</h2>\n  <hr>\n\n  <div class=\"col-md-12\">\n    <form (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"text\" class=\"form-control\" name=\"date\" [maxDate]=\"maxDate\" id=\"date\"\n               #reportDate bsDatepicker readonly>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-lg-6 col-sm-12\">\n          <button class=\"btn btn-primary btn-md\" type=\"submit\">Submit\n          </button>\n        </div>\n        <div class=\"form-group col-lg-6 col-sm-12\">\n          <button type=\"button\" class=\"btn btn-primary btn-md float-right\" (click)=\"enableExpenseForm()\" [hidden]=\"!showTable\">Add\n            Expense\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-12\" *ngIf=\"showExpenseForm\">\n    <form (ngSubmit)=\"onExpenseSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"diesel\">Diesel</label>\n        <input type=\"number\" id=\"diesel\" name=\"diesel\" [(ngModel)]=\"model.diesel\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"loading\">Loading/ Unloading</label>\n        <input type=\"number\" id=\"loading\" name=\"loading\" [(ngModel)]=\"model.load\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"misc\">Miscellaneous</label>\n        <input type=\"number\" id=\"misc\" name=\"misc\" [(ngModel)]=\"model.misc\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group pull-left col-lg-3 col-sm-12\">\n        <button class=\"btn btn-md btn-danger\" type=\"button\" (click)=\"showExpenseForm = false\">Cancel</button>\n      </div>\n      <div class=\"form-group pull-right col-lg-9 col-sm-12\">\n        <button class=\"btn btn-primary btn-md pull-right\" type=\"submit\">Save Expense</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-12 mt-2\" id=\"report\" [hidden]=\"!showTable\">\n    <p style=\"font-weight: bold\">Report Date: {{reportGeneateDate | date:'dd/MM/yyyy'}}</p>\n    <table class=\" col-lg-12 top-buffer\" style=\"margin-left: 1%\">\n      <thead>\n      <tr>\n        <th class=\"text-center\">L.R. No</th>\n        <th class=\"text-center\" width=\"40%\">Party Name</th>\n        <th class=\"text-center\">Billed Date</th>\n        <th class=\"text-center\">Payment Mode</th>\n        <th class=\"text-center \">AMOUNT (Rs.)</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let bill of dailyReports\" [ngStyle]=\"{ 'color': bill.bgColor}\">\n        <td class=\"text-center\">{{bill.LRNo || ''}}</td>\n        <td>{{bill.name}}</td>\n        <td class=\"text-center\">{{bill.date | date: 'dd/MM/yyyy'}}</td>\n        <td class=\"text-center\">{{bill.mode}}</td>\n        <td class=\"text-right\" style=\"padding-right: 15px\">{{bill.amount || ''}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\"col-lg-12\" style=\"margin-left: 1%\">\n      <tbody>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">LR's_Cash: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{cashLRAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">LR's_Cheque: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{chequeLRAmount }}</b></td>\n      </tr>\n      <!--<tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Today's_LR_Cash: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{cashLRAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Today's_LR_Cheque: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{chequeLRAmount }}</b></td>\n      </tr>-->\n      <!--<tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Bill_Payments </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{billAmount }}</b></td>\n      </tr>-->\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Bill_Payments </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{billAmount }}</b></td>\n      </tr>\n      <!--<tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Bill_Payments_Cheque </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{chequeBillAmount }}</b></td>\n      </tr>-->\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Total: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{totalAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Diesel: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{dieselAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Loading/Unloading: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{loadAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Miscellaneous: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{miscAmount}}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Balance: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{balanceAmount }}</b></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/daily-cash-report/daily-cash-report.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/daily-cash-report/daily-cash-report.component.ts ***!
  \******************************************************************/
/*! exports provided: DailyCashReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyCashReportComponent", function() { return DailyCashReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/expense-storage.service */ "./src/app/Utils/expense-storage.service.ts");
/* harmony import */ var _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/payment-storage.service */ "./src/app/Utils/payment-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DailyCashReportComponent = /** @class */ (function () {
    function DailyCashReportComponent(dataStorageService, router, paymentStorageService, expenseStorageService) {
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.paymentStorageService = paymentStorageService;
        this.expenseStorageService = expenseStorageService;
        this.maxDate = new Date();
        this.dailyReports = [];
        this.dailyBillPayment = [];
        this.model = {};
        this.showTable = false;
        this.totalAmount = 0;
        this.pendingCashAmount = 0;
        this.pendingChequeAmount = 0;
        this.cashAmount = 0;
        this.billAmount = 0;
        this.cashLRAmount = 0;
        this.chequeLRAmount = 0;
        this.cashBillAmount = 0;
        this.chequeBillAmount = 0;
        this.dieselAmount = 0;
        this.miscAmount = 0;
        this.loadAmount = 0;
        this.balanceAmount = 0;
        this.expenseUpdate = false;
        this.showExpenseForm = false;
        this.id = '';
    }
    DailyCashReportComponent.prototype.ngOnInit = function () {
    };
    DailyCashReportComponent.prototype.enableExpenseForm = function () {
        this.model = {
            'diesel': this.dieselAmount,
            'misc': this.miscAmount,
            'load': this.loadAmount
        };
        this.showExpenseForm = true;
    };
    DailyCashReportComponent.prototype.onExpenseSubmit = function () {
        var _this = this;
        this.loadAmount = this.model.load;
        this.miscAmount = this.model.misc;
        this.dieselAmount = this.model.diesel;
        this.balanceAmount = this.totalAmount - (this.dieselAmount + this.dieselAmount + this.loadAmount);
        var date = this.endDate;
        date.setDate(this.endDate.getDate() - 1);
        date.setHours(0, 0, 0, 0);
        var expenseDate = date.toISOString();
        var obj = {
            date: expenseDate,
            Diesel: this.model.diesel,
            load: this.model.load,
            Misc: this.model.misc
        };
        if (this.expenseUpdate) {
            this.expenseStorageService.updateExpense(obj, this.id)
                .subscribe(function (res) {
                _this.showExpenseForm = false;
            });
        }
        else {
            this.expenseStorageService.storeExpense(obj)
                .subscribe(function (res) {
                _this.showExpenseForm = false;
            });
        }
    };
    DailyCashReportComponent.prototype.getColor = function (date) {
        if (new Date(this.reportDate.nativeElement.value).getTime() > new Date(date).getTime())
            return 'red';
        return 'green';
    };
    DailyCashReportComponent.prototype.onSubmit = function () {
        var _this = this;
        this.endDate = new Date(this.reportDate.nativeElement.value);
        var date = this.endDate;
        // date.setDate(this.endDate.getDate());
        date.setHours(0, 0, 0, 0);
        var expenseDate = date.toISOString();
        this.endDate.setDate(this.endDate.getDate() + 1);
        this.dataStorageService.getDailyCashReport(expenseDate, this.endDate)
            .subscribe(function (entries) {
            _this.paymentStorageService.getAllPayments(expenseDate, _this.endDate)
                .subscribe(function (payments) {
                _this.expenseStorageService.getExpense(expenseDate)
                    .subscribe(function (expense) {
                    _this.billAmount = 0;
                    _this.totalAmount = 0;
                    /*this.pendingCashAmount = 0;
                    this.pendingChequeAmount = 0;
                    this.cashAmount = 0;
                    this.billAmount = 0;
                    this.chequeBillAmount = 0;*/
                    _this.cashLRAmount = 0;
                    _this.chequeLRAmount = 0;
                    _this.dailyReports = [];
                    _this.dailyBillPayment = [];
                    _this.reportGeneateDate = _this.reportDate.nativeElement.value;
                    if (expense[0] && (expense[0]['Misc'] || expense[0]['load'] || expense[0]['Diesel'])) {
                        _this.expenseUpdate = true;
                        _this.id = expense[0]['_id'];
                    }
                    _this.miscAmount = expense[0] ? expense[0]['Misc'] : 0;
                    _this.loadAmount = expense[0] ? expense[0]['load'] : 0;
                    _this.dieselAmount = expense[0] ? expense[0]['Diesel'] : 0;
                    _this.balanceAmount = 0;
                    entries.sort(function (a, b) { return a.LRNo - b.LRNo; });
                    payments.map(function (payment) {
                        payment.paymentDetails.map(function (details) {
                            if (new Date(details.date) >= new Date(_this.reportGeneateDate) && new Date(details.date) < new Date(_this.endDate)) {
                                entries.push({
                                    paymentDetails: {
                                        mode: details.mode,
                                        bankName: details.bankName,
                                        chequeNumber: details.chequeNumber
                                    },
                                    name: payment.name,
                                    amount: details.amount,
                                    date: details.date
                                });
                                _this.billAmount += details.amount;
                            }
                        });
                    });
                    entries.forEach(function (report) {
                        if (report.paymentDetails.mode === 'Cash') {
                            report.mode = 'Cash';
                        }
                        else {
                            report.mode = "Cheque (" + report.paymentDetails.bankName + " - " + report.paymentDetails.chequeNumber + ")";
                        }
                        _this.dailyReports.push(report);
                        if (report.LRNo) {
                            if (new Date(_this.reportDate.nativeElement.value).getTime() > new Date(report.date).getTime()) {
                                // this.pendingCashAmount += report.amount;
                                report.bgColor = 'red';
                            }
                            else {
                                // this.cashAmount += report.amount;
                                /* if (report.paymentDetails.mode === 'Cash') {
                                  this.cashLRAmount += report.amount;
                                } else {
                                  this.chequeLRAmount += report.amount;
                                }*/
                                report.bgColor = 'green';
                            }
                            if (report.paymentDetails.mode === 'Cash') {
                                _this.cashLRAmount += report.amount;
                            }
                            else {
                                _this.chequeLRAmount += report.amount;
                            }
                            _this.totalAmount += report.amount;
                        }
                    });
                    _this.totalAmount += _this.billAmount;
                    _this.balanceAmount = _this.totalAmount - (_this.dieselAmount + _this.miscAmount + _this.loadAmount);
                    _this.showTable = true;
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportDate'),
        __metadata("design:type", Object)
    ], DailyCashReportComponent.prototype, "reportDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expense'),
        __metadata("design:type", Object)
    ], DailyCashReportComponent.prototype, "expense", void 0);
    DailyCashReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daily-cash-report',
            template: __webpack_require__(/*! ./daily-cash-report.component.html */ "./src/app/daily-cash-report/daily-cash-report.component.html"),
            styles: [__webpack_require__(/*! ./daily-cash-report.component.css */ "./src/app/daily-cash-report/daily-cash-report.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_4__["PaymentStorageService"],
            _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseStorageService"]])
    ], DailyCashReportComponent);
    return DailyCashReportComponent;
}());



/***/ }),

/***/ "./src/app/daily-report/daily-report.component.css":
/*!*********************************************************!*\
  !*** ./src/app/daily-report/daily-report.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-buffer {  }\r\n\r\n.billPdf {\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n}\r\n\r\n.billPdf h1 {\r\n  font-size: 55px;\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf h3 {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  margin: 5px;\r\n}\r\n\r\n.billPdf h5 {\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf span, .billPdf p {\r\n  font-size: 20px;\r\n}\r\n\r\n.totalTable {\r\n  border: none !important;\r\n  border-top: 1px solid !important;\r\n  border-bottom: 1px solid !important;\r\n}\r\n\r\ntable th {\r\n  border: 1px solid;\r\n  padding: 5px;\r\n  height: 38px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\ntable td {\r\n  border: 1px solid;\r\n  padding: 6px 5px;\r\n  height: 30px;\r\n  font-size: 14px;\r\n}\r\n\r\n.billFont {\r\n  color: navy;\r\n}\r\n\r\n.billFont h1, .billFont h3, .billFont h5 {\r\n  color: navy !important;\r\n}\r\n\r\n.billLogo {\r\n  width: 200px;\r\n  height: 80px;\r\n}\r\n\r\n.partyName {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbHktcmVwb3J0L2RhaWx5LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjs7QUFFaEI7RUFDRSx5REFBeUQ7Q0FDMUQ7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtDQUNkOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2RhaWx5LXJlcG9ydC9kYWlseS1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYnVmZmVyIHsgIH1cclxuXHJcbi5iaWxsUGRmIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmlsbFBkZiBoMSB7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJpbGxQZGYgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJpbGxQZGYgaDUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJpbGxQZGYgc3BhbiwgLmJpbGxQZGYgcCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udG90YWxUYWJsZSB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDZweCA1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJpbGxGb250IHtcclxuICBjb2xvcjogbmF2eTtcclxufVxyXG5cclxuLmJpbGxGb250IGgxLCAuYmlsbEZvbnQgaDMsIC5iaWxsRm9udCBoNSB7XHJcbiAgY29sb3I6IG5hdnkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJpbGxMb2dvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ucGFydHlOYW1lIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/daily-report/daily-report.component.html":
/*!**********************************************************!*\
  !*** ./src/app/daily-report/daily-report.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row px-5\">\n\n  <h2>Generate Daily Report</h2>\n  <hr>\n\n  <div class=\"col-md-12\">\n    <form (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"text\" class=\"form-control\" name=\"date\" [maxDate]=\"maxDate\" id=\"date\"\n               #reportDate bsDatepicker readonly>\n      </div>\n      <div class=\"row\">\n      <div class=\"form-group col-lg-6 col-sm-12\">\n        <button class=\"btn btn-primary btn-md\" type=\"submit\" >Submit\n        </button>\n      </div>\n      <!--<div class=\"form-group col-lg-3 col-sm-12\">\n        <button type=\"button\" class=\"btn btn-primary btn-md\" (click)=\"enableExpenseForm()\" [hidden]=\"!showTable\" >Add Expense\n        </button>\n      </div>-->\n      <div class=\"form-group col-lg-6 col-sm-12\">\n        <button type=\"button\" class=\"btn btn-primary btn-md float-right\" (click)=\"downloadPdf()\" >Download Report\n        </button>\n      </div>\n      </div>\n    </form>\n  </div>\n  <!--<div class=\"col-md-12\" *ngIf=\"showExpenseForm\">\n    <form (ngSubmit)=\"onExpenseSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"diesel\">Diesel</label>\n        <input type=\"number\" id=\"diesel\" name=\"diesel\" [(ngModel)]=\"model.diesel\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"loading\">Loading/ Unloading</label>\n        <input type=\"number\" id=\"loading\" name=\"loading\" [(ngModel)]=\"model.load\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"misc\">Miscellaneous</label>\n        <input type=\"number\" id=\"misc\" name=\"misc\" [(ngModel)]=\"model.misc\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group pull-left col-lg-3 col-sm-12\">\n        <button class=\"btn btn-md btn-danger\" type=\"button\" (click)=\"showExpenseForm = false\">Cancel</button>\n      </div>\n      <div class=\"form-group col-lg-9 col-sm-12\">\n        <button class=\"btn btn-primary btn-md pull-right\" type=\"submit\" >Save Expense</button>\n      </div>\n    </form>\n  </div>-->\n\n  <div class=\"col-md-12 mt-2\" id=\"report\" [hidden]=\"!showTable\">\n    <p style=\"font-weight: bold\">Report Date: {{reportGeneateDate | date:'dd/MM/yyyy'}}</p>\n    <table class=\" col-lg-12 top-buffer\" style=\"margin-left: 1%\">\n      <thead>\n      <tr>\n        <th class=\"text-center\">L.R. No</th>\n        <th class=\"text-center\">Party Name</th>\n        <th class=\"text-center\" width=\"45%\">DESCRIPTION</th>\n        <th class=\"text-center\">WEIGHT</th>\n        <th class=\"text-center \">AMOUNT (Rs.)</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let bill of dailyReports\" [ngStyle]=\"{'color': getBgColor(bill.billNo)}\">\n        <td class=\"text-center\">{{bill.LRNo || ''}}</td>\n        <td>{{bill.name}}</td>\n        <td>{{bill.area ? bill.area + ': ' : ''}} {{bill.item || ''}}</td>\n        <td class=\"text-center\">{{bill.weight || ''}}</td>\n        <td class=\"text-right\" style=\"padding-right: 15px\">{{bill.amount || ''}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\"col-lg-12\" style=\"margin-left: 1%\">\n      <tbody>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Cash: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ cashAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Total: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ totalAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Diesel: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ dieselAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Loading/Unloading: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ loadAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Miscellaneous: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ miscAmount }}</b></td>\n      </tr>\n      <tr class=\"col-lg-12\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Balance: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ balanceAmount }}</b></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/daily-report/daily-report.component.ts":
/*!********************************************************!*\
  !*** ./src/app/daily-report/daily-report.component.ts ***!
  \********************************************************/
/*! exports provided: DailyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportComponent", function() { return DailyReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/expense-storage.service */ "./src/app/Utils/expense-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DailyReportComponent = /** @class */ (function () {
    function DailyReportComponent(dataStorageService, router, expenseStorageService) {
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.expenseStorageService = expenseStorageService;
        this.maxDate = new Date();
        this.dailyReports = [];
        this.model = {};
        this.showTable = false;
        this.totalAmount = 0;
        this.cashAmount = 0;
        this.dieselAmount = 0;
        this.miscAmount = 0;
        this.loadAmount = 0;
        this.balanceAmount = 0;
        this.expenseUpdate = false;
        this.showExpenseForm = false;
        this.id = '';
    }
    DailyReportComponent.prototype.ngOnInit = function () {
    };
    DailyReportComponent.prototype.onSubmit = function () {
        var _this = this;
        this.endDate = new Date(this.reportDate.nativeElement.value);
        var date = this.endDate;
        // date.setDate(this.endDate.getDate());
        date.setHours(0, 0, 0, 0);
        var expenseDate = date.toISOString();
        this.endDate.setDate(this.endDate.getDate() + 1);
        this.dataStorageService.getDailyReport(this.reportDate.nativeElement.value, this.endDate)
            .subscribe(function (entries) {
            _this.expenseStorageService.getExpense(expenseDate)
                .subscribe(function (expense) {
                _this.totalAmount = 0;
                _this.cashAmount = 0;
                if (expense[0] && (expense[0]['Misc'] || expense[0]['load'] || expense[0]['Diesel'])) {
                    _this.expenseUpdate = true;
                    _this.id = expense[0]['_id'];
                }
                _this.miscAmount = expense[0] ? expense[0]['Misc'] : 0;
                _this.loadAmount = expense[0] ? expense[0]['load'] : 0;
                _this.dieselAmount = expense[0] ? expense[0]['Diesel'] : 0;
                _this.balanceAmount = 0;
                _this.dailyReports = [];
                var paid = [];
                var unpaid = [];
                _this.reportGeneateDate = _this.reportDate.nativeElement.value;
                entries.forEach(function (report) {
                    _this.totalAmount += report.amount;
                    if (report.billNo === -1) {
                        _this.cashAmount += report.amount;
                        paid.push(report);
                    }
                    else {
                        unpaid.push(report);
                    }
                });
                _this.dailyReports = paid.concat(unpaid);
                _this.balanceAmount = _this.totalAmount - (_this.dieselAmount + _this.miscAmount + _this.loadAmount);
                _this.showTable = true;
            });
        });
    };
    DailyReportComponent.prototype.enableExpenseForm = function () {
        this.model = {
            'diesel': this.dieselAmount,
            'misc': this.miscAmount,
            'load': this.loadAmount
        };
        this.showExpenseForm = true;
    };
    DailyReportComponent.prototype.onExpenseSubmit = function () {
        var _this = this;
        this.loadAmount = this.model.load;
        this.miscAmount = this.model.misc;
        this.dieselAmount = this.model.diesel;
        this.balanceAmount = this.totalAmount - (this.dieselAmount + this.dieselAmount + this.loadAmount);
        var date = new Date();
        date.setDate(this.endDate.getDate() - 1);
        date.setHours(0, 0, 0, 0);
        var expensedate = date.toISOString();
        var obj = {
            date: expensedate,
            Diesel: this.model.diesel,
            load: this.model.load,
            Misc: this.model.misc
        };
        if (this.expenseUpdate) {
            this.expenseStorageService.updateExpense(obj, this.id)
                .subscribe(function (res) {
                _this.showExpenseForm = false;
            });
        }
        else {
            this.expenseStorageService.storeExpense(obj)
                .subscribe(function (res) {
                _this.showExpenseForm = false;
            });
        }
    };
    DailyReportComponent.prototype.getBgColor = function (billNo) {
        return billNo === -1 ? 'green' : '';
    };
    DailyReportComponent.prototype.downloadPdf = function () {
        var date = new Date(this.reportGeneateDate.toString());
        date = date.getTime();
        this.endDate = this.endDate.getTime();
        var url = window.location.origin + "/printreport/" + date + "/" + this.endDate;
        window.open(url, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('reportDate'),
        __metadata("design:type", Object)
    ], DailyReportComponent.prototype, "reportDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expense'),
        __metadata("design:type", Object)
    ], DailyReportComponent.prototype, "expense", void 0);
    DailyReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daily-report',
            template: __webpack_require__(/*! ./daily-report.component.html */ "./src/app/daily-report/daily-report.component.html"),
            styles: [__webpack_require__(/*! ./daily-report.component.css */ "./src/app/daily-report/daily-report.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseStorageService"]])
    ], DailyReportComponent);
    return DailyReportComponent;
}());



/***/ }),

/***/ "./src/app/generate-bill/generate-bill.component.css":
/*!***********************************************************!*\
  !*** ./src/app/generate-bill/generate-bill.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-buffer { margin-top:20px; }\r\n\r\n.billPdf h1 {\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\n.billPdf h3 {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.billPdf h5 {\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n}\r\n\r\n.billPdf span {\r\n  font-size: 20px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntable th, table td {\r\n  border: 1px solid;\r\n  padding: 5px;\r\n  text-align: center;\r\n}\r\n\r\ntable th {\r\n  font-weight: bold;\r\n}\r\n\r\n#pendingBillsTable {\r\n  margin: 15px 0;\r\n}\r\n\r\n#pendingBillsTable th, pendingBillsTable td {\r\n  padding: 5px 10px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdGUtYmlsbC9nZW5lcmF0ZS1iaWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxnQkFBZ0IsRUFBRTs7QUFFaEM7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmF0ZS1iaWxsL2dlbmVyYXRlLWJpbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYnVmZmVyIHsgbWFyZ2luLXRvcDoyMHB4OyB9XHJcblxyXG4uYmlsbFBkZiBoMSB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYmlsbFBkZiBoMyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYmlsbFBkZiBoNSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5iaWxsUGRmIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB0aCwgdGFibGUgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3BlbmRpbmdCaWxsc1RhYmxlIHtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuI3BlbmRpbmdCaWxsc1RhYmxlIHRoLCBwZW5kaW5nQmlsbHNUYWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/generate-bill/generate-bill.component.html":
/*!************************************************************!*\
  !*** ./src/app/generate-bill/generate-bill.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\" (onCreate)=\"created($event)\"\n                      (onDestroy)=\"destroyed($event)\"></simple-notifications>\n\n\n<p-dialog header=\"Pending Bills\" [(visible)]=\"displayBills\"\n          [responsive]=\"true\">\n  <table id=\"pendingBillsTable\">\n    <thead>\n    <tr>\n      <th>S. No</th>\n      <th>Generated Date</th>\n      <th>Bill No</th>\n      <th>Party Name</th>\n      <th>Total Amount</th>\n      <th>Balance Amount</th>\n      <th>Pending From</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let bill of pendingBills; let i = index\"\n        [ngStyle]=\"{ 'color': getColor(bill.billDate)}\">\n      <td>{{i +1 }}</td>\n      <td>{{bill.billDate | date: 'dd/MM/yyyy'}}</td>\n      <td>{{bill.billNo}}</td>\n      <td>{{bill.partyName}}</td>\n      <td>{{bill.totalAmount}}</td>\n      <td>{{bill.balanceAmount}}</td>\n      <td>{{getPendingDays(bill.billDate)}}</td>\n    </tr>\n    </tbody>\n  </table>\n  <div class=\"col-sm-12 text-center\">\n    <button class=\"btn btn-primary btn-md mt-3\" (click)=\"displayBills = false\"\n            type=\"submit\">Close\n    </button>\n  </div>\n</p-dialog>\n\n\n<p-dialog header=\"Pending LRs\" [(visible)]=\"displayLRs\"\n          [responsive]=\"true\">\n  <table id=\"pendingLRsTable\">\n    <thead>\n    <tr>\n      <th>S. No</th>\n      <th>Generated Date</th>\n      <th>LR No</th>\n      <th>Party Name</th>\n      <th>Total Amount</th>\n      <th>Pending From</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let lr of pendingLRs; let i = index\"\n        [ngStyle]=\"{ 'color': getColor(lr.date)}\">\n      <td>{{i +1 }}</td>\n      <td>{{lr.date | date: 'dd/MM/yyyy'}}</td>\n      <td>{{lr.LRNo}}</td>\n      <td>{{lr.name}}</td>\n      <td>{{lr.amount}}</td>\n      <td>{{getPendingDays(lr.date)}}</td>\n    </tr>\n    </tbody>\n  </table>\n  <div class=\"col-sm-12 text-center\">\n    <button class=\"btn btn-primary btn-md mt-3\" (click)=\"displayLRs = false\"\n            type=\"submit\">Close\n    </button>\n  </div>\n</p-dialog>\n\n\n<div class=\"px-5\">\n\n  <h2>Generate Bill\n    <button class=\"btn btn-danger pull-right ml-4\" (click)=\"getPendingLRs()\"> View Pending LR's</button>\n    <button class=\"btn btn-danger pull-right\" (click)=\"getPendingBills()\"> View Pending Bills</button>\n  </h2>\n\n  <hr>\n\n  <h4> Select the Party Name and Period</h4>\n\n  <form (ngSubmit)=\"showBills()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Party Name</label>\n      <select id=\"name\" #pname class=\"form-control mat-form-field\">\n        <option value=\"\" selected disabled hidden>Choose Party name...</option>\n        <option *ngFor=\"let name of names\">\n          {{ name }}\n        </option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"date\">Please select the date Range</label>\n      <input class=\"form-control\" [(ngModel)]=\"bsRangeValue\"\n             name=\"date\" placeholder=\"Select Date..\" [maxDate]=\"maxDate\" id=\"date\" bsDaterangepicker readonly>\n    </div>\n    <button class=\"btn btn-primary\">Show Bill</button>\n  </form>\n\n  <hr>\n\n  <div class=\"\" [hidden]=\"!displayTable\">\n    <table id=\"billTable\">\n      <thead>\n      <tr>\n        <th style=\"width: 5%\">S. No</th>\n        <th>Date</th>\n        <th>L R No</th>\n        <th>Item</th>\n        <th>Area</th>\n        <th>Weight</th>\n        <th>Rate</th>\n        <th>Amount</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let bill of bills; let i = index\">\n        <td>{{i +1 }}</td>\n        <td>{{bill.date | date: 'dd/MM/yyyy'}}</td>\n        <td>{{bill.LRNo}}</td>\n        <td>{{bill.item}}</td>\n        <td>{{bill.area}}</td>\n        <td>{{bill.weight}} Kgs</td>\n        <td>Rs. {{bill.rate}} / Kg</td>\n        <td>Rs. {{bill.amount}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <hr>\n    <button class=\"btn btn-primary\" (click)=\"downloadPDf()\">Download Bill</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/generate-bill/generate-bill.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/generate-bill/generate-bill.component.ts ***!
  \**********************************************************/
/*! exports provided: GenerateBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateBillComponent", function() { return GenerateBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _Utils_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/sharedData.service */ "./src/app/Utils/sharedData.service.ts");
/* harmony import */ var _Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/bill-storage.service */ "./src/app/Utils/bill-storage.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenerateBillComponent = /** @class */ (function () {
    function GenerateBillComponent(dataService, route, router, sharedDataService, billService, _service) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.sharedDataService = sharedDataService;
        this.billService = billService;
        this._service = _service;
        this.maxDate = new Date();
        this.displayTable = false;
        this.displayBills = false;
        this.displayLRs = false;
        this.options = {
            position: ["bottom", "right"],
            timeOut: 1000,
            lastOnBottom: true
        };
    }
    GenerateBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getNames()
            .subscribe(function (response) {
            _this.names = response;
            _this.names.sort();
        }, function (err) {
            console.log(err);
        });
    };
    GenerateBillComponent.prototype.downloadPDf = function () {
        var data = [];
        data['range'] = {
            startDate: this.bsRangeValue[0],
            endDate: this.bsRangeValue[1]
        };
        data['name'] = this.pname.nativeElement.value;
        this.sharedDataService.setData(data);
        this.router.navigate(['../', 'print'], { relativeTo: this.route });
    };
    GenerateBillComponent.prototype.showBills = function () {
        var _this = this;
        this.dataService.getNonGeneratedEntries(this.pname.nativeElement.value, this.bsRangeValue[0], this.bsRangeValue[1])
            .subscribe(function (response) {
            _this.bills = response;
            if (!_this.bills.length) {
                _this.displayTable = false;
                _this._service.warn('Message', 'No un billed entries found', {
                    timeOut: 1000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 10
                });
            }
            else {
                _this.displayTable = true;
            }
        });
    };
    GenerateBillComponent.prototype.getPendingBills = function () {
        var _this = this;
        if (!this.pendingBills) {
            this.billService.getUnpaidBillFullDetails()
                .subscribe(function (response) {
                _this.pendingBills = response;
                _this.pendingBills = _this.pendingBills.sort(function (a, b) {
                    if (a.billDate < b.billDate)
                        return -1;
                    if (a.billDate > b.billDate)
                        return 1;
                    return 0;
                });
                _this.displayBills = true;
            }, function (err) {
                _this._service.error('Message', err.message, {
                    timeOut: 1000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 10
                });
            });
        }
        else
            this.displayBills = true;
    };
    GenerateBillComponent.prototype.getPendingLRs = function () {
        var _this = this;
        if (!this.pendingLRs) {
            this.dataService.getUnpaidLRFullDetails()
                .subscribe(function (response) {
                _this.pendingLRs = response;
                _this.pendingLRs = _this.pendingLRs.sort(function (a, b) {
                    if (a.billDate < b.billDate)
                        return -1;
                    if (a.billDate > b.billDate)
                        return 1;
                    return 0;
                });
                _this.displayLRs = true;
            }, function (err) {
                _this._service.error('Message', err.message, {
                    timeOut: 1000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 10
                });
            });
        }
        else
            this.displayLRs = true;
    };
    GenerateBillComponent.prototype.getPendingDays = function (date) {
        var diff = Math.floor((Date.parse(new Date().toDateString()) - Date.parse(date)) / 86400000);
        return diff + " days";
    };
    GenerateBillComponent.prototype.getColor = function (date) {
        var diff = Math.floor((Date.parse(new Date().toDateString()) - Date.parse(date)) / 86400000);
        if (diff > 30)
            return 'red';
        return 'green';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pname'),
        __metadata("design:type", Object)
    ], GenerateBillComponent.prototype, "pname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('duration'),
        __metadata("design:type", Object)
    ], GenerateBillComponent.prototype, "dur", void 0);
    GenerateBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generate-bill',
            template: __webpack_require__(/*! ./generate-bill.component.html */ "./src/app/generate-bill/generate-bill.component.html"),
            styles: [__webpack_require__(/*! ./generate-bill.component.css */ "./src/app/generate-bill/generate-bill.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Utils_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
            _Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_4__["BillStorageService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])
    ], GenerateBillComponent);
    return GenerateBillComponent;
}());



/***/ }),

/***/ "./src/app/pending-bill/pending-bill.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pending-bill/pending-bill.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlbmRpbmctYmlsbC9wZW5kaW5nLWJpbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pending-bill/pending-bill.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pending-bill/pending-bill.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\" (onCreate)=\"created($event)\"\n                      (onDestroy)=\"destroyed($event)\"></simple-notifications>\n\n\n<div class=\"px-5\">\n\n  <h2>View Bill Details</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <label for=\"period\">Date Range</label>\n    <select id=\"period\" (change)=\"filterChanged()\" #filter class=\"form-control mat-form-field\">\n      <option *ngFor=\"let opt of billViewOptions\" [value]=\"opt.id\">\n        {{ opt.value }}\n      </option>\n    </select>\n  </div>\n  <div class=\"form-group\" *ngIf=\"showCalendar\">\n    <label>Select Range</label>\n    <input type=\"text\" class=\"form-control\"\n           name=\"date\" placeholder=\"Select Date..\" [(ngModel)]=\"bsRangeValue\" [maxDate]=\"maxDate\" id=\"date\"\n           bsDaterangepicker readonly>\n  </div>\n  <div class=\"form-group\" style=\"margin-top: -7px;\">\n    <button class=\"btn btn-primary btn-md\" (click)=\"searchPayments()\">Search</button>\n  </div>\n\n  <hr>\n\n  <div class=\"\" [hidden]=\"!showTable\">\n    <table id=\"billTable\" class=\"display compact\" style=\"width: 100%\">\n      <thead>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tfoot>\n      <tr>\n        <th colspan=\"3\" style=\"text-align:right\">Current Page:</th>\n        <th colspan=\"1\"></th>\n      </tr>\n      </tfoot>\n    </table>\n  </div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pending-bill/pending-bill.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pending-bill/pending-bill.component.ts ***!
  \********************************************************/
/*! exports provided: PendingBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingBillComponent", function() { return PendingBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/payment-storage.service */ "./src/app/Utils/payment-storage.service.ts");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingBillComponent = /** @class */ (function () {
    function PendingBillComponent(paymentService, dataService, _service) {
        this.paymentService = paymentService;
        this.dataService = dataService;
        this._service = _service;
        this.showTable = false;
        this.showCalendar = false;
        this.maxDate = new Date();
        this.payments = [];
        this.table = $('#billTable').DataTable();
        this.options = {
            position: ["bottom", "right"],
            timeOut: 1000,
            lastOnBottom: true
        };
        this.billViewOptions = [
            { 'id': 1, 'value': 'Current Month' },
            { 'id': 2, 'value': 'Last Month & Current Month' },
            { 'id': 3, 'value': 'Last 6 Months' },
            { 'id': 4, 'value': 'Select Time Period' },
        ];
    }
    PendingBillComponent.prototype.ngOnInit = function () {
    };
    PendingBillComponent.prototype.filterChanged = function () {
        this.showCalendar = this.filter.nativeElement.value === "4";
    };
    PendingBillComponent.prototype.searchPayments = function () {
        var _this = this;
        var val = this.filter.nativeElement.value;
        this.payments = [];
        var startDate = new Date(new Date().setHours(0, 0, 0, 0));
        var endDate = new Date();
        endDate.setDate(endDate.getDate() + 1);
        endDate.setHours(0, 0, 0, 0);
        startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        if (val === '2') {
            startDate.setMonth(startDate.getMonth() - 1);
        }
        else if (val === '3') {
            startDate.setMonth(startDate.getMonth() - 6);
        }
        else if (val === '4') {
            startDate = new Date(this.bsRangeValue[0].setHours(0, 0, 0, 0));
            endDate = new Date(this.bsRangeValue[1].setHours(23, 59, 59, 0));
        }
        this.paymentService.getAllPayments(startDate.toDateString(), endDate.toDateString())
            .subscribe(function (response) {
            if (response.length) {
                response.forEach(function (res) {
                    res.paymentDetails.forEach(function (item) {
                        if (new Date(item.date) >= startDate && new Date(item.date) < endDate) {
                            var mode = item.mode === 'Cash' ? "Cash" : "Cheque (" + item.bankName + ", " + item.chequeNumber + ")";
                            _this.payments.push({
                                'name': res.name,
                                'amount': item.amount,
                                'mode': mode,
                                'date': item.date
                            });
                        }
                    });
                });
            }
            _this.dataService.getPaidOnBooking(startDate.toDateString(), endDate.toDateString())
                .subscribe(function (response) {
                if (response.length) {
                    response.forEach(function (res) {
                        var pDetail = res.paymentDetails;
                        var mode = res.paymentDetails.mode === 'Cash' ? "On Booking - Cash"
                            : "On Booking - Cheque (" + pDetail.bankName + ", " + pDetail.chequeNumber + ")";
                        _this.payments.push({
                            'name': res.name,
                            'amount': res.amount,
                            'mode': mode,
                            'date': res.date
                        });
                    });
                }
                _this.drawTable(_this.payments);
            });
        });
    };
    PendingBillComponent.prototype.drawTable = function (payments) {
        if (!payments.length) {
            this._service.warn('Message', 'No Payments found', {
                timeOut: 1000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            });
        }
        else {
            this.table.destroy();
            this.showTable = true;
            this.table = $('#billTable').DataTable({
                'data': payments,
                'order': [[0, 'desc']],
                'columns': [
                    {
                        title: 'Date',
                        'data': function (data) {
                            return new Date(data.date);
                        },
                        'render': function (data) {
                            return "<span style=\"display: none\">" + Date.parse(data) + " </span><span>" + new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(data, 'dd/MM/yyyy') + "</span>";
                        }
                    },
                    {
                        title: 'Party Name',
                        'data': 'name'
                    },
                    {
                        title: 'Payment Mode',
                        'data': 'mode'
                    },
                    {
                        title: 'Amount (Rs.)',
                        'data': 'amount'
                    }
                ],
                footerCallback: function (row, data, start, end, display) {
                    var api = this.api();
                    var pageTotal = api
                        .column(3, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    var total = api
                        .column(3)
                        .data()
                        .reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    // Update footer
                    $(api.column(3).footer()).html(pageTotal + ' (Total: ' + total + ')');
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", Object)
    ], PendingBillComponent.prototype, "filter", void 0);
    PendingBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-bill',
            template: __webpack_require__(/*! ./pending-bill.component.html */ "./src/app/pending-bill/pending-bill.component.html"),
            styles: [__webpack_require__(/*! ./pending-bill.component.css */ "./src/app/pending-bill/pending-bill.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_1__["PaymentStorageService"],
            _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], PendingBillComponent);
    return PendingBillComponent;
}());



/***/ }),

/***/ "./src/app/print-bill/print-bill.component.css":
/*!*****************************************************!*\
  !*** ./src/app/print-bill/print-bill.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-buffer {  }\r\n\r\n.billPdf {\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n}\r\n\r\n.billPdf h1 {\r\n  font-size: 55px;\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf h3 {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  margin: 5px;\r\n}\r\n\r\n.billPdf h5 {\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf span, .billPdf p {\r\n  font-size: 20px;\r\n}\r\n\r\n.totalTable {\r\n  border: none !important;\r\n  border-top: 1px solid !important;\r\n  border-bottom: 1px solid !important;\r\n}\r\n\r\ntable th {\r\n  border: 1px solid;\r\n  padding: 5px;\r\n  height: 38px;\r\n  font-size: 19px;\r\n}\r\n\r\ntable td {\r\n  border: 1px solid;\r\n  padding: 6px 5px;\r\n  height: 38px;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n}\r\n\r\n.billFont {\r\n  color: navy;\r\n}\r\n\r\n.billFont h1, .billFont h3, .billFont h5 {\r\n  color: navy !important;\r\n}\r\n\r\n.billLogo {\r\n  width: 200px;\r\n  height: 80px;\r\n}\r\n\r\n.partyName {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtYmlsbC9wcmludC1iaWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOztBQUVoQjtFQUNFLHlEQUF5RDtDQUMxRDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtDQUNYOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJpbnQtYmlsbC9wcmludC1iaWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJ1ZmZlciB7ICB9XHJcblxyXG4uYmlsbFBkZiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJpbGxQZGYgaDEge1xyXG4gIGZvbnQtc2l6ZTogNTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5iaWxsUGRmIGgzIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5iaWxsUGRmIGg1IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5iaWxsUGRmIHNwYW4sIC5iaWxsUGRmIHAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnRvdGFsVGFibGUge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwYWRkaW5nOiA2cHggNXB4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5iaWxsRm9udCB7XHJcbiAgY29sb3I6IG5hdnk7XHJcbn1cclxuXHJcbi5iaWxsRm9udCBoMSwgLmJpbGxGb250IGgzLCAuYmlsbEZvbnQgaDUge1xyXG4gIGNvbG9yOiBuYXZ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iaWxsTG9nbyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLnBhcnR5TmFtZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/print-bill/print-bill.component.html":
/*!******************************************************!*\
  !*** ./src/app/print-bill/print-bill.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Select Bill Date\" [(visible)]=\"display\"\n          [responsive]=\"true\">\n  <div class=\"form-group\">\n    <label for=\"date\">Date</label>\n    <input type=\"text\" class=\"form-control\" name=\"date\" [maxDate]=\"maxDate\" id=\"date\"\n           [(ngModel)]=\"billDate\" bsDatepicker readonly>\n  </div>\n  <div class=\"form-group col-lg-9 col-sm-12 pull-right\">\n  <button class=\"btn btn-primary btn-lg\"  (click)=\"closeDialog()\"\n          type=\"submit\" >Submit</button>\n  </div>\n</p-dialog>\n\n<div class=\"row px-5\">\n  <button id=\"downloadButton\" class=\"btn btn-primary\" (click)=\"downloadPDf()\">Download Bills</button>\n  <button id=\"cancelButton\" class=\"btn btn-danger\" style=\"margin-left: 20px;\" (click)=\"returnToGenerate()\">Return</button>\n</div>\n\n<hr>\n\n<div *ngFor=\"let page of pages; let i = index\" class=\"billFont pl-3\">\n  <div [attr.id]=\"'printDiv' + i\" class=\"row col-lg-12 billPdf p-5\">\n    <img src=\"../../assets/logo.png\" alt=\"\" class=\"billLogo\">\n    <div class=\"col-lg-12 text-center top-buffer\">\n      <div class=\"\">\n        <h1>JANATA TRANSPORT SERVICES</h1>\n        <h3>FLEET OWNER AND TRANSPORT CONTRACTORS</h3>\n        <h5>4TH LANE, OZA MARKET, DARUKHANA, MUMBAI-400010 * PHONE: 022-23767218</h5>\n      </div>\n    </div>\n    <div class=\" col-lg-12 text-center\" style=\"margin-left: 1%\">\n      <span class=\"pull-left\" style=\"font-weight: bold\">NO: {{page.billNo}}</span>\n      <span>Transport ID: 27BAUPK9400P1ZV, Email ID: nkjts1974@gmail.com</span>\n      <span class=\"pull-right\">Date: {{billDate | date:'dd/MM/yyyy'}}</span>\n    </div>\n    <div class=\" col-lg-12 top-buffer\" style=\"margin-left: 1%\">\n      <span class=\"partyName\">M/s: {{partyName}}</span>\n    </div>\n    <table class=\" col-lg-12 top-buffer\" style=\"margin-left: 1%\">\n      <thead>\n      <tr>\n        <th class=\"text-center\">DATE</th>\n        <th class=\"text-center\">L.R. No</th>\n        <th class=\"text-center\" width=\"45%\">DESCRIPTION</th>\n        <th class=\"text-center\">WEIGHT</th>\n        <th class=\"text-center\">RATE</th>\n        <th class=\"text-center \">AMOUNT (Rs.)</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let bill of page.billPrinted\">\n        <td class=\"text-center\">{{bill.date | date:'dd/MM/yyyy' || ''}}</td>\n        <td class=\"text-center\">{{bill.LRNo || ''}}</td>\n        <td>{{bill.area ? bill.area + ': ' : ''}} {{bill.item || ''}}</td>\n        <td class=\"text-center\">{{bill.weight || ''}}</td>\n        <td class=\"text-center\">{{bill.rate || ''}}</td>\n        <td class=\"text-right\" style=\"padding-right: 15px\">{{bill.amount || ''}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\" col-lg-12\" style=\"margin-left: 1%\">\n      <tbody>\n      <tr style=\"border: 1px solid navy\">\n        <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-6 totalTable\"><b>Total: </b></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-center col-lg-1 totalTable\"></td>\n        <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ page.totalBill }}</b></td>\n      </tr>\n      </tbody>\n    </table>\n    <div style=\"margin-left: 1%; width: 100%;\">\n      <div class=\"pull-left\" style=\"font-weight: bold\">\n        <span>PAN No. BAUPK9400P</span>\n        <br>\n        <span>BANK Details : Union Bank Of India</span>\n        <br>\n        <span>Acc. No: 361101010020075</span>\n        <br>\n        <span>IFSC Code: UBIN0536113</span>\n        <br>\n        <span>Branch: Darukhana(Reay Road)</span>\n\n      </div>\n      <p class=\"pull-right\" style=\"margin-top:10px; font-weight: bold \">For JANATA TRANSPORT SERVICES</p>\n\n    </div>\n    <div class=\" col-lg-12\">\n      <p class=\"pull-right\" style=\"font-size: 20px; margin-right: 10%; margin-top: -6%\">Proprietor</p>\n    </div>\n  </div>\n  <br>\n  <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/print-bill/print-bill.component.ts":
/*!****************************************************!*\
  !*** ./src/app/print-bill/print-bill.component.ts ***!
  \****************************************************/
/*! exports provided: PrintBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintBillComponent", function() { return PrintBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _Utils_sharedData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/sharedData.service */ "./src/app/Utils/sharedData.service.ts");
/* harmony import */ var _Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/bill-storage.service */ "./src/app/Utils/bill-storage.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/payment-storage.service */ "./src/app/Utils/payment-storage.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var html2canvas = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");

var PrintBillComponent = /** @class */ (function () {
    function PrintBillComponent(router, route, dataService, sharedDataService, paymentService, billService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.sharedDataService = sharedDataService;
        this.paymentService = paymentService;
        this.billService = billService;
        this.updateAdvance = false;
        this.billPrinted = [];
        this.billDate = new Date();
        this.billYear = this.billDate.getFullYear();
        this.partyName = '';
        this.pages = [];
        this.totalBills = 0;
        this.LRNos = [];
        this.startDate = [];
        this.endDate = [];
        this.printMode = false;
        this.display = false;
        this.advanceAmount = 0;
    }
    PrintBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.LRNo = params['lrno'];
            _this.printMode = params['id'] != null;
            if (_this.printMode)
                _this.generateBill();
            else
                _this.getInitialData();
        });
    };
    PrintBillComponent.prototype.generateBill = function () {
        var _this = this;
        this.billService.getBill(this.id, this.LRNo)
            .subscribe(function (response) {
            var data = response[0];
            _this.billNo = data.billNo;
            _this.billDate = data.billDate;
            _this.partyName = data.partyName;
            var LRNos = data.LRNos;
            _this.dataService.getGeneratedEntries(LRNos, _this.billNo)
                .subscribe(function (response) {
                _this.billPrinted = response;
                _this.setBill();
            }, function (err) {
                console.log(err);
                alert('Error Occurred');
            });
        }, function (err) {
            console.log(err);
            alert('Error Occurred');
        });
    };
    PrintBillComponent.prototype.getInitialData = function () {
        var _this = this;
        this.data = this.sharedDataService.getData();
        this.display = true;
        this.partyName = this.data.name;
        this.dataService.getNonGeneratedEntries(this.partyName, this.data.range.startDate, this.data.range.endDate)
            .subscribe(function (response) {
            _this.billPrinted = response;
            if (!_this.billPrinted.length) {
                alert('No Unbilled Entry found..');
                _this.returnToGenerate();
            }
            _this.billPrinted = response;
        });
    };
    PrintBillComponent.prototype.setBill = function () {
        var _this = this;
        this.paymentService.getAdvance(this.partyName)
            .subscribe(function (result) {
            _this.advanceAmount = result[0] ? result[0].advanceAmount : 0;
            if (_this.advanceAmount > 0)
                _this.updateAdvance = true;
            var len = _this.billPrinted.length;
            if (len > 20) {
                _this.totalBills = len % 20 ? Math.floor(len / 20) : Math.floor(len / 20) - 1;
            }
            for (var index = 0; index <= _this.totalBills; index++) {
                _this.pages[index] = [];
                _this.pages[index].billNo = _this.billNo++;
                _this.pages[index].billPrinted = _this.billPrinted.slice(index * 20, (index * 20) + 20);
                _this.pages[index].billPrinted = underscore__WEBPACK_IMPORTED_MODULE_5__["sortBy"](_this.pages[index].billPrinted, 'date');
                _this.pages[index].totalBill = 0;
                _this.LRNos[index] = [];
                for (var _i = 0, _a = _this.pages[index].billPrinted; _i < _a.length; _i++) {
                    var bill = _a[_i];
                    _this.pages[index].totalBill += bill.amount;
                    _this.LRNos[index].push(bill.LRNo);
                }
                if (_this.advanceAmount > 0) {
                    if (_this.advanceAmount > _this.pages[index].totalBill) {
                        _this.pages[index].advanceAmount = _this.pages[index].totalBill;
                        _this.advanceAmount -= _this.pages[index].totalBill;
                        _this.pages[index].balanceAmount = 0;
                    }
                    else {
                        _this.pages[index].advanceAmount = _this.advanceAmount;
                        _this.advanceAmount = 0;
                        _this.pages[index].balanceAmount = _this.pages[index].totalBill - _this.pages[index].advanceAmount;
                    }
                }
                else {
                    _this.pages[index].advanceAmount = 0;
                    _this.pages[index].balanceAmount = _this.pages[index].totalBill;
                }
            }
            if (_this.pages[_this.totalBills].billPrinted.length < 20) {
                var dummyObject = {
                    name: '', item: '', LRNo: '', area: '',
                    weight: '', rate: '', amount: 0, date: '', _id: ''
                };
                for (var i = _this.pages[_this.totalBills].billPrinted.length; i < 20; i++) {
                    _this.pages[_this.totalBills].billPrinted.push(dummyObject);
                }
            }
        });
    };
    PrintBillComponent.prototype.downloadPDf = function () {
        var _this = this;
        if (this.printMode) {
            var divName = 'printDiv0';
            html2canvas(document.getElementById(divName)).then(function (canvas) {
                _this.partyName = _this.partyName.replace(/\s/g, '_');
                var filename = _this.partyName + "_" + _this.pages[0].billNo + ".pdf";
                var imgWidth = 208;
                var imgHeight = 300 /*canvas.height * imgWidth / canvas.width*/;
                var contentDataURL = canvas.toDataURL('image/png');
                var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_7__('p', 'mm', 'a4'); // A4 size page of PDF
                var position = 0;
                pdf.addImage(contentDataURL, 'img', 0, position, imgWidth, imgHeight);
                pdf.save(filename); // Generated PDF
                _this.returnToGenerate();
            });
        }
        else {
            var _loop_1 = function (i) {
                var bill = {
                    billYear: this_1.billYear,
                    billDate: this_1.billDate,
                    billNo: this_1.pages[i].billNo,
                    totalAmount: this_1.pages[i].totalBill,
                    advanceAmount: this_1.pages[i].advanceAmount || 0,
                    balanceAmount: this_1.pages[i].balanceAmount,
                    waivedOff: 0,
                    partyName: this_1.partyName,
                    LRNos: this_1.LRNos[i]
                };
                this_1.billService.storeBill(bill)
                    .subscribe(function (response) {
                    _this.dataService.updateBillNo(_this.partyName, bill.billNo, bill.LRNos)
                        .subscribe(function (response) {
                        if (_this.updateAdvance) {
                            _this.paymentService.updateAdvance(_this.partyName, _this.advanceAmount)
                                .subscribe(function (result) {
                                var divName = 'printDiv' + i;
                                html2canvas(document.getElementById(divName)).then(function (canvas) {
                                    _this.partyName = _this.partyName.replace(/\s/g, '_');
                                    var filename = _this.partyName + "_" + _this.pages[i].billNo + ".pdf";
                                    var imgWidth = 208;
                                    var imgHeight = 300 /*canvas.height * imgWidth / canvas.width*/;
                                    var contentDataURL = canvas.toDataURL('image/png');
                                    var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_7__('p', 'mm', 'a4'); // A4 size page of PDF
                                    var position = 0;
                                    pdf.addImage(contentDataURL, 'img', 0, position, imgWidth, imgHeight);
                                    pdf.save(filename); // Generated PDF
                                    if (!_this.totalBills || i === _this.totalBills - 1)
                                        _this.returnToGenerate();
                                });
                            });
                        }
                        else {
                            var divName = 'printDiv' + i;
                            html2canvas(document.getElementById(divName)).then(function (canvas) {
                                _this.partyName = _this.partyName.replace(/\s/g, '_');
                                var filename = _this.partyName + "_" + _this.pages[i].billNo + ".pdf";
                                var imgWidth = 208;
                                var imgHeight = 300 /*canvas.height * imgWidth / canvas.width*/;
                                var contentDataURL = canvas.toDataURL('image/png');
                                var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_7__('p', 'mm', 'a4'); // A4 size page of PDF
                                var position = 0;
                                pdf.addImage(contentDataURL, 'img', 0, position, imgWidth, imgHeight);
                                pdf.save(filename); // Generated PDF
                                if (!_this.totalBills || i === _this.totalBills - 1)
                                    _this.returnToGenerate();
                            });
                        }
                    }, function (err) {
                        _this.billService.deleteBill(bill.billNo);
                    });
                }, function (err) {
                    alert(err);
                });
            };
            var this_1 = this;
            for (var i = 0; i <= this.totalBills; i++) {
                _loop_1(i);
            }
        }
    };
    PrintBillComponent.prototype.closeDialog = function () {
        var _this = this;
        this.billService.getTotalBill(this.billDate)
            .subscribe(function (response) {
            _this.billNo = response;
            _this.billNo = parseInt(_this.billNo);
            _this.billNo++;
            _this.setBill();
            _this.display = false;
        });
    };
    PrintBillComponent.prototype.returnToGenerate = function () {
        if (this.printMode)
            this.router.navigate(['../../../', 'view'], { relativeTo: this.route });
        else
            this.router.navigate(['../', 'generate'], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('billDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PrintBillComponent.prototype, "things", void 0);
    PrintBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-bill',
            template: __webpack_require__(/*! ./print-bill.component.html */ "./src/app/print-bill/print-bill.component.html"),
            styles: [__webpack_require__(/*! ./print-bill.component.css */ "./src/app/print-bill/print-bill.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _Utils_sharedData_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
            _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_6__["PaymentStorageService"],
            _Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_4__["BillStorageService"]])
    ], PrintBillComponent);
    return PrintBillComponent;
}());



/***/ }),

/***/ "./src/app/print-report/print-report.component.css":
/*!*********************************************************!*\
  !*** ./src/app/print-report/print-report.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-buffer {  }\r\n\r\n.billPdf {\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n}\r\n\r\n.billPdf h1 {\r\n  font-size: 55px;\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf h3 {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  margin: 5px;\r\n}\r\n\r\n.billPdf h5 {\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n\r\n.billPdf span, .billPdf p {\r\n  font-size: 20px;\r\n}\r\n\r\n.totalTable {\r\n  border: none !important;\r\n  border-top: 1px solid !important;\r\n  border-bottom: 1px solid !important;\r\n}\r\n\r\ntable th {\r\n  border: 1px solid;\r\n  padding: 5px;\r\n  height: 38px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\ntable td {\r\n  border: 1px solid;\r\n  padding: 6px 5px;\r\n  height: 30px;\r\n  font-size: 14px;\r\n}\r\n\r\n.billFont {\r\n  color: navy;\r\n}\r\n\r\n.billFont h1, .billFont h3, .billFont h5 {\r\n  color: navy !important;\r\n}\r\n\r\n.billLogo {\r\n  width: 200px;\r\n  height: 80px;\r\n}\r\n\r\n.partyName {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtcmVwb3J0L3ByaW50LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjs7QUFFaEI7RUFDRSx5REFBeUQ7Q0FDMUQ7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtDQUNkOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ByaW50LXJlcG9ydC9wcmludC1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYnVmZmVyIHsgIH1cclxuXHJcbi5iaWxsUGRmIHtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmlsbFBkZiBoMSB7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJpbGxQZGYgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJpbGxQZGYgaDUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJpbGxQZGYgc3BhbiwgLmJpbGxQZGYgcCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udG90YWxUYWJsZSB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDZweCA1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJpbGxGb250IHtcclxuICBjb2xvcjogbmF2eTtcclxufVxyXG5cclxuLmJpbGxGb250IGgxLCAuYmlsbEZvbnQgaDMsIC5iaWxsRm9udCBoNSB7XHJcbiAgY29sb3I6IG5hdnkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJpbGxMb2dvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ucGFydHlOYW1lIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/print-report/print-report.component.html":
/*!**********************************************************!*\
  !*** ./src/app/print-report/print-report.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row px-5\">\n<div class=\"col-md-12 mt-2\" id=\"report\">\n  <p style=\"font-weight: bold\">Report Date: {{date | date:'dd/MM/yyyy'}}</p>\n  <table class=\" col-lg-12 top-buffer\" style=\"margin-left: 1%\">\n    <thead>\n    <tr>\n      <th class=\"text-center\">L.R. No</th>\n      <th class=\"text-center\">Party Name</th>\n      <th class=\"text-center\" width=\"45%\">DESCRIPTION</th>\n      <th class=\"text-center\">WEIGHT</th>\n      <th class=\"text-center \">AMOUNT (Rs.)</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let bill of dailyReports\">\n      <td class=\"text-center\">{{bill.LRNo || ''}}</td>\n      <td>{{bill.name}}</td>\n      <td>{{bill.area ? bill.area + ': ' : ''}} {{bill.item || ''}}</td>\n      <td class=\"text-center\">{{bill.weight || ''}}</td>\n      <td class=\"text-right\" style=\"padding-right: 15px\">{{bill.amount || ''}}</td>\n    </tr>\n    </tbody>\n  </table>\n  <table class=\" col-lg-12\" style=\"margin-left: 1%\">\n    <tbody>\n    <tr class=\"col-lg-12\">\n      <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Cash: </b></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ cashAmount }}</b></td>\n    </tr>\n    <tr class=\"col-lg-12\">\n      <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Total: </b></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ totalAmount }}</b></td>\n    </tr>\n    <tr class=\"col-lg-12\">\n      <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Diesel: </b></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ dieselAmount }}</b></td>\n    </tr>\n    <tr class=\"col-lg-12\">\n      <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Loading/Unloading: </b></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ loadAmount }}</b></td>\n    </tr>\n    <tr class=\"col-lg-12\">\n      <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Miscellaneous: </b></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ miscAmount }}</b></td>\n    </tr>\n    <tr class=\"col-lg-12\">\n      <td class=\"text-center col-lg-1 totalTable\" style=\"border-left: 1px solid !important\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-6 totalTable\"><b style=\"font-weight: bold\">Balance: </b></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-center col-lg-1 totalTable\"></td>\n      <td class=\"text-right col-lg-2 totalTable\" style=\"border-right: 1px solid !important; padding-right: 15px\"><b>{{ balanceAmount }}</b></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/print-report/print-report.component.ts":
/*!********************************************************!*\
  !*** ./src/app/print-report/print-report.component.ts ***!
  \********************************************************/
/*! exports provided: PrintReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintReportComponent", function() { return PrintReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/expense-storage.service */ "./src/app/Utils/expense-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrintReportComponent = /** @class */ (function () {
    function PrintReportComponent(route, dataStorageService, expenseStorageService) {
        this.route = route;
        this.dataStorageService = dataStorageService;
        this.expenseStorageService = expenseStorageService;
        this.dailyReports = [];
        this.totalAmount = 0;
        this.cashAmount = 0;
        this.dieselAmount = 0;
        this.miscAmount = 0;
        this.loadAmount = 0;
        this.balanceAmount = 0;
    }
    PrintReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.date = params['date'];
            _this.endDate = params['endDate'];
            _this.date = new Date(parseInt(_this.date));
            _this.endDate = new Date(parseInt(_this.endDate));
            _this.getInitialData();
        });
        document.getElementsByClassName('topbar')[0].setAttribute('style', 'display:none');
        document.getElementsByClassName('left-sidebar')[0].setAttribute('style', 'display:none');
        document.getElementsByClassName('page-wrapper')[0].setAttribute('style', 'margin-left:0');
    };
    PrintReportComponent.prototype.getInitialData = function () {
        var _this = this;
        var date = new Date();
        date.setDate(this.date.getDate());
        date.setHours(0, 0, 0, 0);
        var expensedate = date.toISOString();
        this.dataStorageService.getDailyReport(this.date, this.endDate)
            .subscribe(function (entries) {
            _this.expenseStorageService.getExpense(expensedate)
                .subscribe(function (expense) {
                _this.totalAmount = 0;
                _this.cashAmount = 0;
                _this.miscAmount = expense[0] ? expense[0]['Misc'] : 0;
                _this.loadAmount = expense[0] ? expense[0]['load'] : 0;
                _this.dieselAmount = expense[0] ? expense[0]['Diesel'] : 0;
                _this.balanceAmount = 0;
                _this.dailyReports = entries;
                _this.dailyReports.forEach(function (report) {
                    _this.totalAmount += report.amount;
                    if (report.billNo === -1)
                        _this.cashAmount += report.amount;
                });
                _this.balanceAmount = _this.totalAmount - (_this.dieselAmount + _this.dieselAmount + _this.loadAmount);
            });
        });
    };
    PrintReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-report',
            template: __webpack_require__(/*! ./print-report.component.html */ "./src/app/print-report/print-report.component.html"),
            styles: [__webpack_require__(/*! ./print-report.component.css */ "./src/app/print-report/print-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _Utils_expense_storage_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseStorageService"]])
    ], PrintReportComponent);
    return PrintReportComponent;
}());



/***/ }),

/***/ "./src/app/view-balance/view-balance.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-balance/view-balance.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".billCheckbox label {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1iYWxhbmNlL3ZpZXctYmFsYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlldy1iYWxhbmNlL3ZpZXctYmFsYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpbGxDaGVja2JveCBsYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/view-balance/view-balance.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-balance/view-balance.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\" (onCreate)=\"created($event)\"\n                      (onDestroy)=\"destroyed($event)\"></simple-notifications>\n\n<div class=\"px-5\">\n  <div class=\"form-group col-md-12\">\n    <h2>View Bill Balances</h2>\n    <hr>\n    <label for=\"name\">Party Name</label>\n    <select id=\"name\" #pname class=\"form-control mat-form-field\">\n      <option value=\"\" selected disabled hidden>Choose Party name...</option>\n      <option *ngFor=\"let name of names\">\n        {{ name }}\n      </option>\n    </select>\n  </div>\n\n  <div class=\"form-group\" style=\"margin-top: -7px;\">\n    <button class=\"btn btn-primary btn-md\" (click)=\"filterResults()\">Search</button>\n  </div>\n\n  <div class=\"balanceDiv\" *ngIf=\"showResult\">\n    <h4>Party Name: {{partyName}}</h4>\n    <br>\n    <br>\n    <div class=\"form-group col-md-12\">\n      <label for=\"name\">Total Bill Unpaid</label>\n      <span>Rs. {{totalBalance}}</span>\n    </div>\n    <div class=\"form-group col-md-12\">\n      <label for=\"name\">Total Entries Unbilled</label>\n      <span>Rs. {{totalUnBilledBalance}}</span>\n    </div>\n    <div class=\"form-group\" style=\"margin-top: -7px;\">\n      <button class=\"btn btn-primary btn-md\" (click)=\"addPayments()\" *ngIf=\"unPaidBills.length > 0\">Add Payment</button>\n      <button class=\"btn btn-primary btn-md\" (click)=\"addPayments()\" *ngIf=\"unPaidBills.length == 0\">Add Advance\n      </button>\n    </div>\n  </div>\n\n\n  <hr *ngIf=\"showResult\">\n\n\n  <div *ngIf=\"showPaymentDetails\">\n    <form [formGroup]=\"addPayment\" (ngSubmit)=\"onSubmit()\" class=\"row \">\n      <div class=\"form-group col-md-12\">\n        <label for=\"pType\">Payment Type</label>\n        <select id=\"pType\" formControlName=\"mode\" class=\"form-control mat-form-field\">\n          <option *ngFor=\"let pType of pTypes\">\n            {{ pType }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-12\">\n        <label for=\"amount\">Amount</label>\n        <input type=\"number\" id=\"amount\" formControlName=\"amount\" (change)=\"adjustBalance()\" name=\"amount\"\n               class=\"form-control\" required>\n      </div>\n      <div class=\"form-group col-md-12\">\n        <label for=\"date\">Date</label>\n        <input type=\"text\" class=\"form-control\" name=\"date\" [maxDate]=\"maxDate\" id=\"date\"\n               formControlName=\"date\" bsDatepicker readonly>\n      </div>\n      <div class=\"form-group col-md-12\" [hidden]=\"addPayment.get('mode').value != 'Cheque'\">\n        <label for=\"bName\">Bank Name</label>\n        <input type=\"text\" id=\"bName\" name=\"bankName\" formControlName=\"bankName\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group col-md-12\" [hidden]=\"addPayment.get('mode').value != 'Cheque'\">\n        <label for=\"cNo\">Cheque Number</label>\n        <input type=\"text\" id=\"cNo\" name=\"chequeNumber\" formControlName=\"chequeNumber\"\n               class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"form-group billCheckbox col-md-12 row\" *ngIf=\"unPaidBills.length > 0\">\n        <label>Unpaid Bills (Amount Paid : {{addPayment.get('amount').value || 0}} / Bills Selected:\n          {{totalAmountSelected}}) </label>\n        <div *ngFor=\"let bill of unPaidBills\" class=\"col-md-2 col-sm-6\">\n          <label>\n            <input type=\"checkbox\"\n                   name=\"options\"\n                   value=\"{{bill.value}}\"\n                   [disabled]=\"addPayment.get('amount').value === 0 || addPayment.get('amount').value === null\"\n                   [(ngModel)]=\"bill.checked\" (change)=\"adjustBalance()\"\n                   [ngModelOptions]=\"{standalone: true}\"/>\n            Bill No:{{bill.billNo}} - Rs.{{bill.balanceAmount}}\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group col-md-12 row billCheckbox\" *ngIf=\"showWaiveOptions\">\n        <label>Select the option to adjust the remaining balance:</label>\n        <div>\n          <label>\n            <input type=\"radio\" name=\"waive\"\n                   value=\"waiveOff\"\n                   [(ngModel)]=\"waiveOff\" (change)=\"disableSubmit = false\"\n                   [ngModelOptions]=\"{standalone: true}\"/>\n            Waive off the negative balance (Rs. {{amountToAdjust}}) for Bill No: {{paidBills[paidBills.length - 1]}}\n          </label>\n        </div>\n        <div>\n          <label>\n            <input type=\"radio\" name=\"waive\"\n                   value=\"adjust\"\n                   [(ngModel)]=\"waiveOff\" (change)=\"disableSubmit = false\"\n                   [ngModelOptions]=\"{standalone: true}\"/>\n            Keep the amount of (Rs. {{amountToAdjust}}) as balance for Bill No: {{paidBills[paidBills.length - 1]}}\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group billCheckbox\" *ngIf=\"showAdvanceOptions\">\n        <label>Select the option to adjust the remaining balance:</label>\n        <div>\n          <label>\n            <input type=\"radio\" name=\"adv\"\n                   value=\"advance\"\n                   [(ngModel)]=\"advance\" (change)=\"disableSubmit = false\"\n                   [ngModelOptions]=\"{standalone: true}\"/>\n            Keep the remaining amount as advance (Rs. {{amountToAdjust}})\n          </label>\n        </div>\n        <div>\n          <label>\n            <input type=\"radio\" name=\"adv\"\n                   value=\"adjust\"\n                   [(ngModel)]=\"advance\" (change)=\"disableSubmit = false\"\n                   [ngModelOptions]=\"{standalone: true}\"/>\n            Adjust the amount of (Rs. {{amountToAdjust}}) in balance for Bill No: {{unSelectedBills[0]}}\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group col-sm-4 pull-right\">\n        <button class=\"btn btn-primary btn-lg\"\n                type=\"button\" (click)=\"closeDialog()\">Cancel\n        </button>\n        <button class=\"btn btn-primary btn-lg\" [disabled]=\"!addPayment.valid || disableSubmit\"\n                type=\"submit\">Submit\n        </button>\n      </div>\n    </form>\n    <hr>\n  </div>\n\n\n  <div class=\"\" [hidden]=\"!displayTable\">\n    <h4 style=\"margin-top: 0;\">Payment Details</h4>\n    <div class=\"form-group col-md-12\">\n      <label for=\"period\">Date Range</label>\n      <select id=\"period\" (change)=\"filterChanged()\" #filter class=\"form-control mat-form-field\">\n        <option *ngFor=\"let opt of paymentViewOptions\" [value]=\"opt.id\">\n          {{ opt.value }}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group col-md-12\" *ngIf=\"showCalendar\">\n      <label>Select Range</label>\n      <input type=\"text\" class=\"form-control\"\n             name=\"date\" placeholder=\"Select Date..\" [(ngModel)]=\"bsRangeValue\" [maxDate]=\"maxDate\" id=\"dateRange\"\n             bsDaterangepicker>\n    </div>\n    <div class=\"form-group \" style=\"margin-top: -7px;\">\n      <button class=\"btn btn-primary btn-lg\" (click)=\"filterPayments()\">Filter Payments</button>\n    </div>\n    <h5 *ngIf=\"startDate != endDate\">Showing result for period: {{startDate | date:'dd/MM/yyyy'}} to\n      {{ endDate | date:'dd/MM/yyyy'}}</h5>\n    <table id=\"billTable\" class=\"display compact\" style=\"width: 100%\">\n      <thead>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tfoot>\n      <tr>\n        <th colspan=\"4\" style=\"text-align:right\">Total:</th>\n        <th colspan=\"1\"></th>\n      </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/view-balance/view-balance.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-balance/view-balance.component.ts ***!
  \********************************************************/
/*! exports provided: ViewBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBalanceComponent", function() { return ViewBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/bill-storage.service */ "./src/app/Utils/bill-storage.service.ts");
/* harmony import */ var _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/payment-storage.service */ "./src/app/Utils/payment-storage.service.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var ViewBalanceComponent = /** @class */ (function () {
    function ViewBalanceComponent(billService, dataService, paymentService, _service) {
        this.billService = billService;
        this.dataService = dataService;
        this.paymentService = paymentService;
        this._service = _service;
        this.showResult = false;
        this.totalAmount = 0;
        this.balanceAmount = 0;
        this.partyName = '';
        this.displayTable = false;
        this.maxDate = new Date();
        this.totalBalance = 0;
        this.totalUnBilledBalance = 0;
        this.showPaymentDetails = false;
        this.amountToAdjust = 0;
        this.totalAmountSelected = 0;
        this.paidBills = [];
        this.billNos = [];
        this.unSelectedBills = [];
        this.showWaiveOptions = false;
        this.showAdvanceOptions = false;
        this.disableSubmit = true;
        this.showCalendar = false;
        this.startDate = new Date();
        this.endDate = new Date();
        this.options = {
            position: ["bottom", "right"],
            timeOut: 1000,
            lastOnBottom: true
        };
        this.table = $('#billTable').DataTable();
        this.pTypes = ['Cash', 'Cheque'];
        this.paymentViewOptions = [
            { 'id': 1, 'value': 'All' },
            { 'id': 2, 'value': 'Last 6 Months' },
            { 'id': 3, 'value': 'Last 12 Months' },
            { 'id': 4, 'value': 'Select Time Period' },
        ];
    }
    ViewBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getNames()
            .subscribe(function (response) {
            _this.names = response;
            _this.names.sort();
            _this.filter.nativeElement.value = '2';
            _this.formInit();
        }, function (err) {
            console.log(err);
        });
    };
    ViewBalanceComponent.prototype.resetValues = function () {
        this.showPaymentDetails = false;
        this.amountToAdjust = 0;
        this.totalAmountSelected = 0;
        this.paidBills = [];
        this.billNos = [];
        this.unSelectedBills = [];
        this.showWaiveOptions = false;
        this.showAdvanceOptions = false;
        this.disableSubmit = true;
        this.totalUnBilledBalance = 0;
        this.totalBalance = 0;
    };
    ViewBalanceComponent.prototype.filterChanged = function () {
        this.showCalendar = this.filter.nativeElement.value === "4";
    };
    ViewBalanceComponent.prototype.filterPayments = function () {
        var val = this.filter.nativeElement.value;
        var elements = this.paymentDetails;
        var startDate = new Date(new Date().setHours(0, 0, 0, 0));
        var endDate = new Date();
        startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        if (val === '1') {
            this.startDate = this.endDate;
        }
        else if (val === '2') {
            startDate.setMonth(startDate.getMonth() - 6);
            elements = elements.filter(function (ele) {
                return new Date(ele.date) >= startDate;
            });
        }
        else if (val === '3') {
            startDate.setMonth(startDate.getMonth() - 12);
            elements = elements.filter(function (ele) {
                return new Date(ele.date) >= startDate;
            });
        }
        else {
            startDate = new Date(this.bsRangeValue[0].setHours(0, 0, 0, 0));
            endDate = new Date(this.bsRangeValue[1].setHours(23, 59, 59, 0));
            elements = elements.filter(function (ele) {
                return new Date(ele.date) >= startDate && new Date(ele.date) <= endDate;
            });
        }
        if (elements.length && val !== '1') {
            this.startDate = startDate;
            this.endDate = endDate;
        }
        this.drawTable(elements);
    };
    ViewBalanceComponent.prototype.adjustBalance = function () {
        this.amountToAdjust = 0;
        this.totalAmountSelected = 0;
        for (var bill in this.unPaidBills) {
            if (this.unPaidBills[bill].checked) {
                this.totalAmountSelected += this.unPaidBills[bill].balanceAmount;
                if (this.paidBills.indexOf(this.unPaidBills[bill].billNo) === -1)
                    this.paidBills.push(this.unPaidBills[bill].billNo);
                if (this.unSelectedBills.indexOf(this.unPaidBills[bill].billNo) !== -1)
                    this.unSelectedBills.splice(this.unSelectedBills.indexOf(this.unPaidBills[bill].billNo), 1);
            }
            else {
                if (this.paidBills.indexOf(this.unPaidBills[bill].billNo) !== -1)
                    this.paidBills.splice(this.paidBills.indexOf(this.unPaidBills[bill].billNo), 1);
                if (this.unSelectedBills.indexOf(this.unPaidBills[bill].billNo) === -1)
                    this.unSelectedBills.push(this.unPaidBills[bill].billNo);
            }
        }
        this.paidBills.sort();
        this.unSelectedBills.sort();
        this.amountToAdjust = this.addPayment.value.amount - this.totalAmountSelected;
        if (this.amountToAdjust === 0 || this.paidBills.length === 0) {
            this.showWaiveOptions = false;
            this.showAdvanceOptions = false;
        }
        else {
            this.disableSubmit = true;
            if (this.amountToAdjust < 0) {
                this.showWaiveOptions = true;
                this.showAdvanceOptions = false;
            }
            else {
                this.showAdvanceOptions = true;
                this.showWaiveOptions = false;
            }
        }
        if (!this.amountToAdjust)
            this.disableSubmit = false;
    };
    ViewBalanceComponent.prototype.filterResults = function () {
        var _this = this;
        this.partyName = this.pName.nativeElement.value;
        this.resetValues();
        this.paymentService.getPayments(this.partyName)
            .subscribe(function (response) {
            if (response) {
                _this.paymentDetails = response;
                _this.filterPayments();
            }
            _this.dataService.nonGeneratedEntriesAmount(_this.partyName)
                .subscribe(function (response) {
                var unBilledEntries = response;
                if (unBilledEntries.length) {
                    unBilledEntries.forEach(function (entry) {
                        _this.totalUnBilledBalance += entry.amount;
                    });
                }
            });
            _this.billService.getUnPaidBills(_this.partyName)
                .subscribe(function (response) {
                _this.totalBalance = 0;
                _this.unPaidBills = response;
                if (_this.unPaidBills.length) {
                    for (var bill in _this.unPaidBills) {
                        _this.totalBalance += response[bill].balanceAmount;
                        _this.unSelectedBills.push(response[bill].billNo);
                    }
                    _this.unSelectedBills.sort();
                    _this.billNos = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(_this.unSelectedBills);
                }
                else {
                    _this.disableSubmit = false;
                }
                _this.showResult = true;
            }, function (err) {
                _this._service.error('Message', err, {
                    timeOut: 1000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 10
                });
            });
        }, function (err) {
            _this._service.error('Message', err, {
                timeOut: 1000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            });
        });
    };
    ViewBalanceComponent.prototype.addPayments = function () {
        this.showPaymentDetails = true;
        this.showWaiveOptions = false;
        this.showAdvanceOptions = false;
        this.waiveOff = '';
        this.advance = '';
        this.totalAmountSelected = 0;
        this.unPaidBills.forEach(function (bill) {
            bill.checked = false;
        });
    };
    ViewBalanceComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.unPaidBills.length) {
            var bills_1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.unPaidBills);
            var unmatchedAmount = this.amountToAdjust;
            if (this.amountToAdjust) {
                if (this.amountToAdjust > 0) {
                    if (this.advance === 'adjust') {
                        bills_1 = bills_1.filter(function (bill) {
                            if (bill.billNo === _this.unSelectedBills[0]) {
                                bill.balanceAmount -= _this.amountToAdjust;
                            }
                            else {
                                if (_this.paidBills.indexOf(bill.billNo) !== -1)
                                    bill.balanceAmount = 0;
                            }
                            return bill;
                        });
                        unmatchedAmount = 0;
                    }
                    else {
                        bills_1 = bills_1.filter(function (bill) {
                            if (_this.paidBills.indexOf(bill.billNo) !== -1)
                                bill.balanceAmount = 0;
                            return bill;
                        });
                    }
                }
                else {
                    if (this.waiveOff === 'waiveOff') {
                        bills_1 = bills_1.filter(function (bill) {
                            if (bill.billNo === _this.paidBills[_this.paidBills.length - 1]) {
                                bill.balanceAmount = 0;
                                bill.waivedOff = Math.abs(_this.amountToAdjust);
                            }
                            else {
                                if (_this.paidBills.indexOf(bill.billNo) !== -1)
                                    bill.balanceAmount = 0;
                            }
                            return bill;
                        });
                    }
                    else {
                        bills_1 = bills_1.filter(function (bill) {
                            if (bill.billNo === _this.paidBills[_this.paidBills.length - 1]) {
                                bill.balanceAmount = Math.abs(_this.amountToAdjust);
                            }
                            else {
                                if (_this.paidBills.indexOf(bill.billNo) !== -1)
                                    bill.balanceAmount = 0;
                            }
                            return bill;
                        });
                    }
                    unmatchedAmount = 0;
                }
            }
            else if (this.amountToAdjust === 0 && this.paidBills.length !== 0) {
                bills_1 = bills_1.filter(function (bill) {
                    if (_this.paidBills.indexOf(bill.billNo) !== -1)
                        bill.balanceAmount = 0;
                    return bill;
                });
            }
            this.paymentService.addPayment(this.partyName, this.addPayment.value, unmatchedAmount)
                .subscribe(function (response) {
                _this.billService.updateBalance(_this.billNos, bills_1)
                    .subscribe(function (response) {
                    _this._service.success('Message', 'Succesfully Added', {
                        timeOut: 5000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: false,
                        maxLength: 10
                    });
                    _this.filterResults();
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
            //console.log(this, bills);
        }
        else {
            this.addPayment.value.mode = "Advance / " + this.addPayment.value.mode;
            this.paymentService.addPayment(this.partyName, this.addPayment.value, this.addPayment.value.amount)
                .subscribe(function (response) {
                _this._service.success('Message', 'Succesfully Added', {
                    timeOut: 1000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 10
                });
                _this.filterResults();
            }, function (err) {
                _this._service.error('Message', err, {
                    timeOut: 1000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 10
                });
            });
        }
        this.paymentDetails.push(this.addPayment.value);
        this.drawTable(this.paymentDetails);
        this.closeDialog();
    };
    ViewBalanceComponent.prototype.closeDialog = function () {
        this.formInit();
        this.showPaymentDetails = false;
    };
    ViewBalanceComponent.prototype.drawTable = function (payments) {
        if (!payments.length) {
            this._service.warn('Message', 'No Payments found', {
                timeOut: 1000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            });
        }
        else {
            this.table.destroy();
            this.displayTable = true;
            this.table = $('#billTable').DataTable({
                'data': payments,
                'order': [[0, 'desc']],
                'columns': [
                    {
                        title: 'Date',
                        'data': function (data) {
                            return new Date(data.date);
                        },
                        'render': function (data) {
                            return "<span style=\"display: none\">" + Date.parse(data) + " </span><span>" + new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(data, 'dd/MM/yyyy') + "</span>";
                        }
                    },
                    {
                        title: 'Payment Mode',
                        'data': 'mode'
                    },
                    {
                        title: 'Bank Name',
                        'data': 'bankName'
                    },
                    {
                        title: 'Cheque No',
                        'data': 'chequeNumber'
                    },
                    {
                        title: 'Amount (Rs.)',
                        'data': 'amount'
                    }
                ],
                footerCallback: function (row, data, start, end, display) {
                    var api = this.api();
                    var pageTotal = api
                        .column(4, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    // Update footer
                    $(api.column(4).footer()).html(pageTotal);
                }
            });
        }
    };
    ViewBalanceComponent.prototype.formInit = function () {
        var date = new Date();
        var chequeNumber = '';
        var bankName = '';
        var amount;
        var mode = 'Cash';
        this.addPayment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'bankName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](bankName),
            'mode': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](mode),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](amount, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'chequeNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](chequeNumber)
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pname'),
        __metadata("design:type", Object)
    ], ViewBalanceComponent.prototype, "pName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", Object)
    ], ViewBalanceComponent.prototype, "filter", void 0);
    ViewBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-balance',
            template: __webpack_require__(/*! ./view-balance.component.html */ "./src/app/view-balance/view-balance.component.html"),
            styles: [__webpack_require__(/*! ./view-balance.component.css */ "./src/app/view-balance/view-balance.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_bill_storage_service__WEBPACK_IMPORTED_MODULE_4__["BillStorageService"],
            _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"],
            _Utils_payment_storage_service__WEBPACK_IMPORTED_MODULE_5__["PaymentStorageService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]])
    ], ViewBalanceComponent);
    return ViewBalanceComponent;
}());



/***/ }),

/***/ "./src/app/view-bill/view-bill.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-bill/view-bill.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYmlsbC92aWV3LWJpbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-bill/view-bill.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-bill/view-bill.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\" (onCreate)=\"created($event)\"\r\n                      (onDestroy)=\"destroyed($event)\"></simple-notifications>\r\n\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<div class=\"px-5\">\r\n\r\n  <h2>View All the Bills</h2>\r\n\r\n  <hr>\r\n\r\n  <div class=\"form-group row col-md-12\">\r\n\r\n    <div class=\"col-md-6\">\r\n      <label for=\"name\">Party Name</label>\r\n      <select id=\"name\" #pname class=\"form-control mat-form-field\">\r\n        <option value=\"\" selected disabled hidden>Choose Party name...</option>\r\n        <option *ngFor=\"let name of names\">\r\n          {{ name }}\r\n        </option>\r\n      </select>\r\n\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label for=\"lrno\">LR No</label>\r\n      <input type=\"number\" id=\"LRNo\" name=\"LRNo\" #lrno class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row col-md-12\">\r\n    <div class=\"col-md-12\">\r\n\r\n    <label for=\"period\">Date Range</label>\r\n    <select id=\"period\" (change)=\"filterChanged()\" #filter class=\"form-control mat-form-field\">\r\n      <option *ngFor=\"let opt of billViewOptions\" [value]=\"opt.id\">\r\n        {{ opt.value }}\r\n      </option>\r\n    </select>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group col-lg-8\" *ngIf=\"showCalendar\">\r\n    <label>Select Range</label>\r\n    <input type=\"text\" class=\"form-control\"\r\n           name=\"date\" placeholder=\"Select Date..\" [(ngModel)]=\"bsRangeValue\" [maxDate]=\"maxDate\" id=\"date\"\r\n           bsDaterangepicker readonly>\r\n  </div>\r\n  <div class=\"form-group row col-md-12\" style=\"margin-top: -7px;\">\r\n    <button class=\"btn btn-primary btn-md\" (click)=\"filterResults()\">Search</button>\r\n    <div class=\"col-md-10 text-right\">\r\n      <p *ngIf=\"showPartyName\"><b>Party Name: {{partyName}}</b></p>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n  <div class=\"\" [hidden]=\"!showTable\">\r\n    <table id=\"billTable\" class=\"display compact\" style=\"width: 100%\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"width: 5% !important;\"></th>\r\n        <th></th>\r\n        <th></th>\r\n        <th></th>\r\n        <th></th>\r\n        <th></th>\r\n        <th></th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n      </thead>\r\n      <tfoot>\r\n      <tr>\r\n        <th colspan=\"8\" style=\"text-align:right\">Total:</th>\r\n        <th colspan=\"2\"></th>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/view-bill/view-bill.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-bill/view-bill.component.ts ***!
  \**************************************************/
/*! exports provided: ViewBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillComponent", function() { return ViewBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/data-storage.service */ "./src/app/Utils/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var ViewBillComponent = /** @class */ (function () {
    function ViewBillComponent(dataStorageService, route, router, confirmationService, _service) {
        this.dataStorageService = dataStorageService;
        this.route = route;
        this.router = router;
        this.confirmationService = confirmationService;
        this._service = _service;
        this.bills = [];
        this.table = $('#billTable').DataTable();
        this.showTable = false;
        this.showCalendar = false;
        this.showPartyName = false;
        this.filteredBills = [];
        this.maxDate = new Date();
        this.options = {
            position: ["bottom", "right"],
            timeOut: 1000,
            lastOnBottom: true
        };
        this.partyName = '';
        this.billViewOptions = [
            { 'id': 1, 'value': 'All' },
            { 'id': 2, 'value': 'Today' },
            { 'id': 3, 'value': 'Current Month' },
            { 'id': 4, 'value': 'Last Month & Current Month' },
            { 'id': 5, 'value': 'Select Time Period' },
        ];
    }
    ViewBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStorageService.getNames()
            .subscribe(function (response) {
            _this.names = response;
            _this.names.sort();
        }, function (err) {
            console.log(err);
        });
    };
    ViewBillComponent.prototype.filterChanged = function () {
        this.showCalendar = this.filter.nativeElement.value === "5";
    };
    ViewBillComponent.prototype.filterResults = function () {
        var _this = this;
        var index = this.filter.nativeElement.value;
        var filterName = this.pname.nativeElement.value;
        var lrno = this.lrno.nativeElement.value;
        if (index != '5') {
            this.dataStorageService.getEntries(filterName, lrno, index)
                .subscribe(function (response) {
                _this.drawTable(response);
            });
        }
        else {
            this.dataStorageService.getEntries(filterName, lrno, index, this.bsRangeValue[0].valueOf(), this.bsRangeValue[1].valueOf())
                .subscribe(function (response) {
                _this.drawTable(response);
            });
        }
    };
    ViewBillComponent.prototype.deleteBill = function (index) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this bill ?',
            accept: function () {
                _this.dataStorageService.deleteEntry(index)
                    .subscribe(function (response) {
                    var bills = _this.filteredBills.filter(function (bill) { return bill._id != index; });
                    _this.drawTable(bills);
                }, function (err) {
                    _this._service.error('Message', err.message, {
                        timeOut: 1000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: false,
                        maxLength: 10
                    });
                });
            }
        });
    };
    ViewBillComponent.prototype.drawTable = function (bills) {
        var _this = this;
        if (!bills.length) {
            this.showTable = false;
            this._service.warn('Message', 'No bills found', {
                timeOut: 1000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            });
        }
        else {
            this.partyName = bills[0].name;
            this.showPartyName = !!this.lrno.nativeElement.value;
            this.filteredBills = bills;
            this.table.destroy();
            $('#billTable').empty();
            this.showTable = true;
            this.table = $('#billTable').DataTable({
                "data": bills,
                "order": [[1, "desc"]],
                "columns": [
                    {
                        title: "S. No",
                        data: "_id",
                        bSortable: false,
                        width: "5%"
                    },
                    {
                        title: "Date",
                        "data": function (data) {
                            return new Date(data.date);
                        },
                        "render": function (data) {
                            return "<span style=\"display: none\">" + Date.parse(data) + " </span><span>" + new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(data, 'dd/MM/yyyy') + "</span>";
                        }
                    },
                    {
                        title: "LRNo",
                        "data": "LRNo"
                    },
                    {
                        title: "Area",
                        "data": "area"
                    },
                    {
                        title: "Particulars",
                        "data": "item"
                    },
                    {
                        title: "Weight (Kgs)",
                        "data": "weight"
                    },
                    {
                        title: "Rate (/Kg)",
                        "data": "rate"
                    },
                    {
                        title: "Amount (Rs.)",
                        "data": "amount"
                    },
                    {
                        title: "",
                        "data": function (data) {
                            if (data.billGenerated) {
                                if (data.billNo === -1) {
                                    if (data.paymentDetails) {
                                        var pData = data.paymentDetails;
                                        return pData.mode === 'Cash' ? "<span style=\"color: green\">Paid Cash (" + new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(pData.paymentDate, 'dd/MM/yyyy') + ")</span>" :
                                            "<span style=\"color: green\">Paid Cheque (" + new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(pData.paymentDate, 'dd/MM/yyyy') + ", " + pData.bankName + ", " + pData.chequeNumber + ")</span>";
                                    }
                                    return '<span style="color: green">Paid Cash</span>';
                                }
                                return '<a href="javascript:void(0)">Bill No: ' + data.billNo + '</a>';
                            }
                            return '<a href="javascript:void(0)">Edit</a> | <a href="javascript:void(0)">Delete</a>';
                        },
                        bSortable: false
                    }
                ],
                rowCallback: function (row, data, index) {
                    $('td:eq(8) a:eq(0)', row).off('click');
                    $('td:eq(8) a:eq(1)', row).off('click');
                    $('td:eq(8) a:eq(0)', row).on('click', function () {
                        if (data.billGenerated) {
                            _this.router.navigate(['../', 'print', data.billNo, data.LRNo], { relativeTo: _this.route });
                        }
                        else {
                            _this.router.navigate(['../', 'add', data._id], { relativeTo: _this.route });
                        }
                    });
                    $('td:eq(8) a:eq(1)', row).on('click', function () {
                        _this.deleteBill(data._id);
                    });
                    $('td:eq(0)', row).html(index + 1);
                    return row;
                },
                footerCallback: function (row, data, start, end, display) {
                    var api = this.api();
                    var pageTotal = api
                        .column(8, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    // Update footer
                    $(api.column(8).footer()).html(pageTotal);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", Object)
    ], ViewBillComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pname'),
        __metadata("design:type", Object)
    ], ViewBillComponent.prototype, "pname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lrno'),
        __metadata("design:type", Object)
    ], ViewBillComponent.prototype, "lrno", void 0);
    ViewBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-bill',
            template: __webpack_require__(/*! ./view-bill.component.html */ "./src/app/view-bill/view-bill.component.html"),
            styles: [__webpack_require__(/*! ./view-bill.component.css */ "./src/app/view-bill/view-bill.component.css")]
        }),
        __metadata("design:paramtypes", [_Utils_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])
    ], ViewBillComponent);
    return ViewBillComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    // apiUrl: "http://localhost:8080/",
    apiUrl: "",
    production: false
};
/* var cursor = db.getCollection('entries').find({"billNo": -1, "paymentDetails.paymentDate": {"$exists": true, "$type": 2 }});
while (cursor.hasNext()) {
    var doc = cursor.next();
    db.getCollection('entries').update(
        {"_id" : doc._id},
        {"$set" : {"paymentDetails.paymentDate" : new ISODate(doc.paymentDetails.paymentDate)}}
    )
}; */


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\JantaTransUpdatedUI\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map