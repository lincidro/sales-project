import { SalesPerson } from './../sales-person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Luis', 'Arias', 'larias@test.com', 50000),
    new SalesPerson('Mario', 'Perez', 'mperez@test.com', 40000),
    new SalesPerson('Laura', 'Loza', 'lloza@test.com', 20000),
    new SalesPerson('Rodrigo', 'Peña', 'rpena@test.com', 60000),
  ];

  constructor() { }

  ngOnInit() {
  }

}
