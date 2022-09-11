import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customerId !: string;
  customerDetails !: any;

  constructor(private customerService : CustomerService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.customerId = data['id'];
    });

    if(this.customerId){
      this.getCustomerDetails();
    }

  }

  getCustomerDetails(){
    this.customerService.viewCustomer(this.customerId).subscribe(data=>{
        this.customerDetails = data;
        this.customerDetails = this.customerDetails.results;
        console.log(this.customerDetails);

    })
  }
}
