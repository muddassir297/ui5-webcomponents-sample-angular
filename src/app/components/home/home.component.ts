import { Component, OnInit } from '@angular/core';
import Employees from 'src/assets/mockdata/Employees.json';
import Suppliers from 'src/assets/mockdata/Suppliers.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees;
  public Employees;
  public Suppliers;
  public suppliers;
  constructor() { 
    this.Employees = Employees;
    this.employees = Employees.slice(0,3);
    this.Suppliers = Suppliers;
    this.suppliers = Suppliers.slice(0,3);
  }

  ngOnInit() {
    
  }

}
