import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
	 jwt:string
  constructor(private http: HttpClient, public storage: Storage,) {
   this.storage.get('token').then((val)=>{
       this.jwt = val;
      });
}
getHeaders(): any {
      return {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ this.jwt
         }
      };
   }
}
