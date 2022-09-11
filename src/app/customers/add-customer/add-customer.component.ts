import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerResponse : any;
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }

  addCustomer(form: NgForm){
    let customerObj = {
      firstName : form.value.firstName,
      lastName : form.value.lastName,
      emailAddress : form.value.emailAddress,
      phoneNumber : form.value.phoneNumber,
      dateOfBirth : form.value.dateOfBirth,
      department : form.value.department
    };

    console.log(customerObj);

    this.customerService.addCustomer(customerObj).subscribe(data=>{
      this.addCustomerResponse = data;
      this.addCustomerResponse = this.addCustomerResponse.message;
      console.log(this.addCustomerResponse);

    });

  }
}
