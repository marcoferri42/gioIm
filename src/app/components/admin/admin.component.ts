import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{
  admin = false;
  payload =  {
    pw : "",
    usr : ""
  }

  constructor(public loginService : LoginService, private router: Router) { }

  onClick(){
    /**
     *     this.loginService.setPayload(this.payload);
    this.payload =  {
      pw : "",
      usr : ""
    }
    this.loginService.checkUser().subscribe((data : any) => this.admin = data);
    console.log(this.admin);
     */
    this.admin = !this.admin; 
  }

  welcome(){
    this.router.navigate(['/home'])
  }

}
