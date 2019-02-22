var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
    { path: 'task', loadChildren: './task/task.module#TaskPageModule' },
    { path: 'newtask', loadChildren: './newtask/newtask.module#NewtaskPageModule' },
    { path: 'taskadd', loadChildren: './taskadd/taskadd.module#TaskaddPageModule' },
    { path: 'studentupdate', loadChildren: './studentupdate/studentupdate.module#StudentupdatePageModule' },
    { path: 'student-report', loadChildren: './Reports/student-report/student-report.module#StudentReportPageModule' },
    { path: 'admin-report', loadChildren: './Reports/admin-report/admin-report.module#AdminReportPageModule' },
    { path: 'student-report-modal', loadChildren: './Reports/Modal/student-report-modal/student-report-modal.module#StudentReportModalPageModule' },
    { path: 'admin-report-modal', loadChildren: './Reports/Modal/admin-report-modal/admin-report-modal.module#AdminReportModalPageModule' },
    { path: 'admin-report2', loadChildren: './Reports/admin-report2/admin-report2.module#AdminReport2PageModule' },
    { path: 'admin-report-modal1', loadChildren: './Reports/Modal/admin-report-modal1/admin-report-modal1.module#AdminReportModal1PageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map