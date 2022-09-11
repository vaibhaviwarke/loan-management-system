import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerId !: string;
  updateCustomerResponse : any;

  constructor(private activatedRoute : ActivatedRoute, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.customerId = data['id'];
    })
  }

  updateCustomer(form : NgForm){
    let customerObj = {
      _id : this.customerId,
      firstName : form.value.firstName,
      lastName : form.value.lastName,
      emailAddress : form.value.emailAddress,
      phoneNumber : form.value.phoneNumber,
      dateOfBirth : form.value.dateOfBirth,
      department : form.value.department
    };

    console.log(customerObj);


    this.customerService.editCustomer(this.customerId, customerObj).subscribe(data=>{
      this.updateCustomerResponse = data;
      this.updateCustomerResponse = this.updateCustomerResponse.message;

      console.log(this.updateCustomerResponse);

    });


  }

}
