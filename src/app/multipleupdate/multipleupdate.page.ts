import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../app/Service/auth.service';
import { MultipleupdatemodalPage } from '../multipleupdatemodal/multipleupdatemodal.page';
import { Storage } from '@ionic/storage';
import { Platform, Events ,ActionSheetController,IonSelect,ToastController,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-multipleupdate',
  templateUrl: './multipleupdate.page.html',
  styleUrls: ['./multipleupdate.page.scss'],
})
export class MultipleupdatePage implements OnInit {
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
  constructor( private network: AuthService, private ac: ActionSheetController,public events: Events,public toast: ToastController, public storage: Storage,public modalCtrl : ModalController) { 
    this.selecttask('first');

  }

  ngOnInit() {

  }
  selecttask(type="not"){
    this.storage.get('userinfo').then((val)=>{
      this.form.userdataId = val.userLink;
      console.log(this.form.userdataId);
      this.network.taskameyaxis(this.form).subscribe((res:any)=>{
        if(res.status == true){
          this.taskNames = res.data;
          if(type == 'first'){
            setTimeout(() => {
              this.form.taskname = ''+this.taskNames[0].id;
              this.form.startDate = this.todayDate;
              console.log(this.form);
              //this.studentdata();
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
      this.network.tasksavedatamultiple(this.form).subscribe((res:any)=>{
        console.log('received')
        if(res.status == 'failed'){
          console.log(res.msg);
          this.errordate = res.msg;
          this.form.taskdetails =[];
          this.form.option = [];
          return false;
        }else if(res.status == 'success'){
          console.log('success')
          console.log(res);
          this.form.taskdetails = res.taskDetails;
          this.form.option = res.options;
          this.form.loginstudentId = res.loginstudentId;
          this.errormessagesdate = res.statuserror;
          console.log('calling')
          this.addtaskdata();

          this.errordate="";
          console.log(this.form.option);
          console.log(this.form.taskdetails);
          //this.addtaskdata();
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
  updatecolour(val,key,optkey){
    console.log(val);
    console.log(key);
    console.log(optkey);
    console.log(this.form.taskdetails[val].result[key].changed[optkey] ='yes');
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

  async addtaskdata(){


    let tempdata = {
        option:  this.form.option,
        loginstudentId :  this.form.loginstudentId,
        taskname:this.form.taskname,
        selecttask:this.form.selecttask,
        taskdetails:this.form.taskdetails
        };


    console.log('called')
    const modal = await this.modalCtrl.create({
      component: MultipleupdatemodalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: { 
        taskdetailsdata:  tempdata,
      }
    });
    console.log('presenting')
    modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data)
  }

}
