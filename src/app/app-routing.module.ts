import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  { path: 'admin-report-modal1', loadChildren: './Reports/Modal/admin-report-modal1/admin-report-modal1.module#AdminReportModal1PageModule' },
  { path: 'color', loadChildren: './master/color/color.module#ColorPageModule' },
  { path: 'option', loadChildren: './master/option/option.module#OptionPageModule' },  { path: 'taskitem', loadChildren: './taskitem/taskitem.module#TaskitemPageModule' },
  { path: 'admin-report-con-view', loadChildren: './Reports/admin-report-con-view/admin-report-con-view.module#AdminReportConViewPageModule' },
  { path: 'admin-report-con-view-modal', loadChildren: './Reports/Modal/admin-report-con-view-modal/admin-report-con-view-modal.module#AdminReportConViewModalPageModule' },
  { path: 'taskupdate', loadChildren: './taskupdate/taskupdate.module#TaskupdatePageModule' },
  { path: 'homesecond', loadChildren: './homesecond/homesecond.module#HomesecondPageModule' },
  { path: 'multipleupdate', loadChildren: './multipleupdate/multipleupdate.module#MultipleupdatePageModule' },
  { path: 'multipleupdatemodal', loadChildren: './multipleupdatemodal/multipleupdatemodal.module#MultipleupdatemodalPageModule' },
  { path: 'multipleupdatemodal2', loadChildren: './multipleupdatemodal2/multipleupdatemodal2.module#Multipleupdatemodal2PageModule' },



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
