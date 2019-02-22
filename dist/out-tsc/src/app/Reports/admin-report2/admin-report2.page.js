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
import { ModalController } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { AdminReportModal1Page } from '../Modal/admin-report-modal1/admin-report-modal1.page';
import { HttpClient } from '@angular/common/http';
var AdminReport2Page = /** @class */ (function () {
    function AdminReport2Page(http, network, modal) {
        this.http = http;
        this.network = network;
        this.modal = modal;
        this.taskTypes = ['Daily', 'Weekly', 'Monthly'];
        this.taskNames = [{}];
        this.taskOptions = [{}];
        this.reports = [{}];
        this.reportsTitle = '';
        this.form = {
            taskType: '',
            taskName: '',
            taskOption: '',
            startDate: '',
            endDate: ''
        };
    }
    AdminReport2Page.prototype.ngOnInit = function () {
    };
    AdminReport2Page.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    AdminReport2Page.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    AdminReport2Page.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: AdminReportModal1Page,
                            componentProps: {
                                info: this.information,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // ionViewDidEnter () {
    //     this.datePicker.show({
    //         date: new Date(),
    //         mode: 'date',
    //         androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    //       }).then(
    //         date => console.log('Got date: ', date),
    //         err => console.log('Error occurred while getting date: ', err)
    //       );
    // ,private datePicker: DatePicker
    // }
    AdminReport2Page.prototype.fetchTasks = function () {
        var _this = this;
        this.network.getTaskName(this.form.taskType).subscribe(function (res) {
            _this.taskNames = res.data;
        }, function (error) { return console.log(error); });
    };
    AdminReport2Page.prototype.fetchOptions = function () {
        var _this = this;
        this.network.getoptions(this.form.taskName).subscribe(function (res) {
            _this.taskOptions = res.data;
            console.log(_this.taskOptions);
        }, function (error) { return console.log(error); });
    };
    AdminReport2Page.prototype.onClick = function () {
        var _this = this;
        this.network.getReportAdmin(this.form).subscribe(function (res) {
            console.log(res.studentlist);
            _this.information = res.studentlist;
            _this.presentModal();
        }, function (error) { return console.log(error); });
    };
    AdminReport2Page = __decorate([
        Component({
            selector: 'app-admin-report2',
            templateUrl: './admin-report2.page.html',
            styleUrls: ['./admin-report2.page.scss'],
        }),
        __metadata("design:paramtypes", [HttpClient,
            ReportServiceService,
            ModalController])
    ], AdminReport2Page);
    return AdminReport2Page;
}());
export { AdminReport2Page };
//# sourceMappingURL=admin-report2.page.js.map