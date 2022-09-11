import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

import { Customer } from 'src/app/models/customer.model'

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})

export class ListCustomersComponent implements OnInit {
  customerResults : any;
  customerList !: Customer[];
  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'emailAddress', 'phoneNumber', 'department', 'dateOfBirth', 'actions'];
  dataSource!: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getCustomerList();
  }
  constructor(private customerService : CustomerService) {

  }

  getCustomerList() {
    this.customerService.getCustomers().subscribe(data =>{
      this.customerResults = data;
      this.customerList = this.customerResults.results;

      // this.sortedData = this.customerList;
      this.dataSource = new MatTableDataSource(this.customerList);
      console.log(this.customerList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
