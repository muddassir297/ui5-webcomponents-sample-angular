import { Component, OnInit } from '@angular/core';
import Employees from 'src/assets/mockdata/Employees.json';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
  public Employees;
  constructor() {
    this.Employees = Employees;
   }

  ngOnInit() {
  }

}
