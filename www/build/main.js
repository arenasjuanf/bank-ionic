webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_db_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutTripPage = (function () {
    function CheckoutTripPage(modalCtrl, dbService, nav, loadingCtrl, toastCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.dbService = dbService;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        // set sample data
        this.data = this.navParams.data;
    }
    CheckoutTripPage.prototype.generarCodigo = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espera Por Favor"
        });
        loader.present();
        var objCodigo = {
            saldo: this.monto,
            codigo: new Date().getTime(),
            estado: 1,
            fk_cuenta: this.data.id
        };
        this.dbService.crearCodigo(objCodigo).subscribe(function (result) {
            if (result['success']) {
                loader.dismiss();
                _this.modalCodigo(objCodigo);
            }
        }, function (error) {
            console.log('error: ', error);
        });
    };
    CheckoutTripPage.prototype.modalCodigo = function (datos) {
        var _this = this;
        var modal = this.modalCtrl.create({
            title: 'Código: ' + datos.codigo,
            message: "Monto: " + datos.saldo,
            buttons: [
                {
                    text: 'Cerrar',
                    handler: function (data) {
                        //this.nav.setRoot(TripsPage);
                        _this.nav.pop();
                    }
                }
            ]
        });
        modal.present();
    };
    CheckoutTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout-trip',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\checkout-trip\checkout-trip.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text>{{data?.nombre}}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="checkout-trip common-bg">\n\n  <!--trip information-->\n\n  <div class="trip-info card round">\n\n    <div class="trip-image border-bottom"\n\n      [ngStyle]="{\'background-image\': \'url(\' + \'assets/img/trip/thumb/trip_\'+ data.imgNumber  +\'.jpg\' + \')\'}"></div>\n\n    <ion-grid padding>\n\n      <ion-row>\n\n        <ion-col width-66>\n\n          <h5 ion-text color="primary">{{ data.nombre }}</h5>\n\n          <div>\n\n            <span class="bold">Id Cuenta</span>\n\n            <br />\n\n            <span ion-text color="dark">{{ data.id }}</span>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <span ion-text>Saldo</span>\n\n          <h5 ion-text color="primary" class="bold" no-margin>{{ data.saldo }}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="card round" margin-top margin-bottom>\n\n    <div>\n\n      <ion-grid padding>\n\n        <ion-title class="ion-align-items-center">Retirar Monto</ion-title>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input type="number" placeholder="COP" [(ngModel)]="monto"></ion-input>\n\n              <ion-icon name="cash" item-end no-margin></ion-icon>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n  <!--submit button-->\n\n  <button ion-button [disabled]="!monto || monto > data.saldo || data.saldo < 1 || monto < 1" class="round" color="primary" margin-top full tappable\n\n    (click)="generarCodigo()">Generar Codigo de retiro</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\checkout-trip\checkout-trip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CheckoutTripPage);
    return CheckoutTripPage;
}());

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n\n  <ion-list-header class="no-margin">\n\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n\n  	<span ion-text color="primary" class="bold">Notifications</span>\n\n  </ion-list-header>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	New booking success!\n\n  </button>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	Activity rescheduled\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\settings\settings.html"*/'<!-- -->\n\n<ion-header class="no-shadow">\n\n\n\n  <ion-navbar class="no-border">\n\n    <ion-title>\n\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n\n      <span class="text-primary">Settings</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n  <!-- User settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n\n    <ion-item>\n\n      <ion-label>Language</ion-label>\n\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n\n        <ion-option value="en-GB">English (UK)</ion-option>\n\n        <ion-option value="en-CA">English (CA)</ion-option>\n\n        <ion-option value="en-AU">English (AU)</ion-option>\n\n        <ion-option value="en-IN">English (IN)</ion-option>\n\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Currency</ion-label>\n\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n\n        <ion-option value="EUR">Euro (€)</ion-option>\n\n        <ion-option value="GBP">Pound (£)</ion-option>\n\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Units</ion-label>\n\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n\n        <ion-option value="K">Kilometers (m²)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Notifications?</ion-label>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-item-group>\n\n  <!-- App settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n\n    <ion-item>\n\n      <span>Clear Private Data</span>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Push Notifications?</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span>Privacy Policy</span>\n\n    </ion-item>\n\n  </ion-item-group>  \n\n\n\n  <!--sign out button-->\n\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\register\register.html"*/'<!-- -->\n\n<ion-content class="auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding text-center>\n\n      <div class="logo"></div>\n\n      <h2 ion-text class="text-primary">\n\n        <strong>Ionic 3</strong> Start Theme\n\n      </h2>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form class="list-form">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n          Full Name\n\n        </ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n\n\n    <div margin-top>\n\n      <button ion-button block color="dark" tappable (click)="register()">\n\n        SIGN UP\n\n      </button>\n\n\n\n      <p text-center ion-text color="secondary">Or Sign Up with:</p>\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-facebook">\n\n              <ion-icon name="logo-facebook"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-twitter">\n\n              <ion-icon name="logo-twitter"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-gplus">\n\n              <ion-icon name="logo-googleplus"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_db_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_trip_checkout_trip__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TripsPage = (function () {
    function TripsPage(nav, tripService, service, alert, toastCtrl, loadingCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.service = service;
        this.alert = alert;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cuentas = [];
        this.mostrarBotonAtras = false;
        // set sample data
        // this.trips = tripService.getAll();
        this.getAccounts();
    }
    TripsPage.prototype.getAccounts = function (event) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Cargando Datos"
        });
        if (!event) {
            this.mostrarBotonAtras = true;
            loader.present();
        }
        var idUser = JSON.parse(localStorage.getItem('datosUsuario'));
        this.service.getUserAccounts(idUser['usuario']['id']).subscribe(function (result) {
            _this.cuentas = result['mensaje'];
            _this.cuentas.forEach(function (element) {
                element['imgNumber'] = Math.floor(Math.random() * 8) + 1;
            });
            if (event) {
                event.complete();
            }
            loader.dismiss();
        }, function (error) {
            console.log('error: ', error);
            loader.dismiss();
        });
    };
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
    };
    TripsPage.prototype.entrarACuenta = function (cuenta) {
        var _this = this;
        var modal = this.alert.create({
            title: 'Ver cuenta',
            message: 'Ingresa Clave De La Cuenta ' + cuenta.id,
            inputs: [
                {
                    name: 'Clave',
                    type: 'password',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: function () {
                        //console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: function () {
                        if (modal['data']['inputs'][0]['value'] === cuenta.password) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */], cuenta);
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: 'Clave Incorrecta',
                                duration: 2000,
                                position: 'bottom',
                                cssClass: 'dark-trans',
                                closeButtonText: 'OK',
                                showCloseButton: false
                            });
                            toast.present();
                        }
                    }
                }
            ]
        });
        modal.present();
    };
    TripsPage.prototype.doRefresh = function (event) {
        this.getAccounts(event);
    };
    TripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trips',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\trips\trips.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text>Cuentas</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n\n\n  <!--  -->\n\n  <ion-toolbar padding color="light">\n\n    <p ion-text no-margin class="text-white">\n\n      <strong>{{ cuentas.length }}</strong> Resultados Encontrados!\n\n    </p>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <!--list of trips-->\n\n  <div class="trip card" *ngFor="let cuenta of cuentas" tappable (click)="entrarACuenta(cuenta)" margin-bottom>\n\n    <div class="background border-bottom"\n\n      [ngStyle]="{\'background-image\': \'url(\' + \'assets/img/trip/thumb/trip_\'+ cuenta.imgNumber  +\'.jpg\' + \')\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>{{ cuenta.nombre }}</h6>\n\n          <h6 class="pull-right text-white" ion-text>{{ cuenta.saldo | currency:\'COP\':true }}</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm primary-bg">\n\n      <ion-icon name="ellipse" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">ID Cuenta: {{ cuenta.id }}</span>\n\n    </div>\n\n  </div>\n\n  <ion-card *ngIf="cuentas.length == 0">\n\n    <ion-card-content style="text-align: center;">\n\n      ----- No hay cuentas Asociadas -----\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\trips\trips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_4__services_db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TripsPage);
    return TripsPage;
}());

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripDetailPage = (function () {
    function TripDetailPage(nav, tripService, navParams) {
        this.nav = nav;
        this.tripService = tripService;
        this.navParams = navParams;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.data = this.navParams.data;
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    TripDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trip-detail',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\trip-detail\trip-detail.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text>{{ data[\'nombre\'] }}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="common-bg">\n\n  <!--slides-->\n\n  <ion-slides class="to-top" pager>\n\n    <ion-slide>\n\n      <img [src]="\'assets/img/trip/thumb/trip_\'+ data[\'imgNumber\']  +\'.jpg\'" alt="">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!--services-->\n\n  <ion-grid class="border-bottom dark-bg">\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <div class="text-sm">\n\n          <div>\n\n            <ion-icon name="time" class="text-white"></ion-icon>\n\n            <span ion-text color="light">{{ trip.time }}</span>\n\n\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!--high light-->\n\n  <div class="border-bottom" padding>\n\n    <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n\n    <ul class="highlight">\n\n      <li *ngFor="let highlight of trip.highlights">\n\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n\n        <span ion-text color="primary">{{ highlight }}</span>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n\n\n  <!--booking form-->\n\n  <div class="booking-form card round" margin>\n\n    <div class="border-bottom" padding>\n\n      <h5>{{ trip.sub_name }}</h5>\n\n\n\n      <!--choose guest-->\n\n      <ion-grid class="filters" no-padding margin-top>\n\n        <ion-row>\n\n          <ion-col class="adult" width-70>\n\n            <span ion-text color="primary"><strong>{{ trip.price_adult | currency:\'USD\':true }}</strong> Adults</span>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n\n              color="secondary"></ion-icon>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>{{ adults }}</ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row margin-top>\n\n          <ion-col width-70>\n\n            <span ion-text color="primary"><strong>{{ trip.price_child | currency:\'USD\':true }}</strong> Child (0-12\n\n              years)</span>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n\n              color="secondary"></ion-icon>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>{{ children }}</ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n    <div padding class="form-bottom">\n\n      <!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n\n      <!--booking button-->\n\n      <button ion-button class="pull-right" color="secondary" tappable (click)="checkout()">Book Now {{ adults * trip.price_adult +\n\n        children * trip.price_child | currency:\'USD\':true }}\n\n      </button>\n\n      <div class="clear"></div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--description-->\n\n  <div class="border-bottom" padding>\n\n    <span ion-text color="primary" class="bold">DESCRIPTION</span>\n\n    <p ion-text>{{ trip.description }}</p>\n\n  </div>\n\n\n\n  <!--address-->\n\n  <div class="border-bottom" padding>\n\n    <span ion-text color="primary" class="bold">LOCATION</span>\n\n    <p ion-text>{{ trip.location }}</p>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\trip-detail\trip-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TripDetailPage);
    return TripDetailPage;
}());

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(395);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_service__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trip_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_weather__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_trips_trips__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_db_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__["a" /* SearchLocationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_trips_trips__["a" /* TripsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__ionic3_start_theme',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__["a" /* SearchLocationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_trips_trips__["a" /* TripsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_8__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_21__services_db_service__["a" /* DbService */],
                __WEBPACK_IMPORTED_MODULE_9__services_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_10__services_weather__["a" /* WeatherProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { api } from './config';


var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // Private
    WeatherProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    WeatherProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { LoginPage } from "../pages/login/login";

//import { HomePage } from "../pages/home/home";
var DbService = (function () {
    function DbService(http, app
        //public nav: NavController
    ) {
        this.http = http;
        this.app = app;
        //urlBase = 'http://127.0.0.1:8000/api/';
        this.urlBase = 'http://apparqueo.com/BancoMelo/public/api/';
        if (!this.dataUser && localStorage.getItem('datosUsuario')) {
            this.dataUser = JSON.parse(localStorage.getItem('datosUsuario'))['usuario'];
        }
    }
    DbService.prototype.construirRuta = function (opcion) {
        return this.urlBase + opcion;
    };
    DbService.prototype.iniciarSesion = function (documento, clave) {
        var credenciales = 'login/' + documento + '/' + clave;
        return this.http.get(this.construirRuta(credenciales));
    };
    DbService.prototype.checkearSesion = function () {
        if (localStorage.getItem('logged') && localStorage.getItem('datosUsuario')) {
            return true;
        }
        else {
            return false;
        }
    };
    DbService.prototype.cerrarSesion = function () {
        localStorage.setItem('logged', 'false');
        localStorage.removeItem('datosUsuario');
        localStorage.clear();
        return true;
    };
    DbService.prototype.getUserAccounts = function (idUser) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Authorization': localStorage.getItem('token'),
            'tokenTime': localStorage.getItem('tiempoToken')
        });
        return this.http.get(this.construirRuta('cuentas/listar/' + idUser), { headers: this.headers });
    };
    DbService.prototype.crearCodigo = function (datos) {
        return this.http.post(this.construirRuta('codigo/crear'), datos, { headers: this.headers });
    };
    DbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]) === "function" && _b || Object])
    ], DbService);
    return DbService;
    var _a, _b;
}());

//# sourceMappingURL=db.service.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_db_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_trips_trips__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(app, platform, statusBar, splashScreen, keyboard, service) {
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.service = service;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.userData = {};
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Mis Cuentas', component: __WEBPACK_IMPORTED_MODULE_7__pages_trips_trips__["a" /* TripsPage */], icon: 'card' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            _this.check();
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            /* //*** Control Keyboard
            this.keyboard.disableScroll(true); */
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot();
        this.nav.push(page.component, {});
    };
    MyApp.prototype.logout = function () {
        if (this.service.cerrarSesion()) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        }
    };
    MyApp.prototype.check = function () {
        if (this.service.checkearSesion()) {
            //this.nav.setRoot(HomePage);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
        }
    };
    Object.defineProperty(MyApp.prototype, "navCtrl", {
        get: function () {
            return this.app.getActiveNav();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar class="user-profile">\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n              <div class="user-avatar">\n\n                <img src="../assets/img/logo_banco.png">\n\n              </div>\n\n          </ion-col>\n\n          <ion-col padding-top col-8>\n\n            <h2 ion-text class="no-margin bold text-white">\n\n              {{ service?.dataUser?.nombres }} {{ service?.dataUser?.apellidos }}\n\n            </h2>\n\n            <span ion-text color="light">Usuario</span>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row no-padding class="other-data">\n\n         \n\n          <ion-col no-padding class="column">\n\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n\n              <ion-icon name="log-out"></ion-icon>\n\n              Log Out\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content color="primary">\n\n\n\n    <ion-list class="user-list">\n\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n\n        <span ion-text color="primary">{{menuItem.title}}</span>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__services_db_service__["a" /* DbService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 248,
	"./af.js": 248,
	"./ar": 249,
	"./ar-dz": 250,
	"./ar-dz.js": 250,
	"./ar-kw": 251,
	"./ar-kw.js": 251,
	"./ar-ly": 252,
	"./ar-ly.js": 252,
	"./ar-ma": 253,
	"./ar-ma.js": 253,
	"./ar-sa": 254,
	"./ar-sa.js": 254,
	"./ar-tn": 255,
	"./ar-tn.js": 255,
	"./ar.js": 249,
	"./az": 256,
	"./az.js": 256,
	"./be": 257,
	"./be.js": 257,
	"./bg": 258,
	"./bg.js": 258,
	"./bm": 259,
	"./bm.js": 259,
	"./bn": 260,
	"./bn.js": 260,
	"./bo": 261,
	"./bo.js": 261,
	"./br": 262,
	"./br.js": 262,
	"./bs": 263,
	"./bs.js": 263,
	"./ca": 264,
	"./ca.js": 264,
	"./cs": 265,
	"./cs.js": 265,
	"./cv": 266,
	"./cv.js": 266,
	"./cy": 267,
	"./cy.js": 267,
	"./da": 268,
	"./da.js": 268,
	"./de": 269,
	"./de-at": 270,
	"./de-at.js": 270,
	"./de-ch": 271,
	"./de-ch.js": 271,
	"./de.js": 269,
	"./dv": 272,
	"./dv.js": 272,
	"./el": 273,
	"./el.js": 273,
	"./en-au": 274,
	"./en-au.js": 274,
	"./en-ca": 275,
	"./en-ca.js": 275,
	"./en-gb": 276,
	"./en-gb.js": 276,
	"./en-ie": 277,
	"./en-ie.js": 277,
	"./en-il": 278,
	"./en-il.js": 278,
	"./en-in": 279,
	"./en-in.js": 279,
	"./en-nz": 280,
	"./en-nz.js": 280,
	"./en-sg": 281,
	"./en-sg.js": 281,
	"./eo": 282,
	"./eo.js": 282,
	"./es": 283,
	"./es-do": 284,
	"./es-do.js": 284,
	"./es-us": 285,
	"./es-us.js": 285,
	"./es.js": 283,
	"./et": 286,
	"./et.js": 286,
	"./eu": 287,
	"./eu.js": 287,
	"./fa": 288,
	"./fa.js": 288,
	"./fi": 289,
	"./fi.js": 289,
	"./fil": 290,
	"./fil.js": 290,
	"./fo": 291,
	"./fo.js": 291,
	"./fr": 292,
	"./fr-ca": 293,
	"./fr-ca.js": 293,
	"./fr-ch": 294,
	"./fr-ch.js": 294,
	"./fr.js": 292,
	"./fy": 295,
	"./fy.js": 295,
	"./ga": 296,
	"./ga.js": 296,
	"./gd": 297,
	"./gd.js": 297,
	"./gl": 298,
	"./gl.js": 298,
	"./gom-deva": 299,
	"./gom-deva.js": 299,
	"./gom-latn": 300,
	"./gom-latn.js": 300,
	"./gu": 301,
	"./gu.js": 301,
	"./he": 302,
	"./he.js": 302,
	"./hi": 303,
	"./hi.js": 303,
	"./hr": 304,
	"./hr.js": 304,
	"./hu": 305,
	"./hu.js": 305,
	"./hy-am": 306,
	"./hy-am.js": 306,
	"./id": 307,
	"./id.js": 307,
	"./is": 308,
	"./is.js": 308,
	"./it": 309,
	"./it-ch": 310,
	"./it-ch.js": 310,
	"./it.js": 309,
	"./ja": 311,
	"./ja.js": 311,
	"./jv": 312,
	"./jv.js": 312,
	"./ka": 313,
	"./ka.js": 313,
	"./kk": 314,
	"./kk.js": 314,
	"./km": 315,
	"./km.js": 315,
	"./kn": 316,
	"./kn.js": 316,
	"./ko": 317,
	"./ko.js": 317,
	"./ku": 318,
	"./ku.js": 318,
	"./ky": 319,
	"./ky.js": 319,
	"./lb": 320,
	"./lb.js": 320,
	"./lo": 321,
	"./lo.js": 321,
	"./lt": 322,
	"./lt.js": 322,
	"./lv": 323,
	"./lv.js": 323,
	"./me": 324,
	"./me.js": 324,
	"./mi": 325,
	"./mi.js": 325,
	"./mk": 326,
	"./mk.js": 326,
	"./ml": 327,
	"./ml.js": 327,
	"./mn": 328,
	"./mn.js": 328,
	"./mr": 329,
	"./mr.js": 329,
	"./ms": 330,
	"./ms-my": 331,
	"./ms-my.js": 331,
	"./ms.js": 330,
	"./mt": 332,
	"./mt.js": 332,
	"./my": 333,
	"./my.js": 333,
	"./nb": 334,
	"./nb.js": 334,
	"./ne": 335,
	"./ne.js": 335,
	"./nl": 336,
	"./nl-be": 337,
	"./nl-be.js": 337,
	"./nl.js": 336,
	"./nn": 338,
	"./nn.js": 338,
	"./oc-lnc": 339,
	"./oc-lnc.js": 339,
	"./pa-in": 340,
	"./pa-in.js": 340,
	"./pl": 341,
	"./pl.js": 341,
	"./pt": 342,
	"./pt-br": 343,
	"./pt-br.js": 343,
	"./pt.js": 342,
	"./ro": 344,
	"./ro.js": 344,
	"./ru": 345,
	"./ru.js": 345,
	"./sd": 346,
	"./sd.js": 346,
	"./se": 347,
	"./se.js": 347,
	"./si": 348,
	"./si.js": 348,
	"./sk": 349,
	"./sk.js": 349,
	"./sl": 350,
	"./sl.js": 350,
	"./sq": 351,
	"./sq.js": 351,
	"./sr": 352,
	"./sr-cyrl": 353,
	"./sr-cyrl.js": 353,
	"./sr.js": 352,
	"./ss": 354,
	"./ss.js": 354,
	"./sv": 355,
	"./sv.js": 355,
	"./sw": 356,
	"./sw.js": 356,
	"./ta": 357,
	"./ta.js": 357,
	"./te": 358,
	"./te.js": 358,
	"./tet": 359,
	"./tet.js": 359,
	"./tg": 360,
	"./tg.js": 360,
	"./th": 361,
	"./th.js": 361,
	"./tl-ph": 362,
	"./tl-ph.js": 362,
	"./tlh": 363,
	"./tlh.js": 363,
	"./tr": 364,
	"./tr.js": 364,
	"./tzl": 365,
	"./tzl.js": 365,
	"./tzm": 366,
	"./tzm-latn": 367,
	"./tzm-latn.js": 367,
	"./tzm.js": 366,
	"./ug-cn": 368,
	"./ug-cn.js": 368,
	"./uk": 369,
	"./uk.js": 369,
	"./ur": 370,
	"./ur.js": 370,
	"./uz": 371,
	"./uz-latn": 372,
	"./uz-latn.js": 372,
	"./uz.js": 371,
	"./vi": 373,
	"./vi.js": 373,
	"./x-pseudo": 374,
	"./x-pseudo.js": 374,
	"./yo": 375,
	"./yo.js": 375,
	"./zh-cn": 376,
	"./zh-cn.js": 376,
	"./zh-hk": 377,
	"./zh-hk.js": 377,
	"./zh-mo": 378,
	"./zh-mo.js": 378,
	"./zh-tw": 379,
	"./zh-tw.js": 379
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 549;

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    SearchLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-location',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\search-location\search-location.html"*/'<!-- # -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="list-no-border">\n\n    <!--nearby places-->\n\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n    <!--recent places-->\n\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\search-location\search-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchLocationPage);
    return SearchLocationPage;
}());

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_db_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl, dbService, formBuilder, loadingCtrl) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.dbService = dbService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.initForm();
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.initForm = function () {
        this.formulario = this.formBuilder.group({
            documento: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            clave: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
        });
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Validando Datos"
        });
        loader.present();
        var documento = this.formulario.get('documento').value;
        var clave = this.formulario.get('clave').value;
        this.dbService.iniciarSesion(documento, clave).subscribe(function (result) {
            if (result['success']) {
                localStorage.setItem('logged', 'true');
                localStorage.setItem('datosUsuario', JSON.stringify(result));
                localStorage.setItem('token', result['token']);
                localStorage.setItem('tiempoToken', result['tokenTiempo'].exp);
                _this.dbService.dataUser = JSON.parse(localStorage.getItem('datosUsuario'))['usuario'];
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                _this.datosIncorrectos(result['msg']);
            }
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: JSON.stringify(error),
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            console.log('error: ', error);
        });
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Datos Incorrectos',
            message: "Enter you email address to send a reset link password.",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage.prototype.datosIncorrectos = function (mensaje) {
        var forgot = this.forgotCtrl.create({
            title: 'Datos Incorrectos',
            message: mensaje,
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        // nada
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\login\login.html"*/'<!-- -->\n\n<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <div class="logo-modified"></div>\n\n      <h2 ion-text class="text-primary mt-1">\n\n        <strong>Banco WD</strong> \n\n      </h2>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form class="list-form" [formGroup]="formulario">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="nroDocumento" item-start class="text-primary"></ion-icon>\n\n          Usuario\n\n        </ion-label>\n\n        <ion-input type="text" formControlName="documento"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Clave\n\n        </ion-label>\n\n        <ion-input type="password" formControlName="clave"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n\n\n\n\n    <div>\n\n      <button ion-button icon-start block color="dark" tappable [disabled]="!formulario.valid" (click)="login()">\n\n        <ion-icon name="log-in"></ion-icon>\n\n        INICIAR SESIÓN\n\n      </button>\n\n\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__services_db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_db_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(nav, popoverCtrl, service, loadingCtrl) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.cantidad = 0;
        this.saldo = 0;
        this.fecha = __WEBPACK_IMPORTED_MODULE_2_moment__().locale('es').format('LL');
        this.getCuentas();
    }
    HomePage.prototype.getCuentas = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Cargando Datos"
        });
        loader.present();
        this.service.getUserAccounts(this.service.dataUser.id).subscribe(function (result) {
            if (result['mensaje']) {
                _this.saldo = _this.sumarSaldo(result['mensaje']);
                _this.cantidad = result['mensaje'].length;
            }
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
            console.log(error);
        });
    };
    HomePage.prototype.sumarSaldo = function (array) {
        var valor = 0;
        array.forEach(function (x) {
            return valor += x.saldo;
        });
        return valor;
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\home\home.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <strong>Banco WD</strong>\n\n    </ion-title>\n\n   <!--  <ion-buttons end>\n\n      <button ion-button tappable (click)="presentNotifications($event)">\n\n        <ion-icon name="notifications"></ion-icon>\n\n      </button>\n\n      <button ion-button tappable (click)="goToAccount()">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="animated fadeIn common-bg">\n\n\n\n\n\n  <main>\n\n\n\n    <!-- Picture and name of encabezado -->\n\n    <section class="encabezado">\n\n      <div></div>\n\n      <h1>{{ service?.dataUser?.nombres }} {{ service?.dataUser?.apellidos }}</h1>\n\n    </section>\n\n    <!-- Number of tables to book -->\n\n    <section class="number-of-tables">\n\n      <h2>Cantidad de cuentas</h2>\n\n      <div class="counter">{{cantidad}}</div>\n\n    </section>\n\n    <section class="saldo">\n\n      <h2>Saldo Total</h2>\n\n      <div>$ {{saldo}}</div>\n\n    </section>\n\n    <!-- Date and time -->\n\n    <section class="choose-date">\n\n      <h2>Fecha Actual</h2>\n\n      <div>{{fecha}}</div>\n\n    </section>\n\n    \n\n  </main>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Hurtatis\Documents\bank-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__services_db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.js.map