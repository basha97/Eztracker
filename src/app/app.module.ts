import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { CalendarModule } from 'ion2-calendar';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { TaskPageModule } from './task/task.module';
import {NewtaskPageModule } from './newtask/newtask.module';
import { TaskupdatePageModule } from './taskupdate/taskupdate.module';
import { StudentReportModalPageModule } from './Reports/Modal/student-report-modal/student-report-modal.module';
import { AdminReportModalPageModule } from './Reports/Modal/admin-report-modal/admin-report-modal.module';
import { AdminReportModal1PageModule } from './Reports/Modal/admin-report-modal1/admin-report-modal1.module';
import { AdminReportConViewModalPageModule } from './Reports/Modal/admin-report-con-view-modal/admin-report-con-view-modal.module';
import { IonTextAvatar } from 'ionic-text-avatar';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
     IonicStorageModule.forRoot(),
    AppRoutingModule,
    NewtaskPageModule,
    StudentReportModalPageModule,
    AdminReportModalPageModule,
    AdminReportModal1PageModule,
    CalendarModule,
    AdminReportConViewModalPageModule,
    TaskPageModule,
    TaskupdatePageModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
