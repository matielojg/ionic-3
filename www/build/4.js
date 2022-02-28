webpackJsonp([4],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAddressPageModule", function() { return PickAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_address__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PickAddressPageModule = /** @class */ (function () {
    function PickAddressPageModule() {
    }
    PickAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pick_address__["a" /* PickAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pick_address__["a" /* PickAddressPage */]),
            ],
        })
    ], PickAddressPageModule);
    return PickAddressPageModule;
}());

//# sourceMappingURL=pick-address.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cliente_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PickAddressPage = /** @class */ (function () {
    function PickAddressPage(navCtrl, navParams, storage, clienteService, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.clienteService = clienteService;
        this.cartService = cartService;
    }
    PickAddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.clienteService.findByEmail(localUser.email)
                .subscribe(function (response) {
                _this.items = response['enderecos'];
                var cart = _this.cartService.getCart();
                _this.pedido = {
                    cliente: { id: response['id'] },
                    enderecoDeEntrega: null,
                    pagamento: null,
                    itens: cart.items.map(function (x) { return { quantidade: x.quantidade, produto: { id: x.produto.id } }; })
                };
            }, function (error) {
                if (error.status == 403) {
                    _this.navCtrl.setRoot('HomePage');
                }
            });
        }
        else {
            this.navCtrl.setRoot('HomePage');
        }
    };
    PickAddressPage.prototype.nextPage = function (item) {
        this.pedido.enderecoDeEntrega = { id: item.id };
        this.navCtrl.push('PaymentPage', { pedido: this.pedido });
    };
    PickAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pick-address',template:/*ion-inline-start:"/home/aspire/Documentos/sts-project/ws-ionic/Ionic3/src/pages/pick-address/pick-address.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Fechamento de pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n          Selecione um endereço\n        </ion-list-header>\n        <button ion-item *ngFor="let item of items" (click)="nextPage(item)">\n          <h2>{{item.logradouro}}, {{item.numero}}</h2>\n            <p>{{item.complemento}} {{item.bairro}} CEP {{item.cep}}</p>\n            <p>{{item.cidade.nome}}, {{item.cidade.estado.nome}}</p>\n        </button>\n      </ion-list>\n</ion-content>'/*ion-inline-end:"/home/aspire/Documentos/sts-project/ws-ionic/Ionic3/src/pages/pick-address/pick-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__["a" /* CartService */]])
    ], PickAddressPage);
    return PickAddressPage;
}());

//# sourceMappingURL=pick-address.js.map

/***/ })

});
//# sourceMappingURL=4.js.map