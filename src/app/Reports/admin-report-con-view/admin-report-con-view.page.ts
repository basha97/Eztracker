import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSelect , LoadingController, AlertController  } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Storage } from '@ionic/storage';
import { CalendarComponentOptions, CalendarModalOptions, CalendarModal } from 'ion2-calendar';
import { AdminReportConViewModalPage } from '../Modal/admin-report-con-view-modal/admin-report-con-view-modal.page';

@Component({
  selector: 'app-admin-report-con-view',
  templateUrl: './admin-report-con-view.page.html',
  styleUrls: ['./admin-report-con-view.page.scss'],
})
export class AdminReportConViewPage implements OnInit {
  @ViewChild('selectedtask') selectRef:IonSelect;
  @ViewChild('selectedstudent') selectstudent:IonSelect;
  @ViewChild('selectedtaskname') selectname:IonSelect;
  @ViewChild('selectedoption') selectoption:IonSelect;

taskTypes = ['Daily', 'Weekly', 'Monthly'];
taskNames = [{}];
taskOptions = [{}];
reports = [{}];
reportsTitle = '';
stuName = [{}];
_code : any;
_sDate : any;
_eDate : any;
_taskType: any;
loading: any;  
form: any = {
    taskType: '',
    taskName: '',
    taskOption: '',
    studentName: '',
    startDate:new Date().toISOString(),
    endDate:new  Date(new Date().getTime()+(7*24*60*60*1000)).toISOString(),
    dateRange: ''
};

constructor(
  public loadingController:LoadingController,
  private network: ReportServiceService,
  public modal: ModalController,
  public auth: AuthService,
  private storage: Storage,
  private alertController: AlertController) 
  {
    this.presentAlertConfirm();
  }


  async presentLoading() {
  this.loading = await this.loadingController.create({
    message: 'wait. . .', 
  });
  return await this.loading.present();
  }

ngOnInit() {
}

async presentModal() {
  const modal = await this.modal.create({
    component: AdminReportConViewModalPage,
    componentProps: { 
          value: this.reports,
          title: this.reportsTitle,
          sDate: this._sDate,
          eDate: this._eDate,
          taskType: this._taskType
      }
  });
  return await modal.present();
}

fetchTasks() {
  this.network.getTaskName(this.form.taskType).subscribe(
      (res: any) => {
          this.taskNames = res.data;
          setTimeout(() => {
            this.selectstudent.open();
          }, 600);
      },
      error => console.log(error)
  );
  this.network.getStudent().subscribe((res: any) => {
      this.stuName = res.data;
  });
}

fetchOptions() {
  this.network.getoptions(this.form.taskName).subscribe(
      (res: any) => {
          this.taskOptions = res.data;
          
          console.log(this.taskOptions);
          setTimeout(() => {
            this.selectname.open();
          }, 600);
          
          console.log(this.form.dateRange);
      },
      error => console.log(error)
  );
}

onClick(){
    // this.presentLoading();
  console.log(this.form);
    this.network.getreportcon_view(this.form).subscribe(
        (res: any) => {
            console.log(res);
            this.reports = res.results;
            this._sDate = res.start_date_in_word;
            this._eDate = res.end_date_in_word;
            this._taskType = this.form.taskType;
            console.log(this._taskType);
            // setTimeout(()=>{
            //   this.loading.dismiss();
            // },100);
          
            this.presentModal();
        },
        error => console.log(error)
    );
}

fetchstudent(){
    this.network.getStudent().subscribe((res: any) => {
        console.log(res);
        setTimeout(() => {
          this.selectoption.open();
        }, 600);
    })
}

opentype(){
  this.selectRef.open();
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    header: 'Proceed with any one of them',
    buttons: [
      {
        text: 'Filter',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Automatic',
        handler: () => {
          console.log('Confirm Okay');
          setTimeout(() => {
            this.opentype();
            this.network.getStudent().subscribe((res: any) => {
                this.stuName = res.data;
                });
        },500);
        }
      }
    ],
  });
  await alert.present();
}



}
