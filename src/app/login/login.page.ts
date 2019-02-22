import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/Services/auth.service';
import {  NavController,  MenuController,ToastController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public form = {
		email: '',
		password: ''
	};
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private network: AuthService,
        public navCtrl: NavController,
        public menuController:MenuController,
        public toast: ToastController,
        private router: Router,
        public storage: Storage,
        public event: Events

        ) { }

    ngOnInit() {


    }
    ionViewDidEnter() {
         this.menuController.enable(false);
    }


    loginData(data){
        console.log(this.form);
        if(this.form.email == '' || this.form.password == ''){
            this.Invalidlogin();
            return false;
        } 
        this.network.login(this.form).subscribe((res: any) => {
            console.log(res);

            if(res.success == true){
                this.presentToast();
                this.storage.set('token', res.token);
                this.storage.set('userinfo', res.data);
                
                this.router.navigateByUrl('/home');
                this.event.publish('user:loggedIn', res.data.type);
                this.menuController.enable(true);
            }else{
                this.presentToastFailed();
                this.router.navigateByUrl('/login');
            }
        });
    }

    openSignup(){

        this.router.navigateByUrl('/signup');
    }

    async presentToast() {
        const toast = await this.toast.create({
            message: 'You have been login successfully',
            duration: 2000
        });
        toast.present();
    }

    async presentToastFailed() {
        const toast = await this.toast.create({
            message: 'Invalid Credential',
            cssClass: "toast",
            duration: 8000
        });
        toast.present();
    }

    async Invalidlogin() {
        const toast = await this.toast.create({
            message: 'please Fill the fields and login',
            cssClass: "toast",
            duration: 8000
        });
        toast.present();
    }

}
