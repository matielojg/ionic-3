webpackJsonp([1],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationPageModule", function() { return OrderConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_pedido_service__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_confirmation__ = __webpack_require__(710);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderConfirmationPageModule = /** @class */ (function () {
    function OrderConfirmationPageModule() {
    }
    OrderConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__order_confirmation__["a" /* OrderConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__order_confirmation__["a" /* OrderConfirmationPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_domain_pedido_service__["a" /* PedidoService */]
            ]
        })
    ], OrderConfirmationPageModule);
    return OrderConfirmationPageModule;
}());

//# sourceMappingURL=order-confirmation.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PedidoService = /** @class */ (function () {
    function PedidoService(http) {
        this.http = http;
    }
    PedidoService.prototype.insert = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/pedidos", obj, {
            observe: 'response',
            responseType: 'text'
        });
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PedidoService);
    return PedidoService;
}());

//# sourceMappingURL=pedido.service.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cliente_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_pedido_service__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderConfirmationPage = /** @class */ (function () {
    function OrderConfirmationPage(navCtrl, navParams, clienteService, cartService, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteService = clienteService;
        this.cartService = cartService;
        this.pedidoService = pedidoService;
        this.pedido = this.navParams.get('pedido');
    }
    OrderConfirmationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cartItems = this.cartService.getCart().items;
        this.clienteService.findById(this.pedido.cliente.id)
            .subscribe(function (response) {
            _this.cliente = response;
            _this.endereco = _this.findEndereco(_this.pedido.enderecoDeEntrega.id, response['enderecos']);
        }, function (error) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    OrderConfirmationPage.prototype.findEndereco = function (id, list) {
        var position = list.findIndex(function (x) { return x.id == id; });
        return list[position];
    };
    OrderConfirmationPage.prototype.total = function () {
        return this.cartService.total();
    };
    OrderConfirmationPage.prototype.back = function () {
        this.navCtrl.setRoot('CartPage');
    };
    OrderConfirmationPage.prototype.home = function () {
        this.navCtrl.setRoot('CategoriasPage');
    };
    OrderConfirmationPage.prototype.checkout = function () {
        var _this = this;
        this.pedidoService.insert(this.pedido)
            .subscribe(function (response) {
            _this.cartService.createOrClearCart();
            _this.codpedido = _this.extractId(response.headers.get('location'));
        }, function (error) {
            if (error.status == 403) {
                _this.navCtrl.setRoot('HomePage');
            }
        });
    };
    OrderConfirmationPage.prototype.extractId = function (location) {
        var position = location.lastIndexOf('/');
        return location.substring(position + 1, location.length);
    };
    OrderConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-confirmation',template:/*ion-inline-start:"/home/aspire/Documentos/sts-project/ws-ionic/Ionic3/src/pages/order-confirmation/order-confirmation.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="codpedido">Pedido registrado!</ion-title>\n    <ion-title *ngIf="!codpedido">Confira seu pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="!codpedido">\n    <ion-card>\n      <ion-card-header>\n        Itens do pedido\n      </ion-card-header>\n      \n      <ion-list>\n        <ion-item *ngFor="let item of cartItems">\n          <ion-thumbnail item-start>\n            <img [src]="item.produto.imageUrl || \'assets/imgs/prod.jpg\'">\n          </ion-thumbnail>\n          <h2>{{item.produto.nome}}</h2>\n          <p>{{item.produto.preco | currency}}</p>\n          <p class="nolinebreak">{{item.quantidade}}</p>\n          <p item-end>{{item.produto.preco * item.quantidade | currency}}</p>\n        </ion-item> \n\n        <ion-item>\n          <h2>Total</h2>\n          <h2 item-end>{{total() | currency}}</h2>\n        </ion-item>\n      </ion-list> \n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n          Cliente\n        </ion-card-header>\n        <ion-item>\n          <h2>{{cliente?.nome}}</h2>\n          <p>{{cliente?.email}}</p>\n        </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Endere??o de entrega\n      </ion-card-header>\n    \n      <ion-item>\n        <h2>{{endereco?.logradouro}}, {{endereco?.numero}}</h2>\n        <p>{{endereco?.complemento}} {{endereco?.bairro}} CEP {{endereco?.cep}}</p>\n        <p>{{endereco?.cidade.nome}}, {{endereco?.cidade.estado.nome}}</p>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Pagamento\n      </ion-card-header>\n    \n      <ion-item *ngIf="pedido.pagamento[\'@type\']==\'pagamentoComCartao\'">\n        <h3>Pagamento com cart??o</h3>\n        <p>Parcelas: {{pedido.pagamento.numeroDeParcelas}}</p>\n      </ion-item>\n      <ion-item *ngIf="pedido.pagamento[\'@type\']==\'pagamentoComBoleto\'">\n        <h3>Pagamento com boleto</h3>\n      </ion-item>\n    </ion-card>\n\n    <button ion-button block (click)="checkout()">Confirmar pedido</button>\n    <button ion-button block outline (click)="back()">Voltar</button>\n  </div>\n\n  <div *ngIf="codpedido">\n    <ion-card>\n        <ion-card-header>\n          Seu pedido foi registrado!\n        </ion-card-header>\n        <ion-item>\n          <h2>C??digo do pedido: {{codpedido}}</h2>\n          <p>Verifique seu email</p>\n        </ion-item>\n    </ion-card>\n\n    <button ion-button block outline (click)="home()">Voltar</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/aspire/Documentos/sts-project/ws-ionic/Ionic3/src/pages/order-confirmation/order-confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_pedido_service__["a" /* PedidoService */]])
    ], OrderConfirmationPage);
    return OrderConfirmationPage;
}());

//# sourceMappingURL=order-confirmation.js.map

/***/ })

});
//# sourceMappingURL=1.js.map