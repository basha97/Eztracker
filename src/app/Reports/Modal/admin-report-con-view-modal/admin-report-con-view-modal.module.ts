import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminReportConViewModalPage } from './admin-report-con-view-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReportConViewModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminReportConViewModalPage]
})
export class AdminReportConViewModalPageModule {}
