import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/Services/auth.service';
import {  NavController,  MenuController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

 public form = {
    email: '',
    password: '',
    name:'',
    userconfirmpassword:'',
    staff:false,
    student:false,
    type:''
  };

  constructor(
    private network: AuthService,
    public navCtrl: NavController,
    public menuController:MenuController,
    public toast: ToastController,
    private router: Router,
    public storage: Storage
    ) { }

  ngOnInit() {
  }
  openSignup(){

        this.router.navigateByUrl('/login');
    }
  signupData(){
    console.log(this.form);
    if(this.form.name == '' || this.form.email == '' || this.form.password == '' || this.form.userconfirmpassword == '' || this.form.type == ''){
      this.invalidsighup();
      return false;
    }
    if(this.form.password != this.form.userconfirmpassword){
      this.confirmpasword();
      return false;
    }
    this.network.signup(this.form).subscribe((res: any)=>{
      console.log(res);
      if(res.status == 'email'){
        this.presentToastFailedemail();
      }else if(res.status == 'success'){
        this.presentToast();
        this.form = {
                      email: '',
                      password: '',
                      name:'',
                      userconfirmpassword:'',
                      staff:false,
                      student:false,
                      type:''
                    };
        this.router.navigateByUrl('/login');
      }
    })
  }

  handleResponse(data){
    
    this.presentToast();
    this.router.navigateByUrl('/login');
  }

  handleError(error){
    this.presentToastFailed();
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'You data had been submitted',
      duration: 2000
    });
    toast.present();
  }

  async presentToastFailed() {
    const toast = await this.toast.create({
      message: 'Fill the form correctly',
      duration: 2000
    });
    toast.present();
  }
  async presentToastFailedemail() {
    const toast = await this.toast.create({
      message: 'This email is already exits',
      duration: 2000
    });
    toast.present();
  }
  async invalidsighup() {
    const toast = await this.toast.create({
      message: 'Fill the all fields',
      duration: 2000
    });
    toast.present();
  }
  async confirmpasword() {
    const toast = await this.toast.create({
      message: "password & confirm password are don't match ",
      duration: 2000
    });
    toast.present();
  }

  updatetype (){
    console.log(this.form.staff);
    if(this.form.staff){
      this.form.staff = true;
      this.form.student = true;
      this.form.type = 'student';
    }else{
      this.form.staff = false;
      this.form.student = false;
      this.form.type = 'staff';
    }
  }

  updatetypestudent(){
    if(this.form.student){
      this.form.staff = true;
      this.form.student = true;
      this.form.type = 'student';
    }else{
      this.form.staff = false;
      this.form.student = false;
      this.form.type = 'staff';
    }
  }
}