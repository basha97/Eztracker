import { Component, OnInit } from '@angular/core';
import { ModalController,   }  from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
	public form = {};

  constructor(public modalCtrl : ModalController,   private router: Router,) { }

  ngOnInit() {
  }
  // async addtask(){
  // 	const modal = await this.modalCtrl.create({
  //     component: NewtaskPage,
  //     componentProps: { value: 123 }
  //   });
  //   return await modal.present();
  // }

  addtask(){
    this.router.navigateByUrl('/newtask');
  }
  

   
}
