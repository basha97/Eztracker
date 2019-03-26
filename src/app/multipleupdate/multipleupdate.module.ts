import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultipleupdatePage } from './multipleupdate.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleupdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MultipleupdatePage]
})
export class MultipleupdatePageModule {}
