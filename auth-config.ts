import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthConfig {
  constructor() { }
  url = 'https://msp.compactidentityqa.com';
 LOGIN_USERNAME = (data: any): string => `${this.url}/cp/getUser`;
 LOGIN_PASSWORD = (data: any): string => `${this.url}/cp/login`;
}
