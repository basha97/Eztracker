import { Component, OnInit, Input } from '@angular/core';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-report-modal1',
  templateUrl: './admin-report-modal1.page.html',
  styleUrls: ['./admin-report-modal1.page.scss'],
})
export class AdminReportModal1Page implements OnInit {
  @Input() info: any[];

  reports : any[];

  viewType: any[];

  student: any[];

  loadingChild: boolean = false;

  constructor(
      private modal: ModalController,
      private network: ReportServiceService
      ) { 
      
  }

  ngOnInit() {
      this.reports = this.info;
      console.log(this.reports);
      this.network.getStudent().subscribe();
  }

  closeModal(){
      this.modal.dismiss();
  }

  toggleSection(i) {
      this.reports[i].open = !this.reports[i].open;
  }

  toggleItem(i, j) {
      this.reports[i].records[j].open = !this.reports[i].records[j].open;
  }

  segmentChanged(e) {
      this.changeView(e.detail.value);
      console.log(this.changeView);
  }

  changeView(type){

      this.viewType = type;
      console.log(this.viewType);
      
      if(type == 'list'){
          this.reports = this.info;
          console.log(this.reports);
      }else if(type == 'consolidated') {
          console.log('consolated');
      } else {
          console.log('Not match');
      }
  }
}
