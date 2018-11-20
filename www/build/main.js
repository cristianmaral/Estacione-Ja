webpackJsonp([0],{

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_bluetooth_serial__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpClient, bluetoothSerial) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.bluetoothSerial = bluetoothSerial;
        this.success = function (data) { return console.log(data); };
        this.fail = function (error) { return console.log("ERROR"); };
        __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"].defaults.global.legend.display = false;
        //this.mensagem = this.httpClient.get(this.servidor);
        this.bluetoothSerial.connect("3C:71:BF:0C:71:36").subscribe(this.success, this.fail);
    }
    HomePage.prototype.sleep = function (delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay)
            ;
    };
    HomePage.prototype.calc = function (tipo) {
        var _this = this;
        this.bluetoothSerial.write("g").then(this.success, this.fail);
        this.bluetoothSerial.readUntil("\n").then(function (data) {
            console.log(data);
            var geral = data.split(",");
            var andar_geral = [0, 0, 0, 0];
            andar_geral[0] = parseInt(geral[0]);
            andar_geral[1] = parseInt(geral[1]);
            andar_geral[2] = parseInt(geral[2]);
            andar_geral[3] = parseInt(geral[3]);
            if (tipo == "barraGeral") {
                _this.calcBarraGeral(andar_geral);
            }
        });
        this.bluetoothSerial.readUntil("\n").then(function (data) {
            console.log(data);
            var andar1 = data.split(",");
            var andar_1 = [0, 0, 0, 0];
            andar_1[0] = parseInt(andar1[0]);
            andar_1[1] = parseInt(andar1[1]);
            andar_1[2] = parseInt(andar1[2]);
            andar_1[3] = parseInt(andar1[3]);
            if (tipo == "barra1") {
                _this.calcBarraGeral(andar_1);
            }
        });
        this.bluetoothSerial.readUntil("\n").then(function (data) {
            console.log(data);
            var andar2 = data.split(",");
            var andar_2 = [0, 0, 0, 0];
            andar_2[0] = parseInt(andar2[0]);
            andar_2[1] = parseInt(andar2[1]);
            andar_2[2] = parseInt(andar2[2]);
            andar_2[3] = parseInt(andar2[3]);
            if (tipo == "barra2") {
                _this.calcBarraGeral(andar_2);
            }
        });
    };
    HomePage.prototype.calcBarraGeral = function (valores) {
        if (this.grafico != null) {
            this.grafico.destroy();
        }
        document.getElementById("teste").style.display = 'none';
        this.grafico = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](document.getElementById("graficoBarraCanvas"), {
            type: 'bar',
            data: {
                labels: ["Disponíveis", "Ocupadas", "Idosos", "Deficientes"],
                datasets: [{
                        backgroundColor: ["#0dbf10", "#bf0d0d", "#ecef2f", "#190f89"],
                        data: [valores[0], valores[1], valores[2], valores[3]]
                    }]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    xAxes: [{
                            ticks: {
                                autoSkip: false
                            }
                        }]
                }
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/cristian/Desktop/Estacione Já/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Estatísticas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n  <div class="logo">Estacione Já</div>\n  <div padding>\n    <ion-segment [(ngModel)]="segment" (ionChange)="calc(segment)">\n      <ion-segment-button  value="barraGeral">\n        Geral\n      </ion-segment-button>\n      <ion-segment-button value="barra1">\n        Andar 1\n      </ion-segment-button>\n	  <ion-segment-button value="barra2">\n        Andar 2\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div align=\'center\'>\n    <ion-icon id="teste" name=\'car\' class="icone"></ion-icon>\n  </div>\n  <canvas id="graficoBarraCanvas" width="260" height="300"></canvas>\n</ion-content>\n\n<ion-footer>\n  <div padding class="foottitle"> Vers&atilde;o 1.0.2</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cristian/Desktop/Estacione Já/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    AboutPage_1 = AboutPage;
    AboutPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(AboutPage_1, {
            item: item
        });
    };
    AboutPage = AboutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/cristian/Desktop/Estacione Já/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sobre o aplicativo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="about">\n  O projeto Estacione Já foi desenvolvido com o intuito de facilitar a procura por uma vaga em grandes estacionamentos.<br><p>\n  No aplicativo é possível consultar a quantidade de vagas do estacionamento que estão disponíveis e ocupadas assim como se há vagas para deficientes e/ou\n  idosos.</p> Você pode consultar pelo estacionamento como um todo ou dividir sua pesquisa por andar, para ver como está a ocupação do estacionamento e\n  então se dirigir para um andar onde se há mais vagas disponíveis para você.\n</ion-content>\n'/*ion-inline-end:"/home/cristian/Desktop/Estacione Já/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_bluetooth_serial__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Estatísticas', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'car' },
            { title: 'Sobre o aplicativo', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: 'at' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-app',template:/*ion-inline-start:"/home/cristian/Desktop/Estacione Já/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="menu-background">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="menu-items">\n        <ion-icon name="{{p.icon}}" item-start></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/cristian/Desktop/Estacione Já/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 213,
	"./af.js": 213,
	"./ar": 214,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 214,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bm": 224,
	"./bm.js": 224,
	"./bn": 225,
	"./bn.js": 225,
	"./bo": 226,
	"./bo.js": 226,
	"./br": 227,
	"./br.js": 227,
	"./bs": 228,
	"./bs.js": 228,
	"./ca": 229,
	"./ca.js": 229,
	"./cs": 230,
	"./cs.js": 230,
	"./cv": 231,
	"./cv.js": 231,
	"./cy": 232,
	"./cy.js": 232,
	"./da": 233,
	"./da.js": 233,
	"./de": 234,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 234,
	"./dv": 237,
	"./dv.js": 237,
	"./el": 238,
	"./el.js": 238,
	"./en-au": 239,
	"./en-au.js": 239,
	"./en-ca": 240,
	"./en-ca.js": 240,
	"./en-gb": 241,
	"./en-gb.js": 241,
	"./en-ie": 242,
	"./en-ie.js": 242,
	"./en-il": 243,
	"./en-il.js": 243,
	"./en-nz": 244,
	"./en-nz.js": 244,
	"./eo": 245,
	"./eo.js": 245,
	"./es": 246,
	"./es-do": 247,
	"./es-do.js": 247,
	"./es-us": 248,
	"./es-us.js": 248,
	"./es.js": 246,
	"./et": 249,
	"./et.js": 249,
	"./eu": 250,
	"./eu.js": 250,
	"./fa": 251,
	"./fa.js": 251,
	"./fi": 252,
	"./fi.js": 252,
	"./fo": 253,
	"./fo.js": 253,
	"./fr": 254,
	"./fr-ca": 255,
	"./fr-ca.js": 255,
	"./fr-ch": 256,
	"./fr-ch.js": 256,
	"./fr.js": 254,
	"./fy": 257,
	"./fy.js": 257,
	"./gd": 258,
	"./gd.js": 258,
	"./gl": 259,
	"./gl.js": 259,
	"./gom-latn": 260,
	"./gom-latn.js": 260,
	"./gu": 261,
	"./gu.js": 261,
	"./he": 262,
	"./he.js": 262,
	"./hi": 263,
	"./hi.js": 263,
	"./hr": 264,
	"./hr.js": 264,
	"./hu": 265,
	"./hu.js": 265,
	"./hy-am": 266,
	"./hy-am.js": 266,
	"./id": 267,
	"./id.js": 267,
	"./is": 268,
	"./is.js": 268,
	"./it": 269,
	"./it.js": 269,
	"./ja": 270,
	"./ja.js": 270,
	"./jv": 271,
	"./jv.js": 271,
	"./ka": 272,
	"./ka.js": 272,
	"./kk": 273,
	"./kk.js": 273,
	"./km": 274,
	"./km.js": 274,
	"./kn": 275,
	"./kn.js": 275,
	"./ko": 276,
	"./ko.js": 276,
	"./ky": 277,
	"./ky.js": 277,
	"./lb": 278,
	"./lb.js": 278,
	"./lo": 279,
	"./lo.js": 279,
	"./lt": 280,
	"./lt.js": 280,
	"./lv": 281,
	"./lv.js": 281,
	"./me": 282,
	"./me.js": 282,
	"./mi": 283,
	"./mi.js": 283,
	"./mk": 284,
	"./mk.js": 284,
	"./ml": 285,
	"./ml.js": 285,
	"./mn": 286,
	"./mn.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./mt": 290,
	"./mt.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 294,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 294,
	"./nn": 296,
	"./nn.js": 296,
	"./pa-in": 297,
	"./pa-in.js": 297,
	"./pl": 298,
	"./pl.js": 298,
	"./pt": 299,
	"./pt-br": 300,
	"./pt-br.js": 300,
	"./pt.js": 299,
	"./ro": 301,
	"./ro.js": 301,
	"./ru": 302,
	"./ru.js": 302,
	"./sd": 303,
	"./sd.js": 303,
	"./se": 304,
	"./se.js": 304,
	"./si": 305,
	"./si.js": 305,
	"./sk": 306,
	"./sk.js": 306,
	"./sl": 307,
	"./sl.js": 307,
	"./sq": 308,
	"./sq.js": 308,
	"./sr": 309,
	"./sr-cyrl": 310,
	"./sr-cyrl.js": 310,
	"./sr.js": 309,
	"./ss": 311,
	"./ss.js": 311,
	"./sv": 312,
	"./sv.js": 312,
	"./sw": 313,
	"./sw.js": 313,
	"./ta": 314,
	"./ta.js": 314,
	"./te": 315,
	"./te.js": 315,
	"./tet": 316,
	"./tet.js": 316,
	"./tg": 317,
	"./tg.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./ug-cn": 325,
	"./ug-cn.js": 325,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
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
webpackContext.id = 441;

/***/ })

},[337]);
//# sourceMappingURL=main.js.map