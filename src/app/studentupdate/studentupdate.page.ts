import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../app/Service/auth.service';
import { Storage } from '@ionic/storage';
import {  Events ,ActionSheetController,IonSelect,ToastController} from '@ionic/angular';
@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.page.html',
  styleUrls: ['./studentupdate.page.scss'],
})
export class StudentupdatePage implements OnInit {
  @ViewChild('selectedtask') selectRef:IonSelect;
  @ViewChild('seletedtaskname') selectname:IonSelect;

  form:any = {
  	selecttask:'daily',
    taskname: '',
    taskdetails:[],
    option:[],
    loginstudentId:'',
    startDate: '',
    studentdataid:'',
    userdataId:''

  }
  taskNames:any='';
  errordate:any = '';
  errormessagesdate:any = '';


  todayDate: string = new Date().toISOString();
  constructor( private network: AuthService, private ac: ActionSheetController,public events: Events,public toast: ToastController, public storage: Storage,) { 
    this.selecttask('first');

  }

  ngOnInit() {

  }
  selecttask(type="not"){
    this.storage.get('userinfo').then((val)=>{
      this.form.userdataId = val.userLink;
      console.log(this.form.userdataId);
  	this.network.taskame(this.form).subscribe((res:any)=>{
      if(res.status == true){
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
    }else{
     this.presentToast();
      this.form ={
    selecttask:this.form.selecttask,
    taskname: '',
    taskdetails:[],
    option:[],
    loginstudentId:'',
    startDate: '',
    studentdataid:'',
    userdataId:''

  }
      console.log('no data found');
      console.log(res.data);
    }
    });
    })
  }
  openSelect(){

    this.selectRef.open();
  }

  closeSelect(){

    this.selectname.open();
  }

  studentdata(){
    this.storage.get('userinfo').then((val) => {
      console.log(val.user_id);
       this.form.studentdataid = val.user_id;
  	this.network.tasksavedata(this.form).subscribe((res:any)=>{
      if(res.status == 'failed'){
        console.log(res.msg);
        this.errordate = res.msg;
          this.form.taskdetails =[];
          this.form.option = [];
        return false;
      }else if(res.status == 'success'){
  		console.log(res);
  		this.form.taskdetails = res.taskDetails;
  		this.form.option = res.options;
      this.form.loginstudentId = res.loginstudentId;
      this.errormessagesdate = res.statuserror;
      this.errordate="";
      console.log(this.form.option);
    }
    })
     });
  }

  studentupdate(){
    console.log(this.form);
    this.network.studentdataupdate(this.form).subscribe((res:any)=>{
      console.log(res);
      this.form.taskdetails = res.taskDetails;
      this.presentToastFailed();
    })
  }
  updatecolour(key,optkey){
    console.log(key);
    console.log(optkey);
   console.log(this.form.taskdetails[0].result[key].changed[optkey] ='yes');
  }

  async presentToastFailed() {
        const toast = await this.toast.create({
            message: 'Status Updated successfully',
            duration: 2000
        });
        toast.present();
    }

      async presentToast() {
        const toast = await this.toast.create({
            message: 'Data Not Available',
            duration: 2000
        });
        toast.present();
    }

}
