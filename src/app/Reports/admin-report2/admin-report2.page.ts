import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { AdminReportModal1Page } from '../Modal/admin-report-modal1/admin-report-modal1.page';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-admin-report2',
  templateUrl: './admin-report2.page.html',
  styleUrls: ['./admin-report2.page.scss'],
})
export class AdminReport2Page implements OnInit {

  information : any [];

  taskTypes = ['Daily', 'Weekly', 'Monthly'];
  taskNames = [{}];
  taskOptions = [{}];
  reports = [{}];
  reportsTitle = '';
  _code : any;

  form: any = {
      taskType: '',
      taskName: '',
      taskOption: '',
      startDate: '',
      endDate: ''
  };

  constructor(
      private http: HttpClient,
      private network: ReportServiceService,
      public modal: ModalController,
      public storage: Storage
      ) {}

  ngOnInit() {
      
  }

  ionViewDidEnter(){
    this.storage.get('userinfo').then((result) => {
      this._code = result.id;
      console.log(this._code);
    });
  }

  toggleSection(i) {
      this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
      this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  async presentModal() {
      const modal = await this.modal.create({
        component: AdminReportModal1Page,
        componentProps: { 
              info : this.information,
          }
      });
      return await modal.present();
    }

  // ionViewDidEnter () {
  //     this.datePicker.show({
  //         date: new Date(),
  //         mode: 'date',
  //         androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  //       }).then(
  //         date => console.log('Got date: ', date),
  //         err => console.log('Error occurred while getting date: ', err)
  //       );
  // ,private datePicker: DatePicker
  // }

  fetchTasks() {
      this.network.getTaskName(this.form.taskType,this._code).subscribe(
          (res: any) => {
              this.taskNames = res.data;
          },
          error => console.log(error)
      );
  }

  fetchOptions() {
      this.network.getoptions(this.form.taskName).subscribe(
          (res: any) => {
              this.taskOptions = res.data;
              console.log(this.taskOptions);
          },
          error => console.log(error)
      );
  }

  onClick(){
      this.network.getReportAdmin(this.form).subscribe(
          (res: any) => {
              console.log(res.studentlist);
              this.information = res.studentlist;
              this.presentModal();
          },
          error => console.log(error)
      );
  }

}