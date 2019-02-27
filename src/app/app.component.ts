import { Component } from '@angular/core';

import { Platform, Events, ToastController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../app/login/login.page';
import { HomePage } from '../app/home/home.page';
import { Router } from '@angular/router';
import { AuthService } from '../app/Service/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    username:string = 'App User';
    userId:any;
    rootPage: '/home';
    firstmenu:any= [
    {
        title: 'Home',
        url: '/home',
        icon: 'home'
    },{
        title: 'Tracker',
        url: '/studentupdate',
        icon: 'list'
    },
    {
        title: 'Report',
        url: '/student-report',
        icon: 'more'
    }
    ];
    secondmenu:any = [
    {
        title: 'Home',
        url: '/home',
        icon: 'home'
    },
    {
        title: 'Add Tracker',
        url: '/taskadd',
        icon: 'list'
    },
    {
        title: 'Report ',
        url: '/admin-report',
        icon: 'more'
    },
    {
        title: 'Report Consolidated view',
        url: '/admin-report-con-view',
        icon: 'more'
    }
    ];
    public appPages = [
    {
        title: 'Home',
        url: '/home',
        icon: 'home'
    },
    {
        title: 'List',
        url: '/list',
        icon: 'list'
    },
    {
        title: 'login',
        url: '/login',
        icon: 'bookmark'
    },
    {
        title: 'signup',
        url: '/signup',
        icon: 'list'
    },
    {
        title: 'addtask',
        url: '/taskadd',
        icon: 'list'
    }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public storage: Storage,
        private router: Router,
        private network: AuthService,
        private menuController: MenuController,
        public event: Events,
        public toast: ToastController,
        public alertController: AlertController
        ) {
        this.initializeApp();
        this.storage.get('userinfo').then((val) => {
            console.log(val);
            if(val) {
                console.log(val.type);
                this.username = val.full_name;
                if(val.type == 'student'){
                    this.appPages = this.firstmenu;
                }else{
                    this.appPages = this.secondmenu;
                }
            }
        });
        // storage.get('token').then((val) => {
        //     console.log(val);
        //     if(val){
        //         this.router.navigateByUrl('/home');
        //     }else{
        //         this.router.navigateByUrl('/login');
        //     }
        // });

        this.event.subscribe('user:loggedIn', (type: string) => {

            this.appPages = (type == 'student') ? this.firstmenu : this.secondmenu;
        });

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

        });
    }

    logout(){
        this.presentAlertConfirm();
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Are you sure to Logout',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                }
                }, {
                        text: 'Logout',
                        handler: () => {
                        console.log('Confirm Okay');
                            this.storage.get('token').then((val)=>{
                                this.userId= val;
                                console.log(this.userId);
                                //this.router.navigateByUrl('/home');
                            })
                            this.network.logout(this.userId).subscribe((res: any) => {
                                console.log(res);
                                this.storage.clear().then(() => {
                                    console.log('all keys cleared');
                                    this.router.navigateByUrl('/login');
                                });
                            })
                        }
                    }
            ]
        });
    
        await alert.present();
      }

    
}
