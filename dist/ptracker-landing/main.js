(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\isidorom\Documents\workspace\patagoniatracker\ptracker-landing\src\main.ts */"zUnb");


/***/ }),

/***/ "ANFt":
/*!************************************************************************!*\
  !*** ./src/app/components/pieces/lang-select/lang-select.component.ts ***!
  \************************************************************************/
/*! exports provided: LangSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangSelectComponent", function() { return LangSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LangSelectComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r2)("selected", lang_r2 === ctx_r1.translate.currentLang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "lang-select." + lang_r2)));
} }
class LangSelectComponent {
    constructor(translate) {
        this.translate = translate;
        this.langs = [
            { "lang": "es", "desc": "esp" },
            { "lang": "en", "desc": "eng" }
        ];
    }
    get lang() {
        return this.translate.currentLang;
    }
    set lang(v) {
        this.translate.use(v);
    }
    ngOnInit() {
    }
}
LangSelectComponent.ɵfac = function LangSelectComponent_Factory(t) { return new (t || LangSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
LangSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LangSelectComponent, selectors: [["app-lang-select"]], decls: 4, vars: 1, consts: [[1, "select"], ["name", "slct", "id", "slct", 3, "change"], ["langSelect", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function LangSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LangSelectComponent_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.translate.use(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LangSelectComponent_option_3_Template, 4, 7, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["@charset \"UTF-8\";\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  box-shadow: none;\n  border: 0 !important;\n  background-image: none;\n}\n\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n.select[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 10em;\n  height: 2.3em;\n  line-height: 2.3;\n  background: transparent;\n  overflow: hidden;\n  border-radius: 0.5em;\n  border-width: 2px;\n  border-style: solid;\n}\nselect[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 0.5em;\n  cursor: pointer;\n}\n\n.select[_ngcontent-%COMP%]::after {\n  content: \"\u25BC\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0 1em;\n  background: transparent;\n  cursor: pointer;\n  pointer-events: none;\n  transition: 0.25s all ease;\n}\n\n.select[_ngcontent-%COMP%]:hover::after {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGFuZy1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2QsaUJBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBRUEsc0JBQUE7QUFBSjtBQUVFLG9CQUFBO0FBQ0E7RUFDRSxhQUFBO0FBQ0o7QUFDRSxrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtBQUNKO0FBQ0UsVUFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFHQSwwQkFBQTtBQUVKO0FBQUUsZUFBQTtBQUNBO0VBQ0UsWUFBQTtBQUdKIiwiZmlsZSI6Imxhbmctc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogUmVzZXQgU2VsZWN0ICovXG5zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgSUUgYXJyb3cgKi9cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEN1c3RvbSBTZWxlY3QgKi9cbi5zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBsaW5lLWhlaWdodDogMi4zO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG5zZWxlY3Qge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEFycm93ICovXG4uc2VsZWN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pa8XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMCAxZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMjVzIGFsbCBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAwLjI1cyBhbGwgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2U7XG59XG5cbi8qIFRyYW5zaXRpb24gKi9cbi5zZWxlY3Q6aG92ZXI6OmFmdGVyIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lang-select',
                templateUrl: './lang-select.component.html',
                styleUrls: ['./lang-select.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Hr/M":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/lanin/lanin.component.ts ***!
  \***********************************************************/
/*! exports provided: LaninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaninComponent", function() { return LaninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pieces_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pieces/lang-select/lang-select.component */ "ANFt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











