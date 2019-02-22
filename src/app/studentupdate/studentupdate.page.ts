import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../app/Services/auth.service';
import { Platform, Events ,ActionSheetController,IonSelect,ToastController} from '@ionic/angular';
@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.page.html',
  styleUrls: ['./studentupdate.page.scss'],
})
export class StudentupdatePage implements OnInit {
  @ViewChild('selectedtask') selectRef:IonSelect;
  @ViewChild('seletedtaskname') selectname:IonSelect;

  form: any = {
   selecttask:'daily',
    taskname: '',
    taskdetails:[],
    option:[],
    loginstudentId:'',
    startDate: '',

  }
  taskNames:any='';


  todayDate: string = new Date().toISOString();
  constructor( private network: AuthService, private ac: ActionSheetController,public events: Events,public toast: ToastController) { 
    this.selecttask('first');

  }

  ngOnInit() {

  }
  selecttask(type="not"){
   this.network.taskame(this.form.selecttask).subscribe((res:any)=>{
    this.taskNames = res.data;
      if(type == 'first'){
        setTimeout(() => {
          this.form.taskname = ''+this.taskNames[0].id;
          this.form.startDate = this.todayDate;
          console.log(this.form);
          this.studentdata();
        }, 500);
      }else{
        setTimeout(() => {
          this.selectname.open();
        }, 500);
      }
      console.log(res.data);
    });
  }
  openSelect(){

    this.selectRef.open();
  }

  closeSelect(){

    this.selectname.open();
  }

  studentdata(){
   this.network.tasksavedata(this.form).subscribe((res:any)=>{
    console.log(res);
    this.form.taskdetails = res.taskDetails;
    this.form.option = res.options;
      this.form.loginstudentId = res.loginstudentId;
      console.log(this.form.option);
    })
  }

  studentupdate(){
    console.log(this.form);
    this.network.studentdataupdate(this.form).subscribe((res:any)=>{
      console.log(res);
      this.presentToastFailed();
    })
  }

  async presentToastFailed() {
        const toast = await this.toast.create({
            message: 'Status Updated successfully',
            duration: 2000
        });
        toast.present();
    }
}