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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n\r\n<!-- <app-user-preferences></app-user-preferences>\r\n\r\n<br>\r\n\r\n<app-passive-dialogues></app-passive-dialogues>\r\n\r\n<br> -->\r\n\r\n<app-table></app-table>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_preferences_user_preferences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-preferences/user-preferences.component */ "./src/app/user-preferences/user-preferences.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _passive_dialogues_passive_dialogues_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passive-dialogues/passive-dialogues.component */ "./src/app/passive-dialogues/passive-dialogues.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_preferences_user_preferences_component__WEBPACK_IMPORTED_MODULE_5__["UserPreferencesComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _passive_dialogues_passive_dialogues_component__WEBPACK_IMPORTED_MODULE_8__["PassiveDialoguesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav button {\r\n    float: right;\r\n    margin-left: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \r\n  class=\"nav\"\r\n  >\r\n\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"reportBug()\"\r\n    >Report Bug</button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"requestFeature()\"\r\n    >Feature Request</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.reportBug = function () {
        window.open("https://github.com/josemachado-dev/improved-broccoli/issues/new/choose", "_blank");
    };
    NavBarComponent.prototype.requestFeature = function () {
        window.open("https://github.com/josemachado-dev/improved-broccoli/issues/new/choose", "_blank");
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/passive-dialogues/passive-dialogues.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/passive-dialogues/passive-dialogues.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea\r\n{\r\n  width:99.5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc2l2ZS1kaWFsb2d1ZXMvcGFzc2l2ZS1kaWFsb2d1ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYXNzaXZlLWRpYWxvZ3Vlcy9wYXNzaXZlLWRpYWxvZ3Vlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWFcclxue1xyXG4gIHdpZHRoOjk5LjUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/passive-dialogues/passive-dialogues.component.html":
/*!********************************************************************!*\
  !*** ./src/app/passive-dialogues/passive-dialogues.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <input\r\n    type=\"file\"\r\n    (change)=\"onFileSelected($event)\"\r\n    accept=\".json\">\r\n\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"openScript()\"\r\n  >Open Script</button>\r\n\r\n  <br>\r\n\r\n  <button \r\n    type=\"button\"\r\n    (click)=\"saveScript()\"\r\n  >Save Script</button>\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div>\r\n\r\n  Script:\r\n  <input\r\n    [(ngModel)]=\"scriptName\"\r\n    placeholder=\"Script Name\"\r\n  >\r\n\r\n  <br>\r\n\r\n  <textarea\r\n    placeholder=\"This is where you'll (eventually) write your script!\"\r\n    rows=25\r\n    [attr.spellcheck]=\"spellcheckActive\"\r\n    [(ngModel)]=\"textareaText\"\r\n    ></textarea>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/passive-dialogues/passive-dialogues.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/passive-dialogues/passive-dialogues.component.ts ***!
  \******************************************************************/
/*! exports provided: PassiveDialoguesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassiveDialoguesComponent", function() { return PassiveDialoguesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PassiveDialoguesComponent = /** @class */ (function () {
    function PassiveDialoguesComponent() {
        this.selectedFile = null;
        this.scriptName = "";
        this.textareaText = "";
        this.spellcheckActive = JSON.parse(localStorage.getItem("spellchecker"));
    }
    PassiveDialoguesComponent.prototype.ngOnInit = function () {
    };
    PassiveDialoguesComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    PassiveDialoguesComponent.prototype.openScript = function () {
        var _this = this;
        if (this.selectedFile != null) {
            var fr = new FileReader();
            fr.onload = function (e) {
                var loadedFile = JSON.parse(e.target.result);
                _this.textareaText = loadedFile;
                //Script name = uploaded file name, minus the ".json"
                _this.scriptName = _this.selectedFile.name.substring(0, _this.selectedFile.name.length - 5);
            };
            fr.readAsText(this.selectedFile);
        }
    };
    PassiveDialoguesComponent.prototype.saveScript = function () {
        var fileContent = JSON.stringify(this.textareaText);
        var fileToDownload = new Blob([fileContent], { type: "application/json;charset=utf-8" });
        if (this.scriptName != "") {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(fileToDownload, this.scriptName + ".json");
        }
        else {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(fileToDownload, "Broccoli_NewScript.json");
        }
    };
    PassiveDialoguesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passive-dialogues',
            template: __webpack_require__(/*! ./passive-dialogues.component.html */ "./src/app/passive-dialogues/passive-dialogues.component.html"),
            styles: [__webpack_require__(/*! ./passive-dialogues.component.css */ "./src/app/passive-dialogues/passive-dialogues.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PassiveDialoguesComponent);
    return PassiveDialoguesComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\r\n    background-color: rgb(40, 250, 40);\r\n    padding: 0.5em;\r\n}\r\n\r\ntr {\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: rgb(200, 200, 200);\r\n}\r\n\r\ntr:hover {\r\n    background-color: rgba(150, 150, 150);\r\n}\r\n\r\ninput:focus {\r\n    border: 2px solid rgb(50, 50, 50);\r\n}\r\n\r\nbutton {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgMjUwLCA0MCk7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxufVxyXG5cclxudHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbn1cclxudHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE1MCwgMTUwKTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDUwLCA1MCwgNTApO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <input\r\n    type=\"file\"\r\n    (change)=\"onFileSelected($event)\"\r\n    accept=\".json\">\r\n\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"openTable()\"\r\n  >Open Table</button>\r\n\r\n  <br>\r\n\r\n  <button \r\n    type=\"button\"\r\n    (click)=\"saveTable()\"\r\n  >Save Table</button>\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div>\r\n  <button\r\n    type=\"button\"\r\n   (click)=\"testTemplate()\"\r\n  >Test Template</button>\r\n</div>\r\n\r\n<br>\r\n\r\n<div>\r\n\r\n  Table:\r\n  <input\r\n    [(ngModel)]=\"tableName\"\r\n    placeholder=\"Table Name\"\r\n  >\r\n\r\n  <table>\r\n    <thead>\r\n\r\n      <th>#</th>\r\n\r\n      <th\r\n        *ngFor=\"let column of columns;\r\n        let index = index;\r\n        trackBy: trackByIndex('title', index)\"\r\n        (click)=\"editColumnTitle(index, $event)\"\r\n        class=\"column-title\"\r\n      >\r\n        <input\r\n          [hidden]=\"editColumnTitleIndex != index\"\r\n          [(ngModel)]=\"columns[index]\"\r\n          [attr.spellcheck]=\"spellcheckActive\"\r\n        >\r\n        <span\r\n          [hidden]=\"editColumnTitleIndex == index\"\r\n        >{{columns[index]}}</span>\r\n\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"removeColumn(index)\"\r\n        >X</button>\r\n      </th>\r\n\r\n      <th>\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"addColumn()\"\r\n        >Add column</button>\r\n      </th>\r\n\r\n    </thead>\r\n\r\n    <tr \r\n      *ngFor=\"let row of rows;\r\n      let rowIndex = index;\r\n      trackBy: trackByIndex(rowIndex, 'data')\"\r\n    >\r\n      <td>{{rowIndex+1}}</td>\r\n\r\n      <td\r\n        *ngFor=\"let item of row.data;\r\n        let dataIndex = index;\r\n        trackBy: trackByIndex(rowIndex, dataIndex)\"\r\n        >\r\n          <input \r\n            [(ngModel)]=\"rows[rowIndex].data[dataIndex]\"\r\n            [attr.spellcheck]=\"spellcheckActive\"\r\n          >\r\n      </td>\r\n\r\n      <td>\r\n        <button\r\n          type=\"button\"\r\n          (click)=\"removeRow(rowIndex)\"\r\n        >X</button>\r\n      </td>\r\n\r\n    </tr>\r\n\r\n  </table>\r\n\r\n  <button \r\n    type=\"button\" \r\n    (click)=\"addRow()\"\r\n  >Add line</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Row = /** @class */ (function () {
    function Row(columns) {
        this.data = columns.map(function (column) { return ""; });
    }
    return Row;
}());
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        var _this = this;
        this.tableName = "";
        this.columns = [];
        this.rows = [];
        this.firstRowOrColumn = true;
        this.editColumnTitleIndex = -1;
        this.selectedFile = null;
        this.spellcheckActive = JSON.parse(localStorage.getItem("spellchecker"));
        document
            .getElementsByTagName("body")[0]
            .addEventListener('click', function (event) {
            _this.editColumnTitleIndex = -1;
        });
        //Table starts with 1 column and 1 row
        this.addColumn();
    }
    TableComponent.prototype.editColumnTitle = function (index, event) {
        event.stopImmediatePropagation();
        this.editColumnTitleIndex = index;
    };
    TableComponent.prototype.addColumn = function (columnTitle) {
        var _this = this;
        if (columnTitle === void 0) { columnTitle = "Column Title"; }
        if (this.rows.length == 0 && this.firstRowOrColumn) {
            this.firstRowOrColumn = false;
            this.addRow();
        }
        this.columns.push(columnTitle);
        var a = this.rows.map(function (row) {
            for (var i = row.data.length; i < _this.columns.length; ++i) {
                row.data.push("");
            }
        });
    };
    TableComponent.prototype.removeColumn = function (i) {
        this.columns.splice(i, 1);
        for (var j = 0; j < this.rows.length; j++) {
            this.rows[j].data.splice(i, 1);
        }
        if (this.columns.length == 0) {
            this.rows.splice(0, this.rows.length);
            this.firstRowOrColumn = true;
        }
    };
    TableComponent.prototype.addRow = function () {
        if (this.columns.length == 0 && this.firstRowOrColumn) {
            this.firstRowOrColumn = false;
            this.addColumn();
        }
        this.rows.push(new Row(this.columns));
    };
    TableComponent.prototype.removeRow = function (i) {
        this.rows.splice(i, 1);
    };
    TableComponent.prototype.saveTable = function () {
        var columns = this.columns;
        var rows = this.rows;
        var fileContent = JSON.stringify({ columns: columns, rows: rows });
        var fileToDownload = new Blob([fileContent], { type: "application/json;charset=utf-8" });
        if (this.tableName != "") {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(fileToDownload, this.tableName + ".json");
        }
        else {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(fileToDownload, "Broccoli_NewTable.json");
        }
    };
    TableComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    TableComponent.prototype.openTable = function () {
        var _this = this;
        if (this.selectedFile != null) {
            var fr = new FileReader();
            fr.onload = function (e) {
                var loadedFile = JSON.parse(e.target.result);
                _this.columns = loadedFile.columns;
                _this.rows = loadedFile.rows;
                //Table name = uploaded file name, minus the ".json"
                _this.tableName = _this.selectedFile.name.substring(0, _this.selectedFile.name.length - 5);
            };
            fr.readAsText(this.selectedFile);
        }
    };
    TableComponent.prototype.testTemplate = function () {
        //test for the implementation of Templates
        this.columns = [];
        this.rows = [];
        this.addColumn("Character");
        this.addColumn("Line");
        this.addRow();
    };
    TableComponent.prototype.trackByIndex = function (col, row) {
        if (row === void 0) { row = undefined; }
        return function () { return "c_" + col + "-r_" + row; };
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/user-preferences/user-preferences.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user-preferences/user-preferences.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJlZmVyZW5jZXMvdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-preferences/user-preferences.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user-preferences/user-preferences.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <input\r\n    type=\"checkbox\"\r\n    [(ngModel)]=\"spellcheck\"\r\n    (change)=\"saveStorage()\"\r\n    value=\"spell\"\r\n    checked\r\n  > Spell Checker\r\n  \r\n  <br>\r\n\r\n  Language\r\n  <select>\r\n    <option \r\n      *ngFor=\"let lang of languages\"\r\n      [ngValue]=\"lang.id\"\r\n    >{{lang.name}}\r\n    </option>\r\n  </select>\r\n\r\n  <br>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user-preferences/user-preferences.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-preferences/user-preferences.component.ts ***!
  \****************************************************************/
/*! exports provided: UserPreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPreferencesComponent", function() { return UserPreferencesComponent; });
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

var Languages = /** @class */ (function () {
    function Languages() {
    }
    return Languages;
}());
var UserPreferencesComponent = /** @class */ (function () {
    function UserPreferencesComponent() {
    }
    UserPreferencesComponent.prototype.ngOnInit = function () {
        this.languages = [
            { id: "en", name: "English" },
            { id: "pt-pt", name: "Portuguese" },
            { id: "fr", name: "French" },
            { id: "es", name: "Spanish" },
        ];
        if (!localStorage.getItem("spellchecker")) {
            this.saveStorage();
        }
    };
    UserPreferencesComponent.prototype.saveStorage = function () {
        localStorage.setItem("spellchecker", JSON.stringify(this.spellcheck));
    };
    UserPreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-preferences',
            template: __webpack_require__(/*! ./user-preferences.component.html */ "./src/app/user-preferences/user-preferences.component.html"),
            styles: [__webpack_require__(/*! ./user-preferences.component.css */ "./src/app/user-preferences/user-preferences.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserPreferencesComponent);
    return UserPreferencesComponent;
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

module.exports = __webpack_require__(/*! D:\Users\Tibers\Documents\GitHub\improved-broccoli\broccoli\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map