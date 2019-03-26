import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSelect , LoadingController, AlertController, ToastController  } from '@ionic/angular';
import { ReportServiceService } from 'src/app/Service/report-service.service';
import { AdminReportModalPage } from '../Modal/admin-report-modal/admin-report-modal.page';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
	selector: "app-admin-report",
	templateUrl: "./admin-report.page.html",
	styleUrls: ["./admin-report.page.scss"]
})
export class AdminReportPage implements OnInit {
	// @ViewChild('selectedtask') selectRef:IonSelect;
	// @ViewChild('selectedstudent') selectstudent:IonSelect;
	// @ViewChild('selectedtaskname') selectname:IonSelect;
	// @ViewChild('selectedoption') selectoption:IonSelect;

	taskTypes = ["Daily", "Weekly", "Monthly"];
	taskNames = [{}];
	taskOptions = [{}];
	reports = [{}];
	reportsTitle = "";
	stuName = [{}];
	stuName_alias = [{}];
	_code: any;
	loading: any;
	form: any = {
		taskType: "",
		taskName: "",
		taskOption: "",
		studentName: "",
		startDate: new Date().toISOString(),
		endDate: new Date(
			new Date().getTime() + 6 * 24 * 60 * 60 * 1000
		).toISOString(),
		dateRange: ""
	};

	constructor(
		public loadingController: LoadingController,
		private network: ReportServiceService,
		public modal: ModalController,
		public auth: AuthService,
		private storage: Storage,
		private alertController: AlertController,
		public toast: ToastController
	) {}

	ionViewDidEnter() {
		this.storage.get("userinfo").then(result => {
			this._code = result.id;
			console.log(this._code);
		});
	}

	ngOnInit() {}

	async presentLoading() {
		this.loading = await this.loadingController.create({
			message: "wait. . ."
		});
		return await this.loading.present();
	}

	async presentModal() {
		const modal = await this.modal.create({
			component: AdminReportModalPage,
			componentProps: {
				value: this.reports,
				title: this.reportsTitle
			}
		});
		return await modal.present();
	}

	fetchTasks() {
		this.presentLoading();
		this.network.getTaskName_admin(this.form.taskType).subscribe(
			(res: any) => {
				this.taskNames = res.data;
				this.loadingController.dismiss();
			},
			error => console.log(error)
		);
	}

	fetchOptions() {
		this.presentLoading();
		this.network.getoptions(this.form.taskName).subscribe(
			(res: any) => {
				this.taskOptions = res.data;
				this.loadingController.dismiss();
				this.network.getStudent(this.form.taskName).subscribe((res: any) => {
					console.log(res);
					this.stuName = res.data;
					this.stuName_alias = res.name_alias;
				});

				console.log(this.taskOptions);

				console.log(this.form.dateRange);
			},
			error => console.log(error)
		);
	}

	async validation_toast() {
		const toast = await this.toast.create({
			message: "All fields are required",
			cssClass: "primary",
			duration: 3000
		});
		toast.present();
	}

	fetchstudent() {
		this.presentLoading();
		this.network.getStudent(this.form.taskName).subscribe((res: any) => {
			console.log(res);
			this.loadingController.dismiss();
		});
	}

	onClick() {
		this.presentLoading();
		console.log(this.form);
		if (
			this.form.taskType == "" ||
			this.form.taskName == "" ||
			this.form.taskOption == "" ||
			this.form.startDate == "" ||
			this.form.endDate == ""
		) {
			this.validation_toast();
			return false;
		}
		this.network.getreportcon_view(this.form).subscribe(
			(res: any) => {
				console.log(res);
				this.loadingController.dismiss();
				this.reports = res.results;
				console.log(this.reports);
				this.presentModal();
			},
			error => console.log(error)
		);
	}
}
