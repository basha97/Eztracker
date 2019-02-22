import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from '../Service/report-service.service';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.page.html',
  styleUrls: ['./taskitem.page.scss'],
})
export class TaskitemPage implements OnInit {

  task : any;

  constructor(
    private network: ReportServiceService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.network.getTaskName().subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    );
  }

  handleResponse(data){
    this.task = data.data;
    console.log(this.task);
  }

}
