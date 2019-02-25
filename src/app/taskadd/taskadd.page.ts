import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController  }  from '@ionic/angular';
import { NewtaskPage } from '../newtask/newtask.page';
import { AuthService } from '../../app/Service/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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
		costdetails:'',
		revenuedetails:'',
		startdate:new Date().toISOString(),
		enddate:new Date().toISOString(),
		selectstudent:[],
		optionsList: [],
		revenue:[{
            start:'0',
            end:'70',
            colour:'#dd2f2e7a',type:'revemue'},
            {
            start:'71',
            end:'95',
            colour:'#ffce00c4',type:'revemue'},
            {
            start:'96',
            end:'100',
            colour:'#56c35691',type:'revemue'}],
            cost:[{
            start:'0',
            end:'70',
            colour:'#56c35691',type:'cost'},
            {
            start:'71',
            end:'95',
            colour:'#ffce00c4',type:'cost'},
            {
            start:'96',
            end:'100',
            colour:'#dd2f2e7a',type:'cost'}]
	}
	taskname:string;
    color:any = [
	 'color-one',
	 'color-two',
	 'color-three',
	 'color-four',
	 'color-five' 
	 ]
	 students:any = [
	 ];
	 optionlistdata: any =[];
	 alternativename:any = [];
	
	constructor(public modalCtrl : ModalController,  private network: AuthService, public toast: ToastController,private router: Router,public storage: Storage,) { }

	ngOnInit() {
		this.network.getsudent().subscribe((res: any) => {
			console.log(res);
			this.students = res.data;
			this.optionlistdata = res.option;
		});
	}
	savetask(){

		console.log(this.form);
		console.log(this.form.studentList);
		if( this.form.groupname == ''  || this.form.taskname == '' || this.form.startdate == '' || this.form.enddate == ''){
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

		let optionName = 'Alpa';
		for(let i=0; i<this.optionlistdata.length;i++){
			if(this.form.optionsList.list == this.optionlistdata[i].id){
				optionName = this.optionlistdata[i].value;
			}
		}
		this.form.optionsList.push({
			taskName: this.taskname,
			lists: this.form.optionsList.list,
			optionName:optionName
		})
		this.taskname = '';
		console.log(this.form.optionsList);
	}
	closedata(){
		this.router.navigateByUrl('/home');
	}

	updateStudentSelection(){
		this.alternativename = '';
		this.form.studentList = [];
		for(let i = 0; i < this.students.length; i++){
			if(this.form.selectstudent.indexOf(this.students[i].id.toString()) != -1)
			{  
				let temp = {};
				
			    temp  = {fullname: this.students[i].fullname, id: this.students[i].id,alternative:this.alternativename}
			   console.log( this.students[i].fullname);
			   this.form.studentList.push(temp);
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
