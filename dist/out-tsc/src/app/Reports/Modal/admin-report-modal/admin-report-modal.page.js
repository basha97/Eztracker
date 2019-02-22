var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { ModalController } from '@ionic/angular';
var AdminReportModalPage = /** @class */ (function () {
    function AdminReportModalPage(modal, network) {
        this.modal = modal;
        this.network = network;
    }
    AdminReportModalPage.prototype.ngOnInit = function () {
        this.reports = this.value;
        console.log(this.reports);
    };
    AdminReportModalPage.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    AdminReportModalPage.prototype.toggleSection = function (i) {
        this.reports[i].open = !this.reports[i].open;
    };
    AdminReportModalPage.prototype.toggleItem = function (i, j) {
        this.reports[i].records[j].open = !this.reports[i].records[j].open;
    };
    AdminReportModalPage.prototype.tonggle = function (data) {
        if (data) {
            data.show = false;
        }
        else {
            data.show = true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AdminReportModalPage.prototype, "value", void 0);
    AdminReportModalPage = __decorate([
        Component({
            selector: 'app-admin-report-modal',
            templateUrl: './admin-report-modal.page.html',
            styleUrls: ['./admin-report-modal.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController,
            ReportServiceService])
    ], AdminReportModalPage);
    return AdminReportModalPage;
}());
export { AdminReportModalPage };
//# sourceMappingURL=admin-report-modal.page.js.map