import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSelect , LoadingController  } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { AdminReportModalPage } from '../Modal/admin-report-modal/admin-report-modal.page';
import { AuthService } from 'src/app/Services/auth.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.page.html',
  styleUrls: ['./admin-report.page.scss'],
})
export class AdminReportPage implements OnInit {
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
  loading: any;  
  form: any = {
      taskType: '',
      taskName: '',
      taskOption: '',
      studentName: '',
      startDate:new Date().toISOString(),
      endDate:new  Date(new Date().getTime()+(7*24*60*60*1000)).toISOString()
  };

  constructor(
    public loadingController:LoadingController,
    private network: ReportServiceService,
    public modal: ModalController,
    public auth: AuthService,
    private storage: Storage) {

   
   
    setTimeout(() => {
        this.opentype();
        this.network.getStudent().subscribe((res: any) => {
            this.stuName = res.data;
            });
                
    },500);
   
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
        component: AdminReportModalPage,
        componentProps: { 
              value: this.reports,
              title: this.reportsTitle
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
              

          },
          error => console.log(error)
      );
  }

  onClick(){
      // this.presentLoading();

      this.network.getreportcon_view(this.form).subscribe(
          (res: any) => {
              console.log(res);
              this.reports = res.results;
              console.log(this.reports);
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

}
