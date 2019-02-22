import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminReportModal1Page } from './admin-report-modal1.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReportModal1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminReportModal1Page]
})
export class AdminReportModal1PageModule {}
