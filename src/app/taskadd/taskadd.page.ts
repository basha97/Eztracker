import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController  }  from '@ionic/angular';
import { NewtaskPage } from '../newtask/newtask.page';
import { AuthService } from '../../app/Service/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-taskadd',
    templateUrl: './taskadd.page.html',
    styleUrls: ['./taskadd.page.scss'],
})
export class TaskaddPage implements OnInit {
    errorgreater = '';
    errorthirdvalue = '';
    form :  any = {
        studentList: [],
        trackecode: '',
        groupname:'',
        taskname:'',
        costdetails:'',
        selecttask:'',
        weekly:'',
        monthly:'',
        revenuedetails:'',
        staffdataId:'',
        startdate:new Date().toISOString(),
        enddate:new Date().toISOString(),
        selectstudent:[],
        optionsList: [],
        days : [
        {
            "day": "Monday",
            "dayNum": "1"
        },{
            "day": "Tuesday",
            "dayNum": "2"
        },{
            "day": "Wednesday",
            "dayNum": "3"
        },{
            "day": "Thursday",
            "dayNum": "4"
        },{
            "day": "Friday",
            "dayNum": "5"
        },{
            "day": "Saturday",
            "dayNum": "6"
        },{
            "day": "Sunday",
            "dayNum": "7"
        }
        ],
        day :[
        { 
            "date": "1"
        }, { 
            "date": "2"
        },  { 
            "date": "3"
        } ,  { 
            "date": "4"
        },  { 
            "date": "5"
        },  { 
            "date": "6"
        },  { 
            "date": "7"
        },  { 
            "date": "8"
        },  { 
            "date": "9"
        },  { 
            "date": "10"
        },  { 
            "date": "11"
        },  { 
            "date": "12"
        },  { 
            "date": "13"
        },  { 
            "date": "14"
        },  { 
            "date": "15"
        },  { 
            "date": "16"
        },  { 
            "date": "17"
        },  { 
            "date": "18"
        },  { 
            "date": "19"
        },  { 
            "date": "20"
        },  { 
            "date": "21"
        },  { 
            "date": "22"
        },  { 
            "date": "23"
        },  { 
            "date": "24"
        },  { 
            "date": "25"
        },  { 
            "date": "26"
        },  { 
            "date": "27"
        },  { 
            "date": "28"
        },  { 
            "date": "29"
        },  { 
            "date": "30"
        }
        ],
        revenue:[],

        cost:[]
    }
    taskname:string;
    color:any = [
    'color-one',
    'color-two',
    'color-three',
    'color-four',
    'color-five' 
    ]
    students:any = [
    ];
    optionlistdata: any =[];
    alternativename:any = [];


    constructor(public modalCtrl : ModalController,  private network: AuthService, public toast: ToastController,private router: Router,public storage: Storage,) { }

