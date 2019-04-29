import { Component } from '@angular/core';

// import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-default-layout>
      
      <router-outlet></router-outlet>
    </ngx-default-layout>
  `,
})
export class PagesComponent {

  // menu = MENU_ITEMS;
}
