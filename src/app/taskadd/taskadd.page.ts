import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController  }  from '@ionic/angular';
import { NewtaskPage } from '../newtask/newtask.page';
import { AuthService } from '../../app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-taskadd',
 templateUrl: './taskadd.page.html',
 styleUrls: ['./taskadd.page.scss'],
})
export class TaskaddPage implements OnInit {
 form = {
  studentList: [],
  trackecode: '',
  groupname:'',
  taskname:'',
  startdate:new Date().toISOString(),
  enddate:new Date().toISOString(),
  selectstudent:[],
  optionsList: []
 }
 taskname:string;
    color:any = [
  'color-one',
  'color-two',
  'color-three',
  'color-four',
  'color-five' 
  ]
  students:any = [];
 constructor(public modalCtrl : ModalController,  private network: AuthService, public toast: ToastController,private router: Router,) { }

 ngOnInit() {
  this.network.getsudent().subscribe((res: any) => {
   console.log(res);
   this.students = res.data;
  });
 }
 savetask(){
  console.log(this.form);
  console.log(this.form.studentList);
  if(this.form.groupname == ''  || this.form.taskname == '' || this.form.startdate == '' || this.form.enddate == ''){
   this.invalidtask();
 return false;
  }
  this.network.addtask(this.form).subscribe((res: any)=>{
   console.log(res);
  })
   this.presentToastFailed();
 }
 addoption(e){
  console.log(this.taskname);
  this.form.optionsList.push({
   options: this.taskname
  })
  this.taskname = '';
  console.log(this.form.optionsList);
 }
 closedata(){
  this.router.navigateByUrl('/home');
 }

 updateStudentSelection(){
  this.form.studentList = [];
  for(let i = 0; i < this.students.length; i++){
   if(this.form.selectstudent.indexOf(this.students[i].id.toString()) != -1)
   {  
      console.log( this.students[i].fullname);
      this.form.studentList.push(this.students[i]);
      console.log(this.form.studentList);
   }
  }
 }
 removeoption(index){
  this.form.optionsList.splice(index,1);
 }
 async presentToastFailed() {
        const toast = await this.toast.create({
            message: 'task Created successfully',
            duration: 2000
        });
        toast.present();
    }
    async invalidtask() {
        const toast = await this.toast.create({
            message: 'please Fill the fields and login',
            cssClass: "toast",
            duration: 8000
        });
        toast.present();
    }

 async addtask(){
  const modal = await this.modalCtrl.create({
   component: NewtaskPage,
   componentProps: { 
    optionsList: this.form.optionsList,
    studentList :this.form.studentList
    }
  });
  
  modal.present();

  const { data } = await modal.onDidDismiss();
  console.log(data)
 }
}