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
import { ModalController } from '@ionic/angular';
var StudentReportModalPage = /** @class */ (function () {
    function StudentReportModalPage(modal) {
        this.modal = modal;
        this.automaticClose = false;
    }
    StudentReportModalPage.prototype.ngOnInit = function () {
        this.reportsTitle = this.title;
        this.reports = this.value;
        console.log(this.reportsTitle);
    };
    StudentReportModalPage.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    StudentReportModalPage.prototype.toggleSection = function (index) {
        this.reports[index].open = !this.reports[index].open;
        if (this.automaticClose && this.reports[index].open) {
            this.reports.filter(function (item, itemIndex) { return itemIndex != index; })
                .map(function (item) { return item.open = false; });
        }
    };
    StudentReportModalPage.prototype.toggleItem = function (index, childIndex) {
        this.reports[index].children[childIndex].open = !this.reports[index].children[childIndex].open;
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], StudentReportModalPage.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], StudentReportModalPage.prototype, "title", void 0);
    StudentReportModalPage = __decorate([
        Component({
            selector: 'app-student-report-modal',
            templateUrl: './student-report-modal.page.html',
            styleUrls: ['./student-report-modal.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController])
    ], StudentReportModalPage);
    return StudentReportModalPage;
}());
export { StudentReportModalPage };
//# sourceMappingURL=student-report-modal.page.js.map