import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customerId !: string;

  deleteCustomerResponse !: Object;
  constructor(private activatedRoute : ActivatedRoute,private customerService : CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.customerId = data['id'];
    });

    
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customerId).subscribe(data=>{
      this.deleteCustomerResponse = data;

      console.log(this.deleteCustomerResponse);

    });


  }
}
