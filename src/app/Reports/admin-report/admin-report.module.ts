import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule } from 'ion2-calendar';


import { IonicModule } from '@ionic/angular';

import { AdminReportPage } from './admin-report.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  declarations: [AdminReportPage]
})
export class AdminReportPageModule {}
