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
import { ModalController, ToastController } from '@ionic/angular';
import { NewtaskPage } from '../newtask/newtask.page';
import { AuthService } from '../../app/Services/auth.service';
var TaskaddPage = /** @class */ (function () {
    function TaskaddPage(modalCtrl, network, toast) {
        this.modalCtrl = modalCtrl;
        this.network = network;
        this.toast = toast;
        this.form = {
            studentList: [],
            trackecode: '',
            groupname: '',
            taskname: '',
            startdate: new Date().toISOString(),
            enddate: new Date().toISOString(),
            selectstudent: [],
            optionsList: [{
                    options: ''
                }]
        };
        this.color = [
            'color-one',
            'color-two',
            'color-three',
            'color-four',
            'color-five'
        ];
    }
    TaskaddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.network.getsudent().subscribe(function (res) {
            console.log(res);
            _this.students = res.data;
        });
    };
    TaskaddPage.prototype.savetask = function () {
        console.log(this.form);
        console.log(this.form.studentList);
        this.network.addtask(this.form).subscribe(function (res) {
            console.log(res);
        });
        this.presentToastFailed();
    };
    TaskaddPage.prototype.addoption = function (e) {
        console.log(this.taskname);
        this.form.optionsList.push({
            options: this.taskname
        });
        this.taskname = '';
        console.log(this.form.optionsList);
    };
    TaskaddPage.prototype.updateStudentSelection = function () {
        for (var i = 0; i < this.students.length; i++) {
            if (this.form.selectstudent.indexOf(this.students[i].id.toString()) != -1) {
                console.log(this.students[i].fullname);
                this.form.studentList.push(this.students[i]);
                console.log(this.form.studentList);
            }
        }
    };
    TaskaddPage.prototype.removeoption = function (index) {
        this.form.optionsList.splice(index, 1);
    };
    TaskaddPage.prototype.presentToastFailed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'task Created successfully',
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
    TaskaddPage.prototype.addtask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: NewtaskPage,
                            componentProps: {
                                optionsList: this.form.optionsList,
                                studentList: this.form.studentList
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskaddPage = __decorate([
        Component({
            selector: 'app-taskadd',
            templateUrl: './taskadd.page.html',
            styleUrls: ['./taskadd.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController, AuthService, ToastController])
    ], TaskaddPage);
    return TaskaddPage;
}());
export { TaskaddPage };
//# sourceMappingURL=taskadd.page.js.map