import { Component, OnInit } from '@angular/core';

// declare var $:any;

export const ROUTES = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isNotMobileMenu(){
      return false;
  }
}
