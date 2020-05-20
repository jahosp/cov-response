(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Call Us!\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col style=\"display: flex;\"> \n        <ion-label class=\"main-title\">Contact our health center</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-col-align\">\n        <ion-icon class=\"med-icon\" name=\"people-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row> \n      <ion-label class=\"main-description\">Our AI-powered system can understand your voice and analyze your symptoms. Please record a voice message describing them in detail.</ion-label>\n    </ion-row>\n\n    <ion-row class=\"text-align: center;\">\n      <ion-button class=\"call-button\" \n      size=\"large\" \n      [color]=\"recordColor\" \n      expand=\"block\"\n      (click)=\"startRecording()\"\n      >{{this.recordLabel}}</ion-button>\n    </ion-row>\n\n    <ion-row>\n      <ion-label [hidden]=\"!recordState\" class=\"timer\">Elapsed time: {{recordTime}} seconds</ion-label>\n    </ion-row>\n\n  </ion-grid>\n  <ion-label class=\"terms-service\">\n    <p>By clicking record you accept the Terms of Service and the Privacy Policy of this application.</p>\n  </ion-label>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"],
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-title {\n  font-size: 34px;\n  margin: auto;\n  margin-top: 2.5%;\n  margin-left: 2.5%;\n  margin-right: 2.5%;\n  text-align: center;\n}\n\n.med-icon {\n  font-size: 64px;\n}\n\n.ion-col-align {\n  text-align: center;\n  margin-top: 5%;\n}\n\n.main-description {\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.call-button {\n  width: 50%;\n  padding: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 45%;\n}\n\n.timer {\n  text-align: center;\n  width: 100%;\n}\n\n.terms-service {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  margin-left: 5%;\n  margin-right: 5%;\n  text-align: center;\n  font-size: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXFN0YXJidWNrXFxEZXNrdG9wXFxTTVxcaGFja2F0aG9uXFxjb3YtcmVzcG9uc2VcXGFwcC9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZWQtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxufVxyXG4uaW9uLWNvbC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLm1haW4tZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLmNhbGwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQ1JTtcclxufVxyXG5cclxuLnRpbWVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50ZXJtcy1zZXJ2aWNlIHtcclxuICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTo5cHg7XHJcbn0iLCIubWFpbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyLjUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmlvbi1jb2wtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubWFpbi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLmNhbGwtYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0NSU7XG59XG5cbi50aW1lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXJtcy1zZXJ2aWNlIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA5cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let Tab2Page = class Tab2Page {
    constructor(file, media, transfer, http) {
        this.file = file;
        this.media = media;
        this.transfer = transfer;
        this.http = http;
        this.recordState = false;
        this.recordLabel = "Record";
        this.recordColor = "secondary";
        this.recordTime = 0;
        this.fileTransfer = this.transfer.create();
    }
    startTimer() {
        this.interval = setInterval(() => {
            this.recordTime++;
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.interval);
        this.recordTime = 0;
    }
    startRecording() {
        // no recording 
        if (!this.recordState) {
            this.recordState = true;
            this.recordLabel = "Recording";
            this.recordColor = "danger";
            this.startTimer();
            console.log("Recording started");
            this.file.createFile(this.file.externalDataDirectory, 'record.aac', true)
                .then((path) => {
                this.fileUrl = path.toURL();
                this.recordingFile = this.media.create(path.toURL());
                this.recordingFile.startRecord();
            })
                .catch((err) => { console.log("ERR-CREATEFILE: " + err); });
        }
        else { // already recording
            this.recordState = false;
            this.recordLabel = "Record";
            this.recordColor = "secondary";
            this.stopTimer();
            console.log("Recording stoped");
            this.recordingFile.stopRecord();
            console.log("Recorded file at: " + this.fileUrl);
            this.sendRecord();
        }
    }
    sendRecord() {
        console.log("Sending File");
        let fileURL = '' + this.fileUrl;
        let options = {
            fileKey: 'file',
            fileName: fileURL.substr(fileURL.lastIndexOf('/') + 1),
            mimeType: 'audio/mpeg',
            headers: { 'Content-Type': 'audio/mpeg' }
        };
        let user_id = 'testId';
        // POSAR URL DEL MIDDLEWARE
        let endpoint = encodeURI('https://16c2d18b.ngrok.io' + user_id);
        this.fileTransfer.upload(fileURL, endpoint, options)
            .then((data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_3__["Media"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_3__["Media"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map