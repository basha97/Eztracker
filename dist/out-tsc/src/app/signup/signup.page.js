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
import { AuthService } from '../../app/Services/auth.service';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
var SignupPage = /** @class */ (function () {
    function SignupPage(network, navCtrl, menuController, toast, router, storage) {
        this.network = network;
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.toast = toast;
        this.router = router;
        this.storage = storage;
        this.form = {
            email: '',
            password: '',
            name: '',
            userconfirmpassword: '',
            staff: false,
            student: false,
            type: ''
        };
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.openSignup = function () {
        this.router.navigateByUrl('/login');
    };
    SignupPage.prototype.signupData = function () {
        var _this = this;
        console.log(this.form);
        if (this.form.name == '' || this.form.email == '' || this.form.password == '' || this.form.userconfirmpassword == '' || this.form.type == '') {
            this.invalidsighup();
            return false;
        }
        if (this.form.password != this.form.userconfirmpassword) {
            this.confirmpasword();
            return false;
        }
        this.network.signup(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    SignupPage.prototype.handleResponse = function (data) {
        this.presentToast();
        this.router.navigateByUrl('/login');
    };
    SignupPage.prototype.handleError = function (error) {
        this.presentToastFailed();
    };
    SignupPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'You data had been submitted',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.presentToastFailed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Fill the form correctly',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.invalidsighup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Fill the all fields',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.confirmpasword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: "password & confirm password are don't match ",
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.updatetype = function () {
        console.log(this.form.staff);
        if (this.form.staff) {
            this.form.staff = true;
            this.form.student = true;
            this.form.type = 'student';
        }
        else {
            this.form.staff = false;
            this.form.student = false;
            this.form.type = 'satff';
        }
    };
    SignupPage.prototype.updatetypestudent = function () {
        if (this.form.staff) {
            this.form.staff = false;
            this.form.student = false;
            this.form.type = 'student';
        }
        else {
            this.form.staff = true;
            this.form.student = true;
            this.form.type = 'staff';
        }
    };
    SignupPage = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        __metadata("design:paramtypes", [AuthService,
            NavController,
            MenuController,
            ToastController,
            Router,
            Storage])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map