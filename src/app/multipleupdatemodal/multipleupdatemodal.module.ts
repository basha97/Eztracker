import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultipleupdatemodalPage } from './multipleupdatemodal.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleupdatemodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MultipleupdatemodalPage]
})
export class MultipleupdatemodalPageModule {}
