import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import Employees from 'src/assets/mockdata/Employees.json';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private employeeId;
  public employee
  constructor(private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get("employeeId")
      this.employee = Employees[this.employeeId-1];
    })
  }

  goBack ($event){
    this._location.back();
    //console.log($event)
  }

}
