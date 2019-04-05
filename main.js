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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<emails-editor></emails-editor>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'EmailsEditor';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'rtb-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _emails_editor_emails_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emails-editor/emails-editor.component */ "./src/app/emails-editor/emails-editor.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _emails_editor_emails_editor_component__WEBPACK_IMPORTED_MODULE_5__["EmailsEditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.html":
/*!************************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form\">\n    <div class=\"form-content\">\n      <div class=\"form-content-heading\">\n        Share <span class=\"form-content-heading-bold\">Board name</span> with other\n      </div>\n      <div #wrapper (click)=\"onWrapperFocus(form)\" class=\"form-content-input-wrapper\">\n        <div *ngFor=\"let email of emails\" \n              class=\"emails-wrapper\">\n          <div class=\"valid-email\"\n                *ngIf=\"email.isValid\">\n            <div [innerHtml]=\"email.email\"></div>\n            <button (click)=\"removeItself($event)\"\n                    class=\"remove-btn\">x</button>\n          </div>\n          \n          <span *ngIf=\"!email.isValid\" \n                [innerHtml]=\"email.email\"\n                class=\"invalid-email\">\n          </span>\n        </div>\n        <textarea #form \n                  (keyup.enter)=\"onEnter(form)\" \n                  (keyup.backspace)=\"removeLastOne(form)\"\n                  (keyup)=\"onKeyUp(form)\"\n                  (blur)=\"onBlur(form)\"\n                  class=\"form-content-input\" \n                  rows=\"1\"\n                  placeholder=\"add more people...\"></textarea>\n          \n      </div>\n    </div>\n    <div class=\"form-buttons\">\n        <button type=\"button\" \n                class=\"btn btn-md btn-primary add-email-btn\"\n                (click)=\"addRandomEmail()\">Add email</button>\n        <button type=\"button\" \n                class=\"btn btn-md btn-primary get-rn-email-btn\"\n                (click)=\"emailsCount()\">Get email count</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.scss":
/*!************************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  width: 502px;\n  margin: 200px auto; }\n  .form .form-content {\n    padding: 28px 40px 30px 40px;\n    background: #F5F5F5; }\n  .form .form-content .form-content-heading {\n      font-size: 20px;\n      font-family: 'Open Sans'; }\n  .form .form-content .form-content-heading .form-content-heading-bold {\n        font-family: 'Open Sans Bold'; }\n  .form .form-content .form-content-input-wrapper {\n      width: 100%;\n      margin-top: 32px;\n      background: white;\n      height: 100px;\n      overflow: hidden;\n      overflow-y: auto;\n      padding: 5px 10px;\n      display: inline-block; }\n  .form .form-content .form-content-input-wrapper .emails-wrapper {\n        width: auto;\n        position: relative;\n        display: inline-flex; }\n  .form .form-content .form-content-input-wrapper .emails-wrapper .valid-email {\n          background-color: #D4E4FF;\n          border-radius: 15px;\n          padding: 2px 10px;\n          margin: 0 8px 2px 0;\n          vertical-align: super;\n          width: auto;\n          position: relative;\n          display: inline-flex; }\n  .form .form-content .form-content-input-wrapper .emails-wrapper .valid-email .remove-btn {\n            background-color: transparent;\n            border: none;\n            outline: none; }\n  .form .form-content .form-content-input-wrapper .emails-wrapper .invalid-email {\n          border-bottom: 1px dotted red;\n          vertical-align: super;\n          padding: 1px 2px;\n          margin: 0 8px 2px 0; }\n  .form .form-content .form-content-input-wrapper .form-content-input {\n        width: 100%;\n        border: none;\n        outline: none;\n        overflow-x: hidden;\n        overflow-y: hidden;\n        resize: none;\n        padding: 0; }\n  .form .form-buttons {\n    font-family: 'Open Sans Light';\n    padding: 30px 40px 0px 40px;\n    background: white; }\n  .form .form-buttons button {\n      font-size: 14px;\n      padding: 5px 18px 8px 15px;\n      letter-spacing: 0.1px; }\n  .form .form-buttons .get-rn-email-btn {\n      margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWxzLWVkaXRvci9DOlxcVXNlcnNcXNCk0LXQtNC+0YBcXHJ0Yi10ZXN0L3NyY1xcYXBwXFxlbWFpbHMtZWRpdG9yXFxlbWFpbHMtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBRnRCO0lBSVEsNEJBQTRCO0lBQzVCLG1CQUFtQixFQUFBO0VBTDNCO01BT1ksZUFBZTtNQUNmLHdCQUF3QixFQUFBO0VBUnBDO1FBVWdCLDZCQUE2QixFQUFBO0VBVjdDO01BY1ksV0FBVztNQUNYLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLHFCQUFxQixFQUFBO0VBckJqQztRQXVCZ0IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixvQkFBb0IsRUFBQTtFQXpCcEM7VUEyQm9CLHlCQUF5QjtVQUN6QixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixxQkFBcUI7VUFDckIsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixvQkFBb0IsRUFBQTtFQWxDeEM7WUFvQ3dCLDZCQUE2QjtZQUM3QixZQUFZO1lBQ1osYUFBYSxFQUFBO0VBdENyQztVQTBDb0IsNkJBQTZCO1VBQzdCLHFCQUFxQjtVQUNyQixnQkFBZ0I7VUFDaEIsbUJBQW1CLEVBQUE7RUE3Q3ZDO1FBaURnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVLEVBQUE7RUF2RDFCO0lBNERRLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsaUJBQWlCLEVBQUE7RUE5RHpCO01BZ0VZLGVBQWU7TUFDZiwwQkFBMEI7TUFDMUIscUJBQXFCLEVBQUE7RUFsRWpDO01BcUVZLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1haWxzLWVkaXRvci9lbWFpbHMtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgd2lkdGg6IDUwMnB4O1xyXG4gICAgbWFyZ2luOiAyMDBweCBhdXRvO1xyXG4gICAgLmZvcm0tY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMjhweCA0MHB4IDMwcHggNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgICAgIC5mb3JtLWNvbnRlbnQtaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAuZm9ybS1jb250ZW50LWhlYWRpbmctYm9sZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBCb2xkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1jb250ZW50LWlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC5lbWFpbHMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgLnZhbGlkLWVtYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFNEZGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweCAycHggMDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmUtYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW52YWxpZC1lbWFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweCAycHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jb250ZW50LWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0tYnV0dG9ucyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNDBweCAwcHggNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxOHB4IDhweCAxNXB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5nZXQtcm4tZW1haWwtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEditorComponent", function() { return EmailsEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailsEditorComponent = /** @class */ (function () {
    function EmailsEditorComponent() {
        this.emails = [];
        this.regExpEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    EmailsEditorComponent.prototype.isValidEmail = function (value) {
        return this.regExpEmail.test(value);
    };
    EmailsEditorComponent.prototype.removeLastOne = function (element) {
        var emails = this.emails;
        if (!element.value.length) {
            emails.splice(emails.length - 1, 1);
            this.emails = emails;
        }
    };
    EmailsEditorComponent.prototype.emailsCount = function () {
        alert(this.emails.length);
    };
    EmailsEditorComponent.prototype.addRandomEmail = function () {
        var name = this.randomString(6);
        var mail = this.randomString(4);
        var domain = this.randomString(2);
        var randomEmail = name + "@" + mail + "." + domain;
        if (this.isValidEmail(randomEmail)) {
            this.emails.push({
                email: randomEmail,
                isValid: true,
                id: this.emails.length
            });
        }
        else {
            console.log("Even random string could not be fine enough");
        }
    };
    EmailsEditorComponent.prototype.randomString = function (length) {
        var string = "";
        var randomAscii;
        for (var i = 0; i < length; i++) {
            randomAscii = Math.floor((Math.random() * 25) + 97);
            string += String.fromCharCode(randomAscii);
        }
        return string;
    };
    EmailsEditorComponent.prototype.removeItself = function (event) {
        var emails = this.emails;
        var parentText = event.currentTarget.parentElement.parentElement.textContent;
        var parentContent = parentText.substring(0, parentText.length - 1);
        // dirty
        var result = emails.filter(function (email) { return email.email !== parentContent; });
        this.emails = result;
    };
    EmailsEditorComponent.prototype.onEnter = function (element) {
        var value = element.value;
        if (value) {
            this.cleanInput(element);
            if (this.isValidEmail(value)) {
                this.emails.push({
                    email: value,
                    isValid: true,
                    id: this.emails.length
                });
            }
            else {
                this.emails.push({
                    email: value,
                    isValid: false,
                    id: this.emails.length
                });
            }
        }
    };
    EmailsEditorComponent.prototype.onKeyUp = function (element) {
        var value = element.value;
        if (value.indexOf(",") > -1) {
            element.value = value.substring(0, value.length - 1);
            this.onEnter(element);
        }
        else {
            if (this.isValidEmail(value)) {
                this.onEnter(element);
            }
        }
    };
    EmailsEditorComponent.prototype.onBlur = function (element) {
        this.onEnter(element);
    };
    EmailsEditorComponent.prototype.onWrapperFocus = function (element) {
        element.focus();
    };
    EmailsEditorComponent.prototype.cleanInput = function (element) {
        element.value = null;
    };
    EmailsEditorComponent.prototype.ngOnInit = function () {
    };
    EmailsEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'emails-editor',
            template: __webpack_require__(/*! ./emails-editor.component.html */ "./src/app/emails-editor/emails-editor.component.html"),
            styles: [__webpack_require__(/*! ./emails-editor.component.scss */ "./src/app/emails-editor/emails-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailsEditorComponent);
    return EmailsEditorComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Федор\rtb-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map