import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from '../Service/report-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(
    private network: ReportServiceService
  ) { }

  ngOnInit() {
  }

  

}
