import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController,IonSelect } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { StudentReportModalPage } from '../Modal/student-report-modal/student-report-modal.page';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.page.html',
  styleUrls: ['./student-report.page.scss'],
})
export class StudentReportPage implements OnInit {

    @ViewChild('selectedtask') selectRef:IonSelect;
    @ViewChild('selectedstudent') selectstudent:IonSelect;
    @ViewChild('selectedtaskname') selectname:IonSelect;
    @ViewChild('selectedoption') selectoption:IonSelect;


  taskTypes = ['Daily', 'Weekly', 'Monthly'];
  taskNames = [{}];
  taskOptions = [{}];
  reports = [{}];
  reportsTitle = '';

  form: any = {
      taskType: '',
      taskName: '',
      taskOption: '',
      startDate: new Date().toISOString(),
      endDate: new  Date(new Date().getTime()+(7*24*60*60*1000)).toISOString()
  };

  constructor(private network: ReportServiceService, public modal: ModalController) { 
    setTimeout(() => {
        this.selectRef.open();
      }, 500);
  }

  ngOnInit() {
      
  }
  async presentModal() {
      const modal = await this.modal.create({
        component: StudentReportModalPage,
        componentProps: { 
              value: this.reports,
              title: this.reportsTitle
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
      this.network.getTaskName(this.form.taskType).subscribe(
          (res: any) => {
              this.taskNames = res.data;
              setTimeout(() => {
                this.selectoption.open();
              }, 600);
          },
          error => console.log(error)
      );
  }

  fetchOptions() {
      this.network.getoptions(this.form.taskName).subscribe(
          (res: any) => {
              this.taskOptions = res.data;
              console.log(this.taskOptions);
              setTimeout(() => {
                this.selectname.open();
              }, 600);
          },
          error => console.log(error)
      );
  }

  onClick(){
      
      this.network.getReports(this.form).subscribe(
          (res: any) => {
              console.log(res);
              this.reports = res.results1;
              this.reportsTitle = res.title;
              console.log(this.reports);
              this.presentModal();
          },
          error => console.log(error)
      );
  }

  segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }

  

}
