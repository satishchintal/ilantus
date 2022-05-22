import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DashboardConfig {
  constructor() { }
  url = 'https://msp.compactidentityqa.com';
  GET_CHART_DETAILS = (searchtype: any, fromdatetime: any, Todatetime: any): string => `${this.url}/cp/dashboard/User-Login?searchType=${searchtype}&fromDate=${fromdatetime}&toDate=${Todatetime}`;
  GET_APPLICATION_ACCESS_DETAILS = (searchtype: any, fromdatetime: any, Todatetime: any): string => `${this.url}/cp/dashboard/Application-Access?fromDate=${fromdatetime}&toDate=${Todatetime}`;
  GET_ACCESS_REQUEST_DETAILS = (searchtype: any, fromdatetime: any, Todatetime: any): string => `${this.url}/cp/dashboard/Access-Request?searchType=${searchtype}&fromDate=${fromdatetime}&toDate=${Todatetime}`;
  GET_ACCESS_REVIEW_DETAILS = (searchtype: any, fromdatetime: any, Todatetime: any): string => `${this.url}/cp/dashboard/Access-Review?searchType=${searchtype}&fromDate=${fromdatetime}&toDate=${Todatetime}`;
  GET_USERMANAGEMENT_DETAILS = (searchtype: any, fromdatetime: any, Todatetime: any): string => `${this.url}/cp/dashboard/User-Summary?searchType=${searchtype}&fromDate=${fromdatetime}&toDate=${Todatetime}`;
  GET_PASSWORD_RESET_DETAILS = (searchtype: any, fromdatetime: any, Todatetime: any): string => `${this.url}/cp/dashboard/Forgot-Password?searchType=${searchtype}&fromDate=${fromdatetime}&toDate=${Todatetime}`;
  GET_LICENSEUSAGE_DETAILS = (searchtype: any, fromdatetime: any, Todatetime: any): string => `${this.url}/cp/dashboard/License-Usages?searchType=${searchtype}&fromDate=${fromdatetime}&toDate=${Todatetime}`;
}
