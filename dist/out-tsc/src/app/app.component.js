var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { Platform, Events, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AuthService } from '../app/Services/auth.service';
import { MenuController } from '@ionic/angular';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, storage, router, network, menuController, event, toast) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.router = router;
        this.network = network;
        this.menuController = menuController;
        this.event = event;
        this.toast = toast;
        this.firstmenu = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            }, {
                title: 'Tracker',
                url: '/studentupdate',
                icon: 'list'
            },
            {
                title: 'Report',
                url: '/student-report',
                icon: 'list'
            }
        ];
        this.secondmenu = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Tracker',
                url: '/task',
                icon: 'list'
            },
            {
                title: 'Add Tracker',
                url: '/taskadd',
                icon: 'list'
            },
            {
                title: 'Report 1',
                url: '/admin-report',
                icon: 'list'
            },
            {
                title: 'Report 2',
                url: '/admin-report2',
                icon: 'list'
            }
        ];
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'List',
                url: '/list',
                icon: 'list'
            },
            {
                title: 'login',
                url: '/login',
                icon: 'bookmark'
            },
            {
                title: 'signup',
                url: '/signup',
                icon: 'list'
            },
            {
                title: 'Task',
                url: '/task',
                icon: 'list'
            },
            {
                title: 'addtask',
                url: '/taskadd',
                icon: 'list'
            }
        ];
        this.initializeApp();
        this.storage.get('userinfo').then(function (val) {
            console.log(val);
            if (val) {
                console.log(val.type);
                if (val.type == 'student') {
                    _this.appPages = _this.firstmenu;
                }
                else {
                    _this.appPages = _this.secondmenu;
                }
            }
        });
        storage.get('token').then(function (val) {
            console.log(val);
            if (val) {
                _this.router.navigateByUrl('/home');
            }
            else {
                _this.router.navigateByUrl('/login');
            }
        });
        this.event.subscribe('user:loggedIn', function (type) {
            _this.appPages = (type == 'student') ? _this.firstmenu : _this.secondmenu;
        });
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.userId = val;
            console.log(_this.userId);
            //this.router.navigateByUrl('/home');
        });
        this.network.logout(this.userId).subscribe(function (res) {
            console.log(res);
            _this.presentToastFailed();
            _this.storage.clear().then(function () {
                console.log('all keys cleared');
                _this.router.navigateByUrl('/login');
            });
        });
    };
    AppComponent.prototype.presentToastFailed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Logged out successfully',
                            cssClass: "toast",
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Storage,
            Router,
            AuthService,
            MenuController,
            Events,
            ToastController])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map