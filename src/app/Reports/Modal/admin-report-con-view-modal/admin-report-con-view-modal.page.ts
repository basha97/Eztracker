import { Component, OnInit, Input } from '@angular/core';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-report-con-view-modal',
  templateUrl: './admin-report-con-view-modal.page.html',
  styleUrls: ['./admin-report-con-view-modal.page.scss'],
})
export class AdminReportConViewModalPage implements OnInit {
  @Input() value: any[];
  @Input() sDate: any[];
  @Input() eDate: any[];
  @Input() taskType: any[];

    reports : any[];
    _sDate : any;
    _eDate : any;
    _taskType : any;

    constructor(
            public modal: ModalController,
            public network: ReportServiceService
        ) { }

        ngOnInit() {
            this.reports = this.value;
            this._sDate = this.sDate;
            this._eDate = this.eDate;
            this._taskType = this.taskType;
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
