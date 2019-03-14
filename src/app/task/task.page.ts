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
  optiontype:any = 'single';
  onestudentId:any = '';
  onestudentdate :any = '';
  colour:any = [
  'badge-primary',
  'badge-success',
  'badge-info',
  'badge-warning',
  'badge-danger',
  'badge-purple',
  'badge-pink',
  'badge-orange',
  'badge-brown',
  'badge-teal',
  'badge-inverse'
  ];
  @Input()  taskdetailsdata: any;
 


  constructor(public modalCtrl : ModalController,   private router: Router,private network: AuthService,public toast: ToastController) {
    // this.taskdetailsdata = this.form.taskdetailsdata;
    // // this.taskdetailsdata.taskdetails = this.form.taskdetails;
    // this.taskdetailsdata.options = this.form.option;
    // this.taskdetailsdata.loginstudentId = this.form.loginstudentId;
    // this.taskdetailsdata.taskname = this.form.taskname;
    // this.taskdetailsdata.selecttask = this.form.selecttask;
   
  }

  ngOnInit() {

    this.form.taskdetailsdata =this.taskdetailsdata;
    this.form.taskdetails = this.taskdetailsdata.taskdetails;
    this.form.option = this.taskdetailsdata.option;
    this.form.loginstudentId = this.taskdetailsdata.loginstudentId;
    this.form.taskname = this.taskdetailsdata.taskname;
    this.form.selecttask = this.taskdetailsdata.selecttask;
    console.log(this.form.taskdetailsdata);
    console.log(this.form.taskdetails);
    console.log(this.form.option);
    console.log(this.form.loginstudentId);
    console.log( this.form.taskname);
    console.log(this.form.selecttask);

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
  updatemodel(val,dateval){
    console.log(val);
    console.log(dateval);
    this.onestudentId = val;
    this.onestudentdate = dateval;
    this.addtask();
  }
  
  async presentToastFailed() {
    const toast = await this.toast.create({
      message: 'Status Updated successfully',
      duration: 2000
    });
    toast.present();
  }

  getcolour(){

    
    
  
  }
  optiontypes(){
    console.log(this.optiontype);
  }

  async addtask(){
    const modal = await this.modalCtrl.create({
      component: TaskupdatePage,
      cssClass: 'updateTaskModal',
      componentProps: { 
        option: this.form.option,
        taskdetails: this.form.taskdetails,
        loginstudentId:this.form.loginstudentId,
        taskname:this.form.taskname,
        selecttask:this.form.selecttask,
        studentid:this.onestudentId,
        studentdate: this.onestudentdate,
      }
    });

    modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data)
  }


}
