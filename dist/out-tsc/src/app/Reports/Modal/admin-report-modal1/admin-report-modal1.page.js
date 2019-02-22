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
var AdminReportModal1Page = /** @class */ (function () {
    function AdminReportModal1Page(modal, network) {
        this.modal = modal;
        this.network = network;
        this.loadingChild = false;
    }
    AdminReportModal1Page.prototype.ngOnInit = function () {
        this.reports = this.info;
        console.log(this.reports);
        this.network.getStudent().subscribe();
    };
    AdminReportModal1Page.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    AdminReportModal1Page.prototype.toggleSection = function (i) {
        this.reports[i].open = !this.reports[i].open;
    };
    AdminReportModal1Page.prototype.toggleItem = function (i, j) {
        this.reports[i].records[j].open = !this.reports[i].records[j].open;
    };
    AdminReportModal1Page.prototype.segmentChanged = function (e) {
        this.changeView(e.detail.value);
        console.log(this.changeView);
    };
    AdminReportModal1Page.prototype.changeView = function (type) {
        this.viewType = type;
        console.log(this.viewType);
        if (type == 'list') {
            this.reports = this.info;
            console.log(this.reports);
        }
        else if (type == 'consolidated') {
            console.log('consolated');
        }
        else {
            console.log('Not match');
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AdminReportModal1Page.prototype, "info", void 0);
    AdminReportModal1Page = __decorate([
        Component({
            selector: 'app-admin-report-modal1',
            templateUrl: './admin-report-modal1.page.html',
            styleUrls: ['./admin-report-modal1.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController,
            ReportServiceService])
    ], AdminReportModal1Page);
    return AdminReportModal1Page;
}());
export { AdminReportModal1Page };
//# sourceMappingURL=admin-report-modal1.page.js.map