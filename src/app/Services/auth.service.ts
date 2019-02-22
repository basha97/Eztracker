import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ConfigService } from '../../app/config.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	public host = 'http://ezlearnapp.test/api';
  jwt:string

  	constructor(private http: HttpClient, public storage: Storage,public confiq :ConfigService) { 
      this.storage.get('token').then((val)=>{
       this.jwt = val;
      });
    }

  	login(data){
  		return this.http.post(`${this.host}/login`,data);
  	}

  	signup(data){
  		return this.http.post(`${this.host}/signup`,data);
  	}
  	getsudent(){
  		return this.http.get(`${this.host}/getstudent`);
  	}
    addtask(data){
      return this.http.post(`${this.host}/admintrackersave`,{data:data});
    }
    logout(data){
      return this.http.post(`${this.host}/logout`,data,this.confiq.getHeaders());
    }

    taskame(data){
      return this.http.post(`${this.host}/gettask`,{data:data});
    }
    tasksavedata(data){
      return this.http.post(`${this.host}/tasksavedata`,{data:data});
    }

    studentdataupdate(data){
      return this.http.post(`${this.host}/studentupdate`,{data:data});
    }
}
