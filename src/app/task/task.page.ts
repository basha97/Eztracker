import { Component, OnInit,Input} from '@angular/core';
import { ModalController, NavController, NavParams, ToastController }  from '@ionic/angular';
import { NewtaskPage } from '../newtask/newtask.page';
import { TaskupdatePage } from '../taskupdate/taskupdate.page';
import { AuthService } from '../../app/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
	public form :any = {};
    @Input()  taskdetails: any;
    @Input() loginstudentId: any;
    @Input() option: any;
    @Input() errormessagesdate: any;
    @Input() taskname: any;
    @Input() selecttask: any;


  constructor(public modalCtrl : ModalController,   private router: Router,private network: AuthService,public toast: ToastController) {
    this.taskdetails = this.form.taskdetails;
  this.option = this.form.option;
  this.loginstudentId =this.form.loginstudentId;
  this.errormessagesdate = this.errormessagesdate;
  this.taskname =this.form.taskname;
  this.selecttask =this.form.selecttask;
   }

  ngOnInit() {
   
  this.form.taskdetails =this.taskdetails;
  this.form.option = this.option;
  this.form.taskname = this.taskname;
  this.form.selecttask = this.selecttask;
  this.form.loginstudentId = this.loginstudentId;
  this.errormessagesdate = this.errormessagesdate;
    console.log(this.form.taskdetails);
    console.log(this.form.option);
    console.log(this.form.loginstudentId);
    console.log(this.form.taskname);
    console.log(this.form.selecttask);
    console.log(this.errormessagesdate);

  }
  
studentupdate(){
    console.log(this.form);
    this.network.studentdataupdate(this.form).subscribe((res:any)=>{
      console.log(res);
      this.form.taskdetails = res.taskDetails;
      this.presentToastFailed();
    })
  }

  updatecolour(val,key,optkey){
    console.log(val);
    console.log(key);
    console.log(optkey);
   console.log(this.form.taskdetails[val].result[key].changed[optkey] ='yes');
  }
  closedata(){
    this.modalCtrl.dismiss();
  }
  updatemodel(){
console.log('1');
this.addtask();
  }
  
  async presentToastFailed() {
        const toast = await this.toast.create({
            message: 'Status Updated successfully',
            duration: 2000
        });
        toast.present();
    }

    async addtask(){
      const modal = await this.modalCtrl.create({
          component: TaskupdatePage,
           cssClass: 'updateTaskModal',
          componentProps: { 
             
          }
      });

      modal.present();

      const { data } = await modal.onDidDismiss();
      console.log(data)
  }

   
}
