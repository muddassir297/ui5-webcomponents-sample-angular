import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { UserInputComponent } from './user-input/user-input.component';
import { ListComponent } from './list/list.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import "@ui5/webcomponents-base/src/browsersupport/Edge";
// UI5 Web Components used
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/ShellBar';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import '@ui5/webcomponents/dist/InputSuggestions';
import '@ui5/webcomponents/dist/StandardListItem';
import '@ui5/webcomponents/dist/card';
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab"; 
import "@ui5/webcomponents/dist/TabSeparator"; 

import { FundamentalNgxModule } from 'fundamental-ngx';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailsComponent } from './components/Secondary/employee-details/employee-details.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { GridListPanelComponent } from './components/grid-list-panel/grid-list-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    SideNavComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    GridListComponent,
    GridListPanelComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    FundamentalNgxModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
