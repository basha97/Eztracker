var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
var TaskPage = /** @class */ (function () {
    function TaskPage(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.form = {};
    }
    TaskPage.prototype.ngOnInit = function () {
    };
    // async addtask(){
    // 	const modal = await this.modalCtrl.create({
    //     component: NewtaskPage,
    //     componentProps: { value: 123 }
    //   });
    //   return await modal.present();
    // }
    TaskPage.prototype.addtask = function () {
        this.router.navigateByUrl('/newtask');
    };
    TaskPage = __decorate([
        Component({
            selector: 'app-task',
            templateUrl: './task.page.html',
            styleUrls: ['./task.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController, Router])
    ], TaskPage);
    return TaskPage;
}());
export { TaskPage };
//# sourceMappingURL=task.page.js.map