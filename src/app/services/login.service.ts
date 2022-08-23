import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private payload : any;
  constructor(private http: HttpClient) { }

  setPayload(payload : any){
    this.payload = payload;
  }

  getPayload(){
    return this.payload;
  }

  /**
   * Checking validity of crendetials
   * @returns Observable with a JSON boolean
   */
  checkUser(){
    const url = 'http://localhost:8080/login';
    return this.http.post<any>(url, this.payload, {observe: 'body', responseType: 'json'})
  }
}