    ngOnInit() {
        this.network.getsudent().subscribe((res: any) => {
            console.log(res);
            this.students = res.data;
            this.optionlistdata = res.option;
        });

    }
    async startvalue() {
        const toast = await this.toast.create({
            message: 'Start value is greater than end value in Revenue',
            cssClass: "toast",
            duration: 8000
        });
        toast.present();
    }
    async startvaluecost() {
        const toast = await this.toast.create({
            message: 'Start value is greater than end value in Cost',
            cssClass: "toast",
            duration: 8000
        });
        toast.present();
    }
    savetask(){

        this.storage.get('userinfo').then((val)=>{

            this.form.staffdataId = val.id;
            console.log(val.id);
            console.log(this.form);
            console.log(this.form.studentList);
            if( this.form.groupname == ''  || this.form.taskname == '' || this.form.startdate == '' || this.form.enddate == '' || this.form.selecttask == '' || this.form.studentList.length < 1 || this.form.optionsList.length < 1){
                this.invalidtask();
                return false;
            }
            var ps, pe = 0;
            var pss,pee =0;
            var flag = true;
            console.log(this.form.revenue)
            // this.startvalue();
            for (var i = 0; i < this.form.revenue.length; i++) {
                var start = parseInt(this.form.revenue[i].start);
                var end = parseInt(this.form.revenue[i].end);
                if(i == 0) {
                    ps = start;
                    pe = end;
                    if(start > end) {
                        console.log(start);
                        console.log(end);
                        flag = false;
                        this.errorgreater  = "Start value is greater than end value";

                        this.startvalue();
                        console.log(this.errorgreater);
                        return false;
                    }

                } 
                else if(i== 1) {

                    pss = start;
                    pee = end;

                    if(start <= pe || start > end) {

                        // console.log(pe);
                        flag = false;
                        this.endvaluerevenue();
                        this.errorthirdvalue ="please fill the correct value2";
                        console.log(this.errorthirdvalue);
                        //this.endvalue();
                        // c/onsole.log(this.errorthirdvalue);
                        return false;
                    }
                }
                else{
                    console.log(start);
                    console.log(end);
                    console.log(pe);

                    if(start <= pee || start > end) {
                        // console.log(start);
                        // console.log(end);
                        // console.log(pe);
                        flag = false;
                        this.errorthirdvalue ="please fill the correct value3";
                        this.endvaluerevenue();
                        console.log(this.errorthirdvalue);
                        //this.endvalue();
                        // c/onsole.log(this.errorthirdvalue);
                        return false;
                    }
                }
                // console.log(i);
                // console.log(this.form.revenue[i].start);
            }
            var cs, ce = 0;
            var css,cee =0;
            var flag1 = true;
            console.log(this.form.cost)
            // this.startvalue();
            for (var i = 0; i < this.form.cost.length; i++) {
                var start1 = parseInt(this.form.cost[i].start);
                var end1 = parseInt(this.form.cost[i].end);
                if(i == 0) {
                    cs = start1;
                    ce = end1;
                    if(start1 > end1) {
                        console.log(start1);
                        console.log(end1);
                        flag1 = false;
                        this.errorgreater  = "Start value is greater than end value";

                        this.startvaluecost();
                        console.log(this.errorgreater);
                        return false;
                    }

                } 
                else if(i== 1) {
                    console.log(start1);
                    console.log(end1);
                    console.log(ce);
                    css = start1;
                    cee = end1;
                    if(start1 <= ce || start1 > end1) {

                        flag1 = false;
                        this.endvaluercost();
                        this.errorthirdvalue ="please fill the correct value2";
                        console.log(this.errorthirdvalue);

                        return false;
                    }
                }
                else{

                    if(start1 <= cee || start1 > end1) {
                        // console.log(start);
                        // console.log(end);
                        // console.log(pe);
                        flag1 = false;
                        this.errorthirdvalue ="please fill the correct value3";
                        this.endvaluercost();
                        console.log(this.errorthirdvalue);

                        return false;
                    }
                }

            }

            this.network.addtask(this.form).subscribe((res: any)=>{
                console.log(res);
            })
            this.presentToastFailed();
        });
}
            revenueData(){
    console.log("testing");
    this.form.revenue = [{
        start:'0',
        end:'70',
        colour:'#dd2f2e7a',type:'revemue'},
        {
            start:'71',
            end:'95',
            colour:'#ffce00c4',type:'revemue'},
            {
                start:'96',
                end:'100',
                colour:'#56c35691',type:'revemue'}];
            }
            costData(){
                this.form.cost = [{
                    start:'0',
                    end:'70',
                    colour:'#56c35691',type:'cost'},
                    {
                        start:'71',
                        end:'95',
                        colour:'#ffce00c4',type:'cost'},
                        {
                            start:'96',
                            end:'100',
                            colour:'#dd2f2e7a',type:'cost'}]
                        }
                        addoption(e){
                            console.log(this.taskname);
                            let optionName = 'Alpa';
                            for(let i=0; i<this.optionlistdata.length;i++){
                                if(this.form.optionsList.list == this.optionlistdata[i].id){
                                    optionName = this.optionlistdata[i].value;
                                }
                            }
                            this.form.optionsList.push({
                                taskName: this.taskname,
                                lists: this.form.optionsList.list,

                                optionName:optionName
                            })
                            this.taskname = '';
                            console.log(this.form.optionsList);
                        }
                        closedata(){
                            this.router.navigateByUrl('/home');
                        }
                        updateStudentSelection(){
                            this.alternativename = '';
                            this.form.studentList = [];
                            for(let i = 0; i < this.students.length; i++){
                                if(this.form.selectstudent.indexOf(this.students[i].id.toString()) != -1)
                                {  
                                    let temp = {};

                                    temp  = {fullname: this.students[i].fullname, id: this.students[i].id,alternative:this.alternativename}
                                    console.log( this.students[i].fullname);
                                    this.form.studentList.push(temp);
                                    console.log(this.form.studentList);
                                }
                            }
                        }
                        removeoption(index){
                            this.form.optionsList.splice(index,1);
                        }
                        async presentToastFailed() {
                            const toast = await this.toast.create({
                                message: 'task Created successfully',
                                duration: 2000
                            });
                            toast.present();
                        }
                        async invalidtask() {
                            const toast = await this.toast.create({
                                message: 'please Fill the fields and login',
                                cssClass: "toast",
                                duration: 8000
                            });
                            toast.present();
                        }

                        async endvaluerevenue() {
                            const toast = await this.toast.create({
                                message: 'Please Fill the condition Correctly in Revenue',
                                cssClass: "toast",
                                duration: 8000
                            });
                            toast.present();
                        }
                        async endvaluercost() {
                            const toast = await this.toast.create({
                                message: 'Please Fill the condition Correctly in cost',
                                cssClass: "toast",
                                duration: 8000
                            });
                            toast.present();
                        }
                        async addtask(){
                            const modal = await this.modalCtrl.create({
                                component: NewtaskPage,
                                componentProps: { 
                                    optionsList: this.form.optionsList,
                                    studentList :this.form.studentList
                                }
                            });

                            modal.present();

                            const { data } = await modal.onDidDismiss();
                            console.log(data)
                        }
                    }
