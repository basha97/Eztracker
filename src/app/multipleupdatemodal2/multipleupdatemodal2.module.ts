import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Multipleupdatemodal2Page } from './multipleupdatemodal2.page';

const routes: Routes = [
  {
    path: '',
    component: Multipleupdatemodal2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Multipleupdatemodal2Page]
})
export class Multipleupdatemodal2PageModule {}
