import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

	public host = 'http://ezlearnapp.test/api';

  	constructor(
		private http: HttpClient,
		public loading: LoadingController,
		public toast: ToastController
	) { }
	
	searchReports(data){
		return this.http.post(`${this.host}/login`,data);
	}

	getTaskName(){
		return this.http.get(`${this.host}/getTaskname`);
	}

	getoptions(data){
		return this.http.post(`${this.host}/getTaskoption`,{option: data});
	}

	getReports(data , code){
		return this.http.post(`${this.host}/getReport`,{report: data, stud_code: code});
	}
	
	getReportAdmin(data){
		return this.http.post(`${this.host}/getReportAdmin`,{report:data});
	}

	getDate(data){
		return this.http.post(`${this.host}/getDate`,{date: data});
	}

	getreportcon_view(data){
		return this.http.post(`${this.host}/getReportcon_view`,{report:data});
	}

	getStudent(){
		return this.http.get(`${this.host}/getstudent`);
	}

	createLoader(message = 'Loading...'){
		return this.loading.create({
		    message: 'Please wait...',
    		spinner: 'crescent',
    		duration: 2000
		});
	}

	async createToast(e, position = 'bottom', timeout = 3000) {
		const toast = await this.toast.create({
		  message: 'Invalid Credential',
		  duration: 2000
		});
		toast.present();
	}

}
