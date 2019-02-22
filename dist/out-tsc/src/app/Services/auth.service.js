var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ConfigService } from '../../app/config.service';
var AuthService = /** @class */ (function () {
    function AuthService(http, storage, confiq) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.confiq = confiq;
        this.host = 'http://ezlearnapp.test/api';
        this.storage.get('token').then(function (val) {
            _this.jwt = val;
        });
    }
    AuthService.prototype.login = function (data) {
        return this.http.post(this.host + "/login", data);
    };
    AuthService.prototype.signup = function (data) {
        return this.http.post(this.host + "/signup", data);
    };
    AuthService.prototype.getsudent = function () {
        return this.http.get(this.host + "/getstudent");
    };
    AuthService.prototype.addtask = function (data) {
        return this.http.post(this.host + "/admintrackersave", { data: data });
    };
    AuthService.prototype.logout = function (data) {
        return this.http.post(this.host + "/logout", data, this.confiq.getHeaders());
    };
    AuthService.prototype.taskame = function (data) {
        return this.http.post(this.host + "/gettask", { data: data });
    };
    AuthService.prototype.tasksavedata = function (data) {
        return this.http.post(this.host + "/tasksavedata", { data: data });
    };
    AuthService.prototype.studentdataupdate = function (data) {
        return this.http.post(this.host + "/studentupdate", { data: data });
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Storage, ConfigService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map