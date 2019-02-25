import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {

  @Input()  optionsList: any;
  @Input() studentList: any;

  constructor(navParams: NavParams, public modalCtrl: ModalController, public toast: ToastController) {
  	console.log(this.optionsList);
  		console.log(this.studentList);

   }

  ngOnInit() {
  		console.log(this.optionsList);
  		console.log(this.studentList);
  }
  saveoption(){
      let process: boolean = true;
    this.optionsList.forEach((v, i) => {
        console.log(v.options)
        this.studentList.forEach((w, j) => {
            console.log(w)
            console.log(w.hasOwnProperty(v.taskName));
            if(w.hasOwnProperty(v.taskName)) {
                if(w[v.taskName].length == 0) {
                   this.optionrequire();
                    process = false;
                }
            } else {
               this.optionrequire();
                process = false;
            }
        })
    });

    // proceed only if validation passes
    if(process) {
        console.log('validation passed'); 
        this.modalCtrl.dismiss({
            optionsList: this.studentList,
        });
    } else {
        console.log('Validation failed')
    }
  }

  closedata(){
    this.modalCtrl.dismiss();
  }
  async optionrequire() {
        const toast = await this.toast.create({
            message: 'please Fill the fields and submit',
            cssClass: "toast",
            duration: 8000
        });
        toast.present();
    }

}
