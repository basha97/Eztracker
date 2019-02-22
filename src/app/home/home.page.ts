import { Component,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { validateConfig } from '@angular/router/src/config';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
@ViewChild('barCanvas', {read: ElementRef}) barCanvas: ElementRef;

    barChart: any;
    
    _type : any ;

    constructor(
        private router: Router,
        private storage: Storage
        ) {

      

}

ngAfterViewInit(){

        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Asia", "Africa", "Australia", "America"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
              legend: {
              display: false
          },
                scales: {
                   xAxes: [{
                  gridLines: {
                      display:true
                  }
              }],
                    yAxes: [{
                      gridLines: {
                    display:true
                },
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        });
      

}

    onClick(){
        this.storage.get('userinfo').then((result) => {
            this._type = result.type;
            console.log(this._type);

            if(this._type == 'staff'){
                this.router.navigateByUrl('admin-report');
            }
            if(this._type == 'student'){
                this.router.navigateByUrl('student-report');
            }
        });
    }

}