import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{
  @Output() impulseEmitter = new EventEmitter();

  payload =  {
    pw : "",
    usr : ""
  }

  constructor(public loginService : LoginService) { }

  onClick(){
    this.loginService.setPayload(this.payload);
    this.payload =  {
      pw : "",
      usr : ""
    }
  }

}
