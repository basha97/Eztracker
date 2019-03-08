import { Component, OnInit,Input} from '@angular/core';
import {Platform,ToastController} from '@ionic/angular';
import { AuthService } from '../../app/Service/auth.service';

@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.page.html',
  styleUrls: ['./taskupdate.page.scss'],
})
export class TaskupdatePage implements OnInit {
	public form :any = {};
	modalheight:any;
  data:any;
  studentiddata:any = '';
  studentdatedata : any = '';
  username:any = '';
	@Input()  taskdetails: any;
  @Input() loginstudentId: any;
  @Input() option: any;
  @Input() taskname: any;
  @Input() selecttask: any;
  @Input() studentid:any;
  @Input() studentdate:any;

  constructor(public platform: Platform, private network: AuthService,public toast: ToastController) { 
  	this.taskdetails = this.form.taskdetails;
    this.option = this.form.option;
    this.loginstudentId =this.form.loginstudentId;
    this.taskname =this.form.taskname;
    this.selecttask =this.form.selecttask;
    this.studentid = this.studentiddata;
    this.studentdate = this.studentdatedata;
  	 this.modalheight = platform.height();
  	 this.modalheight =  Math.round(this.modalheight/2)+'px';
  	 console.log( this.modalheight);
  }

  ngOnInit() {
  	this.form.taskdetails =this.taskdetails;
    this.form.option = this.option;
    this.form.taskname = this.taskname;
    this.form.selecttask = this.selecttask;
    this.form.loginstudentId = this.loginstudentId;
    this.studentiddata = this.studentid;
    this.studentdatedata = this.studentdate;
    console.log(this.studentiddata);
    console.log(this.form.taskdetails[this.studentiddata].result[this.studentdatedata]);
    this.data = this.form.taskdetails[this.studentiddata].result[this.studentdatedata];
    this.username = this.form.taskdetails[this.studentiddata].result[this.studentdatedata].name;
    // for (var i = 0; i <Object.keys(this.form.taskdetails).length; i++) {
      
    // }
   
     console.log(this.form.taskdetails);
     console.log(this.form.option);
    // console.log(this.form.loginstudentId);
    // console.log(this.form.taskname);
    // console.log(this.form.selecttask);
    // console.log(this.studentiddata);
    // console.log(this.studentdatedata);
  	 
  }

  updatecolour(optkey){
    this.form.taskdetails[this.studentiddata].result[this.studentdatedata].changed[optkey] ='yes';
     console.log(this.form.taskdetails[this.studentiddata].result[this.studentdatedata].changed[optkey] ='yes');
  }

  savedata(){
       console.log(this.form);
    this.network.studentdataupdate(this.form).subscribe((res:any)=>{
      console.log(res);
      this.form.taskdetails = res.taskDetails;
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
