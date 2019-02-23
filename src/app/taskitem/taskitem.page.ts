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
    private network: ReportServiceService,
  ) {
      
   }
  ngOnInit() {
  }

}
