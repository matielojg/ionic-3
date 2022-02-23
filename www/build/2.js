webpackJsonp([2],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutosPageModule = /** @class */ (function () {
    function ProdutosPageModule() {
    }
    ProdutosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */]),
            ],
        })
    ], ProdutosPageModule);
    return ProdutosPageModule;
}());

//# sourceMappingURL=produtos.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_produto_service__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProdutosPage = /** @class */ (function () {
    function ProdutosPage(navCtrl, navParams, produtoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoService = produtoService;
    }
    ProdutosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var categoria_id = this.navParams.get('categoria_id');
        this.produtoService.findByCategoria(categoria_id)
            .subscribe(function (response) {
            _this.items = response['content'];
            _this.items = response['content'];
        }, function (error) { });
    };
    ProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produtos',template:/*ion-inline-start:"/home/aspire/Documentos/sts-project/ws-ionic/Ionic3/src/pages/produtos/produtos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of items">\n      <ion-thumbnail item-start>\n        <img [src]="item.imageUrl || \'assets/imgs/prod.jpg\'">\n      </ion-thumbnail>\n      <h2>{{item.nome}}</h2>\n      <p>{{item.preco | currency}}</p>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/aspire/Documentos/sts-project/ws-ionic/Ionic3/src/pages/produtos/produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_domain_produto_service__["a" /* ProdutoService */]])
    ], ProdutosPage);
    return ProdutosPage;
}());

//# sourceMappingURL=produtos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map