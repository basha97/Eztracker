import { Component, OnInit , Input } from '@angular/core';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-report-modal',
  templateUrl: './admin-report-modal.page.html',
  styleUrls: ['./admin-report-modal.page.scss'],
})
export class AdminReportModalPage implements OnInit {
  @Input() value: any[];

  reports : any[];

  
  
  constructor(
      public modal: ModalController,
      public network: ReportServiceService
      ) { }

      ngOnInit() {
          this.reports = this.value;
          console.log(this.reports);
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

      tonggle(data){

          if(data){
              data.show = false;
          }else{
              data.show = true;
          }

      }
  

}
