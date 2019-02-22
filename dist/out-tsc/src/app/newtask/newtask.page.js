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
import { NavParams, ModalController } from '@ionic/angular';
var NewtaskPage = /** @class */ (function () {
    function NewtaskPage(navParams, modalCtrl) {
        this.modalCtrl = modalCtrl;
        console.log(this.optionsList);
        console.log(this.studentList);
    }
    NewtaskPage.prototype.ngOnInit = function () {
        console.log(this.optionsList);
        console.log(this.studentList);
    };
    NewtaskPage.prototype.saveoption = function () {
        this.modalCtrl.dismiss({
            optionsList: this.studentList,
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NewtaskPage.prototype, "optionsList", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NewtaskPage.prototype, "studentList", void 0);
    NewtaskPage = __decorate([
        Component({
            selector: 'app-newtask',
            templateUrl: './newtask.page.html',
            styleUrls: ['./newtask.page.scss'],
        }),
        __metadata("design:paramtypes", [NavParams, ModalController])
    ], NewtaskPage);
    return NewtaskPage;
}());
export { NewtaskPage };
//# sourceMappingURL=newtask.page.js.map