import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private CUSTUMER_BASE_URL = environment.BASE_URL + environment.CUSTOMER_BASE_ENDPOINT;


  constructor(private httpClient : HttpClient) {
  }

  addCustomer(customerObj:any){
    let url = this.CUSTUMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;

    return this.httpClient.post(url,customerObj);
  }
  getCustomers(){
    let url = this.CUSTUMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;

    return this.httpClient.get(url);
  }

  viewCustomer(id:string){
    let url = this.CUSTUMER_BASE_URL+ environment.CUSTOMER.GET_CUSTOMER_DETAILS +  id;
    return this.httpClient.get<Customer>(url);
  }

  editCustomer(id : string, customerObj:Customer){
    let url = this.CUSTUMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMERS_DETAILS + id;

    return this.httpClient.put(url,customerObj);
  }

  deleteCustomer(id:string){
    let url = this.CUSTUMER_BASE_URL + environment.CUSTOMER.DELETE_CUSTOMER_DETAILS + id;

    return this.httpClient.delete(url);
  }

  // searchCustomer(keyword){

  // }

}
