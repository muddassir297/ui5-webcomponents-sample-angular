import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './components/home/home.component';
import { EmployeeDetailsComponent }      from './components/Secondary/employee-details/employee-details.component';
import { GridListComponent }      from './components/grid-list/grid-list.component';
import { GridListPanelComponent }      from './components/grid-list-panel/grid-list-panel.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent },
  { path: 'employee/:employeeId', component:  EmployeeDetailsComponent },
  { path: 'gridlist', component:  GridListComponent },
  { path: 'panelgridlist', component:  GridListPanelComponent },

  // Always in the last
  { path: '**', redirectTo:'home', pathMatch:'full'  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
