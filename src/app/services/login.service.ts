import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private payload : any;
  constructor() { }

  setPayload(payload : any){
    this.payload = payload;
  }

  checkUser(){
    // TODO: get 200 from mongo
    return true;
  }
}
