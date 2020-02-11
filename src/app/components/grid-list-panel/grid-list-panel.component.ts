import { Component, OnInit } from '@angular/core';
import Employees from 'src/assets/mockdata/Employees.json';

@Component({
  selector: 'app-grid-list-panel',
  templateUrl: './grid-list-panel.component.html',
  styleUrls: ['./grid-list-panel.component.css']
})
export class GridListPanelComponent implements OnInit {
  private Employees;
  public employeeProfileData;
  constructor() { 
    this.Employees = Employees;

    this.employeeProfileData = this.Employees.reduce((acc, d) => {
      const gridData = acc.find(a => a.Country === d.Country);
      const gridList = { FirstName: d.FirstName, LastName:d.LastName, EmployeeID: d.EmployeeID, HomePhone:d.HomePhone, ImageURI:d.ImageURI }; // the element in data property
      if (!gridData) {
        //acc.push(...gridList);
        acc.push({Country:d.Country, gridList: [gridList]}) // not found, so need to add data property
      }
      else {
        //acc.push({ Country: d.Country, gridList: [{ FirstName: d.FirstName, LastName:d.LastName }] });
        gridData.gridList.push(gridList) // if found, that means data property exists, so just push new element to found.data.
      }
      return acc;
    }, []);
   
  }

  ngOnInit() {
  }

}
