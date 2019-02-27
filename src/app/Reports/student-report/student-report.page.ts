import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController,IonSelect, ToastController } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { StudentReportModalPage } from '../Modal/student-report-modal/student-report-modal.page';
import { Storage } from '@ionic/storage';


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


  taskTypes = '';
  taskNames = [{}];
  taskOptions = [{}];
  reports = [{}];
  reportsTitle = '';
  _code : any ;
  _user_id : any;
  _startDateInWords : any;
  _enDateInWords : any ;

  form: any = {
      taskType: '',
      taskName: '',
      taskOption: '',
      startDate: new Date().toISOString(),
      endDate: new  Date(new Date().getTime()+(7*24*60*60*1000)).toISOString()
  };

  constructor(
    private network: ReportServiceService,
    public modal: ModalController,
    private storage: Storage,
    public toast: ToastController) { 
    setTimeout(() => {
        this.selectRef.open();
      }, 500);
  }

  ionViewDidEnter(){
    this.storage.get('userinfo').then((result) => {
      this._code = result.userLink;
      this._user_id = result.user_id;
      console.log(result);
      console.log(this._code);
    });
  }

  ngOnInit() {
      this.network.getTasktype().subscribe(
        (res: any) => {
            this.taskTypes = res;
            console.log(this.taskTypes);
        },
        error => console.log(error)
    );
  }
  async presentModal() {
      const modal = await this.modal.create({
        component: StudentReportModalPage,
        componentProps: { 
              value: this.reports,
              title: this.reportsTitle,
              sDAte: this._startDateInWords,
              eDate: this._enDateInWords
          }
      });
      return await modal.present();
    }

  fetchTasks() {

      this.network.getTaskName(this.form.taskType,this._code).subscribe(
          (res: any) => {
              console.log(res);
              if(res.status == true){
                this.taskNames = res.data;
                setTimeout(() => {
                  this.selectoption.open();
                }, 600);
              }else{
                this.no_data_toast();
              } 
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
        if( this.form.taskType == ''  || this.form.taskName == '' || this.form.taskOption == ''  || this.form.startDate == '' || this.form.endDate == ''){
            this.validation_toast();
            return false;
        }
        this.network.getReports(this.form , this._code ,this._user_id).subscribe(
            (res: any) => {
              console.log(res);
              this.reports = res.results1;
              this.reportsTitle = res.title;
              this._startDateInWords = res.StartDateInWords;
              this._enDateInWords = res.EndDateInWords;
              console.log(this.reports);
              this.presentModal();
        },
            error => console.log(error)
      );
  }

  segmentChanged(ev: any) {
      console.log('Segment changed', ev);
    }

    async no_data_toast() {
			const toast = await this.toast.create({
					message: 'No data found in database',
					cssClass: "primary",
					duration: 4000
			});
			toast.present();
  }
  
  async validation_toast() {
    const toast = await this.toast.create({
        message: 'All fields are required',
        cssClass: "primary",
        duration: 3000
    });
    toast.present();
}
  

}
