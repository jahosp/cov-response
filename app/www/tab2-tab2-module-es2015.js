(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Call Us!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\"></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col style=\"display: flex;\"> \r\n        <ion-label class=\"main-title\">Contact our health center</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-col-align\">\r\n        <ion-icon class=\"med-icon\" name=\"people-outline\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row> \r\n      <ion-label class=\"main-description\">Our AI-powered system can understand your voice and analyze your symptoms. Please record a voice message describing them in detail.</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"text-align: center;\">\r\n      <ion-button class=\"call-button\" \r\n      size=\"large\" \r\n      [color]=\"recordColor\" \r\n      expand=\"block\"\r\n      (click)=\"startRecording()\"\r\n      >{{this.recordLabel}}</ion-button>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label [hidden]=\"!recordState\" class=\"timer\">Elapsed time: {{recordTime}} seconds</ion-label>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n  <ion-label class=\"terms-service\">\r\n    <p>By clicking record you accept the Terms of Service and the Privacy Policy of this application.</p>\r\n  </ion-label>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".main-title {\n  font-size: 34px;\n  margin: auto;\n  margin-top: 2.5%;\n  margin-left: 2.5%;\n  margin-right: 2.5%;\n  text-align: center;\n}\n\n.med-icon {\n  font-size: 64px;\n}\n\n.ion-col-align {\n  text-align: center;\n  margin-top: 5%;\n}\n\n.main-description {\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.call-button {\n  width: 50%;\n  padding: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 45%;\n}\n\n.timer {\n  text-align: center;\n  width: 100%;\n}\n\n.terms-service {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  margin-left: 5%;\n  margin-right: 5%;\n  text-align: center;\n  font-size: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXFNlcmdpb1xcRGVza3RvcFxcU1NNTUhhY2tcXGNvdi1yZXNwb25zZVxcYXBwL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgIG1hcmdpbi1yaWdodDogMi41JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lZC1pY29ue1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG59XHJcbi5pb24tY29sLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ubWFpbi1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4uY2FsbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDUlO1xyXG59XHJcblxyXG4udGltZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnRlcm1zLXNlcnZpY2Uge1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjlweDtcclxufSIsIi5tYWluLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIuNSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICBtYXJnaW4tcmlnaHQ6IDIuNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lZC1pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuXG4uaW9uLWNvbC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5tYWluLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uY2FsbC1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQ1JTtcbn1cblxuLnRpbWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRlcm1zLXNlcnZpY2Uge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDlweDtcbn0iXX0= */");

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
        this.contador = 0;
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
            this.file.createFile(this.file.externalDataDirectory, 'record' + this.contador + '.aac', true)
                .then((path) => {
                this.contador++;
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
            this.recordingFile.release();
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
        let endpoint = encodeURI('http://192.168.1.169:3000/audio/' + user_id);
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