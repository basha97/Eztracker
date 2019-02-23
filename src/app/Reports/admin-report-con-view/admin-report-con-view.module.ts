import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminReportConViewPage } from './admin-report-con-view.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReportConViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminReportConViewPage]
})
export class AdminReportConViewPageModule {}
