import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //@ViewChild('dialog') oDialog: ElementRef;
  private currentUrlPath;
  public expanded: boolean = true;

  // sideNavs Array defines side navigation from shell bar
  sideNavs: Array<Sidenav> = [
    {
      label: 'Home',
      icon: 'home',
      navigation: 'home',
      selected: true
    },
    {
      label: 'Plain Grid List',
      icon: 'grid',
      navigation: 'gridlist',
      selected: false
    },
    {
      label: 'Grid List In Panel',
      icon: 'grid',
      navigation: 'panelgridlist',
      selected: false
    }
  ]
  
  constructor(private location:Location) {
    this.currentUrlPath = this.location.path().split("/");
    for (var value of this.sideNavs) {
      value.selected = (value.navigation == this.currentUrlPath[1]) ? true: false;
    }
  }
  
  ngOnInit(){ }

  clickMenu($event){
    this.expanded = $event.expanded
    //console.log($event)
  }

  clickSideNav($event){ 
    for (var value of this.sideNavs) {
      value.selected = (value.navigation == $event.navigation) ? true: false;
    }
  }

}

interface Sidenav {
  label: string;
  icon: string;
  navigation: string;
  selected: boolean;
}