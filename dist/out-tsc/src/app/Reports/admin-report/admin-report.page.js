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
import { Component, ViewChild } from '@angular/core';
import { ModalController, IonSelect } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { AdminReportModalPage } from '../Modal/admin-report-modal/admin-report-modal.page';
import { AuthService } from 'src/app/Services/auth.service';
var AdminReportPage = /** @class */ (function () {
    function AdminReportPage(network, modal, auth) {
        var _this = this;
        this.network = network;
        this.modal = modal;
        this.auth = auth;
        this.taskTypes = ['Daily', 'Weekly', 'Monthly'];
        this.taskNames = [{}];
        this.taskOptions = [{}];
        this.reports = [{}];
        this.reportsTitle = '';
        this.stuName = [{}];
        this.form = {
            taskType: '',
            taskName: '',
            taskOption: '',
            studentName: '',
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString()
        };
        setTimeout(function () {
            _this.opentype();
            _this.network.getStudent().subscribe(function (res) {
                _this.stuName = res.data;
            });
        }, 500);
    }
    AdminReportPage.prototype.ngOnInit = function () {
    };
    AdminReportPage.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: AdminReportModalPage,
                            componentProps: {
                                value: this.reports,
                                title: this.reportsTitle
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
    //   fetchTasks() {
    //       this.network.getTaskName(this.form.taskType).subscribe(
    //           (res: any) => {
    //               this.taskNames = res.data;
    //           },
    //           error => console.log(error)
    //       );
    //       this.network.getStudent().subscribe((res: any) => {
    //           this.stuName = res.data;
    //       });
    //   }
    AdminReportPage.prototype.fetchOptions = function () {
        var _this = this;
        this.network.getoptions(this.form.taskName).subscribe(function (res) {
            _this.taskOptions = res.data;
            console.log(_this.taskOptions);
        }, function (error) { return console.log(error); });
    };
    AdminReportPage.prototype.onClick = function () {
        var _this = this;
        this.network.getreportcon_view(this.form).subscribe(function (res) {
            console.log(res);
            _this.reports = res.results;
            console.log(_this.reports);
            _this.presentModal();
        }, function (error) { return console.log(error); });
    };
    AdminReportPage.prototype.fetchstudent = function () {
        this.network.getStudent().subscribe(function (res) {
            console.log(res);
        });
    };
    AdminReportPage.prototype.fetchTasks = function () {
        this.auth.taskame(this.form.taskType);
    };
    AdminReportPage.prototype.opentype = function () {
        this.selectRef.open();
    };
    __decorate([
        ViewChild('selectedtype'),
        __metadata("design:type", IonSelect)
    ], AdminReportPage.prototype, "selectRef", void 0);
    __decorate([
        ViewChild('selectedstudent'),
        __metadata("design:type", IonSelect)
    ], AdminReportPage.prototype, "selectedstudent", void 0);
    __decorate([
        ViewChild('selectedtask'),
        __metadata("design:type", IonSelect)
    ], AdminReportPage.prototype, "selectedtask", void 0);
    __decorate([
        ViewChild('selectedoption'),
        __metadata("design:type", IonSelect)
    ], AdminReportPage.prototype, "selectedoption", void 0);
    AdminReportPage = __decorate([
        Component({
            selector: 'app-admin-report',
            templateUrl: './admin-report.page.html',
            styleUrls: ['./admin-report.page.scss'],
        }),
        __metadata("design:paramtypes", [ReportServiceService, ModalController, AuthService])
    ], AdminReportPage);
    return AdminReportPage;
}());
export { AdminReportPage };
//# sourceMappingURL=admin-report.page.js.map