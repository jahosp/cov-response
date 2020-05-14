function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Call Us!\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col style=\"display: flex;\"> \n        <ion-label class=\"main-title\">Contact our health center</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-col-align\">\n        <ion-icon class=\"med-icon\" name=\"people-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row> \n      <ion-label class=\"main-description\">Our AI-powered system can blablabla Blablabla</ion-label>\n    </ion-row>\n\n    <ion-row class=\"text-align: center;\">\n      <ion-button class=\"call-button\" \n      size=\"large\" \n      [color]=\"recordColor\" \n      expand=\"block\"\n      (click)=\"startRecording()\"\n      >{{this.recordLabel}}</ion-button>\n    </ion-row>\n\n    <ion-row>\n      <ion-label [hidden]=\"!recordState\" class=\"timer\">Elapsed time: {{recordTime}} seconds</ion-label>\n    </ion-row>\n\n  </ion-grid>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab2/tab2-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab2/tab2-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/tab2/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-title {\n  font-size: 34px;\n  margin: auto;\n  margin-top: 2.5%;\n}\n\n.med-icon {\n  font-size: 64px;\n}\n\n.ion-col-align {\n  text-align: center;\n  margin-top: 5%;\n}\n\n.main-description {\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.call-button {\n  width: 60%;\n  padding: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50%;\n}\n\n.timer {\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXFN0YXJidWNrXFxEZXNrdG9wXFxTTVxcaGFja2F0aG9uXFxpb25pY1xcaGVhbHRoLWNlbnRlci9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxufVxyXG5cclxuLm1lZC1pY29ue1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG59XHJcbi5pb24tY29sLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ubWFpbi1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4uY2FsbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcblxyXG4udGltZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufSIsIi5tYWluLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIuNSU7XG59XG5cbi5tZWQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmlvbi1jb2wtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubWFpbi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLmNhbGwtYnV0dG9uIHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbi50aW1lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/media/ngx */
    "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(file, media) {
        _classCallCheck(this, Tab2Page);

        this.file = file;
        this.media = media;
        this.recordState = false;
        this.recordLabel = "Record";
        this.recordColor = "secondary";
        this.recordTime = 0;
      }

      _createClass(Tab2Page, [{
        key: "startTimer",
        value: function startTimer() {
          var _this = this;

          this.interval = setInterval(function () {
            _this.recordTime++;
          }, 1000);
        }
      }, {
        key: "stopTimer",
        value: function stopTimer() {
          clearInterval(this.interval);
          this.recordTime = 0;
        }
      }, {
        key: "startRecording",
        value: function startRecording() {
          var _this2 = this;

          // no recording 
          if (!this.recordState) {
            this.recordState = true;
            this.recordLabel = "Recording";
            this.recordColor = "danger";
            this.startTimer();
            console.log("Recording started");
            this.file.createFile(this.file.externalDataDirectory, 'record.mp3', true).then(function (path) {
              _this2.recordingFile = _this2.media.create(path.toURL());

              _this2.recordingFile.startRecord();
            })["catch"](function (err) {
              console.log("ERR-CREATEFILE: " + err);
            });
          } else {
            // already recording
            this.recordState = false;
            this.recordLabel = "Record";
            this.recordColor = "secondary";
            this.stopTimer();
            console.log("Recording stoped");
            this.recordingFile.stopRecord();
          }
          /*
          this.file.createFile(this.file.externalDataDirectory, 'record.mp3', true)
          .then((path) => {
                  let file = this.media.create(path.toURL());
            file.startRecord();
            this.recordState = true;
            this.recordLabel = "Recording";
            console.log("Recording started");
                  window.setTimeout(() => {
              file.stopRecord();
              this.recordState = false;
              this.recordLabel = "Record";
              console.log("Recording stoped");
            } , 10000);
          })
                .catch((err) => {console.log("ERR-CREATEFILE: " + err)});
          */

        }
      }, {
        key: "play",
        value: function play(myFile) {}
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__["Media"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__["Media"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map