class LaninComponent {
    constructor() {
        this.panelOpenState1 = true;
        this.panelOpenState2 = false;
        this.panelOpenState3 = false;
        this.panelOpenState4 = false;
        this.panelOpenState5 = false;
        this.toolbarClass = "transp";
    }
    ngOnInit() {
    }
    onScroll(e) {
        let top = document.documentElement.scrollTop;
        if (top > 200) {
            this.toolbarClass = "fondo";
        }
        else {
            this.toolbarClass = "transp";
        }
        console.log(this.toolbarClass);
    }
    getYPosition(e) {
        return e.target.scrollTop;
    }
}
LaninComponent.ɵfac = function LaninComponent_Factory(t) { return new (t || LaninComponent)(); };
LaninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaninComponent, selectors: [["app-lanin"]], hostBindings: function LaninComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function LaninComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 221, vars: 109, consts: [[1, "lanin", 2, "height", "100vh"], [1, "content"], ["fxFlexFill", "", 1, "example-container"], ["fxLayout", "column"], ["sidenav", ""], ["href", "#", "mat-button", "", 3, "click"], ["href", "#", "mat-button", ""], ["fxFlexFill", ""], ["ngClass.lt-sm", "ltsm", "ngClass.gt-sm", "gtsm", 1, "page-container"], [1, "bg-lanin"], ["fxShow", "true", "fxHide.lt-sm", "true", 1, "spetial-toolbar"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["src", "./assets/img/logo.png", "alt", "", 1, "logo"], ["fxLayout", "row", "fxLayoutAlign", "start  center", "fxFlex", "0.9 0 calc(4em)", 1, "menu"], [1, "mnu-item"], ["mat-button", "", "href", ";"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "1em", "fxFlex", "0.2 0 10em", 1, "right"], ["mat-flat-button", "", "color", "warn", "href", "#asec5"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "spetial-toolbar"], ["fxShow", "true", "fxHide.gt-sm", "true"], [1, "white-icon", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxFlex", "0 0 10em", 1, "lado-derecho"], ["mat-flat-button", "", "color", "warn"], [1, "sec1"], ["id", "asec1", 1, "anchor"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "box"], ["fxFlex", "33%", "fxFlex.lt-sm", "0.8 0 calc(8em)"], [1, "line-breaker"], ["fxFlex", "50%"], ["id", "sec2", 1, "sec2"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "box"], [1, "item", "item1", "l1"], ["src", "./assets/img/lanin/l1.png", "alt", ""], [1, "item", "item2"], ["src", "./assets/img/lanin/sec2.png", "alt", ""], [1, "item", "item3", "l2"], ["src", "./assets/img/lanin/l2.png", "alt", ""], [1, "item", "item4"], ["src", "./assets/img/lanin/sec2b.png", "alt", ""], [1, "c-title", "line-breaker"], ["id", "sec4", 1, "sec4"], ["id", "asec4", 1, "anchor"], [1, "display-1"], ["src", "./assets/img/lanin/precio.png", "alt", ""], ["id", "sec5", 1, "sec5"], ["id", "asec5", 1, "anchor"], [1, "box"], ["fxLayout", "column", "fxLayoutAlign", "start center"], ["fxLayout", "row", "fxLayoutGap", "5em", "fxLayoutAlign", "space-between start"], ["fxLayout", "column", "fxLayoutGap", "2em", "fxLayoutAlign", "start center"], [3, "expanded", "opened", "closed"], [3, "opened", "closed"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxLayoutGap", "1em", 1, "footer-info"], ["fxFlex", "33%"], ["fxLayout", "column", "fxLayoutAlign", "space-around  center", "fxFlex", "0.9 0 calc(4em)", 1, "menu"], [1, "line"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "ico"], [1, "icotext"], ["fxFlex", "33%", 1, "menu"], [1, "mnu-item", "line"], ["href", "#asec4"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "1em", 1, "redes"], ["href", "http://cotesma.coop", "target", "_blank"], [1, "item", "fb"], [1, "item", "ig"], [1, "item", "tw"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxLayoutGap", "4em", 1, "footer"], ["src", "./assets/img/lanin/logo-negro.png", "alt", "", 1, "logo"]], template: function LaninComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaninComponent_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Menu Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Menu Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Menu Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Menu Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Menu Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Menu Item 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-sidenav-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-lang-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaninComponent_Template_mat_icon_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-expansion-panel", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function LaninComponent_Template_mat_expansion_panel_opened_118_listener() { return ctx.panelOpenState1 = true; })("closed", function LaninComponent_Template_mat_expansion_panel_closed_118_listener() { return ctx.panelOpenState1 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-expansion-panel", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function LaninComponent_Template_mat_expansion_panel_opened_126_listener() { return ctx.panelOpenState2 = true; })("closed", function LaninComponent_Template_mat_expansion_panel_closed_126_listener() { return ctx.panelOpenState2 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-expansion-panel", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function LaninComponent_Template_mat_expansion_panel_opened_136_listener() { return ctx.panelOpenState3 = true; })("closed", function LaninComponent_Template_mat_expansion_panel_closed_136_listener() { return ctx.panelOpenState3 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-expansion-panel", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function LaninComponent_Template_mat_expansion_panel_opened_144_listener() { return ctx.panelOpenState4 = true; })("closed", function LaninComponent_Template_mat_expansion_panel_closed_144_listener() { return ctx.panelOpenState4 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-expansion-panel", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function LaninComponent_Template_mat_expansion_panel_opened_152_listener() { return ctx.panelOpenState4 = true; })("closed", function LaninComponent_Template_mat_expansion_panel_closed_152_listener() { return ctx.panelOpenState4 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](156, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-expansion-panel", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function LaninComponent_Template_mat_expansion_panel_opened_160_listener() { return ctx.panelOpenState5 = true; })("closed", function LaninComponent_Template_mat_expansion_panel_closed_160_listener() { return ctx.panelOpenState5 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](164, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](167, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-icon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-icon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](186, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](190, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](194, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](200, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](218, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "app-lang-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("toolbar ", ctx.toolbarClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 37, "lanin.nav.propuesta"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 39, "lanin.nav.como-funciona"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 41, "lanin.nav.precio"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 43, "lanin.nav.faq"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 47, "home.nav.contactarme")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 51, "home.nav.contactarme")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 53, "lanin.sec1.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 55, "lanin.sec1.text1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 57, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 59, "lanin.sec1.btn")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 61, "lanin.sec2.a.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 63, "lanin.sec2.b.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 65, "lanin.sec2.b.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 67, "lanin.sec2.c.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 69, "lanin.sec4.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](114, 71, "lanin.sec5.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 73, "lanin.sec5.faq.1.Q"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 75, "lanin.sec5.faq.1.A"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](130, 77, "lanin.sec5.faq.2.Q"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](133, 79, "lanin.sec5.faq.2.A"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](140, 81, "lanin.sec5.faq.1.Q"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](143, 83, "lanin.sec5.faq.1.A"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](148, 85, "lanin.sec5.faq.2.Q"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](151, 87, "lanin.sec5.faq.2.A"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](156, 89, "lanin.sec5.faq.2.Q"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](159, 91, "lanin.sec5.faq.2.A"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](164, 93, "lanin.sec5.faq.2.Q"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](167, 95, "lanin.sec5.faq.2.A"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](180, 97, "footer.tel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](186, 99, "footer.dir"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](190, 101, "footer.loc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](194, 103, "footer.cp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](200, 105, "footer.pp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](218, 107, "footer.cr"), " ");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _pieces_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_5__["LangSelectComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]], styles: [".page-container[_ngcontent-%COMP%] {\n  padding-top: 0em;\n}\n.page-container.ltsm[_ngcontent-%COMP%] {\n  padding-top: 0em;\n}\n#myVideo[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -100;\n}\n\n.content[_ngcontent-%COMP%] {\n  \n}\n.sec1[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  padding-top: 15em;\n  padding-bottom: 15em;\n}\n.sec1[_ngcontent-%COMP%]   a.anchor[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: -20em;\n  visibility: hidden;\n}\n.gtsm[_ngcontent-%COMP%]   .sec1[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-left: var(--margin-left-gtsm);\n  margin-right: var(--margin-right-gtsm);\n}\n\n.bg-lanin[_ngcontent-%COMP%] {\n  background-image: url('bg-lanin.jpg');\n  \n  background-color: #cccccc;\n  \n  height: 700px;\n  \n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  \n}\n.gtsm[_ngcontent-%COMP%]   .sec1[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 400%;\n  margin-bottom: 0.5em;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.gtsm[_ngcontent-%COMP%]   .sec1[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 127%;\n  line-height: 1.5;\n}\n\n.sec2[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #55665B;\n}\n.ltsm[_ngcontent-%COMP%]   .sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-left: var(--margin-left-ltsm);\n  margin-right: var(--margin-right-ltsm);\n}\n.gtsm[_ngcontent-%COMP%]   .sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-left: var(--margin-left-gtsm);\n  margin-right: var(--margin-right-gtsm);\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item.l1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 43em;\n  margin-right: 3em;\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item.l2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 21em;\n  margin-right: 16em;\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 304%;\n  line-height: 1.4;\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 53em;\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item4[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 300;\n  font-size: 304%;\n  line-height: 1.4;\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item4[_ngcontent-%COMP%]   .c-title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 304%;\n  text-align: left;\n  line-height: 1.4;\n  position: relative;\n  top: -4em;\n  left: -3em;\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 45em;\n  margin-right: 1em;\n  left: -3em;\n}\n\n.sec4[_ngcontent-%COMP%] {\n  color: #55665B;\n  padding-top: 9em;\n  background-image: url('bg-proy-lanin.png');\n  \n  background-color: #F7F7F7;\n  \n  height: 700px;\n  \n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  \n}\n.sec4[_ngcontent-%COMP%]   a.anchor[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: -10em;\n  visibility: hidden;\n}\n.gtsm[_ngcontent-%COMP%]   .sec4[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: var(--margin-left-gtsm);\n  padding-top: 0em;\n  padding-right: 0em;\n  margin-right: var(--margin-right-gtsm);\n}\n.sec4[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 400%;\n  margin-bottom: 1em;\n  font-weight: 100;\n}\n.sec4[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40em;\n}\n\n.sec5[_ngcontent-%COMP%] {\n  color: #55665B;\n  background-color: white;\n  padding-bottom: 5em;\n}\n.sec5[_ngcontent-%COMP%]   a.anchor[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: -3em;\n  visibility: hidden;\n}\n.sec5[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding-top: 3em;\n  margin-right: var(--margin-right-gtsm);\n  margin-left: var(--margin-left-gtsm);\n}\n.sec5[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 400%;\n  margin-bottom: 1em;\n  font-weight: 100;\n}\n.mat-expanded[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: #7FAEDB;\n  font-weight: 700;\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: #3B3B3B;\n  font-weight: 700;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.white-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.toolbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n  \n  top: 0em;\n  \n  padding-bottom: 1em;\n  width: 100%;\n  z-index: 99999;\n}\n.toolbar.fondo[_ngcontent-%COMP%] {\n  background-color: #C1D4EE;\n}\n.toolbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  margin-left: 4em;\n}\n.gtsm[_ngcontent-%COMP%]   .spetial-toolbar[_ngcontent-%COMP%] {\n  color: white;\n  padding-left: var(--margin-left-gtsm);\n  padding-right: var(--margin-right-gtsm);\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n.ltsm[_ngcontent-%COMP%]   .spetial-toolbar[_ngcontent-%COMP%] {\n  color: white;\n  padding-left: var(--margin-left-gtsm);\n  padding-right: var(--margin-right-gtsm);\n  background-color: var(--primary-color);\n  padding-top: 3em;\n  padding-bottom: 2em;\n}\n.spetial-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  height: 3em;\n}\nfooter[_ngcontent-%COMP%] {\n  color: #0D0101;\n  background-color: #C1D4EE;\n  padding-left: var(--margin-left-gtsm);\n  padding-right: var(--margin-right-gtsm);\n  padding-top: 10em;\n  padding-bottom: 5em;\n}\nfooter[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 17px;\n  margin-top: 3px;\n}\nfooter[_ngcontent-%COMP%]   .icotext[_ngcontent-%COMP%] {\n  padding-left: 1.8em;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0D0101;\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0D0101;\n  text-decoration: underline;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #0D0101;\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%] {\n  height: 100%;\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border: 0px solid;\n  background-color: width;\n  height: 28px;\n  width: 28px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item.fb[_ngcontent-%COMP%] {\n  background-image: url('fb.png');\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item.ig[_ngcontent-%COMP%] {\n  background-image: url('ig.png');\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item.tw[_ngcontent-%COMP%] {\n  background-image: url('tw.png');\n}\nfooter[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  height: 1px;\n  border-width: 0;\n  background-color: var(--primary-lighter-color);\n}\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\nfooter[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\nfooter[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGFuaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQUE7QUFFQTtFQUNJLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUdBLHFEQUFBO0FBQ0E7RUFDSTs7Ozs7Z0JBQUE7QUFLSjtBQUdBO0VBQ0ksY0FBQTtFQUVBLGlCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLG9DQUFBO0VBQ0Esc0NBQUE7QUFESjtBQVFBLFNBQUE7QUFDQTtFQUNJLHFDQUFBO0VBQW9FLG1CQUFBO0VBQ3BFLHlCQUFBO0VBQTJCLHFDQUFBO0VBQzNCLGFBQUE7RUFBZSxvQ0FBQTtFQUNmLDJCQUFBO0VBQTZCLHFCQUFBO0VBQzdCLDRCQUFBO0VBQThCLDRCQUFBO0VBQzlCLHNCQUFBO0VBQXdCLDhEQUFBO0FBQzVCO0FBSUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBSUEsU0FBQTtBQUNBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLG9DQUFBO0VBQ0Esc0NBQUE7QUFESjtBQUlBO0VBQ0ksb0NBQUE7RUFDQSxzQ0FBQTtBQURKO0FBSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7QUFESjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0E7RUFDSSxpQkFBQTtBQUFKO0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFQSxTQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUFtRSxtQkFBQTtFQUNuRSx5QkFBQTtFQUEyQixxQ0FBQTtFQUMzQixhQUFBO0VBQWUsb0NBQUE7RUFDZiwyQkFBQTtFQUE2QixxQkFBQTtFQUM3Qiw0QkFBQTtFQUE4Qiw0QkFBQTtFQUM5QixzQkFBQTtFQUF3Qiw4REFBQTtBQU81QjtBQUpBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBT0o7QUFKQTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQU9KO0FBSkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU9KO0FBSkE7RUFDSSxXQUFBO0FBT0o7QUFIQSxTQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1KO0FBSEE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFIQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQU1KO0FBSEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUhBLFNBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTUo7QUFIQTtFQUNJLFlBQUE7QUFNSjtBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQWlCLHFDQUFBO0VBQ2pCLFFBQUE7RUFBVSwrQ0FBQTtFQUNWLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFRSjtBQUxBO0VBQ0kseUJBQUE7QUFRSjtBQUxBO0VBQ0ksZ0JBQUE7QUFRSjtBQUxBO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0o7QUFIQTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUo7QUFEQTtFQUNJLFNBQUE7QUFJSjtBQURBO0VBQ0ksV0FBQTtBQUlKO0FBREE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlKO0FBREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSUo7QUFEQTtFQUNJLG1CQUFBO0FBSUo7QUFEQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUlKO0FBREE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFJSjtBQURBO0VBQ0ksY0FBQTtBQUlKO0FBREE7RUFDSSxZQUFBO0FBSUo7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSUo7QUFEQTtFQUNJLCtCQUFBO0FBSUo7QUFEQTtFQUNJLCtCQUFBO0FBSUo7QUFEQTtFQUNJLCtCQUFBO0FBSUo7QUFEQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUFJSjtBQURBO0VBQ0ksZ0JBQUE7QUFJSjtBQURBO0VBQ0ksbUJBQUE7QUFJSjtBQUFBO0VBQ0ksbUJBQUE7QUFHSiIsImZpbGUiOiJsYW5pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIHRoZSB2aWRlbzogMTAwJSB3aWR0aCBhbmQgaGVpZ2h0IHRvIGNvdmVyIHRoZSBlbnRpcmUgd2luZG93ICovXHJcblxyXG4ucGFnZS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDowZW07XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRhaW5lci5sdHNte1xyXG4gICAgcGFkZGluZy10b3A6MGVtOyAgICBcclxufVxyXG5cclxuI215VmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxufVxyXG4gIFxyXG4vKiBBZGQgc29tZSBjb250ZW50IGF0IHRoZSBib3R0b20gb2YgdGhlIHZpZGVvL3BhZ2UgKi9cclxuLmNvbnRlbnQge1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgcGFkZGluZzogMSU7ICovXHJcbiAgICBcclxufVxyXG4uc2VjMXtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNWVtO1xyXG59XHJcblxyXG4uc2VjMSBhLmFuY2hvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTIwZW07XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ndHNtIC5zZWMxIC5ib3h7ICAgXHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQtZ3RzbSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodC1ndHNtKTtcclxufVxyXG5cclxuLmx0c20gLnNlYzEgLmJveHsgICBcclxuICAgIFxyXG59XHJcblxyXG4vKiBzZWMwICovXHJcbi5iZy1sYW5pbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbGFuaW4vYmctbGFuaW4uanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGhlaWdodDogNzAwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG59XHJcblxyXG5cclxuXHJcbi5ndHNtIC5zZWMxIC5ib3ggaDF7XHJcbiAgICBmb250LXNpemU6IDQwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4uZ3RzbSAuc2VjMSAuYm94IHB7XHJcbiAgICBmb250LXNpemU6IDEyNyU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41OyBcclxuICAgIFxyXG59XHJcblxyXG4vKiBzZWMyICovXHJcbi5zZWMye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjojNTU2NjVCO1xyXG59XHJcblxyXG4ubHRzbSAuc2VjMiAuYm94e1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWx0c20pO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tcmlnaHQtbHRzbSk7XHJcbn1cclxuXHJcbi5ndHNtIC5zZWMyIC5ib3h7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQtZ3RzbSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodC1ndHNtKTtcclxufVxyXG5cclxuLnNlYzIgLmJveCAuaXRlbS5sMSBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDQzZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcclxufVxyXG5cclxuLnNlYzIgLmJveCAuaXRlbS5sMiBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDIxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2ZW07XHJcbn1cclxuXHJcbi5zZWMyIC5ib3ggLml0ZW0gaDF7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAzMDQlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLnNlYzIgLmJveCAuaXRlbTIgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA1M2VtO1xyXG59XHJcblxyXG4uc2VjMiAuYm94IC5pdGVtNCBoMXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMzA0JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5zZWMyIC5ib3ggLml0ZW00IC5jLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMzA0JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNGVtO1xyXG4gICAgbGVmdDogLTNlbTtcclxufVxyXG4uc2VjMiAuYm94IC5pdGVtNCBwe1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNlYzIgLmJveCAuaXRlbTQgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiA0NWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBsZWZ0OiAtM2VtO1xyXG59XHJcblxyXG4vKiBzZWM0ICovXHJcbi5zZWM0e1xyXG4gICAgY29sb3I6IzU1NjY1QjtcclxuICAgIHBhZGRpbmctdG9wOiA5ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JnLXByb3ktbGFuaW4ucG5nXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGhlaWdodDogNzAwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG59XHJcblxyXG4uc2VjNCBhLmFuY2hvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwZW07XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ndHNtIC5zZWM0IC5ib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQtZ3RzbSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMGVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMGVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tcmlnaHQtZ3RzbSk7XHJcbn1cclxuXHJcbi5zZWM0IC5ib3ggaDF7XHJcbiAgICBmb250LXNpemU6IDQwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uc2VjNCAuYm94IGltZ3tcclxuICAgIHdpZHRoOjQwZW07XHJcbn1cclxuXHJcblxyXG4vKiBzZWM1ICovXHJcbi5zZWM1e1xyXG4gICAgY29sb3I6IzU1NjY1QjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XHJcbn1cclxuXHJcbi5zZWM1IGEuYW5jaG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtM2VtO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VjNSAuYm94e1xyXG4gICAgcGFkZGluZy10b3A6IDNlbTtcclxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLXJpZ2h0LWd0c20pO1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWd0c20pO1xyXG59XHJcblxyXG4uc2VjNSAuYm94IGgxe1xyXG4gICAgZm9udC1zaXplOiA0MDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLm1hdC1leHBhbmRlZCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7XHJcbiAgICBjb2xvcjojN0ZBRURCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufSBcclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtcclxuICAgIGNvbG9yOiMzQjNCM0I7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59IFxyXG5cclxuLyogc2lkZSAqL1xyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi53aGl0ZS1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvb2xiYXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTZXQgdGhlIG5hdmJhciB0byBmaXhlZCBwb3NpdGlvbiAqL1xyXG4gICAgdG9wOiAwZW07IC8qIFBvc2l0aW9uIHRoZSBuYXZiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbi50b29sYmFyLmZvbmRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MxRDRFRTtcclxufVxyXG5cclxuLnRvb2xiYXIgLm1lbnV7XHJcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xyXG59XHJcblxyXG4uZ3RzbSAuc3BldGlhbC10b29sYmFye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYXJnaW4tbGVmdC1ndHNtKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodC1ndHNtKTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufVxyXG5cclxuXHJcbi5sdHNtIC5zcGV0aWFsLXRvb2xiYXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWd0c20pO1xyXG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tbWFyZ2luLXJpZ2h0LWd0c20pO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuXHJcblxyXG4uc3BldGlhbC10b29sYmFyIGgxe1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICAgIGNvbG9yOiAjMEQwMTAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzFENEVFO1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYXJnaW4tbGVmdC1ndHNtKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodC1ndHNtKTsgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMTBlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XHJcbn1cclxuXHJcbmZvb3RlciAuaWNve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG5mb290ZXIgLmljb3RleHR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MS44ZW07XHJcbn1cclxuXHJcbmZvb3RlciBhe1xyXG4gICAgY29sb3I6ICMwRDAxMDE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmZvb3RlciBhOmhvdmVye1xyXG4gICAgY29sb3I6ICMwRDAxMDE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuZm9vdGVyIGE6dmlzaXRlZHtcclxuICAgIGNvbG9yOiAjMEQwMTAxO1xyXG59XHJcblxyXG5mb290ZXIgLnJlZGVze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVte1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aWR0aDsgXHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVtLmZie1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9sYW5pbi9mYi5wbmdcIik7IFxyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVtLmlne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9sYW5pbi9pZy5wbmdcIik7IFxyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVtLnR3e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9sYW5pbi90dy5wbmdcIik7IFxyXG59XHJcblxyXG5mb290ZXIgaHIge1xyXG4gICAgaGVpZ2h0OjFweDtcclxuICAgIGJvcmRlci13aWR0aDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xyXG59XHJcblxyXG5mb290ZXIgLmZvb3RlcntcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWluZm97XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgXHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWluZm8gLmxpbmV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lanin',
                templateUrl: './lanin.component.html',
                styleUrls: ['./lanin.component.scss'],
            }]
    }], function () { return []; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(translate, title) {
        this.translate = translate;
        this.title = title;
    }
    ngOnInit() {
        this.translate.addLangs(['en', 'es']);
        this.translate.setDefaultLang('es');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
        this.translate.get("gen.page-title").subscribe((res) => {
            this.title.setTitle(res);
        });
        this.translate.stream('gen.page-title').subscribe((res) => {
            this.title.setTitle(res);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/home/home.component */ "wpF5");
/* harmony import */ var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/not-found/not-found.component */ "mUaI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _components_pieces_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pieces/lang-select/lang-select.component */ "ANFt");
/* harmony import */ var _components_pages_lanin_lanin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/lanin/lanin.component */ "Hr/M");























// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](httpClient);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                }
            }),
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
        _components_pieces_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_19__["LangSelectComponent"],
        _components_pages_lanin_lanin_component__WEBPACK_IMPORTED_MODULE_20__["LaninComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                    _components_pieces_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_19__["LangSelectComponent"],
                    _components_pages_lanin_lanin_component__WEBPACK_IMPORTED_MODULE_20__["LaninComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                        }
                    }),
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mUaI":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/not-found/not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home/home.component */ "wpF5");
/* harmony import */ var _components_pages_lanin_lanin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/lanin/lanin.component */ "Hr/M");
/* harmony import */ var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/not-found/not-found.component */ "mUaI");







const routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'lanin', component: _components_pages_lanin_lanin_component__WEBPACK_IMPORTED_MODULE_3__["LaninComponent"] },
    { path: '**', component: _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wpF5":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pieces_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pieces/lang-select/lang-select.component */ "ANFt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");














class HomeComponent {
    constructor(translate, title) {
        this.translate = translate;
        this.title = title;
    }
    ngOnInit() {
        let video = document.getElementById("myVideo");
        video.muted = true;
        video.play();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 207, vars: 91, consts: [[1, "home", 2, "height", "100vh"], [1, "content"], ["fxFlexFill", "", 1, "example-container"], ["fxLayout", "column"], ["sidenav", ""], ["href", "#", "mat-button", "", 3, "click"], ["href", "#", "mat-button", ""], ["fxFlexFill", ""], ["ngClass.lt-sm", "ltsm", "ngClass.gt-sm", "gtsm", 1, "page-container"], ["muted", "", "autoplay", "", "loop", "", "id", "myVideo"], ["src", "assets/videos/video.mp4", "type", "video/mp4"], [1, "toolbar"], ["fxShow", "true", "fxHide.lt-sm", "true", 1, "spetial-toolbar"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["src", "./assets/img/logo.png", "alt", "", 1, "logo"], ["fxLayout", "row", "fxLayoutAlign", "start  center", "fxFlex", "0.9 0 calc(4em)", 1, "menu"], [1, "mnu-item"], ["mat-button", "", "href", "#asec1"], ["mat-button", "", "href", "#asec3"], ["mat-button", "", "href", "#asec4"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "1em", "fxFlex", "0.2 0 10em", 1, "right"], ["mat-flat-button", "", "color", "warn", "href", "#asec5"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "spetial-toolbar"], ["fxShow", "true", "fxHide.gt-sm", "true"], [1, "white-icon", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxFlex", "0 0 10em", 1, "lado-derecho"], ["mat-flat-button", "", "color", "warn"], [1, "sec1"], ["id", "asec1", 1, "anchor"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "box"], ["fxFlex", "0.5 0 calc(8em)", "fxFlex.lt-sm", "0.8 0 calc(8em)"], ["fxShow", "true", "fxHide.gt-sm", "true", "mat-flat-button", "", "color", "warn"], ["id", "sec2", 1, "sec2"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "box"], [1, "item"], ["src", "./assets/img/logo-cotesma.png", "alt", ""], ["src", "./assets/img/logo-sigfox.png", "alt", ""], ["src", "./assets/img/logo-parque.png", "alt", ""], ["src", "./assets/img/logo-datco.png", "alt", ""], ["id", "sec3", 1, "sec3"], ["id", "asec3", 1, "anchor"], [1, "box"], ["id", "sec4", 1, "sec4"], ["id", "asec4", 1, "anchor"], [1, "box", "top"], [1, "display-1"], ["fxLayout", "row", "fxLayoutAlign", "space-around stretch", "fxLayoutGap", "4em", 1, "box"], ["width", "100%", "height", "100%", "src", "./assets/img/proyecto-lanin-foto.png", "alt", ""], [1, "line-breaker"], ["href", "/lanin", "mat-flat-button", "", "color", "warn"], ["id", "sec5", 1, "sec5"], ["id", "asec5", 1, "anchor"], ["fxLayout", "row", "fxLayoutAlign", "space-around stretch", 1, "box"], ["fxFlex", "33%"], ["fxFlex", "66%"], [1, "top"], [1, "contact-form"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 1, "contact-container"], ["appearance", "fill", "fxFlex", "100%"], ["matInput", ""], ["cdkTextareaAutosize", "", "cdkAutosizeMinRows", "5", "cdkAutosizeMaxRows", "15", "matInput", "", "placeholder", ""], ["fxFlexAlign", "end"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxLayoutGap", "1em", 1, "footer-info"], ["fxLayout", "column", "fxLayoutAlign", "space-around  center", "fxFlex", "0.9 0 calc(4em)", 1, "menu"], [1, "line"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "ico"], [1, "icotext"], ["fxFlex", "33%", 1, "menu"], [1, "mnu-item", "line"], ["href", "#asec1"], ["href", "#asec3"], ["href", "#asec4"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "1em", 1, "redes"], ["href", "http://cotesma.coop", "target", "_blank"], [1, "item", "fb"], [1, "item", "ig"], [1, "item", "tw"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", "fxLayoutGap", "4em", 1, "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Menu Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Menu Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Menu Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Menu Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Menu Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Menu Item 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-sidenav-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "video", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "source", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-lang-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_icon_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-form-field", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-form-field", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-form-field", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "textarea", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](146, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-icon", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-icon", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](174, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](184, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](188, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](204, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "app-lang-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 27, "home.nav.quienes-somos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 29, "home.nav.que-hacemos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 31, "home.nav.proyectos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 35, "home.nav.contactarme")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 39, "home.nav.contactarme")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 41, "home.sec1.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 43, "home.sec1.text1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 47, "home.nav.contactarme")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 49, "home.sec3.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 51, "home.sec3.text1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 53, "home.sec4.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 55, "home.sec4.p1.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](109, 57, "home.sec4.p1.text1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 61, "home.sec4.p1.btn")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 63, "contact-form.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 65, "contact-form.nombre"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](135, 67, "contact-form.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](141, 69, "contact-form.mensaje"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](146, 71, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](147, 73, "contact-form.enviar")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](160, 75, "footer.tel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](166, 77, "footer.dir"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](170, 79, "footer.loc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](174, 81, "footer.cp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](180, 83, "home.nav.quienes-somos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](184, 85, "home.nav.que-hacemos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](188, 87, "footer.pp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](204, 89, "footer.cr"), " ");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _pieces_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_7__["LangSelectComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["CdkTextareaAutosize"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"]], styles: [".page-container[_ngcontent-%COMP%] {\n  padding-top: 2em;\n}\n.page-container.ltsm[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n#myVideo[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -100;\n}\n\n.content[_ngcontent-%COMP%] {\n  \n}\n.sec1[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  text-align: center;\n  margin-top: 15em;\n  margin-bottom: 15em;\n}\n.sec1[_ngcontent-%COMP%]   a.anchor[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: -20em;\n  visibility: hidden;\n}\n.gtsm[_ngcontent-%COMP%]   .sec1[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 400%;\n  margin-bottom: 0.5em;\n  font-weight: 700;\n}\n.gtsm[_ngcontent-%COMP%]   .sec1[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 170%;\n  line-height: 1.5;\n}\n\n.sec2[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-top: 3em;\n  padding-bottom: 3em;\n}\n.ltsm[_ngcontent-%COMP%]   .sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-left: var(--margin-left-ltsm);\n  margin-right: var(--margin-right-ltsm);\n}\n.gtsm[_ngcontent-%COMP%]   .sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-left: var(--margin-left-gtsm);\n  margin-right: var(--margin-right-gtsm);\n}\n.sec2[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 10em;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.sec3[_ngcontent-%COMP%] {\n  background-image: url('bg-soluciones.png');\n  \n  background-color: #cccccc;\n  \n  height: 700px;\n  \n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  \n}\n.sec3[_ngcontent-%COMP%]   a.anchor[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: -5em;\n  visibility: hidden;\n}\n.ltsm[_ngcontent-%COMP%]   .sec3[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-left: var(--margin-left-ltsm);\n  margin-right: var(--margin-right-ltsm);\n}\n.gtsm[_ngcontent-%COMP%]   .sec3[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding-left: 42em;\n  margin-left: var(--margin-left-gtsm);\n  padding-top: 12em;\n  padding-right: 9em;\n  margin-right: var(--margin-right-gtsm);\n  text-align: right;\n}\n.gtsm[_ngcontent-%COMP%]   .sec3[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 350%;\n  line-height: 1.1;\n  margin-bottom: 0.5em;\n  font-weight: 700;\n}\n.gtsm[_ngcontent-%COMP%]   .sec3[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 150%;\n  line-height: 1.4;\n  text-justify: right;\n  font-weight: 200;\n}\n\n.sec4[_ngcontent-%COMP%] {\n  padding-top: 9em;\n  background-image: url('bg-proy-lanin.png');\n  \n  background-color: white;\n  \n  height: 800px;\n  \n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  \n}\n.sec4[_ngcontent-%COMP%]   a.anchor[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: -10em;\n  visibility: hidden;\n}\n.gtsm[_ngcontent-%COMP%]   .sec4[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: var(--margin-left-gtsm);\n  padding-top: 0em;\n  padding-right: 0em;\n  margin-right: var(--margin-right-gtsm);\n}\n.sec4[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 400%;\n  margin-bottom: 1em;\n  font-weight: 100;\n}\n.sec4[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.gtsm[_ngcontent-%COMP%]   .sec4[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 350%;\n  line-height: 1.1;\n  margin-bottom: 0.5em;\n  font-weight: 700;\n}\n.gtsm[_ngcontent-%COMP%]   .sec4[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 150%;\n  line-height: 1.4;\n  text-justify: right;\n  font-weight: 200;\n}\n\n.sec5[_ngcontent-%COMP%] {\n  padding-top: 3em;\n  background-image: url('bg-contacto.png');\n  \n  background-color: white;\n  \n  height: 800px;\n  \n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  \n}\n.sec5[_ngcontent-%COMP%]   a.anchor[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: -3em;\n  visibility: hidden;\n}\n.gtsm[_ngcontent-%COMP%]   .sec5[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: var(--margin-left-gtsm);\n  padding-top: 9em;\n  padding-right: 0em;\n  margin-right: var(--margin-right-gtsm);\n}\n.sec5[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  text-align: right;\n  font-size: 400%;\n  margin-bottom: 1em;\n  font-weight: 100;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.white-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.toolbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n  \n  top: 0em;\n  \n  padding-bottom: 1em;\n  width: 100%;\n  z-index: 99999;\n}\n.toolbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  margin-left: 4em;\n}\n.gtsm[_ngcontent-%COMP%]   .spetial-toolbar[_ngcontent-%COMP%] {\n  color: white;\n  padding-left: var(--margin-left-gtsm);\n  padding-right: var(--margin-right-gtsm);\n  background-color: var(--primary-color);\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n.ltsm[_ngcontent-%COMP%]   .spetial-toolbar[_ngcontent-%COMP%] {\n  color: white;\n  padding-left: var(--margin-left-gtsm);\n  padding-right: var(--margin-right-gtsm);\n  background-color: var(--primary-color);\n  padding-top: 3em;\n  padding-bottom: 2em;\n}\n.spetial-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  height: 3em;\n}\nfooter[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--primary-color);\n  padding-left: var(--margin-left-gtsm);\n  padding-right: var(--margin-right-gtsm);\n  padding-top: 10em;\n  padding-bottom: 5em;\n}\nfooter[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 17px;\n  margin-top: 3px;\n}\nfooter[_ngcontent-%COMP%]   .icotext[_ngcontent-%COMP%] {\n  padding-left: 1.8em;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  text-decoration: underline;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: white;\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%] {\n  height: 100%;\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border: 0px solid;\n  background-color: width;\n  height: 28px;\n  width: 28px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item.fb[_ngcontent-%COMP%] {\n  background-image: url('fb.png');\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item.ig[_ngcontent-%COMP%] {\n  background-image: url('ig.png');\n}\nfooter[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   .item.tw[_ngcontent-%COMP%] {\n  background-image: url('tw.png');\n}\nfooter[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  height: 1px;\n  border-width: 0;\n  background-color: var(--primary-lighter-color);\n}\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\nfooter[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\nfooter[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBQTtBQUVBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0EscURBQUE7QUFDQTtFQUNJOzs7OztnQkFBQTtBQUtKO0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKO0FBY0E7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVhKO0FBYUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWNBLFNBQUE7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhKO0FBY0E7RUFDSSxvQ0FBQTtFQUNBLHNDQUFBO0FBWEo7QUFjQTtFQUNJLG9DQUFBO0VBQ0Esc0NBQUE7QUFYSjtBQWNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWEo7QUFjQSxTQUFBO0FBQ0E7RUFDSSwwQ0FBQTtFQUFtRSxtQkFBQTtFQUNuRSx5QkFBQTtFQUEyQixxQ0FBQTtFQUMzQixhQUFBO0VBQWUsb0NBQUE7RUFDZiwyQkFBQTtFQUE2QixxQkFBQTtFQUM3Qiw0QkFBQTtFQUE4Qiw0QkFBQTtFQUM5QixzQkFBQTtFQUF3Qiw4REFBQTtBQUw1QjtBQVFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTEo7QUFRQTtFQUNJLG9DQUFBO0VBQ0Esc0NBQUE7QUFMSjtBQVFBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FBTEo7QUFRQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFPQSxTQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0VBQW1FLG1CQUFBO0VBQ25FLHVCQUFBO0VBQXlCLHFDQUFBO0VBQ3pCLGFBQUE7RUFBZSxvQ0FBQTtFQUNmLDJCQUFBO0VBQTZCLHFCQUFBO0VBQzdCLDRCQUFBO0VBQThCLDRCQUFBO0VBQzlCLHNCQUFBO0VBQXdCLDhEQUFBO0FBRTVCO0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBRUo7QUFDQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNBO0VBQ0ksVUFBQTtBQUVKO0FBQ0E7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBR0o7QUFBQSxTQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLHdDQUFBO0VBQWlFLG1CQUFBO0VBQ2pFLHVCQUFBO0VBQXlCLHFDQUFBO0VBQ3pCLGFBQUE7RUFBZSxvQ0FBQTtFQUNmLDJCQUFBO0VBQTZCLHFCQUFBO0VBQzdCLDRCQUFBO0VBQThCLDRCQUFBO0VBQzlCLHNCQUFBO0VBQXdCLDhEQUFBO0FBUzVCO0FBTkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFTSjtBQU5BO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBU0o7QUFMQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVFKO0FBSkEsU0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFPSjtBQUpBO0VBQ0ksWUFBQTtBQU9KO0FBRkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFBaUIscUNBQUE7RUFDakIsUUFBQTtFQUFVLCtDQUFBO0VBQ1YsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQU9KO0FBSEE7RUFDSSxnQkFBQTtBQU1KO0FBSEE7RUFDSSxZQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU1KO0FBRkE7RUFDSSxZQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUtKO0FBQUE7RUFDSSxTQUFBO0FBR0o7QUFBQTtFQUNJLFdBQUE7QUFHSjtBQUFBO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUdKO0FBQUE7RUFDSSxtQkFBQTtBQUdKO0FBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFHSjtBQUFBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0FBR0o7QUFBQTtFQUNJLFlBQUE7QUFHSjtBQUFBO0VBQ0ksWUFBQTtBQUdKO0FBQUE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUdKO0FBQUE7RUFDSSwrQkFBQTtBQUdKO0FBQUE7RUFDSSwrQkFBQTtBQUdKO0FBQUE7RUFDSSwrQkFBQTtBQUdKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO0FBR0o7QUFBQTtFQUNJLGdCQUFBO0FBR0o7QUFBQTtFQUNJLG1CQUFBO0FBR0o7QUFDQTtFQUNJLG1CQUFBO0FBRUoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIHRoZSB2aWRlbzogMTAwJSB3aWR0aCBhbmQgaGVpZ2h0IHRvIGNvdmVyIHRoZSBlbnRpcmUgd2luZG93ICovXHJcblxyXG4ucGFnZS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDoyZW07XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRhaW5lci5sdHNte1xyXG4gICAgcGFkZGluZy10b3A6MWVtOyAgICBcclxufVxyXG5cclxuI215VmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxufVxyXG4gIFxyXG4vKiBBZGQgc29tZSBjb250ZW50IGF0IHRoZSBib3R0b20gb2YgdGhlIHZpZGVvL3BhZ2UgKi9cclxuLmNvbnRlbnQge1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgcGFkZGluZzogMSU7ICovXHJcbiAgICBcclxufVxyXG4uc2VjMXtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1ZW07XHJcbn1cclxuXHJcbi5zZWMxIGEuYW5jaG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBlbTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmd0c20gLnNlYzEgLmJveHsgICBcclxuICAgIFxyXG59XHJcblxyXG4ubHRzbSAuc2VjMSAuYm94eyAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uc2VjMSBoMXtcclxufVxyXG4uZ3RzbSAuc2VjMSAuYm94IGgxe1xyXG4gICAgZm9udC1zaXplOiA0MDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwOyBcclxufVxyXG4uZ3RzbSAuc2VjMSAuYm94IHB7XHJcbiAgICBmb250LXNpemU6IDE3MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41OyBcclxuICAgIFxyXG59XHJcblxyXG4vKiBzZWMyICovXHJcbi5zZWMye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxufVxyXG5cclxuLmx0c20gLnNlYzIgLmJveHtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tbGVmdC1sdHNtKTtcclxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLXJpZ2h0LWx0c20pO1xyXG59XHJcblxyXG4uZ3RzbSAuc2VjMiAuYm94e1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWd0c20pO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tcmlnaHQtZ3RzbSk7XHJcbn1cclxuXHJcbi5zZWMyIC5ib3ggLml0ZW0gaW1ne1xyXG4gICAgbWF4LWhlaWdodDogMTBlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLyogc2VjMyAqL1xyXG4uc2VjM3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctc29sdWNpb25lcy5wbmdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgaGVpZ2h0OiA3MDBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbn1cclxuXHJcbi5zZWMzIGEuYW5jaG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNWVtO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubHRzbSAuc2VjMyAuYm94e1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWx0c20pO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tcmlnaHQtbHRzbSk7XHJcbn1cclxuXHJcbi5ndHNtIC5zZWMzIC5ib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQtZ3RzbSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDllbTtcclxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLXJpZ2h0LWd0c20pO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5ndHNtIC5zZWMzIC5ib3ggaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDM1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwOyBcclxufVxyXG4uZ3RzbSAuc2VjMyAuYm94IHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS40OyBcclxuICAgIHRleHQtanVzdGlmeTogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4vKiBzZWM0ICovXHJcbi5zZWM0e1xyXG4gICAgcGFkZGluZy10b3A6IDllbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctcHJveS1sYW5pbi5wbmdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGhlaWdodDogODAwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG59XHJcblxyXG4uc2VjNCBhLmFuY2hvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwZW07XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ndHNtIC5zZWM0IC5ib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQtZ3RzbSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMGVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMGVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tcmlnaHQtZ3RzbSk7XHJcbn1cclxuXHJcbi5zZWM0IC50b3AgaDF7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDQwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uc2VjNCAuYm94IC5pdGVte1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmd0c20gLnNlYzQgLml0ZW0gaDF7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDM1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwOyBcclxufVxyXG4uZ3RzbSAuc2VjNCAuaXRlbSBwe1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDsgXHJcbiAgICB0ZXh0LWp1c3RpZnk6IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLyogc2VjNSAqL1xyXG4uc2VjNXtcclxuICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JnLWNvbnRhY3RvLnBuZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgaGVpZ2h0OiA4MDBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbn1cclxuXHJcbi5zZWM1IGEuYW5jaG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtM2VtO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZ3RzbSAuc2VjNSAuYm94e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWd0c20pO1xyXG4gICAgcGFkZGluZy10b3A6IDllbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBlbTtcclxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLXJpZ2h0LWd0c20pO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zZWM1IC50b3AgaDF7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogNDAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcblxyXG4vKiBzaWRlICovXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLndoaXRlLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi50b29sYmFye1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2V0IHRoZSBuYXZiYXIgdG8gZml4ZWQgcG9zaXRpb24gKi9cclxuICAgIHRvcDogMGVtOyAvKiBQb3NpdGlvbiB0aGUgbmF2YmFyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG5cclxuLnRvb2xiYXIgLm1lbnV7XHJcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xyXG59XHJcblxyXG4uZ3RzbSAuc3BldGlhbC10b29sYmFye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYXJnaW4tbGVmdC1ndHNtKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodC1ndHNtKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuXHJcblxyXG4ubHRzbSAuc3BldGlhbC10b29sYmFye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYXJnaW4tbGVmdC1ndHNtKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodC1ndHNtKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgcGFkZGluZy10b3A6IDNlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLnNwZXRpYWwtdG9vbGJhciBoMXtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIGhlaWdodDogM2VtO1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1tYXJnaW4tbGVmdC1ndHNtKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodC1ndHNtKTsgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMTBlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XHJcbn1cclxuXHJcbmZvb3RlciAuaWNve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG5mb290ZXIgLmljb3RleHR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MS44ZW07XHJcbn1cclxuXHJcbmZvb3RlciBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5mb290ZXIgYTpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5mb290ZXIgYTp2aXNpdGVke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5mb290ZXIgLnJlZGVze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVte1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aWR0aDsgXHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVtLmZie1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mYi5wbmdcIik7IFxyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVtLmlne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9pZy5wbmdcIik7IFxyXG59XHJcblxyXG5mb290ZXIgLnJlZGVzIC5pdGVtLnR3e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90dy5wbmdcIik7IFxyXG59XHJcblxyXG5mb290ZXIgaHIge1xyXG4gICAgaGVpZ2h0OjFweDtcclxuICAgIGJvcmRlci13aWR0aDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xyXG59XHJcblxyXG5mb290ZXIgLmZvb3RlcntcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWluZm97XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgXHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWluZm8gLmxpbmV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map