import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavs;
  @Input() expanded;
  @Output() pressSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handleClickSideNav(event){
    this.pressSideNav.emit({navigation: event});
  }

}
