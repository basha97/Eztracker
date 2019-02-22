import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-student-report-modal',
  templateUrl: './student-report-modal.page.html',
  styleUrls: ['./student-report-modal.page.scss'],
})
export class StudentReportModalPage implements OnInit {
    
  @Input() value: any[];
  @Input() title: any[];

  reports: any[];
  reportsTitle: any;

  automaticClose = false;

  constructor(public modal: ModalController) { 
      
  }

  ngOnInit() {
      this.reportsTitle = this.title;
      this.reports = this.value;
      console.log(this.reportsTitle);
  }

  closeModal(){
      this.modal.dismiss();
  }

  toggleSection(index){
      this.reports[index].open = !this.reports[index].open; 
      if(this.automaticClose && this.reports[index].open){
          this.reports.filter((item, itemIndex) => itemIndex != index)
          .map(item => item.open = false);
      }
  }

  toggleItem(index, childIndex){
      this.reports[index].children[childIndex].open = !this.reports[index].children[childIndex].open; 
  }

}
